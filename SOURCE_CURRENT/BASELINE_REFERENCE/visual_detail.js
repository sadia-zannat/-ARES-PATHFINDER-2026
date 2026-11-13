// Visual-only surface microstructure. These are *authored materials*, not additional NASA height observations.
export function createRegolithNormal(THREE){
 const size=256,canvas=document.createElement('canvas');canvas.width=canvas.height=size;
 const context=canvas.getContext('2d');const image=context.createImageData(size,size);
 const heights=new Float32Array(size*size);let seed=51721;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967295};
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const v=(rand()-.5)*.5 + Math.sin(x*.41+y*.29)*.07+Math.cos(x*.13-y*.16)*.12;
  heights[y*size+x]=v;
 }
 const val=(x,y)=>heights[(((y+size)%size)*size+(x+size)%size)];
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const dx=val(x+1,y)-val(x-1,y),dy=val(x,y+1)-val(x,y-1);
  let nx=-dx*.55,ny=-dy*.55,nz=1;const len=Math.hypot(nx,ny,nz);nx/=len;ny/=len;nz/=len;
  const i=(y*size+x)*4;image.data[i]=(nx*.5+.5)*255;image.data[i+1]=(ny*.5+.5)*255;image.data[i+2]=(nz*.5+.5)*255;image.data[i+3]=255;
 }
 context.putImageData(image,0,0);
 const tex=new THREE.CanvasTexture(canvas);tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(42,42);
 tex.generateMipmaps=true;tex.minFilter=THREE.LinearMipmapLinearFilter;return tex;
}
export function createRock(size,seed,material){
 // Reproducible high-poly irregular stone: decorative and not a surveyed obstacle point.
 const THREE=window.__THREE_FOR_ARES__;const geom=new THREE.IcosahedronGeometry(size,2);const p=geom.attributes.position;
 for(let i=0;i<p.count;i++){
   const x=p.getX(i),y=p.getY(i),z=p.getZ(i);const n=Math.sin(x*9.1+y*11.3+seed*.13)*Math.cos(z*7.9-x*6.3)*.13+Math.sin(x*3.3+z*5.1+seed)*.12;
   const k=1+n; p.setXYZ(i,x*k,y*k,z*k);
 }
 geom.computeVertexNormals();const mesh=new THREE.Mesh(geom,material);mesh.castShadow=true;mesh.receiveShadow=true;return mesh;
}
function paintCountry(ctx,code){
 const c=ctx,w=256,h=154;
 c.clearRect(0,0,w,h);c.fillStyle='#f5f1eb';c.fillRect(0,0,w,h);
 switch(code){
 case 'BD': c.fillStyle='#006a4e';c.fillRect(0,0,w,h);c.fillStyle='#f42a41';c.beginPath();c.arc(117,77,43,0,2*Math.PI);c.fill();break;
 case 'JP':c.fillStyle='#bd0029';c.beginPath();c.arc(128,77,41,0,2*Math.PI);c.fill();break;
 case 'CA':c.fillStyle='#c21c29';c.fillRect(0,0,51,h);c.fillRect(205,0,51,h);c.beginPath();c.moveTo(126,33);c.lineTo(137,57);c.lineTo(153,53);c.lineTo(148,70);c.lineTo(166,82);c.lineTo(140,87);c.lineTo(131,112);c.lineTo(123,93);c.lineTo(106,89);c.lineTo(112,77);c.lineTo(94,64);c.lineTo(116,64);c.closePath();c.fill();break;
 case 'US':for(let i=0;i<13;i++){c.fillStyle=i%2===0?'#b22234':'#fff';c.fillRect(0,i*h/13,w,h/13+1)}c.fillStyle='#3c3b6e';c.fillRect(0,0,112,h*7/13);c.fillStyle='white';for(let r=0;r<5;r++)for(let j=0;j<6;j++){c.beginPath();c.arc(8+j*18,8+r*14,2.2,0,7);c.fill()}break;
 case 'FR':c.fillStyle='#0055a4';c.fillRect(0,0,85,h);c.fillStyle='#ef4135';c.fillRect(171,0,85,h);break;
 case 'GB':c.fillStyle='#012169';c.fillRect(0,0,w,h);c.strokeStyle='white';c.lineWidth=28;c.beginPath();c.moveTo(0,0);c.lineTo(w,h);c.moveTo(0,h);c.lineTo(w,0);c.stroke();c.strokeStyle='#c8102e';c.lineWidth=12;c.stroke();c.fillStyle='white';c.fillRect(0,52,w,50);c.fillRect(104,0,48,h);c.fillStyle='#c8102e';c.fillRect(0,64,w,26);c.fillRect(116,0,24,h);break;
 }
}
export function makeFlag(THREE,code='BD'){
 const root=new THREE.Group(),pole=new THREE.Mesh(new THREE.CylinderGeometry(.055,.07,4.8,14),new THREE.MeshStandardMaterial({color:0xc3c6bc,metalness:.75,roughness:.29}));pole.position.y=2.4;pole.castShadow=true;root.add(pole);
 const canvas=document.createElement('canvas');canvas.width=256;canvas.height=154;paintCountry(canvas.getContext('2d'),code);
 const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;
 const geo=new THREE.PlaneGeometry(2.55,1.54,20,8);const attr=geo.attributes.position;
 for(let i=0;i<attr.count;i++){const x=attr.getX(i),y=attr.getY(i);attr.setZ(i,.065*Math.sin(x*2.8+y*.5))}
 geo.computeVertexNormals();
 const fabric=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({map:tex,side:THREE.DoubleSide,roughness:.92,metalness:0}));fabric.position.set(1.26,3.85,0);fabric.castShadow=true;root.add(fabric);
 return root;
}
export function makePanel(){}
