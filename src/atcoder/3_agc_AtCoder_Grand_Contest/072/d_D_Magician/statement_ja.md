
<div>

<span>

<span>

<p>
配点 : $1400$点
</p>

<div>

<section>

### **問題文**

<p>

<font color="#DD3355">
<strong>
これはインタラクティブな問題です。
</strong>
</font>

</p>

<p>
机の上に ${}_{2N}\mathrm{C}_N$枚のカードがあり、$1$から ${}_{2N}\mathrm{C}_N$までの番号が付けられています。カード $i$$(1 \leq i \leq {}_{2N}\mathrm{C}_N)$のオモテ面には、$N$個の `0`と $N$個の `1`からなる ${}_{2N}\mathrm{C}_N$種類の文字列のうち、辞書順で $i$番目に小さいものが印刷されています。
</p>

<details>

<summary>
具体例
</summary>
たとえば $N=2$の場合、カード $1, 2, 3, 4, 5, 6$のオモテ面にはそれぞれ `0011`、`0101`、`0110`、`1001`、`1010`、`1100`が印刷されます。
</details>

<p>



</p>

<p>
魔女の Alice は、各カードのウラ面に最初の $N$個の英大文字（たとえば $N=2$の時 `A`, `B`）のいずれかを書き、その後以下の
<strong>
マジック
</strong>
を $T$回行います。
</p>

<blockquote>

<p>

<strong>
一回のマジックの流れ
</strong>

</p>

<ol>

<li>
司会者が、最初の $N$個の英大文字のいずれか $s$を宣言する。
</li>

<li>
司会者が、黒板に `0`のみからなる長さ $2N$の文字列を書く。
</li>

<li>
$i = 1, 2, \dots, N$の順に以下の行動を行う。ただし $a_1, b_1, \dots, a_N, b_N$は $1$以上 $2N$以下の相異なる整数である。
<ul>

<li>
まず、司会者が Alice に整数 $a_i$と $b_i$を伝える。
</li>

<li>
次に、Alice が黒板の文字列の $a_i$文字目と $b_i$文字目のうち片方だけを `1`に変える。
</li>

</ul>

</li>

<li>
黒板の文字列を $x$とする。$x$がオモテ面に書き込まれたカードがちょうど一枚あるので、そのウラ面を見る。ウラ面に書かれた文字が $s$であれば、マジックは成功、そうでなければマジックは失敗である。
</li>

</ol>

</blockquote>

<p>
ここで、Alice は 
<font color="#DD3355">$a_i$文字目と $b_i$文字目のうち片方を `1`に変えるまで、$a_{i+1}, b_{i+1}$の情報を知ることができない</font>
ことに注意する必要があります。
</p>

<p>
$T$回すべてのマジックで成功する戦略を実装してください。では、始めましょう。
</p>

---

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 10$
</li>

<li>
$1 \leq T \leq 5\,000$
</li>

<li>
$s$は最初の $N$個の英大文字のいずれかである
</li>

<li>
$1 \leq a_i < b_i \leq 2N$
</li>

<li>
$a_1, b_1, a_2, b_2, \dots, a_N, b_N$は相異なる
</li>

<li>
$a_1, b_1, a_2, b_2, \dots, a_N, b_N, s$はジャッジとの対話前に決定される
</li>

<li>
$N, T, a_i, b_i$は整数
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力**

<p>
最初に、整数 $N, T$を標準入力から以下の形式で受け取ってください。
</p>

<div>

$N$$T$
</div>

<p>
次に、カード $i$のウラ面に書き込む文字を $c_i$とするとき、以下の形式で出力してください。末尾に改行を入れてください。ここで、$c_i$は最初の $N$個の英大文字のいずれかである必要があります。
</p>

<div>

$c_1 c_2 \cdots c_{{}_{2N}\mathrm{C}_N}$
</div>

<p>
次に、以下の処理を $T$回繰り返してください。$t$回目 $(1 \leq t \leq T)$の処理は $t$回目のマジックに対応します。
</p>

<blockquote>

<p>
まず、司会者が宣言した文字 $s$を以下の形式で標準入力から受け取る。
</p>

<p>

</p>

<div>

$s$
</div>

<p>

</p>

<p>
続いて、$i = 1, 2, \dots, N$の順に以下の処理を行う。
</p>

<ul>

<li>
まず、整数 $a_i, b_i$を以下の形式で入力する。
</li>

</ul>

<p>

</p>

<div>

$a_i$$b_i$
</div>

<p>

</p>

<ul>

<li>
次に、`1`に変える文字の位置 $d$を、以下の形式で出力する。$d$は $a_i, b_i$のいずれかでなければならない。末尾に改行を入れること。
</li>

</ul>

<p>

</p>

<div>

$d$
</div>

<p>

</p>

<p>
ここで、出力形式にミスがあった場合や、前回のマジックに失敗した場合、それ以降 $s$や $(a_i, b_i)$などの入力は与えられず、`-1`が標準入力から与えられる。
<font color="#DD3355">この場合はただちにプログラムを終了すること。</font>
（ただし、$T$回目のマジックで初めて失敗した場合や、$T$回目のマジックの $i = N$のときに初めて出力形式にミスがあった場合は、その後の入力は何も与えられない）
</p>

</blockquote>

</section>

</div>

<div>

<section>

### **注意点**

<p>

</p>

<div>

<p>

<b>
出力を行うたびに、ジャッジ結果を flush してください。
</b>
そうしなかった場合、ジャッジ結果が 
<span>
TLE
</span>
となることがあります。
    
</p>

<p>
また、ジャッジから `-1`という入力を受け取った場合はただちにプログラムを終了してください。終了した場合のジャッジ結果は 
<span>
WA
</span>
となりますが、終了しなかった場合のジャッジ結果は不定です。さらに、余計な改行は不正な形式の出力とみなされることがあるので注意してください。
    
</p>

<p>
この問題のジャッジシステムは
<b>
適応的 (adaptive) ではありません。
</b>
すなわち、$a_1, b_1, a_2, b_2, \dots, a_N, b_N, s$の値はジャッジとの対話前に決定され、プログラムの出力によって変更されることはありません。
    
</p>

</div>

<p>

</p>

---

</section>

</div>

<div>

<section>

### **入出力例**

<p>
以下に示す例は、対話の一例であることに注意してください。
</p>

<table>

<thead>

<tr>

<th>
入力
</th>

<th>
出力
</th>

<th>
説明
</th>

</tr>

</thead>

<tbody>

<tr>

<td>
`2 2`
</td>

<td>

</td>

<td>
まず整数 $N$と $T$が標準入力から与えられます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`ABABAB`
</td>

<td>
$6$枚のカードに書き込む文字を出力します。
</td>

</tr>

<tr>

<td>
`A`
</td>

<td>

</td>

<td>
$1$回目のマジックが始まります。

司会者は文字 `A`を宣言します。
</td>

</tr>

<tr>

<td>
`1 2`
</td>

<td>

</td>

<td>
$(a_1, b_1) = (1, 2)$であることが司会者から知らされます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`2`
</td>

<td>
黒板の $2$文字目を `1`にします。
</td>

</tr>

<tr>

<td>
`3 4`
</td>

<td>

</td>

<td>
$(a_2, b_2) = (3, 4)$であることが司会者から知らされます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`3`
</td>

<td>
黒板の $3$文字目を `1`にします。

最終的な黒板の文字列は `0110`となり、オモテ面に `0110`と書かれたカードのウラ面は `A`なのでマジック成功です。
</td>

</tr>

<tr>

<td>
`B`
</td>

<td>

</td>

<td>
$2$回目のマジックが始まります。

司会者は文字 `B`を宣言します。
</td>

</tr>

<tr>

<td>
`1 3`
</td>

<td>

</td>

<td>
$(a_1, b_1) = (1, 3)$であることが司会者から知らされます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`1`
</td>

<td>
黒板の $1$文字目を `1`にします。
</td>

</tr>

<tr>

<td>
`2 4`
</td>

<td>

</td>

<td>
$(a_2, b_2) = (2, 4)$であることが司会者から知らされます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`2`
</td>

<td>
黒板の $2$文字目を `1`にします。

最終的な黒板の文字列は `1100`となり、オモテ面に `1100`と書かれたカードのウラ面は `B`なのでマジック成功です。
</td>

</tr>

</tbody>

</table>

</section>

</div>

</span>

</span>

</div>
