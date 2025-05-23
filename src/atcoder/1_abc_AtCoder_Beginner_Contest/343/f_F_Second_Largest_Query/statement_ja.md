
<div>

<span>

<span>

<p>
配点 : $525$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の数列 $A = (A_1, A_2, \ldots, A_N)$が与えられます。
</p>

<p>
$Q$個のクエリが与えられるので、与えられた順に処理してください。各クエリは以下の $2$種類のいずれかです。
</p>

<ul>

<li>
タイプ $1$: `1 p x`の形式で与えられる。 $A_p$の値を $x$に変更する。
</li>

<li>
タイプ $2$: `2 l r`の形式で与えられる。 $(A_l, A_{l+1}, \ldots, A_r)$において $2$番目に大きい値の
<strong>
個数
</strong>
を出力する。より厳密には、$l \leq i \leq r$を満たす整数 $i$であって、$A_l, A_{l+1}, \ldots, A_r$のうち $A_i$より大きい値がちょうど $1$種類であるものの個数を出力する。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N, Q \leq 2 \times 10^5$
</li>

<li>
$1 \leq A_i \leq 10^9$
</li>

<li>
タイプ $1$のクエリにおいて、$1 \leq p \leq N$
</li>

<li>
タイプ $1$のクエリにおいて、$1 \leq x \leq 10^9$
</li>

<li>
タイプ $2$のクエリにおいて、$1 \leq l \leq r \leq N$
</li>

<li>
タイプ $2$のクエリが $1$つ以上存在する
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
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$Q$$A_1$$A_2$$\ldots$$A_N$$\text{query}_{1}$$\vdots$$\text{query}_{Q}$
</div>

<p>
ただし、$\text{query}_{i}$は $i$個目のクエリであり、以下のいずれかの形式で与えられる。
</p>

<div>

$1$$p$$x$
</div>

<div>

$2$$l$$r$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
タイプ $2$のクエリの個数を $q$として、$q$行出力せよ。
$i$行目には $i$個目のタイプ $2$のクエリに対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 4
3 3 1 4 5
2 1 3
2 5 5
1 3 3
2 2 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
0
2

</div>

<p>
はじめ、$A = (3, 3, 1, 4, 5)$です。
</p>

<p>
$1$個目のクエリでは、$(3, 3, 1)$において $2$番目に大きい値は $1$であり、$3, 3, 1$の中に $1$は $1$個あるので $1$を出力します。 
</p>

<p>
$2$個目のクエリでは、$(5)$において $2$番目に大きい値は存在しないので $0$を出力します。
</p>

<p>
$3$個目のクエリでは、$A = (3, 3, 3, 4, 5)$となります。
</p>

<p>
$4$個目のクエリでは、$(3, 3, 4)$において $2$番目に大きい値は $3$であり、$3, 3, 4$の中に $3$は $2$個あるので $2$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1 1
1000000000
2 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8 9
2 4 4 3 9 1 1 2
1 5 4
2 7 7
2 2 6
1 4 4
2 2 5
2 2 7
1 1 1
1 8 1
2 1 8

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0
1
0
2
4

</div>

</section>

</div>

</span>

</span>

</div>
