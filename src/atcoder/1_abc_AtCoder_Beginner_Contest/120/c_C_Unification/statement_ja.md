
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
机の上に $N$個のキューブが縦に積まれています。長さ $N$の文字列 $S$が与えられます。
</p>

<p>
下から $i$番目のキューブの色は、$S$の $i$文字目が `0`のとき赤色、`1`のとき青色です。
</p>

<p>
あなたは、赤色のキューブと青色のキューブが隣り合っているような部分を選んで、それら $2$個のキューブを取り除く操作を何度でも行えます。
</p>

<p>
このとき、取り除いたキューブの上にあったキューブは真下の物体の上に落下します。
</p>

<p>
最大で何個のキューブを取り除けるでしょうか。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 10^5$
</li>

<li>
$|S| = N$
</li>

<li>
$S$の各文字は `0`または `1`である。
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

$S$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
最大で何個のキューブを取り除けるかを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

0011

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4

</div>

<p>
以下の順に操作を行うと $4$個全てのキューブを取り除けます。
</p>

<ul>

<li>
下から $2$番目のキューブと $3$番目のキューブを取り除きます。その結果、下から $4$番目のキューブが下から $1$番目のキューブの上に落下します。
</li>

<li>
下から $1$番目のキューブと $2$番目のキューブを取り除きます。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

11011010001011

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

12

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

0

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0

</div>

</section>

</div>

</span>

</span>

</div>
