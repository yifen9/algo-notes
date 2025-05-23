
<div>

<span>

<span>

<p>
配点 : $625$点
</p>

<div>

<section>

### **問題文**

<p>
数直線上にあなたと $N$人の商人がいます。商人には $1, 2, \ldots, N$の番号が付けられています。
</p>

<p>
はじめ、あなたは座標 $0$におり、商人 $i$は座標 $X_i$にいます。また、各商人は品物を $1$つずつ持っており、商人 $i$が持っている品物を品物 $i$と表記します。
</p>

<p>
あなたの目的は、品物 $1, 2, \ldots, N$をこの順に受け取ることです。
</p>

<p>
あなたは、以下の $3$つの操作を好きな順序で好きな回数繰り返すことができます。
</p>

<ul>

<li>
自分が $1$移動する。この操作にはコストが $C$かかる。
</li>

<li>
商人を $1$人選び、選んだ商人に $1$移動してもらう。この操作にはコストが $D$かかる。
</li>

<li>
商人を $1$人選び、選んだ商人を商人 $i$とする。あなたと商人 $i$のいる座標が一致しており、あなたが商人 $i$から品物を受け取ったことがない場合、商人 $i$から品物 $i$を受け取る。そうでない場合、何もしない。この操作にはコストが $0$かかる。
</li>

</ul>

<p>
目的を達成するためにかかるコストの合計の最小値を求めてください。
</p>

<p>
また、目的を達成するためにかかるコストの合計を最小化したときに各商人から品物を受け取る座標として考えられるもののうちのひとつを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq C, D \leq 10^5$
</li>

<li>
$-10^5 \leq X_i \leq 10^5$
</li>

<li>
入力される値はすべて整数
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

$N$$C$$D$$X_1$$X_2$$\ldots$$X_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$2$行出力せよ。
</p>

<p>
$1$行目には目的を達成するためにかかるコストの合計の最小値を出力せよ。
</p>

<p>
$2$行目には、$N$個の整数 $A_1, A_2, \ldots, A_N$をこの順に空白区切りで出力せよ。ただし、ある操作列が存在し、この操作列において以下の条件がともに満たされているようにせよ。
</p>

<ul>

<li>
目的を達成しており、目的を達成するという条件のもとコストの合計は最小である。
</li>

<li>
$1 \leq i \leq N$なるすべての整数 $i$に対して商人 $i$から 座標 $A_i$で品物を受け取っている。
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 2 3
1 -1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

10
0 0 2

</div>

<p>
例えば以下のように操作をすることで、コストの合計を $10$として目的を達成することができます。
</p>

<ul>

<li>
商人 $1$に座標 $1$から座標 $0$に移動してもらう。この操作にはコストが $3$かかる。
</li>

<li>
商人 $2$に座標 $-1$から座標 $0$に移動してもらう。この操作にはコストが $3$かかる。
</li>

<li>
商人 $1$から品物 $1$を受け取る。この操作にはコストが $0$かかる。
</li>

<li>
商人 $2$から品物 $2$を受け取る。この操作にはコストが $0$かかる。
</li>

<li>
あなたが座標 $0$から座標 $1$に移動する。この操作にはコストが $2$かかる。
</li>

<li>
あなたが座標 $1$から座標 $2$に移動する。この操作にはコストが $2$かかる。
</li>

<li>
商人 $3$から品物 $3$を受け取る。この操作にはコストが $0$かかる。
</li>

</ul>

<p>
コストの合計を $10$未満として目的を達成することはできません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 100000 60000
100000 -100000

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

12000000000
0 0

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

6 4 4
2 -1 5 -2 -2 2

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

56
0 -1 -1 -2 -2 2

</div>

</section>

</div>

</span>

</span>

</div>
