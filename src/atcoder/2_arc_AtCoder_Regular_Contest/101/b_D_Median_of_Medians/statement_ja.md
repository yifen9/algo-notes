
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
長さ $M$の数列 $b$の 
<strong>
中央値
</strong>
を次のように定義します。
</p>

<ul>

<li>
$b$を昇順にソートして得られる数列を $b'$とする。 このとき、$b'$の $M / 2 + 1$番目の要素の値を、$b$の中央値とする。 ここで、$/$は小数点以下を切り捨てる除算である。
</li>

</ul>

<p>
例えば、$(10, 30, 20)$の中央値は $20$であり、$(10, 30, 20, 40)$の中央値は $30$であり、$(10, 10, 10, 20, 30)$の中央値は $10$です。
</p>

<p>
すぬけ君は次のような問題を思いつきました。
</p>

<p>
長さ $N$の数列 $a$があります。
各 $(l, r)$($1 \leq l \leq r \leq N$) について、$a$の連続部分列 $(a_l, a_{l + 1}, ..., a_r)$の中央値を $m_{l, r}$とします。
すべての $(l, r)$に対する $m_{l, r}$を並べ、新たに数列 $m$を作ります。
$m$の中央値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 10^5$
</li>

<li>
$a_i$は整数である。
</li>

<li>
$1 \leq a_i \leq 10^9$
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

$N$$a_1$$a_2$$...$$a_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$m$の中央値を出力せよ。
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
10 30 20

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

30

</div>

<p>
$a$のそれぞれの連続部分列の中央値は次のようになります。
</p>

<ul>

<li>
$(10)$の中央値は $10$
</li>

<li>
$(30)$の中央値は $30$
</li>

<li>
$(20)$の中央値は $20$
</li>

<li>
$(10, 30)$の中央値は $30$
</li>

<li>
$(30, 20)$の中央値は $30$
</li>

<li>
$(10, 30, 20)$の中央値は $20$
</li>

</ul>

<p>
よって、$m = (10, 30, 20, 30, 30, 20)$となり、$m$の中央値は $30$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1
10

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

10
5 9 5 9 8 9 3 5 4 3

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

</span>

</span>

</div>
