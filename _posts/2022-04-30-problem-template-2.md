---
layout: problem-template
categories: Problem-templates
title: "Poblem Template 2"
js: problem-template-2_s

soal: Misalkan $s(n)$ menyatakan faktor prima terbesar dari $n$ dan $t(n)$ menyatakan faktor prima terkecil dari $n$. Tentukan banyaknya bilangan asli $n\in \{1,2,\ldots,k\}$ sehingga $t(n)+1=s(n)$
petunjuk: Masukkan bilangan bulat positif $k$
input:
  - nomor: 1
    label: k
    nilai_awal: 100

terkait:
  - contest: OSK $2017$ no $7$
    soal:  Misalkan $s(n)$ menyatakan faktor prima terbesar dari $n$ dan $t(n)$ menyatakan faktor prima terkecil dari $n$. Tentukan banyaknya bilangan asli $n\in \{1,2,\ldots,100\}$ sehingga $t(n)+1=s(n)$
---

Dapat dilihat bahwa $t(n)=2$ dan $s(n)=3$. Sehingga yang ingin dicari adalah banyaknya pasangan bilangan asli $(a,b)$ di mana $2^a\cdot 3^b\leq k$. Misal $t$ adalah nilai terbesar $b$ yang memenuhi, maka
        
<p><span class="m-d">
    \begin{align*}
        3^b &\leq \Bigl\lfloor \frac{k}{2} \Bigr\rfloor \\
        b &\leq \Bigl\lfloor \log_3 \Bigl\lfloor \frac{k}{2} \Bigr\rfloor \Bigr\rfloor = t
    \end{align*}
</span></p><!--more-->
        
Selanjutnya misal $s_i$ menyatakan nilai terbesar $a$ yang memenuhi $2^a\cdot 3^i \leq k$, maka

<p><span class="m-d">
    \begin{align*}
        2^a &\leq \Bigl\lfloor \frac{k}{3^i} \Bigr\rfloor \\
        a &\leq \Bigl\lfloor \log_2 \Bigl\lfloor \frac{k}{3^i} \Bigr\rfloor \Bigr\rfloor = s_i
    \end{align*}
</span></p> 

Sehingga banyaknya pasangan $(a,b)$ yang memenuhi adalah

<p><span class="m-d">
    $$\sum_{i=1}^t s_i = \sum_{i=1}^t \Bigl\lfloor \log_2 \Bigl\lfloor \frac{k}{3^i} \Bigr\rfloor \Bigr\rfloor$$
</span></p> 
