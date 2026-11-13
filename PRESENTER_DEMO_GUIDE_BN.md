# ARES PATHFINDER — Video Recording / Presenter Mode (বাংলা)

## কাজ শুরু (Windows)

1. ZIP-টি **Extract All** করে পুরো folder খুলবে। ZIP-এর ভেতর থেকে launcher চালাবে না।
2. `START_ARES_PRESENTER_WINDOWS.bat`-এ double-click করবে। Windows/Python 3 থাকলে bundled site local server-এ খুলবে।
3. Browser-এ `http://localhost:5173/?presenter=1` দেখা যাবে। **এটি শুধুই local presenter shortcut**, internet-hosted admin security/authentication নয়।
4. `START EXPEDITION` → astronaut choose → `SELECT CREW · CONTINUE` → দশটি stage যেকোনোটি click করে video record করবে।
5. সাধারণ users-এর জন্য `START_ARES_WINDOWS.bat` চালাবে। এতে stage unlock করা লাগবে; পৃথক progress save থাকে।

## Stage 1 কীভাবে শেষ করবে

1. Stage 01 শুরু করলে LEFT HUD-এ প্রথম objective দেখবে। Starting airlock-এ **INTERACT / E** → **HELMET SEAL**, **OXYGEN LINE**, **RADIO LOOP** তিনটি select → **BEGIN EVA**।
2. Right-side circular **minimap**-এ **cyan triangle** = তুমি, **orange TARGET** = পরের কাজ, **cyan line** = route, **H** = starting habitat।
3. **WASD** বা ডান পাশের round joystick দিয়ে route ধরে যাও। **MAP / M** দিয়ে বড় map ও নির্দেশনা দেখো। LEFT-এ **? MISSION GUIDE**-এ click করে কাজের নিয়ম দেখো।
4. `Calibrate compass` কাজের জন্য গন্তব্যে camera N, তারপর E দিকে স্থির রেখে E চাপবে। লক্ষ্য ঠিক থাকলে objective complete হবে।
5. Dropped marker-এর কাছে গিয়ে INTERACT; tripod marker-এ গিয়ে deploy; পতাকা বসানোর target-এ দেশ নির্বাচন করে PLANT FLAG।
6. Panorama objective-এ INTERACT → mouse drag করে পুরো horizon capture → INTERACT।
7. সব কাজ শেষ হলে minimap-এর **H** এবং cyan return route ধরে habitat-এ ফিরে যাও। গেমে astronaut হয়ে airlock-এর circle-এর মধ্যে ঢুকলে **automatic mission complete**, reward, next-stage unlock হবে।
8. Stage-গুলোতে অন্য task-এর জন্য `R` দিয়ে rover/drone/ALPHA select করতে পারবে। `Shift` run, `Space` jump, `E` interact/hold, `Q/Z` drone altitude, `Esc` pause।

## জরুরি সীমাবদ্ধতা

- Presenter Mode সাধারণ save-কে unlock করে না; এটি local recording shortcut। URL parameter জানলেই **local** পরিবেশে চালানো সম্ভব, তাই production admin authorization হিসেবে ব্যবহার কোরো না।
- Unverified real-device VR, mobile and GPU FPS result claim করবে না। Older QA report অনুযায়ী approved AAA quality এখনো PASS নয়।
- Stage 1-এর bearings, scanning, scientific tasks সত্যিকারের interaction লাগে; presenter shortcut objective auto-pass করে না।
