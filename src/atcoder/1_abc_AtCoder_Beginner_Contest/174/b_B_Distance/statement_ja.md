
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
$2$次元平面上に $N$個の点があります。 $i$個目の点の座標は $(X_i,Y_i)$です。
</p>

<p>
これらのうち、原点からの距離が $D$以下であるような点は何個ありますか？
</p>

<p>
なお、座標 $(p,q)$にある点と原点の距離は $\sqrt{p^2+q^2}$で表されます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 2\times 10^5$
</li>

<li>
$0 \leq D \leq 2\times 10^5$
</li>

<li>
$|X_i|,|Y_i| \leq 2\times 10^5$
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

$N$$D$$X_1$$Y_1$$\vdots$$X_N$$Y_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
原点からの距離が $D$以下であるような点の個数を整数で出力せよ。
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
0 5
-2 4
3 4
4 -4

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
それぞれの点の原点からの距離は
</p>

<ul>

<li>
$\sqrt{0^2+5^2}=5$
</li>

<li>
$\sqrt{(-2)^2+4^2}=4.472\ldots$
</li>

<li>
$\sqrt{3^2+4^2}=5$
</li>

<li>
$\sqrt{4^2+(-4)^2}=5.656\ldots$
</li>

</ul>

<p>
となります。したがって、原点からの距離が $5$以下であるような点は $3$個です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

12 3
1 1
1 1
1 1
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

7

</div>

<p>
同じ座標に複数の点があることがあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

20 100000
14309 -32939
-56855 100340
151364 25430
103789 -113141
147404 -136977
-37006 -30929
188810 -49557
13419 70401
-88280 165170
-196399 137941
-176527 -61904
46659 115261
-153551 114185
98784 -6820
94111 -86268
-30401 61477
-55056 7872
5901 -163796
138819 -185986
-69848 -96669

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

6

</div>

</section>

</div>

</span>

</span>

</div>
