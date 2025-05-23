
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
頂点に $1$から $N$の番号がついた $N$頂点の根付き木があります。頂点 $1$はこの木の根であり、頂点 $i\ (2\leq i)$の親頂点は頂点 $p_i$です。
</p>

<p>
各頂点は白、黒の色を持っています。はじめすべて頂点の色は白です。
</p>

<p>
根付き木において、頂点 $1,\ i$を結ぶ唯一の単純パス上の頂点 (頂点 $1,\ i$含む) の色がすべて黒であるとき、頂点 $i$を「よい頂点」といいます。また、「よい頂点」ではない頂点を「わるい頂点」といいます。
</p>

<p>
すべての頂点の色が黒になるまで「『わるい頂点』から一様ランダムに頂点を $1$つ選び、その頂点を黒色で上塗りする」という操作を行います。
</p>

<p>
操作を行う回数の期待値を $\bmod\ 998244353$で求めてください。
</p>

<details>

<summary>
期待値 $\text{mod }{998244353}$の定義
</summary>

<p>
求める期待値は必ず有理数になることが証明できます。 また、この問題の制約のもとでは、その値を既約分数 $\frac{P}{Q}$で表した時、$Q \not \equiv 0 \pmod{998244353}$となることも証明できます。 よって、$R \times Q \equiv P \pmod{998244353}, 0 \leq R < 998244353$を満たす整数 $R$が一意に定まります。 この $R$を答えてください。


</p>

</details>

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
$1 \leq p_i < i$
</li>

<li>
入力される値はすべて整数
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
入力は以下の形式で標準入力から与えられます。
</p>

<div>

$N$$p_2$$p_3$$\dots$$p_{N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力してください。
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
1 1 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

831870300

</div>

<p>
例えば $1,\ 2,\ 3$回目の操作で順に頂点 $1,\ 2,\ 4$が選ばれた場合を考えます。このとき、頂点 $1,\ 2$は「よい頂点」ですが、頂点 $4$は祖先である頂点 $3$が白色であるため「わるい頂点」です。よって $4$回目の操作で頂点を選ぶ際は頂点 $3,\ 4$の中から一様ランダムに選びます。
</p>

<p>
操作を行う回数の期待値は $\displaystyle \frac{35}{6}$になります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

15
1 2 1 1 4 5 3 3 5 10 3 6 3 13

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

515759610

</div>

</section>

</div>

</span>

</span>

</div>
