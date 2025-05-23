
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
正整数 $S$が与えられます．
正整数列 $x$に対し，$f(x)$を以下のように定めます．
</p>

<ul>

<li>
$x$をいくつかの連続部分列に分解することを考える．
このとき，どの連続部分列についても要素の総和が $S$
<strong>
以下
</strong>
でなくてはならない．
このような分解における連続部分列の個数の最小値を $f(x)$の値とする．
</li>

</ul>

<p>
なお，この問題の制約下では $f$の値が必ず定義できることが証明できます．
</p>

<p>
正整数列 $A=(A_1,A_2,\cdots,A_N)$が与えられます．
$\sum_{1 \leq l \leq r \leq N} f((A_l,A_{l+1},\cdots,A_r))$の値を求めてください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 250000$
</li>

<li>
$1 \leq S \leq 10^{15}$
</li>

<li>
$1 \leq A_i \leq \min(S,10^9)$
</li>

<li>
入力される値はすべて整数．
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

$N$$S$$A_1$$A_2$$\cdots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ．
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
1 2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

8

</div>

<p>
例えば $x=(1,2,3)$を考えると，$(1,2),(3)$という分解が条件を満たし，
かつ $2$個未満の連続部分列に分解した場合は条件を満たさないため，$f((1,2,3))=2$です．
</p>

<p>
ありうる $l,r$とそれに対応する $f$の値は以下の通りです．
</p>

<ul>

<li>
$(l,r)=(1,1)$: $f((1))=1$
</li>

<li>
$(l,r)=(1,2)$: $f((1,2))=1$
</li>

<li>
$(l,r)=(1,3)$: $f((1,2,3))=2$
</li>

<li>
$(l,r)=(2,2)$: $f((2))=1$
</li>

<li>
$(l,r)=(2,3)$: $f((2,3))=2$
</li>

<li>
$(l,r)=(3,3)$: $f((3))=1$
</li>

</ul>

<p>
よって答えは $1+1+2+1+2+1=8$になります．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 1
1 1 1 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

35

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5 15
5 4 3 2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

15

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

20 1625597454
786820955 250480341 710671229 946667801 19271059 404902145 251317818 22712439 520643153 344670307 274195604 561032101 140039457 543856068 521915711 857077284 499774361 419370025 744280520 249168130

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

588

</div>

</section>

</div>

</span>

</span>

</div>
