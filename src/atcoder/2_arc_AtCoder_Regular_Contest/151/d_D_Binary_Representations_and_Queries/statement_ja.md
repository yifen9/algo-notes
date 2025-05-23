
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
長さ $2^N$の整数列 $A = (A_0, A_1, \ldots, A_{2^N-1})$が与えられます。
</p>

<p>
また、$Q$個のクエリが与えられます。
$i = 1, 2, \ldots, Q$について、$i$番目のクエリでは $2$つの整数 $X_i, Y_i$が与えられ、下記の操作を行います。
</p>

<blockquote>

<p>
$j = 0, 1, 2, \ldots, 2^N-1$の順に下記の手順を行う。
</p>

<ol>

<li>

<p>
まず、$j$の $N$桁の $2$進数表現を $b_{N-1}b_{N-2}\ldots b_0$とおく。また、$b_{N-1}b_{N-2}\ldots b_0$から $b_{X_i}$を反転（ $0$ならば $1$に、$1$ならば $0$に変更）させて得られる $2$進数表現によって表される整数を $j'$とおく。
</p>

</li>

<li>

<p>
そして、$b_{X_i} = Y_i$ならば、$A_{j'}$に $A_j$の値を加算する。
</p>

</li>

</ol>

</blockquote>

<p>
すべてのクエリを入力で与えられる順番に実行した後の $A$の各要素を $998244353$で割ったあまりを出力してください。
</p>

<details>

<summary>
$N$桁の $2$進数表現とは？
</summary>

<p>
非負整数 $X$($0 \leq X < 2^N$) の $N$桁の $2$進数表現とは、$0$と $1$のみからなり下記の条件を満たす唯一の、長さ $N$の列 $b_{N-1}b_{N-2}\ldots b_0$です。

</p>

<ul>

<li>
$\sum_{i = 0}^{N-1} b_i \cdot 2^i = X$
</li>

</ul>

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 18$
</li>

<li>
$1 \leq Q \leq 2 \times 10^5$
</li>

<li>
$0 \leq A_i \lt 998244353$
</li>

<li>
$0 \leq X_i \leq N-1$
</li>

<li>
$Y_i \in \lbrace 0, 1\rbrace$
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

$N$$Q$$A_0$$A_1$$\ldots$$A_{2^N-1}$$X_1$$Y_1$$X_2$$Y_2$$\vdots$$X_Q$$Y_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$i = 0, 1, \ldots, 2^N-1$について、すべてのクエリを実行した後の $A_i$を $998244353$で割ったあまり $A'_i$を、下記の形式にしたがって空白区切りで出力せよ。
</p>

<div>

$A'_0$$A'_1$$\ldots$$A'_{2^N-1}$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 2
0 1 2 3
1 1
0 0

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2 6 2 5

</div>

<p>
$1$番目のクエリに対する操作は次の通りです。
</p>

<ul>

<li>
$j = 0$のとき、$b_1b_0 = 00, j' = 2$です。$b_1 \neq 1$であるので、加算の手順は行いません。
</li>

<li>
$j = 1$のとき、$b_1b_0 = 01, j' = 3$です。$b_1 \neq 1$であるので、加算の手順は行いません。
</li>

<li>
$j = 2$のとき、$b_1b_0 = 10, j' = 0$です。$b_1 = 1$であるので、$A_0$に $A_2$の値を加算します。その結果、$A = (2, 1, 2, 3)$となります。
</li>

<li>
$j = 3$のとき、$b_1b_0 = 11, j' = 1$です。$b_1 = 1$であるので、$A_1$に $A_3$の値を加算します。その結果、$A = (2, 4, 2, 3)$となります。
</li>

</ul>

<p>
$2$番目のクエリに対する操作は次の通りです。
</p>

<ul>

<li>
$j = 0$のとき、$b_1b_0 = 00, j' = 1$です。$b_0 = 0$であるので、$A_1$に $A_0$の値を加算します。その結果、$A = (2, 6, 2, 3)$となります。
</li>

<li>
$j = 1$のとき、$b_1b_0 = 01, j' = 0$です。$b_0 \neq 0$であるので、加算の手順は行いません。
</li>

<li>
$j = 2$のとき、$b_1b_0 = 10, j' = 3$です。$b_0 = 0$であるので、$A_3$に $A_2$の値を加算します。その結果、$A = (2, 6, 2, 5)$となります。
</li>

<li>
$j = 3$のとき、$b_1b_0 = 11, j' = 2$です。$b_0 \neq 0$であるので、加算の手順は行いません。
</li>

</ul>

<p>
以上より、すべてのクエリを実行した後の $A$は $(2, 6, 2, 5)$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 10
606248357 338306877 919152167 981537317 808873985 845549408 680941783 921035119
1 1
0 0
0 0
0 0
0 1
0 1
0 1
2 0
2 0
2 0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

246895115 904824001 157201385 744260759 973709546 964549010 61683812 205420980

</div>

</section>

</div>

</span>

</span>

</div>
