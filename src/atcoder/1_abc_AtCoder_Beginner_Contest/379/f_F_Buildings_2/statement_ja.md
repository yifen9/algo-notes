
<div>

<span>

<span>

<p>
配点 : $550$点
</p>

<div>

<section>

### **問題文**

<p>
ビル $1$, ビル $2$, $\ldots$, ビル $N$の $N$棟がこの順で東西に一列に並んでおり、ビル $1$が最も西に、ビル $N$が最も東に建っています。ビル $i\ (1\leq i\leq N)$の高さは $H_i$です。
</p>

<p>
整数の組 $(i,j)\ (1\leq i\lt j\leq N)$に対して、以下の条件を満たすとき ビル $i$からビル $j$を見ることができます。
</p>

<ul>

<li>
ビル $i$とビル $j$の間にビル $j$より高いビルが存在しない。すなわち、$H_k\gt H_j$を満たす整数 $k\ (i\lt k\lt j)$が存在しない。
</li>

</ul>

<p>
$Q$個の質問に答えてください。$i$番目の質問では整数の組 $(l_i,r_i)\ (l_i\lt r_i)$が与えられるので、ビル $r_i$より東にあるビル（ビル $r_i+1$, ビル $r_i+2$,$\ldots$,ビル $N$）のうちビル $l_i$とビル $r_i$の両方から見ることができるものの個数を答えてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\leq N\leq 2\times 10^5$
</li>

<li>
$1\leq Q\leq 2\times 10^5$
</li>

<li>
$1\leq H_i\leq N$
</li>

<li>
$H_i\neq H_j\ (i\neq j)$
</li>

<li>
$1\leq l_i\lt r_i\leq N$
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

$N$$Q$$H_1$$H_2$$\ldots$$H_N$$l_1$$r_1$$l_2$$r_2$$\vdots$$l_Q$$r_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Q$行出力せよ。$i\ (1\leq i\leq Q)$行目には $i$番目の質問に対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 3
2 1 4 3 5
1 2
3 5
1 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2
0
1

</div>

<ul>

<li>
$1$つ目の質問について、ビル $2$より東にあるビルのうち ビル $1$とビル $2$の両方から見ることができるものはビル $3,5$の $2$つです。
</li>

<li>
$2$つ目の質問について、ビル $5$より東にあるビルは存在しません。
</li>

<li>
$3$つ目の質問について、ビル $4$より東にあるビルのうち、ビル $1,4$の両方から見ることができるビルはビル $5$の $1$つです。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10 10
2 1 5 3 4 6 9 8 7 10
3 9
2 5
4 8
5 6
3 8
2 10
7 8
6 7
8 10
4 10

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1
3
1
2
1
0
1
1
0
0

</div>

</section>

</div>

</span>

</span>

</div>
