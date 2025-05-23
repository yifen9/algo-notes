
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の正整数列 $X=(X_1,X_2\ldots,X_N)$に対して、$f(X)$を以下のように定めます。
</p>

<ul>

<li>
$N$頂点の木であって、$i\ (1 \leq i \leq N)$番目の頂点の次数が $X_i$であるようなものを良い木と呼ぶ。
良い木が存在するならば、$f(X)$は良い木の直径の最大値。良い木が存在しないならば、$f(X)=0$。
</li>

</ul>

<p>
ただし、木の $2$頂点の間の距離は一方から他方へ移動するときに用いる辺の本数の最小値であり、
木の直径は任意の $2$頂点の間の距離の最大値として定められます。
</p>

<p>
長さ $N$の正整数列 $X$としてあり得るもの全てに対する $f(X)$の総和を $998244353$で割った余りを求めてください。
なお、$f(X)$の総和は有限値になることが証明できます。
</p>

<p>
$T$個のテストケースが与えられるので、それぞれについて答えを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq T \leq 2\times 10^5$
</li>

<li>
$2 \leq N \leq 10^6$
</li>

<li>
入力は全て整数
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
入力は以下の形式で標準入力から与えられる。ここで、$\mathrm{test}_i$は $i$番目のテストケースを意味する。
</p>

<div>

$T$$\mathrm{test}_1$$\mathrm{test}_2$$\vdots$$\mathrm{test}_T$
</div>

<p>
各テストケースは以下の形式で与えられる。
</p>

<div>

$N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力せよ。
</p>

<p>
$i\ (1\leq i \leq T)$行目には、$i$番目のテストケースに対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

10
2
3
5
8
13
21
34
55
89
144

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
6
110
8052
9758476
421903645
377386885
881422708
120024839
351256142

</div>

<p>
$N=3$の場合について、
</p>

<p>
例えば、
</p>

<ul>

<li>
$X=(1,1,1)$のとき、次数が $1,1,1$となる $3$頂点の木は存在しないため、$f(X)=0$です。
</li>

<li>
$X=(2,1,1)$のとき、良い木は以下の図のものに限られます。この木の直径は $2$であるため、$f(X)=2$です。
</li>

</ul>

<p>



<img src="https://img.atcoder.jp/abc290/7b4cd8233d2ee3eb307023bebaebd906.jpg">

</img>





</p>

<p>
$X=(2,1,1),(1,2,1),(1,1,2)$のとき $f(X)=2$であり、それ以外の $X$のとき $f(X)=0$であるため、答えは $6$です。
</p>

</section>

</div>

</span>

</span>

</div>
