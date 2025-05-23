
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
数列 $P = (P_1, \ldots, P_N)$に対し，その最長増加部分列の長さを $\mathrm{LIS}(P)$と書くことにします．
</p>

<p>
$1$以上 $N$以下の整数からなる順列 $A = (A_1, \ldots, A_N)$および $B = (B_1, \ldots, B_N)$が与えられます．これらの数列に対して，以下の操作を何度でも行うことができます（$0$回でもよいです）．
</p>

<ul>

<li>
$1\leq i\leq N-1$となる整数 $i$をひとつ選ぶ．$A_i$と $A_{i+1}$をスワップし，$B_i$と $B_{i+1}$をスワップする．
</li>

</ul>

<p>
操作結果の $\mathrm{LIS}(A) + \mathrm{LIS}(B)$としてありうる最大値を答えてください．
</p>

<details>

<summary>
最長増加部分列とは
</summary>

<p>
数列の部分列とは，数列から $0$個以上の要素を取り除いた後，残りの要素を元の順序で連結して得られる数列のことをいいます．
例えば，$(10,30)$は $(10,20,30)$の部分列ですが，$(20,10)$は $(10,20,30)$の部分列ではありません．

</p>

<p>
数列の最長増加部分列とは，数列の狭義単調増加な部分列のうち，長さが最大のもののことをいいます．

</p>

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\leq N\leq 3\times 10^5$
</li>

<li>
$1\leq A_i\leq N$
</li>

<li>
$1\leq B_i\leq N$
</li>

<li>
$i\neq j$ならば $A_i\neq A_j$かつ $B_i\neq B_j$
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
入力は以下の形式で標準入力から与えられます．
</p>

<div>

$N$$A_1$$\ldots$$A_N$$B_1$$\ldots$$B_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
操作結果の $\mathrm{LIS}(A) + \mathrm{LIS}(B)$としてありうる最大値を出力してください．
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
5 2 1 4 3
3 1 2 5 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

8

</div>

<p>
例えば次のように操作を行うことで，$\mathrm{LIS}(A) + \mathrm{LIS}(B) = 8$を達成できます．
</p>

<ul>

<li>
$i = 2$として操作を行う．$A = (5,1,2,4,3)$, $B = (3,2,1,5,4)$となる．
</li>

<li>
$i = 1$として操作を行う．$A = (1,5,2,4,3)$, $B = (2,3,1,5,4)$となる．
</li>

<li>
$i = 4$として操作を行う．$A = (1,5,2,3,4)$, $B = (2,3,1,4,5)$となる．
</li>

</ul>

<p>
このとき $A$は最長増加部分列 $(1,2,3,4)$を持ち，$\mathrm{LIS}(A)=4$が成り立ちます．$B$は最長増加部分列 $(2,3,4,5)$を持ち，$\mathrm{LIS}(B)=4$が成り立ちます．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
1 2 3 4 5
1 2 3 4 5

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

10

</div>

<p>
操作を $1$度も行わないことにより，$\mathrm{LIS}(A) + \mathrm{LIS}(B) = 10$を達成できます．
</p>

</section>

</div>

</span>

</span>

</div>
