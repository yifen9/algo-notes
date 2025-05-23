
<div>

<span>

<span>

<p>
配点: $500$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder 街道には $N$棟のビルが建っており、西から順に $1$から $N$までの番号が付けられています。最初の時点では、ビルの高さはそれぞれ $A_1, A_2, \dots, A_N$です。
</p>

<p>
ARC 解体業者の社長である高橋君は、整数 $l, r$$(1 \leq l \lt r \leq N)$を選び、ビル $l, l+1, \dots, r$の高さをすべて $0$にしようと計画しています。この際に、以下の $2$種類の操作を好きな順番で何回でも行うことができます。
</p>

<ul>

<li>
整数 $x$$(l \leq x \leq r-1)$を決めて、ビル $x$・ビル $x+1$の高さを $1$ずつ増やす
</li>

<li>
整数 $x$$(l \leq x \leq r-1)$を決めて、ビル $x$・ビル $x+1$の高さを $1$ずつ減らす（この操作は両方のビルの高さが $1$以上のときのみ可能）
</li>

</ul>

<p>
選べる $x$の範囲が $(l,r)$に依存することに注意してください。
</p>

<p>
高橋君が計画を達成することが可能な $(l, r)$の選び方は何通りあるでしょうか？
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 300000$
</li>

<li>
$1 \leq A_i \leq 10^9$$(1 \leq i \leq N)$
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
入力は以下の形式で標準入力から与えられます。  
</p>

<div>

$N$$A_1$$A_2$$\cdots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力してください。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5
5 8 8 6 6

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
$(l, r) = (2, 3), (4, 5), (2, 5)$については、高橋君は目的を達成することができます。
</p>

<p>
例えば、$(l, r) = (2, 5)$と選ぶとき、例えば以下の順に操作を行うことで、ビル $2, 3, 4, 5$の高さを $0$にできます。
</p>

<ul>

<li>
「ビル $4, 5$の高さを $1$ずつ減らす」操作を $6$回続けて行う
</li>

<li>
「ビル $2, 3$の高さを $1$ずつ減らす」操作を $8$回続けて行う
</li>

</ul>

<p>
残り $7$種類の $(l, r)$の選び方については、どのような操作の手順をとっても、高橋君は目的を達成することができません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7
12 8 11 3 3 13 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3

</div>

<p>
$(l, r) = (2, 4), (3, 7), (4, 5)$については、高橋君は目的を達成することができます。
</p>

<p>
例えば、$(l, r) = (3, 7)$と選ぶとき、以下の図のように操作を行うことが考えられます。
</p>

<p>

<img src="https://img.atcoder.jp/arc119/392b686a479008a3dbc3fb36893ed144.png">

</img>

</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
8 6 3 9 5 4 7 2 1 10

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1

</div>

<p>
高橋君が目的を達成できるのは、$(l, r) = (3, 8)$のときしかありません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

14
630551244 683685976 249199599 863395255 667330388 617766025 564631293 614195656 944865979 277535591 390222868 527065404 136842536 971731491

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

8

</div>

</section>

</div>

</span>

</span>

</div>
