# Scientific data handoff

The prior user has downloaded and locally read-tested:
- `JEZ_hirise_soc_006_DTM_MOLAtopography_DeltaGeoid_1m_Eqc_latTs0_lon0_blend40.tif` — approx. 1.71 GiB, 21400 x 21488, 1 m posting, Mars equirectangular.
- `JEZ_hirise_soc_007_orthoMosaic_25cm_Ortho_blend120.tif` — approx. 3.17 GiB, 81064 x 85936, 0.25 m/pixel, Mars orthographic, different CRS from DTM.
- `mar099s.bsp`, `de442s.bsp`, `KPLLSK.txt`, `KPLPCK.txt` for potential SPICE usage, NOT yet proof of validated ephemerides.

These are on user's Windows Downloads and NOT in this package. Do not request re-download or falsely assume cloud access.

Local raster checks done: sample reads succeeded, WarpedVRT reprojection and five visual sample regions CENTER, NW, NE, SW, SE plausibly aligned. Last NE QA validity was about 97%, others about 100%; full precision landmark registration and publisher hash validation remain outstanding.

Within SOURCE_CURRENT/viewer/public/terrain/ there are 32 derived tile sets (16 center + 16 northwest), each with height array, validity, and optical images. This is sufficient to make actual NASA-inspired Jezero scenes and to build/testing scene/route logic; make no claim of full Jezero or worldwide coverage.

Never put original multi-GB GeoTIFFs in web release or Git repo. If requested, supply local Windows scripts to use raw files read-only, with proper relative paths, checksums, projection checks, and unit-aware resampling.

Scientific source details are contextual (Atlas/evidence drawer) not decorative homepage footer.
