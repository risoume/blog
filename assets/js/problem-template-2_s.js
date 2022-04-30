
function solusi() {
    let exp3 = Math.floor(k / 2);
    let maxb = Math.floor(Math.log(exp3) / Math.log(3));
  
    let pairs = 0;
    for (let i = 1; i <= maxb; i++){
      let exp2 = Math.floor(k / 3**i);
      let maxa = Math.floor(Math.log(exp2) / Math.log(2));
      pairs += maxa;
    }

    const solusi = `$${pairs}$`;

    output.innerHTML = `Solusi: ${solusi}`;
}

function solve() {
    k = parseInt(input1.value);

    if (isNaN(k)) {
        hasil.innerHTML = 'Input tidak valid.';
        return;
    }

    solusi();
    MathJax.typeset();
}

solve();