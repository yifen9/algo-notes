
<div>

<span>

<span>

<p>
配点 : $600$点
</p>

<div>

<section>

### **問題文**

<p>
正の整数 $N,M$が与えられます。$k=1,\ldots,N$のそれぞれについて、次の問題を解いてください。
</p>

<ul>

<li>
問題：$1$から $N$の番号がついた $N$人を、空でない $k$個のグループに分けます。
ただし、番号を $M$で割ったあまりが等しい人は同じグループになることができません。

そのようなグループ分けの方法は何通りありますか？

答えは非常に大きくなる可能性があるので $998244353$で割ったあまりを求めてください。  
</li>

</ul>

<p>
ここで、グループ分けが異なるとは、一方では人 $x,y$が同じグループであり、他方では異なるグループであるような $(x,y)$が存在することを指すものとします。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 5000$
</li>

<li>
$2 \leq M \leq N$
</li>

<li>
入力は全て整数である
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

$N$$M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$N$行出力せよ。
</p>

<p>
$i$行目には $k=i$の問題の答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

0
2
4
1

</div>

<p>
番号を $2$で割ったあまりが等しい人、すなわち、人 $1$と $3$、人 $2$と $4$を同じグループにすることはできません。
</p>

<ul>

<li>
$1$個のグループにすることはできません。
</li>

<li>
$2$個のグループにする方法は $\{\{1,2\},\{3,4\}\},\{\{1,4\},\{2,3\}\}$の $2$通りです。
</li>

<li>
$3$個のグループにする方法は $\{\{1,2\},\{3\},\{4\}\},\{\{1,4\},\{2\},\{3\}\},\{\{1\},\{2,3\},\{4\}\},\{\{1\},\{2\},\{3,4\}\}$の $4$通りです。
</li>

<li>
$4$個のグループにする方法は $\{\{1\},\{2\},\{3\},\{4\}\}$の $1$通りです。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6 6

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1
31
90
65
15
1

</div>

<p>
自由にグループ分けすることができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

20 5

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0
0
0
331776
207028224
204931064
814022582
544352515
755619435
401403040
323173195
538468102
309259764
722947327
162115584
10228144
423360
10960
160
1

</div>

<p>
答えを $998244353$で割ったあまりを求めてください。
</p>

</section>

</div>

</span>

</span>

</div>
