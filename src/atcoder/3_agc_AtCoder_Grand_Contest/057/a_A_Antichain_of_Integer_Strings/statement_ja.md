
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
正整数からなる集合 $A$は次の条件を満たすとき、
<strong>
良い集合
</strong>
であるといいます。
</p>

<ul>

<li>
任意の相異なる $2$要素 $a, b \in A$に対して、$a$を $10$進法表記した文字列は、$b$を $10$進法表記した文字列の部分文字列
<strong>
ではない
</strong>
。
</li>

</ul>

<details>

<summary>
部分文字列とは？
</summary>
部分文字列とは連続する部分列のことを指します。例えば `1`, `12`, `23`は `123`の部分文字列ですが、`21`や `13`は `123`の部分文字列ではありません。

</details>

<p>



</p>

<p>
正整数 $L, R$が与えられます。$L$以上 $R$以下の整数からなる良い集合 $A$の要素数の最大値を求めてください。
</p>

<p>
$T$個のテストケースが与えられるので、それぞれについて答えを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq T\leq 10^4$
</li>

<li>
$1\leq L\leq R\leq 10^{9}$
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

$T$$\text{case}_1$$\vdots$$\text{case}_T$
</div>

<p>
各テストケースは以下の形式で与えられます。
</p>

<div>

$L$$R$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力してください。$i$行目には、$\text{case}_i$に対する答えを出力してください。
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
3 8
3 18
1 1000

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

6
10
900

</div>

<p>
はじめの $2$つのテストケースについて、例えば次の $A$が要素数が最大であるような良い集合となります。
</p>

<ul>

<li>
$1$つめのテストケース：$A=\{3,4,5,6,7,8\}$. 
</li>

<li>
$2$つめのテストケース：$A=\{3,4,6,8,9,10,11,12,15,17\}$. 
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
