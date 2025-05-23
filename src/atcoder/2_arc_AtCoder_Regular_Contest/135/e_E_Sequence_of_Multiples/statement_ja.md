
<div>

<span>

<span>

<p>
配点 : $800$点
</p>

<div>

<section>

### **問題文**

<p>
整数 $N, X$が与えられます。整数列 $A = (A_1, \ldots, A_N)$が次の条件をすべて満たすとします。
</p>

<ul>

<li>
$A_1 = X$。
</li>

<li>
任意の $i$($1\leq i\leq N$) に対して、$A_i$は $i$の倍数である。
</li>

<li>
$A$は狭義単調増加である。つまり、$A_1 < \cdots < A_N$が成り立つ。
</li>

</ul>

<p>
$\sum_{i=1}^N A_i$として考えられる最小値を、$998244353$で割った余りを求めてください。
</p>

<p>
$T$個のテストケースが与えられるので、それぞれについて答えを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq T\leq 10$
</li>

<li>
$1\leq N \leq 10^{18}$
</li>

<li>
$1\leq X \leq 10^{18}$
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

$T$$\text{case}_1$$\vdots$$\text{case}_T$
</div>

<p>
各テストケースは以下の形式で与えられます。
</p>

<div>

$N$$X$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力してください。$i$行目には、$\text{case}_i$に対する答えを出力してください。
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
5 100
1 10
10 1
1000000000000000000 1
100 100

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

525
10
55
75433847
61074

</div>

<p>
はじめの $3$つのテストケースについて、例えば次の $A$が $\sum_{i=1}^N A_i$の最小値を与えます：
</p>

<ul>

<li>
$1$番目のテストケース：$A = (100, 102, 105, 108, 110)$。
</li>

<li>
$2$番目のテストケース：$A = (10)$。
</li>

<li>
$3$番目のテストケース：$A = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)$。
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
