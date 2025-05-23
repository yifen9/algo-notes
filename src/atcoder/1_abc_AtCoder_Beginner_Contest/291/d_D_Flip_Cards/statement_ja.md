
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
$1$から $N$までの番号がついた $N$枚のカードが一列に並んでいて、各 $i\ (1\leq i < N)$に対してカード $i$とカード $i+1$が隣り合っています。
カード $i$の表には $A_i$が、裏には $B_i$が書かれており、最初全てのカードは表を向いています。
</p>

<p>
今から、$N$枚のカードのうち好きな枚数 ($0$枚でも良い) を選んで裏返すことを考えます。
裏返すカードの選び方は $2^N$通りありますが、そのうち以下の条件を満たすものの数を $998244353$で割った余りを求めてください。
</p>

<ul>

<li>
選んだカードを裏返した後、どの隣り合う $2$枚のカードについても、向いている面に書かれた数が相異なる。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N \leq 2\times 10^5$
</li>

<li>
$1\leq A_i,B_i \leq 10^9$
</li>

<li>
入力は全て整数
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

$N$$A_1$$B_1$$A_2$$B_2$$\vdots$$A_N$$B_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを整数として出力せよ。
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
1 2
4 2
3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4

</div>

<p>
裏返すカードの番号の集合を $S$とします。
</p>

<p>
例えば $S=\{2,3\}$を選ぶと、向いている面に書かれた数はカード $1$から順に $1,2,4$となるため条件を満たします。
</p>

<p>
一方 $S=\{3\}$を選ぶと、向いている面に書かれた数はカード $1$から順に $1,4,4$となり、カード $2$とカード $3$の数が一致するため条件を満たしません。
</p>

<p>
条件を満たす $S$は $\{\},\{1\},\{2\},\{2,3\}$の $4$通りです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4
1 5
2 6
3 7
4 8

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

16

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8
877914575 602436426
861648772 623690081
476190629 262703497
971407775 628894325
822804784 450968417
161735902 822804784
161735902 822804784
822804784 161735902

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

48

</div>

</section>

</div>

</span>

</span>

</div>
