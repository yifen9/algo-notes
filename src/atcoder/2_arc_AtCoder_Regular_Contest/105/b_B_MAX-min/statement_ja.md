
<div>

<span>

<span>

<p>
配点 : $300$点
</p>

<div>

<section>

### **問題文**

<p>
すぬけ君は $1$から $N$の番号がついた $N$枚のカードを持っています。
それぞれのカードには整数が書かれており、カード $i$には $a_i$が書かれています。
</p>

<p>
すぬけ君は以下の手続きを行います。
</p>

<ol>

<li>
すぬけ君が持っているカードに書かれた数の最大値を $X$、最小値を $x$とする。
</li>

<li>
$X = x$なら手続きを終了する。そうでなければ $X$が書かれたカードを全て $X-x$が書かれたカードに変え、$1$へ戻る。
</li>

</ol>

<p>
この問題の制約下で、いずれ手続きが終了することが証明できます。手続き終了後のすぬけ君が持っているカードに書かれた唯一の数を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
与えられる入力は全て整数
</li>

<li>
$1 \leq N \leq 10^{5}$
</li>

<li>
$1 \leq a_i \leq 10^9$
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

$N$$a_1$$a_2$$\cdots$$a_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
手続き終了後のすぬけ君が持っているカードに書かれた唯一の数を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3
2 6 6

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<ul>

<li>
手続き開始時点では、すぬけ君が持っているカードに書かれた数は $(2,6,6)$です。
<ul>

<li>
$x=2,X=6$なので、$6$と書かれたカードを全て $4$が書かれたカードに書き換えます。
</li>

</ul>

</li>

<li>
すぬけ君が持っているカードに書かれた数は $(2,4,4)$になっています。
<ul>

<li>
$x=2,X=4$なので、$4$と書かれたカードを全て $2$が書かれたカードに書き換えます。
</li>

</ul>

</li>

<li>
すぬけ君が持っているカードに書かれた数は $(2,2,2)$になっています。
<ul>

<li>
$x=2,X=2$なので手続きを終了します。
</li>

</ul>

</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

15
546 3192 1932 630 2100 4116 3906 3234 1302 1806 3528 3780 252 1008 588

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

42

</div>

</section>

</div>

</span>

</span>

</div>
