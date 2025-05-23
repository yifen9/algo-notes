
<div>

<span>

<span>

<p>
配点 : $1200$点
</p>

<div>

<section>

### **問題文**

<p>
無限枚のカードがあります。
カードには $1$, $2$, $3$, $...$と番号が振られています。
最初、カード $x_1$, $x_2$, $...$, $x_N$は表向きで、それら以外のカードは裏向きです。
</p>

<p>
すぬけ君は次の操作を繰り返し行うことができます。
</p>

<ul>

<li>
$3$以上の素数 $p$を選ぶ。 番号が連続する $p$枚のカードを選び、それらすべてをひっくり返す。
</li>

</ul>

<p>
すぬけ君の目標は、すべてのカードを裏向きにすることです。
すぬけ君が目標を達成するために必要な操作回数の最小値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≤ N ≤ 100$
</li>

<li>
$1 ≤ x_1 < x_2 < ... < x_N ≤ 10^7$
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

$N$$x_1$$x_2$$...$$x_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
すぬけ君が目標を達成するために必要な操作回数の最小値を出力せよ。
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
4 5

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
例えば、次の順に操作を行えばよいです。
</p>

<ul>

<li>
$p = 5$を選び、カード $1$, $2$, $3$, $4$, $5$をひっくり返す。
</li>

<li>
$p = 3$を選び、カード $1$, $2$, $3$をひっくり返す。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

9
1 2 3 4 5 6 7 8 9

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3

</div>

<p>
例えば、次の順に操作を行えばよいです。
</p>

<ul>

<li>
$p = 3$を選び、カード $1$, $2$, $3$をひっくり返す。
</li>

<li>
$p = 3$を選び、カード $4$, $5$, $6$をひっくり返す。
</li>

<li>
$p = 3$を選び、カード $7$, $8$, $9$をひっくり返す。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

2
1 10000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

4

</div>

</section>

</div>

</span>

</span>

</div>
