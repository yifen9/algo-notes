
<div>

<span>

<span>

<p>
配点 : $2400$点
</p>

<div>

<section>

### **問題文**

<p>
$2N+1$人の参加者で、多数決というゲームを行います。各参加者は $2$つの選択肢の一方に投票し、最終的により多くの票を集めた選択肢に投票した参加者が勝者となります。投票は具体的には以下のように行われます。
</p>

<ol>

<li>
全員が投票を終えた場合、そこで投票は終了する。そうでない場合、2. に進む。
</li>

<li>
投票をしていない参加者のうち $1$人がランダムに選ばれ、その人が投票を行う。そして、1. に戻る。
</li>

</ol>

<p>
参加者のうち $K$人は超能力者であり、自身の投票時に、各選択肢が何票投票されているのかを知ることができます。
そのため、各参加者は以下のようにして投票先を決定します。
</p>

<ul>

<li>
参加者が超能力者の場合、その時点でより多くの票を集めている選択肢に投票する。ただし、その時点で各選択肢の票数が等しい場合は、ランダムに一方の選択肢を選び投票する。
</li>

<li>
参加者が超能力者でない場合、ランダムに一方の選択肢を選び投票する。
</li>

</ul>

<p>
X はこのゲームの参加者であり、超能力者でもあります。X の勝率を $\bmod 10^9+7$で求めてください（注記参照）。
</p>

</section>

</div>

<div>

<section>

### **注記**

<ul>

<li>
求める確率は有理数となります。確率を分数 $\frac{y}{x}$（$x$と $y$は互いに素な正の整数）で表したとき、$x$は $P=10^9+7$と互いに素になるので、
$xz \equiv y \pmod P$なる $0$以上 $P-1$以下の唯一の整数 $z$を出力してください。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 2\times 10^6$
</li>

<li>
$1 \leq K \leq 2N+1$
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

$N$$K$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

916666674

</div>

<p>
X の勝率は $\frac{11}{12}$です。
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

958333341

</div>

<p>
X の勝率は $\frac{23}{24}$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8 5

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

582281799

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

100 100

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

196654831

</div>

</section>

</div>

---

<div>

<section>

### **入力例 5**

<div>

2000000 2000000

</div>

</section>

</div>

<div>

<section>

### **出力例 5**

<div>

768385859

</div>

</section>

</div>

</span>

</span>

</div>
