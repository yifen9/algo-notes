
<div>

<span>

<span>

<p>
配点 : $575$点
</p>

<div>

<section>

### **問題文**

<p>
$N \times M$のグリッドがあり、上から $i$行目、左から $j$列目のマス $(i,j)$には非負整数 $A_{i,j}$が書かれています。

このグリッドのうち長方領域をひとつ選び、それを $R$とします。

厳密には、長方領域は以下の手順で選ばれます。
</p>

<ul>

<li>
$1 \le l_x \le r_x \le N, 1 \le l_y \le r_y \le M$なる整数 $l_x, r_x, l_y, r_y$を選ぶ。
</li>

<li>
このとき、整数 $i,j$が $l_x \le i \le r_x$かつ $l_y \le j \le r_y$を満たす、またその時に限って、マス $(i,j)$は $R$に含まれる。
</li>

</ul>

<p>
適切に $R$を選ぶことによって、 $f(R) = $( $R$内のマスに書かれた整数の総和 ) $\times$( $R$内のマスに書かれた整数の最小値 ) として達成可能な最大値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力は全て整数
</li>

<li>
$1 \le N,M \le 300$
</li>

<li>
$1 \le A_{i,j} \le 300$
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

$N$$M$$A_{1,1}$$A_{1,2}$$\dots$$A_{1,M}$$A_{2,1}$$A_{2,2}$$\dots$$A_{2,M}$$\vdots$$A_{N,1}$$A_{N,2}$$\dots$$A_{N,M}$
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

3 3
5 4 3
4 3 2
3 2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

48

</div>

<p>
左上がマス $(1,1)$、右下がマス $(2,2)$の長方領域を選ぶことで、 $f(R) = (5+4+4+3) \times \min(5,4,4,3) = 48$が達成でき、これが達成可能な最大値です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 5
3 1 4 1 5
9 2 6 5 3
5 8 9 7 9
3 2 3 8 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

231

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

6 6
1 300 300 300 300 300
300 1 300 300 300 300
300 300 1 300 300 300
300 300 300 1 300 300
300 300 300 300 1 300
300 300 300 300 300 1

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

810000

</div>

</section>

</div>

</span>

</span>

</div>
