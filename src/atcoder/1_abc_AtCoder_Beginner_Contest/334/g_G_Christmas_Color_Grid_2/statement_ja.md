
<div>

<span>

<span>

<p>
配点 : $650$点
</p>

<div>

<section>

### **問題文**

<p>

<strong>
この問題は問題 E と似た設定です。問題文の相違点を赤字で示します。
</strong>

</p>

<p>
$H$行 $W$列のグリッドがあり、グリッドの各マスは赤色あるいは緑色に塗られています。
</p>

<p>
グリッドの上から $i$行目、左から $j$列目のマスをマス $(i,j)$と表記します。
</p>

<p>
マス $(i,j)$の色は文字 $S_{i,j}$で表され、$S_{i,j} =$`.`のときマス $(i,j)$は赤色、$S_{i,j} =$`#`のときマス $(i,j)$は緑色に塗られています。
</p>

<p>
グリッドにおいて、緑色に塗られたマスを頂点集合、隣り合った $2$つの緑色のマスを結ぶ辺全体を辺集合としたグラフにおける連結成分の個数を 
<strong>
緑の連結成分数
</strong>
と呼びます。ただし、$2$つのマス $(x,y)$と $(x',y')$が隣り合っているとは、$|x-x'| + |y-y'| = 1$であることを指します。
</p>

<p>

<span>

<strong>
緑色
</strong>

</span>
に塗られたマスを一様ランダムに $1$つ選び、
<span>

<strong>
赤色
</strong>

</span>
に塗り替えたとき、塗り替え後のグリッドの緑の連結成分数の期待値を $\text{mod } 998244353$で出力してください。
</p>

<details>

<summary>
「期待値を $\text{mod } 998244353$で出力」とは
</summary>
求める期待値は必ず有理数となることが証明できます。
またこの問題の制約下では、その値を互いに素な $2$つの整数 $P$, $Q$を用いて $\frac{P}{Q}$と表したとき、 $R \times Q \equiv P\pmod{998244353}$かつ $0 \leq R \lt 998244353$を満たす整数 $R$がただ $1$つ存在することが証明できます。この $R$を出力してください。 

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq H,W \leq 1000$
</li>

<li>
$S_{i,j} =$`.`または $S_{i,j} =$`#`
</li>

<li>
$S_{i,j} =$`#`なる $(i,j)$が存在する。
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

$H$$W$$S_{1,1}$$S_{1,2}$$\ldots$$S_{1,W}$$S_{2,1}$$S_{2,2}$$\ldots$$S_{2,W}$$\vdots$$S_{H,1}$$S_{H,2}$$\ldots$$S_{H,W}$
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

3 3
##.
#.#
#..

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

598946614

</div>

<p>
マス $(1,1)$を赤色に塗り替えたとき、緑の連結成分数は $3$となります。
</p>

<p>
マス $(1,2)$を赤色に塗り替えたとき、緑の連結成分数は $2$となります。
</p>

<p>
マス $(2,1)$を赤色に塗り替えたとき、緑の連結成分数は $3$となります。
</p>

<p>
マス $(2,3)$を赤色に塗り替えたとき、緑の連結成分数は $1$となります。
</p>

<p>
マス $(3,1)$を赤色に塗り替えたとき、緑の連結成分数は $2$となります。
</p>

<p>
よって、緑色に塗られたマスを一様ランダムに $1$つ選び、赤色に塗り替えた後の緑の連結成分数の期待値は $(3+2+3+1+2)/5 =11/5$となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 5
..#..
.###.
#####
..#..

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

199648872

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

3 4
#...
.#.#
..##

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

399297744

</div>

</section>

</div>

</span>

</span>

</div>
