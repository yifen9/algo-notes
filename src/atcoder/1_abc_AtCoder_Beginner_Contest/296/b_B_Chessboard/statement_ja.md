
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<blockquote>

<p>
チェス盤のどこにコマが置かれているか答えてください。
</p>

</blockquote>

<p>
縦 $8$マス、横 $8$マスのグリッドがあります。グリッドの各マスには、次のルールで定められる長さ $2$の文字列の名前がついています。
</p>

<ul>

<li>
左から $1$列目にあるマスの名前の $1$文字目は `a`である。同様に、左から $2,3,\ldots,8$列目にあるマスの名前の $1$文字目は `b`, `c`, `d`, `e`, `f`, `g`, `h`である。
</li>

<li>
下から $1$行目にあるマスの名前の $2$文字目は `1`である。同様に、下から $2,3,\ldots,8$行目にあるマスの名前の $2$文字目は `2`, `3`, `4`, `5`, `6`, `7`, `8`である。
</li>

</ul>

<p>
例えば、グリッドの左下のマスの名前は `a1`、右下のマスの名前は `h1`、右上のマスの名前は `h8`です。
</p>

<p>
グリッドの状態を表す長さ $8$の $8$つの文字列 $S_1,\ldots,S_8$が与えられます。

$S_i$の $j$文字目は、グリッドの上から $i$行目 左から $j$列目のマスにコマが置かれているとき `*`、置かれていないとき `.`であり、$S_1,\ldots,S_8$の中に文字 `*`はちょうど $1$つ存在します。

コマが置かれているマスの名前を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$S_i$は `.`および `*`のみからなる長さ $8$の文字列である
</li>

<li>
$S_1,\ldots,S_8$の中に文字 `*`はちょうど $1$つ存在する。
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

$S_1$$S_2$$S_3$$S_4$$S_5$$S_6$$S_7$$S_8$
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

........
........
........
........
........
........
........
*.......

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

a1

</div>

<p>
問題文中で説明したとおり、グリッドの左下のマスの名前は `a1`です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

........
........
........
........
........
.*......
........
........

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

b3

</div>

</section>

</div>

</span>

</span>

</div>
