"""Offline synthetic raster smoke test (not a NASA source validation)."""
import json
import tempfile
from pathlib import Path
from argparse import Namespace
import numpy as np
import rasterio
from affine import Affine
from rasterio.enums import Resampling
import sys
sys.path.insert(0,str(Path(__file__).resolve().parent.parent))
from process_real_terrain import build


def test_small_alignment():
    with tempfile.TemporaryDirectory() as td:
        base=Path(td)
        d=base/'test_dtm.tif';o=base/'test_optical.tif';out=base/'out'
        n=192
        y,x=np.mgrid[0:n,0:n]
        dem=(-2000+45*np.sin(x/19)+13*np.cos(y/17)).astype('float32')
        dem[0:5,0:5]=-9999
        opt_y,opt_x=np.mgrid[0:4*n,0:4*n]
        opt=(np.clip(70+34*np.sin(opt_x/76)+20*np.cos(opt_y/68),1,255)).astype('uint8')
        opt[:20,:20]=0
        with rasterio.open(d,'w',driver='GTiff',width=n,height=n,count=1,dtype='float32',crs='EPSG:3857',transform=Affine(1,0,1000,0,-1,2000),nodata=-9999) as dst:dst.write(dem,1)
        with rasterio.open(o,'w',driver='GTiff',width=4*n,height=4*n,count=1,dtype='uint8',crs='EPSG:3857',transform=Affine(.25,0,1000,0,-.25,2000),nodata=0) as dst:dst.write(opt,1)
        m=build(Namespace(downloads=td,dtm=str(d),optical=str(o),output=str(out),tile_m=32,tiles_side=2,height_step=2,tex_px=256,areas=['JEZERO_CENTER','JEZERO_NORTHWEST']))
        assert len(m['regions'])==2
        for region in m['regions']:
            assert len(region['tiles'])==4
            for tile in region['tiles']:
                p=out/tile['path']
                assert (p/'height.f32').stat().st_size==(32//2+1)**2*4
                assert (p/'optical_observed.png').stat().st_size>20
        assert (out/'manifest.json').exists()
    print('PASS: synthetic raster alignment / height binary / textures / manifest')


if __name__=='__main__':test_small_alignment()
