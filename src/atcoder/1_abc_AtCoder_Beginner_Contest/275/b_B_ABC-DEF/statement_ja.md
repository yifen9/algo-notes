
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
非負整数 $A,B,C,D,E,F$があり、$A\times B\times C\geq D\times E\times F$をみたしています。

$(A\times B\times C)-(D\times E\times F)$の値を $998244353$で割った余りを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$0\leq A,B,C,D,E,F\leq 10^{18}$
</li>

<li>
$A\times B\times C\geq D\times E\times F$
</li>

<li>
$A,B,C,D,E,F$は整数
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

$A$$B$$C$$D$$E$$F$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$(A\times B\times C)-(D\times E\times F)$を $998244353$で割った余りを整数で出力せよ。  
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 3 5 1 2 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

22

</div>

<p>
$A\times B\times C=2\times 3\times 5=30$, $D\times E\times F=1\times 2\times 4=8$より、

$(A\times B\times C)-(D\times E\times F)=22$であり、これを $998244353$で割った余りである $22$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1 1 1000000000 0 0 0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1755647

</div>

<p>
$A\times B\times C=1000000000$, $D\times E\times F=0$より、

$(A\times B\times C)-(D\times E\times F)=1000000000$であり、これを $998244353$で割った余りである $1755647$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0

</div>

<p>
$(A\times B\times C)-(D\times E\times F)=0$であり、これを $998244353$で割った余りである $0$を出力します。
</p>

</section>

</div>

</span>

</span>

</div>
