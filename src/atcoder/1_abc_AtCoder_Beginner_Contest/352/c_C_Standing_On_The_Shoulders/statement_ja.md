
<div>

<span>

<span>

<p>
配点 : $300$点
</p>

<div>

<section>

### **問題文**

<p>
$N$人の巨人がいます。巨人にはそれぞれ $1, 2, \ldots, N$の名前がついており、巨人 $i$が地面に立ったとき、肩の高さは $A_i$、頭の高さは $B_i$となります。
</p>

<p>
あなたは $(1, 2, \ldots, N)$を並べ替えて得られる数列 $(P_1, P_2, \ldots, P_N)$を選び、以下の規則に従って $N$人の巨人を積み上げることができます。
</p>

<ul>

<li>

<p>
まず地面に巨人 $P_1$を立たせる。巨人 $P_1$の肩は地面を基準として $A_{P_1}$、頭は地面を基準として $B_{P_1}$の高さとなる。
</p>

</li>

<li>

<p>
$i = 1, 2, \ldots, N - 1$の順に巨人 $P_i$の肩の上に巨人 $P_{i + 1}$を立たせる。巨人 $P_i$の肩が地面を基準として高さ $t$のとき、巨人 $P_{i + 1}$の肩は地面を基準として $t + A_{P_{i + 1}}$、頭は地面を基準として $t + B_{P_{i + 1}}$の高さとなる。
</p>

</li>

</ul>

<p>
一番上に立っている巨人、すなわち巨人 $P_N$の地面を基準とした頭の高さとして実現できる最大値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq A_i \leq B_i \leq 10^9$
</li>

<li>
入力される値はすべて整数
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

$N$$A_1$$B_1$$A_2$$B_2$$\vdots$$A_N$$B_N$
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

3
4 10
5 8
2 9

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

18

</div>

<p>
$(P_1, P_2, P_3) = (2, 1, 3)$とすると、地面を基準として巨人 $2$は肩の高さが $5$、頭の高さが $8$、巨人 $1$は肩の高さが $9$、頭の高さが $15$、巨人 $3$は肩の高さが $11$、頭の高さが $18$となります。
</p>

<p>
一番上に立っている巨人の頭の高さが地面を基準として $18$より大きくなることはないため $18$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
1 1
1 1
1 1
1 1
1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
690830957 868532399
741145463 930111470
612846445 948344128
540375785 925723427
723092548 925021315
928915367 973970164
563314352 832796216
562681294 868338948
923012648 954764623
691107436 891127278

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

7362669937

</div>

</section>

</div>

</span>

</span>

</div>
