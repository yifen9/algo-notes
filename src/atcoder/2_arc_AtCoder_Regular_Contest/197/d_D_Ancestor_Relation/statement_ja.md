
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
$N\times N$行列 $A = (A_{i,j})$($1\leq i,j\leq N$) が与えられます．$A$の成分は $0$または $1$です．
</p>

<p>
頂点に $1$から $N$までの番号が付けられた $N$頂点の木 $G$であって，次の条件を満たすものの個数を $998244353$で割った余りを求めてください．
</p>

<ul>

<li>
$A_{i,j}=1$であることと，以下の $2$条件のうち少なくともひとつが成り立つことは同値である：
<ul>

<li>
頂点 $1$を根としたとき頂点 $j$は頂点 $i$の祖先である．つまり頂点 $j$は，頂点 $1, i$を結ぶ $G$上のパス上にある．
</li>

<li>
頂点 $1$を根としたとき頂点 $i$は頂点 $j$の祖先である．つまり頂点 $i$は，頂点 $1, j$を結ぶ $G$上のパス上にある．
</li>

</ul>

</li>

</ul>

<p>
ただし，パスの端点もパス上にあると見なします．$G$は木であるとき，$2$頂点を結ぶ $G$上のパスは一意に存在することにも注意してください．
</p>

<p>
$T$個のテストケースが与えられるので，それぞれについて解いてください．
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
$2\leq N\leq 400$
</li>

<li>
$A_{i,j}\in \lbrace 0,1\rbrace$$(1\leq i,j\leq N)$
</li>

<li>
$A_{i,i}=1$$(1\leq i\leq N)$
</li>

<li>
$A_{i,j}=A_{j,i}$$(1\leq i,j\leq N)$
</li>

<li>
すべてのテストケースにわたる $N^2$の総和は $400^2$以下．
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
各ケースは以下の形式で与えられます．
</p>

<div>

$N$$A_{1,1}$$\cdots$$A_{1,N}$$\vdots$$A_{N,1}$$\cdots$$A_{N,N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力してください．$i$行目には $i$番目のテストケースについて，条件を満たす $N$頂点の木 $G$の個数を $998244353$で割った余りを出力してください．
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
3
1 1 1
1 1 0
1 0 1
3
1 1 1
1 1 1
1 1 1
3
1 0 0
0 1 0
0 0 1
3
1 0 1
0 1 1
1 1 1
7
1 1 1 1 1 1 1
1 1 0 1 0 1 1
1 0 1 1 1 1 0
1 1 1 1 1 1 1
1 0 1 1 1 1 0
1 1 1 1 1 1 1
1 1 0 1 0 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
2
0
0
8

</div>

<p>
$1$番目のテストケースでは次の $1$つの $G$が条件を満たします．

<img src="https://img.atcoder.jp/arc197/047f79d01c371fe5f47850c631892671.png">

</img>

</p>

<p>
$2$番目のテストケースでは次の $2$つの $G$が条件を満たします．

<img src="https://img.atcoder.jp/arc197/ff998867883faff858791a57f8497f6d.png">

</img>

</p>

</section>

</div>

</span>

</span>

</div>
