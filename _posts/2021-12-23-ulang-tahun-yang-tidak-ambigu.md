---
title: "Ulang Tahun yang Tidak Ambigu"
categories: Recreational
---

Di negara A, penulisan tanggal $2$ April $1996$ adalah $2/4/96$, sedangkan di negara B ditulis $4/2/96$, yaitu mendahulukan bulan daripada tanggal. Tentu ini bisa menimbulkan keambiguan. Pada pertemuan pertama di kelas yang terdiri dari siswa negara A dan B, tiap siswa menuliskan tanggal lahirnya di papan tulis. Setelah seluruh siswa selesai, mereka pun sepakat untuk merayakan setiap ulang tahun temannya. Tidak ada yang merasa ambigu. Berapa jumlah siswa minimal agar dijamin ada dua siswa yang berulang tahun sama?<!--more-->

&nbsp;

__Solusi.__

Mengapa tidak ada siswa yang kebingungan padahal di dalam kelas tersebut tidak hanya siswa dari satu negara saja dan mereka baru pertama bertemu? Ini karena tanggal lahir para siswa tidak termasuk dalam tanggal yang ambigu seperti $1/3/97$ yang bisa berarti tanggal $1$ bulan $3$ jika dia berasal dari negara A, atau tanggal $3$ bulan $1$ jika dia dari negara B.

_Ada berapa tanggal yang tidak ambigu?_

Misalkan kita diberikan tanggal $a/b/c$. Jika salah satu di antara $a$ atau $b$ lebih besar dari $12$, maka nilai tersebut adalah tanggalnya, karena bulan tidak lebih dari $12$. Jika tanggal dan bulan sama, maka tidak ada perbedaan penulisan di kedua negara.

Karena itu, banyaknya tanggal yang ambigu sama dengan banyaknya pasangan $(a, b)$ dengan $a, b\leq 12$ dan $a\neq b$ yaitu $12 \times 12 − 12 = 132$. Sehingga banyak tanggal yang tidak ambigu adalah $365−132 = 233$. Jadi seluruh siswa di kelas tersebut memiliki tanggal lahir di antara $233$ tanggal ini.

Sekarang kita ingin tahu berapa minimal jumlah siswa agar dipastikan ada dua siswa yang berulang tahun sama. Misalkan kita bagi tiap tanggal ke seorang siswa sedemikian sehingga tiap siswa mendapat tanggal yang berbeda. Karena ada $233$ tanggal, maka banyak siswa maksimum agar semua siswa memiliki hari ulang tahun yang berbeda adalah $233$.

Jadi, banyak siswa minimum agar dipastikan ada dua siswa yang berulang tahun sama adalah $234$.

Solusi di atas adalah penerapan dari _pigeonhole principle_, atau prinsip sarang merpati, yang berbunyi: jika $n + 1$ objek ditempatkan ke dalam $n$ kotak, maka ada setidaknya satu kotak yang memuat $2$ atau lebih objek.

__Note:__ Riddle ini adalah modifikasi dari problem $1.1$ _The Colossal Book of Puzzles and Problems_ - Martin Gardner.