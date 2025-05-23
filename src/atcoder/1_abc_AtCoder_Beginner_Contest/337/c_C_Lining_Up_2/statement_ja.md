
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
人 $1,$人 $2,\ldots,$人 $N$の $N$人が一列に並んでいます。
</p>

<p>
並び方の情報が長さ $N$の数列 $A=(A _ 1,A _ 2,\ldots,A _ N)$として与えられます。
</p>

<p>
$A _ i\ (1\leq i\leq N)$は次のような情報を表しています。
</p>

<ul>

<li>
$A _ i=-1$のとき、人 $i$は先頭に並んでいる。
</li>

<li>
$A _ i\neq -1$のとき、人 $i$は人 $A _ i$のすぐ後ろに並んでいる。
</li>

</ul>

<p>
列に並んでいる人の番号を先頭から順番に出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq3\times10 ^ 5$
</li>

<li>
$A _ i=-1$もしくは $1\leq A _ i\leq N\ (1\leq i\leq N)$
</li>

<li>
情報と矛盾しないような $N$人の並び方がただ $1$通り存在する
</li>

<li>
入力はすべて整数
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

$N$$A _ 1$$A _ 2$$\ldots$$A _ N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
人 $s _ 1,$人 $s _ 2,\ldots,$人 $s _ N$がこの順に列に並んでいるとき、$s _ 1,s _ 2,\ldots,s _ N$をこの順に空白を区切りとして出力せよ。
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
4 1 -1 5 3 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3 5 4 1 2 6

</div>

<p>
先頭から、人 $3,$人 $5,$人 $4,$人 $1,$人 $2,$人 $6$がこの順に列に並んでいるとき、与えられた情報と一致しています。
</p>

<p>
実際、
</p>

<ul>

<li>
人 $1$は人 $4$のすぐ後ろに並んでいます。
</li>

<li>
人 $2$は人 $1$のすぐ後ろに並んでいます。
</li>

<li>
人 $3$は先頭に並んでいます。
</li>

<li>
人 $4$は人 $5$のすぐ後ろに並んでいます。
</li>

<li>
人 $5$は人 $3$のすぐ後ろに並んでいます。
</li>

<li>
人 $6$は人 $2$のすぐ後ろに並んでいます。
</li>

</ul>

<p>
となり、与えられた情報と一致していることが確認できます。
</p>

<p>
よって、$3,5,4,1,2,6$をこの順に空白区切りで出力してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10
-1 1 2 3 4 5 6 7 8 9

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1 2 3 4 5 6 7 8 9 10

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

30
3 25 20 6 18 12 26 1 29 -1 21 17 23 9 8 30 10 15 22 27 4 13 5 11 16 24 28 2 19 7

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

10 17 12 6 4 21 11 24 26 7 30 16 25 2 28 27 20 3 1 8 15 18 5 23 13 22 19 29 9 14

</div>

</section>

</div>

</span>

</span>

</div>
