
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
長さ $N$の整数列 $A = (A_1, A_2, \dots, A_N)$があります。

あなたは次の操作を $0$回以上好きな回数行うことが出来ます。
</p>

<ul>

<li>
$1 \leq i \lt j \leq N$を満たす整数対 $(i, j)$を選び、$A_i$を $A_i + 1$に、$A_j$を $A_j - 1$に置き換える。
</li>

</ul>

<p>
操作によって $A$を広義単調増加な数列にすることが可能かどうか判定してください。  
</p>

<p>
$T$個のテストケースが与えられるので、それぞれに対して答えを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq T \leq 2 \times 10^5$
</li>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

<li>
$0 \leq A_i \leq 10^9$
</li>

<li>
全てのテストケースに対する $N$の総和は $2 \times 10^5$以下
</li>

<li>
入力される値は全て整数
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
入力は以下の形式で標準入力から与えられる。ここで $\mathrm{case}_i$は $i$番目のテストケースを意味する。
</p>

<div>

$T$$\mathrm{case}_1$$\mathrm{case}_2$$\vdots$$\mathrm{case}_T$
</div>

<p>
各テストケースは以下の形式で与えられる。
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
$T$行出力せよ。$i$行目には $i$番目のテストケースへの答えを出力せよ。

各テストケースでは、操作によって $A$を広義単調増加な数列にすることが可能な場合は `Yes`を、そうでない場合は `No`を出力せよ。
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
3
1 7 5
2
9 0
10
607 495 419 894 610 636 465 331 925 724

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes
No
Yes

</div>

<p>
$1$番目のテストケースでは、次のように操作を行うことで $A$を広義単調増加な数列にすることが出来ます。
</p>

<ul>

<li>
$(i, j)$として $(1, 2)$を選ぶ。操作後の $A$は $(2, 6, 5)$になる。
</li>

<li>
$(i, j)$として $(1, 2)$を選ぶ。操作後の $A$は $(3, 5, 5)$になる。
</li>

</ul>

<p>
$2$番目のテストケースでは、どのように操作しても $A$を広義単調増加な数列にすることは出来ません。
</p>

</section>

</div>

</span>

</span>

</div>
