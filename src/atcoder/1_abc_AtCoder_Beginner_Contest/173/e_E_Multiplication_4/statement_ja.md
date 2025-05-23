
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
$N$個の整数 $A_1,\ldots,A_N$が与えられます。
</p>

<p>
このなかからちょうど $K$個の要素を選ぶとき、選んだ要素の積としてありえる最大値を求めてください。
</p>

<p>
そして、答えを $(10^9+7)$で割った余りを $0$以上 $10^9+6$以下の整数として出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq K \leq N \leq 2\times 10^5$
</li>

<li>
$|A_i| \leq 10^9$
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

$N$$K$$A_1$$\ldots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを $(10^9+7)$で割った余りを、$0$以上 $10^9+6$以下の整数として出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 2
1 2 -3 -4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

12

</div>

<p>
要素を $2$個選んだときの積としてありえる値は $2,-3,-4,-6,-8,12$なので、最大値は $12$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 3
-1 -2 -3 -4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1000000001

</div>

<p>
要素を $3$個選んだときの積としてありえる値は $-24,-12,-8,-6$なので、最大値は $-6$です。
</p>

<p>
これを $(10^9+7)$で割った余りである $1000000001$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

2 1
-1 1000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1000000000

</div>

<p>
要素を $1$個選んだときの積としてありえる値は $-1,1000000000$なので、最大値は $1000000000$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

10 10
1000000000 100000000 10000000 1000000 100000 10000 1000 100 10 1

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

999983200

</div>

<p>
答えを $(10^9+7)$で割った余りを出力してください。
</p>

</section>

</div>

</span>

</span>

</div>
