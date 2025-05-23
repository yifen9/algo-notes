
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
黒板に $N$種類の整数が書かれています。 $i$種類目の整数は $A_i$で、書かれている個数は $B_i$個です。
</p>

<p>
あなたは次の操作を可能な限り繰り返すことができます。
</p>

<ul>

<li>
黒板に書かれている $2$個の整数 $x,y$であって、$x+y$が素数であるものを選ぶ。 選んだ $2$個の整数を黒板から消す。
</li>

</ul>

<p>
操作を最大で何回行えるか求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 100$
</li>

<li>
$1 \leq A_i \leq 10^7$
</li>

<li>
$1 \leq B_i \leq 10^9$
</li>

<li>
$A_i$は全て異なる
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

$N$$A_1$$B_1$$A_2$$B_2$$\vdots$$A_N$$B_N$
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

3
3 3
2 4
6 2

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
$2 + 3 = 5$であり、$5$は素数なので、$2$と $3$を選んで消す操作が行えます。また、それ以外の操作は行えません。 $2$は $4$個、 $3$は $3$個あるので、操作を $3$回行うことができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1
1 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

2

</div>

<p>
$1+ 1 = 2$であり、$2$は素数なので、$1$と $1$を選んで消す操作が行えます。$1$は $4$個あるので、操作を $2$回行うことができます。
</p>

</section>

</div>

</span>

</span>

</div>
