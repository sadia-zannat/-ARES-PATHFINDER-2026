import bpy
from pathlib import Path
P=Path(__file__).resolve().parent.parent/'viewer/public/assets'
for name,target in [('scanned_boulder',8000),('scanned_pebbles',450)]:
 bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False);bpy.ops.import_scene.gltf(filepath=str(P/'scanned_boulder.glb'))
 for o in bpy.context.scene.objects:
  if o.type!='MESH':continue
  bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o;bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.mesh.remove_doubles(threshold=.0001);bpy.ops.object.mode_set(mode='OBJECT');o.data.calc_loop_triangles();tri=len(o.data.loop_triangles);mod=o.modifiers.new('Browser geometry budget','DECIMATE');mod.ratio=min(.99,target/max(1,tri));bpy.ops.object.modifier_apply(modifier=mod.name);o.data.calc_loop_triangles();print(name,tri,'->',len(o.data.loop_triangles),flush=True)
 bpy.ops.export_scene.gltf(filepath=str(P/(name+'.glb')),export_format='GLB',export_animations=False)
