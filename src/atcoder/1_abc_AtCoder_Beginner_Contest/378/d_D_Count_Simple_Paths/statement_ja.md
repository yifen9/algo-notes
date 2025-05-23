
<div>

<span>

<span>

<p>
配点 : $425$点
</p>

<div>

<section>

### **問題文**

<p>
$H$行 $W$列のマス目があります。マス目の上から $i$番目、左から $j$番目のマスをマス $(i,j)$と表記します。
</p>

<p>
マス $(i,j)$は $S_{i,j}$が `.`のとき空きマスであり、`#`のとき障害物があります。
</p>

<p>
ある空きマスを出発し、上下左右に隣接するマスへの移動を $K$回行う方法であって、障害物のあるマスを通らず、同じマスを $2$回以上通らないようなものの個数を数えてください。
</p>

<p>
具体的には、長さ $K+1$の列 $((i_0,j_0),(i_1,j_1),\dots,(i_K,j_K))$であって、以下を満たすものの個数を数えてください。
</p>

<ul>

<li>
各 $0 \leq k \leq K$について、 $1 \leq i_k \leq H, 1 \leq j_k \leq W$かつ $S_{i_k,j_k}$は `.`である
</li>

<li>
各 $0 \leq k \leq K-1$について、 $|i_{k+1}-i_k| + |j_{k+1}-j_k| = 1$
</li>

<li>
各 $0 \leq k < l \leq K$について、 $(i_k,j_k)\neq (i_l,j_l)$である
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq H,W \leq 10$
</li>

<li>
$1 \leq K \leq 11$
</li>

<li>
$H,W,K$は整数
</li>

<li>
$S_{i,j}$は `.`または `#`
</li>

<li>
空きマスが少なくとも $1$つ存在する
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

$H$$W$$K$$S_{1,1}S_{1,2}\dots S_{1,W}$$S_{2,1}S_{2,2}\dots S_{2,W}$$\vdots$$S_{H,1}S_{H,2}\dots S_{H,W}$
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

2 2 2
.#
..

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
可能な経路は、以下の $2$通りです。
</p>

<ul>

<li>
$(1,1) \to (2,1) \to (2,2)$
</li>

<li>
$(2,2) \to (2,1) \to (1,1)$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 3 1
.#.
#.#

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10 10 11
....#..#..
.#.....##.
..#...##..
...#......
......##..
..#......#
#........#
..##......
.###....#.
...#.....#

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

218070

</div>

</section>

</div>

</span>

</span>

</div>
