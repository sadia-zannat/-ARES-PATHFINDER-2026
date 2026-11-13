// Interactive spatial AUDIO engine. All built-in sounds are synthesized original effects.
// Official NASA Mars WAV/MP3 can optionally be installed locally at public/audio/nasa_mars_wind.mp3;
// absent that file, no downloaded NASA recording is falsely represented.
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export class MarsAudio{
 constructor(){this.ctx=null;this.enabled=false;this.master=.3;this.mode='helmet';this.storm=0;this.vehicle=false;this.outdoor=false;this.wind=null;this.windGain=null;this.helmetGain=null;this.engine=null;this.engineGain=null;this.engineOsc=null;this.roverPan=null;this.recording=null;this.recordingGain=null;this.nasaLoaded=false;}
 async start(){if(!this.ctx){this.ctx=new (window.AudioContext||window.webkitAudioContext)();this.initSoundscape();}await this.ctx.resume();this.enabled=true;this.windGain.gain.setTargetAtTime(.07,this.ctx.currentTime,.2);
  // Optional local NASA recording; never use a network/CDN dependency in the offline game.
  if(!this.nasaLoaded && window.ARES_NASA_AUDIO_PATH){this.nasaLoaded=true;fetch(window.ARES_NASA_AUDIO_PATH).then(r=>r.ok?r.arrayBuffer():null).then(b=>b?this.ctx.decodeAudioData(b):null).then(audio=>{
   if(!audio||!this.ctx)return;const s=this.ctx.createBufferSource();s.buffer=audio;s.loop=true;const g=this.ctx.createGain();g.gain.value=.055*this.master;s.connect(g).connect(this.ctx.destination);s.start();this.recording=s;this.recordingGain=g;
  }).catch(()=>{});}
 }
 initSoundscape(){const c=this.ctx;
  const noise=c.createBuffer(1,c.sampleRate*5,c.sampleRate);const channel=noise.getChannelData(0);let state=19317;
  for(let i=0;i<channel.length;i++){state=(1664525*state+1013904223)>>>0;channel[i]=(state/2147483648-1)*.78}
  this.wind=c.createBufferSource();this.wind.buffer=noise;this.wind.loop=true;
  const air=c.createBiquadFilter();air.type='lowpass';air.frequency.value=380;
  const windHigh=c.createBiquadFilter();windHigh.type='highpass';windHigh.frequency.value=55;
  this.windGain=c.createGain();this.windGain.gain.value=0;this.wind.connect(air).connect(windHigh).connect(this.windGain).connect(c.destination);this.wind.start();
  this.helmetGain=c.createGain();this.helmetGain.gain.value=0;const helmet=c.createBiquadFilter();helmet.type='lowpass';helmet.frequency.value=100;
  const helmetAir=c.createBufferSource();helmetAir.buffer=noise;helmetAir.loop=true;helmetAir.connect(helmet).connect(this.helmetGain).connect(c.destination);helmetAir.start();
  this.engineOsc=c.createOscillator();this.engineOsc.type='sawtooth';this.engineOsc.frequency.value=42;const engineFilter=c.createBiquadFilter();engineFilter.type='lowpass';engineFilter.frequency.value=170;
  this.engineGain=c.createGain();this.engineGain.gain.value=0;this.roverPan=c.createStereoPanner();this.engineOsc.connect(engineFilter).connect(this.engineGain).connect(this.roverPan).connect(c.destination);this.engineOsc.start();
 }
 tone(hz=440,duration=.1,type='sine',amount=.12,startAt=0){if(!this.enabled||!this.ctx)return;const now=this.ctx.currentTime+startAt,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(hz,now);g.gain.setValueAtTime(Math.max(.00001,amount*this.master),now);g.gain.exponentialRampToValueAtTime(.0001,now+duration);o.connect(g).connect(this.ctx.destination);o.start(now);o.stop(now+duration+.025)}
 clickNoise(duration=.1,pitch=250,amount=.2){if(!this.enabled||!this.ctx)return;const c=this.ctx,osc=c.createOscillator(),g=c.createGain(),filter=c.createBiquadFilter();osc.type='triangle';osc.frequency.setValueAtTime(pitch,c.currentTime);osc.frequency.exponentialRampToValueAtTime(Math.max(40,pitch*.37),c.currentTime+duration);filter.type='lowpass';filter.frequency.value=800;g.gain.setValueAtTime(amount*this.master,c.currentTime);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+duration);osc.connect(filter).connect(g).connect(c.destination);osc.start();osc.stop(c.currentTime+duration+.01)}
 cue(type){switch(type){case'step':this.clickNoise(.09,94,.13);break;case'alert':this.tone(510,.2,'sawtooth',.26);this.tone(350,.23,'triangle',.15,.22);break;case'success':this.tone(510,.16,'sine',.16);this.tone(720,.18,'sine',.14,.17);this.tone(960,.3,'sine',.13,.34);break;case'scan':this.tone(720,.23,'sine',.14);break;case'rover':this.clickNoise(.22,115,.18);break;case'drill':this.clickNoise(.42,175,.19);break;case'wind':this.tone(72,.7,'sawtooth',.09);break;case'radio':this.tone(840,.08,'square',.07);this.tone(550,.1,'square',.07,.11);break;case'impact':this.clickNoise(.28,100,.28);break;default:this.tone(390,.09,'sine',.13)}}
 setMode(mode){this.mode=mode;this.outdoor=mode==='outside';if(this.enabled)this.cue('scan')}
 update({stage=0,rover=false,moving=false,storm=0,playerX=0,roverX=0,distance=20,oxygen=100}={}){if(!this.ctx||!this.enabled)return;const c=this.ctx,t=c.currentTime;this.storm=clamp(storm,0,1);
  const isHelmet=this.mode!=='outside';const gain=this.master;
  this.windGain.gain.setTargetAtTime((.05+this.storm*.22)*(isHelmet?.35:1)*gain,t,.12);
  this.helmetGain.gain.setTargetAtTime((isHelmet?.095:.01)*gain*(oxygen<25?1.6:1),t,.3);
  this.engineGain.gain.setTargetAtTime((rover&&moving?.23:.01)*gain*Math.max(.07,1-distance/220),t,.13);
  this.engineOsc.frequency.setTargetAtTime(rover&&moving?57:32,t,.1);
  this.roverPan.pan.setTargetAtTime(clamp((roverX-playerX)/35,-1,1),t,.3);
  if(this.recordingGain)this.recordingGain.gain.setTargetAtTime((.016+this.storm*.04)*(isHelmet?.45:1)*gain,t,.4);
 }
 suspend(){if(!this.ctx)return;this.windGain?.gain.setTargetAtTime(0,this.ctx.currentTime,.05);this.engineGain?.gain.setTargetAtTime(0,this.ctx.currentTime,.05);this.ctx.suspend()}
 resume(){if(this.enabled)this.ctx?.resume()}
}
