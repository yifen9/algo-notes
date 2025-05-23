
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
縦 $H$マス、横 $W$マスのグリッドがあります。
上から $i$行目、左から $j$列目のマス $(i,j)$は、$S_{ij}$が `#`のとき壁であり、`.`のとき道です。
</p>

<p>
マス $(1,1)$にチェスのクイーンの駒が置いてあります。
クイーンの駒は、今いる位置から右・下・右下方向に伸びる直線上にあり、壁を飛び越えずに到達できる道のマスに $1$手で移動することができます。
</p>

<p>
クイーンの駒がマス $(1,1)$からマス $(H,W)$まで移動する方法は何通りありますか？ $\bmod (10^9+7)$で求めてください。
</p>

<p>
ただし、移動する方法が異なるとは、ある $i$が存在して、$i$手目の移動の後にクイーンの駒があるマスの位置が異なることを指します。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq H,W \leq 2000$
</li>

<li>
$S_{ij}$は `#`か `.`
</li>

<li>
$S_{11}$と $S_{HW}$は `.`
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

$H$$W$$S_{11}\ldots S_{1W}$$\vdots$$S_{H1}\ldots S_{HW}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
クイーンの駒がマス $(1,1)$から $(H,W)$まで移動する方法の数を $\mod (10^9+7)$で出力せよ。
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
...
.#.
...

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

10

</div>

<p>
移動方法として次の $10$通りが考えられます。
</p>

<ul>

<li>
$(1,1)\to (1,2)\to (1,3)\to (2,3)\to (3,3)$
</li>

<li>
$(1,1)\to (1,2)\to (1,3)\to (3,3)$
</li>

<li>
$(1,1)\to (1,2)\to (2,3)\to (3,3)$
</li>

<li>
$(1,1)\to (1,3)\to (2,3)\to (3,3)$
</li>

<li>
$(1,1)\to (1,3)\to (3,3)$
</li>

<li>
$(1,1)\to (2,1)\to (3,1)\to (3,2)\to (3,3)$
</li>

<li>
$(1,1)\to (2,1)\to (3,1)\to (3,3)$
</li>

<li>
$(1,1)\to (2,1)\to (3,2)\to (3,3)$
</li>

<li>
$(1,1)\to (3,1)\to (3,2)\to (3,3)$
</li>

<li>
$(1,1)\to (3,1)\to (3,3)$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 4
...#
....
..#.
....

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

84

</div>

<p>
$(1,1)$からは $1$手で $(1,2),(1,3),(2,1),(2,2),(3,1),(4,1)$のいずれかへ移動することが出来ます。
</p>

<p>
$(4,4)$への移動経路として、例えば $(1,1)\to (3,1)\to (3,2)\to (4,3)\to (4,4)$などがあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8 10
..........
..........
..........
..........
..........
..........
..........
..........

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

13701937

</div>

<p>
移動方法の数を $\bmod (10^9+7)$で求めてください。
</p>

</section>

</div>

</span>

</span>

</div>
