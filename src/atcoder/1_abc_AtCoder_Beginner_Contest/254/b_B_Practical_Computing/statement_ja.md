
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
以下のような $N$個の整数列 $A_0,\ldots,A_{N-1}$を求めてください。
</p>

<ul>

<li>
各 $i$$(0\leq i \leq N-1)$について、$A_i$の長さは $i+1$である。
</li>

<li>

<p>
各 $i,j$$(0\leq i \leq N-1, 0 \leq j \leq i)$について、$A_i$の $j+1$番目の値 $a_{i,j}$は次のように定められる。
</p>

<ul>

<li>
$j=0$または $j=i$の時、$a_{i,j}=1$
</li>

<li>
それ以外の時、$a_{i,j} = a_{i-1,j-1} + a_{i-1,j}$
</li>

</ul>

</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 30$
</li>

<li>
$N$は整数
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

$N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$N$行出力せよ。 $i$行目には $A_{i-1}$の値を順に空白区切りで出力せよ。
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

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
1 1
1 2 1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
1 6 15 20 15 6 1
1 7 21 35 35 21 7 1
1 8 28 56 70 56 28 8 1
1 9 36 84 126 126 84 36 9 1

</div>

</section>

</div>

</span>

</span>

</div>
