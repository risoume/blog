
// tiap mode mengubah variabel global
let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

// handle mathjax overflow dan display mode
const _s = '<span class="m-d">\\[';
const _t = '\\]</span>';
const _b = '<span class="m-d">\\begin{align*}';
const _e = '\\end{align*}</span>';


const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input2');
const input4 = document.getElementById('input2');
const input5 = document.getElementById('input2');

const output = document.getElementById('hasil');
const solveButton = document.getElementById("solve");
solveButton.addEventListener("click", () => solve(), false); 

//  fokus ke next input
let inputAll = document.querySelectorAll('input');
for (let i = 0; i < inputAll.length; i++){
    inputAll[i].addEventListener('keydown', e => {
        if(e.keyCode === 13) {
            if (i < inputAll.length -1) 
                inputAll[i + 1].focus();
            else {
                solveButton.focus();
                solve();
            }
        }
    }, false);
}
