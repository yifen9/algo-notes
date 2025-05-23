
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
正の整数 $A_{1}, A_{2}, A_{3}$が与えられます。
以下の条件を全て満たす正の整数の組 $(X_{1}, X_{2}, X_{3})$の場合の数を $998244353$で割ったあまりを求めてください。
</p>

<ul>

<li>
$X_{1}$は $10$進法で $A_{1}$桁の正の整数
</li>

<li>
$X_{2}$は $10$進法で $A_{2}$桁の正の整数
</li>

<li>
$X_{3}$は $10$進法で $A_{3}$桁の正の整数
</li>

<li>
$X_{1} + X_{2} = X_{3}$
</li>

</ul>

<p>
$1$つの入力ファイルにつき $T$個のテストケースが与えられるので、それぞれについて解いてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq T\leq 10^{5}$
</li>

<li>
$1\leq A_{i}\leq 10^{9}$
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
入力は以下の形式で標準入力から与えられます。
</p>

<div>

$T$$\text{case}_{1}$$\text{case}_{2}$$\vdots$$\text{case}_{T}$
</div>

<p>
各ケースは以下の形で与えられます。
</p>

<div>

$A_{1}$$A_{2}$$A_{3}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力してください。$i$行目には $\text{case}_{i}$に対する答えを出力してください。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4
1 1 1
1 6 7
167 167 167
111 666 777

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

36
45
731780675
0

</div>

<p>
$1$つ目のケースについて、$(X_{1}, X_{2}, X_{3}) = (1, 6, 7), (2, 1, 3)$などが条件を満たします。
</p>

<p>
$(X_{1}, X_{2}, X_{3}) = (6, 7, 13), (3, 4, 5)$などは条件を満たしません。
</p>

<p>
条件を満たす $(X_{1}, X_{2}, X_{3})$の組は $36$通りあるので $36$を出力してください。
</p>

<p>
$3$つ目のケースについて、答えを $998244353$で割ったあまりを出力することに注意してください。
</p>

<p>
$4$つ目のケースについて、条件を満たす $(X_{1}, X_{2}, X_{3})$の組が存在しないこともあります。
</p>

</section>

</div>

</span>

</span>

</div>
