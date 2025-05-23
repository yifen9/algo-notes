
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
高橋君は $N$日間の鉄道旅行を計画しています。

高橋君はそれぞれの日について、運賃の通常料金を払うか、$1$日周遊パスを $1$枚使用するか選ぶことができます。
</p>

<p>
ここで、$1\leq i\leq N$について、$i$日目の旅行にかかる運賃の通常料金は $F_i$円です。

一方、$1$日周遊パスは $D$枚セットで $P$円で発売されており、何セットでも購入することが可能ですが、$D$枚単位でしか購入することができません。

また、購入したパスは $1$枚ずつ好きな日に使うことができ、旅行が終了した時点で余っていても構いません。
</p>

<p>
$N$日間の旅行でかかる金額、すなわち $1$日周遊パスの購入にかかった代金と、$1$日周遊パスを利用しなかった日における運賃の通常料金の合計金額の和としてあり得る最小値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq 2\times 10^5$
</li>

<li>
$1\leq D\leq 2\times 10^5$
</li>

<li>
$1\leq P\leq 10^9$
</li>

<li>
$1\leq F_i\leq 10^9$
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

$N$$D$$P$$F_1$$F_2$$\ldots$$F_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$N$日間の旅行でかかる金額としてあり得る最小値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 2 10
7 1 6 3 6

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

20

</div>

<p>
$1$日周遊パスを $1$セットだけ購入し、$1$日目と $3$日目に使用すると、合計金額は $(10\times 1)+(0+1+0+3+6)=20$となり、このときかかる金額が最小となります。

よって、$20$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 1 10
1 2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

6

</div>

<p>
$3$日間すべてにおいて運賃の通常料金を支払ったときに最小となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8 3 1000000000
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

3000000000

</div>

<p>
$1$日周遊パスを $3$セット購入し、$8$日間すべてにおいて $1$日周遊パスを利用したときに最小となります。

答えが $32$bit 整数型に収まらないことがあることに注意してください。
</p>

</section>

</div>

</span>

</span>

</div>
