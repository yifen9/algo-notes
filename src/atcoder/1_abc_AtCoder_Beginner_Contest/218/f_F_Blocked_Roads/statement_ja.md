
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
$N$頂点 $M$辺の有向グラフが与えられます。頂点には $1$から $N$の番号、辺には $1$から $M$の番号がついています。辺 $i\,(1 \leq i \leq M)$は頂点 $s_i$から頂点 $t_i$に向かう長さ $1$の辺です。
</p>

<p>
各 $i\,(1 \leq i \leq M)$について、辺 $i$のみ通れないときの頂点 $1$から頂点 $N$までの最短距離を求めてください。ただし、頂点 $1$から頂点 $N$にたどり着けない場合は `-1`を出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 400$
</li>

<li>
$1 \leq M \leq N(N-1)$
</li>

<li>
$1 \leq s_i,t_i \leq N$
</li>

<li>
$s_i \neq t_i$
</li>

<li>
$(s_i,t_i) \neq (s_j,t_j)$$(i \neq j)$
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

$N$$M$$s_1$$t_1$$s_2$$t_2$$\vdots$$s_M$$t_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$M$行出力せよ。
</p>

<p>
$i$行目には、辺 $i$のみ通れないときの頂点 $1$から頂点 $N$までの最短距離を出力せよ。ただし、頂点 $1$から頂点 $N$にたどり着けない場合は `-1`を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 3
1 2
1 3
2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
2
1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 4
1 2
2 3
2 4
3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

-1
2
3
2

</div>

<p>
辺 $1$のみ通れないとき、頂点 $1$から頂点 $N$にたどり着けないので `-1`を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5 10
1 2
1 4
1 5
2 1
2 3
3 1
3 2
3 5
4 2
4 3

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1
1
3
1
1
1
1
1
1
1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

4 1
1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

-1

</div>

</section>

</div>

</span>

</span>

</div>
