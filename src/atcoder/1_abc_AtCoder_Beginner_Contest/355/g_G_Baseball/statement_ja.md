
<div>

<span>

<span>

<p>
配点 : $650$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の数列 $P=(P_1,P_2,\dots,P_N)$が与えられます。高橋君と青木君が、数列 $P$を使ってゲームを行います。
</p>

<p>
まず、高橋君が、 $1,2,\dots,N$から $K$個の相異なる整数 $x_1,x_2,\dots,x_K$を選びます。
</p>

<p>
次に、青木君が、 $1,2,\dots,N$から $1$つの整数 $y$を $P_y$に比例する確率で選びます。すなわち、整数 $y$が選ばれる確率は $\dfrac{P_y}{\sum_{y'=1}^N P_{y'}}$です。そして、青木君が $\displaystyle \min_{i=1,2,\dots,K} |x_i-y|$のスコアを得ます。
</p>

<p>
高橋君は、青木君が得るスコアの期待値を
<strong>
最小化
</strong>
したいです。高橋君が適切に $x_1,x_2,\dots,x_K$を選んだときに、青木君が得るスコアの期待値の最小値を $\sum_{y'=1}^N P_{y'}$倍した値を求めてください。なお、出力すべき値は整数になることが証明できます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 5 \times 10^4$
</li>

<li>
$1 \leq K \leq N$
</li>

<li>
$0 \leq P_i \leq 10^5$
</li>

<li>
$1 \leq \sum_{y'=1}^N P_{y'} \leq 10^5$
</li>

<li>
入力はすべて整数
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

$N$$K$$P_1$$P_2$$\dots$$P_N$
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

5 2
1 1 1 1 1

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
青木君が $1,2,\dots,N$を選ぶ確率はすべて等しく $\frac{1}{5}$です。
</p>

<p>
高橋君が $x_1=2,x_2=4$と選んだとすると、青木君が得るスコアの期待値は $1 \times \frac{1}{5} + 0 \times \frac{1}{5} + 1 \times \frac{1}{5} + 0 \times \frac{1}{5} + 1 \times \frac{1}{5} = \frac{3}{5}$です。
</p>

<p>
高橋君が $x_1=2,x_2=3$と選んだとすると、青木君が得るスコアの期待値は $1 \times \frac{1}{5} + 0 \times \frac{1}{5} + 0 \times \frac{1}{5} + 1 \times \frac{1}{5} + 2 \times \frac{1}{5} = \frac{4}{5}$です。
</p>

<p>
高橋君が他の選び方をしても、青木君が得るスコアの期待値は $\frac{3}{5}$より小さくなりません。よって最小値は $\frac{3}{5}$であり、これを $5$倍した $3$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 1
0 0 1 0 0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1 1
100

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

20 7
4262 9522 2426 3823 7364 964 2743 2423 1955 5274 3684 847 363 35 278 3220 203 2904 6304 1928

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

22809

</div>

</section>

</div>

</span>

</span>

</div>
