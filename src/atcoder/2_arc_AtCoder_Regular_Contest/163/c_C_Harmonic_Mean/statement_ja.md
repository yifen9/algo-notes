
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
以下の条件を全て満たす長さ $N$の正整数列 $A=(A_1,A_2,\dots,A_N)$が存在するか判定し、存在するならば一つ構築してください。
</p>

<ul>

<li>
$\sum_{i=1}^{N} \frac{1}{A_i} = 1$
</li>

<li>
$A$の要素は全て相異なる。
</li>

<li>
$1 \le A_i \le 10^9(1 \le i \le N)$
</li>

</ul>

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
$1 \le T \le 500$
</li>

<li>
$1 \le N \le 500$
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

$T$$\mathrm{case}_1$$\mathrm{case}_2$$\vdots$$\mathrm{case}_T$
</div>

<p>
ここで、$\mathrm{case}_i$とは $i$個目のテストケースである。各テストケースは以下の形式で与えられる。
</p>

<div>

$N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
それぞれのケースについて、条件を満たす正整数列 $A=(A_1,A_2,\dots,A_N)$が存在しないならば `No`を出力せよ。存在するならば、以下の形式で出力せよ。
</p>

<div>

Yes
$A_1$$A_2$$\dots$$A_N$
</div>

<p>
条件を満たす解が複数存在する場合、どれを出力しても正解とみなされる。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2
3
5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes
2 3 6 
Yes
3 4 5 6 20 

</div>

<p>
$1$個目のテストケースでは、$N=3$です。
</p>

<p>
$A=(2,3,6)$は、$\frac{1}{2} + \frac{1}{3} + \frac{1}{6} = 1$かつ他の条件も全て満たすため正当です。
</p>

<p>
$2$個目のテストケースでは、$N=5$です。
</p>

<p>
$A=(3,4,5,6,20)$は、$\frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{20} = 1$かつ他の条件も全て満たすため正当です。
</p>

<p>
例えば、$A=(5,5,5,5,5)$は、$1,3$個目の条件を満たしていますが同じ要素が存在するため不適であることに注意してください。
</p>

</section>

</div>

</span>

</span>

</div>
