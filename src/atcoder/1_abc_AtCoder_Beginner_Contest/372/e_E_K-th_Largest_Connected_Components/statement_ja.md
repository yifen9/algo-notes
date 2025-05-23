
<div>

<span>

<span>

<p>
配点 : $475$点
</p>

<div>

<section>

### **問題文**

<p>
$N$頂点 $0$辺の無向グラフがあります。頂点には $1$から $N$の番号がつけられています。
</p>

<p>
$Q$個のクエリが与えられるので、与えられた順に処理してください。各クエリは以下の $2$種類のいずれかです。
</p>

<ul>

<li>
タイプ $1$: `1 u v`の形式で与えられる。頂点 $u$と頂点 $v$の間に辺を追加する。
</li>

<li>
タイプ $2$: `2 v k`の形式で与えられる。頂点 $v$と連結な頂点の中で、$k$番目に頂点番号が大きいものを出力する。ただし、頂点 $v$と連結な頂点が $k$個未満のときは `-1`を出力する。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N,Q\leq 2\times 10^5$
</li>

<li>
タイプ $1$のクエリにおいて、$1\leq u\lt v\leq N$
</li>

<li>
タイプ $2$のクエリにおいて、$1\leq v\leq N, 1\leq k\leq 10$
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

$N$$Q$$\mathrm{query}_1$$\mathrm{query}_2$$\vdots$$\mathrm{query}_Q$
</div>

<p>
ただし、$\mathrm{query}_i$は $i$個目のクエリであり、以下のいずれかの形式で与えられる。
</p>

<div>

$1$$u$$v$
</div>

<div>

$2$$v$$k$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
タイプ $2$のクエリの個数を $q$として、$q$行出力せよ。$i$行目には $i$個目のタイプ $2$に対するクエリの答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 10
1 1 2
2 1 1
2 1 2
2 1 3
1 1 3
1 2 3
1 3 4
2 1 1
2 1 3
2 1 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2
1
-1
4
2
-1

</div>

<ul>

<li>
$1$個目のクエリについて、頂点 $1$と頂点 $2$の間に辺が追加されます。
</li>

<li>
$2$個目のクエリについて、頂点 $1$と連結な頂点は $1,2$の $2$つです。この中で $1$番目に大きい $2$を出力します。
</li>

<li>
$3$個目のクエリについて、頂点 $1$と連結な頂点は $1,2$の $2$つです。この中で $2$番目に大きい $1$を出力します。
</li>

<li>
$4$個目のクエリについて、頂点 $1$と連結な頂点は $1,2$の $2$つです。$3$個未満なので `-1`を出力します。
</li>

<li>
$5$個目のクエリについて、頂点 $1$と頂点 $3$の間に辺が追加されます。
</li>

<li>
$6$個目のクエリについて、頂点 $2$と頂点 $3$の間に辺が追加されます。
</li>

<li>
$7$個目のクエリについて、頂点 $3$と頂点 $4$の間に辺が追加されます。
</li>

<li>
$8$個目のクエリについて、頂点 $1$と連結な頂点は $1,2,3,4$の $4$つです。この中で $1$番目に大きい $4$を出力します。
</li>

<li>
$9$個目のクエリについて、頂点 $1$と連結な頂点は $1,2,3,4$の $4$つです。この中で $3$番目に大きい $2$を出力します。
</li>

<li>
$10$個目のクエリについて、頂点 $1$と連結な頂点は $1,2,3,4$の $4$つです。$5$個未満なので `-1`を出力します。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6 20
1 3 4
1 3 5
2 1 1
2 3 1
1 1 5
2 6 9
2 1 3
2 6 1
1 4 6
2 2 1
2 6 2
2 4 7
1 1 4
2 6 2
2 3 4
1 2 5
2 4 1
1 1 6
2 3 3
2 1 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1
5
-1
3
6
2
5
-1
5
3
6
4
4

</div>

</section>

</div>

</span>

</span>

</div>
