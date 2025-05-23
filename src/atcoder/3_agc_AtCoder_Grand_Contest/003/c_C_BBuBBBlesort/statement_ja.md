
<div>

<span>

<span>

<p>
配点 : $600$点
</p>

<div>

<section>

### **問題文**

<p>
高橋君は、誕生日に長さ $N$の数列をもらいました。$i(1 ≦ i ≦ N)$番目の要素は整数 $A_i$です。どの $2$つの要素も、互いに異なります。
高橋君はこの数列を単調増加になるように並べ替えたいです。
高橋君は超能力者なので、以下の $2$つの操作が任意のタイミングでできます。
</p>

<ul>

<li>
操作$1$: 数列の連続する $2$つの要素を選び、その $2$つの順番を反転する。
</li>

<li>
操作$2$: 数列の連続する $3$つの要素を選び、その $3$つの順番を反転する。
</li>

</ul>

<p>
高橋君は操作$2$は好きですが、操作$1$は嫌いです。この $2$種類の操作を使って数列を単調増加になるように並び替えるときの、操作$1$の最小回数を求めてください。
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
$0 ≦ A_i ≦ 10^9$
</li>

<li>
$i ≠ j$ならば $A_i ≠ A_j$
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

$N$$A_1$:
$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
操作$1$の最小回数を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4
2
4
3
1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1

</div>

<p>
以下の操作で、単調増加な数列にすることができます。
</p>

<ul>

<li>
まず、後ろの $3$つの要素を反転する。数列は $2,1,3,4$となる。
</li>

<li>
次に、前の $2$つの要素を反転する。数列は $1,2,3,4$となる。
</li>

</ul>

<p>
この操作列において、連続する $2$つの要素を入れ替える操作の回数は $1$です。これより少ない回数で単調増加な数列は作れないので、$1$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
10
8
5
3
2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

</section>

</div>

</span>

</span>

</div>
