
<div>

<span>

<span>

<p>
配点 : $400$点
</p>

<div>

<section>

### **問題文**

<p>
$1$から $N$の番号がついた、表裏が区別できるコインが $N$枚あります。コインの表裏は長さ $N$の文字列 $S$で表され、$S$の $i$番目の文字が `1`のときコイン $i$は表を向いており、`0`のときコイン $i$は裏を向いています。
</p>

<p>
あなたは、以下の操作を $0$回以上好きな回数繰り返すことができます。
</p>

<ul>

<li>
$1\leq i < j\leq N$かつ $j-i\geq \bm{2}$を満たす整数組 $(i,j)$を選ぶ。コイン $i$とコイン $j$を裏返す。
</li>

</ul>

<p>
操作によって $N$枚のコイン全てを裏向きにできるか判定し、可能な場合必要な操作の回数の最小値を求めてください。
</p>

<p>
$T$個のテストケースが与えられるので、それぞれについて答えてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq T  \leq 2\times 10^5$
</li>

<li>
$3 \leq N  \leq 2\times 10^5$
</li>

<li>
$S$は `0`, `1`からなる長さ $N$の文字列
</li>

<li>
入力される数値は全て整数
</li>

<li>
$1$つの入力に含まれるテストケースについて、$N$の総和は $2\times 10^5$以下
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

$T$$\mathrm{case}_1$$\vdots$$\mathrm{case}_T$
</div>

<p>
​
各ケースは以下の形式で与えられる。
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
$T$行出力せよ。$i\ (1\leq i \leq T)$行目には、 $i$番目のテストケースについて、操作によりコインを全て裏向きにできる場合は必要な操作回数の最小値を、できない場合は `-1`を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5
3
101
6
101101
5
11111
6
000000
30
111011100110101100101000000111

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
2
-1
0
8

</div>

<p>
$1$番目のテストケースについては、$(i,j)=(1,3)$として操作を $1$回行うと、$1$回の操作でコインを全て裏向きにできます。
</p>

<p>
$2$番目のテストケースについては、$(i,j)=(1,3)$として操作を $1$回行い、$(i,j)=(4,6)$として操作を $1$回行うと、$2$回の操作でコインを全て裏向きにできます。
</p>

<p>
$3$番目のテストケースについては、コインを全て裏向きにできないことが証明できるので、`-1`を出力してください。
</p>

<p>
$4$番目のテストケースについては、コインは既に全て裏向きなので、操作は必要ありません。
</p>

</section>

</div>

</span>

</span>

</div>
