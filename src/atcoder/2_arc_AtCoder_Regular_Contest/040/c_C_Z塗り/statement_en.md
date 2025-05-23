
<div>

<div>

<div>

<section>

### **問題文**

<p>
イカの高橋君は床を塗るのが大好きです。床は $N \times N$のマス目状に区切られており、すでにいくつかのマスは塗られています。$i$行目 $j$列目のマスをマス $(i,j)$と呼ぶことにします。高橋君は特殊なインク発射装置を用いて床を塗ろうとしています。この装置を使うと、以下のように床を塗ることができます。
</p>

<ul>

<li>
任意の整数 $r, c$を入力して装置のボタンを押すと、「$i = r$かつ $j ≦ c$」または「$i = r+1$かつ $j ≧ c$」を満たすようなすべてのマス $(i,j)$を塗ることができる。
</li>

</ul>

<p>
高橋君は、全てのマスをこの装置で塗ろうと思っています。このとき、装置を使う必要のある回数の最小値を求めてください。
</p>

</section>

</div>

---

<div>

<div>

<section>

### **入力**

<p>
入力はイカの形式で標準入力から与えられる。
</p>

<div>

$N$$S_1$$S_2$:
$S_N$
</div>

<ul>

<li>
$1$行目には、マス目の $1$辺の個数を表す整数 $N (1 ≦ N ≦ 100)$が与えられる。
</li>

<li>
$2$行目からの $N$行には、マス目の情報が与えられる。このうち $i (1 ≦ i ≦ N)$行目には、長さ $N$の文字列 $S_i$が与えられる。このうち $j (1 ≦ j ≦ N)$文字目は、マス $(i,j)$の情報を以下のように表す。
		
<ul>

<li>
`.`の場合：このマスがまだ塗られていないことを表す。
</li>

<li>
`o`の場合：このマスがすでに塗られていることを表す。
</li>

</ul>

</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
装置を使う回数の最小値を $1$行に出力せよ。出力の末尾に改行を入れること。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

<div>

7
...oooo
oo.....
ooooooo
ooooooo
.....oo
oooo...
ooooooo

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

2

</div>

<p>
インク発射装置はこの入力のような形を綺麗に塗ることができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

4
.oo.
..oo
o..o
oo..

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

3

</div>

</section>

</div>

---

<div>

<section>

### **入力例3**

<div>

1
o

</div>

</section>

</div>

<div>

<section>

### **出力例3**

<div>

0

</div>

<p>
はじめから全て塗られていることもあります。
</p>

</section>

</div>

</div>

</div>
