
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
$H \times W$の大きさの島があり、島は周りを海で囲まれています。

島は 縦 $H$個 $\times$横 $W$個の $1\times 1$の区画に分けられており、上から $i$番目かつ左から $j$番目の区画の（現在の海面を基準にした）標高は $A_{i,j}$です。
</p>

<p>
現在から $1$年ごとに海面の高さが $1$ずつ上昇します。

このとき、海または海に沈んだ区画に上下左右に隣接する区画であって、標高が海面の高さ 
<strong>
以下
</strong>
の区画は海に沈みます。

ここで、ある区画が新しく海に沈んだときそれと上下左右に隣接する区画であって海面の高さ以下のものも同時に海に沈み、これによって新しく沈んだ区画についてもこれは繰り返されます。
</p>

<p>
$i=1,2,\ldots, Y$それぞれについて、現在から $i$年後に、島のうち海に沈まず残っている部分の面積を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq H,W\leq 1000$
</li>

<li>
$1\leq Y\leq 10^5$
</li>

<li>
$1\leq A_{i,j}\leq 10^5$
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

$H$$W$$Y$$A_{1,1}$$A_{1,2}$$\ldots$$A_{1,W}$$A_{2,1}$$A_{2,2}$$\ldots$$A_{2,W}$$\vdots$$A_{H,1}$$A_{H,2}$$\ldots$$A_{H,W}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Y$行出力せよ。
$i$行目 $(1\leq i\leq Y)$には現在から $i$年後に海に沈まず残っている島の面積を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 3 5
10 2 10
3 1 4
10 5 10

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

9
7
6
5
4

</div>

<p>
島の上から $i$番目かつ左から $j$番目の区画を $(i,j)$で表します。このとき、次のようになります。
</p>

<ul>

<li>
$1$年後、海面は現在より $1$上昇しますが、海に面している標高 $1$の区画は存在しないため、どの区画も沈みません。よって、$1$行目には $9$を出力します。
</li>

<li>
$2$年後、海面は現在より $2$上昇し、$(1,2)$が海に沈みます。これによって、$(2,2)$は海に沈んだ区画に隣接する区画となりますが、その標高は $2$以下であるため、これも海に沈みます。これら以外にこの時点で他に沈む区画はありません。よって、$2$つの区画が沈むため、$2$行目には $9-2=7$を出力します。
</li>

<li>
$3$年後、海面は現在より $3$上昇し、$(2,1)$が新しく海に沈みます。他に沈む区画はありません。よって、$3$行目には $6$を出力します。
</li>

<li>
$4$年後、海面は現在より $4$上昇し、$(2,3)$が新しく海に沈みます。他に沈む区画はありません。よって、$4$行目には $5$を出力します。
</li>

<li>
$5$年後、海面は現在より $5$上昇し、$(3,2)$が新しく海に沈みます。他に沈む区画はありません。よって、$5$行目には $4$を出力します。
</li>

</ul>

<p>
よって、$9,7,6,5,4$をこの順に各行に出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 5 3
2 2 3 3 3
2 1 2 1 3
2 2 3 3 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

15
7
0

</div>

</section>

</div>

</span>

</span>

</div>
