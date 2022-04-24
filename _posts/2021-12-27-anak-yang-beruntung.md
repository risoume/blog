---
title: "Anak yang Beruntung"
categories: Recreational
---

Tiga orang anak masing-masing diberikan sebuah bilangan bulat positif dan mereka tahu jumlah ketiganya adalah $14$. Seorang anak dikatakan beruntung apabila bilangan yang ia peroleh tidak lebih kecil dari dua orang lainnya. Arisa bilang dia tidak tahu siapa yang beruntung. Karena Arisa tidak tahu, Bill pun tidak bisa menentukan siapa yang berutung. Mendengar kedua temannya tidak tahu, Chely pun tidak bisa menyimpulkan siapa yang beruntung. Tapi setelah itu, Arisa jadi bisa menentukan siapa yang beruntung. Bilangan apa yang didapat Arisa?<!--more-->

&nbsp;

__Solusi $1$.__

Sebelum Arisa berhasil menyimpulkan siapa yang beruntung, ketiga anak tersebut sama-sama tidak tahu. Jelas bahwa bilangan yang mereka peroleh tidak lebih besar dari $6$. Karena misalkan ada anak yang dapat $7$, maka dua anak lainnya akan punya bilangan di antara $1$ sampai $6$. Anak yang memperoleh $7$ tersebut tahu bahwa dia beruntung. Begitu pula untuk bilangan yang lebih besar dari $7$. Jika ada dua anak yang dapat $6$, maka anak ketiga akan mendapat $2$. Jadi bilangan yang diperoleh ketiga anak tersebut paling kecil $2$ dan paling besar $6$.

Perhatikan tabel berikut yang berisi kemungkinan bilangan yang diperoleh ketiga anak.

<p><span class="m-d">\[\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|}\hline\text{Kasus}&amp;1&amp;2&amp;3&amp;4&amp;5&amp;6&amp;7&amp;8&amp;9&amp;10&amp;11&amp;12&amp;13&amp;14&amp;15 \\ \hline\text{Arisa}&amp;2&amp;3&amp;3&amp;4&amp;4&amp;4&amp;5&amp;5&amp;5&amp;5&amp;6&amp;6&amp;6&amp;6&amp;6\\\hline\text{Bill}&amp;6&amp;6&amp;5&amp;6&amp;4&amp;5&amp;6&amp;3&amp;5&amp;4&amp;6&amp;2&amp;5&amp;3&amp;4\\\hline\text{Chely}&amp;6&amp;5&amp;6&amp;4&amp;6&amp;5&amp;3&amp;6&amp;4&amp;5&amp;2&amp;6&amp;3&amp;5&amp;4\\ \hline\end{array}\]</span></p>

Kalau Arisa mendapat bilangan $3$ maka ada dua kemungkinan: Bill dapat $6$ dan Chely dapat $5$, atau Bill dapat $5$ dan Chely dapat $6$. Sehingga Arisa tidak akan bisa menyimpulkan siapa yang beruntung. Begitu pula untuk bilangan yang lebih besar dari $3$. Maka bilangan yang diperoleh Arisa adalah $2$. Dan yang beruntung adalah Bill dan Chely.

__Solusi $2$.__

Arisa tahu dia tidak beruntung karena ia tidak mendapat bilangan yang lebih besar dari $6$. Bill juga tidak dapat bilangan yang lebih besar dari $6$, karena jika dapat pasti ia yang beruntung. Sampai di sini, baik Arisa maupun Bill tidak bisa menebak siapa yang beruntung. Selanjutnya jika Chely dapat bilangan $2$ dia pasti tahu bahwa Arisa dan Bill yang beruntung karena hanya ada satu kemungkinan bilangan mereka yaitu $6$ dan $6$. Karena Chely tidak tahu, berarti ia tidak dapat bilangan 2 maupun angka yang lebih besar dari $6$.

Arisa membuat tabel seperti di atas lalu ia tahu siapa yang beruntung dengan berpatokan pada bilangan yang ia punya. Hal ini hanya mungkin jika bilangan yang ia punya menghasilkan satu kemungkinan di dua anak lainnya. Maka bilangan itu adalah $2$.

__Explorasi.__

Anda bisa membuat soal yang serupa dengan mengganti jumlah bilangannya dengan bilangan genap $(\geq 8)$ lain. Dan jawabannya tetap sama bahwa Arisa mendapat bilangan $2$.

Berikut penjelasannya:

Misalkan bilangan yang diperoleh Arisa, Bill, dan Chely secara berurutan adalah $(a,b,c)$ dan jumlah ketiga bilangan adalah $n$. Dari kondisi soal, bilangan terbesar yang mungkin didapat adalah $\frac{n}{2}-1$. Dan bilangan terkecil adalah $n-(\frac{n}{2}-1)-(\frac{n}{2}-1)=2$. Karenanya, $2\leq a,b,c\leq \frac{n}{2}-1$.

Kita akan buktikan bahwa banyak triple $(a,b,c)$ yang memenuhi soal jika $a=k$ adalah $k-1$, yang berakibat Arisa bisa menyimpulkan&nbsp; siapa yang beruntung jika dan hanya jika $a=2$.

__(Bukti)__

Diberikan $a=k$, maka $b+c=n-k$, dengan $2\leq b,c\leq \frac{n}{2}-1$. Misal $p=b-2$ dan $q=c-2$. Persamaan menjadi
<p><span class="m-d">\[p+q=n-k-4\tag{1}\]</span></p>

dengan $0\leq p,q\leq \frac{n}{2}-3$. Misal $S$ adalah himpunan solusi bulat nonnegatif untuk $(1)$. Maka
<p><span class="m-d">\[|S|=\binom{n-k-3}{1}=n-k-3\]</span></p>

Misal $A_1$ adalah subset dari $S$ yang memenuhi $p\geq \frac{n}{2}-2$ dan $A_2$ adalah subset dari $S$ yang memenuhi $q\geq \frac{n}{2}-2$. Yang ingin dicari adalah banyaknya elemen dari $\overline{A_1}\cap \overline{A_2}$.

Perhatikan bahwa irisan $A_1$ dengan $A_2$ adalah kosong dan $|A_1|=|A_2|$. Misal $x=p-(\frac{n}{2}-2)$. Banyak anggota $A_1$ adalah banyaknya solusi bulat nonnegatif dari $x+q=\frac{n}{2}-k-2$, yaitu
<p><span class="m-d">\[|A_1|=\binom{\frac{n}{2}-k-1}{1}=\frac{n}{2}-k-1\]</span></p>

Sehingga dengan hukum De Morgan dan prinsip inklusi-eksklusi diperoleh
<p><span class="m-d">\begin{align*}|\overline{A_1}\cap \overline{A_2}|&amp;=|\overline{A_1\cup A_2}|=|S-(A_1\cup A_2)|\\&amp;=|S|-(|A_1|+|A_2|)+|A_1\cap A_2|\\&amp;=|S|-2\cdot |A_1|+0\\&amp;=(n-k-3)-2\cdot(\frac{n}{2}-k-1)\\&amp;=k-1.\end{align*}</span></p>

Terbukti.

<br />

__Note__: Riddle ini adalah modifikasi dari Problem $5$ Chapter $1$ Part $1$ _Arithmetical, Geometrical, and Combinatorial Puzzles from Japan_ - Tadao Kitazawa.

Referensi:
- _Introductory Combinatorics_ - Richard A. Brualdi