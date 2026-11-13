import * as THREE from 'three';
// Interactive, original stage-specific game props. These are simulated mission instruments,
// NOT NASA-engineering-verified hardware or NASA-observed terrain features.
const shell=new THREE.MeshStandardMaterial({color:'#d4c2aa',roughness:.59,metalness:.42});
const metal=new THREE.MeshStandardMaterial({color:'#737f83',roughness:.37,metalness:.8});
const dark=new THREE.MeshStandardMaterial({color:'#243039',roughness:.5,metalness:.56});
const copper=new THREE.MeshStandardMaterial({color:'#b56e3d',roughness:.61,metalness:.3});
const glass=new THREE.MeshPhysicalMaterial({color:'#345e61',roughness:.19,metalness:.48,clearcoat:1});
const glow=new THREE.MeshBasicMaterial({color:'#70d7e0'});
const mineral=[new THREE.MeshStandardMaterial({color:'#799187',roughness:.78}),new THREE.MeshStandardMaterial({color:'#b99a6b',roughness:.83}),new THREE.MeshStandardMaterial({color:'#835f74',roughness:.86})];
function mesh(root,g,m,x=0,y=0,z=0){const o=new THREE.Mesh(g,m);o.position.set(x,y,z);root.add(o);o.castShadow=true;o.receiveShadow=true;return o;}
function pole(root,x,z,h=1.7,material=metal){return mesh(root,new THREE.CylinderGeometry(.045,.075,h,10),material,x,h/2,z)}
function slab(root,x,y,z,w,h,d,material=metal){return mesh(root,new THREE.BoxGeometry(w,h,d),material,x,y,z)}
function sphere(root,x,y,z,r=.2,material=glow){return mesh(root,new THREE.SphereGeometry(r,16,12),material,x,y,z)}
function basin(root,r=2,material=copper){const b=mesh(root,new THREE.CylinderGeometry(r,r*.83,.55,12),material,0,.22,0);b.rotation.z=.04;return b;}
function wire(root,a,b,material=metal,r=.035){const pa=new THREE.Vector3(...a),pb=new THREE.Vector3(...b),mid=pa.clone().add(pb).multiplyScalar(.5),o=mesh(root,new THREE.CylinderGeometry(r,r,pa.distanceTo(pb),8),material,...mid.toArray());o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),pb.sub(pa).normalize());return o}
function scienceStand(root){for(const a of [0,2.094,4.188])wire(root,[0,1.12,0],[Math.cos(a)*.7,0,Math.sin(a)*.7],metal,.04);slab(root,0,1.12,0,.5,.24,.56,dark);sphere(root,0,1.38,0,.17,glow);}
function sampleRock(root,variation=0){const o=mesh(root,new THREE.DodecahedronGeometry(1.0+variation,2),copper,0,.75,0);o.scale.set(1.4,.66,1.05);return o;}
function antenna(root){pole(root,0,0,4.8);slab(root,0,3.55,0,.16,.12,3.4,metal);slab(root,0,3.55,0,3.4,.12,.16,metal);for(const x of [-1.25,1.25])for(const z of [-1.25,1.25])sphere(root,x,3.55,z,.18,glow);const dish=mesh(root,new THREE.SphereGeometry(.9,20,12,0,Math.PI*2,0,Math.PI/3),shell,0,5.2,0);dish.rotation.x=Math.PI;}
function cylindricalCan(root,x=0,z=0){mesh(root,new THREE.CylinderGeometry(.21,.21,.8,16),shell,x,.46,z);mesh(root,new THREE.CylinderGeometry(.23,.23,.1,16),dark,x,.9,z);}
function makeRoverWreck(root){slab(root,0,.7,0,2.8,.8,1.6,dark);slab(root,0,1.2,0,1.9,.3,1.3,shell);for(const x of [-1.05,1.05])for(const z of [-.85,.85]){const wheel=mesh(root,new THREE.CylinderGeometry(.44,.44,.27,20),dark,x,.45,z);wheel.rotation.x=Math.PI/2;}pole(root,.7,-.2,2);sphere(root,.7,2.1,-.2,.13,glow);}
function makeCargo(root){slab(root,0,.33,0,3.2,.22,1.7,metal);for(const x of [-1.14,1.14])for(const z of [-.7,.7]){const wheel=mesh(root,new THREE.CylinderGeometry(.27,.27,.2,16),dark,x,.31,z);wheel.rotation.x=Math.PI/2;}for(let i=-1;i<=1;i++)slab(root,i*.78,.85,0,.7,.85,.9,copper);wire(root,[-1.4,.62,0],[1.4,.62,0],shell,.045);}
function makeDrill(root){scienceStand(root);const tower=mesh(root,new THREE.CylinderGeometry(.19,.23,2.3,18),dark,0,1.62,-.6);slab(root,0,2.58,-.6,1.3,.24,.66,shell);const bit=mesh(root,new THREE.CylinderGeometry(.035,.075,1.4,12),metal,.4,.86,-.63);root.userData.movingPart=bit;}
function makeBridge(root){for(const z of [-2,2]){slab(root,0,.26,z,4,.25,.55,shell);for(const x of [-1.8,1.8])pole(root,x,z,.9)}slab(root,0,.24,0,3.5,.12,3.4,metal);for(let i=-7;i<=7;i++)slab(root,i*.23,.33,0,.14,.06,3.1,copper);}
function makeHeater(root){slab(root,0,.35,0,2,.55,1.35,shell);for(const z of [-.45,.45])for(const x of [-.6,0,.6]){const hot=mesh(root,new THREE.BoxGeometry(.28,.09,.68),copper,x,.72,z);hot.userData.heatPanel=true}pole(root,1,0,2.6);sphere(root,1,2.73,0,.17,glow);}
function makeSpectrometer(root){scienceStand(root);slab(root,.55,1.16,-.15,.85,.45,.44,shell);slab(root,.96,1.15,-.15,.13,.25,.27,glass);sphere(root,1.18,1.17,-.15,.16,glow);}
function makeComms(root){antenna(root);slab(root,-1.75,.62,1.4,1.45,1.1,.88,dark);for(const x of [-2.2,-1.8,-1.4])sphere(root,x,1.24,.9,.08,glow);}
/** A separate mesh construction for each mission/task; all materials and mechanisms are scenario props. */
export function makeStageProp(stage,step){const root=new THREE.Group();root.userData.stage=stage;root.userData.step=step;
 switch(stage){
 case 0:if(step===0){slab(root,0,.9,0,1.4,1.6,.6,dark);slab(root,0,1.45,-.34,1.2,.55,.06,glass);for(const x of [-.46,0,.46])sphere(root,x,.63,-.39,.11,glow)}else if(step<3){scienceStand(root);if(step===2)slab(root,1,.45,.3,.75,.7,.6,shell)}else makeComms(root);break;
 case 1:if(step===0||step===2){sampleRock(root,.6);for(let i=0;i<3;i++)slab(root,-.5+i*.45,.67,-.4,.42,.09,1.4,step===2?mineral[i]:copper);}else if(step===1)makeDrill(root);else {slab(root,0,.2,0,2,.3,1.2,shell);for(let i=-1;i<=1;i++)cylindricalCan(root,i*.6,0)}break;
 case 2:if(step===0)sampleRock(root,1.3);else if(step===1||step===2)makeCargo(root);else makeCargo(root);break;
 case 3:if(step===0||step===2){sampleRock(root,1.1);for(let i=0;i<3;i++)sphere(root,(i-1)*.44,1.16,-.68,.13,mineral[i]);}else makeSpectrometer(root);break;
 case 4:if(step===0){for(const x of [-1.4,-.2,.95]){const col=mesh(root,new THREE.CylinderGeometry(.53,.67,2.4+Math.abs(x),6),dark,x,1.2+Math.abs(x)/2,0);col.rotation.y=.4}}else if(step===1)makeBridge(root);else if(step===2){scienceStand(root);pole(root,1,.3,2.3);sphere(root,1,2.44,.3,.26,glow)}else makeBridge(root);break;
 case 5:if(step===0||step===2)makeComms(root);else if(step===1)antenna(root);else {antenna(root);sphere(root,1.8,3.3,0,.32,glow)}break;
 case 6:if(step===0||step===1)makeRoverWreck(root);else if(step===2){makeRoverWreck(root);mesh(root,new THREE.TorusGeometry(1,.085,10,24),metal,-1,.4,0).rotation.x=Math.PI/2;}else makeRoverWreck(root);break;
 case 7:if(step===0){basin(root,2.6,shell);for(let i=0;i<7;i++)sphere(root,Math.cos(i)*1.8,.58,Math.sin(i)*1.8,.17,shell)}else if(step===1||step===3)makeHeater(root);else {scienceStand(root);slab(root,1.3,.4,0,.8,.55,.6,shell)}break;
 case 8:if(step===0||step===2)makeComms(root);else if(step===1){scienceStand(root);slab(root,1.1,.38,0,1.2,.5,1.1,copper)}else makeComms(root);break;
 case 9:if(step===0){makeCargo(root);antenna(root)}else if(step===1){makeDrill(root);sampleRock(root)}else if(step===2){makeComms(root);makeRoverWreck(root)}else makeBridge(root);break;
 }
 root.userData.dynamicMeshes=[];root.traverse(o=>{if(o.isMesh && o.material===glow)root.userData.dynamicMeshes.push(o)});
 return root;
}
/** Stage visual changes reflect completed task status, not arbitrary repeated UI sliders. */
export function animateStageProp(root,now,active){if(!root)return;const speed=now*.0017;if(root.userData.movingPart)root.userData.movingPart.rotation.y+=active?.07:0;for(const m of root.userData.dynamicMeshes||[]){const fac=.8+.2*Math.sin(speed*3+root.userData.step);m.scale.setScalar(fac)}}
