
<div>

<span>

<span>

<p>
配点 : $900$点
</p>

<div>

<section>

### **問題文**

<p>
$1$から $N$の番号がついた $N$個の頂点と、$1$から $N-1$の番号がついた $N-1$本の辺からなる木が与えられます。
辺 $i$は頂点 $a_i$と頂点 $b_i$を双方向につなぐ長さ $1$の辺です。
</p>

<p>
すぬけ君はそれぞれの頂点を白か黒のどちらかで塗ります。
塗り方の 
<em>
良さ
</em>
は、白色の頂点同士の距離の最大値を $X$、黒色の頂点同士の距離の最大値を $Y$として $\max(X,Y)$です。
ここで、その色の頂点が存在しない場合の距離の最大値は $0$とすることにします。
</p>

<p>
頂点への色の塗り方は $2^N$通りあります。それぞれの塗り方について良さを計算し、その総和を $10^{9}+7$で割ったあまりを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
与えられる入力は全て整数
</li>

<li>
$2 \leq N \leq 2 \times 10^{5}$
</li>

<li>
$1 \leq a_i, b_i \leq N$
</li>

<li>
与えられるグラフは木
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

$N$$a_1$$b_1$$\vdots$$a_{N-1}$$b_{N-1}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
それぞれの塗り方について良さを計算し、その総和を $10^{9}+7$で割ったあまりを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2
1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<ul>

<li>
頂点 $1,2$の両方を同じ色で塗ったときの良さは $1$で、異なる色で塗ったときの良さは $0$です。
</li>

<li>
塗り方の良さの総和は $2$となります。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6
1 2
2 3
3 4
4 5
3 6

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

224

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

35
25 4
33 7
11 26
32 4
12 7
31 27
19 6
10 22
17 12
28 24
28 1
24 15
30 24
24 11
23 18
14 15
4 29
33 24
15 34
11 3
4 35
5 34
34 2
16 19
7 18
19 31
22 8
13 26
20 6
20 9
4 33
4 8
29 19
15 21

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

298219707

</div>

<ul>

<li>
$10^{9}+7$で割ったあまりを求めるのを忘れずに。
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
