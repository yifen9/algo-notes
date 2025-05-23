
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
AtCoder 市では市長選挙が行われています。候補者は高橋氏と青木氏です。
</p>

<p>
$2$人のどちらかに投じられた有効票は $N$票あり、現在開票が行われています。なお、 $N$は奇数です。
</p>

<p>
現在の開票作業の途中経過は高橋氏に $T$票、青木氏に $A$票です。
</p>

<p>
現時点で勝敗が確定しているかを判定してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 99$
</li>

<li>
$N$は奇数
</li>

<li>
$0 \leq T,A \leq N$
</li>

<li>
$T+A \leq N$
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

$N$$T$$A$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
現時点で勝敗が確定しているならば `Yes`、そうでなければ `No`と出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

7 4 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes

</div>

<p>
残りの $1$票が青木氏に入っても、高橋氏は勝利します。高橋氏の勝利が確定しているため、`Yes`と出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

99 12 48

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

No

</div>

<p>
現時点では青木氏が多く票を獲得していますが、高橋氏が残りの $39$票を獲得すると高橋氏が勝利します。よって、`No`と出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1 0 0

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

No

</div>

</section>

</div>

</span>

</span>

</div>
