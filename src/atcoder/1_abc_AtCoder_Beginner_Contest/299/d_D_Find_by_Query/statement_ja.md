
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
この問題は 
<strong>
インタラクティブな問題
</strong>
（あなたが作成したプログラムとジャッジプログラムが標準入出力を介して対話を行う形式の問題）です。
</p>

<p>
ジャッジが $0$と $1$のみからなる長さ $N$の文字列 $S = S_1S_2\ldots S_N$を持っています。
文字列 $S$は、$S_1 = 0$および $S_N = 1$を満たします。
</p>

<p>
あなたには $S$の長さ $N$が与えられますが、$S$自体は与えられません。
その代わり、あなたはジャッジに対して以下の質問を $20$回まで行うことができます。
</p>

<ul>

<li>
$1 \leq i \leq N$を満たす整数 $i$を選び、$S_i$の値を尋ねる。
</li>

</ul>

<p>
$1 \leq p \leq N-1$かつ $S_p \neq S_{p+1}$を満たす整数 $p$を $1$個出力してください。

なお、本問題の条件下でそのような整数 $p$が必ず存在することが示せます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力**

<p>
最初に、文字列 $S$の長さ $N$を標準入力から受け取ってください。
</p>

<div>

$N$
</div>

<p>
次に、あなたはジャッジに対して問題文中の質問を $20$回まで繰り返すことができます。
</p>

<p>
質問は、以下の形式で標準出力に出力してください。
ここで、$i$は $1 \leq i \leq N$を満たす整数でなければなりません。
</p>

<div>

? $i$
</div>

<p>
これに対する応答として、$S_i$の値が次の形式で標準入力から与えられます。
</p>

<div>

$S_i$
</div>

<p>
ここで、$S_i$は $0$または $1$です。
</p>

<p>
問題文中の条件を満たす整数 $p$を見つけたら、解答を以下の形式で出力してください。
その後、ただちにプログラムを終了してください。
</p>

<div>

! $p$
</div>

<p>
答えが複数ある場合、どれを出力しても正解とみなされます。
</p>

</section>

</div>

<div>

<section>

### **注意点**

<ul>

<li>

<span>

<strong>
出力を行うたびに、末尾に改行を入れて標準出力を flush してください。そうしなかった場合、ジャッジ結果が 
<span>
TLE
</span>
となる可能性があります。
</strong>

</span>

</li>

<li>

<strong>
対話の途中で不正な出力を行った、あるいはプログラムが途中で終了した場合のジャッジ結果は不定です。
</strong>

</li>

<li>
解答を出力したらただちにプログラムを終了してください。そうしない場合、ジャッジ結果は不定です。
</li>

<li>
文字列 $S$はあなたとジャッジの対話の開始時に固定され、あなたが行った質問などに応じて変更されることはありません。
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力例**

<p>
以下は、$N = 7, S = 0010011$の場合の入出力例です。
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
`7`
</td>

<td>

</td>

<td>
$N$が与えられます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`? 1`
</td>

<td>
$S_1$が何かをジャッジに質問します。
</td>

</tr>

<tr>

</tr>

</tbody>

<tbody>

<tr>

<td>
`0`
</td>

<td>

</td>

<td>
質問に対する答えとして $S_1 = 0$がジャッジから返されます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`? 6`
</td>

<td>
$S_6$が何かをジャッジに質問します。
</td>

</tr>

<tr>

</tr>

</tbody>

<tbody>

<tr>

<td>
`1`
</td>

<td>

</td>

<td>
質問に対する答えとして $S_6 = 1$がジャッジから返されます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`? 5`
</td>

<td>
$S_5$が何かをジャッジに質問します。
</td>

</tr>

<tr>

</tr>

</tbody>

<tbody>

<tr>

<td>
`0`
</td>

<td>

</td>

<td>
質問に対する答えとして $S_5 = 0$がジャッジから返されます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`! 5`
</td>

<td>
問題文中の条件を満たす整数 $p$として、$p = 5$を解答します。
</td>

</tr>

<tr>

</tr>

</tbody>

</table>

<p>
解答した $p = 5$について、$1 \leq p \leq N-1$かつ $S_p \neq S_{p+1}$が成り立ちます。
よって、この後ただちにプログラムを終了することで、正解と判定されます。
</p>

</section>

</div>

</span>

</span>

</div>
