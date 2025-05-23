
<div>

<span>

<span>

<p>
配点 : $350$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder社のオフィスは $H$行 $W$列のマス目で表されます。上から $i$行目、左から $j$列目のマスを $(i, j)$と表します。
</p>

<p>
各マスの状態は文字 $S_{i,j}$で表され、 $S_{i,j}$が `#`のときそのマスは壁、`.`のときそのマスは床、`H`のときそのマスは加湿器が置かれた床です。
</p>

<p>
あるマスは、ある加湿器から壁を通らず上下左右に $D$回以下の移動で辿り着ける場合加湿されます。ここで、加湿器が置かれた床のマスは必ず加湿されていることに注意してください。
</p>

<p>
加湿されている床のマスの個数を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq H \leq 1000$
</li>

<li>
$1 \leq W \leq 1000$
</li>

<li>
$0 \leq D \leq H\times W$
</li>

<li>
$S_{i,j}$は `#`または `.`または `H`である $(1 \leq i \leq H, 1 \leq j \leq W)$
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

$H$$W$$D$$S_{1,1}$$S_{1,2}$$\cdots$$S_{1,W}$$S_{2,1}$$S_{2,2}$$\cdots$$S_{2,W}$$\vdots$$S_{H,1}$$S_{H,2}$$\cdots$$S_{H,W}$
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

3 4 1
H...
#..H
.#.#

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
マス $(1,1),(1,2),(1,4),(2,3),(2,4)$の $5$つのマスが加湿されています。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 6 2
##...H
H.....
..H.#.
.HH...
.###..

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

21

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1 6 3
...#..

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
加湿されるマスが存在しない場合もあります。
</p>

</section>

</div>

</span>

</span>

</div>
