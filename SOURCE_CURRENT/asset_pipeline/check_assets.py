import bpy
from pathlib import Path
from mathutils import Vector
P=Path(__file__).resolve().parent
for name in ['atlas6','alpha','skyscout']:
 bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False);bpy.ops.import_scene.gltf(filepath=str(P.parent/'viewer/public/assets'/(name+'.glb')))
 pts=[o.matrix_world@v.co for o in bpy.context.scene.objects if o.type=='MESH'for v in o.data.vertices];lo=Vector([min(p[k]for p in pts)for k in range(3)]);hi=Vector([max(p[k]for p in pts)for k in range(3)]);center=(lo+hi)/2;span=max(hi-lo);print(name,'BOUNDS',list(lo),list(hi),flush=True)
 bpy.ops.object.camera_add(location=center+Vector((1.5,-2.3,1.2))*span);cam=bpy.context.object;cam.rotation_euler=(center-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=span*1.35;bpy.context.scene.camera=cam
 bpy.ops.object.light_add(type='AREA',location=center+Vector((2,-2,3))*span);bpy.context.object.data.energy=1500;bpy.context.object.data.size=span*2;s=bpy.context.scene;s.world.color=(.18,.18,.18);s.render.engine='CYCLES';s.cycles.samples=8;s.cycles.use_denoising=False;s.render.resolution_x=s.render.resolution_y=400;s.render.resolution_percentage=100;s.render.filepath=str(P/(name+'_inspection.png'));bpy.ops.render.render(write_still=True)
