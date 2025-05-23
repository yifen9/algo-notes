
<div>

<span>

<span>

<p>
配点 : $300$点
</p>

<div>

<section>

### **問題文**

<p>
縦 $H$行、横 $W$列の白黒に塗られたマス目が与えられます。
マス目の状態は $A_{11}$から $A_{HW}$の $HW$個の文字で表されており、
上から $i$行目、左から $j$列目にあるマスが黒色のとき $A_{ij}$は `#`、
上から $i$行目、左から $j$列目にあるマスが白色のとき $A_{ij}$は `.`となっています。
</p>

<p>
すべてのマスが黒色になるまで、以下の操作を繰り返し行います。
</p>

<ul>

<li>
辺を共有して隣接するマスの中に、黒色のマスが一つ以上存在するような白色のマスすべてが黒色になる。
</li>

</ul>

<p>
何回の操作を行うことになるか求めてください。
ただし、最初に与えられるマス目には少なくとも $1$つ黒色のマスが存在します。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≦ H,W ≦ 1000$
</li>

<li>
$A_{ij}$は `#`または `.`
</li>

<li>
与えられるマス目には少なくとも $1$つ黒色のマスが存在する。
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
行われる操作の回数を出力せよ。
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
.#.
...

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
操作を一回行うとマス目の四隅以外が黒色になり、もう一度操作を行うとすべてのマス目が黒色になります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6 6
..#..#
......
#..#..
......
.#....
....#.

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3

</div>

</section>

</div>

</span>

</span>

</div>
