# ARES PATHFINDER — Gameplay Integration Source (12 November 2026)

## Run on Windows (one action, no npm needed)

1. Extract the ZIP fully to a short path such as `C:\ARES_PATHFINDER`.
2. Double-click `START_PATHFINDER_WINDOWS.bat`.
3. If Chrome did not open automatically, open `http://127.0.0.1:5186/`.
4. Select **START EXPEDITION**, choose a crew member, and open Stage 01.

Only `Python` is needed to serve the already-generated tiles and bundled Three.js modules. Original NASA TIFFs are not needed at runtime. The `PREPARE_REAL_TERRAIN_WINDOWS.bat` script is only for reprocessing the user's original TIFFs and should NOT be rerun for this package.

## Implemented in this package

- NASA-sampled Jezero center and northwest elevation + optical terrain tiles, preserved from the previous user-generated foundation.
- Ten authored mission definitions and four-objective progression loop, with distinct stage-specific interactive world props. Stages 3–10 use explicitly modeled terrain scenarios, not claimed to be NASA-mapped locations.
- Stage 1 EVA checklist, two survey beacon interactions, symbolic country flag placement and camera panorama verification.
- Stage 2 drill, Stage 3 cargo towing, Stage 4 mineral survey, Stage 5 fissure crossing, Stage 6 relay, Stage 7 rover rescue, Stage 8 frost thermal task, Stage 9 dust emergency and Stage 10 final mission equipment tasks have separate 3D targets and configuration interactions, but are NOT all commercial-grade finished mini-games.
- Rover mode requirement for the vehicle-assisted cargo/recovery missions; towed object follows rover after winch action.
- In-world route overlay calculated from local 3D height samples (A*), zoomed moving terrain minimap, and full-screen map.
- Keyboard + on-screen movement wheel / action controls, saves/unlock/credits, optional synthesized original wind, helmet, rover and task audio.
- Standard HTML + imported Three.js; local Python launch does not need Node/npm.

## Scientific notes

- The visible terrain mosaics for the Jezero regions were processed from user-provided local HiRISE GeoTIFF inputs. Metadata and landmark alignment received preliminary QA in the source conversation, not independent end-to-end NASA provenance certification.
- Underlying NASA originals were never modified here. Terrain regions beyond those provided are authored modeled representations.
- Routes and atmosphere effects are educational simulations, NOT operational astronaut navigation, terrain certification or NASA telemetry.
- Built-in Mars sound is original synthesized interactive audio, NOT NASA's Perseverance microphone recording. If later adding a NASA recording, place its file at `viewer/audio/nasa_mars_wind.mp3` and add the line `window.ARES_NASA_AUDIO_PATH='./audio/nasa_mars_wind.mp3';` in the HTML head. Check NASA source and media usage guidelines.

## Important current gaps (do not present this as AAA final)

- Procedural astronauts are not professionally rigged photorealistic character assets; high-quality licensed source meshes + skeletal animations still needed.
- Vehicles are detailed procedural geometry with functional control and approximation, not independently validated full suspension physics.
- The ten stages retain scripted four-step objectives, not all unique deep arcade gameplay systems.
- Full real NASA Mars sound package is not included; optional integration hook exists.
- VR headsets, mobile performance and entire Windows GPU rendering were not verified in this environment.
- Scientific layers beyond Jezero HiRISE DTM + optical (MEDA, THEMIS, CRISM, CTX) are NOT included in the data package.

## Code checks completed

- `node --check` passed for all JavaScript source files.
- Existing Node test passed for route constraints, NoData handling, mission progression and challenge definitions.
- Raster manifest contains 2 regions, 16 terrain tiles per region.
- Browser automation was attempted but blocked by administrator network restrictions in the test environment; this is NOT a verified Windows visual acceptance test.

## Sources & reuse

NASA 3D models: https://science.nasa.gov/3d-resources/
NASA Mars microphone audio: https://science.nasa.gov/resource/perseverance-rovers-supercam-records-wind-on-mars/
Three.js (MIT license): `viewer/vendor/three/LICENSE`.

`START_VIEWER_WINDOWS.bat` is preserved for backward compatibility but now points to the one-click launcher.
