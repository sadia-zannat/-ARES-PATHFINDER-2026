import {currentTask} from './missions.js';
const hints={
 eva:'At the starting airlock: press INTERACT (E). Select HELMET SEAL, OXYGEN LINE and RADIO LOOP, then BEGIN EVA.',
 bearing:'Follow the cyan route. At the target, aim the camera toward the required compass bearing; hold steady, then press E twice as instructed.',
 pickup:'Reach the orange TARGET marker and press INTERACT (E) to recover the item.',
 tripod:'Walk to stable ground at the objective marker and press INTERACT (E) to deploy the tripod.',
 flag:'Reach the marker, press INTERACT (E), choose your country and select PLANT FLAG.',
 panorama:'At the target press E, drag the camera around the full horizon, then press E to capture.',
 scan:'At the marker press E, aim at the object, then HOLD E or INTERACT until scanning finishes.',
 scout:'Use R to select SKYSCOUT, ascend above 4 m using Q, travel to the target, then HOLD E to scan.',
 drill:'At the marked outcrop press E, carefully align the drill and hold E while maintaining safe pressure.',
 frost:'Use the drill on the marked frost sample; align and hold E to safely extract it.',
 package:'At the sample marker press E and choose the correct specimen ID to seal it.',
 tag:'At the marker press E, choose the scientifically supported classification and confirm.',
 drive:'Switch to ATLAS-6 (R / 2). Drive the indicated distance to the marked station and slow down before INTERACT.',
 traction:'Use ATLAS-6 traction control (T) and drive slowly through the objective zone; interact once slip is under control.',
 winch:'Control ATLAS-6 (R / 2), approach the marked recovery object and hold E to connect/tension the winch.',
 tow:'Tow the payload toward its target with ATLAS-6, keep cable tension safe, then press E.',
 anchor:'Reach the anchor point; align and hold E until the anchor is secured.',
 cross:'Deploy both anchors, then walk across the bridge with a safe load and press E at the crossing marker.',
 probe:'At the target use the probe instrument: aim and hold E to secure a valid measurement.',
 relay:'Switch to ALPHA with R / 4, approach the target closely, align its manipulator, and hold E.',
 link:'Use ALPHA and install both relays first; at the marked location press E to test the links.',
 powercell:'Reach the disabled robot and press E to restore power.',
 backup:'At the reserve-power marker press E to connect the backup cell.',
 repair:'Approach the damaged mechanism; aim the tool, hold E and keep its torque in the safe range.',
 heater:'At the target enable ECO/HIGH heater (H) and traction (T), then confirm.',
 beacon:'At the marker press E to install the navigation beacon.',
 priority:'At the marker press E and choose a science route based on risk and reserve.',
 payload:'At the marker press E and assign all three required robot roles with a payload at or under 12 kg.',
 replan:'Mission route has changed. Press E at the marked hazard and select a reserve-safe replanned return.',
 convoy:'Switch to ATLAS-6, bring every required vehicle home, then interact at the convoy marker.',
 dock:'FINAL STEP: Follow the cyan route to H (habitat). Switch to astronaut if driving. Enter the airlock zone; mission completes automatically.',
 observation:'Follow the minimap route and investigate the chosen terrain point.'
};
export function taskHint(t,m){if(!t)return 'All objectives completed.';const base=hints[t.type]||'Follow the cyan route and INTERACT at the target.';if(t.type==='bearing')return `${base} ${t.bearing===0?'Face NORTH.':'Face EAST.'}`;if(t.mode&&m?.mode!==t.mode)return `First select ${t.mode.toUpperCase()} with R. ${base}`;return base;}
export function goalDisplay(t){return t?.type==='dock'?'Return to habitat · H':t?.title||'Mission complete';}
export function canAutoDock(m,distance,mode){return !!(m&&!m.complete&&!m.failed&&!m.paused&&mode==='suit'&&Number.isFinite(distance)&&currentTask(m)?.type==='dock'&&distance<=(currentTask(m).radius||7));}
