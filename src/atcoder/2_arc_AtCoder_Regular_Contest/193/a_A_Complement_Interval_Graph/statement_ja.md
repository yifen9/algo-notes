
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
整数 $l, r$に対し、$l$以上 $r$以下の整数全体からなる集合を $[l, r]$で表します。
すなわち、$[l, r] = \lbrace l, l+1, l+2, \ldots, r-1, r\rbrace$です。
</p>

<p>
$N$組の整数のペア $(L_1, R_1), (L_2, R_2), \ldots, (L_N, R_N)$が与えられます。
これに対して、下記で定義される無向グラフ $G$を考えます。
</p>

<ul>

<li>
$1, 2, \ldots, N$と番号付けられた $N$個の頂点を持つ。
</li>

<li>
すべての $i, j \in [1, N]$について次が成り立つ：$[L_i, R_i]$と $[L_j, R_j]$の共通部分が空であるとき、かつ、そのときに限り、頂点 $i$と頂点 $j$の間に無向辺が張られている。
</li>

</ul>

<p>
また、$i = 1, 2, \ldots, N$について、頂点 $i$の重みを $W_i$で定めます。
</p>

<p>
$G$に関する $Q$個のクエリが与えられるので、それらを与えられる順に処理してください。
$i = 1, 2, \ldots, Q$について、$i$番目のクエリは下記の通りです。
</p>

<blockquote>

<p>
$s_i \neq t_i$を満たす $1$以上 $N$以下の整数 $s_i, t_i$が与えられる。
$G$において、頂点 $s_i$から頂点 $t_i$へのパスが存在するかを判定せよ。
存在する場合は、そのようなパスの
<strong>
重み
</strong>
の最小値を出力せよ。
</p>

</blockquote>

<p>
ここで、頂点 $s$から頂点 $t$へのパスの重みは、パス上の頂点（両端点である頂点 $s$と頂点 $t$を含む）の重みの総和で定義されます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq Q \leq 2 \times 10^5$
</li>

<li>
$1 \leq W_i \leq 10^9$
</li>

<li>
$1 \leq L_i \leq R_i \leq 2N$
</li>

<li>
$1 \leq s_i, t_i \leq N$
</li>

<li>
$s_i \neq t_i$
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

$N$$W_1$$W_2$$\cdots$$W_N$$L_1$$R_1$$L_2$$R_2$$\vdots$$L_N$$R_N$$Q$$s_1$$t_1$$s_2$$t_2$$\vdots$$s_Q$$t_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Q$行出力せよ。
$i = 1, 2, \ldots, Q$について、$i$行目には、
頂点 $s_i$から頂点 $t_i$へのパスが存在する場合はそのようなパスの重みの最小値を出力し、存在しない場合は `-1`を出力せよ。
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
5 1 4 2 2
2 4
1 2
7 8
4 5
2 7
3
1 4
4 3
5 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

11
6
-1

</div>

<p>
$G$は $\lbrace 1, 3\rbrace, \lbrace 2, 3\rbrace, \lbrace 2, 4\rbrace, \lbrace 3, 4\rbrace$の $4$本の無向辺を持つグラフです。
</p>

<ul>

<li>
$1$番目のクエリに関して、頂点 $1$から頂点 $4$への $1 \to 3 \to 4$というパスが存在します。そのパスの重みは $W_1 + W_3 + W_4 = 5 + 4 + 2 = 11$であり、これが考えられる最小値です。
</li>

<li>
$2$番目のクエリに関して、頂点 $4$から頂点 $3$への $4 \to 3$というパスが存在します。そのパスの重みは $W_4 + W_3 = 2 + 4 = 6$であり、これが考えられる最小値です。
</li>

<li>
$3$番目のクエリに関して、頂点 $5$から頂点 $2$へのパスは存在しません。したがって、`-1`を出力します。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

8
44 75 49 4 78 79 12 32
5 13
10 16
6 8
6 15
12 15
5 7
1 15
1 2
5
5 6
3 2
7 5
4 5
5 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

157
124
-1
114
114

</div>

</section>

</div>

</span>

</span>

</div>
