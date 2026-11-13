from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.request import urlopen
from urllib.parse import quote
import hashlib,json
P=Path(__file__).resolve().parent;orig=P/'originals';out=P.parent/'viewer/public/assets';orig.mkdir(exist_ok=True);out.mkdir(exist_ok=True)
models=['Z2 Spacesuit','Mars 2020 Perseverance Rover','Ingenuity Mars Helicopter','Robonaut 2','Habitat Demonstration Unit (part 1)']
jobs=[]
for name in models:
 folder='Habitat Demonstration Unit' if name.startswith('Habitat') else name
 url='https://raw.githubusercontent.com/nasa/NASA-3D-Resources/master/3D%20Models/'+quote(folder)+'/'+quote(name+'.glb')
 jobs.append((url,orig/(name+'.glb'),'NASA 3D Resources','NASA educational / informational media usage guidelines'))
for name in ['aerial_rocks_02','rock_face_03']:
 for kind in ['diff','nor_gl','rough']:
  jobs.append((f'https://dl.polyhaven.org/file/ph-assets/Textures/jpg/2k/{name}/{name}_{kind}_2k.jpg',orig/f'{name}_{kind}.jpg','Poly Haven / Rob Tuytel','CC0'))
jobs.append(('https://www.nasa.gov/wp-content/uploads/2024/05/scam-mic-sol001-run001.wav',orig/'nasa_sol1.wav','NASA/JPL-Caltech/LANL/CNES/CNRS/ISAE-Supaero','NASA media usage guidelines'))
def get(item):
 url,p,credit,license=item
 for attempt in range(2):
  try:
   if not p.exists():p.write_bytes(urlopen(url,timeout=45).read())
   data=p.read_bytes();print('ASSET',p.name,len(data),flush=True)
   return {'file':p.name,'url':url,'credit':credit,'license':license,'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data)}
  except Exception as e:
   if attempt: return {'file':p.name,'url':url,'error':str(e)}
with ThreadPoolExecutor(8) as pool:records=list(pool.map(get,jobs))
(P/'download_sources.json').write_text(json.dumps(records,indent=2))
from PIL import Image,ImageOps,ImageEnhance
for p in orig.glob('*.jpg'):
 im=Image.open(p);im.thumbnail((2048,2048))
 if '_diff' in p.name:im=ImageOps.colorize(im.convert('L'),(37,23,18),(171,125,87))
 im.save(out/(p.stem+'.webp'),'WEBP',quality=93 if '_nor_' in p.name else 88)
