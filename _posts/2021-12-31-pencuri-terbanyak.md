---
title: "Pencuri Terbanyak"
categories: Recreational
---

Penjual memanggang $11$ roti untuk dijual esok hari. Namun malam hari semua roti itu dicuri. Dari rekaman kamera pengawas didapat $4$ orang pencuri yang masuk secara bergantian. Setelah diinterogasi mereka mengaku punya aturan dalam setiap aksinya. Banyak roti yang dicuri Alex harus genap, sedangkan Brian harus ganjil. Charli hanya boleh mencuri $2/3$ dari roti yang ia temukan, dan Dedi hanya boleh mencuri $1/4$ dari yang ia temukan. Siapakah yang mencuri paling banyak?<!--more-->

<br >

__Solusi.__

Charli dan Dedi bukanlah yang pertama mencuri karena $11$ tidak habis dibagi $3$ atau $4$. Dan mereka&nbsp; juga bukan yang terakhir sebab mereka akan menyisakan beberapa roti dari yang mereka temukan. Sehingga Charli dan Dedi pasti pencuri kedua atau ketiga.

Misalkan pencuri kedua menemukan ada $k$ roti yang ditinggalkan pencuri pertama.

1. Jika Charli pencuri kedua maka ia menyisakan $k/3$ roti. Lalu Dedi mencuri $1/4$ dari sisa itu dan meninggalkan $3/4$ lagi. Maka pencuri keempat akan memperoleh $(3/4)(k/3)=k/4$ roti.

2. Jika Dedi pencuri kedua maka ia menyisakan $3k/4$ roti. Lalu Charli mencuri $2/3$ dari sisa itu dan meninggalkan $1/3$ lagi. Maka pencuri keempat akan memperoleh $(1/3)(3k/4)=k/4$ roti.

Jadi siapapun di antara mereka yang mencuri kedua dan ketiga pasti pencuri keempat mendapat $k/4$ roti.

Maka kita tahu Alex tidak mungkin pencuri pertama. Sebab ia akan mencuri sebanyak genap roti dan menyisakan sebanyak ganjil roti. Jadi Bill haruslah yang pertama dan Alex yang keempat. Misal Alex mendapat $2m$ roti. Maka $k/4=2m$, $k=8m$. Jadi banyak roti yang ditinggalkan pencuri pertama adalah kelipatan $8$. Sekarang kita tahu urutannya. Biil mencuri $3$ dan menyisakan $8$, lalu Dedi mencuri $2$ dan menyisakan $6$, lalu Charli mencuri $4$ menyisakan $2$ untuk Alex. Sehingga pencuri terbanyak adalah Charli.

__Explorasi.__

Soal di atas bisa diperumum untuk $n&gt;8$ roti dengan $n$ adalah bilangan ganjil bukan kelipatan $3$, yakni $n=11,13,17,19,\ldots$

Akan muncul pertanyaan-pertanyaan berikut:

<p>$1$. Apakah urutan mereka mencuri selalu sama?</p>

Kita tahu Bill haruslah mencuri pertama dan Alex harus keempat. Bagaimana dengan Charli dan Dedi? Karena $4\|k$ maka Dedi selalu bisa mencuri kedua. Tapi Charli hanya bisa menjadi pencuri kedua jika $3\|k$, yaitu jika $k$ adalah kelipatan $\text{lcm}(3,8)=24$.

<p>$2$. Siapakah yang punya kesempatan mencuri paling banyak roti?</p>

Pada kasus $n=11$ di atas, Charli adalah pencuri terbanyak. Apakah ini juga berlaku untuk semua $n$ yang mungkin? Ternyata tidak. Sebab untuk $n\geq 13$, Bill dapat mencuri $n-8$ roti dan menyisakan $8$ roti. Seperti sebelumnya, dari $8$ sisa roti ini Dedi mencuri $2$, Charli $4$, dan Alex $2$. Sedangkan Bill punya $n-8\geq 13-8=5$ roti. Jadi jika $n\geq 13$ Bill akan punya kesempatan mencuri terbanyak.

<p>$3$. Ada berapa banyak cara mereka dapat mencuri?</p>

Dari pertanyaan pertama kita tahu urutan mereka mencuri akan selalu sama jika $k$ bukan kelipatan $24$. Jika $k$ kelipatan $24$ maka Charli bisa jadi pencuri kedua atau ketiga. Maka banyak cara mereka dapat mencuri $n$ roti adalah $\lfloor n/8\rfloor+\lfloor n/24\rfloor$.

Selanjutnya Anda dapat bereksperimen untuk $n$ genap roti dengan $n$ bukan kelipatan $3$ atau $4$.

<br />

__Note__: Riddle ini adalah modifikasi dari Problem 6 Chapter 1 Part 1 _Arithmetical, Geometrical, and Combinatorial Puzzles from Japan_ - Tadao Kitazawa.