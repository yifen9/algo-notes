
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
空でない文字列に対し、先頭の文字を末尾に移動する操作を
<strong>
左シフト
</strong>
、末尾の文字を先頭に移動する操作を
<strong>
右シフト
</strong>
と呼びます。
</p>

<p>
例えば、`abcde`に対して左シフトを $1$回行うと `bcdea`となり、右シフトを $2$回行うと `deabc`となります。
</p>

<p>
英小文字からなる空でない文字列 $S$が与えられます。$S$に対し左シフトと右シフトをそれぞれ好きな回数（$0$回でもよい）行って得られる文字列のうち、辞書順で最小のものと最大のものを求めてください。
</p>

<details>

<summary>
辞書順とは？
</summary>

<p>
辞書順とは簡単に説明すると「単語が辞書に載っている順番」を意味します。より厳密な説明として、英小文字からなる相異なる文字列 $S, T$の大小を判定するアルゴリズムを以下に説明します。

</p>

<p>
以下では「 $S$の $i$文字目の文字」を $S_i$のように表します。また、 $S$が $T$より辞書順で小さい場合は $S \lt T$、大きい場合は $S \gt T$と表します。
</p>

<ol>

<li>
$S, T$のうち長さが大きくない方の文字列の長さを $L$とします。$i=1,2,\dots,L$に対して $S_i$と $T_i$が一致するか調べます。 
</li>

<li>
$S_i \neq T_i$である $i$が存在する場合、そのような $i$のうち最小のものを $j$とします。そして、$S_j$と $T_j$を比較して、$S_j$が $T_j$よりアルファベット順で小さい場合は $S \lt T$、そうでない場合は $S \gt T$と決定して、アルゴリズムを終了します。
  
</li>

<li>
$S_i \neq T_i$である $i$が存在しない場合、$S$と $T$の長さを比較して、$S$が $T$より短い場合は $S \lt T$、長い場合は $S \gt T$と決定して、アルゴリズムを終了します。 
</li>

</ol>

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$S$は英小文字からなる。
</li>

<li>
$S$の長さは $1$以上 $1000$以下である。
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

$S$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$2$行にわたって出力せよ。$S$に対し左シフトと右シフトをそれぞれ好きな回数（$0$回でもよい）行って得られる文字列のうち、辞書順で最小のものと最大のものをそれぞれ $S_{\min}, S_{\max}$とおいたとき、$1$行目には $S_{\min}$を、$2$行目には $S_{\max}$を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

aaba

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

aaab
baaa

</div>

<p>
操作によって、`aaab`$,$`aaba`$,$`abaa`$,$`baaa`の $4$通りの文字列を得ることができます。
これらのうち辞書順で最小、最大のものはそれぞれ `aaab`$,$`baaa`です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

z

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

z
z

</div>

<p>
どのように操作を行っても、得られる文字列は `z`のみです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

abracadabra

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

aabracadabr
racadabraab

</div>

</section>

</div>

</span>

</span>

</div>
