
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
高橋君はAtCoderレストランの前の待ち行列の管理をしたいです。はじめ、待ち行列に並んでいる人はいません。
また、待ち行列に並ぶ人は必ず注文する料理のメニュー番号が書かれた食券を持って並びます。
</p>

<p>
$Q$個のクエリが与えられるので順に処理してください。クエリは $2$種類あり、以下のいずれかの形式で与えられます。
</p>

<ul>

<li>
`1 X`: 待ち行列の末尾に $1$人並ぶ。このとき並ぶ人はメニュー番号が $X$の食券を持って並ぶ。
</li>

<li>
`2`: 待ち行列の先頭にいる人をレストランに案内する。このとき案内される人が持っている食券のメニュー番号を出力する。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq Q \leq 100$
</li>

<li>
$1 \leq X \leq 100$
</li>

<li>
$2$つ目の形式のクエリについて、案内する前に待ち行列に並んでいる人がいる
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
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$Q$$\mathrm{query}_1$$\mathrm{query}_2$$\vdots$$\mathrm{query}_Q$
</div>

<p>
各クエリは以下の $2$種類のいずれかの形式で与えられる。
</p>

<div>

$1$$X$
</div>

<div>

$2$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
問題文の指示に従ってクエリへの答えを改行区切りで出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6
1 3
1 1
1 15
2
1 3
2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3
1

</div>

<p>
はじめ、待ち行列に並んでいる人はいません。
</p>

<ul>

<li>
$1$つ目のクエリについて、メニュー番号が $3$の食券を持った人が待ち行列の末尾に並びます。この時、待ち行列に並んでいる人が持っている食券のメニュー番号は先頭の人から順に $3$です。
</li>

<li>
$2$つ目のクエリについて、メニュー番号が $1$の食券を持った人が待ち行列の末尾に並びます。この時、待ち行列に並んでいる人が持っている食券のメニュー番号は先頭の人から順に $3,1$です。
</li>

<li>
$3$つ目のクエリについて、メニュー番号が $15$の食券を持った人が待ち行列の末尾に並びます。この時、待ち行列に並んでいる人が持っている食券のメニュー番号は先頭の人から順に $3,1,15$です。
</li>

<li>
$4$つ目のクエリについて、待ち行列の先頭にいる人をレストランに案内します。案内する人はメニュー番号が $3$の食券を持っているので $3$を出力します。この時、待ち行列に並んでいる人が持っている食券のメニュー番号は先頭の人から順に $1,15$です。
</li>

<li>
$5$つ目のクエリについて、メニュー番号が $3$の食券を持った人が待ち行列の末尾に並びます。この時、待ち行列に並んでいる人が持っている食券のメニュー番号は先頭の人から順に $1,15,3$です。
</li>

<li>
$6$つ目のクエリについて、待ち行列の先頭にいる人をレストランに案内します。案内する人はメニュー番号が $1$の食券を持っているので $1$を出力します。この時、待ち行列に並んでいる人が持っている食券のメニュー番号は先頭の人から順に $15,3$です。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7
1 3
1 1
1 4
1 1
1 5
1 9
1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>


</div>

<p>
$2$つ目の形式のクエリがないことがあることに注意してください。
</p>

</section>

</div>

</span>

</span>

</div>
