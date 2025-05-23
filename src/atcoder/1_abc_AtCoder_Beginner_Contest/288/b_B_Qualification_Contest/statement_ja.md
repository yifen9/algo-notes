
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
$N$人の人があるコンテストに参加し、$i$位の人のハンドルネームは $S_i$でした。

上位 $K$人のハンドルネームを
<strong>
辞書順
</strong>
に出力してください。
</p>

<details>

<summary>
辞書順とは？
</summary>

<p>
辞書順とは簡単に説明すると「単語が辞書に載っている順番」を意味します。より厳密な説明として、相異なる文字列 $S$と文字列 $T$の大小を判定するアルゴリズムを以下に説明します。

</p>

<p>
以下では「 $S$の $i$文字目の文字」を $S_i$のように表します。また、 $S$が $T$より辞書順で小さい場合は $S \lt T$、大きい場合は $S \gt T$と表します。
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
$1 \leq K \leq N \leq 100$
</li>

<li>
$K, N$は整数
</li>

<li>
$S_i$は英小文字からなる長さ $10$以下の文字列
</li>

<li>
$i \neq j$ならば $S_i \neq S_j$
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

$N$$K$$S_1$$S_2$$\vdots$$S_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを改行区切りで出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 3
abc
aaaaa
xyz
a
def

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

aaaaa
abc
xyz

</div>

<p>
このコンテストには $5$人が参加し、$1$位の人のハンドルネームは `abc`、$2$位の人のハンドルネームは `aaaaa`、$3$位の人のハンドルネームは `xyz`、$4$位の人のハンドルネームは `a`、$5$位の人のハンドルネームは `def`でした。
</p>

<p>
上位 $3$人のハンドルネームは `abc`、`aaaaa`、`xyz`であるため、これを辞書順に並べ替えて `aaaaa`、`abc`、`xyz`の順に出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 4
z
zyx
zzz
rbg

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

rbg
z
zyx
zzz

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

3 1
abc
arc
agc

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

abc

</div>

</section>

</div>

</span>

</span>

</div>
