
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
数列 $A = (A_1, A_2, ..., A_N)$が与えられます。

あなたは次の操作をちょうど $1$回行うことができます。
</p>

<ul>

<li>
$2$以上の整数 $M$を $1$つ選ぶ。その後、$1 \leq i \leq N$を満たすすべての整数 $i$に対して、 $A_i$を 「$A_i$を $M$で割ったあまり」に置き換える。
</li>

</ul>

<p>
例えば $A = (2, 7, 4)$で $M = 4$を選んだ時、操作後の $A$は $(2 \bmod 4, 7 \bmod 4, 4 \bmod 4) = (2, 3, 0)$になります。 
</p>

<p>
操作を行った後の $A$に含まれる要素の種類数は最小で何種類になりますか？
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

<li>
$0 \leq A_i \leq 10^9$
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

$N$$A_1$$A_2$$\dots$$A_N$
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
1 4 8

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
操作で $M = 3$を選ぶと $A = (1 \bmod 3, 4 \bmod 3, 8 \bmod 3) = (1, 1, 2)$になり、操作後の $A$の要素の種類数は $2$種類になります。

$A$の要素の種類数を $1$種類にすることはできないので $2$が答えです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4
5 10 15 20

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1

</div>

<p>
操作で $M = 5$を選ぶと $A = (0, 0, 0, 0)$になり、これが最適です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
3785 5176 10740 7744 3999 3143 9028 2822 4748 6888

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1

</div>

</section>

</div>

</span>

</span>

</div>
