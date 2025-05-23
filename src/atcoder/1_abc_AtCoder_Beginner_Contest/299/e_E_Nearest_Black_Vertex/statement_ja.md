
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
$N$個の頂点と $M$本の辺からなる、単純（自己ループおよび多重辺を含まない）かつ連結な無向グラフが与えられます。

$i = 1, 2, \ldots, M$について、$i$番目の辺は頂点 $u_i$と頂点 $v_i$を結ぶ無向辺です。
</p>

<p>
各頂点を白または黒で塗る方法であって、下記の $2$つの条件をともに満たすものが存在するかを判定し、存在する場合はその一例を示してください。
</p>

<ul>

<li>
$1$個以上の頂点が黒で塗られている。
</li>

<li>
すべての $i = 1, 2, \ldots, K$について、下記の条件が成り立つ。
<ul>

<li>
頂点 $p_i$と「黒で塗られた頂点のうち頂点 $p_i$からの距離が最小であるもの」の距離がちょうど $d_i$である。
</li>

</ul>

</li>

</ul>

<p>
ここで、頂点 $u$と頂点 $v$の距離は、$u$と $v$を結ぶパスの辺の本数としてあり得る最小値として定義されます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 2000$
</li>

<li>
$N-1 \leq M \leq \min\lbrace N(N-1)/2, 2000 \rbrace$
</li>

<li>
$1 \leq u_i, v_i \leq N$
</li>

<li>
$0 \leq K \leq N$
</li>

<li>
$1 \leq p_1 \lt p_2 \lt \cdots \lt p_K \leq N$
</li>

<li>
$0 \leq d_i \leq N$
</li>

<li>
与えられるグラフは単純かつ連結
</li>

<li>
入力はすべて整数
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

$N$$M$$u_1$$v_1$$u_2$$v_2$$\vdots$$u_M$$v_M$$K$$p_1$$d_1$$p_2$$d_2$$\vdots$$p_K$$d_K$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
問題文中の条件を満たすように各頂点を白または黒で塗る方法が存在しない場合は、`No`を出力せよ。

存在する場合は、下記の形式の通り、$1$行目に `Yes`と出力し、$2$行目に各頂点を塗る方法を表す文字列 $S$を出力せよ。
ここで、$S$は長さ $N$の文字列であり、$i = 1, 2, \ldots, N$について $S$の $i$文字目は、頂点 $i$を黒で塗るとき $1$、白で塗るとき $0$である。
</p>

<div>

Yes
$S$
</div>

<p>
答えが複数ある場合、どれを出力しても正解とみなされる。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 5
1 2
2 3
3 1
3 4
4 5
2
1 0
5 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes
10100

</div>

<p>
例えば、頂点 $1, 3$を黒に、頂点 $2, 4, 5$を白に塗るという方法が、問題文中の条件を満たします。

実際、$i = 1, 2, 3, 4, 5$について、頂点 $i$と「黒で塗られた頂点のうち頂点 $i$からの距離が最小であるもの」の距離を $A_i$で表すと、
$(A_1, A_2, A_3, A_4, A_5) = (0, 1, 0, 1, 2)$であり、特に、$A_1 = 0, A_5 = 2$が成り立ちます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 5
1 2
2 3
3 1
3 4
4 5
5
1 1
2 1
3 1
4 1
5 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

No

</div>

<p>
問題文中の条件を満たすように各頂点を白または黒で塗る方法が存在しないため、`No`を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1 0
0

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

Yes
1

</div>

</section>

</div>

</span>

</span>

</div>
