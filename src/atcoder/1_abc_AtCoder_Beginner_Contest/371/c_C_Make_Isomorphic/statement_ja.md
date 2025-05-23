
<div>

<span>

<span>

<p>
配点 : $300$点
</p>

<div>

<section>

### **問題文**

<p>
頂点 $1,$頂点 $2,\ldots,$頂点 $N$の $N$個の頂点からなる単純無向グラフ $G,H$が与えられます。
$G$には $M _ G$本の辺があり、$i$本目 $(1\leq i\leq M _ G)$の辺は頂点 $u _ i$と頂点 $v _ i$を結んでいます。
$H$には $M _ H$本の辺があり、$i$本目 $(1\leq i\leq M _ H)$の辺は頂点 $a _ i$と頂点 $b _ i$を結んでいます。
</p>

<p>
あなたは、グラフ $H$に対して次の操作を $0$回以上の好きな回数繰り返すことができます。
</p>

<ul>

<li>
$1\leq i\lt j\leq N$を満たす整数の組 $(i,j)$をひとつ選ぶ。$A _ {i,j}$円を支払って、頂点 $i$と頂点 $j$を結ぶ辺がなければ追加し、あれば取り除く。
</li>

</ul>

<p>
$G$と $H$を同型にするために少なくとも何円支払う必要があるか求めてください。
</p>

<details>

<summary>
単純無向グラフとは？
</summary>

<p>

<b>
単純無向グラフ
</b>
とは、自己ループや多重辺を含まず、辺に向きの無いグラフのことをいいます。
</p>

</details>

<details>

<summary>
グラフの同型とは？
</summary>

<p>
$N$頂点のグラフ $G$と $H$が
<b>
同型
</b>
であるとは、ある $(1,2,\ldots,N)$の並べ替え $(P _ 1,P _ 2,\ldots,P _ N)$が存在して、どの $1\leq i\lt j\leq N$に対しても
</p>

<ul>

<li>
$G$に頂点 $i,$頂点 $j$を結ぶ辺が存在するとき、かつそのときに限り $H$に頂点 $P _ i,$頂点 $P _ j$を結ぶ辺が存在する
</li>

</ul>
が成り立つことをいいます。


</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq8$
</li>

<li>
$0\leq M _ G\leq\dfrac{N(N-1)}2$
</li>

<li>
$0\leq M _ H\leq\dfrac{N(N-1)}2$
</li>

<li>
$1\leq u _ i\lt v _ i\leq N\ (1\leq i\leq M _ G)$
</li>

<li>
$(u _ i,v _ i)\neq(u _ j,v _ j)\ (1\leq i\lt j\leq M _ G)$
</li>

<li>
$1\leq a _ i\lt b _ i\leq N\ (1\leq i\leq M _ H)$
</li>

<li>
$(a _ i,b _ i)\neq(a _ j,b _ j)\ (1\leq i\lt j\leq M _ H)$
</li>

<li>
$1\leq A _ {i,j}\leq 10 ^ 6\ (1\leq i\lt j\leq N)$
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

$N$$M _ G$$u _ 1$$v _ 1$$u _ 2$$v _ 2$$\vdots$$u _ {M _ G}$$v _ {M _ G}$$M _ H$$a _ 1$$b _ 1$$a _ 2$$b _ 2$$\vdots$$a _ {M _ H}$$b _ {M _ H}$$A _ {1,2}$$A _ {1,3}$$\ldots$$A _ {1,N}$$A _ {2,3}$$\ldots$$A _ {2,N}$$\vdots$$A _ {N-1,N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5
4
1 2
2 3
3 4
4 5
4
1 2
1 3
1 4
1 5
3 1 4 1
5 9 2
6 5
3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

9

</div>

<p>
与えられたグラフはそれぞれ以下のようになります。
</p>

<p>

<img src="https://img.atcoder.jp/abc371/fbdb304dc71eecd7ddec97276a9c7040.png">

</img>

</p>

<p>
たとえば、$H$に対して次のような $4$つの操作を順に行うことで、$9$円を支払って$G$と $H$を同型にすることができます。
</p>

<ul>

<li>
$(i,j)=(1,3)$として操作を行う。$H$には頂点 $1$と頂点 $3$を結ぶ辺があるので、$1$円を支払ってこれを取り除く。
</li>

<li>
$(i,j)=(2,5)$として操作を行う。$H$には頂点 $2$と頂点 $5$を結ぶ辺はないので、$2$円を支払ってこれを追加する。
</li>

<li>
$(i,j)=(1,5)$として操作を行う。$H$には頂点 $1$と頂点 $5$を結ぶ辺があるので、$1$円を支払ってこれを取り除く。
</li>

<li>
$(i,j)=(3,5)$として操作を行う。$H$には頂点 $3$と頂点 $5$を結ぶ辺はないので、$5$円を支払ってこれを追加する。
</li>

</ul>

<p>
操作の結果、$H$は以下のようになります。
</p>

<p>

<img src="https://img.atcoder.jp/abc371/68a56da8ec89b769989ae7d07bf163cd.png">

</img>

</p>

<p>
支払う金額を $8$円以下にして $G$と $H$を同型にすることはできないため、`9`を出力してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
3
1 2
2 3
3 4
4
1 2
2 3
3 4
4 5
9 1 1 1
1 1 1
1 1
9

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
たとえば、$(i,j)=(2,3),(2,4),(3,4)$とした $3$回の操作を行うことで $G$と $H$を同型にすることができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5
3
1 2
2 3
3 4
4
1 2
2 3
3 4
4 5
5 4 4 4
4 4 4
4 4
5

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

5

</div>

<p>
たとえば、$(i,j)=(4,5)$とした $1$回の操作を行うことで $G$と $H$を同型にすることができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

2
0
0
371

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

0

</div>

<p>
$G$や $H$には辺が含まれていないこともあります。
また、一度も操作をする必要がないこともあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 5**

<div>

8
13
1 8
5 7
4 6
1 5
7 8
1 6
1 2
5 8
2 6
5 6
6 7
3 7
4 8
15
3 5
1 7
4 6
3 8
7 8
1 2
5 6
1 6
1 5
1 4
2 8
2 6
2 4
4 7
1 3
7483 1694 5868 3296 9723 5299 4326
5195 4088 5871 1384 2491 6562
1149 6326 2996 9845 7557
4041 7720 1554 5060
8329 8541 3530
4652 3874
3748

</div>

</section>

</div>

<div>

<section>

### **出力例 5**

<div>

21214

</div>

</section>

</div>

</span>

</span>

</div>
