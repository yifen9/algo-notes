
<div>

<span>

<span>

<p>
配点 : $475$点
</p>

<div>

<section>

### **問題文**

<p>
$H$行 $W$列のグリッドがあります。
上から $i$行目、左から $j$列目のマス目を $(i,j)$と表します。
グリッドの各マスはスタートマス、ゴールマス、空マス、壁マス、お菓子マスのいずれかです。
$(i,j)$が何のマスであるかは文字 $A_{i,j}$によって表され、$A_{i,j}=$`S`のときスタートマス、
$A_{i,j}=$`G`のときゴールマス、
$A_{i,j}=$`.`のとき空マス、
$A_{i,j}=$`#`のとき壁マス、
$A_{i,j}=$`o`のときお菓子マスです。
ここで、スタートマスとゴールマスはちょうど $1$つずつあり、お菓子マスは 
<strong>
$18$個以下
</strong>
であることが保証されます。
</p>

<p>
高橋くんは現在スタートマスにいます。
高橋くんは、上下左右に隣接するマスであって壁マスでないマスに移動することを繰り返し行えます。
高橋くんは今から $T$回以下の移動によってゴールマスに到達したいです。
そのようなことは可能かどうか判定してください。
可能な場合は、最終的にゴールマスにいるという条件のもとで、移動の途中に訪れるお菓子マスの数の最大値を求めてください。
ただし、$1$つのお菓子マスに複数回訪れた場合でも、カウントするのは $1$回のみです。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq H,W \leq 300$
</li>

<li>
$1 \leq T \leq 2\times 10^6$
</li>

<li>
$H,W,T$は整数
</li>

<li>
$A_{i,j}$は `S`, `G`, `.`, `#`, `o`のいずれか
</li>

<li>
$A_{i,j}=$`S`を満たす $(i,j)$の組がちょうど $1$つ存在する
</li>

<li>
$A_{i,j}=$`G`を満たす $(i,j)$の組がちょうど $1$つ存在する
</li>

<li>
$A_{i,j}=$`o`を満たす $(i,j)$の組は 
<strong>
$18$個以下
</strong>

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

$H$$W$$T$$A_{1,1}A_{1,2}\dots A_{1,W}$$\vdots$$A_{H,1}A_{H,2}\dots A_{H,W}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$回以下の移動によってゴールマスに到達することが不可能ならば `-1`を出力せよ。
可能ならば、最終的にゴールマスにいるという条件のもとで、移動の途中に訪れるお菓子マスの数の最大値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 3 5
S.G
o#o
.#.

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1

</div>

<p>
$(1,1) \rightarrow (1,2) \rightarrow (1,3) \rightarrow (2,3) \rightarrow (1,3)$と $4$回移動すると、
$1$個のお菓子マスを訪れた上で最終的にゴールマスにいることができます。
$5$回以下の移動で $2$個のお菓子マスを訪れた上で最終的にゴールマスにいることはできないので、$1$が答えです。
</p>

<p>
なお、$(1,1) \rightarrow (2,1) \rightarrow (1,1) \rightarrow (1,2) \rightarrow (1,3) \rightarrow (2,3)$と移動すると $5$回の移動で $2$個のお菓子マスを訪れることができますが、最終的にゴールマスにいないため無効であることに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 3 1
S.G
.#o
o#.

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

-1

</div>

<p>
$1$回以下の移動でゴールマスに到達することはできません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5 10 2000000
S.o..ooo..
..o..o.o..
..o..ooo..
..o..o.o..
..o..ooo.G

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

18

</div>

</section>

</div>

</span>

</span>

</div>
