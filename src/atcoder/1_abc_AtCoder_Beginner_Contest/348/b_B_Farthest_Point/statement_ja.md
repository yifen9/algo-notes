
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
$xy$平面上に $1$から $N$までの番号が付いた $N$個の点があります。点 $i$は座標 $(X_i, Y_i)$にあり、相異なる $2$点の座標は異なります。
</p>

<p>
各点について、その点からの距離が最大である点を求めてその点の番号を出力してください。
ただし、距離が最大である点が複数ある場合はその中で最も番号が小さい点の番号を出力してください。
</p>

<p>
ここで、距離はユークリッド距離、すなわち $2$点 $(x_1,y_1)$と $(x_2,y_2)$に対し、この $2$点間の距離が $\sqrt{(x_1-x_2)^{2}+(y_1-y_2)^{2}}$であるものとして定められています。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 100$
</li>

<li>
$-1000 \leq X_i, Y_i \leq 1000$
</li>

<li>
$i \neq j$ならば $(X_i, Y_i) \neq (X_j, Y_j)$
</li>

<li>
入力は全て整数である。
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

$N$$X_1$$Y_1$$X_2$$Y_2$$\vdots$$X_N$$Y_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$N$行出力せよ。$i$行目には点 $i$からの距離が最大である点の番号を出力せよ。
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
0 0
2 4
5 0
3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3
3
1
1

</div>

<p>
以下の図のように点が並んでいます。ここで $P_i$は点 $i$を表します。

<img src="https://img.atcoder.jp/abc348/74796471c6f7ac6134b3b2aa014eea96.png">

</img>
点 $1$からの距離が最大である点は点 $3,4$で、その中で番号が小さいのは点 $3$です。
</p>

<p>
点 $2$からの距離が最大である点は点 $3$です。
</p>

<p>
点 $3$からの距離が最大である点は点 $1,2$で、その中で番号が小さいのは点 $1$です。
</p>

<p>
点 $4$からの距離が最大である点は点 $1$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6
3 2
1 6
4 5
1 3
5 5
9 8

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

6
6
6
6
6
4

</div>

</section>

</div>

</span>

</span>

</div>
