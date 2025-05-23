
<div>

<span>

<span>

<p>
配点 : $1500$点
</p>

<div>

<section>

### **問題文**

<p>
頂点に $1$から $N$の番号が付いた $N$頂点の木が与えられます．木の $i$番目の辺は頂点 $u_i$と頂点 $v_i$を結んでいます．
</p>

<p>
$K=1, 2, \ldots, N$に対して次の問題を解いてください：
</p>

<blockquote>

<p>
$1, 2, \ldots, K$の番号のついた $K$個の石があり，番号 $i$の石は頂点 $i$に置かれています．
次の操作を繰り返し行うことができます：
</p>

<ul>

<li>
木の辺で接続された $2$頂点 $u, v$であって，$u$に石が置かれていて，$v$には石が置かれていないものを選ぶ．$u$に置かれている石を $v$に移動させる．
</li>

</ul>

<p>
操作後の石の配置としてありうる個数を $998244353$で割った余りを求めてください．ただし，$2$つの石の配置はある番号の石が置かれている頂点が異なる場合に区別します．
</p>

</blockquote>

<p>
$T$個のテストケースが与えられるので，それぞれについて答えを求めてください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq T\leq 10^5$
</li>

<li>
$1\leq N\leq 2\times 10^5$
</li>

<li>
$1\leq u_i, v_i\leq N$
</li>

<li>
与えられるグラフは木である．
</li>

<li>
$1$個の入力に含まれるテストケースについて，それらの $N$の総和は $2\times 10^5$以下である．
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
入力は以下の形式で標準入力から与えられます．
</p>

<div>

$T$$\text{case}_1$$\vdots$$\text{case}_T$
</div>

<p>
各テストケースは以下の形式で与えられます．
</p>

<div>

$N$$u_1$$v_1$$\vdots$$u_{N-1}$$v_{N-1}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力してください．$i$行目には $i$番目のテストケースについて，$K=1, 2, \ldots, N$に対する答えを半角スペース区切りで出力してください．
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

1
4
1 2
1 3
1 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4 12 4 1

</div>

<p>
石の配置を番号 $1, 2, \ldots, K$の石が置かれている頂点の番号の列により表すと，
</p>

<ul>

<li>
$K=1$の場合，ありうる石の配置は $(1), (2), (3), (4)$の $4$個です．
</li>

<li>
$K=2$の場合，ありうる石の配置は $(1,2), (1,3), (1,4), (2,1), (2,3), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,3)$の $12$個です．
</li>

<li>
$K=3$の場合，ありうる石の配置は $(1,2,3), (4,1,3), (4,2,1), (4,2,3)$の $4$個です．
</li>

<li>
$K=4$の場合，ありうる石の配置は $(1,2,3,4)$の $1$個です．
</li>

</ul>

<p>
$K=3$の場合について，次の図も参考にしてください．
</p>

<p>

<img src="https://img.atcoder.jp/agc066/f2dc57ae01aa4f1ccb51c1a2b8fe7d15.png">

</img>

</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4
1
5
1 4
5 2
3 4
2 1
7
1 7
2 7
5 6
4 1
1 6
3 6
10
1 2
2 3
3 4
4 5
5 6
2 7
3 8
4 9
5 10

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1
5 10 10 5 1
7 42 210 840 84 7 1
10 90 720 5040 30240 151200 604800 720 10 1

</div>

<p>
それぞれのテストケースで与えられている木は次の図の通りです：
</p>

<p>

<img src="https://img.atcoder.jp/agc066/744a8d907603331334518cc5d7b62bb9.png">

</img>

</p>

</section>

</div>

</span>

</span>

</div>
