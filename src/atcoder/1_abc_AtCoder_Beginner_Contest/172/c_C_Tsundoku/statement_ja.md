
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
二台の机 A, B があります。机 A には $N$冊の本が、机 B には $M$冊の本が、それぞれ縦に積まれています。
</p>

<p>
机 A に現在上から $i$番目に積まれている本 $(1 \leq i \leq N)$は読むのに $A_i$分を要し、机 B に現在上から $i$番目に積まれている本 $(1 \leq i \leq M)$は読むのに $B_i$分を要します。
</p>

<p>
次の行為を考えます。
</p>

<ul>

<li>
本が残っている机を選び、その机の最も上に積まれた本を読んで机から取り除く。
</li>

</ul>

<p>
合計所要時間が $K$分を超えないようにこの行為を繰り返すとき、最大で何冊の本を読むことができるでしょうか。本を読むこと以外に要する時間は無視します。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N, M \leq 200000$
</li>

<li>
$1 \leq K \leq 10^9$
</li>

<li>
$1 \leq A_i, B_i \leq 10^9$
</li>

<li>
入力中の値はすべて整数である。
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

$N$$M$$K$$A_1$$A_2$$\ldots$$A_N$$B_1$$B_2$$\ldots$$B_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
読むことのできる本の最大数を表す整数を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 4 240
60 90 120
80 150 80 150

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
この場合、机 A の上から $1,2,3$番目の本はそれぞれ読むのに $60$分、$90$分、$120$分を要し、机 B の上から $1,2,3,4$番目の本はそれぞれ読むのに $80$分、$150$分、$80$分、$150$分を要します。
</p>

<p>
以下のようにすることで $230$分で $3$冊の本を読むことができ、これが $240$分以内に読むことのできる本の最大数です。
</p>

<ul>

<li>
机 A の最も上に積まれている本を $60$分かけて読み、この本を机から取り除く。
</li>

<li>
机 B の最も上に積まれている本を $80$分かけて読み、この本を机から取り除く。
</li>

<li>
机 A の最も上に積まれている本を $90$分かけて読み、この本を机から取り除く。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 4 730
60 90 120
80 150 80 150

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

7

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5 4 1
1000000000 1000000000 1000000000 1000000000 1000000000
1000000000 1000000000 1000000000 1000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0

</div>

<p>
整数のオーバーフローに注意してください。
</p>

</section>

</div>

</span>

</span>

</div>
