
<div>

<span>

<span>

<p>
配点 : $1700$点
</p>

<div>

<section>

### **問題文**

<p>
縦、横ともに $N$マスのマス目があります。
上から $i$マス目、左から $j$マス目のマスを ($i$, $j$) と表します。
</p>

<p>
最初、$M$個のマスが黒く塗られており、それ以外のマスはすべて白です。
具体的には、マス ($a_1$, $b_1$), ($a_2$, $b_2$), $...$, ($a_M$, $b_M$) が黒く塗られています。
</p>

<p>
すぬけ君は次のルールに従い、可能な限りマスを黒く塗っていきます。
</p>

<ul>

<li>
ある $1≤x,y,z≤N$について、マス ($x$, $y$), ($y$, $z$) がともに黒で、マス ($z$, $x$) が白ならば、マス ($z$, $x$) を黒く塗る。
</li>

</ul>

<p>
すぬけ君が可能な限りマスを黒く塗ったとき、最終的に黒いマスは何個になるかを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1≤N≤10^5$
</li>

<li>
$1≤M≤10^5$
</li>

<li>
$1≤a_i,b_i≤N$
</li>

<li>
($a_i$, $b_i$) はすべて相異なる。
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

$N$$M$$a_1$$b_1$$a_2$$b_2$$:$$a_M$$b_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
すぬけ君が可能な限りマスを黒く塗ったとき、最終的に黒いマスは何個になるかを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 2
1 2
2 3

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
次のようにマスを黒く塗っていくことができます。
</p>

<ul>

<li>
マス ($1$, $2$), ($2$, $3$) がともに黒で、マス ($3$, $1$) が白なので、マス ($3$, $1$) を黒く塗る。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 2
1 1
1 2

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
次のようにマスを黒く塗っていくことができます。
</p>

<ul>

<li>
マス ($1$, $1$), ($1$, $2$) がともに黒で、マス ($2$, $1$) が白なので、マス ($2$, $1$) を黒く塗る。
</li>

<li>
マス ($2$, $1$), ($1$, $2$) がともに黒で、マス ($2$, $2$) が白なので、マス ($2$, $2$) を黒く塗る。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

4 3
1 2
1 3
4 4

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

3

</div>

<p>
新たにマスを黒く塗ることができません。
</p>

</section>

</div>

</span>

</span>

</div>
