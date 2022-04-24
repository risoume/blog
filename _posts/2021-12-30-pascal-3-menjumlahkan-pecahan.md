---
title: "Pascal 3: Menjumlahkan Pecahan"
categories: Pascal
---

__Penjumlahan dua pecahan__

Diberikan pecahan $a/b$ dan $c/d$ dengan $a, b, c, d$ bilangan asli. Untuk mejumlahkannya, kita harus menyamakan penyebutnya terlebih dahulu. Cara termudah adalah dengan mengalikan satu penyebut dengan penyebut lain:
<p><span class="m-d">\[\frac{a}{b}\cdot\frac{d}{d} + \frac{c}{d}\cdot\frac{b}{b}=\frac{ad+cb}{bd}\]</span></p>

Seperti pada program berikut.

```pascal
var 
  a, b, c, d, p, q: integer;

begin
  write('Masukkan pecahan 1 (pembilang penyebut): ');
  readln(a, b);
  write('Masukkan pecahan 2 (pembilang penyebut): ');
  readln(c, d); 

  p := a * d + c * b;
  q := b * d;

  writeln('Jumlah: ', p, '/', q);
  readln;
end.
```
<!--more-->

Contoh hasil program:

```
Masukkan pecahan 1 (pembilang penyebut): 1 2
Masukkan pecahan 2 (pembilang penyebut): 1 4
Jumlah: 6/8
```

Perhatikan bahwa jumlah yang diperoleh masih bisa disederhanakan menjadi $3/4$. Suatu pecahan $p/q$ dikatakan dalam bentuk paling sederhana apabila $(p,q)=1$, yaitu pembilang dan penyebutnya relatif prima.

Bagaimana mengubah pecahan ke dalam bentuk paling sederhana? Kita gunakan sifat gcd berikut, yang pembuktiannya ada di bagian akhir.

Misal $(a,b)=d$, maka
<p>\[(a/d,b/d)=1\tag{1}\]</p>

Untuk mencari gcd kita gunakan fungsi pada postingan <a href="https://risoume.github.io/blog/pascal/pascal-1-greatest-common-divisor/">Pascal 1: Greatest Common Divisor</a>.

```pascal
var 
  a, b, c, d, p, q, g: integer;

function gcd(x, y: integer): integer;
begin
  if y = 0 then exit(x);
  gcd := gcd(y, x mod y);
end;

begin
  write('Masukkan pecahan 1 (pembilang penyebut): ');
  readln(a, b);
  write('Masukkan pecahan 2 (pembilang penyebut): ');
  readln(c, d); 

  p := a * d + c * b;
  q := b * d; 
  g := gcd(p, q);

  writeln('Jumlah: ', p div g, '/', q div g);
  readln;
end.
```

Jalankan program ini dan masukkan pecahan pada contoh sebelumnya. Maka hasilnya adalah pecahan berbentuk paling sederhana.

Selanjutnya bagaimana menampilkan step-by-step penjumlahan? Misalnya jika diinputkan pecahan $2/3$ dan $1/5$ kita ingin keluarannya seperti ini:
<p>\[10/15 + 3/15 = 13/15.\]</p>

Kalau program sebelumnya menyamakan penyebut dengan mengalikan keduanya, maka pada program berikut kita gunakan lcm. Dalam kasus ini
<p>\[q=[b,d]=\frac{bd}{(b,d)}\]</p>

Dari sini kita dapati
<p><span class="m-d">\[\frac{a}{b} + \frac{c}{d} = \frac{a}{b}\cdot\frac{d/(b,d)}{d/(b,d)}+\frac{c}{d}\cdot\frac{b/(b,d)}{b/(b,d)}=\frac{aq/b}{q} + \frac{cq/d}{q}\]</span></p>

```pascal
var 
  a, b, c, d, p, q, g: integer;

function gcd(x, y: integer): integer;
begin
  if y = 0 then exit(x);
  gcd := gcd(y, x mod y);
end;

begin
  write('Masukkan pecahan 1 (pembilang penyebut): ');
  readln(a, b);
  write('Masukkan pecahan 2 (pembilang penyebut): ');
  readln(c, d); 

  q := b * d div gcd(b, d);
  a := a * q div b;
  b := c * q div d;
  p := a + c;
  g := gcd(p, q);

  writeln('Jumlah: ', a, '/', q, ' + ', c, '/', q,' = ', p div g, '/', q div g);
  readln;
end.
```

Contoh hasil program:

```
Masukkan pecahan 1 (pembilang penyebut): 1 5
Masukkan pecahan 2 (pembilang penyebut): 2 15
Jumlah: 3/15 + 2/15 = 1/3
```

__Penjumlahan $n$ pecahan__

Kita gunakan 2 buah `array` yaitu num untuk menyimpan pembilang dan den untuk menyimpan penyebut. Pertama user memasukkan banyaknya pecahan yang ingin dijumlahkan. Lalu looping dari $1$ sampai $n$ untuk memasukkan pembilang dan penyebuat tiap pecahan ke dalam `array`.

```pascal
  write('Masukkan banyaknya pecahan: ');
  readln(n);

  for i := 1 to n do begin
    write('Masukkan pecahan ke-', i, ' (pembilang penyebut): ');
    readln(num[i], den[i]);
  end;
```

Kalau dalam program sebelumya lcm-nya adalah $q=[b,d]$, maka sekarang $q=[\text{den}_1,\text{den}_2,\ldots,\text{den}_n]$. Kita gunakan potongan kode berikut, yang sudah dibahas di postingan&nbsp;<a href="https://risoume.github.io/blog/pascal/pascal-2-least-common-multiple/">sebelumnya</a>, untuk mencari lcm dari $n$ bilangan.

```pascal
  q := den[1];
  for i := 2 to n do
    q := q * den[i] div gcd(q, den[i]);
```

Selanjutnya pembilang dari tiap pecahan dikali dengan lcm dan dibagi dengan penyebutnya. Dan seluruh pembilang dijumlahkan.

```pascal
  p := 0;
  for i := 1 to n do begin
    num[i] := num[i] * q div den[i];
    p := p + num[i];
  end;
```

Setelah itu tinggal ditampilkan. Berikut adalah program utuhnya.

```pascal
var
  num, den: array[1..10] of integer; 
  i, n, p, q, g: integer;

function gcd(a, b: integer): integer;
begin
  if b = 0 then exit(a);
  gcd := gcd(b, a mod b);
end;

begin
  write('Masukkan banyaknya pecahan: ');
  readln(n);

  for i := 1 to n do begin
    write('Masukkan pecahan ', i, ' (pembilang penyebut): ');
    readln(num[i], den[i]);
  end;
  
  q := den[1];
  for i := 2 to n do
    q := q * den[i] div gcd(q, den[i]);

  p := 0;
  for i := 1 to n do begin
    num[i] := num[i] * q div den[i];
    p := p + num[i];
  end;

  g := gcd(p, q);
  write('Jumlah: ', num[1], '/', q);
  for i := 2 to n do
    write(' + ', num[i], '/', q);
  writeln(' = ', p div g, '/', q div g);
  readln;
end.
```

Contoh hasil program:

```
Masukkan banyaknya pecahan: 3
Masukkan pecahan 1 (pembilang penyebut): 1 5
Masukkan pecahan 2 (pembilang penyebut): 2 15
Masukkan pecahan 3 (pembilang penyebut): 1 3
Jumlah: 3/15 + 2/15 + 5/15 = 2/3
```

Perhatikan bahwa kita akan menjumpai hasil penjumlahan berbentuk $k/1$. Misalnya $2/3 + 2/3 +2/3=2/1$. Ini terjadi ketika $q=g$. Untuk itu gunakan kondisional `if` untuk memeriksa kasus ini. Perintah `writeln` terakhir pada program di atas kita ganti dengan kode berikut.

```pascal
  if q = g then
    writeln(' = ', p div g)
  else
    writeln(' = ', p div g, '/', q div g);
```

Lebih jauh, jika ingin mengikutsertakan pecahan negatif, maka berikan bilangan yang negatif sebagai pembilang. Akibatnya kita akan menjumpai kasus $p=0$. Sehingga perlu digunakan kondisional `if` untuk menyelesaikannya. Namun ternyata potongan kode terakhir di atas sudah mencakup kasus ini! Sebab jika $p=0$ maka $g=(0,q)=q$.

__(Tambahan)__ Pembuktian $(1)$.

Misal $d'=(a/d,b/d)$. Akan ditunjukkan $d'=1$.
Kita bisa nyatakan $a/d=md'$ dan $b/d=nd'$ untuk suatu $m$ dan $n$ bilangan bulat. Maka $a=mdd'$ dan $b=ndd'$. Sehingga $dd'$ adalah faktor bersama dari $a$ dan $b$. Tapi dari defisini gcd, $dd'\leq d$, $d'\leq 1$. Jadi haruslah $d'=1$.

<br />

Referensi:
- _Elementary Number Theory with Applications_ - Thomas Koshy
