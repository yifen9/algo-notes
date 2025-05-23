
<div>

<span>

<span>

<p>
配点 : $800$点
</p>

<div>

<section>

### **問題文**

<p>
長さが $N$、各要素が $0$以上 $M$以下、総和が $K$以下の整数列のうち、
<strong>
良い数列
</strong>
の個数を $998244353$で割ったあまりを求めてください。
</p>

<p>
ここで、長さ $N$の数列 $X=(X_1,X_2,\ldots,X_N)$は以下の条件を全て満たすグラフ $G$が存在するとき、かつ、そのときに限り良い数列です。
</p>

<ul>

<li>
$G$は $1$から $N$の番号がついた $N$頂点からなる、自己ループを持たないグラフである。（多重辺はあってもよい。）
</li>

<li>
各 $i\ (1\leq i \leq N)$について、頂点 $i$の次数は $X_i$である。
</li>

<li>
各 $i\ (1\leq i \leq N)$について、頂点 $i$と頂点 $i+1$を結ぶ辺は存在しない。ここで、頂点 $N+1$は頂点 $1$を意味する。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$4 \leq N \leq 3000$
</li>

<li>
$0 \leq M \leq 3000$
</li>

<li>
$0\leq K \leq NM$
</li>

<li>
入力される数値は全て整数
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

$N$$M$$K$
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

4 1 2

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
条件を満たす良い数列は以下の $3$個です。
</p>

<ul>

<li>
$(0,0,0,0)$
</li>

<li>
$(0,1,0,1)$
</li>

<li>
$(1,0,1,0)$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10 0 0

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

314 159 26535

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

248950743

</div>

<p>
$998244353$で割ったあまりを答えてください。
</p>

</section>

</div>

</span>

</span>

</div>
