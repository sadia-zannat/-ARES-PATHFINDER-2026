import bpy,math
from pathlib import Path
P=(Path(__file__).resolve().parent.parent/'viewer/public/assets');bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False);bpy.ops.import_scene.gltf(filepath=str(P/'scanned_boulder.glb'))
for o in bpy.context.scene.objects:
 if o.type!='MESH':continue
 bpy.context.view_layer.objects.active=o;o.select_set(True);o.data.remesh_voxel_size=.09;bpy.ops.object.voxel_remesh();o.data.calc_loop_triangles();n=len(o.data.loop_triangles);m=o.modifiers.new('Dense pebble LOD','DECIMATE');m.ratio=min(1,450/max(1,n));bpy.ops.object.modifier_apply(modifier=m.name)
 uv=o.data.uv_layers.new(name='UVMap')
 for f in o.data.polygons:
  f.use_smooth=True
  for li in f.loop_indices:
   v=o.data.vertices[o.data.loops[li].vertex_index].co;uv.data[li].uv=(v.x*.5,v.y*.5)
 o.data.calc_loop_triangles();print('FINAL PEBBLE TRIANGLES',len(o.data.loop_triangles),flush=True)
bpy.ops.export_scene.gltf(filepath=str(P/'scanned_pebbles.glb'),export_format='GLB',export_animations=False)
