
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
（あなたの作成したプログラムとジャッジシステムが入出力を介して対話を行う形式の問題）です.
</p>

<p>
正整数 $N$が与えられます.
</p>

<p>
ジャッジシステムは正整数 $R$および $N$個の整数 $A_1,A_2,\dots ,A_N$を隠し持っています. ここで $|A_i|\le R,\ \left|\displaystyle\sum_{i=1}^{N}A_i\right| \le R$を満たすことが保証されます.
</p>

<p>
絶対値が $R$以下の整数しか書き込むことができない黒板があり, はじめは何も書き込まれていません.
</p>

<p>
ジャッジシステムは, 黒板に $A_1,A_2, \dots ,A_N$の値を 
<strong>
この順で
</strong>
書き込みました. あなたは, 黒板にただ $1$つの値 $\displaystyle\sum_{i=1}^{N}A_i$が書き込まれている状態にする必要があります.
</p>

<p>
あなたは $R$および $A_i$の値を直接知ることはできませんが, その代わりにジャッジシステムに対して次のやり取りを $25000$回まで行うことができます.
</p>

<p>
正整数 $i$について, $i$番目に黒板に書き込まれた整数を $X_i$とします. 特に, $i=1,2,\dots ,N$について $X_i=A_i$です.
</p>

<p>
$1$回のやり取りでは, 相異なる正整数 $i,j$を指定し, 次のいずれかを選んで行います.
</p>

<ul>

<li>
足し算をしてもらう. ジャッジシステムは黒板から $X_i,X_j$を消し, 新たに $X_i+X_j$の値を黒板に書き込む.
<ul>

<li>
$|X_i+X_j|\le R$を満たしていなくてはならない.
</li>

</ul>

</li>

<li>
大小比較をしてもらう. ジャッジシステムは $X_i\lt X_j$の真偽を答える.
</li>

</ul>

<p>
ただし, 各やり取りを始める時点で $i,j$番目に黒板に書き込まれた整数がすでに黒板から消されていてはなりません.
</p>

<p>
適切にやり取りを行って, 全てのやり取りを終えた後に黒板にただ $1$つの値 $\displaystyle\sum_{i=1}^{N}A_i$が書き込まれている状態にしてください.
</p>

<p>
$R$および $A_i$はプログラムとジャッジシステムの対話の開始前に決定されます.
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\leq N\leq 1000$
</li>

<li>
$1\leq R\leq 10^9$
</li>

<li>
$|A_i|\leq R$
</li>

<li>
$\left|\displaystyle\sum_{i=1}^{N}A_i\right| \le R$
</li>

<li>
$N,R,A_i$は整数.
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力**

<p>
この問題はインタラクティブな問題（あなたの作成したプログラムとジャッジシステムが入出力を介して対話を行う形式の問題）です.
</p>

<p>
最初に, $N$を標準入力から受け取ってください.
</p>

<div>

$N$
</div>

<p>
次に, 黒板にただ $1$つの値 $\displaystyle\sum_{i=1}^{N}A_i$が書かれている状態になるまで, やり取りを繰り返してください.
</p>

<p>
足し算をしてもらうときは, 以下の形式で標準出力に出力してください. 末尾に改行を入れてください. ここで $i,j$は相異なる正整数です.
</p>

<div>

+ $i$$j$
</div>

<p>
これに対するジャッジシステムの応答は, 次の形式で標準入力から与えられます.
</p>

<div>

$P$
</div>

<p>
ここで $P$は整数で, 
</p>

<ul>

<li>
$P\geq N+1$の場合は, $X_i+X_j$の値が黒板に書き込まれ, それが $P$番目に書き込まれたことを表します.
</li>

<li>
$P=-1$の場合は,  $i,j$が制約を満たしていないか, やり取りの回数が $25000$回を超えたことを表します.
</li>

</ul>

<p>
大小比較をしてもらうときは, 以下の形式で標準出力に出力してください. 末尾に改行を入れてください. ここで $i,j$は相異なる正整数です.
</p>

<div>

? $i$$j$
</div>

<p>
これに対するジャッジシステムの応答は, 次の形式で標準入力から与えられます.
</p>

<div>

$Q$
</div>

<p>
ここで $Q$は整数で, 
</p>

<ul>

<li>
$Q=1$の場合は, $X_i<X_j$が真であることを表します.
</li>

<li>
$Q=0$の場合は, $X_i<X_j$が偽であることを表します.
</li>

<li>
$Q=-1$の場合は,  $i,j$が制約を満たしていないか, やり取りの回数が $25000$回を超えたことを表します.
</li>

</ul>

<p>
足し算をしてもらうやり取りおよび大小比較をしてもらうやり取りのいずれについても, ジャッジシステムの応答が $-1$であった場合は, プログラムはすでに不正解とみなされています. この場合, ただちにプログラムを終了してください.
</p>

<p>
黒板にただ $1$つの値 $\displaystyle\sum_{i=1}^{N}A_i$が書かれている状態になったら, 以下の形式でそのことをジャッジシステムに報告してください. ただし, これはジャッジシステムとのやり取りの回数に計上されません. その後, ただちにプログラムを終了してください.
</p>

<div>

!

</div>

<p>
上記のいずれの形式にも当てはまらない出力を行った場合は, `-1`が標準入力から与えられます.
</p>

<div>

-1

</div>

<p>
このときも, プログラムはすでに不正解とみなされています. ただちにプログラムを終了してください.
</p>

</section>

</div>

<div>

<section>

### **注意点**

<ul>

<li>

<b>

<span>
出力を行うたびに, 末尾に改行を入れて標準出力を flush してください. そうしなかった場合, ジャッジ結果が 
<span>
TLE
</span>
となる可能性があります.
</span>

</b>

</li>

<li>
解答を出力したら（または `-1`を受け取ったら）ただちにプログラムを終了してください. そうしない場合, ジャッジ結果は不定です.
</li>

<li>
余計な改行は不正なフォーマットの出力とみなされることに注意してください.
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力例**

<p>
$N=3,R=10,A_1=-1,A_2=10,A_3=1$のときの対話の一例を示します.
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
`3`
</td>

<td>

</td>

<td>
まず整数 $N$が与えられます。
</td>

</tr>

<tr>

<td>

</td>

<td>
`? 1 2`
</td>

<td>
大小比較をしてもらいます.
</td>

</tr>

<tr>

<td>
`1`
</td>

<td>

</td>

<td>
$X_1\lt X_2\ (-1\lt 10)$なのでジャッジシステムは $1$を返します. 
</td>

</tr>

<tr>

<td>

</td>

<td>
`+ 1 3`
</td>

<td>
足し算をしてもらいます.
</td>

</tr>

<tr>

<td>
`4`
</td>

<td>

</td>

<td>
ジャッジシステムは $X_1=-1,X_3=1$を黒板から消し, $X_1+X_3=0$の値を黒板に書き込みました. $4$番目の書き込みでした.
</td>

</tr>

<tr>

<td>

</td>

<td>
`+ 2 4`
</td>

<td>
足し算をしてもらいます.
</td>

</tr>

<tr>

<td>
`5`
</td>

<td>

</td>

<td>
ジャッジシステムは $X_2=10,X_4=0$を黒板から消し, $X_2+X_4=10$の値を黒板に書き込みました. $5$番目の書き込みでした.
</td>

</tr>

<tr>

<td>

</td>

<td>
`!`
</td>

<td>
黒板にはただ $1$つの値 $\displaystyle\sum_{i=1}^{N}A_i$が書き込まれている状態になったので, そのことをジャッジシステムに報告します.
</td>

</tr>

</tbody>

</table>

</section>

</div>

</span>

</span>

</div>
