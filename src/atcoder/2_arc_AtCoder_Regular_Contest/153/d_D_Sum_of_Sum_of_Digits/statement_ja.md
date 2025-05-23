
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
正整数 $x$に対し，その各桁の和を $f(x)$と表すことにします．例えば $f(153) = 1 + 5 + 3 = 9$，$f(2023) = 2 + 0 + 2 + 3 = 7$，$f(1) = 1$です．
</p>

<p>
正整数列 $A = (A_1, \ldots, A_N)$が与えられます．$x$を非負整数とするとき，$\sum_{i=1}^N f(A_i + x)$としてありうる最小値を求めてください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq 2\times 10^5$
</li>

<li>
$1\leq A_i < 10^9$
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

$N$$A_1$$\ldots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$x$を非負整数とするとき，$\sum_{i=1}^N f(A_i + x)$としてありうる最小値を出力してください．
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
4 13 8 6

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

14

</div>

<p>
例えば $x = 7$とすると，$\sum_{i=1}^N f(A_i+x) = f(11) + f(20) + f(15) + f(13) = 14$となります．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4
123 45 678 90

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

34

</div>

<p>
例えば $x = 22$とすると，$\sum_{i=1}^N f(A_i+x) = f(145) + f(67) + f(700) + f(112) = 34$となります．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

3
1 10 100

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

3

</div>

<p>
例えば $x = 0$とすると，$\sum_{i=1}^N f(A_i+x) = f(1) + f(10) + f(100) = 3$となります．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

1
153153153

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

1

</div>

<p>
例えば $x = 9999846846847$とすると，$\sum_{i=1}^N f(A_i+x) = f(10000000000000) = 1$となります．
</p>

</section>

</div>

</span>

</span>

</div>
