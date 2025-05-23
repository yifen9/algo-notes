
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
$N$行 $N$列からなる盤面があります．
</p>

<p>
以下の条件をすべて満たすように，すべてのマスを白か黒で塗ってください．
</p>

<ul>

<li>
各行について，その行のマスのうちちょうど $3$個が黒く塗られている．
</li>

<li>
各列について，その列のマスのうちちょうど $3$個が黒く塗られている．
</li>

<li>
黒いマスからなる連結成分の個数がちょうど $N$個である．
ここで，ある $2$つの黒いマス $x,y$が連結であるとは，$x$からスタートし，上下左右の黒いマスに移動することを繰り返し，$y$に到達できることを意味する．
</li>

</ul>

<p>
なお，問題の制約より，必ず解が存在することが証明できます．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$6 \leq N \leq 500$
</li>

<li>
入力される値はすべて整数である
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
入力は以下の形式で標準入力から与えられる．
</p>

<div>

$N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを以下の形式で出力せよ．
</p>

<div>

$s_{1,1}s_{1,2}\cdots s_{1,N}$$s_{2,1}s_{2,2}\cdots s_{2,N}$$\vdots$$s_{N,1}s_{N,2}\cdots s_{N,N}$
</div>

<p>
ここで，$s_{i,j}$は，上から $i$行目，左から $j$列目のマスを塗る色を表す文字であり，
$s_{i,j}=$`#`のときはそのマスを黒く，$s_{i,j}=$`.`のときはそのマスを白く塗ることを意味する．
答えが複数存在する場合，どれを出力しても正解とみなされる．
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

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

##..#.
##..#.
..##.#
..##.#
##...#
..###.

</div>

<p>
各行，各列にある `#`の個数はちょうど $3$です．
また，`#`からなる連結成分の個数はちょうど $6$です．
</p>

</section>

</div>

</span>

</span>

</div>
