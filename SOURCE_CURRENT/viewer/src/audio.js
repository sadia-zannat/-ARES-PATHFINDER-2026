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

export class SpatialMarsAudio extends MarsAudio{
 constructor(settings){super();this.settings=settings;this.events=[];this.recorded=null;this.musicAt=0}
 async start(){await super.start();this.master=this.settings.master;this.mode=this.settings.mode;this.applyMix()}
 applyMix(){if(!this.ctx)return;this.master=this.settings.master;this.mode=this.settings.mode}
 spatial(type,p,amount=.16){if(!this.enabled||!this.ctx)return;let c=this.ctx,t=c.currentTime,o=c.createOscillator(),g=c.createGain(),f=c.createBiquadFilter(),pan=c.createPanner(),hz={scan:790,step:95,drill:165,repair:230,relay:570,rover:65,drone:150,impact:80}[type]||390;o.type=['drill','rover','drone'].includes(type)?'sawtooth':'triangle';o.frequency.setValueAtTime(hz,t);o.frequency.exponentialRampToValueAtTime(hz*.55,t+.15);f.type='lowpass';f.frequency.value=this.mode==='outside'?800:440;pan.panningModel='HRTF';pan.distanceModel='inverse';pan.refDistance=1.5;pan.maxDistance=90;pan.rolloffFactor=1.7;pan.positionX.value=p.x;pan.positionY.value=p.y;pan.positionZ.value=p.z;g.gain.setValueAtTime(amount*this.master*(this.settings.vehicle??.5)*(this.mode==='helmet'?.3:1),t);g.gain.exponentialRampToValueAtTime(.0001,t+.24);o.connect(f).connect(g).connect(pan).connect(c.destination);o.start();o.stop(t+.25);o.onended=()=>{o.disconnect();f.disconnect();g.disconnect();pan.disconnect()};this.events.push({type,time:t,position:{x:p.x,y:p.y,z:p.z}});if(this.events.length>300)this.events.shift()}
 listener(camera){if(!this.ctx)return;let p=camera.position,e=camera.matrixWorld.elements,l=this.ctx.listener;for(let[k,v]of[['positionX',p.x],['positionY',p.y],['positionZ',p.z],['forwardX',-e[8]],['forwardY',-e[9]],['forwardZ',-e[10]],['upX',e[4]],['upY',e[5]],['upZ',e[6]]])if(l[k])l[k].value=v}
 cue(type){let original=this.master;this.master=original*(type==='radio'?(this.settings?.radio??.7):(this.settings?.ui??.6));super.cue(type);this.master=original;this.events.push({type,kind:'authored helmet / UI',time:this.ctx?.currentTime||0});if(this.events.length>300)this.events.shift()}
 update(s){super.update(s);if(!this.ctx)return;let t=this.ctx.currentTime;this.windGain.gain.setTargetAtTime((.015+(s.storm||0)*.08)*this.master*this.settings.environment*(this.mode==='outside'?1:.18),t,.2);this.helmetGain.gain.setTargetAtTime((this.mode==='helmet'?.06:.003)*this.master*this.settings.suit*(1+.15*Math.sin(t*.8)),t,.3);this.engineGain.gain.setTargetAtTime((s.rover&&s.moving?.15:0)*this.master*this.settings.vehicle,t,.2);if(this.mode==='cinematic'&&t-this.musicAt>4){this.musicAt=t;for(let n of[110,164.81,220])this.tone(n,3.5,'sine',.025*this.settings.music)}}
 async historical(){if(!this.ctx)await this.start();if(this.recorded){this.recorded.stop();this.recorded=null;return false}let bytes=await fetch('./assets/nasa_sol1.mp3').then(r=>{if(!r.ok)throw Error('Historical recording unavailable');return r.arrayBuffer()}),b=await this.ctx.decodeAudioData(bytes),s=this.ctx.createBufferSource(),g=this.ctx.createGain();s.buffer=b;g.gain.value=this.master*.55;s.connect(g).connect(this.ctx.destination);s.start();s.onended=()=>{this.recorded=null;s.disconnect();g.disconnect()};this.recorded=s;return true}
}
