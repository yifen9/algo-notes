
<div>

<span>

<span>

<p>
配点 : $300$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の正整数列 $A=(A_1,A_2,\dots,A_N)$が与えられます。
</p>

<p>
あなたは以下の操作を $A$の長さが $1$になるまで繰り返します。
</p>

<ul>

<li>
操作を行う時点での $A$の長さを $k$とする。$\max(\{A_1,A_2,\dots,A_{k}\})=A_i,\min(\{A_1,A_2,\dots,A_{k}\})=A_j$かつ $i \neq j$を満たす整数の組 $(i,j)$を選び、$A_i$を $(A_i \bmod A_j)$で置き換える。このとき、$A_i=0$となったのであれば $A$から $A_i$を削除する。
</li>

</ul>

<p>
どのように操作を行っても操作回数は一定であることが証明できます。操作回数を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \le N \le 2 \times 10^5$
</li>

<li>
$1 \le A_i \le 10^9$
</li>

<li>
入力は全て整数である。
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

$N$$A_1$$A_2$$\dots$$A_N$
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

3
2 3 6

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
以下のように操作を行うことになります。操作回数は $3$回です。
</p>

<ul>

<li>
$i=3,j=1$を選ぶ。$A_3=0$となるため、$A$から $A_3$を削除する。$A=(2,3)$となる。
</li>

<li>
$i=2,j=1$を選ぶ。$A_2=1$となる。$A=(2,1)$となる。
</li>

<li>
$i=1,j=2$を選ぶ。$A_1=0$となるため、$A$から $A_1$を削除する。$A=(1)$となる。$A$の長さが $1$になったため、操作を終了する。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6
1232 452 23491 34099 57341 21488

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

12

</div>

</section>

</div>

</span>

</span>

</div>
