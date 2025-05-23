
<div>

<span>

<span>

<p>
配点 : $1000$点
</p>

<div>

<section>

### **問題文**

<p>
正の整数 $N, M, K$と、長さ $M$の非負整数列 $A=(A_{0}, A_{1},\dots A_{M-1})$が与えられます。ここで、$2^{N - 1}\leq K < 2^{N}$が成り立ちます。
</p>

<p>
入力において、$K$は $2$進法表記で $N$桁の数として与えられ、その他の整数は $10$進法表記で与えられます。
</p>

<p>
また、$A$は入力では直接与えられず、$i=0,1,\dots ,M - 1$について、$A_{i}=\sum_{j=0}^{L_{i}-1} 2^{X_{i,j}}$となるような、長さ $L_{i}$の整数列 $X_{i}=(X_{i,0},X_{i,1},\dots ,X_{i,L_{i}-1})$が与えられます。ここで、$0\leq X_{i,0}<X_{i,1}<\cdots <X_{i,L_{i}-1}<N$が成り立ちます。
</p>

<p>
以下のように定義される、長さ $MK$の数列 $B=(B_{0},B_{1},\dots ,B_{MK-1})$の転倒数を $998244353$で割ったあまりを求めてください。
</p>

<ul>

<li>
任意の $0$以上 $K$未満の整数 $a$と 任意の $0$以上 $M$未満の整数 $b$に対して以下が成り立つ。
<ul>

<li>
$B_{aM+b}$は $\operatorname{popcount}(a\operatorname{AND}A_{b})$を $2$で割ったあまりに等しい。
</li>

</ul>

</li>

</ul>

<details>

<summary>
$\operatorname{AND}$とは？
</summary>

<p>
整数 $A, B$のビット単位 $\operatorname{AND}$、$A\ \operatorname{AND}\ B$は以下のように定義されます。
</p>

<ul>

<li>
$A\ \operatorname{AND}\ B$を二進表記した際の $2^k$($k \geq 0$) の位の数は、$A, B$を二進表記した際の $2^k$の位の数のうち両方が $1$であれば $1$、そうでなければ $0$である。
</li>

</ul>

<p>
例えば、$3\ \operatorname{AND}\ 5 = 1$となります (二進表記すると: $011\ \operatorname{AND}\ 101 = 001$)。 
一般に $k$個の整数 $p_1, p_2, p_3, \dots, p_k$のビット単位 $\operatorname{AND}$は $(\dots ((p_1\ \operatorname{AND}\ p_2)\ \operatorname{AND}\ p_3)\ \operatorname{AND}\ \dots\ \operatorname{AND}\ p_k)$と定義され、これは $p_1, p_2, p_3, \dots p_k$の順番によらないことが証明できます。  
</p>

</details>

<details>

<summary>
$\operatorname{popcount}$とは？
</summary>

<p>
非負整数 $x$について $\operatorname{popcount}(x)$とは、$x$を $2$進法で表記したときの $1$の個数です。 より厳密には、非負整数 $x$について $\displaystyle x=\sum _ {i=0} ^ \infty b _ i2 ^ i\ (b _ i\in\lbrace0,1\rbrace)$が成り立っているとき $\displaystyle\operatorname{popcount}(x)=\sum _ {i=0} ^ \infty b _ i$です。
例えば、$13$を $2$進法で表記すると `1101`なので、 $\operatorname{popcount}(13)=3$となります。
</p>

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq 2\times 10 ^ {5}$
</li>

<li>
$1\leq M\leq 2\times 10 ^ {5}$
</li>

<li>
$2^{N-1}\leq K< 2^{N}$
</li>

<li>
$0\leq L_{i}\leq N$
</li>

<li>
$\sum L_{i}\leq 2\times 10 ^ {5}$
</li>

<li>
$0\leq X_{i,0}<X_{i,1}<\cdots<X_{i,L_{i}-1}<N$
</li>

<li>
入力は全て整数
</li>

<li>
$K$は $2$進法表記で与えられる。
</li>

<li>
$K$を除く数は $10$進法表記で与えられる。
</li>

</ul>

</section>

</div>

---

<div>

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられます。
</p>

<div>

$N$$M$$K$$L_{0}$$X_{0,0}$$X_{0,1}$$\cdots$$X_{0,L_{0}-1}$$L_{1}$$X_{1,0}$$X_{1,1}$$\cdots$$X_{1,L_{1}-1}$$\vdots$$L_{M-1}$$X_{M-1,0}$$X_{M-1,1}$$\cdots$$X_{M-1,L_{M-1}-1}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力してください。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 4
11
1 0
2 0 1
0
1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

9

</div>

<p>
$A=(1, 3, 0, 2), B = (0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1)$となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 3
101
2 1 2
2 0 1
1 0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

23

</div>

<p>
$A = (6, 3, 1), B = (0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0)$となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

16 7
1101010000100110
11 0 1 2 3 7 10 11 12 13 14 15
7 4 6 8 10 11 12 13
6 0 1 6 8 10 12
8 0 3 5 6 10 11 12 13
10 0 1 2 3 4 5 6 8 12 13
9 3 4 5 6 8 9 11 14 15
8 0 4 7 9 10 11 13 14

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

97754354

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

92 4
10101100101111111111011101111111101011001011111110011110111111101111111110100111100010111011
23 1 2 5 13 14 20 28 32 34 39 52 56 59 60 62 64 67 69 71 78 84 87 91
20 15 17 22 28 36 40 43 47 52 53 57 67 72 77 78 81 87 89 90 91
23 7 8 9 10 11 13 16 19 22 23 30 33 42 49 51 52 58 64 71 73 76 79 83
22 1 13 19 26 27 28 29 35 39 40 41 46 55 60 62 64 67 74 79 82 89 90

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

291412708

</div>

<p>
$998244353$で割ったあまりを求めてください。
</p>

</section>

</div>

</span>

</span>

</div>
