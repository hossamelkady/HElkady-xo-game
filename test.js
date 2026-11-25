const assert=require('assert');const X=require('./www/logic.js');
assert.strictEqual(X.winner(['X','X','X',null,null,null,null,null,null]).who,'X');
assert.strictEqual(X.winner(Array(9).fill(null)),null);
// computer (O) must block X's win
let b=['X','X',null,null,'O',null,null,null,null];
assert.deepStrictEqual(X.bestMove(b,'O'),[2]);
// computer takes its own win
b=['O','O',null,'X','X',null,null,null,null];assert.deepStrictEqual(X.bestMove(b,'O'),[2]);
// hard vs hard always draws
let bd=Array(9).fill(null),t='X';while(!X.winner(bd)&&X.empties(bd).length){bd[X.computerMove(bd,t,'hard')]=t;t=t==='X'?'O':'X';}
assert.strictEqual(X.winner(bd),null);
// hard never loses vs random
for(let g=0;g<200;g++){let bb=Array(9).fill(null),turn='X';while(!X.winner(bb)&&X.empties(bb).length){bb[X.computerMove(bb,turn,turn==='O'?'hard':'easy')]=turn;turn=turn==='X'?'O':'X';}
 const w=X.winner(bb);assert.ok(!w||w.who==='O');}
// corrupted or odd saved data never crashes startup
assert.deepStrictEqual(X.loadScore(null),{X:0,O:0,D:0});
assert.deepStrictEqual(X.loadScore('{bad json'),{X:0,O:0,D:0});
assert.deepStrictEqual(X.loadScore('[1,2]'),{X:0,O:0,D:0});
assert.deepStrictEqual(X.loadScore('"text"'),{X:0,O:0,D:0});
assert.deepStrictEqual(X.loadScore('{"X":3,"O":"x","D":-1}'),{X:3,O:0,D:0});
assert.deepStrictEqual(X.loadScore('{"X":2,"O":1,"D":4}'),{X:2,O:1,D:4});
console.log('xo tests passed');
