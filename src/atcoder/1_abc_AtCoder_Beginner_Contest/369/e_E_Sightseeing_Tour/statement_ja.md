
<div>

<span>

<span>

<p>
配点 : $450$点
</p>

<div>

<section>

### **問題文**

<p>
$N$個の島と、$2$つの島の間を双方向に結ぶ $M$本の橋があり、
それぞれ島 $1$, 島 $2$, $\ldots$, 島 $N$および 橋 $1$, 橋 $2$, $\ldots$, 橋 $M$と番号づけられています。

橋 $i$は島 $U_i$と島 $V_i$を相互に結んでおり、どちらの方向に移動するにも $T_i$だけ時間がかかります。

ここで、橋の両端が同一の島であるような橋は存在しませんが、ある $2$つの島の間が $2$本以上の橋で直接繋がれている可能性はあります。

また、どの $2$つの島の間もいくつかの橋をわたって移動することができます。
</p>

<p>
$Q$個の問題が与えられるので、各問題に対する答えを求めてください。$i$番目の問題は次のようなものです。
</p>

<blockquote>

<p>
相異なる $K_i$本の橋、橋 $B_{i,1}$, 橋 $B_{i,2}$, $\ldots$, 橋 $B_{i,K_i}$が与えられます。

これらの橋をすべて $1$回以上わたり、島 $1$から島 $N$まで移動するために必要な時間の最小値を求めてください。

ただし、島 $1$から島 $N$までの移動において、橋をわたって島の間を移動するのにかかる時間以外は無視できるものとします。

また、与えられた橋はどの順で、またどの向きにわたってもかまいません。
</p>

</blockquote>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\leq N \leq 400$
</li>

<li>
$N-1\leq M \leq 2\times 10^5$
</li>

<li>
$1\leq U_i<V_i\leq N$
</li>

<li>
$1\leq T_i\leq 10^9$
</li>

<li>
$1\leq Q\leq 3000$
</li>

<li>
$1\leq K_i\leq 5$
</li>

<li>
$1\leq B_{i,1}<B_{i,2}<\cdots<B_{i,K_i}\leq M$
</li>

<li>
入力はすべて整数
</li>

<li>
どの $2$つの島の間もいくつかの橋をわたって移動することができる。
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

$N$$M$$U_1$$V_1$$T_1$$U_2$$V_2$$T_2$$\vdots$$U_M$$V_M$$T_M$$Q$$K_1$$B_{1,1}$$B_{1,2}$$\cdots$$B_{1,{K_1}}$$K_2$$B_{2,1}$$B_{2,2}$$\cdots$$B_{2,{K_2}}$$\vdots$$K_Q$$B_{Q,1}$$B_{Q,2}$$\cdots$$B_{Q,{K_Q}}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Q$行出力せよ。$i$行目（$1\leq i\leq Q$）には $i$番目の問題に対する答えを整数で出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 5
1 2 10
1 3 20
1 3 30
2 3 15
2 3 25
2
1
1
2
3 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

25
70

</div>

<p>
$1$番目の問題では橋 $1$をわたった上で島 $1$から島 $3$へ移動するために必要な時間の最小値を求める必要があります。

橋 $1$を使って島 $1$から島 $2$に移動した後に橋 $4$を使って島 $2$から島 $3$に移動したとき時間は $10+15=25$だけかかり、このときが最小です。

よって、$1$行目には $25$を出力します。
</p>

<p>
$2$番目の問題では橋 $3$および橋 $5$をわたった上で島 $1$から島 $3$へ移動するために必要な時間の最小値を求める必要があります。

橋 $3$を通って島 $1$から島 $3$に移動した後に橋 $5$を使って島 $2$へ移動し、橋 $4$を使用して島 $3$に移動したとき時間は $30+25+15=70$だけかかり、このときが最小です。よって、$2$行目には $70$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6 6
1 5 1
2 5 1
2 4 1
3 4 1
3 6 1
1 6 1
2
5
1 2 3 4 5
1
5

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5
3

</div>

<p>
各問題において指定された橋をわたる際、わたる方向はどちらでも問題ありません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5 5
1 2 1000000000
2 3 1000000000
3 4 1000000000
4 5 1000000000
1 5 1000000000
1
1
3

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

4000000000

</div>

<p>
答えが $32$bit 整数型に収まらない可能性があることに注意してください。
</p>

</section>

</div>

</span>

</span>

</div>
