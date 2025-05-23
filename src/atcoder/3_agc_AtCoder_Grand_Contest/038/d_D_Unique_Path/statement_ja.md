
<div>

<span>

<span>

<p>
配点 : $700$点
</p>

<div>

<section>

### **問題文**

<p>
すぬけ君は、$0$から $N-1$までの番号のついた $N$個の頂点と、$M$本の辺からなる無向グラフをお母さんにもらいました。
このグラフは連結で、また、多重辺や自己ループは存在しませんでした。
</p>

<p>
ある日、すぬけ君はこのグラフを壊してしまいました。
しかし、すぬけ君はこのグラフについて、$Q$個の情報を覚えています。
$i$($0 \leq i \leq Q-1$) 番目の情報は整数 $A_i,B_i,C_i$で表され、次のことを意味します。
</p>

<ul>

<li>
$C_i=0$の時: 頂点 $A_i$から $B_i$に向かう単純パス（同じ頂点を $2$度通らないパス）が、$1$つしか存在しない。
</li>

<li>
$C_i=1$の時: 頂点 $A_i$から $B_i$に向かう単純パスが $2$つ以上存在する。
</li>

</ul>

<p>
すぬけ君は自分の記憶に自信がないので、これら $Q$個の情報に合致するグラフが存在するのかどうか心配になりました。
すぬけくんの記憶に合致するグラフが存在するかどうか判定してください。
</p>

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
$N-1 \leq M \leq N \times (N-1)/2$
</li>

<li>
$1 \leq Q \leq 10^5$
</li>

<li>
$0 \leq A_i,B_i \leq N-1$
</li>

<li>
$A_i \neq B_i$
</li>

<li>
$0 \leq C_i \leq 1$
</li>

<li>
入力される値はすべて整数である。
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

$N$$M$$Q$$A_0$$B_0$$C_0$$A_1$$B_1$$C_1$$\vdots$$A_{Q-1}$$B_{Q-1}$$C_{Q-1}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
すぬけくんの記憶に合致するグラフが存在する場合は `Yes`、そうでない場合は `No`と出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 5 3
0 1 0
1 2 1
2 3 0

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes

</div>

<p>
例えば、辺集合が $(0,1),(1,2),(1,4),(2,3),(2,4)$であるグラフを考えると、これは条件を満たします。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 4 3
0 1 0
1 2 1
2 3 0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

No

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10 9 9
7 6 0
4 5 1
9 7 0
2 9 0
2 3 0
4 1 0
8 0 0
9 1 0
3 0 0

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

No

</div>

</section>

</div>

</span>

</span>

</div>
