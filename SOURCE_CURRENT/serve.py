"""Local ARES host and allow-listed NASA gateway. Python standard library only."""
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from collections import defaultdict,deque
from urllib.request import Request,urlopen
from urllib.error import HTTPError
import json,os,time,argparse,threading,urllib.parse,webbrowser
ROOT=Path(__file__).resolve().parent
PUBLIC=ROOT/'viewer'/'dist'
if not PUBLIC.is_dir():PUBLIC=ROOT/'dist'
N=(PUBLIC/'nasa')
CACHE=ROOT/'.nasa_cache';LOCK=threading.Lock();RATES=defaultdict(deque)
for line in (ROOT/'.env').read_text(encoding='utf-8').splitlines() if (ROOT/'.env').exists() else []:
 if '=' in line and not line.lstrip().startswith('#'):
  k,v=line.split('=',1)
  if k.strip()=='NASA_API_KEY':os.environ.setdefault(k.strip(),v.strip().strip('\"\''))
NASA_API_KEY=os.getenv('NASA_API_KEY','') # Never sent to a browser or logged. Public providers below need no key.
PROVIDERS={
 'catalog':('https://images-api.nasa.gov/search?q=Perseverance%20Mars&media_type=image&page_size=12','catalog.json'),
 'environment':(None,'environment.json'),
 'orbit':(None,'orbit.json'),
 'trek':('https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/WMTSCapabilities.xml','trek_capabilities.xml')}
def read_json(path):return json.loads(path.read_text(encoding='utf-8'))
def fetch_catalog():
 url=PROVIDERS['catalog'][0]
 data=json.load(urlopen(Request(url,headers={'User-Agent':'ARES-Pathfinder-educational/0.3'}),timeout=7));items=[]
 for item in data['collection']['items'][:12]:
  d=item['data'][0];items.append({'title':d.get('title',''),'credit':d.get('photographer')or d.get('secondary_creator')or d.get('center','NASA'),'date':d.get('date_created',''),'nasa_id':d.get('nasa_id',''),'preview':next((i['href'] for i in item.get('links',[]) if i.get('render')=='image'),'')})
 return {'mode':'public NASA response','source':url,'items':items,'fetchedAt':time.time()}
def catalog(offline=False):
 if offline:return {**read_json(N/'catalog.json'),'mode':'bundled offline snapshot'}
 path=CACHE/'catalog.json'
 if path.exists():
  d=read_json(path)
  if time.time()-d.get('fetchedAt',0)<86400:return {**d,'mode':'server cache'}
 try:
  if offline:raise OSError('Offline mode')
  with LOCK:
   d=fetch_catalog();bundled={i['nasa_id']:i for i in read_json(N/'catalog.json')['items']};[(i.update({'local':bundled[i['nasa_id']]['local']}))for i in d['items']if i['nasa_id']in bundled];CACHE.mkdir(exist_ok=True);temp=path.with_suffix('.tmp');temp.write_text(json.dumps(d));temp.replace(path)
  return d
 except Exception:
  if path.exists():return {**read_json(path),'mode':'stale server cache','warning':'NASA unavailable; cached historical records'}
  return {**read_json(N/'catalog.json'),'mode':'bundled offline snapshot'}
def insight(offline=False):
 fallback=read_json(N/'insight.json')
 cache=CACHE/'insight.json'
 if offline or not NASA_API_KEY:return {**fallback,'mode':'bundled historical snapshot'}
 if cache.exists():
  data=read_json(cache)
  if time.time()-data.get('fetchedAt',0)<3600:return {**data,'mode':'server cache'}
 try:
  query=urllib.parse.urlencode({'api_key':NASA_API_KEY,'feedtype':'json','ver':'1.0'})
  payload=json.load(urlopen(Request('https://api.nasa.gov/insight_weather/?'+query,headers={'User-Agent':'ARES educational Mars simulation'}),timeout=8))
  data={'source':'https://api.nasa.gov/insight_weather/','mode':'authenticated NASA response','fetchedAt':time.time(),'live':False,'label':'Historical InSight archive; not live Mars weather','data':payload}
  CACHE.mkdir(exist_ok=True);cache.write_text(json.dumps(data).replace(NASA_API_KEY,'[REDACTED]'));return data
 except Exception:
  return {**(read_json(cache)if cache.exists()else fallback),'mode':'historical offline fallback','live':False}
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(PUBLIC),**kwargs)
 def log_message(self,fmt,*args):pass # no request/query/key logging
 def do_GET(self):
  path=self.path.split('?',1)[0]
  if path.startswith('/api/nasa/'):
   now=time.monotonic();q=RATES[self.client_address[0]]
   while q and now-q[0]>60:q.popleft()
   if len(q)>=30:self.send_json({'error':'Rate limit exceeded; retry in 60 seconds'},429,{'Retry-After':'60'});return
   q.append(now);name=path.removeprefix('/api/nasa/')
   if name=='status':self.send_json({'keyConfigured':bool(NASA_API_KEY),'authentication':'Public providers need no key; InSight archive refresh uses a backend key. No archived Rover Photos API dependency.','offline':self.server.offline,'cacheTTLSeconds':86400});return
   try:
    if name=='insight':self.send_json(insight(self.server.offline));return
    if name=='catalog':self.send_json(catalog(self.server.offline));return
    if name in ['environment','orbit']:self.send_json(read_json(N/PROVIDERS[name][1]));return
    if name=='trek':
     data=(N/'trek_capabilities.xml').read_bytes();self.send_response(200);self.send_header('Content-Type','application/xml');self.send_header('Content-Length',str(len(data)));self.end_headers();self.wfile.write(data);return
   except Exception:self.send_json({'error':'Provider unavailable','live':False},503);return
   self.send_json({'error':'Unknown provider'},404);return
  if any(part.startswith('.') for part in path.split('/')) or '..' in path:self.send_error(404);return
  super().do_GET()
 def send_json(self,data,status=200,headers=None):
  body=json.dumps(data).encode();self.send_response(status);self.send_header('Content-Type','application/json; charset=utf-8');self.send_header('Content-Length',str(len(body)));self.send_header('Cache-Control','private, max-age=60');self.send_header('X-Content-Type-Options','nosniff')
  for k,v in (headers or {}).items():self.send_header(k,v)
  self.end_headers();self.wfile.write(body)
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=5173);parser.add_argument('--offline',action='store_true');parser.add_argument('--open-browser',action='store_true');parser.add_argument('--presenter',action='store_true');args=parser.parse_args();server=ThreadingHTTPServer(('127.0.0.1',args.port),Handler);server.offline=args.offline;
 if args.open_browser:webbrowser.open(f'http://localhost:{args.port}/'+('?presenter=1' if args.presenter else ''))
 print(f'ARES PATHFINDER: http://localhost:{args.port}  (Ctrl+C to stop)',flush=True);server.serve_forever()
if __name__=='__main__':main()
