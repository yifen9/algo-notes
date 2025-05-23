
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
すぬけくんは明日の運勢を占いました．
その結果，$N$個のシナリオのうちどれか一つが等確率で発生し，そのうち $i$番目のシナリオでは $A_i$円を失うことを知りました．
</p>

<p>
そこですぬけくんは，今日保険に入ることにしました．
保険会社に $x$円を支払ったとすると，$A_i$円を失った場合には $\min(A_i,2x)$円が補填されます．
ここで，$x$として任意の非負
<strong>
実数
</strong>
を選ぶことができます．
</p>

<p>
すぬけくんは，最終的に自分が失う金額（$=x+A_i-\min(A_i,2x)$）の期待値を最小化したいです．
この最小値を求めてください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 10^5$
</li>

<li>
$1 \leq A_i \leq 10^9$
</li>

<li>
入力される値はすべて整数である
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
入力は以下の形式で標準入力から与えられる．
</p>

<div>

$N$$A_1$$A_2$$\cdots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ．
絶対誤差または相対誤差が $10^{-6}$以下ならば，正解と判定される．
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3
3 1 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1.83333333333333333333

</div>

<p>
$x=1.5$とするのが最適です．
$1.5$円支払ったあと，以下の $3$つのシナリオが等確率で起こります．
</p>

<ul>

<li>

<p>
シナリオ $1$: $3$円失ったあと，$\min(3,2x)=3$円が補填される．
最終的にすぬけくんが失う金額は，$x+A_1-\min(A_1,2x)=1.5+3-3=1.5$円である．
</p>

</li>

<li>

<p>
シナリオ $2$: $1$円失ったあと，$\min(1,2x)=1$円が補填される．
最終的にすぬけくんが失う金額は，$x+A_2-\min(A_2,2x)=1.5+1-1=1.5$円である．
</p>

</li>

<li>

<p>
シナリオ $3$: $4$円失ったあと，$\min(4,2x)=3$円が補填される．
最終的にすぬけくんが失う金額は，$x+A_3-\min(A_3,2x)=1.5+4-3=2.5$円である．
</p>

</li>

</ul>

<p>
よって，失う金額の期待値は，$(1.5+1.5+2.5)/3=1.833333\cdots$です．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10
866111664 178537096 844917655 218662351 383133839 231371336 353498483 865935868 472381277 579910117

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

362925658.10000000000000000000

</div>

</section>

</div>

</span>

</span>

</div>
