# ARES PATHFINDER — Functionality Acceptance Matrix

Do not mark PASS because a button or title exists. Each item requires observed in-engine user action and actual game-state change.

## Global gates
| Item | Pass condition |
|---|---|
| Home | Live 3D rover rolling with scanned mast + drone moving and rotor motion; six-wheel model has material and shadow; no astronaut on home |
| Navigation | All four top tabs + two CTAs work; back/save; no dead UI controls |
| Visual | Gameplay avatar visibly rigged/animated, realistic PBR, meaningful depth and detailed terrain; no primitive block-body fallback presented as final |
| Atlas | NASA measured Jezero tile in map and 3D aligns in one coordinate frame; region selection; unsupported layers distinctly unavailable |
| Mission Ops | At least shortest vs lower-hazard and return feasibility calculated from real tile grid with masks; infeasible state exists; route arrives in 3D |
| HUD | Objective and 3 resource bars LEFT, compass CENTER, circular minimap + touch wheel RIGHT, functional action row BOTTOM |
| Control | Keyboard/mouse/touch move same player; joystick resets after release; rover R changes control and HUD |
| Audio | Interaction sounds are event-driven, spatial/helmet perspective implemented; NASA WAV only labeled NASA if actually included; mute works |
| Save/economy | Stage unlock, equipment and earned credits persist after browser refresh; no real purchases |
| Mobile | Phone touch nav usable; rendering degrades gracefully, no occluded buttons |
| VR | Only PASS with real compatible browser/headset visual and control QA; otherwise NOT TESTED |

## Ten full mission acceptance conditions
| Stage | Unique visible environment | Interactive mechanic minimum | Decision/hazard/recovery | Proof of completion |
|---|---|---|---|---|
| 01 First Footsteps | Jezero plain / hardware / sunset glow | EVA check, calibrated compass, dropped marker, flag placement, panorama camera sweep | short rough vs safe path; invalid flag retry | return to lander, flag visible, stage 2 unlocked |
| 02 Ancient River | Jezero layered delta scarps | inspect 3 outcrops, align animated drill, extract and pack actual 3D core | pressure error damages core; re-sample/clean | correct specimen and return |
| 03 Shifting Dunes | Gale realistic dunes/rippled dark sand | player drives ATLAS-6 with steering, wheel slip and winch tension | stuck rover and alternate traction path; recover | sled follows winch/tow and returns |
| 04 Mineral Hunter | Nili fractured high-relief rocks | actual raycast scanner hits 3 outcrops with available/unknown science | uncertain candidate must be rejectable; slope block | markers and source-respecting selection saved |
| 05 Volcanic Frontier | Elysium lava/basalt fissures | pick/anchor bridge/cable, carry and place thermal probe | anchor stability and weight limits; retry | thermal objective and safe return |
| 06 Labyrinth Network | Noctis narrow branching canyon | articulated ALPHA arm picks and sets relays; LOS signal changes | arm reach/signal failure; reposition | live link restored + return |
| 07 Canyon Rescue | Valles tall cliff terrain | SKYSCOUT controllable scouting, rover repair, winch/tow escort | blocked steep route, tension failure, reroute | rover genuinely escorted home |
| 08 Frozen Frontier | South Pole cold low-sun frost geometry | heater/traction controls affect power and movement; frost sensor placement | slippery patch / thermal shortage; recover | sample + reserve-safe docking |
| 09 Into the Dust | Dust increases occlusion dynamically | waypoint chain, beacon, reserve device, reroute under visibility loss | optional task abandon vs unsafe, no magic route | safe abort/return recognized |
| 10 Last Expedition | distinct multi-region composite | multi-robot task handoff, science sampling, relay, emergency route replan | invalidated A* route, crew/equipment reserve tradeoffs | complete five acts, return, award |

Every stage must play beyond simply walking to one marker and pressing E; it must have unique scenery, sound, actions, consequences, recovery, saves, score and next stage progression. Target durations are NOT an excuse for padding or unavoidable wait.

## Per-build proof requirements
- On-screen capture from actual WebGL runtime (not image concept) of home + first-person/third-person game + Atlas + Mission Ops + crew + distinct Stage 1/3/7/9/10.
- Automated pure mission/routing tests and production build log.
- One completed end-to-end stage with save/unlock state restoration and one deliberate failure/recovery.
- Field report PASS / FAIL / NOT VERIFIED with browser, device, and exact build commit or archive hash.
