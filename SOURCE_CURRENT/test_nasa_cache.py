import unittest,tempfile,pathlib,time,json
import serve
class CacheTests(unittest.TestCase):
 def test_cached_response_expires_and_recovers_from_outage(self):
  with tempfile.TemporaryDirectory()as temp:
   before=serve.CACHE;serve.CACHE=pathlib.Path(temp);old=serve.fetch_catalog
   try:
    def fixture():return {**serve.read_json(serve.N/'catalog.json'),'mode':'public NASA response','fetchedAt':time.time()}
    serve.fetch_catalog=fixture;d=serve.catalog(False);self.assertEqual(d['mode'],'public NASA response')
    def unavailable():raise OSError('deliberate provider outage')
    serve.fetch_catalog=unavailable;self.assertEqual(serve.catalog(False)['mode'],'server cache')
    p=serve.CACHE/'catalog.json';data=json.loads(p.read_text());data['fetchedAt']=time.time()-90000;p.write_text(json.dumps(data));self.assertEqual(serve.catalog(False)['mode'],'stale server cache');self.assertEqual(serve.catalog(True)['mode'],'bundled offline snapshot')
   finally:serve.CACHE=before;serve.fetch_catalog=old
 def test_public_live_provider_probe(self):
  try:d=serve.fetch_catalog()
  except Exception as e:self.skipTest('Live public NASA endpoint unavailable in this environment: '+type(e).__name__)
  self.assertGreater(len(d['items']),0)
if __name__=='__main__':unittest.main(verbosity=2)
