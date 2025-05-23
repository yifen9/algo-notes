
<div>

<span>

<span>

<p>
配点 : $700$点
</p>

<div>

<section>

### **問題文**

<p>
二次元平面上に配置された $N$個の点 $(x_i,y_i)$が与えられます。
$N$点の部分集合 $S$であって、凸多角形をなすものを考えます。
ここで点集合$S$が凸多角形をなすとは、
頂点の集合が $S$と一致するような正の面積の凸多角形が存在することとします。ただし、凸多角形の内角は全て $180°$未満である必要があります。
</p>

<p>
例えば下図では、$S$として {$A,C,E$}, {$B,D,E$} などは認められますが、{$A,C,D,E$}, {$A,B,C,E$}, {$A,B,C$}, {$D,E$}, {} などは認められません。
</p>

<div>

<img src="https://atcoder.jp/img/arc082/cddb0c267926c2add885ca153c47ad8a.png">

</img>

</div>

<p>
$S$に対し、$N$個の点のうち $S$の凸包の内部と境界 (頂点も含む) に含まれる点の個数を $n$とおき、
$S$のスコアを、$2^{n-|S|}$と定義します。
</p>

<p>
凸多角形をなすような考えうる全ての $S$に対してスコアを計算し、これらを足し合わせたものを求めてください。
</p>

<p>
ただし答えはとても大きくなりうるので、$998244353$で割った余りをかわりに求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1≤N≤200$
</li>

<li>
$0≤x_i,y_i<10^4 (1≤i≤N)$
</li>

<li>
$i≠j$なら $x_i≠x_j$または $y_i≠y_j$
</li>

<li>
$x_i,y_i$は整数
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

$N$$x_1$$y_1$$x_2$$y_2$$:$$x_N$$y_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
スコアの総和を $998244353$で割った余りを出力せよ。
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
0 0
0 1
1 0
1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

5

</div>

<p>
$S$として三角形（をなす点集合）が $4$つと四角形が $1$つとれます。どれもスコアは $2^0=1$となるので、答えは $5$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
0 0
0 1
0 2
0 3
1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

11

</div>

<p>
スコア $1$の三角形が $3$つ、スコア $2$の三角形が$2$つ、スコア $4$の三角形が $1$つあるので、答えは $11$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1
3141 2718

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0

</div>

<p>
$S$として考えられるものがないので、答えは $0$です。
</p>

</section>

</div>

</span>

</span>

</div>
