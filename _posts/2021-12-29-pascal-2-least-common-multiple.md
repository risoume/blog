---
title: "Pascal 2: Least Common Multiple"
categories: Pascal
---

Least Common Multiple (lcm) atau Kelipatan Persekutuan Terkecil (kpk) dari dua bilangan bulat positif $a$ dan $b$ adalah bilangan positif terkecil yang habis dibagi oleh $a$ dan $b$; kita notasikan dengan $[a,b]$.

Pada program pertama kita akan mencari lcm dengan <i>loop</i> sederhana.

```pascal
var
  i, a, b: integer;

begin
  write('Masukkan dua bilangan: ');
  readln(a, b);

  i := (a + b + (a - b)) div 2;
  repeat
    if (i mod a = 0) and (i mod b = 0) then
      break;
    i := i + 1;
  until false;

  writeln('lcm: ', i);
  readln;
end.
```
<!--more-->

Di sini dimisalkan $i=\max(a,b)$. Dengan `repeat` loop kita periksa apakah $a$ dan $b$ sama-sama membagi $i$. Jika iya, maka loop dihentikan dengan `break`. Jika tidak, kita coba untuk $i+1$. Perlu diingat jika tidak ada `break` maka loop tidak akan berhenti karena kondisi `true` tidak pernah tercapai.

Kita juga bisa menggunakan `while` loop dengan kondisi `true` seperti berikut.

```pascal
  while true do begin
    if (i mod a = 0) and (i mod b = 0) then
      break;
    i := i + 1;
  end;
```

Selain itu, kita bisa menghilangkan `if` dengan memindahkan kondisinya ke dalam `while`, setelah terlebih dahulu dinegasikan. Gunakan hukum De Morgan
<p>\[\neg(p\land q) \Leftrightarrow \neg p \lor \neg q\]</p>

dan diperoleh
<p><span class="m-d">\begin{align*}\text{not((i mod a = 0) and (i mod b = 0))} &amp;\Leftrightarrow \text{not(i mod a = 0) or not(i mod b = 0)}\\&amp;\Leftrightarrow\text{(i mod a &lt;&gt; 0) or (i mod b &lt;&gt; 0)}\end{align*}</span></p>

Sehingga potongan kode sebelumnya menjadi seperti ini.

```pascal
  i := (a + b + (a - b)) div 2;
  while (i mod a <> 0) or (i mod b <> 0) do
    i := i + 1;
```

Selanjutnya berdasarkan definisi lcm, kita hanya perlu menguji bilangan kelipatan $i$ saja. Jelas $i$ habis membagi kelipatan $i$. Jadi kita tinggal memeriksa apakah $j=\min(a,b)$ membagi habis kelipatan $i$ seperti potongan kode berikut.

```pascal
  i := (a + b + (a - b)) div 2;
  j := (a + b - (a - b)) div 2;
  k := i;
  
  while (k mod j <> 0) do
    k := k + i;
    
  writeln('lcm: ', k);
```

Berikutnya kita akan menggunakan hubungan antara gcd dan lcm untuk menentukan lcm dengan bantuan gcd. Lcm dan gcd dapat dinyatakan sebagai berikut, yang berdasar pada teorema dasar aritmatika.
<p>\[(a,b)=\prod_{i=1}^n p_i^{\min(a_i,b_i)}\]</p>
<p>\[[a,b]=\prod_{i=1}^n p_i^{\max(a_i,b_i)}\]</p>

Maka dapat dilihat bahwa $(a,b)[a,b]=ab$. Sehingga untuk mencari lcm dengan gcd kita gunakan
<p>\[[a,b]=\frac{ab}{(a,b)}\tag{1}\]</p>

```pascal
var
  p, q: integer;

function gcd(a, b: integer): integer;
begin
  if b = 0 then exit(a);
  gcd := gcd(b, a mod b);
end;
 
begin
  write('Masukkan dua bilangan: ');
  readln(p, q);
  writeln('lcm: ', p * q div gcd(p, q);
  readln;
end.
```

<p>Fungsi untuk gcd di atas telah kita bahas di postingan <a href="https://risoume.github.io/blog/pascal/pascal-1-greatest-common-divisor/">Pascal 1: Greatest Common Divisor</a>.</p>

__LCM dari $n$ bilangan__

Kita tidak bisa menganalogikan $(1)$ untuk tiga buah bilangan atau lebih, yakni
<p>\[[a,b,c]\neq \frac{abc}{(a,b,c)}\]</p>

Contohnya $[2,3,4]=12$, tapi $\frac{2\cdot 3\cdot 4}{(2,3,4)}=24$.

Lalu bagaimana formula untuk mencari lcm untuk 3 bilangan atau lebih?

Kita nyatakan $\nu_p(a)$ sebagai pangkat dari bilangan prima $p$ dalam faktorisasi prima dari $a$. Maka $\text{lcm}(a,b,c)$ bisa dinyatakan sebagai
<p><span class="m-d">\[[a,b,c]=\prod_p&nbsp; p^{\max(\nu_p(a),\nu_p(b),\nu_p(c))}\]</span></p>

Dapat dilihat bahwa
<p><span class="m-d">\[\nu_p([a,b,c])=\max(\nu_p(a),\nu_p(b),\nu_p(c))\]</span></p>

Kita juga tahu
<p><span class="m-d">\[\max(p,q,r)=\max(\max(p,q),r)\]</span></p>

Maka diperoleh
<p><span class="m-d">\begin{align*}\nu_p([a,b,c])&amp;=\max(\nu_p(a),\nu_p(b),\nu_p(c))\\&amp;= \max(\max(\nu_p(a),\nu_p(b)),\nu_p(c))\\&amp;=\max(\nu_p([a,b]),\nu_p(c))\\&amp;=\nu_p([[a,b],c])\end{align*}</span></p>

Sehingga $[a,b,c]=[[a,b],c]$.

Secara umum kita punya teorema di bawah ini.

__(Teorema)__ Misal $a_1,a_2,\ldots,a_n$ adalah $n$ $(\geq 3)$ bilangan bulat positif. Maka
<p><span class="m-d">\[[a_1,a_2,\ldots,a_n]=[[a_1,a_2,\ldots,a_{n-1}],a_n]\]</span></p>

```pascal
var
  num: array[1..10] of integer;
  i, n, hasil: integer;

function gcd(a, b: integer): integer;
begin
  if b = 0 then exit(a);
  gcd := gcd(b, a mod b);
end;

begin
  write('Masukkan banyak bilangan: ');
  readln(n);

  for i := 1 to n do begin
    write('Bilangan ke-', i, ': ');
    readln(num[i]);
  end;
  
  hasil := num[1];
  for i := 2 to n do
    hasil := hasil * num[i] div gcd(hasil, num[i]);

  writeln('lcm: ', hasil);
  readln;
end.
```

<p>Perhatikan bahwa program di atas hanya berbeda satu baris dari program terakhir untuk mencari gcd di&nbsp; postingan <a href="https://risoume.github.io/blog/pascal/pascal-1-greatest-common-divisor/">sebelumnya</a>.</p>

Dua postingan berikutnya kita akan menggunakan gcd dan lcm untuk menjumlahkan dan mengurutkan pecahan.

<br />

Referensi:
- _A Computational Introduction to Number Theory and Algebra_ - Victor Shoup
- _Elementary Number Theory with Applications_ - Thomas Koshy

