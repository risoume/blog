---
title: "Identitas Cassini"
categories: Number-theory
---

Bilangan Fibonacci dinotasikan dengan $F_n$ dan didefinisikan secara rekursif sebagai
<p><span class="m-d">\begin{align*} F_1&amp;=F_2=1\\ F_n&amp;=F_{n-1}+F_{n-2},\quad n\geq 3. \end{align*}</span></p><!--more-->

Berikut adalah sepuluh bilangan Fibonacci pertama:
<p><span class="m-d">\[1,1,2,3,5,8,13,21,34,55\]</span></p>

Selanjutnya amati pola yang memuat tiga bilangan Fibonacci berurutan di bawah ini.
<p><span class="m-d">\begin{align*} F_1F_3-F_2^2 &amp;=1\cdot 2-1^2=(-1)^2\\ F_2F_4-F_3^2 &amp;=1\cdot 3-2^2=(-1)^3\\ F_3F_5-F_4^2 &amp;=2\cdot 5-3^2=(-1)^4\\&amp;\vdots \end{align*}</span></p>

Dengan membandingkan sisi kiri dan sisi kanan, kita bisa menduga
<p><span class="m-d">\begin{align*} F_9F_{11}-F_{10}^2 &amp;=(-1)^{10}\\ F_{100}F_{102}-F_{101}^2 &amp;=(-1)^{101}\\ F_{k-1}F_{k+1}-F_k^2 &amp;=(-1)^k \end{align*}</span></p>

Pola di atas membawa kita ke identitas berikut, yang ditemukan oleh matematikawan dan astronomer Prancis, Giovanni Domenico Cassini $(1625–1712)$, pada tahun $1680$.

__Identitas Cassini__
Misal $n\geq 2$. Maka
<p><span class="m-d">\[F_{n-1}F_{n+1}-F_n^2=(-1)^n.\]</span></p>

__Bukti $1$. Induksi__
Pernyataan di atas benar untuk $n=2$ sebab
<p><span class="m-d">\begin{align*} F_1F_3-F_2^2&amp;=1\times 2-1^2=1\\ &amp;=(-1)^2. \end{align*}</span></p>

Selanjutnya asumsikan benar untuk $n=k$, dengan $k\geq 2$. Maka
<p><span class="m-d">\begin{align*} F_{k-1}F_{k+1}-F_k^2+F_kF_{k+1}-F_kF_{k+1}&amp;=(-1)^k\\ F_{k+1}(F_{k-1}+F_k)-F_k(F_k+F_{k+1})&amp;=(-1)^k\\ F_{k+1}^2-F_kF_{k+2}&amp;=(-1)^k\\ F_kF_{k+2}-F_{k+1}^2&amp;=(-1)^{k+1} \end{align*}</span></p>

Sehingga terbukti dengan induksi.

__Bukti $2$. Matrix__
Bilangan Fibonacci juga dapat dinyatakan dalam bentuk matriks sebagai berikut.
<p><span class="m-d">\[\begin{pmatrix}1 &amp; 1\\1 &amp; 0 \end{pmatrix}^n =\begin{pmatrix}&nbsp; F_{n+1} &amp; F_n \\ F_n &amp; F_{n-1}\end{pmatrix}\]</span></p>

Dengan mengambil determinan dari kedua ruas diperoleh
<p><span class="m-d">\begin{align*}F_{n-1}F_{n+1}-F_n^2 &amp;=\det \begin{pmatrix} F_{n+1} &amp; F_n \\ F_n &amp; F_{n-1}\end{pmatrix}\\ &amp;=\det \begin{pmatrix}1 &amp; 1\\1 &amp; 0\end{pmatrix}^n\\&amp;= \left(\det \begin{pmatrix} 1 &amp; 1\\1 &amp; 0\end{pmatrix}\right)^n\\ &amp;= (-1)^n.\end{align*}</span></p>

<br />

Perhatikan kembali sepuluh bilangan Fibonacci pertama di atas. Mudah dilihat bahwa bilangan-bilangan yang berurutan adalah relatif prima. Misalnya
<p><span class="m-d">\[(F_6,F_7)=(8,13)=1\]</span></p>

Dengan identitas Cassini dapat dibuktikan bahwa hal ini berlaku untuk setiap dua bilangan Fibonacci berurutan, yakni
<p><span class="m-d">\[(F_n,F_{n+1})=1\]</span></p>

__(Bukti)__ Asumsikan ada bilangan prima $p$ yang merupakan faktor dari $F_n$ dan $F_{n+1}$. Maka $p\|F_n^2$ dan $p\|F_{n+1}F_{n-1}$. Sehingga $p\|F_{n+1}F_{n-1}-F_n^2$. Akibatnya $p\|\pm 1$. Ini kontradiksi dengan asumsi bahwa $p$ prima. Jadi, terbukti $(F_n,F_{n+1})=1$.

<br />

Referensi:
- _Elementary Number Theory with Applications_ - Thomas Koshy
- _Fibonacci and Lucas Numbers with Applications_ - Thomas Koshy