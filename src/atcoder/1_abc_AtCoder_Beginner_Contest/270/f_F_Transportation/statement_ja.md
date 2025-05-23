
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder 国には $N$個の島があり、
最初、どの島にも空港・港はなく、どの島の間にも道路はありません。
王である高橋君はこれらの島の間に交通手段を用意することにしました。
具体的には、高橋君は次の操作のうち $1$つを選んで行うことを好きなだけ繰り返す事ができます。
</p>

<ul>

<li>
$1\leq i\leq N$をみたす $i$を選び、コスト $X_i$を払って、島 $i$に空港を建設する。
</li>

<li>
$1\leq i\leq N$をみたす $i$を選び、コスト $Y_i$を払って、島 $i$に港を建設する。
</li>

<li>
$1\leq i\leq M$をみたす $i$を選び、コスト $Z_i$を払って、島 $A_i$と島 $B_i$の間を双方向に結ぶ道路を建設する。
</li>

</ul>

<p>
高橋君の目標は、任意の相異なる $2$つの島 $U$, $V$について、
島 $U$からはじめて次の行動のうち $1$つを選んで行うことを好きなだけ繰り返す事で、
島 $V$に到達することができるようにする事です。
</p>

<ul>

<li>
島 $S,T$の両方に空港がある時、島 $S$から島 $T$まで移動する。
</li>

<li>
島 $S,T$の両方に港がある時、島 $S$から島 $T$まで移動する。
</li>

<li>
島 $S,T$を結ぶ道路が存在する時、島 $S$から島 $T$まで移動する。
</li>

</ul>

<p>
高橋君が目標を達成するのに必要な最小コストを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 2\times 10^5$
</li>

<li>
$1 \leq M \leq 2\times 10^5$
</li>

<li>
$1\leq X_i\leq 10^9$
</li>

<li>
$1\leq Y_i\leq 10^9$
</li>

<li>
$1\leq A_i<B_i\leq N$
</li>

<li>
$1\leq Z_i\leq 10^9$
</li>

<li>
$i\neq j$ならば $(A_i,B_i)\neq (A_j,B_j)$
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

$N$$M$$X_1$$X_2$$\ldots$$X_N$$Y_1$$Y_2$$\ldots$$Y_N$$A_1$$B_1$$Z_1$$A_2$$B_2$$Z_2$$\vdots$$A_M$$B_M$$Z_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君が目標を達成するのに必要な最小コストを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 2
1 20 4 7
20 2 20 3
1 3 5
1 4 6

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

16

</div>

<p>
高橋君は次のように交通手段を建設します。
</p>

<ul>

<li>
コスト $X_1=1$を払って、島 $1$に空港を建設する。
</li>

<li>
コスト $X_3=4$を払って、島 $3$に空港を建設する。
</li>

<li>
コスト $Y_2=2$を払って、島 $2$に港を建設する。
</li>

<li>
コスト $Y_4=3$を払って、島 $4$に港を建設する。
</li>

<li>
コスト $Z_2=6$を払って、島 $1$と島 $4$の間を結ぶ道路を建設する。
</li>

</ul>

<p>
このとき、目標は達成されており、かかったコストは $16$となります。
コスト $15$以下で目標を達成する方法はないため、$16$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 1
1 1 1
10 10 10
1 2 100

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3

</div>

<p>
空港・港・道路のうち、一度も建設されないものがあっても構いません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

7 8
35 29 36 88 58 15 25
99 7 49 61 67 4 57
2 3 3
2 5 36
2 6 89
1 6 24
5 7 55
1 3 71
3 4 94
5 6 21

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

160

</div>

</section>

</div>

</span>

</span>

</div>
