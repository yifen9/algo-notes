
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
頂点に $1$から $N$の、辺に $1$から $M$の番号がついた $N$頂点 $M$辺の自己ループを持たない連結な無向グラフが与えられます。辺 $i$は頂点 $u_i$と頂点 $v_i$を双方向に結んでおり、ラベル $w_i$がつけられています。
</p>

<p>
頂点 $1$から頂点 $N$までの単純パス（同じ頂点を $2$度以上通らないパス）のうち、パスに含まれる辺につけられたラベルの総ビット単位 $\mathrm{OR}$としてあり得る最小値を求めてください。
</p>

<details>

<summary>
ビット単位 $\mathrm{OR}$演算とは
    
</summary>

<p>
非負整数 $A, B$のビット単位 $\mathrm{OR}$、$A\ \mathrm{OR}\ B$は以下のように定義されます。
        
</p>

<ul>

<li>
$A\ \mathrm{OR}\ B$を二進表記した際の $2^k$($k \geq 0$) の位の数は、$A, B$を二進表記した際の $2^k$の位の数のうち少なくとも片方が $1$であれば $1$、そうでなければ $0$である。
</li>

</ul>
例えば、$3\ \mathrm{OR}\ 5 = 7$となります (二進表記すると: $011\ \mathrm{OR}\ 101 = 111$)。

一般に $k$個の非負整数 $p_1, p_2, p_3, \dots, p_k$のビット単位 $\mathrm{OR}$は $(\dots ((p_1\ \mathrm{OR}\ p_2)\ \mathrm{OR}\ p_3)\ \mathrm{OR}\ \dots\ \mathrm{OR}\ p_k)$と定義され、これは $p_1, p_2, p_3, \dots p_k$の順番によらないことが証明できます。  
    
<p>

</p>

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\le N\le 2\times 10^5$
</li>

<li>
$N-1\le M\le 2\times 10^5$
</li>

<li>
$1\le u_i < v_i\le N$
</li>

<li>
$0\le w_i< 2^{30}$
</li>

<li>
与えられるグラフは連結である
</li>

<li>
入力される値は全て整数
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

$N$$M$$u_1$$v_1$$w_1$$u_2$$v_2$$w_2$$\vdots$$u_M$$v_M$$w_M$
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

4 5
1 2 1
1 3 4
2 3 2
2 4 4
3 4 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3

</div>

<p>
辺 $1,3,5$を順番に通り頂点 $1,2,3,4$を順番に通ると総ビット単位 $\mathrm{OR}$は $1\ \mathrm{OR}\ 2\ \mathrm{OR}\ 3=3$となります。
</p>

<p>
総ビット単位 $\mathrm{OR}$を $3$より小さくすることはできないので、 $3$を出力してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 5
1 2 1
1 2 2
1 2 3
1 2 4
2 3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4

</div>

<p>
グラフには多重辺が存在する場合もあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8 12
4 5 16691344
5 7 129642441
2 7 789275447
3 8 335307651
3 5 530163333
5 6 811293773
3 8 333712701
1 2 2909941
2 3 160265478
5 7 465414272
1 3 903373004
6 7 408299562

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

468549631

</div>

</section>

</div>

</span>

</span>

</div>
