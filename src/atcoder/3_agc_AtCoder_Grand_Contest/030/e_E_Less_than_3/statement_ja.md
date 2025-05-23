
<div>

<span>

<span>

<p>
配点 : $1400$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の文字列 $s$および $t$が与えられます。
$s$および $t$は `0`と `1`からなります。
また、$s$および $t$において、同一の文字が $3$個以上連続する箇所はありません。
</p>

<p>
あなたは次の操作を繰り返し行い、$s$を書き換えていくことができます。
</p>

<ul>

<li>
添字 $i$($1 \leq i \leq N$) を任意に選び、$s$の $i$文字目を反転する (すなわち、`0`を `1`へ、`1`を `0`へ書き換える)。 ただし、操作後の $s$において、同一の文字が $3$個以上連続する箇所があってはならない。
</li>

</ul>

<p>
あなたの目標は $s$を $t$に一致させることです。
$s$を $t$に一致させるために必要な操作回数の最小値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 5000$
</li>

<li>
$s$および $t$の長さは $N$である。
</li>

<li>
$s$および $t$は `0`と `1`からなる。
</li>

<li>
$s$および $t$において、同一の文字が $3$個以上連続する箇所はない。
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

$N$$s$$t$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$s$を $t$に一致させるために必要な操作回数の最小値を出力せよ。なお、有限回の操作で目的は必ず達成可能であることが証明できる。
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
0011
0101

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
例えば、`0011`→ `1011`→ `1001`→ `1101`→ `0101`と操作を行えばよいです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1
0
0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8
00110011
10101010

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

10

</div>

</section>

</div>

</span>

</span>

</div>
