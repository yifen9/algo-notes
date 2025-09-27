
<div>

<span>

<span>

<p>
配点 : $350$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の整数列 $A=(A_1,A_2,\ldots,A_N)$が与えられます。
</p>

<p>
$Q$個のクエリが与えられるので順に処理してください。クエリは $2$種類あり、以下のいずれかの形式で与えられます。
</p>

<ul>

<li>
`1 c`： $A$の先頭の要素を末尾に移動させる操作を $c$回行う。
</li>

<li>
`2 l r`： $\displaystyle \sum_{i=l}^r A_i$の値を出力する。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\le N\le 2\times 10^5$
</li>

<li>
$1\le Q\le 2\times 10^5$
</li>

<li>
$1\le A_i \le 10^9$
</li>

<li>
$1\le c\le N$
</li>

<li>
$1\le l\le r \le N$
</li>

<li>
$2$つ目の形式のクエリが $1$つ以上存在する
</li>

<li>
入力される値は全て整数
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

$N$$Q$$A_1$$A_2$$\ldots$$A_N$$\text{query}_1$$\text{query}_2$$\vdots$$\text{query}_Q$
</div>

<p>
各クエリ $\text{query}_i$は以下の $2$種類のいずれかの形式で与えられる。
</p>

<div>

$1$$c$
</div>

<div>

$2$$l$$r$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
問題文の指示に従って $2$つ目の形式のクエリへの答えを改行区切りで出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 3
3 1 4 5
2 1 3
1 1
2 2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

8
9

</div>

<p>
各クエリは以下のように処理されます。
</p>

<ul>

<li>
$1$つ目のクエリ： $A_1+A_2+A_3=3+1+4=8$なので $8$を出力します。
</li>

<li>
$2$つ目のクエリ： $A=(3,1,4,5)$が $A=(1,4,5,3)$に変化します。
</li>

<li>
$3$つ目のクエリ： $A_2+A_3=4+5=9$なので $9$を出力します。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 7
1 2 4 8 16
2 1 5
1 4
1 5
2 1 5
2 2 4
1 1
2 3 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

31
31
7
4

</div>

</section>

</div>

</span>

</span>

</div>
