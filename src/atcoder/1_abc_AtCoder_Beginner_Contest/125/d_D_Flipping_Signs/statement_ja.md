
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
$N$個の整数が並んでおり、順に $A_1, A_2, ..., A_N$です。
</p>

<p>
あなたはこの整数列に対して次の操作を好きなだけ行うことができます。
</p>

<p>

<strong>
操作
</strong>
: $1 \leq i \leq N-1$を満たす整数 $i$を選ぶ。$A_i$と $A_{i+1}$に $-1$を乗算する。
</p>

<p>
操作終了後の整数列を $B_1, B_2, ..., B_N$とします。
</p>

<p>
$B_1 + B_2 + ... + B_N$の最大値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力は全て整数である。
</li>

<li>
$2 \leq N \leq 10^5$
</li>

<li>
$-10^9 \leq A_i \leq 10^9$
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

$N$$A_1$$A_2$$...$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$B_1 + B_2 + ... + B_N$の最大値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3
-10 5 -4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

19

</div>

<p>
次のように操作を行うと、$B_1 = 10, B_2 = 5, B_3 = 4$になり、このときの $B_1 + B_2 + B_3 = 10 + 5 + 4 = 19$が最大です。
</p>

<ul>

<li>
$i$として $1$を選ぶ。操作により、整数列は $10, -5, -4$に変化する。
</li>

<li>
$i$として $2$を選ぶ。操作により、整数列は $10, 5, 4$に変化する。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
10 -4 -8 -11 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

30

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

11
-1000000000 1000000000 -1000000000 1000000000 -1000000000 0 1000000000 -1000000000 1000000000 -1000000000 1000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

10000000000

</div>

<p>
出力が $32$ビット整数型に収まらない場合があります。
</p>

</section>

</div>

</span>

</span>

</div>
