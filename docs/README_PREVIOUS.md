# Current submission release

Use START_ARES_WINDOWS.bat for normal progression, or START_ARES_PRESENTER_WINDOWS.bat for local recording. The included dist is freshly compiled. Read FINAL_QA_REPORT.md for the final verified/incomplete distinction and SUBMISSION_DEMO_SCRIPT.md for the recording sequence.

Mission Ops: click DEMO · MODELED HAZARD SCENARIO, compare SHORTEST and SAFE, reduce dose to 0.001 and recalculate to reject the plan, restore 0.15 and execute a feasible route, then MAP → EMERGENCY RETURN. Resources, dose and the hazard scenario are modeled.

# ARES PATHFINDER

Interactive Mars exploration, terrain-aware return planning and a ten-expedition campaign. This package continues the supplied source and 32 processed Jezero tiles. It does not establish that the approved cinematic visual acceptance has been met. Read **FINAL_QA_REPORT.md** for the release verdict and exact tested/untested scope.

## Run the included build

On Windows, extract everything and double-click **START_ARES_WINDOWS.bat**. Python 3 is required; no Python packages, Node installation, NASA redownload or API key is needed for playback. Open `http://localhost:5173` and keep the terminal open. See **WINDOWS_BANGLA.md** for Bengali instructions. The included build is under `SOURCE_CURRENT/viewer/dist`.

On Linux/macOS:

```sh
cd SOURCE_CURRENT
python3 serve.py
```

Use `--offline` for bundled NASA observations and imagery. The local server binds only to loopback. Do not expose this development host directly on the public Internet.

## Editable source

```sh
cd SOURCE_CURRENT/viewer
npm ci
npm test
npm run build
npm run dev
```

Node 22 LTS is recommended. Vite serves the interactive game; the NASA gateway runs with Python `serve.py` against the built distribution. NASA snapshots also remain in `public/nasa` for offline use. To test the gateway after a build: `python SOURCE_CURRENT/test_server.py`.

## Runtime systems

- Three.js PBR terrain, NASA glTF vehicles, six individually fitted skinned EVA meshes with distinct CC0 MakeHuman heads and a shared 18-bone / 17-clip animation library, third-person controller and camera terrain collision.
- Shared collision and motion inputs for keyboard/touch; ATLAS throttle/steering/slip, SKYSCOUT altitude/rotors, ALPHA locomotion and analytic two-link relay manipulator.
- Physical-object mission gates: scan raycasts and exposure, instrument alignment/load/heat, sample identity/integrity, cable towing, anchor bridge, connected relay graph, cold and storm resource effects, multi-robot convoy.
- Local campaign persistence, sequential unlocks, earned credits, equipment ownership/loadout, checkpoint recovery and save export/import.
- Shared A* for guidance, Mission Ops and companions. It uses terrain masks, metric slope limits and risk costs; round-trip budgets include task work and return reserve. Planning/resource values are educational models, not operational EVA certification.
- Authored Web Audio helmet/contact/vehicle cues and HRTF event panning; separately selectable historical NASA Sol 1 recording.

## Mars science and NASA connections

The supplied Jezero height/optical subset is used for Stages 01–02, Explorer, Atlas and Mission Ops. The 32 tiles are kept locally. Heights are processed at 2 m. The delivered raw-to-processed metadata/provenance remains in DATA_QA and the original design handoff. Raw source registration has not been independently certified here. Display color, microdetail and props are reconstructed. Stages 03–10 are geographically inspired modeled worlds, including all game weather and instrument responses.

Public NASA services used:

| Source | Actual use | Authentication |
|---|---|---|
| Supplied HiRISE-derived Jezero DTM and optical tiles | Terrain geometry, optical layer, derived slope/roughness, NoData-aware route planning | None |
| NASA Mars Trek / MGS MOLA 463 m color hillshade | Global Atlas context; bundled two world tiles and WMTS capabilities | None |
| NASA Images API | Mission imagery and attribution/metadata; cached gateway and bundled snapshot | None |
| NASA PDS MEDA Sol 36 wind product | Historical table, units, uncertainty/flags and descriptive valid stationary subset | None |
| JPL Horizons | Dated Sun-centered Mars vector snapshot / orbital context; game sky is illustrative | None |
| NASA SuperCam Sol 1 historical audio | User-triggered historical playback; distinct from authored gameplay cues | None |

`SOURCE_CURRENT/serve.py` provides `/api/nasa/status`, `/catalog`, `/environment`, `/orbit`, `/insight` and `/trek`. It uses an allow-list, timeouts, a 24-hour imagery cache, stale/offline fallback and a per-client request limit with Retry-After. No arbitrary URL proxy exists. Historical PDS and dated Horizons data are intentionally stable snapshots; they are not a live weather feed. The retired Mars Rover Photos API is not a dependency.

**NASA_API_KEY** is optional backend environment support only. Copy `.env.example` to `.env` beside serve.py and set it locally for optional authenticated InSight archive refresh. The other bundled public providers do not require it. Never put a real credential in frontend source, screenshots, GitHub or this ZIP. No real credential is supplied. `.env` is excluded and the server does not serve hidden files.

## Repository structure

- `SOURCE_CURRENT/viewer/src` — integrated game, science UI, routing, missions, saves, audio and app-owned QA runner.
- `SOURCE_CURRENT/viewer/public` — local glTF/PBR/audio, NASA snapshots and processed terrain.
- `SOURCE_CURRENT/asset_pipeline` — reproducible NASA import/decode, skinning, animation and articulated-node preparation scripts; original downloads are reproducible from source URLs.
- `SOURCE_CURRENT/BASELINE_REFERENCE` — preserved original runtime modules for comparison.
- `DESIGN` — original approved references, Master Blueprint and reference video.
- `EVIDENCE` — production build, automated results and actual browser screenshots. Blender inspection images are asset debugging only, not gameplay proof.
- `THIRD_PARTY`, `ASSET_CREDITS.md` — attribution and license/policy source copies.

## Verification

`?qa=1` exposes the app-owned deterministic runner with a separate test save. It drives the same controller and tools in accelerated 1/60-second simulation, including actual collisions, sample proof, towing and completion gates. It can view locked stages for review. Tests that inject an exhausted battery are explicitly labeled fault injection. They do not establish natural-duration balancing, photorealistic appearance, target-device performance or physical VR/mobile operation. QA reports retain any failed attempts. `?qa=1&opscheck=1` verifies feasible/rejected Mission Ops budgets and the selected-route handoff to the open forecourt. `?qa=1&view=6` is an isolated review of Stage 07; `?qa=1&page=atlas` opens the Atlas review.

## GitHub upload

Create an empty GitHub repository yourself, then run from this extracted project folder:

```sh
git init
git add .
git commit -m "Integrate ARES Pathfinder Mars campaign and science runtime"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Review the files before `git add`. Real `.env` files, caches and node_modules are ignored. Large processed assets may need Git LFS if your repository host rejects them. Do not upload the enclosing delivery ZIP into the repository. Nothing has been submitted on your behalf.

See **DEMO_SCRIPT_BANGLA.md** for the recording sequence, narration, submission description and technical stack. NASA does not endorse this project.

Authenticated InSight integration uses `NASA_API_KEY` only on the Python server. A successful authenticated request was tested in this environment and its seven historical sols (October 2020) are bundled without the credential. InSight observations are historical, never live weather. The private configured `.env` is deliberately excluded from delivery; a Windows user can supply the same environment variable locally to refresh this optional archive endpoint.

Mission Ops dose is an explicit educational model at 0.03 mSv/hour; it is not a local NASA radiation measurement or an operational EVA recommendation. The radiation budget can reject an otherwise feasible route.

## NOVEMBER 13 — DEMO NAVIGATION UPDATE

For urgent local video recording, extract the ZIP and double-click **`START_ARES_PRESENTER_WINDOWS.bat`**. This launches a local recording-only presenter view with all ten mission cards selectable, while keeping normal player progress separate. It is not an authenticated web admin account. Standard player play-through uses **`START_ARES_WINDOWS.bat`**.

Inside a mission: the HUD provides a contextual explanation and `? MISSION GUIDE` button. Cyan line: route. Orange ring: target. H: starting habitat. Open **MAP (M)** for a larger view. Complete the objectives in order, then return as the astronaut to the habitat: final completion and sequential unlock are automatic once the required evidence/vehicles are home.

See `PRESENTER_DEMO_GUIDE_BN.md` (Bengali) and `QA_DEMO_PATCH_REPORT.md` for instructions and the actual verification limits. The previously supplied `FINAL_QA_REPORT.md` is preserved as historical Work QA evidence, not an updated browser acceptance certification.
