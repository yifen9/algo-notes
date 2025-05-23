
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
$xy$平面上に正方形があり、$4$つの頂点の座標は反時計回りに順番に $(x_1,y_1),(x_2,y_2),(x_3,y_3),(x_4,y_4)$です。
なお、$x$軸は右向きに、$y$軸は上向きに取ることにします。
</p>

<p>
高橋君は、これら $4$つの座標のうち $(x_3,y_3),(x_4,y_4)$を忘れてしまいました。
</p>

<p>
$x_1,x_2,y_1,y_2$が与えられるので、$x_3,y_3,x_4,y_4$を復元してください。なお、これらの条件から、$x_3,y_3,x_4,y_4$は一意に存在し、整数となることが証明できます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$|x_1|,|y_1|,|x_2|,|y_2| \leq 100$
</li>

<li>
$(x_1,y_1)$≠ $(x_2,y_2)$
</li>

<li>
入力はすべて整数である
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

$x_1$$y_1$$x_2$$y_2$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$x_3,y_3,x_4,y_4$をこの順に整数で出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

0 0 0 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

-1 1 -1 0

</div>

<p>
$4$点 $(0,0),(0,1),(-1,1),(-1,0)$は、この順に正方形を反時計回りに見たときの $4$頂点をなします。
$(x_3,y_3)=(1,1),(x_4,y_4)=(1,0)$は、頂点が時計回りに並んでいるので適さないことに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 3 6 6

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3 10 -1 7

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

31 -41 -59 26

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

-126 -64 -36 -131

</div>

</section>

</div>

</span>

</span>

</div>
