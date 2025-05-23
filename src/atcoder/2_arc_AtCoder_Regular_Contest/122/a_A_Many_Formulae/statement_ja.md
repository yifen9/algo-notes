
<div>

<span>

<span>

<p>
配点 : $400$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の非負整数列 $A_1,A_2,\cdots,A_N$が与えられます．
</p>

<p>
この数列の隣接する $2$項の間に `+`または `-`を入れて，一つの式を作ることを考えます．
</p>

<p>
式を作る方法は $2^{N-1}$通りありますが，この中でも以下の条件を満たす式を，
<strong>
良い式
</strong>
と呼ぶことにします．
</p>

<ul>

<li>
`-`が $2$回以上連続で登場しない．
</li>

</ul>

<p>
全ての良い式の値を足し合わせた値を求めて下さい．
なお，この値はかならず非負整数となることが証明できます．
そこで，この値を $10^9+7$で割った余りを出力してください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 10^5$
</li>

<li>
$1 \leq A_i \leq 10^9$
</li>

<li>
入力される値はすべて整数である
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
入力は以下の形式で標準入力から与えられる．
</p>

<div>

$N$$A_1$$A_2$$\cdots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを $10^9+7$で割った余りを出力せよ．
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
3 1 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

15

</div>

<p>
以下の $3$通りの良い式が考えられます．
</p>

<ul>

<li>

<p>
$3+1+5=9$
</p>

</li>

<li>

<p>
$3+1-5=-1$
</p>

</li>

<li>

<p>
$3-1+5=7$
</p>

</li>

</ul>

<p>
$3-1-5$は `-`が $2$回以上連続で登場するため，良い式ではありません．
よって，答えは $9+(-1)+7=15$となります．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4
1 1 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

10

</div>

<p>
以下の $5$通りの良い式が考えられます．
</p>

<ul>

<li>

<p>
$1+1+1+1=4$
</p>

</li>

<li>

<p>
$1+1+1-1=2$
</p>

</li>

<li>

<p>
$1+1-1+1=2$
</p>

</li>

<li>

<p>
$1-1+1+1=2$
</p>

</li>

<li>

<p>
$1-1+1-1=0$
</p>

</li>

</ul>

<p>
よって答えは $4+2+2+2+0=10$となります．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
866111664 178537096 844917655 218662351 383133839 231371336 353498483 865935868 472381277 579910117

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

279919144

</div>

<p>
答えを $10^9+7$で割った余りを出力してください．
</p>

</section>

</div>

</span>

</span>

</div>
