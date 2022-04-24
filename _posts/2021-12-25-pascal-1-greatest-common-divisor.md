---
title: "Pascal 1: Greatest Common Divisor"
categories: Pascal
---

Misal diberikan dua bilangan bulat positif $a$ dan $b$. Maka program yang sederhana untuk mencari gcd-nya adalah seperti ini:

```pascal
var
  i, a, b, d, min: integer;
  
begin
  write('Masukkan dua bilangan: ');
  readln(a, b);
  
  min := (a + b - abs(a - b)) div 2;
  d := 1;
  for i := 2 to min do
    if (a mod i = 0) and (b mod i = 0) then
      d := i;

  writeln('gcd: ', d);
  readln;
end.
```
<!--more-->

Masukkan nilai $d=1$ karena $1$ membagi $a$ dan $b$. Selanjutnya jika ditemukan $i$ yang lebih besar yang memenuhi kondisi, maka nilai $d$ diganti menjadi nilai tersebut. Ini sesuai dengan definisi gcd berikut:

__(Definisi)__ Bilangan positif $d$ adalah gcd dari $a$ dan $b$ apabila
- $d\|a$ dan $d\|b$,
- jika $d'\|a$ dan $d'\|b$, maka $d'\leq d$.

Kita melakukan looping dari 2 sampai $\min(a,b)$. Formula untuk mencari min memuat fungsi `abs` yang mengembalikan nilai mutlak:
<p><span class="m-d">\[\frac{a+b-|a-b|}{2}=\left\{\begin{align*}b, \quad &amp;\text{jika }a\geq b\\a, \quad &amp;\text{jika }a&lt;b \end{align*} \right.\]</span></p>

Sebagai tambahan, jika dikumpulkan semua nilai $d$ ke dalam `array`, maka setiap bilangan tersebut akan membagi habis gcd, sebagaimana yang dijamin oleh teorema di bawah ini.

__(Teorema)__ Misal $(a,b)=d$ dan $d'$ adalah pembagi bersama $a$ dan $b$, maka $d'\|d$.

Tentu program di atas bukanlah solusi yang baik apalagi untuk bilangan yang besar. Pada program berikut, kita gunakan sifat dari gcd.

```pascal
var
  a, b: integer;

begin
  write('Masukkan dua bilangan: ');
  readln(a, b);
  
  while a <> b do
    if a > b then
      a := a - b
    else
      b := b - a;

  writeln('gcd: ', a);
  readln;
end.
```

Berbeda dengan program di awal yang memeriksa setiap bilangan $i$ apakah merupakan pembagi bersama $a$ dan $b$, program kedua mengubah $(a,b)$ ke bentuk yang lebih kecil dengan penerapan berulang-ulang formula berikut
<p><span class="m-d">\[(a,b)=\left\{\begin{align*}(a-b,b), \quad &amp;\text{jika }a&gt;b\\(a,b-a), \quad &amp;\text{jika }a&lt;b \end{align*} \right.\tag{1}\]</span></p>

sampai diperoleh $a=b$.

Misal kita ingin mencari $(42,18)$. Dari $(1)$:
<p><span class="m-d">\[(42,18)=(42-18,18)=(24,18)\]</span></p>

diperoleh bentuk yang lebih kecil. Dengan menggunakan $(1)$ berulang kali didapat
<p><span class="m-d">\[(24,18)=(6,18)=(6,12)=(6,6)=6\]</span></p>

Sekarang misalkan $a&gt;b$. Jika $(1)$ dilakukan berulang kali kita peroleh
<p><span class="m-d">\[(a,b)=(a-b,b)=(a-2b,b)=\cdots =(a-bq_1,b)\]</span></p>

dengan $0\leq a-bq_1&lt;b$. Misalkan $r_1=a-bq_1$, maka $(a,b)=(b,r_1)$.

Begitu pula jika kita terapkan $(1)$ ke $(b,r_1)$ berulang kali:
<p><span class="m-d">\[(b,r_1)=(b-r_1,r_1)=(b-2r_1,r_1)=\cdots =(b-r_1q_2,r_1)\]</span></p>

dengan $0\leq b-r_1q_2&lt;r_1$. Misalkan $r_2=b-r_1q_2$, maka $(b,r_1)=(r_1,r_2)$.

Sehinga kita sampai ke metode yang efisien untuk mencari gcd, yaitu algoritma euclid.

```pascal
var
  a, b, r: integer;

begin
  write('Masukkan dua bilangan: ');
  readln(a, b);
  
  while b <> 0 do begin
    r := a mod b;
    a := b;
    b := r;
  end;

  writeln('gcd: ', a);
  readln;
end.
```

Dari algoritma pembagian, ada tepat satu pasangan $q$ dan $r$ sehingga $a=bq+r$ dengan $0\leq r&lt;b$.

__(Algoritma Euclid)__ Diberikan dua bilangan bulat positif $a$, $b$, dengan $a&gt;b$. Untuk mencari $(a,b)$ kita gunakan algoritma pembagian berulang kali
<p><span class="m-d">\begin{align*}a&amp;=bq_1 + r_1\\b&amp;=r_1q_2 + r_2\\r_1&amp;=r_2q_3 + r_3\\&amp;\vdots\\r_{n-2}&amp;= r_{n-1}q_n + r_n\\r_{n-1}&amp;= r_nq_{n+1}\end{align*}</span></p>

Maka kita punya
<p><span class="m-d">\[(a,b)=(b,r_1)=(r_1,r_2)=...=(r_{n-1},r_n)\]</span></p>

Karena $r_n\|r_{n-1}$, maka $(r_{n-1},r_n)=(r_n,0)=r_n$. Sehingga kita melakukan looping sampai $b=0$.

Dengan menggunakan algoritma ini untuk contoh sebelumnya, kita peroleh gcd dengan looping yang lebih sedikit:
<p><span class="m-d">\[(42,18)=(18,6)=(6,0)=6\]</span></p>

Algoritma euclid dapat ditulis secara rekursif seperti di bawah ini.

```pascal
function gcd(a, b: integer): integer;
begin
  if b = 0 then exit(a);
  gcd := gcd(b, a mod b);
end;
```

Kita gunakan prosedur `exit` untuk menghentikan fungsi dan mengembalikan nilai gcd.

__GCD dari $n$ Bilangan__

<p>Misal $d$ adalah gcd dari $n$ bilangan $a_1,a_2,\ldots,a_n$, yaitu $d=(a_1,a_2,\ldots,a_n)$. Misalkan pula $d'=(a_1,a_2,\ldots,a_{n-1})$ dan $d''=(d',a_n)$. Karena $d|a_i$ untuk setiap $i$, maka $d|d'$ dan $d|a_n$. Akibatnya $d|d''$. Selanjutnya, karena $d''=(d',a_n)$, maka $d''|d'$ dan $d''|a_n$. Tapi $d''|d'$ berakibat $d''|a_1$ untuk $1\leq i\leq n-1$. Sehingga $d''|a_i$ untuk setiap $i$. Maka $d''|d$. Jadi $d''=d$.</p>

Di atas adalah pembuktian dari teorema berikut, yang akan kita gunakan secara rekursif untuk mencari gcd dari $n$ bilangan.

__(Teorema)__ Misal $a_1,a_2,\ldots,a_n$ adalah n $(\geq 3)$ bilangan bulat positif. Maka
<p><span class="m-d">\[(a_1,a_2,\cdots,a_n)=((a_1,a_2,\ldots,a_{n-1}),a_n)\]</span></p>

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
    hasil := gcd(hasil, num[i]);

  writeln('gcd: ', hasil);
  readln;
end.
```

Pada postingan selanjutnya kita akan mencari lcm dari $n$ bilangan dengan mengubah sedikit program di atas.

<br />

Referensi:
- _Elementary Number Theory with Applications_ - Thomas Koshy

