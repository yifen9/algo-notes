
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
$N$件の日雇いアルバイトがあり、$i$件目の日雇いアルバイトを請けて働くと、その $A_i$日後に報酬 $B_i$が得られます。
</p>

<p>
あなたは、これらの中から $1$日に $1$件まで選んで請け、働くことができます。
</p>

<p>
ただし、請けたことのある日雇いアルバイトは選べません。
</p>

<p>
今日から $M$日後まで($M$日後を含む)に得られる報酬の合計の最大値を求めてください。
</p>

<p>
なお、日雇いアルバイトは今日から請けて働くことができます。
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
$1 \leq N \leq 10^5$
</li>

<li>
$1 \leq M \leq 10^5$
</li>

<li>
$1 \leq A_i \leq 10^5$
</li>

<li>
$1 \leq B_i \leq 10^4$
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

$N$$M$$A_1$$B_1$$A_2$$B_2$$\vdots$$A_N$$B_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$M$日後までに得られる報酬の合計の最大値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 4
4 3
4 1
2 2

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
以下のように日雇いアルバイトを請けて働くと、報酬の合計は $5$となり、このときが最大です。
</p>

<ul>

<li>
今日、$1$件目の日雇いアルバイトを請けて働き、今日から $4$日後に報酬 $3$を得ます。
</li>

<li>
明日(今日から $1$日後)、$3$件目の日雇いアルバイトを請けて働き、今日から $1+2 = 3$日後に報酬 $2$を得ます。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 3
1 2
1 3
1 4
2 1
2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

10

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1 1
2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0

</div>

</section>

</div>

</span>

</span>

</div>
