
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
数直線上に $N$人の人が住んでいます。
</p>

<p>
$i$番目の人が住んでいるのは座標 $X_i$です。
</p>

<p>
あなたは $N$人全員が参加する集会を開くことを考えています。
</p>

<p>
集会は数直線上の任意の 
<strong>
整数値の座標
</strong>
で開くことができ、座標 $P$で集会を開くとき、$i$番目の人は集会に参加するために $(X_i - P)^2$の体力を消費します。
</p>

<p>
$N$人が消費する体力の総和としてありえる値の最小値を求めてください。
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
$1 \leq N \leq 100$
</li>

<li>
$1 \leq X_i \leq 100$
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

$N$$X_1$$X_2$$...$$X_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$N$人が消費する体力の総和としてありえる値の最小値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2
1 4

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
座標 $2$で集会を開くとき、$1$番目の人が消費する体力は $(1 - 2)^2 = 1$、
$2$番目の人が消費する体力は $(4 - 2)^2 = 4$、よってその総和は $5$です。
これが $2$人が消費する体力の総和としてありえる値の最小値です。
</p>

<p>
集会を開くことができるのは整数値の座標だけであることに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7
14 14 2 13 56 2 37

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

2354

</div>

</section>

</div>

</span>

</span>

</div>
