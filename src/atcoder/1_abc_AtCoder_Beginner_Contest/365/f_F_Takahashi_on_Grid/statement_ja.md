
<div>

<span>

<span>

<p>
配点 : $575$点
</p>

<div>

<section>

### **問題文**

<p>
平面上に無限個のマスがあります。
整数の $2$つ組 $(x,y)$すべてに対して対応するマスがひとつ存在し、マス $(x,y)$と呼ぶことにします。
</p>

<p>
すべてのマスは、それぞれ空きマスか壁マスのどちらか一方です。

長さ $N$の正整数列 $L=(L _ 1,L _ 2,\dotsc,L _ N),U=(U _ 1,U _ 2,\dotsc,U _ N)$が与えられます。
ここで、$i=1,2,\ldots,N$について $L _ i,U _ i$は $1\leq L _ i\leq U _ i\leq10 ^ 9$を満たします。

マス $(x,y)\ (1\leq x\leq N,L _ x\leq y\leq U _ x)$はすべて空きマスで、それ以外のマスは壁マスです。
</p>

<p>
高橋くんが空きマスであるマス $(x,y)$にいるとき、次の行動のいずれかを行うことができます。
</p>

<ul>

<li>
マス $(x+1,y)$が空きマスならば、マス $(x+1,y)$に移動する。
</li>

<li>
マス $(x-1,y)$が空きマスならば、マス $(x-1,y)$に移動する。
</li>

<li>
マス $(x,y+1)$が空きマスならば、マス $(x,y+1)$に移動する。
</li>

<li>
マス $(x,y-1)$が空きマスならば、マス $(x,y-1)$に移動する。
</li>

</ul>

<p>
どの空きマスどうしも、高橋くんが行動を繰り返すことで行き来できることが保証されます。
</p>

<p>
次の形式の $Q$個の質問に答えてください。
</p>

<p>
$i$番目 $(1\leq i\leq Q)$の質問では整数の $4$つ組 $(s _ {x,i},s _ {y,i},t _ {x,i},t _ {y,i})$が与えられるので、高橋くんがマス $(s _ {x,i},s _ {y,i})$にいるところからマス $(t _ {x,i},t _ {y,i})$に移動するために必要な行動回数の最小値を求めてください。
各質問について、与えられる $2$つのマスは空きマスであることが保証されます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq2\times10 ^ 5$
</li>

<li>
$1\leq L _ i\leq U _ i\leq10 ^ 9\ (1\leq i\leq N)$
</li>

<li>
$\lbrack L _ i,U _ i\rbrack\cap\lbrack L _ {i+1},U _ {i+1}\rbrack\neq\emptyset\ (1\leq i\lt N)$
</li>

<li>
$1\leq Q\leq2\times10 ^ 5$
</li>

<li>
$1\leq s _ {x,i}\leq N$かつ $L _ {s _ {x,i}}\leq s _ {y,i}\leq U _ {s _ {x,i}}\ (1\leq i\leq Q)$
</li>

<li>
$1\leq t _ {x,i}\leq N$かつ $L _ {t _ {x,i}}\leq t _ {y,i}\leq U _ {t _ {x,i}}\ (1\leq i\leq Q)$
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

$N$$L _ 1$$U _ 1$$L _ 2$$U _ 2$$\vdots$$L _ N$$U _ N$$Q$$s _ {x,1}$$s _ {y,1}$$t _ {x,1}$$t _ {y,1}$$s _ {x,2}$$s _ {y,2}$$t _ {x,2}$$t _ {y,2}$$\vdots$$s _ {x,Q}$$s _ {y,Q}$$t _ {x,Q}$$t _ {y,Q}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Q$行にわたって出力せよ。
$i$行目 $(1\leq i\leq Q)$には、$i$番目の質問に対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

7
1 5
3 3
1 3
1 1
1 4
2 4
3 5
3
1 4 6 3
1 4 1 1
7 5 1 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

10
3
14

</div>

<p>
与えられたマスは以下のようになります。
</p>

<p>

<img src="https://img.atcoder.jp/abc365/4d07a40c98eda33ee86b773e564681c7.png">

</img>

</p>

<p>
$1$つめの質問では、例えば以下のように移動することでマス $(1,4)$からマス $(6,3)$へ $10$回の行動で移動することができます。
</p>

<p>

<img src="https://img.atcoder.jp/abc365/4e579f6b171a642891732ae6efcdd550.png">

</img>

</p>

<p>
$9$回以下の行動でマス $(1,4)$からマス $(6,3)$へ移動することはできないため、$10$を出力してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

12
1 1000000000
1000000000 1000000000
1 1000000000
1 1
1 1000000000
1000000000 1000000000
1 1000000000
1 1
1 1000000000
1000000000 1000000000
1 1000000000
1 1
1
1 1 12 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

6000000005

</div>

<p>
出力すべき値が $32\operatorname{bit}$整数に収まらない場合があることに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
1694 7483
3396 5566
2567 6970
1255 3799
2657 3195
3158 8007
3368 8266
1447 6359
5365 8614
3141 7245
15
3 3911 6 4694
7 5850 10 4641
1 5586 6 4808
2 3401 8 2676
3 3023 6 6923
8 4082 3 6531
6 3216 7 6282
8 5121 8 3459
8 4388 1 6339
6 6001 3 6771
10 5873 8 5780
1 6512 6 6832
8 5345 7 4975
10 4010 8 2355
7 5837 9 6279

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

2218
1212
4009
1077
3903
4228
3067
1662
4344
6385
95
6959
371
4367
444

</div>

</section>

</div>

</span>

</span>

</div>
