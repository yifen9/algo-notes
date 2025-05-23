
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
$xy$平面上に $N$個の多角形があります。

これらの多角形は、全ての辺が $x$軸または $y$軸に平行で、全ての角が $90$度または $270$度で、かつ単純です。

$i$個目の多角形は $M_i$個の頂点からなり、$j$番目の頂点は $(x_{i, j}, y_{i, j})$です。

多角形の辺は $j$番目の頂点と $j+1$番目の頂点を結んでできる線分です(ただし $M_i+1$番目の頂点は $1$番目の頂点とします)。  
</p>

<details>

<summary>
多角形が単純とは
</summary>

<p>
連続しないどの $2$辺も共通部分を持たない(すなわち交差も接触もしない)とき、その多角形を単純といいます。

</p>

</details>

<p>
$Q$個のクエリが与えられます。
$i = 1, 2, \dots, Q$について、$i$個目のクエリは以下の通りです。
</p>

<ul>

<li>
$N$個の多角形のうち、点 $(X_i + 0.5, Y_i + 0.5)$を内部に含むものはいくつありますか？ 
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 10^5$
</li>

<li>
$4 \leq M_i \leq 10^5$
</li>

<li>
$M_i$は偶数
</li>

<li>
$\sum_i M_i \leq 4 \times 10^5$
</li>

<li>
$0 \leq x_{i, j}, y_{i, j} \leq 10^5$
</li>

<li>
$j \neq k$ならば $(x_{i, j}, y_{i, j}) \neq (x_{i, k}, y_{i, k})$
</li>

<li>
$j = 1, 3, \dots M_i-1$について、$x_{i, j} = x_{i, j+1}$
</li>

<li>
$j = 2, 4, \dots M_i$について、$y_{i, j} = y_{i, j+1}$(ただし、$y_{i, M_i +1} = y_{i, 1}$とする)
</li>

<li>
与えられる多角形は単純
</li>

<li>
$1 \leq Q \leq 10^5$
</li>

<li>
$0 \leq X_i, Y_i \lt 10^5$
</li>

<li>
入力は全て整数
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

$N$$M_1$$x_{1, 1}$$y_{1, 1}$$x_{1, 2}$$y_{1, 2}$$\dots$$x_{1, M_1}$$y_{1, M_1}$$M_2$$x_{2, 1}$$y_{2, 1}$$x_{2, 2}$$y_{2, 2}$$\dots$$x_{2, M_2}$$y_{2, M_2}$$\vdots$$M_N$$x_{N, 1}$$y_{N, 1}$$x_{N, 2}$$y_{N, 2}$$\dots$$x_{N, M_N}$$y_{N, M_N}$$Q$$X_1$$Y_1$$X_2$$Y_2$$\vdots$$X_Q$$Y_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Q$行出力せよ。

$i$行目には、$i$個目のクエリに対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3
4
1 2 1 4 3 4 3 2
4
2 5 2 3 5 3 5 5
4
5 6 5 5 3 5 3 6
3
1 4
2 3
4 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

0
2
1

</div>

<p>

<img src="https://img.atcoder.jp/ghi/5fccf008dddd93f10ebfc7f13d04a0e0.png">

</img>


異なる多角形同士は、交差したり接触したりする可能性があることに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2
4
12 3 12 5 0 5 0 3
12
1 1 1 9 10 9 10 0 4 0 4 6 6 6 6 2 8 2 8 7 2 7 2 1
4
2 6
4 4
6 3
1 8

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0
2
1
1

</div>

<p>

<img src="https://img.atcoder.jp/ghi/1c97f791a2aadcf5637b1f10736fb820.png">

</img>


多角形は単純ですが、凸多角形とは限りません。
</p>

</section>

</div>

</span>

</span>

</div>
