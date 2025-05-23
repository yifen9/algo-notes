
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
座標平面上でチェックポイント $1,2,\dots,N$をこの順に通るレースが行われます。

チェックポイント $i$の座標は $(X_i,Y_i)$であり、すべてのチェックポイントの座標は異なります。
</p>

<p>
チェックポイント $1,N$以外のチェックポイントは、通過を省略することもできます。

ただし、通らなかったチェックポイントの個数を $C$として、以下の通りペナルティが課せられます。
</p>

<ul>

<li>
$C>0$なら $\displaystyle 2^{C−1}$
</li>

<li>
$C=0$なら $0$
</li>

</ul>

<p>
チェックポイント $1$からチェックポイント $N$までの総移動距離（ユークリッド距離）とペナルティの和を $s$とします。

このとき、 $s$として達成可能な最小の値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力は全て整数
</li>

<li>
$2 \le N \le 10^4$
</li>

<li>
$0 \le X_i,Y_i \le 10^4$
</li>

<li>
$i \neq j$ならば $(X_i,Y_i) \neq (X_j,Y_j)$
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
答えを出力せよ。 出力は、真の値との絶対誤差または相対誤差が $10^{−5}$以下のとき正解と判定される。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6
0 0
1 1
2 0
0 1
1 0
2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

5.82842712474619009753

</div>

<p>
チェックポイント $1,2,5,6$を通過し、 $3,4$の通過を省略することを考えます。
</p>

<ul>

<li>
チェックポイント $1 \rightarrow 2$に移動する。 $2$点間の距離は $\sqrt{2}$である。
</li>

<li>
チェックポイント $2 \rightarrow 5$に移動する。 $2$点間の距離は $1$である。
</li>

<li>
チェックポイント $5 \rightarrow 6$に移動する。 $2$点間の距離は $\sqrt{2}$である。
</li>

<li>
通らなかったチェックポイントは $2$つであり、このとき科せられるペナルティは $2$である。
</li>

</ul>

<p>
以上のようにして、 $s = 3 + 2\sqrt{2} \approx 5.828427$を達成できます。

$s$をこの値より小さくすることはできません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10
1 8
3 7
9 4
4 9
6 1
7 5
0 0
1 3
6 8
6 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

24.63441361516795872523

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
34 24
47 60
30 31
12 97
87 93
64 46
82 50
14 7
17 24
3 78

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

110.61238353245736230207

</div>

</section>

</div>

</span>

</span>

</div>
