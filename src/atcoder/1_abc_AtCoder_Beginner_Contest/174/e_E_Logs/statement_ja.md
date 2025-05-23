
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
丸太が $N$本あり、それぞれ長さは $A_1,A_2,\cdots,A_N$です。
</p>

<p>
これらの丸太を合計 $K$回まで切ることができます。
長さ $L$の丸太を片端から $t (0<t<L)$の位置で切ると、長さ $t,L-t$の丸太に分かれます。
</p>

<p>
丸太を合計 $K$回まで切った後最も長い丸太の長さが最小でいくつになるか求め、小数点以下を切り上げた値を出力してください。
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
$0 \leq K \leq 10^9$
</li>

<li>
$1 \leq A_i \leq 10^9$
</li>

<li>
入力はすべて整数である。
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

$N$$K$$A_1$$A_2$$\cdots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えとなる整数を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 3
7 9

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4

</div>

<ul>

<li>
まず、長さ $7$の丸太を片端から $3.5$の位置で切り、長さ $3.5$の丸太二本に分けます。
</li>

<li>
次に、長さ $9$の丸太を片端から $3$の位置で切り、長さ $3$と $6$の丸太に分けます。
</li>

<li>
最後に、長さ $6$の丸太を片端から $3.3$の位置で切り、長さ $3.3$と $2.7$の丸太に分けます。
</li>

</ul>

<p>
すると、最も長い丸太の長さは $3.5$になります。これが最小なので、小数点以下を切り上げた $4$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 0
3 4 5

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10 10
158260522 877914575 602436426 24979445 861648772 623690081 433933447 476190629 262703497 211047202

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

292638192

</div>

</section>

</div>

</span>

</span>

</div>
