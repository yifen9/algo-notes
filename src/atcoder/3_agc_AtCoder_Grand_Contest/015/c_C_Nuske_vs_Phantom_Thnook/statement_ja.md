
<div>

<span>

<span>

<p>
配点 : $700$点
</p>

<div>

<section>

### **問題文**

<p>
ぬすけ君は、$N × M$のグリッドを持っています。行には上から順に $1$から $N$、列には左から順に $1$から $M$の番号がついています。
グリッドの各マスは白か青かに塗られており、$S_{i,j}$が $1$のとき $i$行 $j$列のマスは青マス、$0$のとき白マスです。
青く塗られた任意の二つのマス $a,b$について、$a$からはじめて、現在いるマスから辺を共有する青いマスに進むことを繰り返して
$b$に至るような経路のうち、同じマスを $2$度以上通らないようなものは、高々 $1$通りです。
</p>

<p>
ぬすけ君の永遠のライバルである怪盗スヌークは、ぬすけ君に $Q$個の質問をしました。$i$個目の質問は、$4$つの整数 $x_{i,1},y_{i,1},x_{i,2},y_{i,2}$からなり、
グリッドの $x_{i,1}$行目から $x_{i,2}$行目まで、$y_{i,1}$列目から $y_{i,2}$列目までの範囲の長方形領域を切り出したときに、
その範囲の青マスからなる連結成分がいくつあるかを答える質問です。
</p>

<p>
怪盗スヌークの質問すべてに答えてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≦ N,M ≦ 2000$
</li>

<li>
$1 ≦ Q ≦ 200000$
</li>

<li>
$S_{i,j}$は $0$または $1$である
</li>

<li>
$S_{i,j}$は問題文中の条件を満たす
</li>

<li>
$1 ≦ x_{i,1} ≦ x_{i,2} ≦ N(1 ≦ i ≦ Q)$
</li>

<li>
$1 ≦ y_{i,1} ≦ y_{i,2} ≦ M(1 ≦ i ≦ Q)$
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

$N$$M$$Q$$S_{1,1}$..$S_{1,M}$:
$S_{N,1}$..$S_{N,M}$$x_{1,1}$$y_{i,1}$$x_{i,2}$$y_{i,2}$:
$x_{Q,1}$$y_{Q,1}$$x_{Q,2}$$y_{Q,2}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
質問ごとに、その範囲の青マスからなる連結成分がいくつあるかを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 4 4
1101
0110
1101
1 1 3 4
1 1 3 1
2 2 3 4
1 2 2 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3
2
2
2

</div>

<p>

<img src="https://atcoder.jp/img/agc015/7aa4a2252f50a19fc18e0cec01368a2a.png">

</img>

</p>

<p>
$1$つ目の質問では、グリッド全体が指定されます。青マスからなる連結成分は $3$つあるので、$3$を出力します。
</p>

<p>
$2$つめの質問では、赤枠の範囲が指定されます。青マスからなる連結成分は $2$つあるので、$2$を出力します。
もとのグリッドで同じ成分に属するマスが、異なる成分に属するかもしれないことに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 5 6
11010
01110
10101
11101
01010
1 1 5 5
1 2 4 5
2 3 3 4
3 3 3 3
3 1 3 5
1 1 3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3
2
1
1
3
2

</div>

</section>

</div>

</span>

</span>

</div>
