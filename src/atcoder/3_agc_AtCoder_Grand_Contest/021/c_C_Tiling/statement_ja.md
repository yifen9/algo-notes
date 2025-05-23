
<div>

<span>

<span>

<p>
配点 : $900$点
</p>

<div>

<section>

### **問題文**

<p>
高橋君は、縦 $N$マス横 $M$マスのマス目を持っています。
次の条件をすべて満たすように、縦 $1$マス横 $2$マスのタイル $A$枚と、縦 $2$マス横 $1$マスのタイル $B$枚を
マス目に置くことができるかどうかを判定し、可能なら置き方をひとつ構成してください。
</p>

<ul>

<li>
マス目の上に、全てのタイルを置かなければならない。
</li>

<li>
タイルはマス目からはみ出してはならず、また異なるタイル同士が重なってはならない。
</li>

<li>
マス目やタイルを回転させてはならない。
</li>

<li>
全てのタイルは、マス目のちょうど $2$マスを完全に覆う。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N,M \leq 1000$
</li>

<li>
$0 \leq A,B \leq 500000$
</li>

<li>
$N,M,A,B$は整数である
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

$N$$M$$A$$B$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
タイルを全て置くことができない場合、`NO`を出力せよ。
そうでない場合、以下のように出力せよ。
</p>

<div>

YES
$c_{11}...c_{1M}$$:$$c_{N1}...c_{NM}$
</div>

<p>
ただし、$c_{ij}$はマス目の $i$行 $j$列目の状態を表し、文字 `.`,`<`.`>`,`^`,`v`のいずれかでなければならない。
</p>

<p>
$c_{ij}$が、
</p>

<ul>

<li>
`.`のとき、マス目の $i$行 $j$列目はタイルで覆われていないことを、
</li>

<li>
`<`のとき、マス目の $i$行 $j$列目は縦 $1$マス、横 $2$マスのタイルの左半分で覆われていることを、
</li>

<li>
`>`のとき、マス目の $i$行 $j$列目は縦 $1$マス、横 $2$マスのタイルの右半分で覆われていることを、
</li>

<li>
`^`のとき、マス目の $i$行 $j$列目は縦 $2$マス、横 $1$マスのタイルの上半分で覆われていることを、
</li>

<li>
`v`のとき、マス目の $i$行 $j$列目は縦 $2$マス、横 $1$マスのタイルの下半分で覆われていることを、
</li>

</ul>

<p>
それぞれ表す。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 4 4 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

YES
<><>
^<>^
v<>v

</div>

<p>
縦 $3$マス横 $4$マスのマス目に、縦 $1$マス横 $2$マスのタイル $4$枚と、縦 $2$マス横 $1$マスのタイル $2$枚を置く方法の一例として、
出力例のようなものがあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 5 5 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

YES
<>..^
^.<>v
v<>.^
<><>v

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

7 9 20 20

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

NO

</div>

</section>

</div>

</span>

</span>

</div>
