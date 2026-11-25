(function(root){
const LINES=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function winner(b){for(const [a,c,d] of LINES){if(b[a]&&b[a]===b[c]&&b[a]===b[d])return {who:b[a],line:[a,c,d]};}return null;}
function empties(b){const r=[];b.forEach((v,i)=>{if(!v)r.push(i)});return r;}
function minimax(b,turn,me){const w=winner(b);if(w)return w.who===me?10:-10;const e=empties(b);if(!e.length)return 0;
 let best=turn===me?-Infinity:Infinity;
 for(const i of e){b[i]=turn;const s=minimax(b,turn==='X'?'O':'X',me);b[i]=null;best=turn===me?Math.max(best,s):Math.min(best,s);}
 return best;}
function bestMove(b,me){const other=me==='X'?'O':'X';let best=-Infinity,moves=[];
 for(const i of empties(b)){b[i]=me;const s=minimax(b,other,me);b[i]=null;if(s>best){best=s;moves=[i];}else if(s===best)moves.push(i);}
 return moves;}
function computerMove(b,me,level,rng){rng=rng||Math.random;const e=empties(b);if(!e.length)return -1;
 const pick=a=>a[Math.floor(rng()*a.length)];
 if(level==='easy')return pick(e);
 if(level==='medium'&&rng()<0.5)return pick(e);
 return pick(bestMove(b.slice(),me));}
const api={winner,empties,bestMove,computerMove,LINES};
if(typeof module!=='undefined')module.exports=api;else root.XO=api;
})(typeof window!=='undefined'?window:globalThis);
