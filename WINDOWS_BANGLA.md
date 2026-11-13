# Windows-এ চালানো

১। ZIP ফাইলের ওপর Right click → **Extract All**। ছোট পথ ব্যবহার করুন, যেমন `C:\ARES_PATHFINDER`। ZIP-এর ভেতর থেকে BAT চালাবেন না।

২। `START_ARES_WINDOWS.bat`-এ Double click করুন। কালো terminal window খোলা রাখুন। ব্রাউজারে `http://localhost:5173` খুলবে। Server চালু হওয়ার পর browser স্বয়ংক্রিয়ভাবে খুলবে; না খুললে terminal-এর ঠিকানাটি নিজে খুলুন।

৩। Python 3 আগে থেকে থাকলে খেলার জন্য Node.js, npm install, NASA download বা API key লাগবে না। Python না থাকলে BAT যে official Python link দেখাবে সেখান থেকে Python 3 install করুন; **Add Python to PATH** টিক দিন। প্রথমবার Python install প্রয়োজন হতে পারে—ZIP-এ Windows Python runtime নেই।

৪। Chrome/Edge-এ Settings → System → **Use graphics acceleration when available** ON রাখুন। Windows Settings → Display → Graphics থেকে browser-এর জন্য **High performance / RTX 4060** বেছে নিতে পারেন। এখানে Windows/RTX-এ FPS পরীক্ষা করা হয়নি।

৫। START EXPEDITION → astronaut → CONTINUE → unlocked Stage 01। Stage শেষ হলে পরেরটি unlock হবে। PROFILE-এ history; EQUIPMENT-এ earned credits খরচ করা যায়। একই browser ও একই `localhost:5173`-তে save থাকবে। Incognito ব্যবহার করবেন না। PROFILE → EXPORT SAVE দিয়ে backup রাখুন।

৬। NASA server অনুপস্থিত থাকলেও খেলা ও স্থানীয় terrain চলবে। নিশ্চিত offline mode-এর জন্য `START_ARES_OFFLINE_WINDOWS.bat`। NASA Imagery & Observations-এ cached/historical পরিচয় দেখাবে। কোনো observation-কে live বলা হয়নি।

## নিয়ন্ত্রণ

| কাজ | Keyboard / mouse | Touch |
|---|---|---|
| চলা | W A S D | ডানের joystick |
| ক্যামেরা | খালি 3D স্থানে click-drag; wheel zoom | খালি স্থানে drag |
| দৌড় / গাড়ির boost | Shift ধরে রাখুন | RUN / BOOST ধরে রাখুন |
| লাফ / নিচু হওয়া | Space / C | JUMP / SLIDE |
| কাজ | E; যন্ত্রে hold/release | INTERACT hold/release |
| যন্ত্র align | Arrow keys; 3D-তে drag | 3D-তে drag |
| Robot নির্বাচন | R; অথবা 1 suit, 2 ATLAS, 3 SKYSCOUT, 4 ALPHA | ROVER |
| ড্রোন ওপরে/নিচে | Q / Z | বাঁয়ের ASCEND / DESCEND ধরে রাখুন |
| Map / safe return | M → EMERGENCY RETURN | MAP → EMERGENCY RETURN |
| Heat / traction / follow | H / T / F | ROVER ও thermal dialog; follow নির্বাচন |
| Reserve battery | B, loadout-এ Battery Pack থাকলে | Pause → USE RESERVE BATTERY |
| Pause | Esc | ওপরের Ⅱ |

যন্ত্রের LOAD ৪২–৭৫% এর ভেতর রাখতে E/INTERACT অল্প ধরে ছেড়ে আবার ধরুন। লাল/overheat হলে E দিয়ে reset করে আবার শুরু করুন। স্ক্যানের সময় target camera-র কেন্দ্রে থাকতে হবে। ALPHA relay বসাতে target-এর ১.৭ মিটারের মধ্যে যান। ATLAS-এর W/S throttle, A/D steering; গাড়ি থামিয়ে কাজ করুন।

## সমস্যা হলে

- Terrain বা model error: সব ফাইল extract হয়েছে কিনা দেখুন। `file://` দিয়ে index.html খুলবেন না।
- পুরনো UI: Ctrl+F5। Port 5173 অন্য app ব্যবহার করলে সেটি বন্ধ করুন বা terminal-এ `py -3 serve.py --port 5174` চালিয়ে `http://localhost:5174` খুলুন (ভিন্ন port-এ আলাদা save)।
- Frame rate কম: ⚙ → GRAPHICS balanced/low; অন্য ভারী app বন্ধ করুন।
- Mission আটকে গেলে Pause → RETRY CHECKPOINT। এতে শেষ secured objective থেকে reserve pack সহ শুরু হবে।
- Source edit: Node.js 22 LTS install করে `EDIT_AND_BUILD_WINDOWS.bat` চালান। সরাসরি খেলার জন্য এই ধাপ লাগবে না।
- `http://localhost:5173/?qa=1` আলাদা test save; সাধারণ খেলার progress বদলায় না। Test-এ locked stage দেখা যায়। এটি submission completion evidence তৈরি করে না, শুধু পরীক্ষা চালায়।

NASA key খেলার জন্য লাগবে না। সফল authenticated request-এর সাতটি ঐতিহাসিক InSight sol ZIP-এ দেওয়া আছে। Archive refresh চাইলে নিজের কম্পিউটারে SOURCE_CURRENT/.env.example-এর কপি .env বানিয়ে NASA_API_KEY সেট করবেন। Key frontend, GitHub বা ZIP-এ দেবেন না। InSight ডেটা ২০২০ সালের—live weather নয়।

## Presenter Mode (সব দশটি stage ভিডিওতে দেখানোর জন্য)

- ZIP Extract All → `START_ARES_PRESENTER_WINDOWS.bat` double-click → Chrome-এ local presenter খুলো।
- START EXPEDITION → CREW → CONTINUE → যেকোনো Stage 01–10 select করা যাবে।
- Normal user progress আলাদা থাকবে; `START_ARES_WINDOWS.bat` সাধারণ user-এর জন্য।
- GAME HUD-এর `? MISSION GUIDE` click করো। MAP (M) দিয়ে cyan route, H habitat এবং orange TARGET দেখবে।
- Last objective শেষ করে astronaut হয়ে H-তে ফিরলে automatic completion হবে; normal mode-এ next stage unlock হবে।
- বিস্তারিত: `PRESENTER_DEMO_GUIDE_BN.md`।

## Final submission recording

সাধারণ খেলা: START_ARES_WINDOWS.bat। সব stage দেখানোর recording: START_ARES_PRESENTER_WINDOWS.bat। Presenter এবং সাধারণ save আলাদা। Mission Ops-এ DEMO · MODELED HAZARD SCENARIO চাপুন → SHORTEST/SAFE তুলনা করুন → dose 0.001 করে COMPARE ROUTES-এ rejection দেখুন → 0.15 ফিরিয়ে route নির্বাচন ও EXECUTE → MAP → EMERGENCY RETURN। পুরো narration: SUBMISSION_DEMO_SCRIPT.md। Windows/RTX/ফোন/VR পরীক্ষা এখানে হয়নি।
