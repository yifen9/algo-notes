
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
$1$から $N$までの番号が振られた $N$個の都市と、それらの間を運行する $M$本のバスがあります。$i\ (1 \leq i \leq M)$本目のバスは時刻 $S_i+0.5$に都市 $A_i$を出発し、時刻 $T_i+0.5$に都市 $B_i$に到着します。
</p>

<p>
さて、これら $N$個の都市の間を高橋くんが移動します。高橋くんは、時刻 $t$に都市 $p$にいるとき、以下のように行動します。
</p>

<ol>

<li>
時刻 $t$以降（時刻 $t$ちょうどを含む）に都市 $p$を出発するバスが存在するなら、そのようなバスのうち最も出発時刻が早いものに乗り、他の都市に移動する。
</li>

<li>
そのようなバスが存在しないなら、何もせず都市 $p$に居続ける。
</li>

</ol>

<p>
高橋くんは上記の行動を 2. の状態になるまで繰り返します。$M$本のバスの出発時刻は互いに異なることが保証されるため、高橋くんが乗るバスは常に一意に定まります。また、バスの乗り換えにかかる時間は無視することができます。
</p>

<p>
それでは本題に入りましょう。$Q$個のクエリに答えてください。$i\ (1 \leq i \leq Q)$個目のクエリの内容は以下の通りです。
</p>

<ul>

<li>
高橋くんが時刻 $X_i$に都市 $Y_i$から行動を開始するとき、時刻 $Z_i$にはどの都市にいるか、あるいはどのバスに乗っているか。
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
$1 \leq Q \leq 10^5$
</li>

<li>
$1 \leq A_i,B_i \leq N\ (1 \leq i \leq M)$
</li>

<li>
$A_i \neq B_i\ (1 \leq i \leq M)$
</li>

<li>
$1 \leq S_i \lt T_i \leq 10^9\ (1 \leq i \leq M)$
</li>

<li>
$S_i \neq S_j\ (i \neq j)$
</li>

<li>
$1 \leq X_i \lt Z_i \leq 10^9\ (1 \leq i \leq Q)$
</li>

<li>
$1 \leq Y_i \leq N\ (1 \leq i \leq Q)$
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

$N$$M$$Q$$A_1$$B_1$$S_1$$T_1$$A_2$$B_2$$S_2$$T_2$$\hspace{1.8cm}\vdots$$A_M$$B_M$$S_M$$T_M$$X_1$$Y_1$$Z_1$$X_2$$Y_2$$Z_2$$\hspace{1.2cm}\vdots$$X_Q$$Y_Q$$Z_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Q$行に渡って出力せよ。$i$行目には、 $i$個目のクエリに対する答えを以下の指示にしたがって出力すること。
</p>

<ul>

<li>
高橋くんが時刻 $Z_i$にいずれかのバスに乗っているならば、そのバスの始点、終点となる都市の番号をこの順に空白区切りで出力する。
</li>

<li>
そうでない、すなわち高橋くんが時刻 $Z_i$にいずれかの都市にいるならば、その都市の番号を出力する。
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 2 3
1 2 1 3
2 3 3 5
1 1 5
2 2 3
1 3 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2 3
2
3

</div>

<p>
$1$つ目のクエリにおいて、高橋くんは以下の通りに動きます。
</p>

<ol>

<li>
はじめ、都市 $1$に時刻 $1$にいる。
</li>

<li>
時刻 $1.5$に都市 $1$を出発するバスに乗り、時刻 $3.5$に都市 $2$に到着する。
</li>

<li>
時刻 $3.5$に都市 $2$を出発するバスに乗り、時刻 $5.5$に都市 $3$に到着する。
</li>

<li>
時刻 $5.5$以降に都市 $3$を出発するバスは存在しないため、都市 $3$に（永遠に）居続ける。
</li>

</ol>

<p>
時刻 $5$において、高橋くんは都市 $2$を出発して都市 $3$に到着するバスに乗っています。そのため、「出力」の項に書かれている通り、$2$, $3$を空白区切りで出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

8 10 10
4 3 329982133 872113932
6 8 101082040 756263297
4 7 515073851 793074419
8 7 899017043 941751547
5 7 295510441 597348810
7 2 688716395 890599546
6 1 414221915 748470452
6 4 810915860 904512496
3 1 497469654 973509612
4 1 307142272 872178157
374358788 4 509276232
243448834 6 585993193
156350864 4 682491610
131643541 8 836902943
152874385 6 495945159
382276121 1 481368090
552433623 2 884584430
580376205 2 639442239
108790644 7 879874292
883275610 1 994982498

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4
6 1
4 1
8
6 1
1
2
2
7 2
1

</div>

</section>

</div>

</span>

</span>

</div>
