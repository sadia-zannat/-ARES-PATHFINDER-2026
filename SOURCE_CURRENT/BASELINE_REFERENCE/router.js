// Deterministic eight-neighbour A*; no path is returned across unmeasured/blocked cells.
export function astar(grid,w,h,start,goal,mode='safe'){
 const key=(x,y)=>y*w+x,heuristic=(x,y)=>Math.hypot(goal[0]-x,goal[1]-y);
 const si=key(...start),gi=key(...goal),dist=new Float64Array(w*h).fill(Infinity),parent=new Int32Array(w*h).fill(-1),closed=new Uint8Array(w*h),open=new Set([si]);dist[si]=0;
 if(!grid[si]?.valid||!grid[gi]?.valid)return null;
 const dirs=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,1],[-1,1],[1,-1]];
 while(open.size){let current=-1,best=Infinity;for(const n of open){const x=n%w,y=Math.floor(n/w),v=dist[n]+heuristic(x,y);if(v<best){best=v;current=n}}
 open.delete(current);if(current===gi){const path=[];let u=gi;while(u!==-1){path.push([u%w,Math.floor(u/w)]);u=parent[u]}return {path:path.reverse(),cost:dist[gi]}}
 closed[current]=1;let cx=current%w,cy=Math.floor(current/w);
 for(const [dx,dy] of dirs){const x=cx+dx,y=cy+dy;if(x<0||y<0||x>=w||y>=h)continue;let n=key(x,y);if(closed[n]||!grid[n]?.valid)continue;
 if(dx&&dy&&(!grid[key(cx+dx,cy)]?.valid||!grid[key(cx,cy+dy)]?.valid))continue;
 const a=grid[current],b=grid[n],length=Math.hypot(dx,dy),grade=Math.abs(b.z-a.z)/(length*grid.cellSize);
 if(grade>grid.gradeLimit)continue;
 const extra=(mode==='safe'?13:1)*grade*grade+(mode==='safe'?2:0)*Math.max(0,b.rough||0);
 const nd=dist[current]+length*(1+extra);if(nd<dist[n]){dist[n]=nd;parent[n]=current;open.add(n)}
 }
 }
 return null;
}
export function routeStats(result,cellM=8,speedMps=1.2){if(!result)return null;let length=0;for(let i=1;i<result.path.length;i++)length+=Math.hypot(result.path[i][0]-result.path[i-1][0],result.path[i][1]-result.path[i-1][1])*cellM;return {meters:length,minutes:length/speedMps/60,roundTripMinutes:length*2/speedMps/60};}
export function gridFromHeight(height,valid,side,cellSize=8,gradeLimit=.48){const grid=[];for(let i=0;i<side*side;i++)grid.push({z:height[i]||0,valid:valid[i]===1&&Number.isFinite(height[i]),rough:0});grid.cellSize=cellSize;grid.gradeLimit=gradeLimit;return grid;}
