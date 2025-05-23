
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の整数列 $A=(A_1,A_2,\dots,A_N)$および正整数 $M$が与えられます。
</p>

<p>
$A$の末尾の要素を削除するという操作を $0$回以上 $N$回以下行うことで、以下の条件が満たされ
<strong>
ない
</strong>
ようにしたいです。
</p>

<ul>

<li>

<strong>
条件
</strong>
：$A$には $1$以上 $M$以下の整数がすべて含まれている。
</li>

</ul>

<p>
必要な操作回数の最小値を求めてください。
</p>

<p>
なお、本問題の制約下において、操作を $0$回以上 $N$回以下行うことで上述の条件が満たされないようにすることが必ず可能であることが証明できます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq M \leq N \leq 100$
</li>

<li>
$1\leq A_i \leq M$
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

$N$$M$$A_1$$A_2$$\dots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
条件が満たされなくなるために必要な操作回数の最小値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 3
3 2 3 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<p>
最初、$A=(3,2,3,1,2)$です。このとき、$A$には $1$以上 $3$以下の整数がすべて含まれるため条件を満たします。
</p>

<p>
$A$の末尾の要素を削除する操作を $1$回行うと、$A=(3,2,3,1)$となります。このとき、$A$には $1$以上 $3$以下の整数がすべて含まれるため条件を満たします。
</p>

<p>
$A$の末尾の要素を削除する操作をもう $1$回行うと、$A=(3,2,3)$となります。このとき、$A$には $1$が含まれないため条件を満たしません。
</p>

<p>
よって、条件が満たされなくなるために必要な操作回数の最小値は $2$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 3
1 3 1 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

<p>
$A$には最初から $2$が含まれず条件を満たさないため、操作を $1$回も行う必要がありません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10 4
1 3 3 4 2 1 3 1 2 4

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

6

</div>

</section>

</div>

</span>

</span>

</div>
