
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
$1$から $N$までの番号がついた $N$個の数列が与えられます。

数列 $i$は、長さが $L_i$で $j$$(1 \leq j \leq L_i)$番目の要素が $a_{i,j}$であるような数列です。
</p>

<p>
数列 $i$と 数列 $j$は、 $L_i = L_j$かつすべての $k$$(1 \leq k \leq L_i)$に対して $a_{i,k} = a_{j,k}$が成り立つ時に同じであるとみなします。

同じ数列は $1$種類として数えるとき、数列 $1$から 数列 $N$の中に全部で何種類の数列がありますか？
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
$1 \leq L_i \leq 2 \times 10^5$$(1 \leq i \leq N)$
</li>

<li>
$0 \leq a_{i,j} \leq 10^{9}$$(1 \leq i \leq N, 1 \leq j \leq L_i)$
</li>

<li>
すべての数列の要素の個数の和、すなわち $\sum_{i=1}^N L_i$は $2 \times 10^5$を超えない。
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

$N$$L_1$$a_{1,1}$$a_{1,2}$$\dots$$a_{1,L_1}$$L_2$$a_{2,1}$$a_{2,2}$$\dots$$a_{2,L_2}$$\vdots$$L_N$$a_{N,1}$$a_{N,2}$$\dots$$a_{N,L_N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
数列の種類数を出力せよ。
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
2 1 2
2 1 1
2 2 1
2 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3

</div>

<p>
入力例 $1$で与えられている数列は以下の $4$個です。
</p>

<ul>

<li>
数列 $1$: $(1, 2)$
</li>

<li>
数列 $2$: $(1, 1)$
</li>

<li>
数列 $3$: $(2, 1)$
</li>

<li>
数列 $4$: $(1, 2)$
</li>

</ul>

<p>
このうち数列 $1$と数列 $4$は同じ数列で、それ以外は互いに異なる数列なので全部で $3$種類の数列があります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
1 1
1 1
1 2
2 1 1
3 1 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4

</div>

<p>
入力例 $2$で与えられている数列は以下の $5$個です。
</p>

<ul>

<li>
数列 $1$: $(1)$
</li>

<li>
数列 $2$: $(1)$
</li>

<li>
数列 $3$: $(2)$
</li>

<li>
数列 $4$: $(1, 1)$
</li>

<li>
数列 $5$: $(1, 1, 1)$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1
1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1

</div>

</section>

</div>

</span>

</span>

</div>
