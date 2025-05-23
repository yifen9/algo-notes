
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
この問題は 
<strong>
インタラクティブな問題
</strong>
（あなたが作成したプログラムとジャッジプログラムが標準入出力を介して対話を行う形式の問題）です。
</p>

<p>
あなたとジャッジは下記の手順を行います。
手順はフェイズ $1$とフェイズ $2$からなり、まずフェイズ $1$を行った直後、続けてフェイズ $2$を行います。
</p>

<p>
（フェイズ $1$）
</p>

<ul>

<li>
ジャッジから整数 $N$が与えられる。
</li>

<li>
あなたは $1$以上 $50000$以下の整数 $M$を出力する。
</li>

<li>
さらにあなたは、すべての $i = 1, 2, \ldots, M$について $1 \leq l_i \leq r_i \leq N$を満たす、$M$個の整数の組 $(l_1, r_1), (l_2, r_2), \ldots, (l_M, r_M)$を出力する（$M$個の整数の組が相異なる必要はない）。
</li>

</ul>

<p>
（フェイズ $2$）
</p>

<ul>

<li>
ジャッジから整数 $Q$が与えられる。
</li>

<li>
その後、あなたとジャッジは下記の手順を $Q$回繰り返す。
<ul>

<li>
ジャッジからクエリとして $2$つの整数 $L, R$が与えられる。
</li>

<li>
それに対する応答として、あなたは $1$以上 $M$以下の $2$つの整数 $a, b$を出力する（ $a = b$でもよい）。
 このとき、$a$と $b$は下記の条件を満たさなければならない。もし満たさなかった場合は不正解となる。
<ul>

<li>
集合 $\lbrace l_a, l_a+1, \ldots, r_a\rbrace$と集合 $\lbrace l_b, l_b+1, \ldots, r_b\rbrace$の和集合が、集合 $\lbrace L, L+1, \ldots, R\rbrace$と一致する。
</li>

</ul>

</li>

</ul>

</li>

</ul>

<p>
上記の手順を行った後、直ちにプログラムを終了することで正解となります。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 4000$
</li>

<li>
$1 \leq Q \leq 10^5$
</li>

<li>
$1 \leq L \leq R \leq N$
</li>

<li>
入力はすべて整数
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力**

<p>
この問題はインタラクティブな問題（あなたが作成したプログラムとジャッジプログラムが標準入出力を介して対話を行う形式の問題）です。
</p>

<p>
（フェイズ $1$）
</p>

<ul>

<li>
まず、$N$が入力から与えられます。
</li>

<li>
次に、$1$以上 $50000$以下の整数 $M$を出力してください。
</li>

<li>
その後、$M$回にわたって $(l_1, r_1), (l_2, r_2), \ldots, (l_M, r_M)$を出力してください。
具体的には、$i = 1, 2, \ldots, M$について、$i$回目の出力では $(l_i, r_i)$を下記の形式で出力してください。
</li>

</ul>

<div>

$l_i$$r_i$
</div>

<p>
（フェイズ $2$）
</p>

<ul>

<li>
まず、$Q$が入力から与えられます。
</li>

<li>
各クエリでは、クエリを表す整数 $L, R$が下記の形式で与えられます。
</li>

</ul>

<div>

$L$$R$
</div>

<ul>

<li>
各クエリに対する応答では、$2$つの整数 $a, b$を下記の形式で出力してください。
</li>

</ul>

<div>

$a$$b$
</div>

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
特に、プログラムの実行中に実行時エラーが起こった場合に、ジャッジ結果が 
<span>
RE
</span>
ではなく 
<span>
WA
</span>
や 
<span>
TLE
</span>
になる可能性があることに注意してください。
</li>

<li>
フェイズ $2$を終了したらただちにプログラムを終了してください。そうしない場合、ジャッジ結果は不定です。
</li>

<li>
フェイズ $2$で与えられる $L, R$は、あなたがフェイズ $1$で出力した $(l_1, r_1), (l_2, r_2), \ldots, (l_M, r_M)$に応じて決定されます。
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力例**

<p>
以下は、$N = 4, Q = 4$の場合の入出力例です。
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
`4`
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
`6`
</td>

<td>
$M$を出力します。
</td>

</tr>

<tr>

<td>

</td>

<td>
`3 3`
</td>

<td>
$(l_1, r_1) = (3, 3)$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>

</td>

<td>
`4 4`
</td>

<td>
$(l_2, r_2) = (4, 4)$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>

</td>

<td>
`1 1`
</td>

<td>
$(l_3, r_3) = (1, 1)$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>

</td>

<td>
`2 4`
</td>

<td>
$(l_4, r_4) = (2, 4)$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>

</td>

<td>
`1 3`
</td>

<td>
$(l_5, r_5) = (1, 3)$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>

</td>

<td>
`2 2`
</td>

<td>
$(l_6, r_6) = (2, 2)$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>
`4`
</td>

<td>

</td>

<td>
$Q$が与えられます。
</td>

</tr>

<tr>

<td>
`1 3`
</td>

<td>

</td>

<td>
$1$個目のクエリとして $L = 1, R = 3$が与えられます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`1 5`
</td>

<td>
$1$個目のクエリに対する応答として $a = 1, b = 5$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>
`3 4`
</td>

<td>

</td>

<td>
$2$個目のクエリとして $L = 3, R = 4$が与えられます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`2 1`
</td>

<td>
$2$個目のクエリに対する応答として $a = 2, b = 1$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>
`2 4`
</td>

<td>

</td>

<td>
$3$個目のクエリとして $L = 2, R = 4$が与えられます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`4 4`
</td>

<td>
$3$個目のクエリに対する応答として $a = 4, b = 4$を出力します。
</td>

</tr>

<tr>

</tr>

<tr>

<td>
`1 1`
</td>

<td>

</td>

<td>
$4$個目のクエリとして $L = 1, R = 1$が与えられます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`3 3`
</td>

<td>
$4$個目のクエリに対する応答として $a = 3, b = 3$を出力します。
</td>

</tr>

<tr>

</tr>

</tbody>

</table>

</section>

</div>

</span>

</span>

</div>
