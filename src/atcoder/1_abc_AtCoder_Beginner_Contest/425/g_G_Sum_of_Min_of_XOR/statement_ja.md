
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
正整数 $N,M$と長さ $N$の非負整数列 $A=(A_1,A_2,\ldots,A_N)$が与えられます。
</p>

<p>
$\displaystyle \sum_{x=0}^{M-1} \min_{1\le i\le N} \left(x\oplus A_i \right)$を求めてください。
</p>

<p>
ただし、 $x\oplus A_i$は $x$と $A_i$のビット単位 $\mathrm{XOR}$を表します。
</p>

<details>

<summary>
ビット単位 $\mathrm{XOR}$演算とは
    
</summary>

<p>
非負整数 $X,Y$のビット単位 $\mathrm{XOR}$、$X \oplus Y$は、以下のように定義されます。
        
</p>

<ul>

<li>
$X \oplus Y$を二進表記した際の $2^k$($k \geq 0$) の位の数は、$X,Y$を二進表記した際の $2^k$の位の数のうち一方のみが $1$であれば $1$、そうでなければ $0$である。
</li>

</ul>
例えば、$3 \oplus 5 = 6$となります (二進表記すると: $011 \oplus 101 = 110$)。


<p>

</p>

</details>

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
$1\le M\le 10^9$
</li>

<li>
$0\le A_i \le 10^9$
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

$N$$M$$A_1$$A_2$$\ldots$$A_N$
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

2 4
1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<ul>

<li>
$x=0$のとき： $x\oplus A_1=1,x\oplus A_2= 2$なので $\displaystyle \min_{1\le i\le N} \left(x\oplus A_i \right) = 1$です。
</li>

<li>
$x=1$のとき： $x\oplus A_1=0,x\oplus A_2= 3$なので $\displaystyle \min_{1\le i\le N} \left(x\oplus A_i \right) = 0$です。
</li>

<li>
$x=2$のとき： $x\oplus A_1=3,x\oplus A_2= 0$なので $\displaystyle \min_{1\le i\le N} \left(x\oplus A_i \right) = 0$です。
</li>

<li>
$x=3$のとき： $x\oplus A_1=2,x\oplus A_2= 1$なので $\displaystyle \min_{1\le i\le N} \left(x\oplus A_i \right) = 1$です。
</li>

</ul>

<p>
したがって、 $1+0+0+1=2$を出力してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6 5
0 1 2 3 4 5

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

10 8762
347 883 264 816 533 306 190 880 624 279

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

34912221

</div>

</section>

</div>

</span>

</span>

</div>
