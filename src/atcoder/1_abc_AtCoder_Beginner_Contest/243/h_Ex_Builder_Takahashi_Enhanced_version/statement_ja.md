
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
縦横 $H \times W$マスのグリッドがあります。上から $i$行目、左から $j$列目のマスを $(i,j)$と表します。

各マスの状態は $C_{i,j}$で表されます。各マスの状態は次の $4$つのいずれかです。
</p>

<ul>

<li>
`S`: スタート地点。グリッド上にちょうど $1$つだけ存在する。
</li>

<li>
`G`: ゴール地点。グリッド上にちょうど $1$つだけ存在する。
</li>

<li>
`.`: 壁を建ててよいマス。
</li>

<li>
`O`: 壁を建ててはいけないマス。
</li>

</ul>

<p>
青木君はスタート地点を出発してグリッド上を移動してゴール地点へ行こうとしています。青木君は $(i,j)$にいるときにマス $(i+1,j),(i,j+1),(i-1,j),(i,j-1)$のいずれかに移動することができます。ただし、グリッドの外に出るような移動や、壁があるマスへの移動を行うことはできません。
</p>

<p>
高橋君は、青木君が移動を開始する前に壁を建ててよいマスを $1$マス以上選んで壁を建てることで、青木君がどのように移動してもゴール地点へ行くことができないようにすることにしました。ただし、スタート地点およびゴール地点は選ぶことができません。  
</p>

<p>
高橋君は青木君がゴールできないように壁を建てることができますか？さらに、壁を建てられる場合は
</p>

<ul>

<li>
青木君がゴールできないように壁を建てるときの最小枚数 $n$、および
</li>

<li>
最小枚数を達成する壁の立て方が何通りあるかを $998244353$で割ったあまり $r$
</li>

</ul>

<p>
の $2$つも合わせて計算してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq H \leq 100$
</li>

<li>
$2 \leq W \leq 100$
</li>

<li>
$C_{i,j}$は `S`, `G`, `.`, `O`のいずれかである。
</li>

<li>
`S`, `G`は $C_{i,j}$の中でちょうど $1$回だけ登場する。
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

$H$$W$$C_{1,1}$$C_{1,2}$$\dots$$C_{1,W}$$C_{2,1}$$C_{2,2}$$\dots$$C_{2,W}$$\vdots$$C_{H,1}$$C_{H,2}$$\dots$$C_{H,W}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
青木君がゴールできないように壁を建てられる場合は、文字列 `Yes`、および問題文中で定義された整数 $n$, $r$を以下の形式で出力せよ。
</p>

<div>

Yes
$n$$r$
</div>

<p>
そうでない場合は `No`を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 3
S..
O..
..O
..G

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes
3 6

</div>

<p>
壁を建てるマスを `#`で表すと、最小枚数を達成する壁の建て方は次の $6$通りとなります。
</p>

<div>

S#.  S.#  S..  S..  S..  S..
O#.  O#.  O##  O.#  O.#  O.#
#.O  #.O  #.O  ##O  .#O  .#O
..G  ..G  ..G  ..G  #.G  .#G

</div>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 2
.G
.O
.S

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

No

</div>

<p>
高橋君がどのように壁を建てても青木君はゴール地点へ行くことができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

2 2
S.
.G

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

Yes
2 1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

10 10
OOO...OOO.
.....OOO.O
OOO.OO.OOO
OOO..O..S.
....O.O.O.
.OO.O.OOOO
..OOOG.O.O
.O.O..OOOO
.O.O.OO...
...O..O..O

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

Yes
10 12

</div>

</section>

</div>

</span>

</span>

</div>
