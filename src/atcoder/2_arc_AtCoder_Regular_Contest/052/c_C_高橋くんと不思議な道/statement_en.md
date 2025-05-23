
<div>

<section>

### **問題文**

<p>
町 $0$から町 $N-1$までの $N$個の町があります。

これらは $M$個の双方向に行き来可能な道で結ばれています。



道にはタイプ $A$とタイプ $B$の二種類の道があります。

タイプ $A$の道を通ると、コストが $1$かかります。

タイプ $B$の道を通るとき、コストが (今まで通ったタイプ $B$の道の本数) $+ 1$かかります。



ただし、$i$($1 ≤ i ≤ M$) 本目の道は、町 $A_i$と町 $B_i$を結び、$C_i$が $0$のときはタイプ $A$、$C_i$が $1$のときはタイプ $B$とします。



全ての町において、町 $0$からその町までの移動にかかる最小コストをそれぞれ求めてください。

ただし、町 $0$から到達できない町は存在しないものとします。


</p>

</section>

<section>

### **制約**

<ul>

<li>
与えられる数字はすべて整数
</li>

<li>
$1 ≤ N ≤ 10^4$
</li>

<li>
$1 ≤ M ≤ 10^5$
</li>

<li>
$0 ≤ A_i, B_i ≤ N - 1$
</li>

<li>
$0 ≤ C_i ≤ 1$
</li>

</ul>

</section>

---

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$M$$C_1$$A_1$$B_1$$C_2$$A_2$$B_2$$:$$C_M$$A_M$$B_M$
</div>

</section>

<section>

### **出力**

<p>
出力は $N$行からなる。
$i$行目 ($1 ≤ i ≤ N$)には、町 $0$から町 $i-1$への移動でかかるコストを出力せよ。

</p>

</section>

</div>

---

<section>

### **入力例 1**

<div>

3 3
0 0 1
1 1 2
1 2 0

</div>

</section>

<section>

### **出力例 1**

<div>

0
1
1

</div>

</section>

---

<section>

### **入力例 2**

<div>

7 8
1 0 1
1 1 2
1 2 5
1 5 6
0 1 3
0 3 4
0 4 5
0 2 6

</div>

</section>

<section>

### **出力例 2**

<div>

0
1
3
2
3
4
4

</div>

</section>

---

<section>

### **入力例 3**

<div>

8 9
0 0 1
0 1 2
0 2 3
0 5 6
0 6 7
1 1 3
1 3 4
1 4 5
1 5 7

</div>

</section>

<section>

### **出力例 3**

<div>

0
1
2
2
4
6
7
8

</div>

</section>

</div>
