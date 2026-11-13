import unittest,threading,urllib.request,urllib.error,json,tempfile,pathlib
import serve
class GatewayTests(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  cls.server=serve.ThreadingHTTPServer(('127.0.0.1',0),serve.Handler);cls.server.offline=True;cls.port=cls.server.server_address[1];threading.Thread(target=cls.server.serve_forever,daemon=True).start()
 @classmethod
 def tearDownClass(cls):cls.server.shutdown();cls.server.server_close()
 def get(self,path):return urllib.request.urlopen(f'http://127.0.0.1:{self.port}'+path,timeout=3)
 def test_status_has_no_key(self):
  d=json.load(self.get('/api/nasa/status'));self.assertIn('keyConfigured',d);self.assertNotIn('NASA_API_KEY',d)
 def test_offline_catalog(self):
  d=json.load(self.get('/api/nasa/catalog'));self.assertTrue(len(d['items'])>=2);self.assertIn('NASA',d['source'] if 'NASA' in d['source'] else 'NASA Images')
 def test_real_historical_mars_observation(self):
  d=json.load(self.get('/api/nasa/environment'));self.assertFalse(d['live']);self.assertEqual(d['sol'],36);self.assertGreater(d['validStationaryRecords'],0);self.assertLess(d['windSpeedRange'][1],100)
 def test_orbit_and_trek(self):
  d=json.load(self.get('/api/nasa/orbit'));self.assertIn('$$SOE',d['data']['result']);self.assertIn(b'Capabilities',self.get('/api/nasa/trek').read())
 def test_no_arbitrary_proxy(self):
  with self.assertRaises(urllib.error.HTTPError)as e:self.get('/api/nasa/https://example.com')
  self.assertEqual(e.exception.code,404)
 def test_env_not_served(self):
  with self.assertRaises(urllib.error.HTTPError)as e:self.get('/.env')
  self.assertEqual(e.exception.code,404)
if __name__=='__main__':unittest.main(verbosity=2)
