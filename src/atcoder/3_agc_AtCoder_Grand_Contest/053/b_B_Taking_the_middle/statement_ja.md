
<div>

<span>

<span>

<p>
配点 : $700$点
</p>

<div>

<section>

### **問題文**

<p>
$2N$枚のカードがあり、それぞれには $1$から $2N$までの番号が付いています。カード $i$の価値は $V_i$です。
高橋君と青木君は以下の手順を $N$回繰り返し、カードを $N$枚ずつに分配します。
</p>

<ul>

<li>
まず、高橋君がまだ選ばれてないカードの中から $1$枚選び、自分のものとする。
  その後、青木君はまだ選ばれてないカードのうち
<strong>
番号 
</strong>
が中央値であるものを選び、自分のものとする。
</li>

</ul>

<p>
高橋君が最終的に持っているカードの価値の総和として考えられる最大の値を求めてください。
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
$0\leq V_i\leq 10^9$
</li>

<li>
$V_i$は整数
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

$N$$V_1$$V_2$$\cdots$$V_{2N}$
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
1 2 3 4 5 6

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

15

</div>

<p>
以下のような手順で、高橋君はカード $4,5,6$を手にすることができます。
</p>

<ul>

<li>
まず、高橋君はカード $6$を選ぶ。そして、青木君はカード $3$を選ぶ。
</li>

<li>
次に、高橋君はカード $5$を選ぶ。そして、青木君はカード $2$を選ぶ。
</li>

<li>
最後に、高橋君はカード $4$を選ぶ。そして、青木君はカード $1$を選ぶ。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4
1 4 5 8 7 6 3 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

20

</div>

</section>

</div>

</span>

</span>

</div>
