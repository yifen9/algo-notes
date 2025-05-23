
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
$(1,2, \dots, N)$を並び替えた長さ $N$の順列 $P = (p_1, p_2, \dots, p_N)$に対して、 $P$のスコア $S(P)$を次のように定めます。
</p>

<ul>

<li>
$N$人の人とすぬけ君がいて、$N$人の人には $1,2,\dots,N$の番号がついています。はじめ、人 $i$$(1 \leq i \leq N)$はボール $i$を持っています。

すぬけ君が叫ぶたびに、$i \neq p_i$であるようなすべての人 $i$は人 $p_i$に持っているボールを同時に渡します。

すぬけ君は、$1$回以上叫んだ後にすべての人 $i$がボール $i$を持っている状態になると叫ぶのをやめます。

すぬけ君が叫ぶのをやめるまでに叫んだ回数が順列のスコアとなります。ここでスコアは有限の値を取ることが保証されます。  
</li>

</ul>

<p>
$P$としてあり得るものは $N!$通りありますが、それらのスコアを $K$乗した値の総和を $998244353$で割ったあまりを計算してください。
</p>

<ul>

<li>

<p>
厳密に言い換えると、$(1,2, \dots, N)$を並び替えた長さ $N$の順列全体の集合を $S_N$として
</p>

<p>
$\displaystyle \left(\sum_{P \in S_N} S(P)^K \right) \bmod {998244353}$
</p>

<p>
を計算してください。
</p>

</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 50$
</li>

<li>
$1 \leq K \leq 10^4$
</li>

<li>
入力はすべて整数である。
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

$N$$K$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$\displaystyle \left(\sum_{P \in S_N} S(P)^K \right) \bmod {998244353}$を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

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
$N = 2$のとき $P$としてあり得る順列は $(1,2),(2,1)$の $2$つです。
</p>

<p>
順列 $(1,2)$のスコアは次のように決まります。
</p>

<ul>

<li>
はじめ人 $1$はボール $1$を、人 $2$はボール $2$を持っています。

すぬけ君が $1$回目に叫んだ後に、人 $1$はボール $1$を、人 $2$はボール $2$を持っています。

このとき、すべての人が自身の番号と同じ番号が書かれたボールを持っているので、すぬけ君は叫ぶのをやめます。

よってスコアは $1$となります。
</li>

</ul>

<p>
順列 $(2,1)$のスコアは次のように決まります。
</p>

<ul>

<li>
はじめ人 $1$はボール $1$を、人 $2$はボール $2$を持っています。

すぬけ君が $1$回目に叫んだ後に、人 $1$はボール $2$を、人 $2$はボール $1$を持っています。

すぬけ君が $2$回目に叫んだ後に、人 $1$はボール $1$を、人 $2$はボール $2$を持っています。

このとき、すべての人が自身の番号と同じ番号が書かれたボールを持っているので、すぬけ君は叫ぶのをやめます。

よってスコアは $2$となります。
</li>

</ul>

<p>
よって $1^2 + 2^2 = 5$がこの問題の答えになります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

79

</div>

<p>
すべての順列とスコアの組を列挙すると以下のようになります。
</p>

<ul>

<li>
順列 : $(1,2,3)$, スコア : $1$
</li>

<li>
順列 : $(1,3,2)$, スコア : $2$
</li>

<li>
順列 : $(2,1,3)$, スコア : $2$
</li>

<li>
順列 : $(2,3,1)$, スコア : $3$
</li>

<li>
順列 : $(3,1,2)$, スコア : $3$
</li>

<li>
順列 : $(3,2,1)$, スコア : $2$
</li>

</ul>

<p>
よって $1^3 + 2^3 + 2^3 + 3^3 + 3^3 + 2^3 = 79$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

50 10000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

77436607

</div>

</section>

</div>

</span>

</span>

</div>
