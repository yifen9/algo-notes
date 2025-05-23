
<div>

<span>

<span>

<p>
配点 : $600$点
</p>

<div>

<section>

### **問題文**

<p>
$1$から $N$までの番号を付けられた $N$人の人が、人 $1$、人 $2$、$\cdots$、人 $N$の順に時計回りに円環状に等間隔に並んでいます。
それぞれの人が向いている方向は `L`または `R`のみからなる長さ $N$の文字列 $S$で表されます。各 $i \, (1 \leq i \leq N)$に対し、$S_i = $`L`ならば人 $i$は反時計回りの方向を向いており、$S_i = $`R`ならば人 $i$は時計回りの方向を向いています。
</p>

<p>
以下の操作を $N-1$回繰り返します。
</p>

<ul>

<li>
残っている人の中から等確率で一人を選び、その人から見て一番手前にいる残っている人を円環から除く。このとき、選んだ人から除かれる人までの距離と同じだけのコストがかかる。
</li>

</ul>

<p>
ここで、人 $i$から人 $j$$(i \neq j)$までの距離を以下のように定義します。
</p>

<ol>

<li>
人 $i$が時計回りの方向を向いている場合
<ul>

<li>
$i \lt j$ならば $j-i$
</li>

<li>
$i \gt j$ならば $j-i+N$
</li>

</ul>

</li>

<li>
人 $i$が反時計回りの方向を向いている場合
<ul>

<li>
$i \lt j$ならば $i-j+N$
</li>

<li>
$i \gt j$ならば $i-j$
</li>

</ul>

</li>

</ol>

<p>
合計コストの期待値を$\mod 998244353$で求めてください（注記参照）。
</p>

</section>

</div>

<div>

<section>

### **注記**

<p>
求める期待値は必ず有理数となることが証明できます。またこの問題の制約下では、その値を互いに素な $2$つの整数 $P$, $Q$を用いて $\frac{P}{Q}$と表したとき、$R \times Q \equiv P\pmod{998244353}$かつ $0 \leq R \lt 998244353$を満たす整数 $R$がただ一つ存在することが証明できます。この $R$を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 300$
</li>

<li>
$N$は整数
</li>

<li>
$S$は `L`と `R`のみからなる長さ $N$の文字列
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

$N$$S$
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

3
LLR

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

831870297

</div>

<p>
求める期待値は $\frac{17}{6}$です。$831870297 \times 6 \equiv 17\pmod{998244353}$ですので、$831870297$を出力します。
</p>

<p>
なお、例えば以下のような操作手順が考えられます。
</p>

<ol>

<li>
人 $2$を選ぶ。人 $2$から見て一番手前にいる、円環に残っている人は人 $1$であるため、人 $1$を円環から除く。
</li>

<li>
人 $2$をもう一度選ぶ。人 $2$から見て一番手前にいる、円環に残っている人は人 $3$であるため、人 $3$を円環から除く。
</li>

</ol>

<p>
この操作手順における合計コストは $3(=1+2)$となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10
RRRRRRLLRR

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

460301586

</div>

</section>

</div>

</span>

</span>

</div>
