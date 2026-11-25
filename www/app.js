let raw=null;try{raw=localStorage.getItem('xo-score');}catch(e){}
const S=XO.loadScore(raw);
let b,turn,over,human='X';
const $=id=>document.getElementById(id);
function save(){try{localStorage.setItem('xo-score',JSON.stringify(S));}catch(e){}$('sx').textContent=S.X;$('so').textContent=S.O;$('sd').textContent=S.D;}
function render(w){const el=$('board');el.innerHTML='';b.forEach((v,i)=>{const c=document.createElement('div');c.className='cell '+(v||'')+(w&&w.line.includes(i)?' win':'');c.textContent=v||'';c.onclick=()=>play(i);el.appendChild(c);});}
function newRound(){b=Array(9).fill(null);turn='X';over=false;$('msg').textContent='دورك: X';render();}
function end(){const w=XO.winner(b);if(w){over=true;S[w.who]++;$('msg').textContent='كسب '+w.who+' 🎉';render(w);save();return true;}
 if(!XO.empties(b).length){over=true;S.D++;$('msg').textContent='تعادل';save();return true;}return false;}
function play(i){if(over||b[i])return;if($('mode').value==='cpu'&&turn!==human)return;move(i);
 if(!over&&$('mode').value==='cpu'){setTimeout(()=>{if(over)return;move(XO.computerMove(b,'O',$('level').value));},350);}}
function move(i){b[i]=turn;render();if(end())return;turn=turn==='X'?'O':'X';$('msg').textContent='دور: '+turn;}
$('again').onclick=newRound;$('mode').onchange=$('level').onchange=newRound;
$('reset').onclick=()=>{S.X=S.O=S.D=0;save();newRound();};
save();newRound();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');
