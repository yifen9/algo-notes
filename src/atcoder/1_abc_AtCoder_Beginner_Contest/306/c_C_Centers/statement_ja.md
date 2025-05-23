
<div>

<span>

<span>

<p>
配点 : $250$点
</p>

<div>

<section>

### **問題文**

<p>
$1,2,\dots,N$がちょうど $3$回ずつ現れる長さ $3N$の数列 $A=(A_1,A_2,\dots,A_{3N})$が与えられます。
</p>

<p>
$i=1,2,\dots,N$について、$A$の中にある $i$のうち真ん中にあるものの添字を $f(i)$と定めます。
$1,2,\dots,N$を $f(i)$の昇順に並べ替えてください。
</p>

<p>
$f(i)$の定義は厳密には以下の通りです。
</p>

<ul>

<li>
$A_j = i$を満たす $j$が $j=\alpha,\beta,\gamma\ (\alpha < \beta < \gamma)$であるとする。このとき、$f(i) = \beta$である。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N \leq 10^5$
</li>

<li>
$1 \leq A_j \leq N$
</li>

<li>
$i=1,2,\dots,N$それぞれについて、$A$の中に $i$はちょうど $3$回現れる
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

$N$$A_1$$A_2$$\dots$$A_{3N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$1,2,\dots,N$を $f(i)$の昇順に並べ替えてできる長さ $N$の数列を空白区切りで出力せよ。
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
1 1 3 2 3 2 2 3 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1 3 2

</div>

<ul>

<li>
$A$の中にある $1$は $A_1,A_2,A_9$なので、$f(1) = 2$です。
</li>

<li>
$A$の中にある $2$は $A_4,A_6,A_7$なので、$f(2) = 6$です。
</li>

<li>
$A$の中にある $3$は $A_3,A_5,A_8$なので、$f(3) = 5$です。
</li>

</ul>

<p>
よって、$f(1) < f(3) < f(2)$であるため $1,3,2$の順に出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1
1 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

4
2 3 4 3 4 1 3 1 1 4 2 2

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

3 4 1 2

</div>

</section>

</div>

</span>

</span>

</div>
