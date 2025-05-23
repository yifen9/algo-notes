
<div>

<span>

<span>

<p>
配点 : $625$点
</p>

<div>

<section>

### **問題文**

<p>
箱の中に $N$枚のカードが入っています。各カードには $1$以上 $M$以下の整数が $1$つ書かれており、各 $i=1,\ldots,M$について、$i$が書かれたカードは $C_i$枚あります。
</p>

<p>
あなたは何も書かれていないノートを持った状態から、次の操作を繰り返します。
</p>

<ul>

<li>
箱の中からランダムにカードを $1$枚取り出す。取り出したカードに書かれている整数をノートに書き、カードを箱の中に戻す。
</li>

</ul>

<p>
ノートに $1$以上 $M$以下の整数が全て $1$個以上書かれている状態になるまでの操作回数の期待値を $\bmod 998244353$で求めてください。
</p>

<details>

<summary>
期待値 ${}\bmod{998244353}$の定義
</summary>
この問題で求める期待値は必ず有理数になることが証明できます。 また、この問題の制約下では、求める期待値を既約分数 $\frac yx$で表したときに $x$が $998244353$で割り切れないことが保証されます。

このとき、$y\equiv xz\pmod{998244353}$を満たす $0\leq z\lt998244353$がただ一つ存在するので、$z$を出力してください。


</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq M \leq N \leq 2\times 10^5$
</li>

<li>
$1 \leq C_i$
</li>

<li>
$\sum_{i=1}^{M}C_i=N$
</li>

<li>
入力は全て整数である
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
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$M$$C_1$$\ldots$$C_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ。  
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 2
1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3

</div>

<p>
一連の操作は、例えば次のように進行します。
</p>

<ul>

<li>
箱から取り出したカードに $1$が書かれている。ノートには $1$が $1$個が書かれている状態になる。
</li>

<li>
箱から取り出したカードに $1$が書かれている。ノートには $1$が $2$個が書かれている状態になる。
</li>

<li>
箱から取り出したカードに $2$が書かれている。ノートには $1$が $2$個、$2$が $1$個書かれている状態になる。
</li>

</ul>

<p>
求める期待値は $2\times\frac{1}{2}+3\times\frac{1}{4}+4\times\frac{1}{8}+\ldots=3$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 2
4 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

748683270

</div>

<p>
求める期待値は $\frac{21}{4}$であり、$\bmod 998244353$で $748683270$となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

50 50
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

244742906

</div>

<p>
求める期待値は $\frac{13943237577224054960759}{61980890084919934128}$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

74070 15
1 2 3 11 22 33 111 222 333 1111 2222 3333 11111 22222 33333

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

918012973

</div>

</section>

</div>

</span>

</span>

</div>
