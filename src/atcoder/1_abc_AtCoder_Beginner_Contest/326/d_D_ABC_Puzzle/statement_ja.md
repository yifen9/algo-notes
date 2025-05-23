
<div>

<span>

<span>

<p>
配点 : $450$点
</p>

<div>

<section>

### **問題文**

<p>
整数 $N$と `A`, `B`, `C`からなる長さ $N$の文字列 $R,C$が与えられるので、以下の問題を解いてください。
</p>

<p>
$N \times N$のマス目があり、最初全てのマスは空きマスです。

各マスに `A`, `B`, `C`のうち高々 $1$文字を書き込みます。( 空きマスのままにすることも許されます )
</p>

<p>
以下の条件を全て満たすことが可能であるか判定し、可能であれば書き込み方を $1$つ出力して下さい。
</p>

<ul>

<li>
各行 / 各列 に `A`, `B`, `C`がちょうど $1$個ずつ含まれる
</li>

<li>
$i$行目に書かれた文字の中で最も左にある文字は $R$の $i$文字目と一致する
</li>

<li>
$i$列目に書かれた文字の中で最も上にある文字は $C$の $i$文字目と一致する
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$N$は $3$以上 $5$以下の整数
</li>

<li>
$R,C$は `A`, `B`, `C`からなる長さ $N$の文字列
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

$N$$R$$C$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
問題文中の条件を満たす書き込み方が存在しない場合、 `No`と $1$行に出力してください。

そうでない場合、以下の形式に従い書き込み方を出力してください。
</p>

<div>

Yes
$A_1$$A_2$$\vdots$$A_N$
</div>

<p>
まず、 $1$行目に `Yes`と出力してください。
続く $N$行のうちの $i$行目に、長さ $N$の文字列である $A_i$を出力してください。
</p>

<ul>

<li>
$A_i$の $j$文字目が `.`であるとき、上から $i$行目、左から $j$列目のマスは空きマスであることを示します。
</li>

<li>
$A_i$の $j$文字目が `A`であるとき、上から $i$行目、左から $j$列目のマスに `A`が書き込まれたことを示します。
</li>

<li>
$A_i$の $j$文字目が `B`であるとき、上から $i$行目、左から $j$列目のマスに `B`が書き込まれたことを示します。
</li>

<li>
$A_i$の $j$文字目が `C`であるとき、上から $i$行目、左から $j$列目のマスに `C`が書き込まれたことを示します。
</li>

</ul>

<p>
正しい書き込み方が複数存在する場合、どれを出力しても構いません。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5
ABCBC
ACAAB

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes
AC..B
.BA.C
C.BA.
BA.C.
..CBA

</div>

<p>
出力例のマス目は以下の条件を全て満たすため、正解として扱われます。
</p>

<ul>

<li>
全ての行に `A`, `B`, `C`がちょうど $1$個ずつ含まれる
</li>

<li>
全ての列に `A`, `B`, `C`がちょうど $1$個ずつ含まれる
</li>

<li>
各行に書かれた最も左の文字は上から順に `A`, `B`, `C`, `B`, `C`である
</li>

<li>
各列に書かれた最も上の文字は左から順に `A`, `C`, `A`, `A`, `B`である
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3
AAA
BBB

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
この入力では、条件を満たす書き込み方は存在しません。
</p>

</section>

</div>

</span>

</span>

</div>
