import bpy,math,json
from pathlib import Path
from mathutils import Vector
P=Path(__file__).resolve().parent;SRC=P/'new_sources';OUT=P.parent/'viewer/public/assets'
def clear():bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def save(name,animated=False):
 bpy.ops.export_scene.gltf(filepath=str(OUT/(name+'.glb')),export_format='GLB',export_animations=animated,export_animation_mode='NLA_TRACKS',export_force_sampling=True,export_frame_range=False)
def mat(name,color,rough=.5):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True;bs=m.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(*color,1);bs.inputs['Roughness'].default_value=rough;return m
# Actual CC0 MakeHuman head topology and six different macro targets.
verts=[];faces=[];groups=[];uv=[];fuv=[];group=''
for line in (SRC/'makehuman_base.obj').read_text().splitlines():
 s=line.split()
 if not s:continue
 if s[0]=='v':verts.append(Vector(tuple(map(float,s[1:4]))))
 elif s[0]=='vt':uv.append(tuple(map(float,s[1:3])))
 elif s[0]=='g':group=s[1]
 elif s[0]=='f':
  ids=[int(x.split('/')[0])-1 for x in s[1:]]
  if group=='body'and all(verts[i].y>5.65 for i in ids):faces.append(ids);fuv.append([int(x.split('/')[1])-1 for x in s[1:]])
crew=[('Leon','asian-male-young',1.94,1.05,(.48,.28,.17),(.045,.025,.014)),('Ethan','caucasian-male-young',1.92,1.1,(.62,.39,.27),(.14,.07,.028)),('Orion','african-male-young',1.87,.99,(.24,.115,.058),(.018,.012,.01)),('Sadia','asian-female-young',1.76,.92,(.49,.285,.18),(.025,.016,.012)),('Amelia','caucasian-female-young',1.82,.96,(.69,.44,.30),(.22,.10,.037)),('Noor','african-female-young',1.79,.93,(.30,.145,.08),(.022,.014,.012))]
for name,target,height,width,skin,hair in crew:
 bpy.ops.wm.open_mainfile(filepath=str(P/'eva_rig.blend'));rig=next(o for o in bpy.context.scene.objects if o.type=='ARMATURE')
 for pb in rig.pose.bones:pb.rotation_euler=(0,0,0);pb.location=(0,0,0)
 # Real helmet aperture, not a portrait painted onto a model.
 for o in [o for o in bpy.context.scene.objects if o.type=='MESH']:
  glass=mat(name+'_GoldVisor',(.25,.14,.055),.16);glass.diffuse_color=(.25,.14,.055,.16);bs=glass.node_tree.nodes.get('Principled BSDF');bs.inputs['Alpha'].default_value=.16;bs.inputs['Metallic'].default_value=.25;glass.surface_render_method='DITHERED';o.data.materials.append(glass);gi=len(o.data.materials)-1
  for f in o.data.polygons:
   c=sum((o.data.vertices[i].co for i in f.vertices),Vector())/len(f.vertices)
   if abs(c.x)<.18 and c.y<-.17 and 1.64<c.z<1.86:f.material_index=gi
  # Individually fitted body proportions, exported as six editable meshes.
  for v in o.data.vertices:
   if v.co.z<1.6:v.co.x*=width;v.co.y*=.97+(width-1)*.3
  o.name=name+'_EVA_Suit'
 points=[v.copy()for v in verts]
 for l in (SRC/(target+'.target')).read_text().splitlines():
  if l.startswith('#')or not l.strip():continue
  s=l.split()
  if len(s)==4:
   i=int(s[0]);points[i]+=Vector(tuple(map(float,s[1:])))*.88
 ids=sorted(set(i for f in faces for i in f));mapping={old:i for i,old in enumerate(ids)}
 # MakeHuman Y up / Z forward -> Blender Z up / -Y forward.
 raw=[(points[i].x,-points[i].z,points[i].y)for i in ids];lo=[min(v[k]for v in raw)for k in range(3)];hi=[max(v[k]for v in raw)for k in range(3)];coords=[((v[0]-(lo[0]+hi[0])/2)*.22/(hi[0]-lo[0]),-.075+(v[1]-(lo[1]+hi[1])/2)*.18/(hi[1]-lo[1]),1.56+(v[2]-lo[2])*.30/(hi[2]-lo[2]))for v in raw]
 mesh=bpy.data.meshes.new(name+'_MakeHuman_Head');mesh.from_pydata(coords,[],[[mapping[i]for i in f]for f in faces]);mesh.update();head=bpy.data.objects.new(name+'_Head',mesh);bpy.context.collection.objects.link(head)
 skinmat=mat(name+'_Skin',skin,.48);bs=skinmat.node_tree.nodes.get('Principled BSDF');bs.inputs['Subsurface Weight'].default_value=.12;mesh.materials.append(skinmat)
 uvLayer=mesh.uv_layers.new(name='UVMap')
 for poly,uf in zip(mesh.polygons,fuv):
  for li,ui in zip(poly.loop_indices,uf):uvLayer.data[li].uv=uv[ui]
 for f in mesh.polygons:f.use_smooth=True
 vg=head.vertex_groups.new(name='Head');vg.add(list(range(len(mesh.vertices))),1,'REPLACE');arm=head.modifiers.new('Head bone skin','ARMATURE');arm.object=rig;head.parent=rig
 sub=head.modifiers.new('Face surface','SUBSURF');sub.levels=sub.render_levels=1
 # Scalp from actual head topology, fitted to each head rather than a sphere.
 hairfaces=[]
 for f in mesh.polygons:
  c=sum((mesh.vertices[i].co for i in f.vertices),Vector())/len(f.vertices)
  if c.z>1.79 and (c.y>-.045 or c.z>1.83):hairfaces.append(tuple(f.vertices))
 hm=bpy.data.meshes.new(name+'_Scalp');hm.from_pydata([(v.co.x*1.018,v.co.y*1.018,v.co.z+.002)for v in mesh.vertices],[],hairfaces);hm.update();ho=bpy.data.objects.new(name+'_Hair',hm);bpy.context.collection.objects.link(ho);hm.materials.append(mat(name+'_HairFibers',hair,.7));ho.parent=rig;vg=ho.vertex_groups.new(name='Head');vg.add(list(range(len(hm.vertices))),1,'REPLACE');am=ho.modifiers.new('Hair bone skin','ARMATURE');am.object=rig
 for f in hm.polygons:f.use_smooth=True
 rig.scale=(1,1,height/1.95);bpy.context.view_layer.update();save('crew_'+name.lower(),False)
 print('CREW EXPORTED',name,len(mesh.vertices),flush=True)
print('Six separate skinned characters and photogrammetry LODs exported',flush=True)
