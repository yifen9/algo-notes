
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
$a\leq b$を満たす正整数 $a, b$および，正整数列 $A = (A_1, A_2, \ldots, A_N)$が与えられます．
</p>

<p>
あなたはこの数列に対して，以下の操作を何度でも行うことができます（$0$回でもよいです）：
</p>

<ul>

<li>
相異なる添字 $i, j$($1\leq i, j \leq N$) を選ぶ．$A_i$に $a$を加え，$A_j$から $b$を引く．
</li>

</ul>

<p>
操作後の $\min(A_1, A_2, \ldots, A_N)$としてありうる最大値を求めてください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\leq N\leq 3\times 10^5$
</li>

<li>
$1\leq a\leq b\leq 10^9$
</li>

<li>
$1\leq A_i\leq 10^{9}$
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

$N$$a$$b$$A_1$$A_2$$\ldots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
操作後の $\min(A_1, A_2, \ldots, A_N)$としてありうる最大値を出力してください．
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 2 2
1 5 9

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

5

</div>

<p>
例えば次のように操作を行うことで， $\min(A_1, A_2, A_3) = 5$を達成できます．
</p>

<ul>

<li>
$i = 1, j = 3$として操作を行う．$A$は $(3, 5, 7)$に変化する．
</li>

<li>
$i = 1, j = 3$として操作を行う．$A$は $(5, 5, 5)$に変化する．
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 2 3
11 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3

</div>

<p>
例えば次のように操作を行うことで， $\min(A_1, A_2, A_3) = 3$を達成できます．
</p>

<ul>

<li>
$i = 1, j = 3$として操作を行う．$A$は $(13, 1, -1)$に変化する．
</li>

<li>
$i = 2, j = 1$として操作を行う．$A$は $(10, 3, -1)$に変化する．
</li>

<li>
$i = 3, j = 1$として操作を行う．$A$は $(7, 3, 1)$に変化する．
</li>

<li>
$i = 3, j = 1$として操作を行う．$A$は $(4, 3, 3)$に変化する．
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

3 1 100
8 5 6

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

5

</div>

<p>
一度も操作を行わないことにより， $\min(A_1, A_2, A_3) = 5$を達成できます．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

6 123 321
10 100 1000 10000 100000 1000000

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

90688

</div>

</section>

</div>

</span>

</span>

</div>
