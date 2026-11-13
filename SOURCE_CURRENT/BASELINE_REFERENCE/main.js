import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {CREW,MISSIONS,newMission,performMissionAction,canAdvance} from './missions.js';
import {astar,gridFromHeight,routeStats} from './router.js';
import {MarsAudio} from './audio.js';
import {challengeFor} from './challenges.js';
import {createRegolithNormal, createRock, makeFlag, makePanel} from './visual_detail.js';
import {makeStageProp,animateStageProp} from './stage_props.js';


window.__THREE_FOR_ARES__=THREE; const $=id=>document.getElementById(id), audio=new MarsAudio();
const scene=new THREE.Scene(),renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance',preserveDrawingBuffer:false});
renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;$('canvas-root').appendChild(renderer.domElement);
const camera=new THREE.PerspectiveCamera(54,innerWidth/innerHeight,.15,7200),orbit=new OrbitControls(camera,renderer.domElement);orbit.enableDamping=true;orbit.maxPolarAngle=Math.PI/2.02;orbit.minDistance=2.4;orbit.maxDistance=1800;orbit.enablePan=false;
scene.add(new THREE.HemisphereLight(0xffe7d3,0x59382d,1.45));const sun=new THREE.DirectionalLight(0xffdfb8,3.3);sun.position.set(-220,330,-370);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-290;sun.shadow.camera.right=290;sun.shadow.camera.top=290;sun.shadow.camera.bottom=-290;sun.shadow.bias=-.0002;scene.add(sun);
const ground=new THREE.Group(),decor=new THREE.Group(),characters=new THREE.Group(),markers=new THREE.Group();scene.add(ground,decor,characters,markers);
const mat=(color,metalness=.12,roughness=.78)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
const mats={rock:mat('#70554a'),rock2:mat('#a7775b'),metal:mat('#8c9792',.8,.3),dark:mat('#29343b',.72,.36),suit:mat('#ece7d9',.25,.48),visor:mat('#1d2730',.65,.16),orange:mat('#dc7f48',.3,.4),light:new THREE.MeshBasicMaterial({color:'#84e6fa'}),blue:mat('#588fa1',.6,.4)};
let manifest=null,region=null,regionId='JEZERO_CENTER',page='home',mission=null,route=null,terrainGrid=null,baseElev=0,loadToken=0,focusObject=null,player=null,rover=null,drone=null,skyDome=null,styleMode='styled',homeScene=true;
let playerPos=new THREE.Vector3(0,0,0),playerHeading=0,footstepTick=0,jumpVelocity=0,verticalOffset=0,choiceOpen=false,worldDistance=0,missionTargets=[],targetIndex=0,showRoute=true;
let panoramaAngle=0,panoramaPrev=null;let nextMinimapDraw=0;let timePrev=performance.now(),runPressed=false,crouch=false,moveVector=new THREE.Vector2(),joystick=new THREE.Vector2(),cameraYaw=0;
let terrainNormal=null, sunDisc=null, minimapTextures=[], navTrail=null, lastTrailAt=0, weatherIntensity=0, lastTrailStep=-1, towPayload=null, dustCloud=null; const keys=new Set();const minictx=$('mini').getContext('2d');
function showError(message){$('error').hidden=false;$('error').textContent=String(message);console.error(message)}
function groupClear(g){while(g.children.length){const child=g.children[0];g.remove(child);child.traverse?.(x=>{x.geometry?.dispose();if(x.userData.dynamicMaterial){if(Array.isArray(x.material))x.material.forEach(m=>m.dispose());else x.material?.dispose()}})}}
function shape(geo,material,parent,position,scale){const o=new THREE.Mesh(geo,material);if(position)o.position.set(...position);if(scale)o.scale.set(...scale);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o}
function box(parent,x,y,z,w,h,d,material){return shape(new THREE.BoxGeometry(w,h,d),material,parent,[x,y,z])}
function cyl(parent,x,y,z,r1,r2,h,material,segments=12){return shape(new THREE.CylinderGeometry(r1,r2,h,segments),material,parent,[x,y,z])}
function glow(parent,x,y,z,r=.5){const l=new THREE.PointLight('#88e8ef',2,14);l.position.set(x,y,z);parent.add(l);return shape(new THREE.SphereGeometry(r,12,8),mats.light,parent,[x,y,z])}
function makeRover(){
 const root=new THREE.Group(), shell=new THREE.MeshPhysicalMaterial({color:0xddd4c2,metalness:.48,roughness:.48}),dark=mat('#172127',.62,.46),rubber=mat('#191a1b',.02,.96),orange=mat('#ac5d36',.52,.52);
 box(root,0,1.58,0,4.3,.95,2.45,shell);box(root,0,2.17,.08,3.3,.3,1.9,dark);box(root,0,2.38,.1,2.9,.16,1.55,shell);
 for(const x of [-1.55,1.55]){box(root,x,2.49,0,.12,.15,2.35,orange);box(root,x,2.16,0,.13,.15,2.35,orange)}
 for(const z of [-1.35,1.35]){box(root,0,1.6,z,4.6,.44,.12,orange);box(root,0,1.94,z,3.6,.11,.12,dark)}
 const wheels=[];for(const x of [-1.65,0,1.65])for(const z of [-1.61,1.61]){
  box(root,x,.9,z,1.1,.2,.18,shell);const pivot=new THREE.Group();pivot.position.set(x,.69,z);root.add(pivot);
  const tyre=cyl(pivot,0,0,0,.67,.67,.4,rubber,32);tyre.rotation.x=Math.PI/2;
  for(let j=0;j<15;j++){const a=j*Math.PI*2/15;const tread=box(pivot,Math.cos(a)*.67,Math.sin(a)*.67,0,.28,.095,.49,dark);tread.rotation.z=a}
  const hub=cyl(pivot,0,0,0,.3,.3,.48,orange,20);hub.rotation.x=Math.PI/2;
  wheels.push(pivot);
 }
 const mast=new THREE.Group();root.add(mast);mast.position.set(.55,2.45,-.3);
 cyl(mast,0,.43,0,.12,.16,.85,shell,14);box(mast,0,.95,0,1.06,.43,.53,dark);
 for(const x of [-.30,.30]){const lens=cyl(mast,x,.95,-.3,.17,.17,.10,mats.visor,28);lens.rotation.x=Math.PI/2;glow(mast,x,1,-.38,.035)}
 for(const x of [-1.2,1.2]){box(root,x,2.18,1.4,1.2,.07,1.6,mat('#233b50',.65,.24))}
 root.userData={wheels,mast};return root;
}
function makeDrone(){
 const root=new THREE.Group(),body=mat('#d4cbb9',.42,.44),dark=mat('#252c33',.5,.32);
 shape(new THREE.SphereGeometry(.6,24,16),body,root,[0,0,0],[1.7,.45,.9]);
 box(root,0,-.21,-.42,.7,.28,.35,dark);
 const rotors=[];for(const x of [-1.55,1.55])for(const z of [-1.26,1.26]){
  const span=box(root,x/2,.1,z/2,.10,.10,Math.hypot(x,z)*1.25,body);span.rotation.y=Math.atan2(x,z);
  const post=cyl(root,x,.21,z,.08,.11,.46,body,12);
  const spin=new THREE.Group();spin.position.set(x,.47,z);root.add(spin);
  for(let k=0;k<3;k++){const blade=box(spin,.8,.0,0,1.5,.038,.13,dark);blade.rotation.y=k*2*Math.PI/3;}
  rotors.push(spin)
 }
 for(const x of [-.40,.40]){box(root,x,-.35,.2,.11,.57,.11,body)}
 root.userData.rotors=rotors;return root;
}
function makeAlpha(){const root=new THREE.Group();box(root,0,.48,0,1.75,.55,1.35,mats.dark);for(const z of [-.85,.85])for(const x of [-.64,.64]){const w=cyl(root,x,.38,z,.4,.4,.36,mats.metal);w.rotation.x=Math.PI/2}const arm=new THREE.Group();arm.position.set(0,.95,0);root.add(arm);cyl(arm,0,.4,0,.14,.2,.8,mats.metal);const upper=box(arm,0,1.08,0,.28,.95,.28,mats.orange);box(arm,.16,1.68,0,.7,.14,.25,mats.metal);root.userData.arm=arm;return root}
function makeAstronaut(name='Sadia'){
 // Suit is a detailed procedural placeholder. A licensed rigged character is still needed for photoreal final quality.
 const root=new THREE.Group(),accent=name==='Sadia'?'#53a8ab':name==='Leon'?'#d2834d':name==='Amelia'?'#ccaf68':name==='Noor'?'#af7653':name==='Orion'?'#8495a8':'#596b75';
 const cloth=new THREE.MeshPhysicalMaterial({color:0xd6cbbd,roughness:.88,metalness:.08}),panel=mat('#efeee4',.25,.54),trim=mat(accent,.42,.52),rubber=mat('#252a2b',.28,.8),glass=new THREE.MeshPhysicalMaterial({color:0x1b2e35,metalness:.52,roughness:.12,clearcoat:1,clearcoatRoughness:.08});
 shape(new THREE.CapsuleGeometry(.36,.58,8,18),cloth,root,[0,1.43,0],[1.08,1,0.75]);
 box(root,0,1.43,.31,.52,.61,.17,rubber);box(root,0,1.59,-.36,.64,.68,.24,panel);
 for(const x of [-.22,.22]){box(root,x,1.83,-.02,.08,.14,.57,trim);box(root,x,1.14,-.02,.15,.20,.35,trim)}
 shape(new THREE.SphereGeometry(.405,36,24),panel,root,[0,2.11,0],[1,1.02,.95]);
 shape(new THREE.SphereGeometry(.315,36,24),glass,root,[0,2.14,-.15],[1.13,.83,.85]);
 const collar=cyl(root,0,1.82,0,.36,.31,.15,rubber,24);
 const belt=cyl(root,0,1.04,0,.37,.37,.16,rubber,20);
 for(const x of [-.45,.45]){shape(new THREE.SphereGeometry(.19,18,12),trim,root,[x,1.72,0]);}
 const limbs=[];
 for(const x of [-.46,.46]){const arm=new THREE.Group();arm.position.set(x,1.66,0);root.add(arm);shape(new THREE.CapsuleGeometry(.14,.43,6,16),cloth,arm,[0,-.35,0]);
  shape(new THREE.SphereGeometry(.16,16,12),rubber,arm,[0,-.65,-.02]);box(arm,0,-.78,-.04,.21,.21,.2,trim);limbs.push(arm)}
 for(const x of [-.19,.19]){const leg=new THREE.Group();leg.position.set(x,1.03,0);root.add(leg);shape(new THREE.CapsuleGeometry(.16,.44,6,16),cloth,leg,[0,-.43,0]);
  cyl(leg,0,-.79,0,.18,.16,.22,trim,16);shape(new THREE.BoxGeometry(.32,.19,.55),rubber,leg,[0,-.91,-.11]);limbs.push(leg)}
 for(const x of [-.3,.3]){box(root,x,1.31,-.49,.12,.58,.14,trim)}
 root.userData.limbs=limbs;return root;
}
function seed(i){let x=Math.sin(i*12.9898+4.11)*43758.5453;return x-Math.floor(x)}
function heightAt(x,z){const t=region?.tiles.find(q=>x>=q.tx*256-512&&x<=(q.tx+1)*256-512&&z>=q.ty*256-512&&z<=(q.ty+1)*256-512);if(t?.heights){const lx=Math.max(0,Math.min(128,(x-(t.tx*256-512))/2)),lz=Math.max(0,Math.min(128,(z-(t.ty*256-512))/2));const i=Math.floor(lx),j=Math.floor(lz),fx=lx-i,fz=lz-j,a=t.heights;const h=(cx,cz)=>a[Math.min(128,cz)*129+Math.min(128,cx)]-baseElev;return (h(i,j)*(1-fx)+h(i+1,j)*fx)*(1-fz)+(h(i,j+1)*(1-fx)+h(i+1,j)*fx)*fz}return 0}
function makeSky(preset='day'){
 if(skyDome){scene.remove(skyDome);skyDome.geometry.dispose();skyDome.material.dispose()}
 if(sunDisc){scene.remove(sunDisc);sunDisc.traverse(o=>{o.geometry?.dispose();o.material?.dispose()})}
 const colors={day:['#705952','#c89779','#d4a98a'],evening:['#353541','#ab715e','#d8a383'],morning:['#716467','#caa08c','#e2b99c'],dust:['#625450','#96735f','#ad8971'],night:['#0e1420','#302c38','#554b4d']};
 const c=colors[preset]||colors.day;
 const material=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{top:{value:new THREE.Color(c[0])},mid:{value:new THREE.Color(c[1])},bottom:{value:new THREE.Color(c[2])}},vertexShader:'varying vec3 vPos;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec3 vPos;uniform vec3 top;uniform vec3 mid;uniform vec3 bottom;void main(){float h=normalize(vPos).y;vec3 col=mix(bottom,mid,smoothstep(-.3,.24,h));col=mix(col,top,smoothstep(.0,1.0,h));gl_FragColor=vec4(col,1.);}'});
 skyDome=new THREE.Mesh(new THREE.SphereGeometry(4900,48,32),material);skyDome.renderOrder=-9;scene.add(skyDome);
 sunDisc=new THREE.Group();const discMat=new THREE.MeshBasicMaterial({color:preset==='night'?0xd1c1aa:0xffe3bc,depthTest:true,transparent:true,opacity:preset==='night'?0:1});
 sunDisc.add(new THREE.Mesh(new THREE.SphereGeometry(preset==='day'?3.6:4.2,32,16),discMat));sunDisc.position.set(-210,150,-550);scene.add(sunDisc);
 scene.fog=new THREE.FogExp2(new THREE.Color(c[1]),preset==='dust'?.0023:.00057);sun.intensity=preset==='dust'?1.2:preset==='night'?.35:2.8;renderer.toneMappingExposure=preset==='night'?.78:.96;
}
function addSurfaceScatter(count=1150){
 const geo=new THREE.IcosahedronGeometry(1,0), material=new THREE.MeshStandardMaterial({color:0xa77b5e,roughness:1,metalness:0,flatShading:true});
 const instanced=new THREE.InstancedMesh(geo,material,count);const obj=new THREE.Object3D(), color=new THREE.Color();
 for(let i=0;i<count;i++){
   const distance=6+Math.sqrt(seed(i+6500))*215,angle=seed(i+7241)*Math.PI*2;
   const x=Math.sin(angle)*distance,z=Math.cos(angle)*distance;
   obj.position.set(x,stageSurfaceHeight(x,z)+.06,z);obj.rotation.set(seed(i+945)*.55,seed(i+888)*6.28,seed(i+775)*.27);
   const size=.09+Math.pow(seed(i+551),3)*.9;obj.scale.set(size*(1+seed(i+97)),size*(.38+seed(i+79)*.5),size);obj.updateMatrix();instanced.setMatrixAt(i,obj.matrix);
   color.setHSL(.055+seed(i+998)*.025,.15+seed(i+117)*.10,.22+seed(i+445)*.28);instanced.setColorAt(i,color);
 }
 instanced.instanceMatrix.needsUpdate=true;instanced.receiveShadow=true;instanced.castShadow=false;instanced.frustumCulled=false;decor.add(instanced);
}
function newEnvironment(missionIndex=-1){clearTrail();missionTargets=[];groupClear(decor);groupClear(characters);groupClear(markers);player=null;rover=null;drone=null;towPayload=null;dustCloud=null;lastTrailStep=-1;
 const terrainMode=missionIndex<0?'day':MISSIONS[missionIndex].sky;makeSky(terrainMode);
 // Added scene objects are authored game art, not NASA surveyed rocks.
 addSurfaceScatter(missionIndex===7?760:1250);
 for(let i=0;i<(missionIndex===7?80:270);i++){const radius=i<190?135:470;const x=(seed(i+101)-.5)*radius*2,z=(seed(i+202)-.5)*radius*2;if(Math.abs(x)<22&&Math.abs(z)<22)continue;const size=.35+seed(i+400)*(missionIndex===5||missionIndex===6?5:2.7);const o=createRock(size,i+320,i%3?mats.rock:mats.rock2);decor.add(o);o.position.set(x,stageSurfaceHeight(x,z)+size*.21,z);o.scale.set(1.5,.48+seed(i+14)*.5,1.06);o.rotation.y=seed(i+30)*7}
 if(missionIndex===2){for(let i=0;i<26;i++){const x=(seed(i+1200)-.5)*850,z=(seed(i+1511)-.5)*850;const ridge=shape(new THREE.SphereGeometry(6,12,8),mats.rock2,decor,[x,stageSurfaceHeight(x,z),z],[2.8,.17,1.2]);ridge.rotation.y=.5}}
 if(missionIndex===5||missionIndex===6){for(let i=0;i<9;i++){const x=-350+i*84,z=230+Math.sin(i)*50;const cliff=createRock(23,i+2202,mats.rock);cliff.position.set(x,stageSurfaceHeight(x,z)+14,z);cliff.scale.set(1.2,1.4,1.4);decor.add(cliff)}}
 if(missionIndex===4){for(let i=0;i<18;i++){const x=(seed(i+2125)-.5)*760,z=(seed(i+2525)-.5)*760;const dark=mat('#302b2a',.1,.94);const basalt=createRock(5+seed(i+2221)*8,i+4301,dark);basalt.position.set(x,stageSurfaceHeight(x,z)+2,z);basalt.scale.set(1.4,.34,.85);decor.add(basalt)}}
 if(missionIndex===1){for(let i=0;i<12;i++){const x=-220+i*37,z=240+24*Math.sin(i*.8);const layer=createRock(15,i+2000,mats.rock2);layer.position.set(x,stageSurfaceHeight(x,z)+5,z);layer.scale.set(1.3,.55,1.1);decor.add(layer)}}
 if(missionIndex===7){for(let i=0;i<40;i++){const x=(seed(i+1900)-.5)*930,z=(seed(i+1800)-.5)*930;const frost=shape(new THREE.CircleGeometry(2+seed(i+1400)*12,20),mat('#b9b5a9'),decor,[x,stageSurfaceHeight(x,z)+.12,z]);frost.rotation.x=-Math.PI/2;frost.userData.dynamicMaterial=true}}
 if(missionIndex===8){for(let i=0;i<32;i++){const x=(seed(i+2200)-.5)*920,z=(seed(i+2100)-.5)*920;const dust=shape(new THREE.PlaneGeometry(15,19),new THREE.MeshBasicMaterial({color:'#c18f6c',transparent:true,opacity:.16,depthWrite:false,side:THREE.DoubleSide}),decor,[x,stageSurfaceHeight(x,z)+11,z]);dust.rotation.y=seed(i+500)*6;dust.userData.dynamicMaterial=true}}
 if(missionIndex===8||missionIndex===9){
   const hazeMaterial=new THREE.MeshBasicMaterial({color:'#b68b6d',transparent:true,opacity:.10,depthWrite:false,side:THREE.DoubleSide});
   const hazeGeo=new THREE.PlaneGeometry(18,25);dustCloud=new THREE.Group();
   for(let i=0;i<44;i++){const p=new THREE.Mesh(hazeGeo,hazeMaterial);p.position.set((seed(i+918)-.5)*175,stageSurfaceHeight((seed(i+918)-.5)*175,(seed(i+819)-.5)*175)+6+(seed(i+888)*12),(seed(i+819)-.5)*175);p.rotation.y=seed(i+177)*6.28;p.userData.drift=seed(i+500)*1.6+.4;dustCloud.add(p)}decor.add(dustCloud);
 }
 if(missionIndex===2||missionIndex===6){
   towPayload=makeStageProp(missionIndex,missionIndex===2?2:0);towPayload.position.set(44,stageSurfaceHeight(44,23),23);towPayload.visible=false;characters.add(towPayload);
 }
 scene.fog=new THREE.FogExp2(missionIndex===8?0xb28a6c:missionIndex===7?0x8b8585:missionIndex>=0?0x9c735e:0xa47860,missionIndex===8?.0039:missionIndex===7?.0013:.00075);
 const habitat=new THREE.Group();
 const habitatMat=mat('#bdb4a4',.58,.49),seal=mat('#303a40',.72,.4),glass=mat('#314f58',.62,.28);
 cyl(habitat,0,1.45,0,3.6,3.6,2.85,habitatMat,28);
 shape(new THREE.SphereGeometry(3.62,32,20,0,Math.PI*2,0,Math.PI/2),habitatMat,habitat,[0,2.85,0]);
 for(let k=0;k<16;k++){const a=k*Math.PI/8, x=Math.cos(a)*3.62,z=Math.sin(a)*3.62;const panel=box(habitat,x,1.62,z,.12,2.4,.28,seal);panel.rotation.y=-a;}
 const entrance=box(habitat,0,1.18,-3.75,2.0,2.18,.6,seal);box(habitat,0,1.18,-4.07,1.3,1.73,.07,mats.orange);
 for(const k of [-1,1]){box(habitat,k*5,.83,1.1,2.7,.25,2.4,glass);const support=box(habitat,k*4.0,.75,1.1,.12,1.7,.13,habitatMat);support.rotation.y=.1;}
 cyl(habitat,-5.6,2.2,1.4,.08,.08,4.1,habitatMat,12);glow(habitat,-5.6,4.4,1.4,.12);
 habitat.position.set(-2,stageSurfaceHeight(-2,8),8);decor.add(habitat);
 rover=makeRover();rover.position.set(-14,stageSurfaceHeight(-14,-12),-12);characters.add(rover);drone=makeDrone();drone.position.set(8,stageSurfaceHeight(8,-13)+13,-13);characters.add(drone);
 if(missionIndex>=0){player=makeAstronaut(mission.crew);playerPos.set(4,stageSurfaceHeight(4,-3),-3);player.position.copy(playerPos);characters.add(player);if(MISSIONS[missionIndex].mechanic==='relay'){const alpha=makeAlpha();alpha.position.set(10,stageSurfaceHeight(10,5),5);decor.add(alpha)}buildTargets(missionIndex);focusPlayer(true);planWorldTrail(performance.now())}else{camera.position.set(90,50,105);orbit.target.set(0,4,0);orbit.update()}
}
function buildTargets(index){
 missionTargets=[];clearTrail();
 const presets=index===0?[[5,-5],[52,-18],[-54,44],[-2,8]]:
  index===2?[[12,-18],[45,28],[-34,36],[-2,8]]:
  index===6?[[17,-15],[51,-48],[-46,35],[-2,8]]:
  index===8?[[20,-16],[65,-36],[-31,35],[-2,8]]:[[17,-15],[54,19],[-56,44],[-2,8]];
 for(let i=0;i<4;i++){
  const [x,z]=presets[i],root=makeStageProp(index,i);
  root.position.set(x,stageSurfaceHeight(x,z),z);
  const halo=new THREE.Mesh(new THREE.TorusGeometry(2.4,.045,8,64),new THREE.MeshBasicMaterial({color:'#79d9e7',transparent:true,opacity:.75,depthWrite:false}));halo.rotation.x=Math.PI/2;halo.position.y=.12;root.add(halo);root.userData.ring=halo;
  const beam=new THREE.Mesh(new THREE.CylinderGeometry(.055,.18,7,12,1,true),new THREE.MeshBasicMaterial({color:'#88e8f4',transparent:true,opacity:.10,depthWrite:false,side:THREE.DoubleSide}));beam.position.y=3.5;root.add(beam);
  markers.add(root);missionTargets.push(root);
 }
 updateMarkers();
}
function clearTrail(){if(navTrail){markers.remove(navTrail);navTrail.traverse(o=>{o.geometry?.dispose();o.material?.dispose()});navTrail=null}}
function planWorldTrail(now=0){
 if(!mission||mission.complete||!missionTargets[mission.step])return;
 const current=mission.mode==='rover'&&rover?rover.position:playerPos;
 const target=missionTargets[mission.step].position;
 if(now-lastTrailAt<2200&&navTrail&&navTrail.userData.step===mission.step&&current.distanceTo(navTrail.userData.from)<9){lastTrailAt=now;return;}
 lastTrailAt=now;clearTrail();
 const spacing=5,side=49,mid=24,grid=[];
 for(let j=0;j<side;j++)for(let i=0;i<side;i++){
  const x=(i-mid)*spacing+current.x,z=(j-mid)*spacing+current.z;
  const h=stageSurfaceHeight(x,z);
  grid.push({z:Number.isFinite(h)?h:0,valid:Number.isFinite(h),rough:0});
 }
 grid.cellSize=spacing;grid.gradeLimit=mission.mode==='rover'?.35:.44;
 let ex=Math.round((target.x-current.x)/spacing)+mid,ez=Math.round((target.z-current.z)/spacing)+mid;
 if(ex<0||ex>=side||ez<0||ez>=side)return;
 const result=astar(grid,side,side,[mid,mid],[ex,ez],mission.option===1?'safe':'fast');
 const positions=result?.path||[];if(!positions.length)return;
 const arr=[];for(const [i,j] of positions){const x=(i-mid)*spacing+current.x,z=(j-mid)*spacing+current.z;arr.push(new THREE.Vector3(x,stageSurfaceHeight(x,z)+.5,z))}
 arr.push(new THREE.Vector3(target.x,target.y+.5,target.z));
 const parent=new THREE.Group();parent.userData.step=mission.step;parent.userData.from=current.clone();parent.userData.worldPath=arr.map(p=>p.clone());
 const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(arr),new THREE.LineDashedMaterial({color:0x73e3e6,dashSize:1.35,gapSize:.85,transparent:true,opacity:.75,depthWrite:false}));line.computeLineDistances();line.frustumCulled=false;parent.add(line);
 for(let i=9;i<arr.length-1;i+=11){const here=arr[i],after=arr[i+1];const angle=Math.atan2(after.x-here.x,after.z-here.z);const arrow=new THREE.Mesh(new THREE.ConeGeometry(.33,.95,3),new THREE.MeshBasicMaterial({color:0xa7fffa,transparent:true,opacity:.78}));arrow.position.copy(here);arrow.rotation.y=angle;arrow.rotation.x=Math.PI/2;parent.add(arrow)}
 markers.add(parent);navTrail=parent;navTrail.visible=showRoute;
}
function updateMarkers(){for(let i=0;i<missionTargets.length;i++)missionTargets[i].visible=Boolean(mission&&i===mission.step&&i<4);if(mission?.step!==lastTrailStep){clearTrail();lastTrailAt=0;lastTrailStep=mission?.step??-1;}}
function focusPlayer(initial=false){if(!player)return;orbit.enableRotate=true;orbit.minDistance=3;orbit.maxDistance=30;orbit.target.copy(playerPos).add(new THREE.Vector3(0,1.5,0));if(initial)camera.position.copy(playerPos).add(new THREE.Vector3(4.5,3.45,7.5));orbit.update()}
function buildTileGeometry(vals,valid,size,baseline){const pos=new Float32Array(size*size*3),uv=new Float32Array(size*size*2),indices=[];for(let r=0;r<size;r++)for(let c=0;c<size;c++){const i=r*size+c;pos[i*3]=(c/(size-1)-.5)*256;pos[i*3+1]=Number.isFinite(vals[i])?vals[i]-baseline:0;pos[i*3+2]=(r/(size-1)-.5)*256;uv[i*2]=c/(size-1);uv[i*2+1]=1-r/(size-1)}for(let r=0;r<size-1;r++)for(let c=0;c<size-1;c++){const a=r*size+c,b=a+1,d=a+size,e=d+1;if(valid[a]&&valid[b]&&valid[d])indices.push(a,d,b);if(valid[b]&&valid[d]&&valid[e])indices.push(b,d,e)}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('uv',new THREE.BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return g}
async function loadRegion(id){if(!manifest)return;const token=++loadToken;const next=manifest.regions.find(r=>r.id===id)||manifest.regions[0];region=next;regionId=next.id;groupClear(ground);$('terrain-info').textContent='Loading terrain...';const known=next.tiles.filter(t=>t.min_elevation_m!==null);baseElev=known.reduce((s,t)=>s+t.min_elevation_m,0)/known.length;const max=next.tiles.length;let count=0;
 for(let i=0;i<next.tiles.length;i+=4){await Promise.all(next.tiles.slice(i,i+4).map(async tile=>{try{const path=`./terrain/${tile.path}/`;const [raw,mask,tex]=await Promise.all([fetch(path+'height.f32').then(r=>{if(!r.ok)throw Error('Missing height data');return r.arrayBuffer()}),fetch(path+'height_valid.u8').then(r=>r.arrayBuffer()),new THREE.TextureLoader().loadAsync(path+`optical_${styleMode==='observed'?'observed':'styled'}.png`)]);if(token!==loadToken){tex.dispose();return}tile.heights=new Float32Array(raw);tile.valid=new Uint8Array(mask);tile.preview=tex.image;const geom=buildTileGeometry(tile.heights,tile.valid,tile.height_samples,baseElev);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());if(!terrainNormal)terrainNormal=createRegolithNormal(THREE);const material=new THREE.MeshStandardMaterial({map:tex,roughness:.97,metalness:0,normalMap:terrainNormal,normalScale:new THREE.Vector2(.31,.31),side:THREE.FrontSide});const mesh=new THREE.Mesh(geom,material);mesh.userData.dynamicMaterial=true;mesh.position.set((tile.tx+.5)*256-512,0,(tile.ty+.5)*256-512);mesh.receiveShadow=true;ground.add(mesh);count++;$('terrain-info').textContent=`${count}/${max} local NASA terrain tiles · 1,024 m × 1,024 m`; }catch(e){showError(e.message)}}))}
 if(token!==loadToken)return;
 const centerTile=next.tiles.find(t=>t.tx===1&&t.ty===1&&t.heights);if(centerTile){terrainGrid=gridFromHeight(centerTile.heights,centerTile.valid,129,2,.48)}else terrainGrid=null;
 newEnvironment(page==='world'&&mission?mission.index:-1);renderMini();}
function modeledHeight(x,z,index){
 const dunes=9*Math.sin(x*.024+Math.sin(z*.014)*1.8)+3*Math.sin(x*.055+z*.026);
 const cliffs=13*Math.tanh(Math.sin(x*.012)*4)+5*Math.sin(z*.018);
 const fractured=4*Math.sin(x*.041)*Math.cos(z*.036)+2.5*Math.sin(x*.082+z*.021);
 const plain=2.3*Math.sin(x*.018)*Math.cos(z*.012)+1.1*Math.sin(x*.038+z*.024);
 if(index===2)return dunes;if(index===3)return fractured+5*Math.abs(Math.sin(x*.014+z*.008));
 if(index===4)return plain+5*Math.abs(Math.sin(z*.016));if(index===5||index===6)return cliffs;
 if(index===7)return 1.4*Math.sin(x*.012)+.9*Math.sin(z*.018);
 if(index===8)return plain+3*Math.sin(x*.026);if(index===9)return fractured+3*Math.sin(z*.019);return plain;
}
function fallbackSurface(index=mission?.index||0){groupClear(ground);terrainGrid=null;const area=new THREE.PlaneGeometry(1200,1200,180,180);area.rotateX(-Math.PI/2);const a=area.attributes.position;for(let i=0;i<a.count;i++)a.setY(i,modeledHeight(a.getX(i),a.getZ(i),index));area.computeVertexNormals();const colors=['#986b51','#966650','#8a5a43','#71524a','#665048','#6d5049','#815a49','#a8a098','#906650','#946951'];if(!terrainNormal)terrainNormal=createRegolithNormal(THREE);const proceduralMap=new THREE.MeshStandardMaterial({color:colors[index],roughness:.98,normalMap:terrainNormal,normalScale:new THREE.Vector2(.28,.28)});const floor=new THREE.Mesh(area,proceduralMap);floor.receiveShadow=true;ground.add(floor)}
function stageSurfaceHeight(x,z){return region?.tiles?.[0]?.heights?heightAt(x,z):modeledHeight(x,z,mission?.index||0)}
function resetForStage(index){mission=newMission(index,mission?.crew||saved.crew);saved.last=index;persist();page='world';activatePage('world');if(MISSIONS[index].region==='MODELED'){loadToken++;region=null;fallbackSurface(index);newEnvironment(index)}else loadRegion(MISSIONS[index].region);updateHud()}
function activatePage(name){page=name;document.querySelector('.topbar').classList.toggle('ingame',name==='world');document.querySelectorAll('.page').forEach(p=>p.classList.toggle('hidden',p.id!==name));$('world-ui').classList.toggle('hidden',name!=='world');$('map-overlay').classList.add('hidden');if(name==='home'){newEnvironment(-1)}else if(name==='atlas'){if(!region)loadRegion('JEZERO_CENTER');else newEnvironment(-1)}else if(name==='ops'){if(!region||!terrainGrid)loadRegion('JEZERO_CENTER');else newEnvironment(-1)}else if(name==='odyssey'){newEnvironment(-1);renderMissions()}else if(name==='profile'){newEnvironment(-1);renderProfile()}if(name==='world'&&player)focusPlayer()}
const localKey='ares_pathfinder_2026_save_v2';let saved;try{saved=JSON.parse(localStorage.getItem(localKey))||{crew:'Sadia',unlocked:1,credits:0,last:0,awards:[]}}catch{saved={crew:'Sadia',unlocked:1,credits:0,last:0,awards:[]}}
function persist(){localStorage.setItem(localKey,JSON.stringify(saved))}
function renderMissions(){$('crew-picker').replaceChildren();for(const name of CREW){let b=document.createElement('button');b.textContent=name;b.classList.toggle('selected',saved.crew===name);b.onclick=()=>{saved.crew=name;persist();renderMissions()};$('crew-picker').append(b)}$('missions').replaceChildren();MISSIONS.forEach((m,i)=>{const b=document.createElement('button');b.className='mission-card';b.disabled=i>=saved.unlocked;b.innerHTML=`<span class="index">${String(i+1).padStart(2,'0')} · ${i<saved.unlocked?'MISSION AVAILABLE':'LOCKED'}</span><strong>${m.name}</strong><small>${m.place} · ${m.mechanic.toUpperCase()}</small>`;b.onclick=()=>resetForStage(i);$('missions').append(b)})}
function renderProfile(){$('profile-body').innerHTML=`<p><b>Commander:</b> ${saved.crew}</p><p><b>Unlocked stages:</b> ${saved.unlocked} / 10</p><p><b>Mission credits:</b> ${saved.credits}</p><p><b>Equipment earned:</b> ${saved.awards.join(', ')||'None yet'}</p>`}
function updateHud(){if(!mission)return;const m=MISSIONS[mission.index];$('mission-kicker').textContent=`STAGE ${String(mission.index+1).padStart(2,'0')} · ${m.place.toUpperCase()}`;$('mission-name').textContent=m.name;$('objective').textContent=m.objectives[Math.min(mission.step,3)];$('oxygen').value=mission.oxygen;$('oxygen-v').textContent=`${Math.ceil(mission.oxygen)}%`;$('power').value=mission.power;$('power-v').textContent=`${Math.ceil(mission.power)}%`;$('reserve').value=Math.max(0,100-mission.time*.18);$('reserve-v').textContent=`${Math.max(0,Math.ceil(100-mission.time*.18))}%`;$('task-status').textContent=`${mission.step}/4 OBJECTIVES · ${Math.floor(mission.score)} SCIENCE POINTS · ${Number.isFinite(distanceToTarget())?Math.round(distanceToTarget())+'m TO TARGET':'MISSION LOADING'}`;$('world-message').textContent=mission.message||'';$('rover-button').textContent=mission.mode==='rover'?'ASTRONAUT':'ROVER';$('choice').classList.toggle('hidden',!choiceOpen);$('choices').replaceChildren();m.options.forEach((v,i)=>{const b=document.createElement('button');b.textContent=v;b.classList.toggle('selected',mission.option===i);b.onclick=()=>{mission.option=i;choiceOpen=false;mission.message=`Strategy selected: ${v}`;updateHud();audio.cue('scan')};$('choices').append(b)});updateMarkers()}
function distanceToTarget(){const t=missionTargets[Math.min(mission?.step||0,3)];const p=mission?.mode==='rover'&&rover?rover.position:playerPos;return t?Math.hypot(p.x-t.position.x,p.z-t.position.z):Infinity}
function openChallenge(spec){
 $('challenge-title').textContent=spec.title;$('challenge-desc').textContent=spec.detail;$('challenge-fields').replaceChildren();$('challenge-feedback').textContent='Choose settings that satisfy this task.';
 const inputs=[];for(let i=0;i<2;i++){const p=spec[i===0?'a':'b'];const block=document.createElement('div'),lab=document.createElement('label'),range=document.createElement('input'),value=document.createElement('span');range.type='range';range.min=p[1];range.max=p[2];range.step=p[3];range.value=spec.default[i];value.textContent=range.value;lab.textContent=p[0]+' ';lab.append(value);range.oninput=()=>value.textContent=range.value;block.append(lab,range);$('challenge-fields').append(block);inputs.push(range)}
 $('challenge-submit').onclick=()=>{const a=Number(inputs[0].value),b=Number(inputs[1].value);if(!spec.win(a,b)){mission.power=Math.max(0,mission.power-2);mission.message='Calibration rejected; correct the settings';$('challenge-feedback').textContent=spec.feedback;audio.cue('alert');updateHud();return}
 $('challenge').classList.add('hidden');mission.flags={...mission.flags,challengeSolved:true};mission.message=`${spec.title}: configuration accepted`;audio.cue(spec.title.includes('Drill')?'drill':'success');mission=performMissionAction(mission);updateHud()};$('challenge').classList.remove('hidden');
}

function openEVACheck(){
 const fields=$('challenge-fields');$('challenge-title').textContent='EVA · PRE-DEPARTURE';$('challenge-desc').textContent='Check all three critical suit systems before survey departure.';fields.replaceChildren();
 const items=['Helmet seal confirmed','Oxygen pack connected','Radio and location beacon responding'];const boxes=[];
 for(const item of items){const lab=document.createElement('label');lab.className='eva-option';const check=document.createElement('input');check.type='checkbox';boxes.push(check);lab.append(check,document.createTextNode(item));fields.append(lab)}
 $('challenge-feedback').textContent='All three systems must be checked.';
 $('challenge-submit').onclick=()=>{if(!boxes.every(c=>c.checked)){$('challenge-feedback').textContent='Incomplete EVA verification. All three checks required.';audio.cue('alert');return}
 mission.flags.evaChecked=true;mission=performMissionAction(mission);$('challenge').classList.add('hidden');updateHud();audio.cue('success')};$('challenge').classList.remove('hidden');
}
function openFlagTask(){
 const fields=$('challenge-fields');$('challenge-title').textContent='FLAG · SURFACE SURVEY';$('challenge-desc').textContent='Choose a symbolic country flag and deploy it at the marked survey point. The panorama scan records your camera rotation.';fields.replaceChildren();
 const lab=document.createElement('label');lab.textContent='COUNTRY FLAG';const sel=document.createElement('select');sel.innerHTML='<option value="BD">Bangladesh</option><option value="US">United States</option><option value="CA">Canada</option><option value="JP">Japan</option><option value="GB">United Kingdom</option><option value="FR">France</option>';
 lab.append(sel);fields.append(lab);$('challenge-feedback').textContent='Flag deployment and camera survey are fictional gameplay interactions.';
 $('challenge-submit').onclick=()=>{const item=missionTargets[2];if(!item)return;const flag=makeFlag(THREE,sel.value);flag.position.copy(item.position);flag.position.x+=2.6;markers.add(flag);mission.flags.flagCountry=sel.value;mission.flags.flagPlaced=true;panoramaAngle=0;panoramaPrev=null;mission.message='Flag planted. Drag camera around to survey the horizon (120°), then INTERACT.';$('challenge').classList.add('hidden');updateHud();audio.cue('success')};$('challenge').classList.remove('hidden');
}
function interact(){if(!mission||mission.complete)return;const dist=distanceToTarget();const response=canAdvance(mission,dist<9);if(response){mission.message=response;audio.cue('alert');updateHud();return}
 if(mission.index===0&&mission.step===0){openEVACheck();return;}
 if(mission.index===0&&mission.step===2){if(!mission.flags.flagPlaced){openFlagTask();return;}if(!mission.flags.panoramaDone){mission.message=`Panorama camera sweep ${Math.min(100,Math.floor(panoramaAngle/(Math.PI*2/3)*100))}% · drag the Mars scene to scan`;updateHud();return;}mission=performMissionAction(mission);audio.cue('success');updateHud();return;}
 if(mission.step===0&&!choiceOpen){choiceOpen=true;mission.message='Choose the route/equipment strategy for this mission.';updateHud();return}
 if((mission.index===2||mission.index===6)&&mission.step>=1&&mission.mode!=='rover'){mission.message='Enter ATLAS-6 using ROVER control before vehicle operation.';audio.cue('alert');updateHud();return}
 const spec=challengeFor(MISSIONS[mission.index].mechanic);if(mission.step===1&&!mission.flags?.challengeSolved){openChallenge(spec);return}const before=mission.step;mission=performMissionAction(mission);audio.cue(mission.step===before?'scan':'success');if(mission.complete){saved.unlocked=Math.max(saved.unlocked,Math.min(10,mission.index+2));saved.credits+=mission.score;saved.awards=[...new Set([...saved.awards,MISSIONS[mission.index].reward])];persist();showModal('MISSION COMPLETE',`You earned ${mission.score} science points and unlocked ${MISSIONS[mission.index].reward}.`,[{text:mission.index<9?'NEXT MISSION':'MISSION PROFILE',fn:()=>{hideModal();mission.index<9?resetForStage(mission.index+1):activatePage('profile')}},{text:'CAMPAIGN',fn:()=>{hideModal();activatePage('odyssey')}}])}
 updateHud()}
function showModal(title,copy,actions){$('modal-title').textContent=title;$('modal-copy').textContent=copy;$('modal-actions').replaceChildren();actions.forEach(({text,fn})=>{const b=document.createElement('button');b.textContent=text;b.onclick=fn;$('modal-actions').append(b)});$('modal').classList.remove('hidden');if(mission)mission.paused=true}
function hideModal(){$('modal').classList.add('hidden');if(mission)mission.paused=false}
function planRoute(){if(!terrainGrid){$('route-result').textContent='Real Jezero height grid not yet loaded. Select Mars Atlas and load a measured region.';return}const target=$('route-target').value,mode=$('route-style').value;const goals={north:[62,32],east:[105,64],west:[27,66]};const start=[64,64],end=goals[target];const result=astar(terrainGrid,129,129,start,end,mode);if(!result){route=null;$('route-result').textContent='No feasible route: slope or unknown-cell constraints block this target.';return}const back=astar(terrainGrid,129,129,end,start,mode);const s=routeStats(result,2),b=routeStats(back,2);route={...result,start,end,target,mode,stats:s};if(!b){route=null;$('route-result').textContent='Return path infeasible. Mission not approved.';return}const round=s.minutes+b.minutes;let permitted=round+15<=75;$('route-result').innerHTML=`<b>${mode==='safe'?'LOWER HAZARD':'SHORTEST FEASIBLE'}</b><br>${s.meters.toFixed(0)} m outbound · ${s.minutes.toFixed(1)} min<br>Round-trip: ${round.toFixed(1)} min · 15 min return reserve<br>${permitted?'FEASIBLE under modeled 75-minute budget':'INSUFFICIENT modeled EVA time'}`;route.permitted=permitted;renderMini()}
function renderMini(){
 const ctx=minictx,size=200,worldSpan=255,scale=size/worldSpan;
 const pos=mission?.mode==='rover'&&rover?rover.position:playerPos;
 ctx.clearRect(0,0,size,size);ctx.fillStyle='#39271f';ctx.fillRect(0,0,size,size);
 if(region?.tiles?.length){for(const tile of region.tiles){
   const left=tile.tx*256-512,top=tile.ty*256-512;
   const dx=100+(left-pos.x)*scale,dy=100+(top-pos.z)*scale,w=256*scale;
   if(dx>size||dy>size||dx+w<0||dy+w<0)continue;
   if(tile.preview){ctx.save();ctx.translate(dx,dy+w);ctx.scale(1,-1);ctx.drawImage(tile.preview,0,0,w,w);ctx.restore()}
   else{ctx.fillStyle='#855942';ctx.fillRect(dx,dy,w,w)}
 }}else{
  for(let y=0;y<size;y+=5)for(let x=0;x<size;x+=5){const wx=pos.x+(x-100)/scale,wz=pos.z+(y-100)/scale;
   const elev=modeledHeight(wx,wz,mission?.index||0);const v=Math.max(-1,Math.min(1,elev/26));
   const k=Math.floor(89+v*40);ctx.fillStyle=`rgb(${k+40},${Math.floor(k*.66)},${Math.floor(k*.50)})`;ctx.fillRect(x,y,5,5)}
 }
 // Terrain map stays north-up. Draw path before icons, then place centered player arrow.
 const path=navTrail?.userData.worldPath;
 if(path?.length){ctx.save();ctx.beginPath();path.forEach((pt,i)=>{const x=100+(pt.x-pos.x)*scale,y=100+(pt.z-pos.z)*scale;if(!i)ctx.moveTo(x,y);else ctx.lineTo(x,y)});ctx.strokeStyle='#6afff1';ctx.lineWidth=3;ctx.shadowBlur=5;ctx.shadowColor='#14b9af';ctx.stroke();ctx.restore()}
 if(mission&&player){const target=missionTargets[mission.step];if(target){const tx=100+(target.position.x-pos.x)*scale,ty=100+(target.position.z-pos.z)*scale;
  ctx.fillStyle='#ff9b4b';ctx.beginPath();ctx.arc(tx,ty,5.5,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#161f22';ctx.lineWidth=2;ctx.stroke();
  if(!path?.length){ctx.setLineDash([3,5]);ctx.strokeStyle='#ffcc8c';ctx.beginPath();ctx.moveTo(100,100);ctx.lineTo(tx,ty);ctx.stroke();ctx.setLineDash([])}
 }
 ctx.save();ctx.translate(100,100);ctx.rotate(-playerHeading);ctx.fillStyle='#dcfbff';ctx.strokeStyle='#102d3c';ctx.lineWidth=2.6;ctx.beginPath();ctx.moveTo(0,-12);ctx.lineTo(-8,9);ctx.lineTo(0,5);ctx.lineTo(8,9);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();}
 ctx.textAlign='center';ctx.fillStyle='#f1e3d2';ctx.font='700 11px Segoe UI';ctx.fillText('N',100,13);
 ctx.font='9px Segoe UI';ctx.fillText('100 m',170,186);ctx.strokeStyle='#f7e1c9';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(117,190);ctx.lineTo(195,190);ctx.stroke();
}

function drawLargeMap(){
 const c=$('map-large'),ctx=c.getContext('2d'),size=c.width;ctx.fillStyle='#3d2920';ctx.fillRect(0,0,size,size);
 if(region?.tiles?.length){for(const t of region.tiles){const tileSize=size/4,x=t.tx*tileSize,y=t.ty*tileSize;
 if(t.preview){ctx.save();ctx.translate(x,y+tileSize);ctx.scale(1,-1);ctx.drawImage(t.preview,0,0,tileSize,tileSize);ctx.restore();}}}
 else {ctx.drawImage($('mini'),0,0,size,size)}
 if(route?.path?.length){ctx.beginPath();route.path.forEach(([x,y],i)=>{const px=(.25+x/(129*4))*size,py=(.25+y/(129*4))*size;if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py)});ctx.strokeStyle='#59fcf8';ctx.lineWidth=4;ctx.stroke()}
 const xp=(playerPos.x+512)/1024*size,zp=(playerPos.z+512)/1024*size;
 ctx.fillStyle='#9ceaf2';ctx.strokeStyle='#15343b';ctx.lineWidth=3;ctx.beginPath();ctx.arc(xp,zp,7,0,Math.PI*2);ctx.fill();ctx.stroke();
 const t=missionTargets[mission?.step||0];if(t){const tx=(t.position.x+512)/1024*size,tz=(t.position.z+512)/1024*size;ctx.setLineDash([9,8]);ctx.strokeStyle='#aff3e1';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(xp,zp);ctx.lineTo(tx,tz);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#ff9f59';ctx.beginPath();ctx.arc(tx,tz,9,0,Math.PI*2);ctx.fill()}
 ctx.textAlign='left';ctx.font='bold 16px Segoe UI';ctx.fillStyle='#e9f6fa';ctx.fillText('N ↑',16,25);
}

function move(dt){if(page!=='world'||!player||!mission||mission.paused||mission.complete)return;let forward=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0)+joystick.y;let side=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0)+joystick.x;const magnitude=Math.hypot(forward,side);moveVector.set(side,forward);const moving=magnitude>.1;forward/=Math.max(1,magnitude);side/=Math.max(1,magnitude);
 const facing=new THREE.Vector3();camera.getWorldDirection(facing);facing.y=0;facing.normalize();const right=new THREE.Vector3(-facing.z,0,facing.x);const stormPenalty=mission.index===8&&mission.step>=1?.48:1;const tractionPenalty=mission.index===2&&!mission.flags?.challengeSolved ? .72 : 1;const speed=(mission.mode==='rover'?13:(runPressed||keys.has('shift')?6.1:crouch?1.45:3.5))*Math.min(1,magnitude)*stormPenalty*tractionPenalty;const delta=facing.multiplyScalar(forward*speed*dt).add(right.multiplyScalar(side*speed*dt));const vehicleControl=mission.mode==='rover';const origin=vehicleControl?rover.position:playerPos;const next=origin.clone().add(delta);next.x=Math.min(485,Math.max(-485,next.x));next.z=Math.min(485,Math.max(-485,next.z));const floor=stageSurfaceHeight(next.x,next.z);const climb=floor-origin.y;if(moving&&climb>1.4){mission.message='Steep obstacle — choose another approach';return}if(vehicleControl){rover.position.x=next.x;rover.position.z=next.z;rover.position.y=floor;rover.rotation.y=Math.atan2(-delta.z,delta.x);rover.userData.wheels?.forEach(w=>w.rotation.z-=speed*dt/.65);}else{playerPos.x=next.x;playerPos.z=next.z;}
 const targetY=floor+verticalOffset;if(verticalOffset>0||jumpVelocity!==0){jumpVelocity-=7.4*dt;verticalOffset=Math.max(0,verticalOffset+jumpVelocity*dt);if(verticalOffset===0)jumpVelocity=0}if(!vehicleControl){playerPos.y=targetY;player.position.copy(playerPos);}if(moving){playerHeading=Math.atan2(delta.x,delta.z);if(!vehicleControl)player.rotation.y=playerHeading+Math.PI;const swing=Math.sin(performance.now()*.009*(speed/3.5))*Math.min(.5,speed*.085);if(!vehicleControl)player.userData.limbs?.forEach((limb,i)=>limb.rotation.x=i%2?-swing:swing);footstepTick+=dt*speed;if(footstepTick>.88){footstepTick=0;audio.cue(mission.mode==='rover'?'rover':'step')}}else if(!vehicleControl)player.userData.limbs?.forEach(l=>l.rotation.x*=.83);
 mission.time+=dt;const dustLoad=mission.index===8&&mission.step>=1?2.9:1;const coldLoad=mission.index===7?2.2:1;const roverFactor=vehicleControl?.38:1;mission.oxygen=Math.max(0,mission.oxygen-dt*(moving?.022:.008)*dustLoad*roverFactor);mission.power=Math.max(0,mission.power-dt*(moving?.011:.004)*coldLoad*(vehicleControl?2.0:1));if(mission.oxygen<=0||mission.power<=0){mission.paused=true;showModal('EVA RESERVE EXHAUSTED','Return to your last checkpoint and choose a safer approach.',[{text:'RETRY CHECKPOINT',fn:()=>{hideModal();mission.oxygen=80;mission.power=80;mission.time=Math.max(0,mission.time-120);playerPos.set(4,stageSurfaceHeight(4,-3),-3);mission.message='Checkpoint restored';updateHud()}},{text:'EXIT',fn:()=>{hideModal();activatePage('odyssey')}}])}
 orbit.target.lerp((vehicleControl?rover.position:playerPos).clone().add(new THREE.Vector3(0,1.5,0)),.15);camera.position.add(delta);if(Math.floor(mission.time*2)%4===0)updateHud();}
// UI wiring
document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>activatePage(b.dataset.page));$('start').onclick=()=>activatePage('odyssey');$('explore').onclick=()=>{mission=null;activatePage('world');newEnvironment(-1);$('world-ui').classList.add('hidden');camera.position.set(105,53,123);orbit.target.set(0,0,0);orbit.update()};$('region').onchange=()=>loadRegion($('region').value);$('texture').onchange=()=>{styleMode=$('texture').value;loadRegion(regionId)};
$('calculate').onclick=planRoute;$('execute').onclick=()=>{if(!route?.permitted){$('route-result').textContent='Calculate a feasible route first.';return}resetForStage(0)};$('continue').onclick=()=>resetForStage(Math.min(saved.last,saved.unlocked-1));
$('sound').onclick=async()=>{if(!audio.enabled){await audio.start();$('sound').textContent='♪ SOUND ON';audio.cue('success')}else{audio.enabled=false;audio.suspend();$('sound').textContent='♪ SOUND OFF'}};
$('map-close').onclick=()=>$('map-overlay').classList.add('hidden');$('interact-button').onclick=interact;$('challenge-cancel').onclick=()=>$('challenge').classList.add('hidden');$('rover-button').onclick=()=>{if(!mission)return;mission.mode=mission.mode==='rover'?'astronaut':'rover';if(mission.mode==='rover'){const offset=camera.position.clone().sub(orbit.target);orbit.target.copy(rover.position).add(new THREE.Vector3(0,1.5,0));camera.position.copy(orbit.target).add(offset)}else{const offset=camera.position.clone().sub(orbit.target);orbit.target.copy(playerPos).add(new THREE.Vector3(0,1.5,0));camera.position.copy(orbit.target).add(offset)}mission.message=`${mission.mode.toUpperCase()} CONTROL`;audio.cue('rover');updateHud()};$('map-button').onclick=()=>{if(page==='world'){const b=$('map-overlay');b.classList.toggle('hidden');if(!b.classList.contains('hidden')){drawLargeMap()}}};$('slide-button').onclick=()=>{crouch=!crouch;$('slide-button').classList.toggle('selected',crouch)};$('jump-button').onclick=()=>{if(verticalOffset===0&&mission?.mode!=='rover')jumpVelocity=3.7};$('run-button').onpointerdown=()=>runPressed=true;$('run-button').onpointerup=()=>runPressed=false;$('run-button').onpointerleave=()=>runPressed=false;$('pause-button').onclick=()=>{if(!mission)return;showModal('MISSION PAUSED','Return to the mission, restart it or open the campaign.',[{text:'RESUME',fn:hideModal},{text:'RESTART',fn:()=>{const n=mission.index;hideModal();resetForStage(n)}},{text:'EXIT',fn:()=>{hideModal();activatePage('odyssey')}}])};
document.addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(['w','a','s','d',' ','arrowup','arrowdown','arrowleft','arrowright'].includes(k)&&!['INPUT','SELECT','TEXTAREA'].includes(document.activeElement?.tagName))e.preventDefault();keys.add(k);if(e.repeat)return;if(page==='world'&&mission){if(k==='e')interact();if(k==='r')$('rover-button').click();if(k==='m')$('map-button').click();if(k===' '||k==='space')$('jump-button').click();if(k==='escape')$('pause-button').click();if(k==='c')$('slide-button').click();if(k==='g'){showRoute=!showRoute;if(navTrail)navTrail.visible=showRoute}}});document.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));window.addEventListener('blur',()=>{keys.clear();joystick.set(0,0);runPressed=false});
const joy=$('joystick');let pointer=null;joy.addEventListener('pointerdown',e=>{pointer=e.pointerId;joy.setPointerCapture(pointer);updateJoystick(e)});joy.addEventListener('pointermove',e=>{if(pointer===e.pointerId)updateJoystick(e)});function updateJoystick(e){const r=joy.getBoundingClientRect(),radius=r.width/2,dx=(e.clientX-(r.left+radius))/radius,dy=(e.clientY-(r.top+radius))/radius;const l=Math.max(1,Math.hypot(dx,dy)),x=dx/l,y=dy/l;joystick.set(Math.abs(x)<.12?0:x,Math.abs(y)<.12?0:-y);$('knob').style.transform=`translate(${x*radius*.49}px,${y*radius*.49}px)`}function stopJoystick(){pointer=null;joystick.set(0,0);$('knob').style.transform='translate(0,0)'}joy.addEventListener('pointerup',stopJoystick);joy.addEventListener('pointercancel',stopJoystick);
orbit.addEventListener('change',()=>{if(mission?.index!==0||mission.step!==2||!mission.flags.flagPlaced||mission.flags.panoramaDone)return;const az=Math.atan2(camera.position.x-playerPos.x,camera.position.z-playerPos.z);if(panoramaPrev!==null){const delta=Math.atan2(Math.sin(az-panoramaPrev),Math.cos(az-panoramaPrev));panoramaAngle+=Math.abs(delta);if(panoramaAngle>=Math.PI*2/3){mission.flags.panoramaDone=true;mission.message='Panorama sweep complete. Return to flag and press INTERACT.';audio.cue('success');updateHud();}}panoramaPrev=az;});
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});
function animate(t){const dt=Math.min(.05,(t-timePrev)/1000);timePrev=t;move(dt);if(drone){drone.position.x+=Math.sin(t*.0005)*dt*.6;drone.position.y+=(Math.sin(t*.0013)*.002);drone.userData.rotors?.forEach(r=>r.rotation.y+=dt*31)}if(rover){rover.userData.mast.rotation.y=Math.sin(t*.0007)*.65;if(page==='home'){rover.position.x=-14+Math.sin(t*.00025)*3;rover.userData.wheels.forEach(w=>w.rotation.z+=dt*.12)}}if(mission){weatherIntensity=mission.index===8&&mission.step>=1?.95:mission.index===7?.15:mission.index===9&&mission.step>=2?.55:0;if(audio.enabled)audio.update({stage:mission.index,rover:mission.mode==='rover',moving:moveVector.length()>0.12,storm:weatherIntensity,playerX:playerPos.x,roverX:rover?.position.x||0,distance:rover?.position.distanceTo(playerPos)||20,oxygen:mission.oxygen});for(const prop of missionTargets)if(prop.visible)animateStageProp(prop,t,true);if(page==='world'&&t-lastTrailAt>2200)planWorldTrail(t)}if(towPayload&&mission?.step>=3&&rover){towPayload.visible=true;const backward=new THREE.Vector3(Math.cos(rover.rotation.y)*-6,0,Math.sin(rover.rotation.y)*6);const target=rover.position.clone().add(backward);target.y=stageSurfaceHeight(target.x,target.z);towPayload.position.lerp(target,.07);towPayload.rotation.y=rover.rotation.y;}if(dustCloud){dustCloud.children.forEach((p,i)=>{p.position.x+=dt*(1.6+p.userData.drift)*(mission?.index===8?2.2:.5);if(p.position.x>97)p.position.x=-97;p.rotation.y+=dt*.03});if(scene.fog)scene.fog.density=mission?.index===8&&mission.step>=1?.0075:mission?.index===8?.0032:.0011;}if(skyDome)skyDome.position.copy(camera.position);if(sunDisc)sunDisc.position.copy(camera.position).add(new THREE.Vector3(-210,150,-550));if(t>nextMinimapDraw){renderMini();if($('heading'))$('heading').textContent=['N','NE','E','SE','S','SW','W','NW'][((Math.round((playerHeading*180/Math.PI)/45)%8)+8)%8];nextMinimapDraw=t+220}orbit.update();renderer.render(scene,camera);requestAnimationFrame(animate)}requestAnimationFrame(animate);
try{const resp=await fetch('./terrain/manifest.json');if(!resp.ok)throw Error('Generated terrain missing. Run PREPARE_REAL_TERRAIN_WINDOWS.bat first.');manifest=await resp.json();manifest.regions.forEach(r=>{const option=document.createElement('option');option.value=r.id;option.textContent=r.display_name;$('region').append(option)});await loadRegion('JEZERO_CENTER');activatePage('home')}catch(e){showError(e.message);fallbackSurface();newEnvironment(-1);activatePage('home')}
