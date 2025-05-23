
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
`A`, `B`, `C`からなる長さ $N$の文字列 $S$が与えられます．
</p>

<p>
あなたは，$S$に対して以下の $2$種類の操作を好きな順序で好きな回数行うことができます．
</p>

<ul>

<li>
$S$の中で `A`を選び，消す．
文字を消した位置に，新たに `BB`を書き込む．
</li>

<li>
$S$の中で隣接する $2$文字であって，`BB`となっているものを選び，消す．
文字を消した位置に，新たに `A`を書き込む．
</li>

</ul>

<p>
操作を終えたあとの $S$としてあり得る文字列のうち，辞書順最小のものを求めてください．
</p>

<details>

<summary>
辞書順とは？
</summary>

<p>
辞書順とは簡単に説明すると「単語が辞書に載っている順番」を意味します。より厳密な説明として、相異なる文字列 $S$と文字列 $T$の大小を判定するアルゴリズムを以下に説明します。 
</p>

<p>
以下では $S$の $i$文字目の文字を $S_i$のように表します。また、 $S$が $T$より辞書順で小さい場合は $S \lt T$、大きい場合は $S \gt T$と表します。
</p>

<ol>

<li>
$S$と $T$のうち長さが短い方の文字列の長さを $L$とします。$i=1,2,\dots,L$に対して $S_i$と $T_i$が一致するか調べます。 
</li>

<li>
$S_i \neq T_i$である $i$が存在する場合、そのような $i$のうち最小のものを $j$とします。そして、$S_j$と $T_j$を比較して、 $S_j$がアルファベット順で $T_j$より小さい場合は $S \lt T$、大きい場合は $S \gt T$と決定して、アルゴリズムを終了します。 
</li>

<li>
$S_i \neq T_i$である $i$が存在しない場合、 $S$と $T$の長さを比較して、$S$が $T$より短い場合は $S \lt T$、長い場合は $S \gt T$と決定して、アルゴリズムを終了します。 
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
$1 \leq N \leq 200000$
</li>

<li>
$S$は `A`, `B`, `C`からなる長さ $N$の文字列
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

$N$$S$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ．
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4
CBAA

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

CAAB

</div>

<p>
以下のように操作すればよいです．
</p>

<ul>

<li>
最初，$S=$`CBAA`である．
</li>

<li>
$S$の $3$文字目の `A`を消し，`BB`を書き込む．$S=$`CBBBA`となる．
</li>

<li>
$S$の $2,3$文字目の `BB`を消し，`A`を書き込む．$S=$`CABA`となる．
</li>

<li>
$S$の $4$文字目の `A`を消し，`BB`を書き込む．$S=$`CABBB`となる．
</li>

<li>
$S$の $3,4$文字目の `BB`を消し，`A`を書き込む．$S=$`CAAB`となる．
</li>

</ul>

<p>
$S$を `CAAB`より辞書順で小さい文字列にすることはできません．
よって答えは `CAAB`になります．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

1
A

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

A

</div>

<p>
一度も操作を行いません．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

6
BBBCBB

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

ABCA

</div>

</section>

</div>

</span>

</span>

</div>
