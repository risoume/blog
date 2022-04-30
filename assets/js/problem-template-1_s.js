
function solusi() {
    let hasil = a**4 + 4*a*a*b + 2*b*b;

    const solusi = `$${hasil}$`;

    output.innerHTML = `Solusi: ${solusi}`;
}

function solve() {
    a = parseInt(input1.value);
    b = parseInt(input2.value);

    if (isNaN(a) || isNaN(b)) {
        hasil.innerHTML = 'Input tidak valid.';
        return;
    }

    solusi();
    MathJax.typeset();
}

solve();