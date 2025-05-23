
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
整数 $L$が与えられます。以下の条件を満たす有向グラフをひとつ構成してください。構成したグラフに多重辺が含まれていても構いません。
なお、条件を満たす有向グラフは必ず存在することが証明できます。
</p>

<ul>

<li>
頂点数 $N$は $20$以下で、すべての頂点には $1$以上 $N$以下の相異なる番号が付けられている
</li>

<li>
辺数 $M$は $60$以下で、すべての辺には $0$以上 $10^6$以下の整数の長さが付けられている
</li>

<li>
全ての辺は番号の小さい方の頂点から大きい方の頂点に向かって向きづけられている。すなわち、$1,2,...,N$はこのグラフの頂点の番号を適当なトポロジカル順序で並べてできる列である
</li>

<li>
頂点 $1$から頂点 $N$への異なるパスはちょうど $L$個あり、それらの長さは $0$から $L-1$までの相異なる整数である
</li>

</ul>

<p>
ただし、パスの長さとは、そのパス上の辺の長さの和を表します。また、$2$つのパスが異なるとは、パス上の辺の集合が異なることを指します。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq L \leq 10^6$
</li>

<li>
$L$は整数である
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

$L$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$1$行目には、構成したグラフの頂点数 $N$と辺数 $M$を出力せよ。
続く $M$行のうちの $i$行目には、$3$つの整数 $u_i,v_i,w_i$を出力せよ。これらはそれぞれ、$i$本目の辺の始点、$i$本目の辺の終点、$i$本目の辺の長さを表す。
解が複数考えられる場合、どれを出力してもよい。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

8 10
1 2 0
2 3 0
3 4 0
1 5 0
2 6 0
3 7 0
4 8 0
5 6 1
6 7 1
7 8 1

</div>

<p>
出力例のグラフには 頂点 $1$から $N=8$への $4$本のパスがあり、
</p>

<ul>

<li>
パス $1$→ $2$→ $3$→ $4$→ $8$の長さは $0$
</li>

<li>
パス $1$→ $2$→ $3$→ $7$→ $8$の長さは $1$
</li>

<li>
パス $1$→ $2$→ $6$→ $7$→ $8$の長さは $2$
</li>

<li>
パス $1$→ $5$→ $6$→ $7$→ $8$の長さは $3$
</li>

</ul>

<p>
となります。これ以外にも、正答として認められる出力があります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5 7
1 2 0
2 3 1
3 4 0
4 5 0
2 4 0
1 3 3
3 5 1

</div>

</section>

</div>

</span>

</span>

</div>
