
<div>

<span>

<span>

<p>
配点 : $2300$点
</p>

<div>

<section>

### **問題文**

<p>
`0`,`1`からなる文字列からなる集合 $S$と整数 $K$が与えられます。
$S$に属する異なる $K$個以上の文字列の部分列であるような最長の文字列を求めてください。
条件を満たすものが複数ある場合、辞書順で最小になるものを求めてください。
</p>

<p>
ただし、$S$は以下の形式で与えられます。
</p>

<ul>

<li>
整数 $N$と、$N+1$個の文字列が与えられる。$N+1$個の文字列は順に $X_0,X_1,...,X_N$であり、全ての $i(0\leq i\leq N)$に対し、$X_i$の長さは $2^i$である。
</li>

<li>
どの整数の組 $(i,j)(0\leq i\leq N,0\leq j\leq 2^i-1)$に対しても、$X_i$の $j$文字目(ただし、最初の文字を $0$文字目、最後の文字を $2^i-1$文字目とする)が `1`であることと、$j$を(必要なら最初に $0$を補って) $i$桁からなる二進表記で表してできる文字列が $S$に属することが同値である。
</li>

<li>
長さ $N+1$以上の文字列は、$S$には含まれない。
</li>

</ul>

<p>
また、文字列 $A$が 文字列 $B$の部分列であるとは、ある整数列 $t_1 < ... < t_{|A|}$が存在して、全ての $i(1\leq i\leq |A|)$に対し $A$の $i$文字目と $B$の $t_i$文字目が等しいことを指します。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$0 \leq N \leq 20$
</li>

<li>
$X_i(0\leq i\leq N)$の長さは $2^i$であり、`0`と `1`のみからなる
</li>

<li>
$1 \leq K \leq |S|$
</li>

<li>
$K$は整数である
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

$N$$K$$X_0$$:$$X_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$S$に属する異なる $K$個以上の文字列の部分列であるような最長の文字列のうち、辞書順最小のものを出力せよ。
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
1
01
1011
01001110

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

10

</div>

<p>
$S$に属する文字列は、(空文字列),`1`,`00`,`10`,`11`,`001`,`100`,`101`,`110`です。
これらのうち $4$つ以上の部分列となる最長の文字列のうち辞書順最小のものは、`10`です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 6
1
01
1011
10111010
1101110011111101

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

100

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

2 5
0
11
1111

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>


</div>

<p>
空文字列が答えになります。
</p>

</section>

</div>

</span>

</span>

</div>
