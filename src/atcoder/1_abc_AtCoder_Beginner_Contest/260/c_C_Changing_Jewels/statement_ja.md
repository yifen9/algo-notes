
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
高橋君はレベル $N$の赤い宝石を $1$個持っています。(他に宝石は持っていません。) 

高橋君は次の操作を好きなだけ行うことができます。
</p>

<ul>

<li>
レベル $n$の赤い宝石 ($n$は $2$以上) を「レベル $n-1$の赤い宝石 $1$個と、レベル $n$の青い宝石 $X$個」に変換する。
</li>

<li>
レベル $n$の青い宝石 ($n$は $2$以上) を「レベル $n-1$の赤い宝石 $1$個と、レベル $n-1$の青い宝石 $Y$個」に変換する。
</li>

</ul>

<p>
高橋君はレベル $1$の青い宝石ができるだけたくさんほしいです。操作によって高橋君はレベル $1$の青い宝石を最大何個入手できますか？
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 10$
</li>

<li>
$1 \leq X \leq 5$
</li>

<li>
$1 \leq Y \leq 5$
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

$N$$X$$Y$
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

2 3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

12

</div>

<p>
次のような変換を行うことで、高橋君はレベル $1$の青い宝石を $12$個手に入れることができます。
</p>

<ul>

<li>
まず、レベル $2$の赤い宝石 $1$個を、レベル $1$の赤い宝石 $1$個とレベル $2$の青い宝石 $3$個に変換します。  
<ul>

<li>
操作後の高橋君は、レベル $1$の赤い宝石 $1$個とレベル $2$の青い宝石 $3$個を持っています。
</li>

</ul>

</li>

<li>
次に、レベル $2$の青い宝石 $1$個を、レベル $1$の赤い宝石 $1$個とレベル $1$の青い宝石 $4$個に変換します。この変換を $3$回繰り返します。
<ul>

<li>
操作後の高橋君は、レベル $1$の赤い宝石 $4$個とレベル $1$の青い宝石 $12$個を持っています。
</li>

</ul>

</li>

<li>
これ以上変換を行うことはできません。
</li>

</ul>

<p>
$12$個より多くレベル $1$の青い宝石を手に入れることはできないので、答えは $12$になります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1 5 5

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

<p>
高橋君がレベル $1$の青い宝石を $1$個も手に入れられない場合もあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10 5 5

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

3942349900

</div>

<p>
答えが $32$bit 整数に収まらない場合があることに注意してください。
</p>

</section>

</div>

</span>

</span>

</div>
