
<div>

<span>

<span>

<p>
配点 : $600$点
</p>

<div>

<section>

### **問題文**

<p>
$N$頂点の有向グラフ $G_S$があり、頂点には $1$から $N$までの番号が付けられています。
$G_S$には $N-1$本の辺があり、$i$本目 $(1\leq i \leq N-1)$の辺は頂点 $p_i\ (1\leq p_i \leq i)$から頂点 $i+1$に伸びています。
</p>

<p>
$N$頂点の有向グラフ $G$があり、頂点には $1$から $N$までの番号が付けられています。
最初、$G$は $G_S$と一致しています。 
$G$に関するクエリが $Q$個与えられるので、与えられた順番に処理してください。クエリは次の $2$種類のいずれかです。
</p>

<ul>

<li>
`1 u v`: $G$に頂点 $u$から頂点 $v$に伸びる辺を追加する。
このとき、以下の条件が満たされることが保証される。
<ul>

<li>
$u \neq v$
</li>

<li>
$G_S$上で頂点 $v$からいくつかの辺を辿ることで頂点 $u$に到達可能である
</li>

</ul>

</li>

<li>
`2 x`: $G$上で頂点 $x$からいくつかの辺を辿ることで到達可能な頂点 (頂点 $x$を含む) のうち、最も番号が小さい頂点の番号を出力する。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\leq N \leq 2\times 10^5$
</li>

<li>
$1\leq Q \leq 2\times 10^5$
</li>

<li>
$1\leq p_i\leq i$
</li>

<li>
$1$番目の形式のクエリについて、
<ul>

<li>
$1\leq u,v \leq N$
</li>

<li>
$u \neq v$
</li>

<li>
$G_S$上で頂点 $v$からいくつかの辺を辿ることで頂点 $u$に到達可能である
</li>

</ul>

</li>

<li>
$2$番目の形式のクエリについて、$1\leq x \leq N$
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
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$p_1$$p_2$$\dots$$p_{N-1}$$Q$$\mathrm{query}_1$$\mathrm{query}_2$$\vdots$$\mathrm{query}_Q$
</div>

<p>
ただし、$\mathrm{query}_i$は $i$個目のクエリを表しており、次のいずれかの形式で与えられる。
</p>

<div>

$1$$u$$v$
</div>

<div>

$2$$x$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$2$番目の形式のクエリの回数を $q$回として、$q$行出力せよ。
$j\ (1\leq j \leq q)$行目には、$2$番目の形式のクエリのうち $j$個目のものに対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5
1 2 3 3
5
2 4
1 4 2
2 4
1 5 1
2 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4
2
1

</div>

<ul>

<li>
$1$個目のクエリの時点で、$G$上で頂点 $4$からいくつかの辺を辿ることで到達可能な頂点は $4$のみです。
</li>

<li>
$3$個目のクエリの時点で、$G$上で頂点 $4$からいくつかの辺を辿ることで到達可能な頂点は $2,3,4, 5$です。
</li>

<li>
$5$個目のクエリの時点で、$G$上で頂点 $4$からいくつかの辺を辿ることで到達可能な頂点は $1,2,3,4,5$です。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7
1 1 2 2 3 3
10
2 5
1 5 2
2 5
1 2 1
1 7 1
1 6 3
2 5
2 6
2 1
1 7 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5
2
1
1
1

</div>

</section>

</div>

</span>

</span>

</div>
