
<div>

<span>

<span>

<p>
配点 : $900$点
</p>

<div>

<section>

### **問題文**

<p>
マス $1$、マス $2$、$\ldots$、マス $N$の $N$個のマスがあり、各マスは赤と青のどちらかの色で塗られています。
各マスの色は、`R`と `B`のみからなる長さ $N$の文字列 $S$によって表され、具体的には $i = 1, 2, \ldots, N$についてマス $i$は、$S$の $i$文字目が `R`のとき赤で、`B`のとき青で塗られています。
また、マス $N$は必ず青で塗られています。
</p>

<p>
はじめ、各マスに $1$枚ずつ、マスの色と同じ色のチップが置かれています。
</p>

<p>
各 $i = 1, 2, \ldots, N-1$についてこの順番で下記の操作を行います。
</p>

<ul>

<li>
$i \lt j \leq N$かつ マス $j$が
<strong>
青で
</strong>
塗られているような整数 $j$を選び、マス $i$にあるチップの山を、チップの上下の位置関係を維持したまま、マス $j$にあるチップの山の上に重ねる。
</li>

</ul>

<p>
上記の手順を行った後にマス $N$にできる $N$枚のチップからなる山の、各チップの色を山の上のものから順に並べた列としてあり得るものの個数を $998244353$で割った余りを出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 300$
</li>

<li>
$N$は整数
</li>

<li>
$S$は `R`と `B`のみからなる長さ $N$の文字列
</li>

<li>
$S$の $N$文字目は `B`
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

$N$$S$
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

4
RBRB

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
山の各チップの色を山の上のものから順に並べた列を、赤と青に対応する文字 `R`と `B`からなる文字列で表すことにします。
特に、$0$枚のチップからなる山の各チップの色を並べた列は、空文字列 $\varepsilon$です。
</p>

<p>
また、マス $1, 2, 3, 4$の山の各チップの色を山の上のものから順に並べた列がそれぞれ $S_1, S_2, S_3, S_4$である状態を、状態 $(S_1, S_2, S_3, S_4)$と呼ぶことにします。
</p>

<p>
下記の手順を行うと、その後にマス $4$にできる山の各チップの色を山の上のものから順に並べた列として、`RRBB`が得られます。
</p>

<ul>

<li>
まず、各マスに $1$枚ずつ、マスの色と同じ色のチップを置く。その結果、状態 $($`R`$, $`B`$, $`R`$, $`B`$)$になる。
</li>

<li>
マス $1$にある山を、マス $2$にある山の上に重ねる。その結果、状態 $(\varepsilon, $`RB`$, $`R`$, $`B`$)$になる。
</li>

<li>
マス $2$にある山を、マス $4$にある山の上に重ねる。その結果、状態 $(\varepsilon, \varepsilon, $`R`$, $`RBB`$)$になる。
</li>

<li>
マス $3$にある山を、マス $4$にある山の上に重ねる。その結果、状態 $(\varepsilon, \varepsilon, \varepsilon, $`RRBB`$)$になる。
</li>

</ul>

<p>
また、下記の手順を行うと、その後にマス $4$にできる山の各チップの色を山の上のものから順に並べた列として、`RBRB`が得られます。
</p>

<ul>

<li>
まず、各マスに $1$枚ずつ、マスの色と同じ色のチップを置く。その結果、状態 $($`R`$, $`B`$, $`R`$, $`B`$)$になる。
</li>

<li>
マス $1$にある山を、マス $4$にある山の上に重ねる。その結果、状態 $(\varepsilon, $`B`$, $`R`$, $`RB`$)$になる。
</li>

<li>
マス $2$にある山を、マス $4$にある山の上に重ねる。その結果、状態 $(\varepsilon, \varepsilon, $`R`$, $`BRB`$)$になる。
</li>

<li>
マス $3$にある山を、マス $4$にある山の上に重ねる。その結果、状態 $(\varepsilon, \varepsilon, \varepsilon, $`RBRB`$)$になる。
</li>

</ul>

<p>
問題中の手順を行った後にマス $4$にできる山の、各チップの色を山の上のものから順に並べた列としてあり得るものは、上記の `RRBB`と `RBRB`の $2$個のみです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

20
RRBRRRBBRBBBBRBRBRBB

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

92378

</div>

</section>

</div>

</span>

</span>

</div>
