
<div>

<span>

<span>

<p>
配点：$400$点
</p>

<div>

<section>

### **問題文**

<p>
縦 $H$マス, 横 $W$マスに広がるマス目があり, 各マスは白または黒で塗られている. 上から $i$番目で左から $j$番目のマスを $(i, j)$で表す.
すぬけ君は, このマス目を使って次のようなゲームをしたい. ゲームの開始時点ではマス $(1, 1)$にゲームキャラクター「けぬす君」がいる. プレイヤーはけぬす君を上下左右の $4$方向のいずれかに $1$マスだけ動かすことを繰り返す. けぬす君が白いマスだけを通って $(H, W)$にたどり着けばゲームクリアとなる.

ゲームを開始する前に, すぬけ君はいくつかの白いマス目の色を黒に変えることができる. ただし, マス $(1, 1)$と $(H, W)$の色を変えることはできず, ゲームを開始するまでにすべての色の変更を行わなければならない.

ゲームをクリアしたとき, ゲームの開始前にマスの色を変えた回数がすぬけ君のスコアとなる. そのとき, すぬけ君が取る可能性のある最大のスコアを求めなさい.ただし, すぬけ君がどのようにマス目の色を変えてもけぬす君が $(H, W)$にたどり着くことが出来ない場合、$-1$と出力しなさい.
</p>

<p>
ただし, 各マスの色の情報は文字 $s_{i, j}$として与えられる. マス $(i, j)$が最初白で塗られている場合 $s_{i, j}$は `.`であり, マス $(i, j)$が最初黒で塗られている場合 $s_{i, j}$は `#`である.  
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$H$は $2$以上 $50$以下の整数
</li>

<li>
$W$は $2$以上 $50$以下の整数
</li>

<li>
$s_{i, j}$は `.`または `#`$(1 \leq i \leq H, 1 \leq j \leq W)$
</li>

<li>
$s_{1, 1}, s_{H, W}$は `.`である
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
入力は以下の形式で標準入力から与えられる.
</p>

<div>

$H$$W$$s_{1, 1}s_{1, 2}s_{1, 3} ... s_{1, W}$$s_{2, 1}s_{2, 2}s_{2, 3} ... s_{2, W}$$:$$:$$s_{H, 1}s_{H, 2}s_{H, 3} ... s_{H, W}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
すぬけ君が取る可能性のある最大のスコアを出力しなさい.
ただし, すぬけ君がどのようにマス目の色を変えてもけぬす君が $(H, W)$にたどり着くことが出来ない場合、$-1$と出力しなさい.
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
..#
#..
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
下の図のようにマス目の色を変えれば, スコア $2$を達成できます.


<img src="https://img.atcoder.jp/abc088/bc944898899615e35f898654b68cd517.png">

</img>

</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10 37
.....................................
...#...####...####..###...###...###..
..#.#..#...#.##....#...#.#...#.#...#.
..#.#..#...#.#.....#...#.#...#.#...#.
.#...#.#..##.#.....#...#.#.###.#.###.
.#####.####..#.....#...#..##....##...
.#...#.#...#.#.....#...#.#...#.#...#.
.#...#.#...#.##....#...#.#...#.#...#.
.#...#.####...####..###...###...###..
.....................................

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

209

</div>

</section>

</div>

</span>

</span>

</div>
