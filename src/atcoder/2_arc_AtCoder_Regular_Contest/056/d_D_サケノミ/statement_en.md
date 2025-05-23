
<div>

<div>

<div>

<section>

### **問題文**

<p>
あなたは風変わりなバーに来ています。このバーでは、$N$種類のドリンクがあり、あなたは初めに$N$個のグラスを与えられます。$i$番目のグラスは$i$番目のドリンクに対応しており、$i$番目のドリンクのみが注がれます。また、それぞれのドリンクに対し、美味しさ$w_i$が定まっています。初めに、全てのグラスは空です。
</p>

<p>
それぞれのドリンクは、何回か決まった時刻に補充されます。
すなわち、
時間$t_{i,j}(1≦j≦M_i)$に$i$番目のグラスが空ならば、$i$番目のグラスに$i$番目のドリンクが注がれます。
</p>

<p>
あなたは、好きな奇数時刻に、全てのグラスに入っているドリンクを全て飲み干すことができます。一部のドリンクのみを飲む行為は禁止されています。
飲んだドリンクの美味しさの総和の最大値を求めるプログラムを書いてください。ただし、同じドリンクを複数回飲んだときも、美味しさは重複して計算されることに注意してください。
</p>

</section>

</div>

---

<div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≦ N ≦ 5*10^5$
</li>

<li>
$2 ≦ t_{i,j} ≦ 10^6$
</li>

<li>
$t_{i,j} < t_{i,j+1}$
</li>

<li>
$t_{i,j}$は偶数である
</li>

<li>
$Σ M_i ≦ 5*10^5$
</li>

<li>
$1 ≦ M_i$
</li>

<li>
$-10^9 ≦ w_i ≦ 10^9$
</li>

</ul>

</section>

</div>

<div>

<section>

### **部分点**

<ul>

<li>
$t_{i,j} ≦ 1,000$かつ $N ≦ 1,000$を満たすテストケース全てに正解した場合、部分点として$30$点が与えられる。
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$w_1$... $w_N$$M_1$$t_{1,1}$... $t_{1,M_1}$:
$M_N$$t_{N,1}$... $t_{N,M_N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$1$行目に、美味しさの総和を出力せよ。
</p>

</section>

</div>

---

<div>

<section>

### **入力例1**

<div>

3
2 5 -6
1 2
2 4 10
2 4 8

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

6

</div>

<p>
時刻$9$と$11$にグラスにあるドリンクを全て飲み干します。
時刻$9$では、$3$つ全てドリンクが注がれているため、美味しさ$2+5-6=1$を得ます。
時刻$11$では、$2$番目のドリンクのみ注がれているため、美味しさ$5$を得ます。合計$6$となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

3
2 5 -6
2 2 8
2 4 10
2 4 10

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

3

</div>

</section>

</div>

---

<div>

<section>

### **入力例3**

<div>

3
3 5 -4
2 2 8
4 4 6 10 12
4 2 4 8 10

</div>

</section>

</div>

<div>

<section>

### **出力例3**

<div>

18

</div>

</section>

</div>

---

<div>

<section>

### **入力例4**

<div>

3
-2 -2 -2
2 2 8
4 4 6 10 12
4 2 4 8 10

</div>

</section>

</div>

<div>

<section>

### **出力例4**

<div>

0

</div>

</section>

</div>

</div>

</div>
