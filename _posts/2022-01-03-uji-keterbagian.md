---
title: "Uji Keterbagian"
categories: Number-theory
---

Uji keterbagian digunakan untuk menentukan apakah suatu bilangan bulat $n$ dapat dibagi oleh bilangan bulat $m$ berdasarkan digit-digitnya tanpa membaginya secara langsung.

Misal $n=\overline{n_kn_{k-1}\ldots n_1n_0}$ adalah sebarang bilangan $k+1$ digit. Kita bisa nyatakan $n$ sebagai
<p><span class="m-d">\[n=\overline{n_kn_{k-1}\ldots n_{i+1}n_i}\cdot 10^i+\overline{n_{i-1}n_{i-2}\ldots n_1n_0}\]</span></p>

dengan $0\leq i\leq k$. Maka
<p><span class="m-d">\[n\equiv \overline{n_{i-1}n_{i-2}\ldots n_1n_0} \pmod{10^i}.\]</span></p><!--more-->

Dari sini didapat:

- suatu bilangan __habis dibagi__ $10^i$ jika dan hanya jika $i$ digit terakhirnya adalah $0$.

Selajutnya karena $10^i=2^i\cdot 5^i$, maka kita juga punya
<p><span class="m-d">\[n\equiv \overline{n_{i-1}n_{i-2}\ldots n_1n_0} \pmod{2^i}\]</span></p>

dan
<p><span class="m-d">\[n\equiv \overline{n_{i-1}n_{i-2}\ldots n_1n_0} \pmod{5^i}.\]</span></p>

Sehingga diperoleh:
- suatu bilangan __habis dibagi__ $2^i$ jika dan hanya jika $i$ digit terakhirnya habis dibagi $2^i$,
- suatu bilangan __habis dibagi__ $5^i$ jika dan hanya jika $i$ digit terakhirnya habis dibagi $5^i$.

Agar lebih mudah memahaminya, kita selesaikan soal berikut.

__Soal 1.__ $N$ adalah bilangan bulat kelipatan $8$ terbesar yang semua digitnya berbeda. Tentukan bilangan $N$.

Bilangan terbesar yang semua digitnya berbeda adalah $9876543210$. Untuk menguji apakah suatu bilangan habis dibagi $8=2^3$, cukup dengan menguji tiga digit terakhirnya. Tapi $210$ tidak habis dibagi $8$. Selanjutnya kita periksa bilangan ratusan terbesar berikutnya yaitu $201$ dan $120$. Yang terakhir habis dibagi $8$. Jadi $N=9876543120$.

__Soal 2.__ Tentukan probabilitas bilangan $736a7bcd$ habis dibagi $125$.

Agar habis dibagi $125=5^3$, maka tiga digit terakhirnya harus habis dibagi $125$. Banyak bilangan $\overline{bcd}$ yang mungkin adalah $\lfloor 1000/125 \rfloor=8$. Maka probabilitasnya adalah $8/10^4$.

Berikutnya kita lihat uji keterbagian $3$ dan $9$. Bilangan bulat positif $n$ dapat dinyatakan sebagai $n=\sum_{i=0}^k n_i\cdot 10^i$. Karena $10^i\equiv 1 \pmod{3}$ dan $10^i \equiv 1\pmod{9}$, maka kita peroleh
<p><span class="m-d">\[n \equiv n_k +n_{k−1} +\cdots +n_1 +n_0 \pmod{3},\]</span></p>

dan
<p><span class="m-d">\[n ≡ n_k + n_{k−1} +\cdots+n_1 + n_0 \pmod{9}.\]</span></p>

Sehingga didapat:
- suatu bilangan __habis dibagi__ $3$ jika dan hanya jika jumlah dari digit-digitnya habis dibagi $3$,
- suatu bilangan __habis dibagi__ $9$ jika dan hanya jika jumlah dari digit-digitnya habis dibagi $9$.

__Soal 3.__ Tentukan bilangan asli terkecil $n$ sehingga digit-digit $15n$ hanya terdiri dari $8$ dan $0$.

Karena $15n$ habis dibagi $5$ dan $3$, digit terakhirnya haruslah $0$ dan jumlah digit-digitnya adalah kelipatan $3$. Maka banyak digit $8$ minimal ada $3$. Sehingga nilai minimum dari $15n$ adalah $8880$. Jadi $n=592$.

Berikutnya perhatikan bahwa $10\equiv −1 \pmod{11}$, $10^i \equiv (−1)^i \pmod{11}$. Ini berakibat
<p><span class="m-d">\[n ≡ (−1)^k n_k +\ldots −n_3 + n_2 −n_1 +n_0 \pmod{11}.\]</span></p>

Jadi,
- suatu bilangan __habis dibagi__ $11$ jika dan hanya jika selisih jumlah dari digit-digit di posisi genap dengan jumlah digit-digit di posisi ganjil habis dibagi $11$.

__Soal 4.__ Bilangan $21358ab$ habis dibagi $99$. Tentukan $a$ dan $b$. (_Mathematics Teacher_, $1992$).

Agar suatu bilangan habis dibagi $99$, ia harus habis dibagi $9$ dan $11$. Yakni $9\|19+a+b$ dan $11\|b-a+7$. Nilai yang mungkin dari $a+b$ adalah $8$ dan $17$, dan nilai yang mungkin dari $b-a$ adalah $-7$ dan $4$. Dengan menyelesaikan sisanya diperoleh $a=2$ dan $b=6$.

__Soal 5.__ (OSK $2010$) Tentukan nilai $n$ terkecil sehingga bilangan $\underbrace{20102010\dots 2010}_\text{n buah&nbsp; 2010}$ habis dibagi $99$.

Dapat dilihat jumlah digit-digit di posisi ganjil adalah $0$ dan jumlah digit-digit di posisi genap adalah $3n$. Agar bilangan dapat dibagi $99=9\cdot 11$ maka bilangan tersebut harus dapat dibagi $9$ dan $11$. Maka haruslah $9$ dan $11$ membagi $3n$. Jadi nilai $n$ terkecil adalah $33$.

__Soal 6.__ (Flanders MO $2000$) Bilangan asli $n$ terdiri dari $7$ digit berbeda dan $n$ habis dibagi masing masing digitnya. Tentukan digit yang tidak ada dalam $n$.

Jelas $0$ bukan bagian dari digitnya. Karena digit genap sisanya ada $4$, pasti ada $2$ di antaranya yang merupakan digit dari $n$. Akibatnya $5$ tidak termasuk, sebab perkalian dengan digit genap akan menghasilkan digit satuan $0$. Jumlah dari digit yang tersisa adalah $40\equiv 1 \pmod{3}$. Maka kita harus menghilangkan $4$ atau $7$. Tapi karena $9$ juga bagian dari digitnya, yang harus dihilangkan adalah $4$.

<br>

Terakhir kita akan membuat aturan keterbagian untuk bilangan prima $p$ selain $2$ dan $5$.

Karena $(10,p)=1$, maka $10$ punya invers modulo $p$. Misalkan $n=10a +b$ dengan $b$ adalah digit satuan dari $n$. Misalkan pula $q$ adalah invers dari $10$ modulo $p$. Maka
<p><span class="m-d">\[qn= q\cdot 10a +qb \equiv a+qb \pmod{p}.\]</span></p>

Jadi $n$ habis dibagi $p$ jika dan hanya jika $a+qb$ habis dibagi $p$. Ini bisa dilakukan berulang-ulang sampai diperoleh bilangan yang kecil.

Sekarang kita cari aturan keterbagian $13$. Karena invers dari $10$ modulo $13$ adalah $4$, maka
<p><span class="m-d">\[4n=40a+4b \equiv a +4b \pmod{p}.\]</span></p>

Sehingga,
- suatu bilangan __habis dibagi__ $13$ jika dan hanya jika $4$ kali digit satuannya dijumlahkan dengan digit sisanya habis dibagi $13$.

Contoh: $273$ habis dibagi $13$ sebab $27+4\times 3=39$ habis dibagi $13$.

Dengan metode yang sama Anda dapat buktikan dua aturan berikut:

- suatu bilangan __habis dibagi__ $7$ jika dan hanya jika kita mengurangi $2$ kali digit satuannya dengan digit sisanya habis dibagi $7$,
- suatu bilangan __habis dibagi__ $19$ jika dan hanya jika $2$ kali digit satuannya dijumlahkan dengan digit sisanya habis dibagi $19$.

Lalu bagaimana mencari aturan keterbagian untuk bilangan komposit? Apakah aturan keterbagian suatu bilangan hanya ada satu? Lebih jauh tentang uji keterbagian akan kita bahas di postingan lainnya.

<br />

Referensi:
- _Elementary Number Theory with Applications_ - Thomas Koshy
- https://en.wikipedia.org/wiki/Divisibility_rule