# NASA Z2 derivative skin / original animation; correctly preserved vehicle pivot transforms.
import bpy,math,json
from pathlib import Path
from mathutils import Vector
P=Path(__file__).resolve().parent;OUT=P.parent/'viewer/public/assets'
def clear():bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def import_model(n):clear();bpy.ops.import_scene.gltf(filepath=str(P/'decoded'/n))
def export(n,animated=False):
 bpy.ops.wm.save_as_mainfile(filepath=str(P/(n+'.blend')))
 bpy.ops.export_scene.gltf(filepath=str(OUT/(n+'.glb')),export_format='GLB',export_animations=animated,export_animation_mode='NLA_TRACKS',export_force_sampling=True,export_frame_range=False,export_draco_mesh_compression_enable=False)
def pivot(name,pos,objects):
 e=bpy.data.objects.new(name,None);bpy.context.collection.objects.link(e);e.location=pos;bpy.context.view_layer.update()
 for o in objects:
  mw=o.matrix_world.copy();o.parent=e;o.matrix_parent_inverse=e.matrix_world.inverted();o.matrix_world=mw;bpy.context.view_layer.update()
 return e
import_model('Z2 Spacesuit.glb');meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']
for o in meshes:
 bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.transform_apply(location=True,rotation=True,scale=True);o.select_set(False)
arm=bpy.data.armatures.new('ARES_EVA_Skeleton');rig=bpy.data.objects.new('ARES_EVA_Rig',arm);bpy.context.collection.objects.link(rig);bpy.context.view_layer.objects.active=rig;rig.select_set(True);bpy.ops.object.mode_set(mode='EDIT')
B={'Root':((0,0,0),(0,0,.12),None),'Hips':((0,0,.94),(0,0,1.11),'Root'),'Spine':((0,0,1.11),(0,0,1.37),'Hips'),'Chest':((0,0,1.37),(0,0,1.60),'Spine'),'Neck':((0,0,1.60),(0,0,1.68),'Chest'),'Head':((0,0,1.68),(0,0,1.91),'Neck')}
for sign,side in [(-1,'R'),(1,'L')]:
 B.update({'UpperArm.'+side:((sign*.28,-.07,1.50),(sign*.35,-.26,1.28),'Chest'),'Forearm.'+side:((sign*.35,-.26,1.28),(sign*.34,-.51,1.10),'UpperArm.'+side),'Hand.'+side:((sign*.34,-.51,1.10),(sign*.32,-.60,1.04),'Forearm.'+side),'Thigh.'+side:((sign*.18,0,.97),(sign*.19,-.035,.54),'Hips'),'Shin.'+side:((sign*.19,-.035,.54),(sign*.19,-.02,.16),'Thigh.'+side),'Foot.'+side:((sign*.19,-.02,.16),(sign*.19,-.25,.07),'Shin.'+side)})
for name,(head,tail,parent) in B.items():
 b=arm.edit_bones.new(name);b.head=head;b.tail=tail
 if parent:b.parent=arm.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')
def blend(z,c,w):return max(0,min(1,(z-c)/w+.5))
def distance(p,a,b):
 a,b=Vector(a),Vector(b);v=b-a;t=max(0,min(1,(p-a).dot(v)/v.length_squared));return (p-(a+t*v)).length
for o in meshes:
 groups={n:o.vertex_groups.new(name=n) for n in B}
 for v in o.data.vertices:
  x,y,z=v.co;side='L' if x>=0 else 'R'
  if z<1.02:
   if z>.87:t=blend(z,.97,.16);weights={'Hips':t,'Thigh.'+side:1-t}
   elif z>.38:t=blend(z,.54,.18);weights={'Thigh.'+side:t,'Shin.'+side:1-t}
   else:t=blend(z,.17,.12);weights={'Shin.'+side:t,'Foot.'+side:1-t}
  elif z<1.58 and ((abs(x)>.245 and y<.07)or(y<-.32 and abs(x)>.19)):
   names=['UpperArm.'+side,'Forearm.'+side,'Hand.'+side];d=sorted([(distance(v.co,B[n][0],B[n][1]),n)for n in names])[:2];raw=[1/(a+.035)**4 for a,n in d];weights={d[i][1]:raw[i]/sum(raw)for i in range(2)}
   if z>1.47:t=blend(z,1.55,.18);weights={n:w*(1-t)for n,w in weights.items()};weights['Chest']=t
  elif z>1.64 and y<.28:weights={'Head':1}
  elif z>1.5:weights={'Chest':1}
  elif z>1.22:t=blend(z,1.38,.24);weights={'Chest':t,'Spine':1-t}
  else:weights={'Spine':1}
  for n,w in weights.items():
   if w>.0001:groups[n].add([v.index],w,'REPLACE')
 mod=o.modifiers.new('EVA Skin','ARMATURE');mod.object=rig;o.parent=rig;o.name='Z2_EVA_Suit'
rig.animation_data_create();names=['Idle','Walk','Run','TurnLeft','TurnRight','Jump','Land','Crouch','Slide','Step','Scan','Sample','Drill','Repair','Deploy','Board','Recover']
for name in names:
 action=bpy.data.actions.new(name);rig.animation_data.action=action;duration=48 if name=='Idle' else 30
 for frame in range(duration+1):
  t=frame/duration;phase=t*math.tau
  for pb in rig.pose.bones:pb.rotation_mode='XYZ';pb.rotation_euler=(0,0,0);pb.location=(0,0,0)
  rig.pose.bones['Chest'].rotation_euler.y=.012*math.sin(phase)
  if name in ['Walk','Run','Step']:
   a=.38 if name=='Walk' else .64
   for side,offset in [('L',0),('R',math.pi)]:
    swing=math.sin(phase+offset);rig.pose.bones['Thigh.'+side].rotation_euler.x=a*swing;rig.pose.bones['Shin.'+side].rotation_euler.x=-max(0,-swing)*a*1.35;rig.pose.bones['Foot.'+side].rotation_euler.x=.12*swing;rig.pose.bones['UpperArm.'+side].rotation_euler.x=-.25*swing
   rig.pose.bones['Hips'].location.z=.018*(1-math.cos(phase*2));rig.pose.bones['Chest'].rotation_euler.x=.1 if name=='Run' else .035
  elif name in ['Crouch','Slide','Sample','Drill','Repair','Recover','Land']:
   k=1 if name in ['Crouch','Slide']else math.sin(math.pi*t);rig.pose.bones['Hips'].location.z=-.22*k
   for side in ['L','R']:rig.pose.bones['Thigh.'+side].rotation_euler.x=.65*k;rig.pose.bones['Shin.'+side].rotation_euler.x=-1.12*k;rig.pose.bones['Foot.'+side].rotation_euler.x=.3*k
   rig.pose.bones['Chest'].rotation_euler.x=.28*k;rig.pose.bones['UpperArm.R'].rotation_euler.x=-.45*k;rig.pose.bones['Forearm.R'].rotation_euler.x=-.25*k+.025*math.sin(phase*6);rig.pose.bones['UpperArm.L'].rotation_euler.x=-.25*k
  elif name in ['Scan','Deploy','Board']:
   k=math.sin(math.pi*t);rig.pose.bones['UpperArm.R'].rotation_euler.x=-.55*k;rig.pose.bones['Forearm.R'].rotation_euler.x=-.35*k;rig.pose.bones['Hand.R'].rotation_euler.z=.1*math.sin(phase*2)
  elif name=='Jump':
   k=math.sin(math.pi*t)
   for side in ['L','R']:rig.pose.bones['Thigh.'+side].rotation_euler.x=.3*k;rig.pose.bones['Shin.'+side].rotation_euler.x=-.55*k
  elif name.startswith('Turn'):rig.pose.bones['Chest'].rotation_euler.y=(.14 if name=='TurnLeft'else-.14)*math.sin(phase)
  for pb in rig.pose.bones:
   pb.keyframe_insert(data_path='rotation_euler',frame=frame,group=pb.name)
   if pb.name=='Hips':pb.keyframe_insert(data_path='location',frame=frame,group=pb.name)
 rig.animation_data.action=None;track=rig.animation_data.nla_tracks.new();track.name=name;strip=track.strips.new(name,1,action);strip.action_frame_start=0;strip.action_frame_end=duration;track.mute=True
for pb in rig.pose.bones:pb.rotation_euler=(0,0,0);pb.location=(0,0,0)
bpy.context.scene.frame_set(0);export('eva_rig',True)
for source,name in [('Mars 2020 Perseverance Rover','atlas6'),('Ingenuity Mars Helicopter','skyscout'),('Robonaut 2','alpha'),('Habitat Demonstration Unit (part 1)','habitat')]:
 import_model(source+'.glb')
 for o in list(bpy.context.scene.objects):
  if o.type=='MESH'and not len(o.data.vertices):bpy.data.objects.remove(o,do_unlink=True)
 if name=='atlas6':
  w=bpy.data.objects.get('Wheels_objs')
  if w:
   bpy.ops.object.select_all(action='DESELECT');w.select_set(True);bpy.context.view_layer.objects.active=w;bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.mesh.separate(type='LOOSE');bpy.ops.object.mode_set(mode='OBJECT');parts=[o for o in bpy.context.selected_objects if o.type=='MESH'];groups={}
   for o in parts:
    c=sum((o.matrix_world@v.co for v in o.data.vertices),Vector())/max(1,len(o.data.vertices));side='L'if c.x<0 else'R';row=min(range(3),key=lambda i:abs(c.y-[-1.02,.03,1.09][i]));groups.setdefault((side,row),[]).append(o)
   for(side,row),objects in groups.items():pivot('Wheel_'+side+str(row),(-1.13 if side=='L'else 1.13,[-1.02,.03,1.09][row],.267),objects)
  head=bpy.data.objects.get('head')
  if head:pivot('MastYaw',(-.04,.12,1.34),[head])
 if name=='skyscout':
  for node,z in [('rotors_01',.43),('rotors_02',.34)]:
   o=bpy.data.objects.get(node)
   if o:pivot('Rotor_'+node,(0,0,z),[o])
 if name=='alpha':
  objects=[o for o in bpy.context.scene.objects if o.type=='MESH']
  for side,sign in [('L',-1),('R',1)]:
   for tag,terms,pos in [('Arm',['Bicep','Elbow','OuterShoulder','InnerShoulder','Hand_Cover'],(sign*.30,0,1.92)),('Leg',['Knee','Foot','EndEffector'],(sign*.23,0,1.35))]:
    chosen=[o for o in objects if o.name.endswith('.'+side)and any(s in o.name for s in terms)]
    if chosen:pivot('Alpha'+tag+'_'+side,pos,chosen)
 export(name)
print('Assets rebuilt: real EVA skin, 17 clips, corrected world-preserving vehicle pivots',flush=True)
