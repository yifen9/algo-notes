
<div>

<span>

<span>

<p>
配点 : $400$点
</p>

<div>

<section>

### **問題文**

<p>
一方の端が赤に塗られており、もう一方の端が青に塗られているロープが $N$本あります。ロープには $1$から $N$までの番号がつけられています。
</p>

<p>
これからロープの端を結ぶ操作を $M$回行います。$i$回目の操作ではロープ $A_i$の色 $B_i$の端とロープ $C_i$の色 $D_i$の端を結びます。ただし、色 `R`は赤を意味し、色 `B`は青を意味します。各ロープについて、同じ色の端が複数回結ばれることはありません。  
</p>

<p>
すべての操作を終えた後に、ひとつながりになっているロープの組について環状になっているものとそうでないものの個数を出力してください。  
</p>

<p>
ただし、ひとつながりになっているロープの組 $\lbrace v_0, v_1, \ldots, v_{x-1} \rbrace$が環状になっているとは、$v$の要素の順序を適切に入れ替えることで各 $0 \leq i < x$についてロープ $v_i$とロープ $v_{(i+1) \bmod x}$が結ばれているようにできることをいいます。
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
$0 \leq M \leq 2 \times 10^5$
</li>

<li>
$1 \leq A_i, C_i \leq N$
</li>

<li>
$(A_i, B_i) \neq (A_j, B_j), (C_i, D_i) \neq (C_j, D_j)$$(i \neq j)$
</li>

<li>
$(A_i, B_i) \neq (C_j, D_j)$
</li>

<li>
$N, M, A_i, C_i$は整数
</li>

<li>
$B_i, D_i$は `R`か `B`のいずれか
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

$N$$M$$A_1$$B_1$$C_1$$D_1$$A_2$$B_2$$C_2$$D_2$$\vdots$$A_M$$B_M$$C_M$$D_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
ひとつながりになっているロープの組について、環状になっているものの個数を $X$、そうでないものの個数を $Y$として $X$と $Y$をこの順に空白区切りで出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 3
3 R 5 B
5 R 3 B
4 R 2 B

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1 2

</div>

<p>
ひとつながりになっているロープの組は $\lbrace 1 \rbrace$、$\lbrace 2,4 \rbrace$、$\lbrace 3,5 \rbrace$の $3$つです。  
</p>

<p>
ロープ $\lbrace 3,5 \rbrace$の組は環状になっており、ロープ $\lbrace 1 \rbrace$と $\lbrace 2,4 \rbrace$の組は環状になっていません。したがって、$X = 1, Y = 2$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7 0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0 7

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

7 6
5 R 3 R
7 R 4 R
4 B 1 R
2 R 3 B
2 B 5 B
1 B 7 B

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

2 1

</div>

</section>

</div>

</span>

</span>

</div>
