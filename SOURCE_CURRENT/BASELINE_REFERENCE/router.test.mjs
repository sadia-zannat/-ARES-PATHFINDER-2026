import {astar,gridFromHeight,routeStats} from './router.js';
import {MISSIONS,newMission,performMissionAction} from './missions.js';
import {challengeFor} from './challenges.js';
import assert from 'node:assert/strict';
const values=new Float32Array(25),valid=new Uint8Array(25).fill(1),g=gridFromHeight(values,valid,5,2);
assert.equal(astar(g,5,5,[0,0],[4,4]).path.length,5);
g[12].valid=false;assert(!astar(g,5,5,[0,0],[4,4]).path.some(([x,y])=>x===2&&y===2));
assert.equal(MISSIONS.length,10);
for(const m of MISSIONS){const c=challengeFor(m.mechanic);assert(c&&c.win&&c.a&&c.b)}
let state=newMission(0);for(let i=0;i<4;i++)state=performMissionAction(state);assert(state.complete);
console.log('PASS: A*, NoData blocking, 10 challenge definitions, stage progression');
