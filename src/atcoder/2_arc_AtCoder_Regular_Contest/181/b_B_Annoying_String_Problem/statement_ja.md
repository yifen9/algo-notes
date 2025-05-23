
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
英小文字からなる文字列 $S,T$および `0`, `1`からなる文字列 $X$に対し、英小文字からなる文字列 $f(S,T,X)$を以下のように定めます。
</p>

<ul>

<li>
空文字列に対し、 $i=1,2,\dots,|X|$の順に、 $X$の $i$文字目が `0`なら $S$を、 `1`なら $T$を末尾に結合することで得られる文字列
</li>

</ul>

<p>
英小文字からなる文字列 $S$および `0`, `1`からなる文字列 $X,Y$が与えられます。
</p>

<p>
英小文字からなる文字列 $T$（空文字列でもよい）であって、 $f(S,T,X)=f(S,T,Y)$が成り立つようなものが存在するか判定してください。
</p>

<p>
$t$個のテストケースが与えられるのでそれぞれについて答えを求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq t \leq 5 \times 10^5$
</li>

<li>
$1 \leq |S| \leq 5\times 10^5$
</li>

<li>
$1 \leq |X|,|Y| \leq 5\times 10^5$
</li>

<li>
$S$は英小文字からなる文字列
</li>

<li>
$X,Y$は `0`, `1`からなる文字列
</li>

<li>
$1$つの入力に含まれるテストケースについて、 $|S|$の総和は $5 \times 10^5$以下
</li>

<li>
$1$つの入力に含まれるテストケースについて、 $|X|$の総和は $5 \times 10^5$以下
</li>

<li>
$1$つの入力に含まれるテストケースについて、 $|Y|$の総和は $5 \times 10^5$以下
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

$t$$\mathrm{case}_1$$\vdots$$\mathrm{case}_t$
</div>

<p>
各ケースは以下の形式で与えられる。
</p>

<div>

$S$$X$$Y$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$t$行出力せよ。 $i$行目には $i$番目のテストケースについて、条件を満たす $T$が存在するならば `Yes`を、存在しないならば `No`を出力せよ。
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
araara
01
111
araaaa
100100
0010111
abacabac
0
1111

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes
No
No

</div>

<p>
以下、文字列の結合を $+$を用いて表します。
</p>

<p>
$1$番目のテストケースについて、 $T=$`ara`とすると $f(S,T,X)=S+T=$`araaraara`$, f(S,T,Y)=T+T+T=$`araaraara`となるため、 $f(S,T,X)=f(S,T,Y)$が成り立ちます。
</p>

<p>
$2,3$番目のテストケースについて、条件を満たす $T$は存在しません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2
empty
10101
00
empty
11111
111

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

Yes
Yes

</div>

<p>
$T$は空文字列であっても構いません。
</p>

</section>

</div>

</span>

</span>

</div>
