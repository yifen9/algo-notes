
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
数直線上で暮らす高橋君は、今座標 $X$にいます。これから高橋君はちょうど $K$回、座標の正または負の方向に $D$移動する行為を繰り返そうと考えています。
</p>

<p>
より正確には、$1$回の移動では 座標 $x$から $x + D$または $x - D$に移動できます。
</p>

<p>
高橋君は、ちょうど $K$回移動した後にいる座標の絶対値が最小となるように移動したいです。
</p>

<p>
$K$回の移動後の座標の絶対値としてあり得る値の最小値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$-10^{15} \leq X \leq 10^{15}$
</li>

<li>
$1 \leq K \leq 10^{15}$
</li>

<li>
$1 \leq D \leq 10^{15}$
</li>

<li>
入力は全て整数である
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

$X$$K$$D$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$K$回の移動後の座標の絶対値としてあり得る値の最小値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6 2 4

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
高橋君は、今座標 $6$にいます。次のように移動するのが最適です。
</p>

<ul>

<li>
$6$から ($6 - 4 =$) $2$に移動する。
</li>

<li>
$2$から ($2 - 4 =$) $-2$に移動する。
</li>

</ul>

<p>
移動後の座標の絶対値は $2$で、これより小さくすることはできません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7 4 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1

</div>

<p>
高橋君は、今座標 $7$にいます。例えば次のように移動するのが最適です。
</p>

<ul>

<li>
$7$から $4$に移動する。
</li>

<li>
$4$から $7$に移動する。
</li>

<li>
$7$から $4$に移動する。
</li>

<li>
$4$から $1$に移動する。
</li>

</ul>

<p>
移動後の座標の絶対値は $1$で、これより小さくすることはできません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

8

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

1000000000000000 1000000000000000 1000000000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

1000000000000000

</div>

<p>
答えは非常に大きな値になる場合もあります。
</p>

</section>

</div>

</span>

</span>

</div>
