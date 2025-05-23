
<div>

<span>

<span>

<p>
配点 : $400$点
</p>

<div>

<section>

### **問題文**

<p>
頂点に $1$から $N$の、辺に $1$から $M$の番号がついた $N$頂点 $M$辺の単純連結無向グラフが与えられます。辺 $i$は頂点 $u_i$と頂点 $v_i$を結んでおり、ラベル $w_i$が付けられています。
</p>

<p>
頂点 $1$から頂点 $N$への単純パス（同じ頂点を $2$度以上通らないパス）のうち、パスに含まれる辺につけられたラベルの総 XOR としてあり得る最小値を求めてください。
</p>

<details>

<summary>
XOR とは
</summary>
非負整数 $A,B$の XOR $A \oplus B$は、以下のように定義されます。


<ul>

<li>
$A \oplus B$を二進表記した際の $2^k \, (k \geq 0)$の位の数は、$A,B$を二進表記した際の $2^k$の位の数のうち一方のみが $1$であれば $1$、そうでなければ $0$である。
</li>

</ul>
例えば、 $3 \oplus 5 = 6$となります (二進表記すると: $011 \oplus 101=110$)。

一般に $k$個の整数 $p_1, \dots, p_k$の XOR は $(\cdots ((p_1 \oplus p_2) \oplus p_3) \oplus \cdots \oplus p_k)$と定義され、これは $p_1, \dots, p_k$の順番によらないことが証明できます。


</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\leq N\leq 10$
</li>

<li>
$N-1\leq M\leq \frac{N(N-1)}{2}$
</li>

<li>
$1\leq u_i\lt v_i\leq N$
</li>

<li>
$0\leq w_i\lt 2^{60}$
</li>

<li>
入力で与えられるグラフは単純連結無向グラフ
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

$N$$M$$u_1$$v_1$$w_1$$u_2$$v_2$$w_2$$\vdots$$u_M$$v_M$$w_M$
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

4 4
1 2 3
2 4 5
1 3 4
3 4 7

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
頂点 $1$から頂点 $4$への単純パスは以下の $2$つ存在します。
</p>

<ul>

<li>
頂点 $1$$\to$頂点 $2$$\to$頂点 $4$
</li>

<li>
頂点 $1$$\to$頂点 $3$$\to$頂点 $4$
</li>

</ul>

<p>
$1$つ目のパスに含まれる辺につけられたラベルの総 XOR は $6$、 $2$つ目のパスに含まれる辺につけられたラベルの総 XOR は $3$であるため、答えは $3$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 3
1 2 1
2 3 2
3 4 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

7

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

7 10
1 2 726259430069220777
1 4 988687862609183408
1 5 298079271598409137
1 6 920499328385871537
1 7 763940148194103497
2 4 382710956291350101
3 4 770341659133285654
3 5 422036395078103425
3 6 472678770470637382
5 7 938201660808593198

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

186751192333709144

</div>

</section>

</div>

</span>

</span>

</div>
