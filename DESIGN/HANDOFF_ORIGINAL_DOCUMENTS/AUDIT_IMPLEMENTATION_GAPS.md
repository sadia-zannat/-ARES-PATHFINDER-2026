# ARES PATHFINDER — Source Audit / Nov 13, 2026

## Source inspected
`ARES_PATHFINDER_GAMEPLAY_INTEGRATION_2026.zip` is the latest supplied working-baseline source. It contains a JavaScript/Three.js `viewer` and 32 NASA-derived terrain tile sets across `JEZERO_CENTER` and `JEZERO_NORTHWEST` (16 each). This is a base, **not a photoreal final game**.

### Concrete issues verified from source files (not speculation)
- `viewer/src/main.js`: `makeAstronaut` creates head/torso/arms/legs from `SphereGeometry`, `BoxGeometry` and `CylinderGeometry`; there is no GLTFLoader/AnimationMixer-based articulated humanoid runtime.
- `main.js`: rover/drone are built from primitive meshes. Simple wheel and rotor rotation exists, but no confirmed high-fidelity six-wheel suspension simulation or rigid-body traction.
- `viewer/src/missions.js`: all 10 stages are named and have distinct descriptive objectives, but `performMissionAction` largely advances generic `step` and scores with one call; checks in some mechanics add flags and messages rather than physical mechanics. Four objectives each regardless of full 75-page spec.
- `viewer/src/challenges.js`: mechanics are mainly pairs of numeric sliders with threshold checks, not 3D physical manipulator/drill/winch interactions.
- `viewer/src/audio.js`: Web Audio synthesized sounds exist; no verified NASA WAV recordings/assets included.
- Archive includes no `.glb`, `.gltf`, `.fbx`, `.wav`, `.ogg` or `.mp3` source assets.
- `viewer/public/terrain`: aligned, locally processed NASA-derived Jezero products exist and should be preserved. Raw local 3+1.7 GB USGS TIFFs are not bundled, and cannot be assumed available in Work cloud.
- Prior TECHNICAL_QA_STATUS.md explicitly states browser rendering and full 10-stage gameplay not verified. Fresh full-device visual/physics/VR tests still needed.

## Do not repeat mistakes
1. A still generated image as home/game background is not a live 3D world.
2. A model imported without skeleton/animation is not a playable rigged astronaut.
3. A 10-card stage selection grid is not 10 distinct playable missions.
4. Slider minigames and `press E` gate are not the physical gameplay required by the blueprint.
5. NASA GeoTIFF + geographic labels do not authorize scientific claims beyond source coverage.
6. Absence of runtime browser test is NOT a successful runtime acceptance.

## Highest-leverage engineering path
First integrate authentic-looking, legally usable rigged astronaut and rover assets and verify real walk/drive in ONE high-fidelity Jezero scene. Reuse terrain, add useful lighting/materials/micro-relief/LOD; then implement unique task mechanics and reuse common mission/physics systems across all stages. Treat each stage as an end-to-end loop. Revisit style polish only after real 3D works. Record source/license for every imported asset.
