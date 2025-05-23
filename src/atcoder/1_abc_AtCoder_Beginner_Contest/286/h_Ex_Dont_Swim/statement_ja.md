
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
二次元平面上に $N$頂点の凸多角形 $C$、点 $S=(s_x, s_y), T=(t_x,t_y)$があります。 $C$の頂点は、反時計回りに $(x_1,y_1),(x_2,y_2),\ldots,(x_N,y_N)$です。 $S,T$は $C$の外部にあることが保証されています。
</p>

<p>
$C$の外周を除いた内部を通らずに点 $S$から点 $T$まで移動するときの最短距離を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$3\leq N \leq 10^5$
</li>

<li>
$|x_i|,|y_i|,|s_x|,|s_y|,|t_x|,|t_y|\leq 10^9$
</li>

<li>
$(x_1,y_1),(x_2,y_2),\ldots,(x_N,y_N)$は反時計回りに凸多角形をなす
</li>

<li>
$C$のどの $3$点も同一直線上にない
</li>

<li>
$S,T$は $C$の外部に存在し、$C$の外周上にない
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

$N$$x_1$$y_1$$x_2$$y_2$$\vdots$$x_N$$y_N$$s_x$$s_y$$t_x$$t_y$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ。
</p>

<p>
なお、真の値との絶対誤差または相対誤差が $10^{-6}$以下であれば正解として扱われる。
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
1 1
3 1
3 3
1 3
0 2
5 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

5.65028153987288474496

</div>

<p>
最短距離を達成する移動方法の一例を以下の図で示します。
</p>

<p>

<img src="https://img.atcoder.jp/abc286/4affd3de612079930dd393002bbae832.png">

</img>

</p>

<p>
$(0,2) \to (1,3) \to(3,3)\to(5,2)$と移動すると、点 $S$から点 $T$への移動距離が $5.650281...$となり、これが最小であることが証明できます。 $C$の外周上は通れることに注意してください。
</p>

<p>
なお、絶対誤差または相対誤差が $10^{-6}$以下であれば正解として扱われるので、`5.650287`などと出力しても正解と判定されます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3
0 0
2 0
1 10
3 7
10 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

8.06225774829854965279

</div>

</section>

</div>

</span>

</span>

</div>
