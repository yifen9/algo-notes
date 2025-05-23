
<div>

<span>

<span>

<p>
配点 : $600$点
</p>

<div>

<section>

### **問題文**

<p>
平面上に $N$個の点 $P_1, P_2, \dots, P_N$があり、$P_i$の座標は $(X_i, Y_i)$です。どの $3$点も同一直線上にないことが分かっています。
</p>

<p>
要素数が $3$以上であるような $\{ P_1, P_2, \dots, P_N \} $の部分集合 $S$に対し、$S$の
<strong>
凸包
</strong>
を次のように定義します。
</p>

<ul>

<li>
$S$に含まれる全ての点を周上または内部に含むような凸多角形のうち、面積が最小のもの。
</li>

</ul>

<p>
凸包の面積が整数となるような $S$の総数を $(10^9 + 7)$で割ったあまりを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$3 \leq N \leq 80$
</li>

<li>
$0 \leq |X_i|, |Y_i| \leq 10^4$
</li>

<li>
どの $3$点も同一直線上にない。
</li>

<li>
入力は全て整数である。
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

$N$$X_1$$Y_1$$X_2$$Y_2$$\vdots$$X_N$$Y_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ。$(10^9 + 7)$で割ったあまりを求めることに注意すること。
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
1 2
0 1
1 0

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
$\{ P_1, P_2, P_4 \}, \{ P_2, P_3, P_4 \} $が条件を満たします。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

23
-5255 7890
5823 7526
5485 -113
7302 5708
9149 2722
4904 -3918
8566 -3267
-3759 2474
-7286 -1043
-1230 1780
3377 -7044
-2596 -6003
5813 -9452
-9889 -7423
2377 1811
5351 4551
-1354 -9611
4244 1958
8864 -9889
507 -8923
6948 -5016
-6139 2769
4103 9241

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4060436

</div>

</section>

</div>

</span>

</span>

</div>
