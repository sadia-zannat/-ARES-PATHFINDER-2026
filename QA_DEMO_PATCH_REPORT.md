# ARES PATHFINDER — Local Demo Navigation Update / QA

Date: 2026-11-13. This is a focused repair of the user's uploaded recovery release, not a new photorealistic reconstruction.

## Implemented in editable source AND supplied prebuilt browser assets

1. **Local Presenter Mode**: `START_ARES_PRESENTER_WINDOWS.bat` opens the existing application with `?presenter=1` on localhost. All 10 missions are selectable without playing preceding stages. Presenter progress is kept in a separate localStorage namespace; the normal player's sequential unlock flow remains unchanged. A localhost URL parameter is *not* secure authentication: do not claim this to be a production admin account, and don't expose a remote presenter bypass.
2. **Task-specific HUD instructions**: New on-screen mission hints (EVA, bearing, flag, panorama, rover towing, science tools, etc.) and a `? MISSION GUIDE` help dialog; objectives show progress, distance and route information.
3. **Minimap and map directions**: Active target gets a highlighted orange ring and TARGET label; habitat gets H label; player and cyan route continue to show; adaptive minimap zoom keeps more distant targets visible. Larger MAP view includes practical directions and a map legend.
4. **Automatic return completion**: The final dock task is committed when the astronaut enters the airlock radius after every other task is completed, provided required payload has returned and resource/mission gates pass. No extra hidden E key is required for this final step. Previous achievement/reward/next-stage unlock handling remains intact.
5. **Presentation instructions**: Added `PRESENTER_DEMO_GUIDE_BN.md` with Windows launcher, full Stage 1 walk-through, controls and warnings.
6. **Local-only QA bypass**: Existing query-string QA bypass now requires localhost to avoid enabling test-mode stage access on a public site.

## Verification performed in this environment

- PASS: 25 Node tests (22 preexisting source/test suite, 3 new navigation/dock tests), including mission/save and NASA data checks.
- PASS: JavaScript syntax check for the edited source and the updated prebuilt distribution bundle.
- PASS: Python server syntax check.
- PASS: Local HTTP server returned the packaged site's index with status 200.
- NOT VERIFIED: Updated homepage/mission screenshots and click-flow in an actual rendered browser. Browser automation attempted but navigation was blocked by this environment (`ERR_BLOCKED_BY_ADMINISTRATOR`). User must run on Windows/Chrome to observe visuals.
- NOT VERIFIED: Actual RTX 4060 performance, phone controls, physical WebXR headset, real-time NPC/vehicle physics and final full graphical acceptance.
- LIMITATION: Fresh Vite compilation here was unavailable because npm dependencies are not installed and registry access timed out. The original working Vite output was preserved, and matching navigation changes were applied directly to its existing JavaScript/CSS/HTML. The editable source also contains the same changes. Run `EDIT_AND_BUILD_WINDOWS.bat` in a network-enabled environment only if a full fresh rebuild is required; the included Windows runtime uses the prebuilt dist directly.

## Carry-forward limitations from Work's original QA_REPORT.md

- The supplied astronaut faces, poses, animation clips and 3D appearance remain as received. **No new Blender rig or fully photorealistic avatar asset was created in this patch.** The source includes 6 existing skinned models, but their approved portraits and animation quality remain below the user reference.
- Original 10 mission controllers were reported to pass accelerated simulation checks. These were **not rerun in a real browser here** after HUD repairs, and full manual user completion was not verified.
- The unchanged recovery release remains short of full AAA / 75-page blueprint acceptance; this ZIP is intended for urgent demo recording and focused corrections, not as evidence of full scientific or visual validation.
