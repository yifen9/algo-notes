
<div>

<span>

<span>

<p>
配点 : $1000$点
</p>

<div>

<section>

### **問題文**

<p>

<strong>
この問題のメモリ制限はいつもと異なります。注意してください。
</strong>

</p>

<p>
各マスが白か黒で塗られている長方形状のマス目に対して、
<strong>
複雑さ 
</strong>
を以下のように定めます。
</p>

<ul>

<li>
すべてのマスが白、もしくはすべてのマスが黒のとき、複雑さは $0$である。
</li>

<li>
そうでないとき、マス目のいずれかの辺に平行な直線でマス目を $2$つのマス目に分割し、それらのマス目の複雑さを $c_1$, $c_2$とする。
  分割の仕方は複数ありうるが、それらにおける $\max(c_1, c_2)$の最小値を $m$として、このマス目の複雑さを $m+1$とする。
</li>

</ul>

<p>
実際に縦 $H$行、横 $W$列の白黒に塗られたマス目が与えられます。
マス目の状態は $A_{11}$から $A_{HW}$の $HW$個の文字で表されており、
上から $i$行目、左から $j$列目にあるマスが黒色のとき $A_{ij}$は `#`、
上から $i$行目、左から $j$列目にあるマスが白色のとき $A_{ij}$は `.`となっています。
</p>

<p>
与えられたマス目の複雑さを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≦ H,W ≦ 185$
</li>

<li>
$A_{ij}$は `#`または `.`
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

$H$$W$$A_{11}$$A_{12}$$...$$A_{1W}$$:$$A_{H1}$$A_{H2}$$...$$A_{HW}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
与えられたマス目の複雑さを出力せよ。
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
...
.##
.##

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
$1$列目と $2$列目の境目で $2$つのマス目に分割してみます。
$1$列目だけからなるマス目の複雑さは $0$、$2$,$3$列目からなるマス目の複雑さは $1$なので、
このマス目の複雑さは $2$以下だと分かります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6 7
.####.#
#....#.
#....#.
#....#.
.####.#
#....##

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4

</div>

</section>

</div>

</span>

</span>

</div>
