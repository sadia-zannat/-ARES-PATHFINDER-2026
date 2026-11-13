# ARES PATHFINDER — 3 minute 45 second demo

Start `START_ARES_PRESENTER_WINDOWS.bat` after extracting the ZIP. Python 3 is required. Use the local Presenter label when recording locked-stage examples; this does not mean normal progression was earned.

| Time | Record | Narration |
|---|---|---|
| 0:00–0:20 | Animated homepage | “ARES PATHFINDER connects Mars terrain, scientific route planning and interactive exploration.” |
| 0:20–0:50 | Mars Atlas: central subset, elevation/slope, ENTER 3D WORLD | “Thirty-two supplied NASA/USGS-derived Jezero tiles drive real mesh elevation. Optical imagery is reprojected into the DTM frame. Registration QA is preliminary; reconstructed details and other regions are labeled.” |
| 0:50–1:50 | Mission Ops → DEMO · MODELED HAZARD SCENARIO → compare SHORTEST/SAFE → select SAFE | “A-star finds a shortest-distance baseline. The safer option penalizes slope, roughness and modeled hazard exposure. Compare the distance, O2, energy and reserve costs. This hazard zone and resource model are simulations, not live NASA measurements.” |
| 1:50–2:10 | Set dose limit to 0.001 → COMPARE ROUTES → rejection; restore 0.15 → calculate/select/execute | “A changed safety constraint can make every route infeasible. We restore a feasible budget before entering the world.” |
| 2:10–2:30 | In Explorer: MAP → EMERGENCY RETURN → FOLLOW RETURN ROUTE | “Abort recalculates a terrain-valid route to the habitat with a return margin.” |
| 2:30–3:10 | Crew & stage selection; Stage 1 guide / flag or Stage 3 ATLAS / Stage 7 drone | “Six existing skinned astronauts and three robotic systems support distinct task sequences. Guidance explains each action. Normal players progress sequentially; this local Presenter mode allows recording any stage.” |
| 3:10–3:30 | Stage 10, mission guide, robot controls | “The final expedition coordinates transport, scouting, relays and recovery. The implemented ten sequences passed accelerated controller tests, including final return and saved unlocks.” |
| 3:30–3:45 | QA / credits | “This educational simulation separates measured terrain, historical NASA observations and modeled gameplay. Current visual and device-test limitations are disclosed in the release report.” |

Title: **ARES PATHFINDER — Explore Mars. Plan the Return.**

Submission description: Browser-based Mars exploration using supplied NASA/USGS Jezero elevation and optical data, terrain-aware A-star round-trip planning, resource and reserve models, six skinned EVA characters, three robot systems and ten authored mission sequences. Includes local Presenter Mode, persistent normal progression and explicit scientific provenance. See FINAL_QA_REPORT.md for verified scope and remaining limitations.

Stack: Three.js/WebGL2, JavaScript modules, Vite, glTF/PBR and skeletal animation, Python standard-library NASA gateway, localStorage, Web Audio, Node tests, Blender asset pipeline. Credits: NASA/USGS/JPL/PDS/Mars Trek, NASA model/audio providers, Poly Haven CC0 and MakeHuman CC0; full source attribution is in ASSET_CREDITS.md and THIRD_PARTY. NASA does not endorse this project.
