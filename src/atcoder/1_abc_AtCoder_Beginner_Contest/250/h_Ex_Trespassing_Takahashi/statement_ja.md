
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
$1$から $N$までの番号がついた $N$個の地点と $M$本の道があります。 $i \, (1 \leq i \leq M)$番目の道は地点 $a_i$と地点 $b_i$を双方向に結んでいて、通過に $c_i$分かかります。すべての地点同士は道を何本か通って行き来出来ます。また、地点 $1,\ldots, K$には家があります。  
</p>

<p>
$i=1,\ldots,Q$に対し、次の問題を解いてください。  
</p>

<blockquote>

<p>
地点 $x_i$の家にいる高橋君が地点 $y_i$の家に移動しようとしている。

高橋君は最後に睡眠を取ってから道の移動にかかった時間が $t_i$分を超えると移動が出来なくなる。

睡眠を取れる場所は家がある地点のみであるが、回数に制限は無い。

高橋君が地点 $x_i$から地点 $y_i$まで移動出来るならば `Yes`と、出来ないならば `No`と出力せよ。
</p>

</blockquote>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq K \leq N \leq 2 \times 10^5$
</li>

<li>
$N-1 \leq M \leq \min (2 \times 10^5, \frac{N(N-1)}{2})$
</li>

<li>
$1 \leq a_i \lt b_i \leq N$
</li>

<li>
$i \neq j$ならば $(a_i,b_i) \neq (a_j,b_j)$
</li>

<li>
$1 \leq c_i \leq 10^9$
</li>

<li>
すべての地点同士は道を何本か通って行き来出来る
</li>

<li>
$1 \leq Q \leq 2 \times 10^5$
</li>

<li>
$1 \leq x_i \lt y_i \leq K$
</li>

<li>
$1 \leq t_1 \leq \ldots \leq t_Q \leq 10^{15}$
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

$N$$M$$K$$a_1$$b_1$$c_1$$\vdots$$a_M$$b_M$$c_M$$Q$$x_1$$y_1$$t_1$$\vdots$$x_Q$$y_Q$$t_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Q$行出力せよ。 $i$行目には、$i$番目の問題に対する出力をせよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6 6 3
1 4 1
4 6 4
2 5 2
3 5 3
5 6 5
1 2 15
3
2 3 4
2 3 5
1 3 12

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

No
Yes
Yes

</div>

<p>
$3$番目の問題において、地点 $1$から地点 $3$に直接向かうと $13$分以上かかります。しかし、 $12$分かけて地点 $2$に移動し、そこにある家で睡眠を取ってから地点 $3$に移動することが出来ます。よって、答えは `Yes`となります。
</p>

</section>

</div>

</span>

</span>

</div>
