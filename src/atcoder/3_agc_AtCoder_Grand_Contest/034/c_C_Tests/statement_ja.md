
<div>

<span>

<span>

<p>
配点 : $800$点
</p>

<div>

<section>

### **問題文**

<p>
高橋くんと青木くんは $1$から $N$までの番号がついたテストを受けようとしています。
二人はこのテストの結果を使って勝負することにしました。
具体的には、次のようにして勝敗を決めます。
</p>

<ul>

<li>

<p>
高橋くんが各テスト $i$について、その重要度 $c_i$を決める。ただしこの値は $l_i$以上 $u_i$以下の整数である必要がある。
</p>

</li>

<li>

<p>
$\sum_{i=1}^{N} c_i \times$(高橋くんのテスト $i$の点数) を $A$, $\ $$\sum_{i=1}^{N} c_i \times$(青木くんのテスト $i$の点数) を $B$とする。 $A \geq B$なら高橋くんの勝ち、$A < B$なら青木くんの勝ち。
</p>

</li>

</ul>

<p>
高橋くんはエスパーなので、青木くんがテスト $i$で $b_i$点をとることがわかっています。
</p>

<p>
高橋くんはこのままだとすべてのテストで $0$点をとってしまいますが、 $1$時間勉強するごとに、好きなテストの点数を $1$だけ上げることができます。($1$時間単位でしか勉強できません。)
ただしテストはすべて 
<strong>
$X$点満点
</strong>
なので、 $X$より大きい点数にすることはできません。
</p>

<p>
高橋くんが勝つために必要な最小の勉強時間を出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≦ N ≦ 10^5$
</li>

<li>
$1 ≦ X ≦ 10^5$
</li>

<li>
$0 ≦ b_i ≦ X$$(1 \leq i \leq N)$
</li>

<li>
$1 ≦ l_i ≦ u_i ≦ 10^5$$(1 \leq i \leq N)$
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

$N$$X$$b_1$$l_1$$u_1$$b_2$$l_2$$u_2$$:$$b_N$$l_N$$u_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋くんが勝つために必要な最小の勉強時間を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 100
85 2 3
60 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

115

</div>

<p>
例えば次のようにするのが最適です。
</p>

<ul>

<li>

<p>
$c_1 = 3, c_2 = 1$とする。
</p>

</li>

<li>

<p>
テスト $1$で $100$点、テスト $2$で $15$点とるように勉強する。
</p>

</li>

</ul>

<p>
このとき $A = 3 \times 100 + 1 \times 15 = 315$, $B = 3 \times 85 + 1 \times 60 = 315$なので高橋くんが勝ちます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 100
85 2 3
60 10 10

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

77

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1 100000
31415 2718 2818

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

31415

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

10 1000
451 4593 6263
324 310 6991
378 1431 7068
71 1757 9218
204 3676 4328
840 6221 9080
684 1545 8511
709 5467 8674
862 6504 9835
283 4965 9980

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

2540

</div>

</section>

</div>

</span>

</span>

</div>
