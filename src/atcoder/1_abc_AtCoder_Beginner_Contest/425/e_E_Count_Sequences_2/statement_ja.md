
<div>

<span>

<span>

<p>
配点 : $450$点
</p>

<div>

<section>

### **問題文**

<p>
正整数 $N$および長さ $N$の正整数列 $C=(C_1,C_2,\ldots,C_N)$が与えられます。
</p>

<p>
次の条件をすべて満たす正整数列の個数を与えられた正整数 $M$で割った余りを求めてください。
</p>

<ul>

<li>
数列の要素はすべて $1$以上 $N$以下である。
</li>

<li>
各 $i=1,2,\ldots,N$に対し、$i$は数列にちょうど $C_i$個含まれる。
</li>

</ul>

<p>
$T$個のテストケースが与えられるので、それぞれについて答えを求めてください。ただし、$M$は $T$個すべてのテストケースにおいて共通です。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq T\leq 10^5$
</li>

<li>
$2\leq M\leq 10^9$
</li>

<li>
$1\leq N$
</li>

<li>
$1\leq C_i$
</li>

<li>
$\sum_{i=1}^N C_i\leq 5000$
</li>

<li>
全てのテストケースに対する $N$の総和は $3\times 10^5$以下
</li>

<li>
入力はすべて整数
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

$T$$M$$\mathrm{case}_1$$\mathrm{case}_2$$\vdots$$\mathrm{case}_T$
</div>

<p>
$i$番目のテストケース $\mathrm{case}_i$は以下の形式で与えられる。
</p>

<div>

$N$$C_1$$C_2$$\ldots$$C_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力せよ。$i$行目には $i$番目のテストケースの答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 1000000000
2
2 2
5
1 1 1 1 1
6
1 2 3 4 5 6

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

6
120
230379200

</div>

<p>
$1$番目のテストケースについて、条件を満たす数列は $(1,1,2,2),(1,2,1,2),(1,2,2,1),(2,1,1,2),(2,1,2,1),(2,2,1,1)$の $6$個です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 998244353
1
1
3
4 2 5
10
500 500 500 500 500 500 500 500 500 500

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1
6930
261233246

</div>

</section>

</div>

</span>

</span>

</div>
