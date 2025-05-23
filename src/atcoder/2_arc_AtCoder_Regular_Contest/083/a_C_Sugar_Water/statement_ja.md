
<div>

<span>

<span>

<p>
配点: $300$点
</p>

<div>

<section>

### **問題文**

<p>
すぬけ君はビーカーに砂糖水を作ろうとしています。
最初ビーカーは空です。すぬけ君は以下の $4$種類の操作をそれぞれ何回でも行うことができます。一度も行わない操作があっても構いません。
</p>

<ul>

<li>
操作 1: ビーカーに水を $100A$[g] 入れる。
</li>

<li>
操作 2: ビーカーに水を $100B$[g] 入れる。
</li>

<li>
操作 3: ビーカーに砂糖を $C$[g] 入れる。
</li>

<li>
操作 4: ビーカーに砂糖を $D$[g] 入れる。
</li>

</ul>

<p>
すぬけ君の実験環境下では、水 $100$[g] あたり砂糖は $E$[g] 溶けます。
</p>

<p>
すぬけ君はできるだけ濃度の高い砂糖水を作りたいと考えています。
</p>

<p>
ビーカーに入れられる物質の質量 (水の質量と砂糖の質量の合計) が $F$[g] 以下であり、
ビーカーの中に砂糖を溶け残らせてはいけないとき、
すぬけ君が作る砂糖水の質量と、それに溶けている砂糖の質量を求めてください。
答えが複数ある場合はどれを答えても構いません。
</p>

<p>
水 $a$[g] と砂糖 $b$[g] を混ぜた砂糖水の濃度は $\frac{100b}{a + b}$[%]です。
また、この問題では、砂糖が全く溶けていない水も濃度 $0$[%] の砂糖水と考えることにします。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≦ A < B ≦ 30$
</li>

<li>
$1 ≦ C < D ≦ 30$
</li>

<li>
$1≦ E ≦ 100$
</li>

<li>
$100A ≦ F ≦ 3,000$
</li>

<li>
$A, B, C, D, E, F$はすべて整数である。
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

$A$$B$$C$$D$$E$$F$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
整数を空白区切りで $2$つ出力せよ。
$1$つ目は求める砂糖水の質量、$2$つ目はそれに溶けている砂糖の質量とせよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

1 2 10 20 15 200

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

110 10

</div>

<p>
この入力例の状況では、水 $100$[g] あたり砂糖は $15$[g] 溶けます。
また、ビーカーに物質を $200$[g] まで入れることができます。
</p>

<p>
操作 1 と操作 3 を $1$回ずつ行うことで $110$[g] の砂糖水を作ることができます。
また、これ以上濃度の高い砂糖水を作ることはできません。
たとえば、以下のような操作は条件を満たしません。
</p>

<ul>

<li>
操作 1 と操作 4 を $1$回ずつ行うと、ビーカーに砂糖が溶け残ってしまいます。
</li>

<li>
操作 2 を $1$回と操作 3 を $3$回行うと、ビーカーの中の物質の量が $200$[g] を超えてしまいます。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1 2 1 2 100 1000

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

200 100

</div>

<p>
ほかに、たとえば以下の出力も正解となります。
</p>

<div>

400 200

</div>

<p>
一方、以下の出力は不正解となります。
</p>

<div>

300 150

</div>

<p>
なぜなら、砂糖が $150$[g] 溶けた $300$[g] の砂糖水を作るにはビーカーに水をちょうど $150$[g] 入れる必要がありますが、そのようなことは不可能だからです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

17 19 22 26 55 2802

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

2634 934

</div>

</section>

</div>

</span>

</span>

</div>
