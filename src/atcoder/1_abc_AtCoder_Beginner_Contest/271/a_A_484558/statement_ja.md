
<div>

<span>

<span>

<p>
配点 : $100$点
</p>

<div>

<section>

### **問題文**

<p>
`0123456789`に加えて $10,11,12,13,14,15$に対応する数字として `ABCDEF`を使う $16$進表記では、$0$以上 $255$以下の整数は $1$桁または $2$桁になります。

例えば、$0$や $12$は $16$進表記では `0`や `C`と $1$桁になり、$99$や $255$は $16$進表記では `63`や `FF`と $2$桁になります。  
</p>

<p>
$0$以上 $255$以下の整数 $N$を、必要に応じて先頭に `0`を加えることで
<strong>
ちょうど $2$桁
</strong>
の $16$進表記に変換してください。
</p>

</section>

</div>

<div>

<section>

### **注記**

<p>
英大文字と英小文字は区別されます。特に、$16$進表記の数字として `ABCDEF`の代わりに `abcdef`を使うことは
<strong>
出来ません
</strong>
。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$0 \leq N \leq 255$
</li>

<li>
$N$は整数
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

$N$
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

99

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

63

</div>

<p>
$99$は $16$進表記で `63`です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

12

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0C

</div>

<p>
$12$は $16$進表記で `C`です。

要求されているのはちょうど $2$桁の $16$進表記に変換することなので、`C`の先頭に `0`を加えた `0C`が答えです。
</p>

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

00

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

255

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

FF

</div>

</section>

</div>

</span>

</span>

</div>
