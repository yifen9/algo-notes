
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
高橋君と青木君がモンスターを闘わせます。
</p>

<p>
高橋君のモンスターは体力が $A$で攻撃力が $B$です。
青木君のモンスターは体力が $C$で攻撃力が $D$です。
</p>

<p>
高橋君→青木君→高橋君→青木君→... の順に攻撃を行います。
攻撃とは、相手のモンスターの体力の値を自分のモンスターの攻撃力のぶんだけ減らすことをいいます。
このことをどちらかのモンスターの体力が $0$以下になるまで続けたとき、
先に自分のモンスターの体力が $0$以下になった方の負け、そうでない方の勝ちです。
</p>

<p>
高橋君が勝つなら `Yes`、負けるなら `No`を出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq A,B,C,D \leq 100$
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

$A$$B$$C$$D$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君が勝つなら `Yes`、負けるなら `No`を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

10 9 10 10

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

No

</div>

<p>
はじめに、高橋君の攻撃で青木君のモンスターの体力が $10-9=1$になります。
</p>

<p>
次に、青木君の攻撃で高橋君のモンスターの体力が $10-10=0$になります。
</p>

<p>
高橋君のモンスターの体力が先に $0$以下になったため、高橋君の負けです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

46 4 40 5

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

Yes

</div>

</section>

</div>

</span>

</span>

</div>
