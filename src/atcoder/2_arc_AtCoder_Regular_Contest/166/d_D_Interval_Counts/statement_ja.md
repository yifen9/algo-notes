
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
$x_1 < \cdots < x_N$を満たす正整数 $x_1, \ldots, x_N$および，正整数 $y_1, \ldots, y_N$が与えられます．
</p>

<p>
組 $(M, L_1, R_1, \ldots, L_M, R_M)$であって，以下の条件を全て満たすものを考えます：
</p>

<ul>

<li>
$M$は正整数である．
</li>

<li>
各 $j \ (1\leq j\leq M)$に対して，$L_j, R_j$は $L_j\leq R_j$を満たす整数である．
</li>

<li>
各 $i \ (1\leq i\leq N)$に対して，$L_j\leq x_i\leq R_j$を満たす $j \ (1\leq j\leq M)$がちょうど $y_i$個存在する．
</li>

</ul>

<p>
このような組は必ず存在することが証明できます．そのような組に対する $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace$としてありうる最大値を求めてください．ただし，最大値が存在しない場合には `-1`を出力してください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq 2\times 10^5$
</li>

<li>
$1\leq x_1 < \cdots < x_N \leq 10^9$
</li>

<li>
$1\leq y_i \leq 10^9$
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
入力は以下の形式で標準入力から与えられます．
</p>

<div>

$N$$x_1$$\cdots$$x_N$$y_1$$\cdots$$y_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
条件を満たす組に対する $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace$としてありうる最大値を出力してください．ただし，最大値が存在しない場合には `-1`を出力してください．
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
1 3 5
1 3 1

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
例えば組 $(3, 1, 4, 2, 4, 3, 5)$に対して $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace = 2$が成り立ちます．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3
1 10 100
2 3 2

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
例えば組 $(3, -1000, 10, -1000, 1000, 10, 1000)$に対して $\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace = 990$が成り立ちます．$\min \lbrace R_j-L_j\mid 1\leq j\leq M\rbrace$の最大値は存在しません．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

7
10 31 47 55 68 73 90
3 7 4 6 3 4 4

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

56

</div>

</section>

</div>

</span>

</span>

</div>
