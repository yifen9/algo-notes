
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
高橋君と青木君は $2$人で次の対戦ゲームをします。
</p>

<p>
高橋君が先手でゲームを始め、ゲームが終了するまでの間、 $2$人は交互に $1$以上 $2N+1$以下の整数を $1$つずつ宣言します。
どちらかが一度でも宣言した整数は、それ以降どちらも二度と宣言することが出来ません。
先に整数を宣言することが出来なくなった方のプレイヤーの負けとなり、負けなかった方のプレイヤーの勝ちとなります。
</p>

<p>
このゲームでは必ず高橋君が勝ちます。
高橋君の立場で実際にゲームを行い、ゲームに勝ってください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 1000$
</li>

<li>
$N$は整数
</li>

</ul>

</section>

</div>

<div>

<section>

### **入出力**

<p>

<strong>
この問題はインタラクティブな問題
</strong>
（あなたの作成したプログラムとジャッジプログラムが入出力を介して対話を行う形式の問題）です。

あなたのプログラムが高橋君の立場で、ジャッジプログラムが青木君の立場でゲームを行います。
</p>

<p>
まず、あなたのプログラムに標準入力から正の整数 $N$が与えられます。
その後、ゲームが終了するまで下記の手順を繰り返します。
</p>

<ol>

<li>
あなたのプログラムが、高橋君が宣言する整数として、$1$以上 $2N+1$以下の整数を標準出力に出力します。（どちらかのプレイヤーによってすでに宣言されている整数を出力することは出来ません。）
</li>

<li>
ジャッジプログラムによって、青木君が宣言する整数があなたのプログラムに標準入力から与えられます。（どちらかのプレイヤーによってすでに宣言されている整数が入力されることはありません。）
ただし、青木君が宣言できる整数が残っていない場合は、代わりに $0$が与えられ高橋君の勝ちでゲームが終了します。
</li>

</ol>

</section>

</div>

<div>

<section>

### **注意点**

<ul>

<li>

<span>

<strong>
出力を行うたびに標準出力をflushしてください。そうしなかった場合、ジャッジ結果が 
<span>
TLE
</span>
となる可能性があります。
</strong>

</span>

</li>

<li>

<strong>
高橋君の勝ちでゲームが終了したあと、あなたのプログラムは直ちに終了しなければなりません。
</strong>
そうしなかった場合、ジャッジ結果が 
<span>
AC
</span>
とならない可能性があります。
</li>

<li>
ゲームの途中で不正な出力を行った場合（例えば、すでにどちらかのプレイヤーによって宣言されている整数を出力した場合）は不正解となりますが、そのときのジャッジ結果は不定です。
<span>
WA
</span>
になるとは限りません。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入出力例**

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
$2$
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
$1$
</td>

<td>
高橋君が $1$を宣言します。
</td>

</tr>

<tr>

<td>
$3$
</td>

<td>

</td>

<td>
青木君が $3$を宣言します。
</td>

</tr>

<tr>

<td>

</td>

<td>
$2$
</td>

<td>
高橋君が $2$を宣言します。
</td>

</tr>

<tr>

<td>
$4$
</td>

<td>

</td>

<td>
青木君が $4$を宣言します。
</td>

</tr>

<tr>

<td>

</td>

<td>
$5$
</td>

<td>
高橋君が $5$を宣言します。
</td>

</tr>

<tr>

<td>
$0$
</td>

<td>

</td>

<td>
青木君が宣言できる整数が残っていないため、高橋君の勝ちでゲームが終了します。
</td>

</tr>

</tbody>

</table>

</section>

</div>

</span>

</span>

</div>
