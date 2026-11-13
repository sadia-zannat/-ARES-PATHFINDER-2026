# ৩–৪ মিনিটের সৎ demonstration

রেকর্ডের আগে QA_REPORT.md ও runtime acceptance দেখে কোন feature PASS তা মিলিয়ে নিন। ব্যর্থ stage বা অসম্পূর্ণ visual-কে সম্পন্ন বলবেন না। QA view দিয়ে কোনো stage দেখালে সেটিকে test scenario হিসেবে পরিচয় দিন; campaign progression অর্জন হিসেবে নয়।

| সময় | পর্দায় কী দেখাবেন | সংক্ষিপ্ত narration |
|---|---|---|
| 0:00–0:25 | Live homepage: চলমান NASA rover, drone, base | “ARES PATHFINDER connects Mars terrain, mission planning and interactive exploration in one browser experience.” |
| 0:25–0:45 | ছয় crew, vehicle ও loadout selection | “The EVA suit is skinned to a bone rig with authored movement and interaction clips. ATLAS-6 drives, SKYSCOUT scouts and ALPHA handles relay equipment.” |
| 0:45–1:15 | Atlas optical → slope → validity; NASA evidence | “Two Jezero subsets use 32 supplied NASA-derived DTM and optical tiles. Other mission environments are explicitly reconstructed. Historical MEDA observations and Mars imagery remain separate from modeled game weather.” |
| 1:15–1:50 | Mission Ops routes, budget rejection, feasible route | “A shared A-star planner excludes NoData and steep cells. It compares distance, terrain risk and round-trip reserves. A route is rejected when the time, oxygen or energy budget is insufficient.” |
| 1:50–2:25 | Stage 01: walking, flag/panorama, HUD/map | “Mission objectives require reaching physical objects and satisfying the corresponding action. Movement, camera, route guidance and resources share one world coordinate frame.” |
| 2:25–2:55 | Stage 03 driving/traction or Stage 07 scouting/recovery | “Recovery uses the controlled vehicle, a cable constraint and a moving payload. Instrument alignment and overload influence task success.” |
| 2:55–3:25 | Stage 09 storm and reserve return; Stage 10 robot roles | “Hazards can invalidate the route. The player replans, preserves reserve and returns. The final expedition assigns transport, scout and relay roles.” |
| 3:25–3:50 | Profile/history, QA evidence and credits | “Progress is saved locally, with earned equipment and sequential unlocks. The package includes source, local assets, licenses, automated checks and an explicit list of remaining verification limits.” |

Closing: “This is an educational mission simulation. It does not provide operational EVA certification or live Mars weather.”

Title: **ARES PATHFINDER — Explore Mars. Plan the Return.**

Submission description: A browser-based Mars exploration and mission simulation combining NASA-derived Jezero terrain, a terrain-aware round-trip route planner, skinned EVA characters and three articulated robotic systems. Ten authored expedition sequences cover surveying, sampling, mobility, relays, rescue, polar operations, dust navigation and coordinated science. Measured source data, historical observations and modeled gameplay are visibly distinguished. Consult the included acceptance report for tested and unresolved behavior.

Technical stack: Three.js / WebGL2, JavaScript modules, Vite, glTF PBR assets and skeletal animation, Python standard-library local server / NASA gateway, localStorage saves, Web Audio, deterministic grid A*, Node test runner, Blender asset preparation.
