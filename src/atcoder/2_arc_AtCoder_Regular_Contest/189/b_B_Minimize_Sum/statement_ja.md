
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
数直線上に $N$個のコマが置かれており、最初、すべてのコマは相異なる座標に置かれています。

最初にコマが置かれている座標は $X_1,X_2,\ldots, X_N$です。

高橋君は、次の操作を繰り返し ($0$回でも良い) 行う事ができます。
</p>

<blockquote>

<p>
$1\leq i\leq N-3$をみたす整数 $i$を $1$つ選び、
座標が小さい方から $i$番目のコマのある位置と $i+3$番目のコマのある位置の中点を $M$とする。

座標が小さい方から $i+1$番目のコマと $i+2$番目のコマを、それぞれ $M$と対称な位置に動かす。

なお、本問題の制約下において、どのように操作を繰り返し行ってもすべてのコマが相異なる座標に置かれていることが証明できる。
</p>

</blockquote>

<p>
高橋君の目標は $N$個のコマが置かれている座標の総和を最小にする事です。

操作を繰り返した後の座標の総和としてあり得る最小の値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$4 \leq N \leq 2\times 10^5$
</li>

<li>
$0\leq X_1<X_2<\cdots<X_N\leq 10^{12}$
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

$N$$X_1$$X_2$$\ldots$$X_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
操作後の $N$個のコマの座標の総和としてあり得る最小の値を出力せよ。
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
1 5 7 10

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

21

</div>

<p>
高橋君が $i=1$を選ぶと、操作は次のように行われます。  
</p>

<ul>

<li>
座標が小さい方から $1,4$番目のコマの座標が $1,10$である事から、
この操作における $M$の座標は $\frac{1+10}{2}=5.5$となる。
</li>

<li>
左から $2$番目のコマは座標 $5$から座標 $5.5+(5.5-5)=6$へ動かされ、
左から $3$番目のコマは座標 $7$から座標 $5.5-(7-5.5)=4$へ動かされる。
</li>

</ul>

<p>
この操作の後で $4$つのコマの置かれている座標の総和は $1+4+6+10=21$であり、この時が最小となります。よって、$21$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6
0 1 6 10 14 16

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

41

</div>

</section>

</div>

</span>

</span>

</div>
