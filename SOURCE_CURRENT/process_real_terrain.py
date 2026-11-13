"""ARES PATHFINDER: read-only USGS Jezero DTM/optical tile compiler.

Produces 3D heightfields and a raster-reprojected optical mosaic for a local viewer.
All NASA source TIFFs are opened read-only. Never asserts astronaut-safe traversal.
"""
from __future__ import annotations

import argparse
import json
import math
from datetime import datetime, timezone
from pathlib import Path

import numpy as np
from PIL import Image
import rasterio
from rasterio.enums import Resampling
from rasterio.vrt import WarpedVRT
from rasterio.windows import Window
from affine import Affine

DTM_GLOB = "JEZ_hirise_soc_006_DTM_*.tif"
OPTICAL_GLOB = "JEZ_hirise_soc_007_orthoMosaic_*.tif"
AREA_CENTERS = {"JEZERO_CENTER": (0.50, 0.50), "JEZERO_NORTHWEST": (0.25, 0.25)}


def find_one(directory: Path, pattern: str) -> Path:
    found = sorted(directory.glob(pattern))
    if len(found) != 1:
        raise RuntimeError(f"Expected exactly one {pattern} in {directory}. Found {len(found)}. Supply --dtm/--optical explicitly.")
    return found[0]


def normalize_optical(opt: np.ma.MaskedArray, output_px: int) -> tuple[np.ndarray, np.ndarray]:
    # Read uint8 optical gray. 0 is source NoData, never painted over as landscape.
    data = opt.filled(0).astype(np.uint8, copy=False)
    valid = (~np.ma.getmaskarray(opt)) & (data > 0)
    # Styling only: preserve underlying grayscale as a separate raw scientific layer.
    im = Image.fromarray(data, "L")
    image_arr = np.asarray(im)
    return image_arr, valid.astype(np.uint8)


def make_visual_style(raw_gray: np.ndarray, mask: np.ndarray) -> np.ndarray:
    # Artistically colorized approximate Martian surface; this is NOT measured color data.
    g = raw_gray.astype(np.float32) / 255.0
    # Avoid extreme contrast expansion across adjacent tiles (would create seams).
    g = np.clip((g - 0.12) / 0.77, 0.0, 1.0)
    # Brown-red rock palette designed to avoid stylized orange/cartoony oversaturation.
    rgb = np.stack([80 + 113*g, 42 + 90*g, 30 + 74*g], axis=-1)
    rgb = np.clip(rgb, 0, 255).astype(np.uint8)
    # Boundary is excluded in geometry as well. Magenta NOT used in gameplay.
    rgb[mask == 0] = (9, 12, 18)
    return rgb


def save_tile(dtm, vrt, row: int, col: int, tile_m: int, height_step: int, tex_px: int, out_dir: Path) -> dict:
    if row < 0 or col < 0 or row + tile_m >= dtm.height or col + tile_m >= dtm.width:
        raise ValueError("Tile outside usable DTM bounds")
    if tile_m % height_step:
        raise ValueError("--tile-m must be divisible by --height-step")
    n = tile_m // height_step + 1
    # Source pixel spacing 1m; exact shared border vertices avoid tile cracks.
    src_heights = dtm.read(1, window=Window(col, row, tile_m + 1, tile_m + 1), masked=True)
    src_heights = src_heights[::height_step, ::height_step]
    if src_heights.shape != (n, n):
        raise RuntimeError(f"Bad height tile shape: {src_heights.shape} expected {(n, n)}")
    height_valid = ~np.ma.getmaskarray(src_heights)
    heights = np.where(height_valid, src_heights.filled(0), 0).astype('<f4')
    (out_dir / "height.f32").write_bytes(heights.tobytes())
    (out_dir / "height_valid.u8").write_bytes(height_valid.astype('uint8').tobytes())

    # VRT outputs at tex_px pixels / tile_m metres in same DTM projection.
    # Keep data grayscale as actually observed; separate colorized art texture.
    base_s = tex_px / tile_m
    opt_window = Window(round(col*base_s), round(row*base_s), tex_px, tex_px)
    opt = vrt.read(1, window=opt_window, masked=True)
    raw, opt_valid = normalize_optical(opt, tex_px)
    Image.fromarray(raw, "L").save(out_dir / "optical_observed.png", optimize=True)
    Image.fromarray(make_visual_style(raw, opt_valid), "RGB").save(out_dir / "optical_styled.png", optimize=True)
    Image.fromarray((opt_valid * 255).astype('uint8'), "L").save(out_dir / "optical_valid.png", optimize=True)

    v = heights[height_valid]
    coverage = float(np.mean(height_valid))
    opt_coverage = float(np.mean(opt_valid))
    # Invalid 3D vertices are skipped in viewer rather than filled with fabricated Mars topography.
    return {"row": int(row), "col": int(col), "height_samples": n, "optical_size": tex_px,
            "height_coverage": round(coverage, 6), "optical_coverage": round(opt_coverage, 6),
            "min_elevation_m": round(float(v.min()), 2) if v.size else None,
            "max_elevation_m": round(float(v.max()), 2) if v.size else None}


def build(args):
    downloads = Path(args.downloads).expanduser()
    dtm_path = Path(args.dtm) if args.dtm else find_one(downloads, DTM_GLOB)
    optical_path = Path(args.optical) if args.optical else find_one(downloads, OPTICAL_GLOB)
    out = Path(args.output).expanduser().resolve()
    out.mkdir(parents=True, exist_ok=True)

    if args.tile_m % args.height_step:
        raise ValueError("--tile-m must be divisible by --height-step")
    if args.tex_px not in (256, 512, 1024):
        raise ValueError("--tex-px must be one of 256, 512, 1024")
    if args.tile_m <= 0 or args.tiles_side < 1:
        raise ValueError("Invalid tile geometry")
    region_size = args.tile_m * args.tiles_side
    if not args.areas:
        raise ValueError("Provide at least one area")
    unknown = set(args.areas) - set(AREA_CENTERS)
    if unknown:
        raise ValueError(f"Unknown areas: {sorted(unknown)}")

    with rasterio.open(dtm_path) as dtm, rasterio.open(optical_path) as src_opt:
        if dtm.count != 1 or src_opt.count != 1 or dtm.crs is None or src_opt.crs is None:
            raise RuntimeError("Expected single-band GeoTIFFs with declared planetary CRS")
        if not np.isclose(abs(dtm.transform.a), 1.0) or not np.isclose(abs(dtm.transform.e), 1.0):
            raise RuntimeError("This processor assumes the official 1m Jezero DTM grid. Not validated for other rasters.")
        if abs(dtm.transform.b) > 1e-7 or abs(dtm.transform.d) > 1e-7:
            raise RuntimeError("Rotated DTM grids are not currently supported")
        if region_size + 2 > min(dtm.width, dtm.height):
            raise RuntimeError("Requested area does not fit in DTM")
        # VRT uses a *common DTM CRS* at tex_px / tile_m pixels per metre.
        scale = args.tex_px / args.tile_m
        virtual_transform = dtm.transform * Affine.scale(1 / scale, 1 / scale)
        with WarpedVRT(src_opt, crs=dtm.crs, transform=virtual_transform,
                       width=math.ceil(dtm.width*scale), height=math.ceil(dtm.height*scale),
                       resampling=Resampling.bilinear, src_nodata=src_opt.nodata, nodata=0) as vrt:
            manifest = {
                "schema_version": 1, "generated_utc": datetime.now(timezone.utc).isoformat(),
                "scientific_status": "NASA/USGS sourced files; visual alignment preliminary; NOT flight certified",
                "dtm_filename": dtm_path.name, "optical_filename": optical_path.name,
                "dtm_crs": dtm.crs.to_wkt(), "optical_crs": src_opt.crs.to_wkt(),
                "render_style": "optical_styled.png artistically colorized; optical_observed.png original grayscale resampled into DTM CRS",
                "height_reference": "Source DTM values retained; vertical datum from USGS product metadata, not standardized here",
                "tile_m": args.tile_m, "height_step_m": args.height_step,
                "tex_px": args.tex_px, "tiles_side": args.tiles_side,
                "regions": []
            }
            for name in args.areas:
                center_c, center_r = AREA_CENTERS[name]
                col0 = max(0, min(dtm.width - region_size - 1, round(dtm.width*center_c - region_size / 2)))
                row0 = max(0, min(dtm.height - region_size - 1, round(dtm.height*center_r - region_size / 2)))
                col0 = (col0 // args.tile_m) * args.tile_m
                row0 = (row0 // args.tile_m) * args.tile_m
                region = {"id": name, "display_name": name.replace("_", " ").title(),
                          "origin_row": row0, "origin_col": col0, "width_m": region_size, "height_m": region_size,
                          "tiles": []}
                print(f"Processing {name}, from DTM pixel [{row0},{col0}]", flush=True)
                for ty in range(args.tiles_side):
                    for tx in range(args.tiles_side):
                        od = out / name / f"tile_{tx}_{ty}"
                        od.mkdir(parents=True, exist_ok=True)
                        try:
                            tile = save_tile(dtm, vrt, row0 + ty * args.tile_m, col0 + tx * args.tile_m,
                                             args.tile_m, args.height_step, args.tex_px, od)
                        except Exception as exc:
                            raise RuntimeError(f"Failed {name} tile ({tx},{ty}): {exc}") from exc
                        tile.update({"tx": tx, "ty": ty, "path": f"{name}/tile_{tx}_{ty}"})
                        region["tiles"].append(tile)
                        print(f"  [{tx+1},{ty+1}] {tile['height_coverage']*100:.1f}% valid height / {tile['optical_coverage']*100:.1f}% valid optical", flush=True)
                manifest["regions"].append(region)
            (out / 'manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
            print(f"\nCOMPLETE: {out / 'manifest.json'}", flush=True)
            print('NASA originals untouched. Open viewer with START_VIEWER_WINDOWS.bat', flush=True)
    return manifest


def cli():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--downloads', default=str(Path.home()/'Downloads'))
    ap.add_argument('--dtm', default=None)
    ap.add_argument('--optical', default=None)
    ap.add_argument('--output', default='viewer/public/terrain')
    ap.add_argument('--tile-m', type=int, default=256)
    ap.add_argument('--tiles-side', type=int, default=4)
    ap.add_argument('--height-step', type=int, default=2)
    ap.add_argument('--tex-px', type=int, default=512)
    ap.add_argument('--areas', nargs='+', default=['JEZERO_CENTER','JEZERO_NORTHWEST'])
    args = ap.parse_args()
    build(args)

if __name__ == '__main__':
    cli()
