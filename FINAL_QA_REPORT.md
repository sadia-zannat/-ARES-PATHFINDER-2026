# ARES PATHFINDER — final submission audit

Release date: 13 November 2026, Bangladesh. This is a new compiled release merging the attached Presenter update into the recovered source. Asset/terrain byte comparison found no newer replacement assets; none were downgraded. `submission_merge_audit.json` records the merge.

**Verdict: the implemented campaign and critical science/navigation checks below pass. Full AAA / 75-page Blueprint acceptance is NOT established. No acceptance percentage is claimed.**

## Verification categories

| Requirement | Result | Evidence and practical limits |
|---|---|---|
| Production compile | PASS | Fresh Vite compilation: submission_build.txt; manually patched dist replaced by generated output |
| Routing, resource, save, asset, presenter-guidance tests | PASS | 28 Node checks: submission_node_tests.txt |
| Python / offline NASA gateway | PASS | 6 HTTP checks: submission_gateway_tests.txt |
| All ten implemented mission sequences | PASS, automated browser simulation only | submission_campaign.json; shared controllers/tools, real movement/collision, automatic final docking, persisted rewards/unlocks; energy failure injected in all ten and drill overload in Stage 2 |
| Measured terrain geometry / per-tile optical binding | PASS | Automated browser integration; EVIDENCE/submission_terrain.json |
| Fresh normal Stage 1 → automatic return → Stage 2 | PASS | Automated browser integration; EVIDENCE/submission_normal.json |
| Presenter 10 entries / six crew / three vehicles / save isolation | PASS | Automated browser integration; EVIDENCE/submission_presenter.json |
| Scientific demo, infeasibility and emergency return | PASS | Automated browser integration; EVIDENCE/submission_ops.json |
| Atlas and selected 3D Explorer | VERIFIED IN BROWSER | Current submission_atlas.png and submission_explorer.png; observed route, astronaut and loaded terrain |
| Normal Stage 2 access / Presenter Stage 10 | VERIFIED IN BROWSER | Current submission_normal_unlock.png and submission_presenter_stage10.png |
| Windows normal / presenter launchers | IMPLEMENTED, NOT VERIFIED ON WINDOWS | Standard-library Python server; launcher flags and fallback inspected, server tested on Linux. Python 3 must already be installed. |
| Mobile touch / headset / RTX 4060 performance | NOT VERIFIED | No physical device access. Linux software rendering is not a GPU FPS benchmark. |
| Sound | IMPLEMENTED; current physical playback NOT VERIFIED | Authored spatial Web Audio plus separate historical NASA recording preserved. Prior sound/navigation evidence retained. |
| Approved AAA graphics / character art | INCOMPLETE / FAILED acceptance | Six recovered skinned meshes and 17 shared clips preserved. Faces, hair, animation polish, world/base density and cinematic naturalism remain below the supplied targets. No substantial avatar remodeling in this final pass. |

## NASA terrain audit

32 processed tiles exist (16 central and 16 northwest), with manifest, float32 elevations, height validity, observed optical imagery and optical masks. In the actual browser, every valid ground vertex exactly matched its processed DTM value minus the local reference (maximum error 0 m). Relative relief was 45.60 m in the center and 171.99 m in the northwest. Each mesh used its own optical tile, with north/south UV orientation checked. These are actual geometry measurements from the loaded scene, not a background image. Shared height borders match exactly in automated checks.

The compiler uses WarpedVRT to resample orthographic optical imagery into the DTM equirectangular Mars CRS, then uses matching row/column windows. Available alignment QA is preliminary visual QA. Original multi-gigabyte TIFFs were not re-downloaded: independent NASA/USGS file authenticity and final sub-pixel DTM/optical registration remain NOT VERIFIED. Supplied metadata and hashes are preserved, not independently certified.

The loader now rejects missing/malformed height data and excludes optical-mask holes alongside height NoData; routing rejects out-of-coverage / invalid cells. Actual supplied subsets have full optical coverage; real network-loss/missing-image failure was not manually injected. Stages 1–2 use measured subsets; other scenario geography, cliffs, PBR tint/microdetail and all game weather remain modeled. CRISM / THEMIS calibrated products are unavailable and are not fabricated.

## Critical repairs

- `fast` now computes the shortest 3D grid distance within validity/slope constraints, without hazard risk penalties. It is labeled SHORTEST; it is not a proof of minimum travel time. Safe / reserve modes add terrain and modeled exposure costs.
- Route outputs expose distance, estimated speed/time, maximum slope, O2, Wh, reserve, dose and modeled hazard distance. Nominal suit speed is 1.45 m/s; work is 8 min, suit power 85 W, payload 10 kg and dose 0.03 mSv/hour. These resource/environment values are educational assumptions, not live NASA readings.
- Changed target, region or budgets invalidate old selection and route output. Nonfinite / negative budgets are rejected. Missing return paths are handled without dereferencing null.
- The MODELED HAZARD SCENARIO button adds an explicitly modeled exclusion/soft exposure zone to the measured Jezero grid for a repeatable shortest-versus-safer demonstration. Both geometric validity and measured slope limits still apply.
- Attached contextual guidance, target/habitat markers, adaptive minimap, local Presenter namespace and automatic docking are retained. The app-owned runner now observes automatic docking instead of attempting to walk after completion.

## Remaining limits

Not every alternative decision or every hazard failure branch has been exhaustively exercised. Later-stage ten-minute balancing, full rigid-body wheel/soil and structural-bridge physics, complete prop collision, globe-to-ground/landing cinematic and complete VR interaction remain incomplete or simplified. Full manual start-to-finish playthroughs of all ten and target-device performance are not established by accelerated tests.

Current screenshots use `submission_*`. Older `recovery_*` and `runtime_*` files are historical runtime evidence and are not proof of the final HUD changes. An initial Qt compositor failed DMA-buffer acquisition; software compositing restored visible capture. Its campaign simulation results are explicitly automated-only; no black screen is presented as visual proof.

No API credential is included. Public/bundled NASA data work without one; optional NASA_API_KEY is backend-only. Fresh authenticated NASA fetching was not repeated in this timebox. Historical observations are not live weather. No upload to GitHub or submission portal was performed.
