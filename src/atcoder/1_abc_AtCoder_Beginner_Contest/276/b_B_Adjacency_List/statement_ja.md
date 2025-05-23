
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
$1, \dots, N$と番号付けられた $N$個の都市と、都市間を結ぶ $M$本の道路があります。

$i \, (1 \leq i \leq M)$番目の道路は都市 $A_i$と都市 $B_i$を結んでいます。
</p>

<p>
以下の指示に従い、$N$行にわたって出力してください。
</p>

<ul>

<li>
都市 $i \, (1 \leq i \leq N)$と道路で直接結ばれた都市が $d_i$個あるとし、それらを
<strong>
昇順
</strong>
に都市 $a_{i, 1}, \dots, a_{i, d_i}$とおく。
</li>

<li>
$i \, (1 \leq i \leq N)$行目には、$d_i + 1$個の整数 $d_i, a_{i, 1}, \dots, a_{i, d_i}$を、この順番で空白区切りで出力せよ。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 10^5$
</li>

<li>
$1 \leq M \leq 10^5$
</li>

<li>
$1 \leq A_i \lt B_i \leq N \, (1 \leq i \leq M)$
</li>

<li>
$(i \neq j)$ならば $(A_i, B_i) \neq (A_j, B_j)$
</li>

<li>
入力される値は全て整数
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

$N$$M$$A_1$$B_1$$\vdots$$A_M$$B_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
問題文の指示に従い、$N$行にわたって出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6 6
3 6
1 3
5 6
2 5
1 2
1 6

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3 2 3 6
2 1 5
2 1 6
0
2 2 6
3 1 3 5

</div>

<p>
都市 $1$と道路で直接結ばれているのは都市 $2, 3, 6$です。よって、$d_1 = 3, a_{1, 1} = 2, a_{1, 2} = 3, a_{1, 3} = 6$であるので、$1$行目には $3, 2, 3, 6$をこの順番で空白区切りで出力します。
</p>

<p>
$a_{i, 1}, \dots, a_{i, d_i}$は昇順に並んでいなければならないことに注意してください。例えば、$1$行目に $3, 3, 2, 6$をこの順番で出力した場合、不正解となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 10
1 2
1 3
1 4
1 5
2 3
2 4
2 5
3 4
3 5
4 5

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4 2 3 4 5
4 1 3 4 5
4 1 2 4 5
4 1 2 3 5
4 1 2 3 4

</div>

</section>

</div>

</span>

</span>

</div>
