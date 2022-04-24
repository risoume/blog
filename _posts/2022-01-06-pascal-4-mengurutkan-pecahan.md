---
title: "Pascal 4: Mengurutkan Pecahan"
categories: Pascal
---

Cara mudah untuk mengurutkan beberapa pecahan adalah dengan mengubahnya ke bentuk desimal. Tapi di sini kita akan gunakan cara yang susah, yaitu menyamakan penyebut lalu membandingkan pembilangnya.

Langkah pertama adalah mengambil input pecahan dari user. Buat sebuah array dua dimensi (matriks) berukuran $10\times 3$. Untuk tiap baris array, kolom pertama berisi pembilang, kolom kedua berisi penyebut, dan kolom ketiga berisi pembilang setelah penyebut disamakan. Kita akan mengurutkan pecahan dengan berpatokan pada entri di kolom ketiga.

Pertama deklarasikan apa yang kita butukan:

```pascal
var
  box: array[1..10, 1..3] of integer;
  i, n, q: integer;
```
<!--more-->

Variabel $n$ memuat banyak pecahan dan variabel $q$ memuat lcm dari semua penyebut. Selanjutnya ambil input dari user:

```pascal
  write('Masukkan banyaknya pecahan: ');
  readln(n);

  for i := 1 to n do begin
    write('Masukkan pecahan ', i, ' (pembilang penyebut): ');
    readln(box[i][1], box[i][2]);
  end;
```

Seperti yang disebutkan di awal, pembilang ditempatkan di kolom pertama, dan penyebut di kolom kedua. Berikutnya kita samakan penyebut pecahan:

```pascal
  q := box[1][2];
  for i := 2 to n do
    q := q * box[i][2] div gcd(q, box[i][2]);
```

Kode di atas memanggil fungsi gcd berikut ini.

```pascal
function gcd(a, b: integer): integer;
begin
  if b = 0 then exit(a);
  gcd := gcd(b, a mod b);
end;
```

Kedua potongan sebelumnya sudah kita bahas di postingan&nbsp;<a href="https://risoume.github.io/blog/pascal/pascal-1-greatest-common-divisor/">pertama</a> dan <a href="https://risoume.github.io/blog/pascal/pascal-2-least-common-multiple/">kedua</a>. Setelah itu, sesuaikan pembilang dengan penyebut yang sudah disamakan tadi dan simpan di kolom ketiga.

```pascal
  for i := 1 to n do
    box[i][3] := box[i][1] * q div box[i][2];
```

Sampai di sini kita tampilkan pecahan-pecahan yang penyebutnya sudah sama tersebut:

```pascal
  writeln;
  for i := 1 to n do begin
    write(box[i][1], '/', box[i][2], ' -> ', box[i][3], '/', q);
    writeln;
  end;
```

Contoh hasil program:

```
Masukkan banyaknya pecahan: 3
Masukkan pecahan 1 (pembilang penyebut): 1 2
Masukkan pecahan 2 (pembilang penyebut): 2 5
Masukkan pecahan 2 (pembilang penyebut): 3 7

1/2 -> 35/70
2/5 -> 28/70
3/7 -> 30/70
```

Langkah berikutnya adalah mengurutkan pembilang pada pecahan yang di ruas kanan. Dalam contoh di atas adalah $35,28,30$. Ketiga pembilang ini disimpan pada $\text{box}[i][3]$.

Ada banyak algoritma untuk mengurutkan. Karena ukuran data kecil, maka kita gunakan yang sederhana, yaitu _bubble sort_. Algoritma ini bekerja pertama kali seperti ini:

Untuk setiap $i=1,2,\ldots,n-1$, bandingkan $a[i]$ dengan $a[i+1]$, tukar jika $a[i]>a[i+1].$

Misal ingin diurutkan data $[9,4,1,6,3]$. Maka dengan langkah di atas kita peroleh

<p>\begin{equation*}\begin{array}{c}(9\; 4)\; 1\; 6\; 3\\4\; (9\; 1)\; 6\; 3\\4\; 1\; (9\; 6)\; 3\\4\; 1\; 6\; (9\; 3)\\4\; 1\; 6\; 3\; 9\end{array}\end{equation*}</p>

Perhatikan bahwa langkah di atas membawa bilangan terbesar ke dalam $a[n]$. Dengan menggunakan langkah yang sama untuk data $a[1]$ sampai $a[n-1]$ akan didapat bilangan terbesar kedua pada $a[n-1]$. Begitu seterusnya sampai tersisa dua data yang ingin diurutkan dan diperoleh $a[1]$ sebagai data terkecil.

Untuk itu kita gunakan prosedur berikut yang mengakses variabel global box.

```pascal
procedure sorting;
var
  temp: array[1..1, 1..3] of integer;
  k, l: integer;
begin
  for k := 1 to n-1 do
    for l := 1 to n-k do
      if box[l][3] > box[l+1][3] then begin
        temp[1] := box[l];
        box[l] := box[l+1];
        box[l+1] := temp[1];
      end;
end;
```

Kita menukar baris matriks agar pembilang dan penyebut awal (sebelum disamakan penyebutnya) juga mengikuti urutan pembilang saat ini. Berikut adalah program utuhnya.

```pascal
var
  box: array[1..10, 1..3] of integer;
  i, n, q: integer;

function gcd(a, b: integer): integer;
begin
  if b = 0 then exit(a);
  gcd := gcd(b, a mod b);
end;

procedure sorting;
var
  temp: array[1..1, 1..3] of integer;
  k, l: integer;
begin
  for k := 1 to n-1 do
    for l := 1 to n-k do
      if box[l][3] > box[l+1][3] then begin
        temp[1] := box[l];
        box[l] := box[l+1];
        box[l+1] := temp[1];
      end;
      
  for i := 1 to n do begin
    write(box[i][1], '/', box[i][2], ' -> ', box[i][3], '/', q);
    writeln;
  end;
end;

begin
  write('Masukkan banyaknya pecahan: ');
  readln(n);

  for i := 1 to n do begin
    write('Masukkan pecahan ', i, ' (pembilang penyebut): ');
    readln(box[i][1], box[i][2]);
  end;

  q := box[1][2];
  for i := 2 to n do
    q := q * box[i][2] div gcd(q, box[i][2]);

  for i := 1 to n do
    box[i][3] := box[i][1] * q div box[i][2];

  writeln;
  for i := 1 to n do begin
    write(box[i][1], '/', box[i][2], ' -> ', box[i][3], '/', q);
    writeln;
  end;
  writeln;

  sorting;
  write('Urutan: ', box[1][1], '/', box[1][2]);
  for i := 2 to n do
    write(' , ', box[i][1], '/', box[i][2]);
  readln;
end.
```

Contoh hasil program:

```
Masukkan banyaknya pecahan: 3
Masukkan pecahan 1 (pembilang penyebut): 1 2
Masukkan pecahan 2 (pembilang penyebut): 2 5
Masukkan pecahan 2 (pembilang penyebut): 3 7

1/2 -> 35/70
2/5 -> 28/70
3/7 -> 30/70

2/5 -> 28/70
3/7 -> 30/70
1/2 -> 35/70
Urutan: 2/5, 3/7, 1/2
```

