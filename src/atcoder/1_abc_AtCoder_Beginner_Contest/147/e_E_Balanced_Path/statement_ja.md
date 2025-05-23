
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
縦 $H$マス、横 $W$マスのグリッドがあります。上から $i$行目、左から $j$列目のマスをマス $(i,j)$と呼びます。
</p>

<p>
マス $(i,j)$には $2$つの数 $A_{ij}, B_{ij}$が書かれています。
</p>

<p>
高橋君はまず各マスについて、$2$つの数の一方を赤く、もう一方を青く塗ります。
</p>

<p>
そのあと、マス $(1,1)$からマス $(H,W)$まで移動します。高橋君は $1$回の行動でマス $(i,j)$からマス $(i+1,j)$またはマス $(i,j+1)$に動くことができます。グリッドからはみ出すような移動はできません。
</p>

<p>
このときの移動経路 (マス $(1,1)$とマス $(H,W)$を含む) について、「経路上のマスの赤く塗られた数の和」と「経路上のマスの青く塗られた数の和」の差の絶対値を 
<strong>
偏り
</strong>
と呼ぶことにします。
</p>

<p>
高橋君は、色の塗り方と移動経路を適切に選ぶことで偏りを小さくしたいです。
</p>

<p>
偏りの最小値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq H \leq 80$
</li>

<li>
$2 \leq W \leq 80$
</li>

<li>
$0 \leq A_{ij} \leq 80$
</li>

<li>
$0 \leq B_{ij} \leq 80$
</li>

<li>
入力中のすべての値は整数である。
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

$H$$W$$A_{11}$$A_{12}$$\ldots$$A_{1W}$:
$A_{H1}$$A_{H2}$$\ldots$$A_{HW}$$B_{11}$$B_{12}$$\ldots$$B_{1W}$:
$B_{H1}$$B_{H2}$$\ldots$$B_{HW}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
偏りの最小値を求めよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 2
1 2
3 4
3 4
2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

0

</div>

<p>
次のような塗り分けと移動経路を選択すると、経路上のマスの赤く塗られた数の和は $3+3+1=7$、経路上のマスの青く塗られた数の和は $1+2+4=7$となり、偏りを $0$にできます。
</p>

<p>

<img src="https://img.atcoder.jp/ghi/a7eefcd144e470dad1d3f833a6806f2c.png">

</img>

</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 3
1 10 80
80 10 1
1 2 3
4 5 6

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

2

</div>

</section>

</div>

</span>

</span>

</div>
