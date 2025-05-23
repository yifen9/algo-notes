
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
あなたは行きつけの店、インフバリューにアイスティーを買いに来ています。
</p>

<p>
この店では、様々なサイズのボトル入りアイスティーが様々な価格で売られています。具体的な価格は、$0.25$リットルサイズが一つ $Q$円、$0.5$リットルサイズが一つ $H$円、$1$リットルサイズが一つ $S$円、$2$リットルサイズが一つ $D$円です。各サイズの在庫は無限にあります。
</p>

<p>
あなたはちょうど $N$リットルのアイスティーを買いたいです。これに必要な金額は何円でしょうか？
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq Q, H, S, D \leq 10^8$
</li>

<li>
$1 \leq N \leq 10^9$
</li>

<li>
入力値はすべて整数である。
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

$Q$$H$$S$$D$$N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
ちょうど $N$リットルのアイスティーを買うのに必要な最小の金額を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

20 30 70 90
3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

150

</div>

<p>
$2$リットルサイズ一つと $0.5$リットルサイズ二つを買うと、$90 + 30 + 30 = 150$円で $3$リットルが手に入ります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10000 1000 100 10
1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

100

</div>

<p>
$2$リットルサイズはたったの $10$円ですが、$1$リットルしか必要ありません。ですから、$1$リットルサイズを $100$円で買う必要があります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10 100 1000 10000
1

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

40

</div>

<p>
今度は $0.25$リットルサイズ四つを $10 + 10 + 10 + 10 = 40$円で買うのがよいです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

12345678 87654321 12345678 87654321
123456789

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

1524157763907942

</div>

</section>

</div>

</span>

</span>

</div>
