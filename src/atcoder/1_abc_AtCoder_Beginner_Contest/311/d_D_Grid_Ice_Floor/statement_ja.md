
<div>

<span>

<span>

<p>
配点 : $400$点
</p>

<div>

<section>

### **問題文**

<p>
$N \times M$のグリッドがあり、この上にプレイヤーがいます。

このグリッドの上から $i$行目、左から $j$列目をマス $(i,j)$と書きます。

このグリッドの各マスは 氷 か 岩 であり、その情報は $N$個の長さ $M$の文字列 $S_1,S_2,\dots,S_N$として与えられます。
</p>

<ul>

<li>
もし $S_i$の $j$文字目が `.`なら、マス $(i,j)$は 氷 である。
</li>

<li>
もし $S_i$の $j$文字目が `#`なら、マス $(i,j)$は 岩 である。
</li>

</ul>

<p>
なお、このグリッドの外周 ( $1$行目、 $N$行目、 $1$列目、 $M$列目の全てのマス ) は 岩 です。
</p>

<p>
最初、プレイヤーはマス $(2,2)$の上で停止しています。このマスは 氷 です。

プレイヤーは以下の行動を $0$度以上何度でも行うことができます。
</p>

<ul>

<li>
まず、プレイヤーは上下左右の移動方向を指定する。
</li>

<li>
その後、プレイヤーは岩のマスにぶつかるまでその方向に移動する。厳密には以下の通りである。
<ul>

<li>
もし移動方向に隣接するマスが 氷 なら、そのマスに移動し、同じ方向に移動を継続する。
</li>

<li>
もし移動方向に隣接するマスが 岩 なら、今いるマスに留まり、移動を終了する。
</li>

</ul>

</li>

</ul>

<p>
プレイヤーが触れる (通過または上で停止する) ことができる 氷 の数を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$3 \le N,M \le 200$
</li>

<li>
$S_i$は `#`と `.`からなる長さ $M$の文字列
</li>

<li>
$i=1$または $i=N$または $j=1$または $j=M$であるとき、マス $(i,j)$は 岩
</li>

<li>
マス $(2,2)$は 氷
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

$N$$M$$S_1$$S_2$$\vdots$$S_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを整数として出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6 6
######
#....#
#.#..#
#..#.#
#....#
######

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

12

</div>

<p>
例えばマス $(5,5)$には以下のように移動することで上で停止することができます。
</p>

<ul>

<li>
$(2,2) \rightarrow (5,2) \rightarrow (5,5)$
</li>

</ul>

<p>
例えばマス $(2,4)$には以下のように移動することで通過することができます。
</p>

<ul>

<li>
$(2,2) \rightarrow (2,5)$の移動中に $(2,4)$を通過する。
</li>

</ul>

<p>
例えばマス $(3,4)$は通過することも上で停止することもできません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

21 25
#########################
#..............###...####
#..............#..#...###
#........###...#...#...##
#........#..#..#........#
#...##...#..#..#...#....#
#..#..#..###...#..#.....#
#..#..#..#..#..###......#
#..####..#..#...........#
#..#..#..###............#
#..#..#.................#
#........##.............#
#.......#..#............#
#..........#....#.......#
#........###...##....#..#
#..........#..#.#...##..#
#.......#..#....#..#.#..#
##.......##.....#....#..#
###.............#....#..#
####.................#..#
#########################

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

215

</div>

</section>

</div>

</span>

</span>

</div>
