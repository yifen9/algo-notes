
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
正整数列 $A=(a_1,a_2,\ldots,a_N)$が与えられます。

あなたは次の操作を $0$回以上何度でも繰り返せます。
</p>

<ul>

<li>
$A$から（空でない）連続する部分列を選び、削除する。
</li>

</ul>

<p>
$x=1,2,\ldots,M$に対し、次の問題を解いてください。
</p>

<ul>

<li>
$A$の要素の総和をちょうど $x$にするために必要な操作回数の最小値を求めてください。ただし、どのように操作を行っても $A$の要素の総和をちょうど $x$にできない場合は代わりに `-1`と出力してください。
</li>

</ul>

<p>
なお、$A$が空である時、$A$の要素の総和は $0$であるとします。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N,M \leq 3000$
</li>

<li>
$1 \leq a_i \leq 3000$
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

$N$$M$$a_1$$\ldots$$a_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$M$行出力せよ。$i$行目には $x=i$に対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 5
1 2 3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
2
1
1
1

</div>

<p>
操作回数が最小である操作の例を以下に示します。
</p>

<ul>

<li>
$x=1$について、$a_2,a_3,a_4$に対して操作をすることで $A$の要素の総和が $x$になります。
</li>

<li>
$x=2$について、$a_3,a_4$に対して操作をした後、$a_1$に対して操作をすることで $A$の要素の総和が $x$になります。
</li>

<li>
$x=3$について、$a_3,a_4$に対して操作をすることで $A$の要素の総和が $x$になります。
</li>

<li>
$x=4$について、$a_1,a_2,a_3$に対して操作をすることで $A$の要素の総和が $x$になります。
</li>

<li>
$x=5$について、$a_2,a_3$に対して操作をすることで $A$の要素の総和が $x$になります。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1 5
3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

-1
-1
0
-1
-1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

12 20
2 5 6 5 2 1 7 9 7 2 5 5

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

2
1
2
2
1
2
1
2
2
1
2
1
1
1
2
2
1
1
1
1

</div>

</section>

</div>

</span>

</span>

</div>
