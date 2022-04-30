---
layout: problem-template
categories: Problem-templates
title: "Poblem Template 1"
js: problem-template-1_s

soal: Diketahui $x-y=a$ dan $xy=b$. Tentukan nilai $x^4+y^4$
petunjuk: Masukkan bilangan bulat $a$ dan $b$
input:
  - nomor: 1
    label: a
    nilai_awal: 10
  - nomor: 2
    label: b
    nilai_awal: 10

terkait:
  - contest: OSK $2017$ no $1$
    soal: Diketahui $x-y=10$ dan $xy=10$. Tentukan nilai $x^4+y^4$
---

<p><span class="m-d">
    \begin{align*}
        x^4+y^4 &= (x^2+y^2)^2 - 2(xy)^2 \\
        &= ((x-y)^2+2xy)^2 - 2(xy)^2 \\
        &= (a^2+2b)^2 - 2b^2 \\
        &= a^4 + 4a^2b + 2b^2
      \end{align*}
</span></p>
