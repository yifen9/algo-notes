
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
長さ $2N$の文字列 $S=S_1S_2\dots S_{2N}$について、 $S$が $N$個の `(`, および $N$個の `)`で構成されるとき、 $S$は「括弧列」であるといいます。
</p>

<p>
また、「括弧列」$S$のうち、以下のいずれかに該当するものを「正しい括弧列」といいます。
</p>

<ul>

<li>
空文字列
</li>

<li>
ある「正しい括弧列」$A$が存在して `(`, $A$, `)`をこの順に連結した文字列
</li>

<li>
ある空でない「正しい括弧列」$A,\ B$が存在して、 $A,\ B$をこの順に連結した文字列
</li>

</ul>

<p>
$1$から $2N$までの整数からなる $2$つの順列 $P=(P_1,\ P_2,\ \dots,\ P_{2N}),\ Q=(Q_1,\ Q_2,\ \dots,\ Q_{2N})$が与えられます。
</p>

<p>
以下の条件を満たすような「括弧列」$S=S_1S_2\dots S_{2N}$が存在するか判定してください。
</p>

<ul>

<li>
$S_{p_1}S_{p_2}\dots S_{p_{2N}}$が「正しい括弧列」となるような $1$から $2N$までの整数の順列 $p$のうち、辞書式順序で最小のものが $P$
</li>

<li>
$S_{p_1}S_{p_2}\dots S_{p_{2N}}$が「正しい括弧列」となるような $1$から $2N$までの整数の順列 $p$のうち、辞書式順序で最大のものが $Q$
</li>

</ul>

<p>
存在する場合は $1$つ求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq P_i,Q_i \leq 2N$
</li>

<li>
$P,\ Q$はそれぞれ $1$から $2N$までの整数の順列
</li>

<li>
入力される値はすべて整数
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
入力は以下の形式で標準入力から与えられます。
</p>

<div>

$N$$P_1$$P_2$$\dots$$P_{2N}$$Q_1$$Q_2$$\dots$$Q_{2N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
上記のような「括弧列」$S$が存在する場合、そのうち $1$つを出力してください。答えが複数存在する場合はいずれを出力してもかまいません。
</p>

<p>
存在しない場合は `-1`を出力してください。
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
1 2 4 3
4 3 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

())(

</div>

<p>
$S=$`())(`のとき、$S_{p_1}S_{p_2}S_{p_3}S_{p_4}$が「正しい括弧列」となる $p$は $p=(1,\ 4,\ 2,\ 3),\ (1,\ 4,\ 3,\ 2)$などが考えられますが、このうち辞書式順序で最小のものは $p=(1,\ 2,\ 4,\ 3)$、最大のものは $p=(4,\ 3,\ 1,\ 2)$であり、 $S$は条件を満たします。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2
1 3 2 4
4 3 2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

-1

</div>

<p>
条件を満たす $S$は存在しません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

3
2 1 5 3 4 6
6 5 3 4 2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

-1

</div>

</section>

</div>

</span>

</span>

</div>
