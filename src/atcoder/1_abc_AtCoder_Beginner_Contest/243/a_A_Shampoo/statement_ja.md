
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
高橋君の家には、高橋君、高橋君の父、高橋君の母の $3$人が住んでおり、全員が毎晩風呂で髪を洗います。

風呂には、高橋君の父、高橋君の母、高橋君の順に入り、それぞれシャンプーを $A,B,C$ミリリットル使います。
</p>

<p>
今朝の時点で、ボトルには $V$ミリリットルのシャンプーが残っていました。このまま補充しない時、初めてシャンプーが不足するのは誰が使おうとした時ですか？
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq V,A,B,C \leq 10^5$
</li>

<li>
入力に含まれる値は全て整数である
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

$V$$A$$B$$C$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
初めてシャンプーが不足するのが、高橋君の父が使おうとしたときならば `F`、高橋君の母が使おうとしたときならば `M`、高橋君が使おうとしたときならば `T`を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

25 10 11 12

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

T

</div>

<p>
シャンプーは $25$ミリリットル残っています。
</p>

<ul>

<li>
まず高橋君の父が $10$ミリリットル使い、残りは $15$ミリリットルになります。
</li>

<li>
次に高橋君の母が $11$ミリリットル使い、残りは $4$ミリリットルになります。
</li>

<li>
最後に高橋君が $12$ミリリットル使おうとしますが、$4$ミリリットルしか残っておらず、不足しています。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

30 10 10 10

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

F

</div>

<p>
シャンプーは $30$ミリリットル残っています。
</p>

<ul>

<li>
まず高橋君の父が $10$ミリリットル使い、残りは $20$ミリリットルになります。
</li>

<li>
次に高橋君の母が $10$ミリリットル使い、残りは $10$ミリリットルになります。
</li>

<li>
続いて高橋君が $10$ミリリットル使い、残りは $0$ミリリットルになります。
</li>

<li>
翌日、高橋君の父が $10$ミリリットル使おうとしますが、$0$ミリリットルしか残っておらず、不足しています。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

100000 1 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

M

</div>

</section>

</div>

</span>

</span>

</div>
