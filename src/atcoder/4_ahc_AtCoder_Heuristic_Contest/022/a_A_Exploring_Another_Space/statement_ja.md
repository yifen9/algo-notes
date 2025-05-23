
<div>

<div>

<span>

<span>

<div>

<section>

### **ストーリー**

<p>
人類は我々の世界の外にあるもう一つの空間 Another Space を発見した。

Another Space は $L$行 $L$列のグリッドで表されており、グリッドはトーラスを成している。
                        つまり、最も上の行から1マス上に移動すると同じ列の最も下の行に到達する。左右も同様である。
                    
</p>

<p>
Another Space への侵入には、 
<b>
ワームホール
</b>
を用いる。


<b>
ワームホール
</b>
は $N$個あり、それぞれが独立していて、我々のいる世界と Another Space 内のセルのどれか一つを繋げている。


<b>
ワームホール
</b>
が繋がっている Another Space 内のセルを 
<b>
出口セル
</b>
と呼ぶ。
                        
<b>
出口セル
</b>
は $N$個存在し、各 
<b>
ワームホール
</b>
は 1 つの 
<b>
出口セル
</b>
と一対一対応している。
                        しかし、$N$個の 
<b>
出口セル
</b>
のグリッド上での位置はわかっているが、どの 
<b>
ワームホール
</b>
が どの 
<b>
出口セル
</b>
と繋がっているかは分かっていない。

その対応を見つけたい。


</p>

<p>
Xさんは、
<b>
ワームホール
</b>
の対応推定を以下の手順で行うことを思いついた。
</p>

<ol>

<li>
Another Space の各セルに空調設備を1つずつ置き、それぞれ整数の温度を設定する。 
</li>

<li>
次の計測を繰り返し行う。
                        
<ul>

<li>

<b>
ワームホール
</b>
を1つ選択し、その入口から Another Space に侵入する。
</li>

<li>
事前に計画していた移動を Another Space 内で行い、移動終了後にそのセルの気温を計測する。
</li>

</ul>

</li>

</ol>

<p>
なお、計測機器の都合上、計測した気温には誤差が含まれる。
</p>

<p>
設定する温度には注意が必要だ。空調設備はセル内を設定された温度に保つが、上下左右に隣接するセル同士の温度差が激しいと、多くのエネルギーを使ってしまう。

また、 Another Space 内での気温計測にもエネルギーが必要で、計測回数や移動距離が多いほど多くのエネルギーが必要になる。
                    
</p>

<p>
天才助手であるあなたのミッションは、Xさんの
<b>
ワームホール
</b>
対応推定をなるべく少ないエネルギーで行えるように計画することである。
                        Another Space の
<b>
ワームホール
</b>
対応を解き明かし、人類の未来を拓いてほしい。


</p>

---

### **問題文**

<p>
$L \times L$のグリッドが存在し、グリッドの上から $i$行目（ $0 \leq i \lt L $）、左から $j$列目（ $0 \leq j \lt L $）のセルを $(i, j)$で表す。
                        グリッドの上下、左右はトーラス型に繋がっている。
                        すなわち、 $(0, j)$と $(L - 1, j)$は上下に隣接し、 $(i, 0)$と $(i, L - 1)$は左右に隣接する。

セルのうち $N$個は 
<b>
出口セル
</b>
と呼ばれ、それらの座標を $(Y_0, X_0), (Y_1, X_1), \ldots, (Y_{N-1}, X_{N-1})$とする。

ある $0,1,\ldots,N-1$の順列 $A=(A_0,A_1,\ldots,A_{N-1})$が存在する。
                        これは $i$番目の 
<b>
ワームホール
</b>
に入ると、 $A_i$番目の 
<b>
出口セル
</b>
に出ることを表す。
                        $A$の値は隠されており、それを推定することが問題の目的である。


</p>

<p>
推定は、以下で説明する 
<b>
配置
</b>
, 
<b>
計測
</b>
, 
<b>
回答
</b>
を順に行うことで達成する。


</p>

#### **配置**

<p>

<b>
配置
</b>
として、グリッドの各セルに $0$以上 $1000$以下の整数値を指定する。

$(i,j)$に指定した値を $P_{i,j} （0 \leq P_{i,j} \leq 1000）$とする。 

すべての上下左右に隣り合うセルについて、指定した値の差の2乗の和をとったものを
<b>
配置時コスト
</b>
とする。


<b>
配置時コスト
</b>
= $\sum_{i=0}^{L-1} \sum_{j=0}^{L-1} ((P_{i,j} - P_{(i+1)\%L,j})^2 + (P_{i,j} - P_{i,(j+1)\%L})^2) $
</p>

#### **計測**

<p>
以下の
<b>
計測
</b>
を$0$回以上 $10000$回以下行う。
</p>

<ul>

<li>
整数 $i$, $y$, $x$を指定する。
</li>

<ul>

<li>
$i$は
<b>
ワームホール
</b>
の番号を表す。
</li>

</ul>

<li>
$(Y_{A_i}, X_{A_i})$から下に $y$,右に $x$移動したセルを $(r, c)$とする。 $y$, $x$が負の数の場合は、それぞれ 上に $|y|$, 左に $|x|$移動することを意味する。
                            
<ul>

<li>
すなわち、$r \equiv Y_{A_i}+y \pmod L$, $c \equiv X_{A_i}+x \pmod L$($0 \leq r,c \lt L$) である。
</li>

<li>

<b>
ワームホールと出口セルの対応は分かっていないので、何番目の出口セルから移動を開始するかは不明である。$(Y_{A_i}, X_{A_i})$は不明な値である事に注意せよ。
</b>

</li>

</ul>

</li>

<li>
平均 $0$,標準偏差 $\sigma$の正規分布から値をサンプリングする関数を $f(\sigma)$とする。
</li>

<li>
計測値として $\mathrm{max}(0, \mathrm{min}(1000, \mathrm{round}(P_{r,c} + f(S))))$が得られる。
                            
<ul>

<li>
ここで、 $S$は入力で与えられる正整数である。
</li>

<li>
$P_{r,c}$の真値は分からず、計測値のみが得られる事に注意せよ。
</li>

</ul>

</li>

</ul>

<p>
1回の
<b>
計測
</b>
によって $100 * (10 + |y| + |x|)$のコストが発生する。

すべての
<b>
計測
</b>
についてのコストの和を
<b>
計測時コスト
</b>
とする。

同じ位置を繰り返し
<b>
計測
</b>
しても良い。
<b>
計測
</b>
のたびに新たにサンプリングされた値が得られる。


</p>

#### **回答**

<p>
$A$の推定値 $E_0, E_1, \ldots , E_{N-1}$を出力する。


</p>

</section>

</div>

---

<div>

<section>

### **得点**

<p>
$N$個の回答のうち誤りだったものの数、すなわち $A_i \ne E_i$となる $i$の数を $W$とすると、
<b>
得点
</b>
は以下のようになる。


<b>
得点
</b>
= $\lceil 10^{14} * 0.8^W / (配置時コスト + 計測時コスト + 10^{5}) \rceil $

ここで、 $\lceil x \rceil $は $x$以上の最小の整数を表す。
                    
</p>

</section>

</div>

---

<div>

<section>

### **順位付け**

<p>
相対評価システムを採用します。

各テストケース毎に、$\mathrm{round} \lparen 10^9 \times \frac{自身の得点}{全参加者中の最高得点} \rparen $の相対評価得点が得られ、その和が提出の得点となります。
                    
</p>

<p>
最終順位はコンテスト終了後に実施されるより多くの入力に対するシステムテストにおける得点で決定されます。暫定テスト・システムテストのどちらにおいても、一部のテストケースで不正な出力や制限時間超過をした場合、そのテストケースに関する相対評価得点は0点となり、そのテストケースにおいては「全参加者中の最大得点」の計算対象から除外されます。


</p>

<p>
また、システムテストは 
<font color="red">
<strong>

<span>
CE
</span>
以外の結果を得た一番最後の提出
</strong>
</font>
に対してのみ行われるため、最終的に提出する解答を間違えないよう注意してください。
                    
</p>

#### **テストケース数**

<ul>

<li>
暫定テスト: 50個
                        
</li>

<li>
システムテスト: 3000個
                            
<ul>

<li>
システムテストでは、$S$のそれぞれの値に対して100個ずつのテストケースが存在します。
</li>

<li>
コンテスト終了後に <a href="https://img.atcoder.jp/ahc022/seeds.txt">seeds.txt</a>(sha256=`2154215b63e063812cf2bb0ee2370c5193ae4682a3f7ce260e82a52a07663206`) を公開します。
</li>

</ul>

</li>

</ul>

#### **相対評価システムについて**

<p>
暫定テスト・システムテストともに、
<span>
CE
</span>
以外の結果を得た一番最後の提出のみが順位表に反映されます。

相対評価得点の計算に用いられる各テストケース毎の「全参加者中の最大得点」の算出には、各参加者の順位表に反映されている提出のみが用いられます。

順位表に表示される得点は相対評価得点であり、新規提出があるたびに相対評価得点が再計算されます。 一方、提出一覧から確認できる各提出の得点は、各テストケース毎の得点をそのまま足し合わせたものであり、相対評価得点は表示されません。 最新以外の提出の、現在の順位表における相対評価得点を知るためには、再提出が必要となります。

不正な出力や制限時間超過をした場合、提出一覧から確認できる得点は0となりますが、順位表には正解したテストケースに対する相対評価得点の和が表示されます。


</p>

#### **実行時間について**

<p>
実行時間には多少のブレが生じます。
                        また、システムテストでは同時に大量の実行を行うため、暫定テストに比べて数%程度実行時間が伸びる現象が確認されています。
                        そのため、実行時間制限ギリギリの提出がシステムテストで 
<span>
TLE
</span>
となる可能性があります。
                        プログラム内で時間を計測して処理を打ち切るか、実行時間に余裕を持たせるようお願いします。
                    
</p>

</section>

</div>

---

<div>

<div>

<section>

### **入出力**

<p>

<b>
※この問題はインタラクティブ形式である。以下の内容を読み、ジャッジプログラムとのやり取りを行うこと。
</b>

</p>

<p>
最初に問題のパラメタが以下の形式で標準入力から与えられる。
</p>

<div>

\(
L ~ N ~ S \\
Y_0 ~ X_0 \\
\vdots \\
Y_{N-1} ~ X_{N-1} \)

</div>

<ul>

<li>
1行目には3つの整数 $L,N,S$がスペース区切りで与えられる。
</li>

<ul>

<li>
$L$はグリッドのサイズを表す整数で、 $10 \le L \le 50$を満たす。
</li>

<li>
$N$は 
<b>
出口セル
</b>
の数で、$60 \le N \le 100$を満たす。
</li>

<li>
$S$は計測値の計算に用いられる標準偏差で、$S \in \{i^2 | 1 \leq i \leq 30\}$を満たす。$i$は整数である。
</li>

</ul>

<li>
続く $N$行には 
<b>
出口セル
</b>
の座標情報が与えられる。
</li>

<ul>

<li>
各行には 2 つの整数 $Y_i$, $X_i$がスペース区切りで含まれており、$i$番目の 
<b>
出口セル
</b>
の座標が $(Y_i, X_i)$であることを表す。
</li>

<li>
$0 \leq Y_i \lt L, 0 \leq X_i \lt L$を満たす。
</li>

<li>
座標は全て相異なり、辞書順に与えられる。
</li>

</ul>

</ul>

<p>
上記の入力を受け取った後は
<b>
配置
</b>
を行う。各セルの値 $P_{i, j}$を以下の形式で標準出力へ出力せよ。
</p>

<div>

\(
P_{0,0} ~ \cdots ~ P_{0,L-1} \\
\vdots \\
P_{L-1,0} ~ \cdots ~ P_{L-1,L-1}\)

</div>

<ul>

<li>
$L$行のそれぞれに $L$個の整数をスペース区切りで出力せよ。
</li>

<li>
各 $P_{i, j}$は整数で、 $0 \le P_{i, j} \le 1000$を満たす必要がある。
</li>

<li>
制約を満たさなかった場合は、 
<span>
WA
</span>
となる。
</li>

<li>

<b>
出力の後には改行をし、標準出力をflushする必要がある。そうしなかった場合、 
<span>
TLE
</span>
となる可能性がある。
</b>

</li>

</ul>

<p>
続けて
<b>
計測
</b>
を行う。
<b>
計測
</b>
は $0$回以上 $10000$回以下繰り返し行う事ができる。


<b>
計測
</b>
に関するパラメタを以下の形式で標準出力へ出力せよ。
                        
</p>

<div>

\(
i ~ y ~ x\)

</div>

<ul>

<li>
1行目に3つの整数 $i, y, x$をスペース区切りで出力せよ。
</li>

<ul>

<li>
$i$は 
<b>
ワームホール
</b>
の番号を表す。
</li>

<li>
$y, x$は $i$番目の 
<b>
ワームホール
</b>
に対応する 
<b>
出口セル
</b>
から移動する距離を表す。
</li>

<li>
$i, y, x$は $0 \leq i \lt N, -L \lt y, x \lt L$を満たす必要がある。そうしなかった場合は 
<span>
WA
</span>
となる。
</li>

</ul>

<li>
出力の後には改行をし、標準出力をflushする必要がある。そうしなかった場合、 
<span>
TLE
</span>
となる可能性がある。


</li>

</ul>

<p>

<b>
計測
</b>
する位置を出力すると、
<b>
計測
</b>
によって得られた値が以下の形式で標準入力から与えられる。
</p>

<div>

\(
m\)

</div>

<ul>

<li>
1行目に1つの整数 $m$が与えられる。
</li>

<ul>

<li>
$m$は $\mathrm{max}(0, \mathrm{min}(1000, \mathrm{round}(P_{r,c} + f(S))))$で計算される計測値である。
</li>

</ul>

<li>
不正な値を出力した場合は `-1`が返されるので、プログラムを終了せよ。しなかった場合の結果は不定である。
</li>

<li>

<b>
配置
</b>
で出力した $P$の値が不正だった場合は、初回の計測のときに `-1`を返す。
</li>

</ul>

<p>

<b>
計測
</b>
を終了して 
<b>
回答
</b>
するときは、以下の形式で 
<b>
ワームホール
</b>
と 
<b>
出口セル
</b>
の対応を標準出力へ出力せよ。
</p>

<div>

\(
-1 ~ -1 ~ -1 \\
E_{0} \\
\vdots \\
E_{N-1}\)

</div>

<ul>

<li>
1行目は3つの整数 $-1 ~ -1 ~ -1$をスペース区切りで出力せよ。
</li>

<ul>

<li>
これは 
<b>
計測
</b>
の終了を表す。
</li>

</ul>

<li>
続く $N$行に、 $A$の推定値である $E$の値を改行区切りでを出力せよ。
                                
<ul>

<li>
これは、$i$番目の 
<b>
ワームホール
</b>
が $E_{i}$番目の 
<b>
出口セル
</b>
に対応すると 
<b>
回答
</b>
することを表す。
</li>

<li>
$0 \le E_{i} \lt N$を満たさなかった場合は 
<span>
WA
</span>
になる。
</li>

<li>
同じ番号を複数回出力しても良い。
</li>

</ul>

</li>

<li>
出力の後には改行をし、標準出力を flush する必要がある。そうしなかった場合、 
<span>
TLE
</span>
となる可能性がある。


</li>

</ul>

</section>

</div>

<div>

<section>

### **入力生成方法**

<ul>

<li>
$L, N, S$は、それぞれあり得る値の中から一様ランダムに一つを選んで生成する。
</li>

<li>
$Y_{i}, X_{i}$は、$L \times L$通りのグリッドの位置の中から互いに異なる $N$個を一様ランダムに選び、それらを整数ペアとして辞書順ソートすることで生成する。
</li>

<li>
$A_{i}$は、$0,1,\ldots,N-1$の順列の中から一様ランダムに一つを選ぶことで生成する。
</li>

</ul>

</section>

</div>

<div>

<section>

### **ツール**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc022/u4u4grds7n.html">Web版ビジュアライザ・入力ジェネレータ</a>: アニメーション表示が可能です。
</li>

<li>
<a href="https://img.atcoder.jp/ahc022/u4u4grds7n.zip">ローカル版テスタ・ビジュアライザ・入力ジェネレータ</a>: 使用するには<a href="https://www.rust-lang.org/ja">Rust言語</a>のコンパイル環境をご用意下さい。
                                
<ul>

<li>
<a href="https://img.atcoder.jp/ahc022/u4u4grds7n_windows.zip">Windows用のコンパイル済みバイナリ</a>: Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
</li>

</ul>

</li>

<li>
<a href="https://img.atcoder.jp/ahc022/u4u4grds7n_sample.zip">サンプルコード（C++, Python）</a>: サンプルの解答です。次の処理を実装しています。
                                
<ul>

<li>
$i$番目の
<b>
出口セル
</b>
の位置について $P$の値を $10 * i$に、
<b>
出口セル
</b>
が存在しない位置は $0$に設定する
</li>

<li>
各
<b>
ワームホール
</b>
について、 $y=0, x=0$で1回
<b>
計測
</b>
し、
<b>
出口セル
</b>
の中で $P$の値が計測値と最も近いものを推定結果として回答する
</li>

</ul>

</li>

</ul>

<p>

<font color="red">
<strong>
コンテスト終了までビジュアライズ結果の共有は禁止されています。ご注意下さい。
</strong>
</font>

</p>

#### **ツールで用いられる入出力ファイルの仕様**

<p>
ローカルテスタに与える入力ファイルは以下の形式を用いています。
</p>

<div>

\(
L ~ N ~ S \\
Y_0 ~ X_0 \\
\vdots \\
Y_{N-1} ~ X_{N-1} \\
A_{0} \\
\vdots \\
A_{N-1} \\
f_{0} \\
\vdots \\
f_{9999}\)

</div>

<p>
$f_{i}$は、$i$回目の
<b>
計測
</b>
で $P$の値に加えられる誤差を表す整数です。
</p>

<p>
ローカルテスタは解答プログラムの出力をそのまま出力ファイルに書き出します。

解答プログラムは、`#`から始まるコメント行を出力に含めてもかまいません。
                        Web版ビジュアライザを使用すると、コメント行を対応する
<b>
計測
</b>
と合わせて表示できるため、デバッグや考察等に役立てることができます。
                        ジャッジプログラムはコメント行を全て無視するため、コメント行を出力するプログラムをそのまま提出可能です。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入出力例**

<table>

<thead>

<tr>

<th>
Input
</th>

<th>
Output
</th>

<th>
説明
</th>

</tr>

</thead>

<tbody>

<tr>

<td>

<div>

3 3 1
0 0
0 1
2 1

</div>

</td>

<td>

</td>

<td>
入力の制約を満たさない、説明用の入力である点に注意せよ。

$3 \times 3$のグリッドの $(0,0), (0,1), (2,1)$に 
<b>
出口セル
</b>
が存在する。
                                
</td>

</tr>

<tr>

<td>

</td>

<td>

<div>

4 1 2
1 2 1
2 9 2

</div>

</td>

<td>
最初の出力として、 
<b>
配置
</b>
を行う。各セルに対応する $P_{i, j}$の値を設定する。
                                
</td>

</tr>

<tr>

<td>

</td>

<td>

<div>

0 0 0

</div>

</td>

<td>
続けて 
<b>
計測
</b>
を行う。
                                    この 
<b>
計測
</b>
では、0 番目の 
<b>
ワームホール
</b>
を指定し、
<b>
出口セル
</b>
から移動はしない。


</td>

</tr>

<tr>

<td>

<div>

8

</div>

</td>

<td>

</td>

<td>
計測値として $8$が得られた。
                                
</td>

</tr>

<tr>

<td>

</td>

<td>

<div>

1 1 1

</div>

</td>

<td>
続く 
<b>
計測
</b>
では、1 番目の 
<b>
ワームホール
</b>
を指定し、
<b>
出口セル
</b>
から下に1、右に1移動した場所を対象とした。


</td>

</tr>

<tr>

<td>

<div>

1

</div>

</td>

<td>

</td>

<td>

<b>
計測
</b>
の結果として $1$が得られた。


</td>

</tr>

<tr>

<td>

</td>

<td>

<div>

2 1 1

</div>

</td>

<td>
直前のものと同様の計測を 2 番目の 
<b>
ワームホール
</b>
に対して行う。
                                
</td>

</tr>

<tr>

<td>

<div>

1

</div>

</td>

<td>

</td>

<td>
再び計測値として $1$が得られた。


</td>

</tr>

<tr>

<td>

</td>

<td>

<div>

-1 -1 -1
2
0
0

</div>

</td>

<td>

<b>
計測
</b>
を終了し、 
<b>
回答
</b>
を行う。

0 番目の 
<b>
ワームホール
</b>
は $(2, 1)$に位置する 2 番目の 
<b>
出口セル
</b>
と対応すると推定した。
                                    1 番目と 2 番目の 
<b>
ワームホール
</b>
は判断できなかったため、どちらも0番目の 
<b>
出口セル
</b>
が対応していると 
<b>
回答
</b>
した。
                                
</td>

</tr>

</tbody>

</table>

</section>

</div>

</span>

</span>

</div>

</div>
