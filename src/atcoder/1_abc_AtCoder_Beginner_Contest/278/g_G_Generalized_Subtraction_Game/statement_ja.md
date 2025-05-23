
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
この問題は 
<strong>
インタラクティブな問題
</strong>
（あなたの作成したプログラムとジャッジプログラムが標準入出力を介して対話を行う形式の問題）です。
</p>

<p>
整数 $N, L, R$が与えられます。

あなたはジャッジシステムと次のゲームで対戦します。
</p>

<blockquote>

<p>
$1$から $N$までの番号がついた $N$枚のカードが場に置かれています。

先攻から交互に以下の操作を繰り返します。
</p>

<ul>

<li>
$1 \leq x \leq N$, $L \leq y \leq R$かつカード $x, x+1, \dots, x+y-1$の $y$枚がすべて場に存在するような整数の組 $(x, y)$を 1 つ選び、カード $x, x+1, \dots, x+y-1$を場から取り除く。
</li>

</ul>

<p>
先に操作が行えなくなった方が負けで、そうでない方が勝ちです。
</p>

</blockquote>

<p>
あなたは先攻か後攻の一方を選んでください。そして、選んだ方の手番でジャッジシステムとゲームをして勝利してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 2000$
</li>

<li>
$1 \leq L \leq R \leq N$
</li>

<li>
$N, L, R$は整数
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力**

<p>
この問題はインタラクティブな問題（あなたの作成したプログラムとジャッジプログラムが標準入出力を介して対話を行う形式の問題）です。
</p>

<p>
最初に、$N, L, R$が以下の形式で入力から与えられるので、これを受け取ってください。
</p>

<div>

$N$$L$$R$
</div>

<p>
まず、あなたは一方の手番を選びます。そして、選んだ手番が先攻ならば `First`を、後攻ならば `Second`を出力してください。
</p>

<p>
その後、あなたは出力した方の手番で、ジャッジシステムがそうでない方の手番でゲームが直ちに開始されます。あなたはゲームが終了するまで入出力を利用してジャッジシステムと対話をして、ゲームに勝利してください。
</p>

<p>
あなたは手番が回ってきたら、操作で選ぶ整数の組 $(x, y)$を次の形式で出力してください。ただし、選ぶことのできる $(x, y)$が存在しない場合は $(x, y) = (0, 0)$を出力してください。
</p>

<div>

$x$$y$
</div>

<p>
ジャッジシステムの手番では、ジャッジシステムが以下の形式で整数の組 $(a, b)$を出力します。
</p>

<div>

$a$$b$
</div>

<p>
ここで $a, b$は次の 3 種類のいずれかであることが保証されます。
</p>

<ul>

<li>
$(a, b) = (0, 0)$の場合：ジャッジシステムは操作を行えなくなったことを意味します。つまり、あなたはゲームに勝利しました。
</li>

<li>
$(a, b) = (-1, -1)$の場合：あなたは 1 つ前に非合法な $(x, y)$を選んだか、あるいは $(0, 0)$を出力したことを意味します。つまり、あなたはゲームに敗北しました。
</li>

<li>
それ以外の場合：ジャッジシステムは $(x,y) = (a,b)$として操作を行ったことを意味します。ここでジャッジシステムが選んだ $(x, y)$は合法であることが保証されます。
</li>

</ul>

<p>
ジャッジが $(a,b)=(0,0)$または $(a,b)=(-1,-1)$を返した場合、ゲームはすでに終了しています。この場合、プログラムをただちに終了してください。
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
ゲームが終了したらただちにプログラムを終了してください。そうしない場合、ジャッジ結果は不定です。
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力例**

<p>
以下は、$N = 6, L = 1, R = 2$の場合の入出力例です。
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
`6 1 2`
</td>

<td>

</td>

<td>
まず整数 $N, L, R$が与えられます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`First`
</td>

<td>
先攻を選び、ゲームを開始します。
</td>

</tr>

<tr>

<td>

</td>

<td>
`2 1`
</td>

<td>
$(x, y) = (2, 1)$を選び、カード $2$を取り除きます。
</td>

</tr>

<tr>

<td>
`3 2`
</td>

<td>

</td>

<td>
$(x, y) = (3, 2)$を選び、カード $3, 4$を取り除きます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`6 1`
</td>

<td>
$(x, y) = (6, 1)$を選び、カード $6$を取り除きます。
</td>

</tr>

<tr>

<td>
`5 1`
</td>

<td>

</td>

<td>
$(x, y) = (5, 1)$を選び、カード $5$を取り除きます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`1 1`
</td>

<td>
$(x, y) = (1, 1)$を選び、カード $1$を取り除きます。
</td>

</tr>

<tr>

<td>
`0 0`
</td>

<td>

</td>

<td>
ジャッジシステムは操作を行うことができなくなったので、あなたの勝ちです。
</td>

</tr>

</tbody>

</table>

</section>

</div>

</span>

</span>

</div>
