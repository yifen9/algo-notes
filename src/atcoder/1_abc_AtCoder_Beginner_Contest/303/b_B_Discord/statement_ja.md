
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
$1,2,\ldots,N$と番号づけられた $N$人が $M$回、一列に並んで集合写真を撮りました。$i$番目の撮影で左から $j$番目に並んだ人の番号は $a_{i,j}$です。  
</p>

<p>
ある二人組は $M$回の撮影で一度も連続して並ばなかった場合、不仲である可能性があります。　　
</p>

<p>
不仲である可能性がある二人組の個数を求めてください。なお、人 $x$と人 $y$からなる二人組と人 $y$と人 $x$からなる二人組は区別しません。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 50$
</li>

<li>
$1 \leq M \leq 50$
</li>

<li>
$1 \leq a_{i,j} \leq N$
</li>

<li>
$a_{i,1},\ldots,a_{i,N}$には $1,\ldots,N$が $1$回ずつ現れる
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

$N$$M$$a_{1,1}$$\ldots$$a_{1,N}$$\vdots$$a_{M,1}$$\ldots$$a_{M,N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 2
1 2 3 4
4 3 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<p>
人 $1$と人 $4$からなる二人組と、人 $2$と人 $4$からなる二人組がそれぞれ不仲である可能性があります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 3
1 2 3
3 1 2
1 2 3

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

---

<div>

<section>

### **入力例 3**

<div>

10 10
4 10 7 2 8 3 9 1 6 5
3 6 2 9 1 8 10 7 4 5
9 3 4 5 7 10 1 8 2 6
7 3 1 8 4 9 5 6 2 10
5 2 1 4 10 7 9 8 3 6
5 8 1 6 9 3 2 4 7 10
8 10 3 4 5 7 2 9 6 1
3 10 2 7 8 5 1 4 9 6
10 6 1 5 4 2 3 8 9 7
4 5 9 1 8 2 7 6 3 10

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

6

</div>

</section>

</div>

</span>

</span>

</div>
