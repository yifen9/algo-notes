
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
$N$個の袋があります。

袋 $i$には $L_i$個のボールが入っていて、袋 $i$の $j(1\leq j\leq L_i)$番目のボールには正の整数 $a_{i,j}$が書かれています。  
</p>

<p>
それぞれの袋から $1$つずつボールを取り出します。

取り出したボールに書かれた数の総積が $X$になるような取り出し方は何通りありますか？  
</p>

<p>
ただし、書かれた数が同じであっても全てのボールは区別します。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$N \geq 2$
</li>

<li>
$L_i \geq 2$
</li>

<li>
袋に入っているボールの個数の総積は $10^5$を超えない。すなわち、$\displaystyle\prod_{i=1}^{N}L_i \leq 10^5$
</li>

<li>
$1 \leq a_{i,j} \leq 10^9$
</li>

<li>
$1 \leq X \leq 10^{18}$
</li>

<li>
入力に含まれる値は全て整数である。
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

$N$$X$$L_1$$a_{1,1}$$a_{1,2}$$\ldots$$a_{1,L_1}$$L_2$$a_{2,1}$$a_{2,2}$$\ldots$$a_{2,L_2}$$\vdots$$L_N$$a_{N,1}$$a_{N,2}$$\ldots$$a_{N,L_N}$
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

2 40
3 1 8 4
2 10 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<p>
袋 $1$の $3$番目のボールと袋 $2$の $1$番目のボールを選ぶと、$a_{1,3} \times a_{2,1} = 4 \times 10 = 40$となります。

袋 $1$の $2$番目のボールと袋 $2$の $2$番目のボールを選ぶと、$a_{1,2} \times a_{2,2} = 8 \times 5 = 40$となります。

これ以外に総積が $40$になる取り出し方は存在しないので、答えは $2$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 200
3 10 10 10
3 10 10 10
5 2 2 2 2 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

45

</div>

<p>
書かれた数が同じであっても全てのボールは区別することに注意してください。  
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

3 1000000000000000000
2 1000000000 1000000000
2 1000000000 1000000000
2 1000000000 1000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0

</div>

<p>
総積が $X$になる取り出し方が $1$つも存在しないこともあります。
</p>

</section>

</div>

</span>

</span>

</div>
