
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
日本において、アイス製品は次の $4$種類に大別されます。  
</p>

<ul>

<li>

<strong>
乳固形分
</strong>
が $15$パーセント以上、
<strong>
乳脂肪分
</strong>
が $8$パーセント以上含まれるものを「アイスクリーム」とする。  
</li>

<li>
上に当てはまらず、
<strong>
乳固形分
</strong>
が $10$パーセント以上、
<strong>
乳脂肪分
</strong>
が $3$パーセント以上含まれるものを「アイスミルク」とする。  
</li>

<li>
上のいずれにも当てはまらず、
<strong>
乳固形分
</strong>
が $3$パーセント以上含まれるものを「ラクトアイス」とする。  
</li>

<li>
上のいずれにも当てはまらないものを「氷菓」とする。  
</li>

</ul>

<p>
ここで、
<strong>
乳固形分
</strong>
は
<strong>
無脂乳固形分
</strong>
と
<strong>
乳脂肪分
</strong>
の $2$つから成ります。

AtCoder 名物の製品「スヌケアイス」には、
<strong>
無脂乳固形分
</strong>
は $A$パーセント、
<strong>
乳脂肪分
</strong>
は $B$パーセント含まれています。

スヌケアイスに上の分類を適用したとすると、$4$種類のどれに当てはまるでしょうか ?

答えは「出力」の項に従って整数で出力してください。  
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$0 \le A \le 100$
</li>

<li>
$0 \le B \le 100$
</li>

<li>
$A + B \le 100$
</li>

<li>
$A, B$は整数
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

$A$$B$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
以下に定められる整数を出力せよ :
</p>

<ul>

<li>
スヌケアイスがアイスクリームに当てはまる場合 : $1$
</li>

<li>
スヌケアイスがアイスミルクに当てはまる場合 : $2$
</li>

<li>
スヌケアイスがラクトアイスに当てはまる場合 : $3$
</li>

<li>
スヌケアイスが氷菓に当てはまる場合 : $4$
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

10 8

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1

</div>

<p>
このスヌケアイスには、無脂乳固形分が $10$パーセント、乳脂肪分が $8$パーセント含まれているため、乳固形分は $18$パーセント含まれています。

乳固形分が $15$パーセント以上、乳脂肪分が $8$パーセント以上含まれているため、アイスクリームに分類されます。従って $1$が正しい出力です。  
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3

</div>

<p>
乳固形分がちょうど $3$パーセント含まれているため、アイスクリームやアイスミルクには該当しませんが、ラクトアイスに該当するため $3$を出力します。  
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

0 0

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

4

</div>

<p>
氷菓に分類されます。  
</p>

</section>

</div>

</span>

</span>

</div>
