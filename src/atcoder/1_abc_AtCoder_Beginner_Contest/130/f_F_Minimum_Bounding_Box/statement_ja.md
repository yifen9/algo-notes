
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
二次元平面に $N$個の点があります。$i$番目の点の初期座標は $(x_i, y_i)$です。それぞれの点はこれから秒速 $1$で同時に移動を始めます。点の移動方向は全て $x$軸または $y$軸に平行です。具体的には $i$番目の点の移動方向は文字 $d_i$によって与えられ、
</p>

<ul>

<li>
$d_i = $`R`のとき $x$軸正方向
</li>

<li>
$d_i = $`L`のとき $x$軸負方向
</li>

<li>
$d_i = $`U`のとき $y$軸正方向
</li>

<li>
$d_i = $`D`のとき $y$軸負方向
</li>

</ul>

<p>
です。
</p>

<p>
あなたは点が移動を開始して以降、任意のタイミングで全ての点の動きを止めることができます (移動開始 $0$秒後に止めることも可能です)。
動きを止めたあとの $N$点の $x$座標のうち最大のものを $x_{max}$、最小のものを $x_{min}$、$y$座標のうち最大のものを $y_{max}$、最小のものを $y_{min}$とします。
</p>

<p>
$(x_{max} - x_{min}) \times (y_{max} - y_{min})$としてありうる値の最小値を求めて出力してください。
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
$-10^8 \leq x_i,\ y_i \leq 10^8$
</li>

<li>
$x_i$, $\ y_i$はともに整数である。
</li>

<li>
$d_i$は `R`, `L`, `U`, `D`のいずれかである。
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

$N$$x_1$$y_1$$d_1$$x_2$$y_2$$d_2$$.$$.$$.$$x_N$$y_N$$d_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$(x_{max} - x_{min}) \times (y_{max} - y_{min})$としてありうる値の最小値を出力せよ。
</p>

<p>
ジャッジプログラムの出力との絶対誤差または相対誤差が $10^{-9}$以下のとき正解とみなされる。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2
0 3 D
3 0 L

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

0

</div>

<p>
$3$秒後に $2$つの点は原点で重なり、このとき題意の値は $0$になります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
-7 -10 U
7 -6 U
-8 7 D
-3 3 D
0 -6 R

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

97.5

</div>

<p>
出力が整数にならない場合もあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

20
6 -10 R
-4 -9 U
9 6 D
-3 -2 R
0 7 D
4 5 D
10 -10 U
-1 -8 U
10 -6 D
8 -5 U
6 4 D
0 3 D
7 9 R
9 -4 R
3 10 D
1 9 U
1 -6 U
9 -8 R
6 7 D
7 -3 D

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

273

</div>

</section>

</div>

</span>

</span>

</div>
