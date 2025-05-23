
<div>

<div>

<span>

<span>

<div>

<section>

### **問題文**

<p>
Y国には $N$個の都市と $M$本の道路があり、$i$番目の道路は都市 $u_i$と都市 $v_i$を双方向に結んでいる。どの道路も交差はなく、都市と道路からなるグラフは平面グラフである。


</p>

<p>
各都市には、その都市へと入る交通を制御するための
<b>
信号
</b>
がある。
                        信号には
<b>
赤
</b>
または
<b>
青
</b>
の $2$つの状態があり、都市 $v$の信号が青である場合のみ、都市 $v$へと移動できる。（移動元の都市の信号はどちらでも良い）
                    
</p>

<p>
Y国の都市の信号は、配列 $A, B$によって一元管理されている。


</p>

<p>
配列 $A$は長さ $L_A$であり、各要素は $0$以上 $N-1$以下の整数である。

配列 $B$は長さ $L_B$であり、初期状態は、すべての要素が $-1$である。


</p>

<p>
特に、配列 $B$は信号の状態を表す配列であり、配列 $B$が値 $v$を要素として含むとき、都市 $v$の信号は青である。配列 $B$が値 $v$を要素として含まないとき、都市 $v$の信号は赤である。

配列 $A$は、配列 $B$の制御に用いる配列であり、以下のように操作することで配列 $A$の値を用いて配列 $B$の内容を変更し、信号の状態を変化させることが出来る。


</p>

<p>

</p>

<ol>

<li>
$A$から連続する領域を選び、その領域を $R_A$とする。
                            
</li>

<li>
$B$から、$R_A$と同じ長さの連続する領域を選び、その領域を $R_B$とする。
</li>

<li>
$R_B$の内容を、$R_A$の内容で上書きする。
</li>

</ol>



<p>

</p>

<p>
さて、旅行好きなXは、Y国を旅行する計画を立てている。

Xは旅行計画として、都市の頂点番号のリスト $t_0, t_1, \ldots, t_{T-1}$を持っており、これらの都市を順に訪問したいと考えている。リストの中には同じ都市が複数回含まれる場合もあるが、同じ都市が連続して含まれることはない。


</p>

<p>
Xは都市 $0$を現在位置として、旅を始める。まず初めに、Xは友人であるY国の交通大臣に依頼し、信号の制御に用いる配列 $A$の内容を好きな値に設定する。 これ以降、$A$の内容を変更することはできない。

その後、次の 
<b>
信号操作
</b>
または 
<b>
移動
</b>
を好きな順序で $10^5$回以下の好きな回数繰り返す。信号操作と移動の具体例については下部の「出力例」セクションも参照せよ。


</p>

<p>

</p>

<ul>

<li>
信号操作
                            
<ul>

<li>
Y国の交通大臣に依頼し、上述した信号に対する操作を 1 回行い、信号の状態を変化させる。
</li>

</ul>

</li>

<li>
移動
                            
<ul>

<li>
Xの現在位置である都市から直接道路でつながっている都市の 1 つに移動し、現在位置を移動先の都市に更新する。移動先の都市の信号は青である必要がある。
</li>

</ul>

</li>

</ul>

<p>

</p>

<p>
旅行計画にある都市すべてをリストの順序で訪れることができた場合、Xの旅行は成功となる。

より厳密には、Xの現在位置となった都市を順に $c_0 = 0, c_1, \ldots$としたとき、ある狭義単調増加な長さ $T$の非負整数列 $(i_0, i_1, \ldots, i_{T-1})$であって $c_{i_j} = t_j(0 \le j \le T - 1)$であるようなものが存在する場合、またその場合に限り、Xの旅行は成功となる。
                    
</p>

<p>
Y国の交通大臣は非常に多忙なため、Xは信号操作の回数をなるべく減らしたいと考えている。

配列 $A$の要素の決定と信号操作・移動をうまく行い、できるだけ少ない信号操作の回数で旅を成功させてほしい。
                    
</p>

</section>

</div>

---

<div>

<section>

### **得点**

<p>
旅行が成功したときの信号操作の回数が $C$のとき、$C$の絶対スコアが得られる。絶対スコアは小さければ小さいほどよい。
                    
</p>

<p>
旅行が成功しなかった場合、不正な信号操作/移動を行った場合、信号操作と移動を行った回数が $10^5$回を超えた場合は 
<span>
WA
</span>
と判定される。
                    
</p>

<p>
各テストケース毎に、
                        
<span>
\( \text{round}(10^9 \times \left(\frac{全参加者中の最小絶対スコア}{自身の絶対スコア}\right)) \)
</span>
の相対評価スコアが得られ、その和が提出の得点となる。            
                    
</p>

<p>
最終順位はコンテスト終了後に実施されるより多くの入力に対するシステムテストにおける得点で決定される。 暫定テスト、システムテストともに、一部のテストケースで不正な出力や制限時間超過をした場合、そのテストケースの相対評価スコアは0点となり、そのテストケースにおいては「全参加者中の最小絶対スコア」の計算から除外される。 システムテストは 
<span>
CE
</span>
以外の結果を得た一番最後の提出に対してのみ行われるため、最終的に提出する解答を間違えないよう注意せよ。
                    
</p>

#### **テストケース数**

<ul>

<li>
暫定テスト: 50個
                        
</li>

<li>
システムテスト: 2000個
                            
<ul>

<li>
コンテスト終了後に <a href="https://img.atcoder.jp/ahc036/seeds.txt">seeds.txt</a>(sha256=`607aca150bd5f8f062937b02e6d14c15f7661aefbd279f150043e6d7e47f8d3c`) を公開します。
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

相対評価スコアの計算に用いられる各テストケース毎の全参加者中の最小絶対スコアの算出についても、順位表に反映されている最終提出のみが用いられます。


</p>

<p>
順位表に表示されているスコアは相対評価スコアであり、新規提出があるたびに、相対評価スコアが再計算されます。 一方、提出一覧から確認出来る各提出のスコアは各テストケース毎の絶対スコアをそのまま足し合わせたものであり、相対評価スコアは表示されません。 最新以外の提出の、現在の順位表における相対評価スコアを知るためには、再提出が必要です。 不正な出力や制限時間超過をした場合、提出一覧から確認出来るスコアは0となりますが、順位表には正解したテストケースに対する相対評価スコアの和が表示されます。
                    
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

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

\(
N ~ M ~ T ~ L_A ~ L_B \\
u_0 ~ v_0 \\
\vdots \\
u_{M-1} ~ v_{M-1} \\
t_{0} ~ t_{1} ~ \ldots ~ t_{T-1} \\
x_0 ~ y_0 \\
\vdots \\
x_{N-1} ~ y_{N-1} \)

</div>

<ul>

<li>
1行目には5つの整数 $N,M,T,L_A,L_B$がスペース区切りで与えられる。
                            
<ul>

<li>
$N$は都市の数で、$N = 600$を満たす。
</li>

<li>
$M$は道路の本数で、$N-1 \le M \le 3 \times N-6$を満たす。
</li>

<li>
$T$は訪問する都市の数で、$T = 600$を満たす。
</li>

<li>
$L_A$は信号の制御に用いる配列 $A$の長さで、$N \le L_A \le 2 \times N$を満たす。
</li>

<li>
$L_B$は信号の制御に用いる配列 $B$の長さで、$4 \le L_B \le 24$を満たす。
</li>

</ul>

</li>

<li>
続く $M$行は道路の情報で、道路 $i$は 都市 $u_i$と $v_i$を双方向に結ぶ。
                                $u_i, v_i$は、$0 \le u_i \lt v_i \le N - 1$, $(u_i, v_i) \neq (u_j, v_j) (i \neq j)$を満たす。
</li>

<li>
次く1行に、$T$個の整数値がスペース区切りで与えられる。$t_0, t_1, ..., t_{T - 1}$は、Xが訪れる予定の都市であり、
                                $0 \le t_i \le N - 1 (0 \le i \le T - 1)$, $t_0 \neq 0$, $t_i \neq t_{i+1} (0 \le i \le T - 2)$を満たす。
</li>

<li>
続く $N$行は、ビジュアライザのため、都市 $i$の座標が $(x_i, y_i)$として与えられる。座標の値は整数であり、
                                $0 \le x_i, y_i \le 1000$, $(x_i, y_i) \neq (x_j, y_j) (i \neq j)$を満たす。不要であれば読み込まなくても構わない。
</li>

</ul>
与えられるグラフは、連結な平面グラフであり、頂点 $i$を座標 $(x_i, y_i)$に配置し、各辺を両端点を結ぶ線分として描画した時、どの二辺も端点以外に共通点を持たないことが保証されている。
                        
### **出力**

<p>
1行目に、$A$の初期値を表す $L_A$個の $0$以上 $N - 1$以下の整数をスペース区切りで出力せよ。


</p>

<p>
続く各行に、以下のフォーマットで行動を出力せよ。
</p>

<ul>

<li>
信号操作を行う場合

$R_A, R_B$の長さを $l (1 \le l \le L_B)$、 $R_A$の開始位置を $P_A (0 \le P_A \le L_A - l)$、
                            $R_B$の開始位置を 
                            $P_B (0 \le P_B \le L_B - l)$としたとき、以下のように、行頭の `s`に続けてスペース区切りで $l, P_A, P_B$を出力せよ。


<div>

s $l P_A P_B$
</div>

</li>

<li>
移動を行う場合

移動先の都市の番号を $v$としたとき、
                            以下のように、行頭の `m`に続けてスペース区切りで $v$を出力せよ。


<div>

m $v$
</div>
移動先の都市は現在の都市と直接道路で繋がっており、信号はこの時点で青である必要があることに注意せよ。
                            
</li>

</ul>

<p>
<a href="https://img.atcoder.jp/ahc036/e5f02df53f30d36e.html?lang=ja&output=sample">例を見る</a>
</p>

</section>

</div>

</div>

<div>

<section>

### **入力生成方法**

<details>

<summary>
入力生成方法の詳細
</summary>

<p>
$L$以上 $U$以下の整数を一様ランダムに生成する関数を $\mathrm{rand}(L, U)$とし、
                        $L$以上 $U$未満の実数を一様ランダムに生成する関数を $\mathrm{rand\_double}(L, U)$とする。
                        また、2つの頂点 $u, v$の距離を $\sqrt{(x_u - x_v)^2 + (y_u - y_v)^2}$とする。
</p>

#### **グラフの生成**

<p>
グラフの生成に使用するパラメタ $D_{vmin}$, $D_{emax}$, $P_{remove}$を、それぞれ $\mathrm{rand}(20, 30)$, $\mathrm{rand}(80, 140)$, $\mathrm{rand\_double}(0.0, 0.5)$で生成する。
</p>

<p>
$N = 600$として、$i = 0, 1, \ldots N - 1$の順に以下の操作を行い頂点集合 $V$を生成する。
</p>

<ol>

<li>
$x_i = \mathrm{rand}(0,1000), y_i = \mathrm{rand}(0,1000)$として生成する。
</li>

<li>
$V$に含まれる頂点に $(x_i, y_i)$との距離が $D_{vmin}$未満のものが存在しなくなるまで、$(x_i, y_i)$を選び直す。
</li>

<li>
$V$に $(x_i, y_i)$を加える。
</li>

</ol>

<p>
辺集合 $E$を以下のようにして生成する。
</p>

<ol>

<li>
距離が $D_{emax} / 2$以下の頂点ペアを全て列挙し、ランダムな順番に並び替える。各ペアについて順番に、すでに追加したどの辺とも交差しない場合 $E$に追加する。ここで、辺が交差するとは、頂点 $i$を座標 $(x_i, y_i)$に配置し、辺を両端点を結ぶ線分として描画した際に、2辺が共通の端点以外に共通点を持つことを表す。
</li>

<li>
距離が $D_{emax} / 2$より大きく $D_{emax}$以下であるような頂点ペアを全て列挙し、ランダムな順番に並び替える。各ペアについて順番に、すでに追加したどの辺とも交差しない場合に $E$に追加する。
</li>

</ol>

<p>
この時点でグラフ $(V, E)$が連結でなければ $V$の生成からやり直す。
</p>

<p>
最後に、各辺 $e \in E$についてランダムな順に、$e$を取り除いてもグラフが連結であれば、確率 $P_{remove}$で $E$から $e$を取り除く。
</p>

#### **$t$の生成**

<p>
$t_0$を $\mathrm{rand}(1, N - 1)$で生成する。
</p>

<p>
$i = 1, 2, \ldots, T - 1$の順に、$t_i$を、$0$以上 $N - 1$以下の整数のうち $t_{i -1}$以外のものの中から一様ランダムに選ぶことで生成する。
</p>

#### **$L_A, L_B$の生成**

<p>
$L_A$を $\mathrm{rand}(N, 2 \times N)$で生成する。
</p>

<p>
$L_B$を $\mathrm{floor}{(\mathrm{rand\_double}(2.0, 5.0)^2)}$で生成する。ここで、$\mathrm{floor}{(x)}$は $x$以下の最大の整数を表す。
</p>

</details>
必ずしも理解する必要はありません。

厳密な実装は入力ジェネレータのソースコードをご覧ください。
                
</section>

</div>

<div>

<section>

### **ツール**

</section>

<ul>

<li>
<a href="https://img.atcoder.jp/ahc036/e5f02df53f30d36e.html">Web版ビジュアライザ・入力ジェネレータ</a>: アニメーション表示が可能です。
</li>

<li>
<a href="https://img.atcoder.jp/ahc036/e5f02df53f30d36e.zip">ローカル版テスタ・入力ジェネレータ</a>: 使用するには<a href="https://www.rust-lang.org/ja">Rust言語</a>のコンパイル環境をご用意下さい。
                            
<ul>

<li>
<a href="https://img.atcoder.jp/ahc036/e5f02df53f30d36e_windows.zip">Windows用のコンパイル済みバイナリ</a>: Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
</li>

</ul>

</li>

<li>
<a href="https://img.atcoder.jp/ahc036/e5f02df53f30d36e_sample.zip">サンプルコード（C++, Python）</a>: サンプルの解答です。次の処理を実装しています。
                            
<ul>

<li>
配列 $A$の初期値を、先頭 $N$個の要素は $0, 1, \ldots, N - 1$に、残りの要素は $0$に設定する。
</li>

<li>
$i = 0, 1, \ldots, T - 1$の順に以下を行う。
                                    
<ul>

<li>
次の訪問先 $t_i$とのユークリッド距離が小さいような頂点を優先して探索する深さ優先探索を用いて、現在位置から $t_i$までの経路を見つける。その経路上の頂点を1つずつ、$l = 1, P_B = 0$での信号操作を行って信号を青にしてからその頂点へ移動することを繰り返し、$t_i$まで移動する。
</li>

</ul>

</li>

</ul>

</li>

</ul>

<p>

<font color="red">
<strong>
コンテスト期間中に、ビジュアライズ結果の共有や、解法・考察に関する言及は禁止されています。ご注意下さい。
</strong>
</font>

</p>

<p>
ローカル版テスタは解答プログラムの出力をそのまま出力ファイルに書き出します。

解答プログラムは、`#`から始まるコメント行を出力に含めてもかまいません。
                    Web版ビジュアライザを使用すると、コメント行を対応するタイミングで表示できるため、デバッグや考察等に役立てることができます。
                    ジャッジプログラムはコメント行を全て無視するため、コメント行を出力するプログラムをそのまま提出可能です。
</p>

</div>

---

<div>

<section>

### **入力例**

<div>

7 9 3 7 4
0 1
0 2
0 3
1 2
2 3
3 4
4 5
5 6
6 0
4 1 5
100 0
200 0
200 100
100 100
0 200
0 100
0 0

</div>
この入力は説明用のものなので、入力の制約を満たさないことに注意せよ。
            
</section>

</div>

<div>

<section>

### **出力例**

<div>

0 1 3 4 5 6 2
s 4 0 0
m 3
m 4
m 3
m 0
m 1
s 2 4 2
m 0
m 6
m 5

</div>

<table>

<thead>

<tr>

<th>
出力
</th>

<th>
説明
</th>

<th>
ビジュアライズ
</th>

</tr>

</thead>

<tbody>

<tr>

<td>

<div>

0 1 3 4 5 6 2

</div>

</td>

<td>
$A$の初期値を $[0, 1, 3, 4, 5, 6, 2]$とする。

初期状態では信号は全て赤である。
</td>

<td>

<img src="https://atcoder.jpdata:image/png;base64,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k3zzzTermqzWX9++fZv+9evXr2lroZoZX5wiUK/nEfUG7rjjDnPJJZeY2bNn2yw233xzc91115lXX33VrlJXq9RruJj999/f9kK8/77moYceMqeffnrb7tSoZSRd8gS++OIL84tf/MI8+uij1fGO4447ztx2223mhRdeMI8//riRS/PCCy+0riyVYPr06dYDIjeXeiplDIkvJMwKonySb7zxhr2cfNAnnniiUbeyVVh++eVbReG8QwSSFA/d9qWXXmpmzZplCXitUfPnP//ZrLnmmrZh4ruotttuO3v8e9/7nrnmmmusi+Oyyy4zv/zlL43Xc3GIHkX1Cfz73/+24qHnioJsefTRR5tVVlnFqOEp95UaCxr32HLLLc3YsWNtA1bjYn/4wx/MRRddZOP6+ZXmM8sOUJIuLK/FUDnyyCNtl3LZZZetvPXWW1neCtfKAYEk3Va6Ha9BUllhhRWqborJkydXvJZlwzv1WqYVz/9dje/5zytez7hhfE7kl4DXGKjIVeU9+CveuFbF8240tOW8efMqZ5xxRmXppZe28ZXulVdeKaUL02kXlidIVug9Q1bfQVwa5S/5jSbd8xBO1Sd/Vp9mV22wwQa259EI9frrr2+CPVptxNjOdM9G+XI8WwKymddYqLqh9t13X+ONeRi/x1lbGg2k77zzzma55Zazp+S+kju9jG4spwXkpZdesgZs9R+9tgLw220CaYiHiChfXwAkDhpTaxY+++wzI9+5H7zei3V1+L/5dIOAZtr5bkuVeOONN7Zuq2al13TuJZdcshrF6w0bb2JP9XdZvjT/H5JTCl5H2P7H1YCmWgkSkGDQeQX5LQnFIpCWeIjSbrvtZu6++247bXfw4MEt1ws99dRTxnNnVAEP9daHsCakisOZLxrH0FiHGgMaw1p55ZVb2tGf4uvf5GqrrdayweHHLdKnkwKigS4t7FKQgGhhj/4jqwupFqQqgn6vuOKKtiKoJRlsLRTJgGW6lzTFQxzXWGMN6wpVA0T1qpELQ3E1K8ub7lt1eR111FH2IUSjRXTcCmuvvba58cYb7bND9lt11VVb3oBm4vm9FtUTNR7k2ipbcFJAJBLyOSrIeN78fHPttdeam266yTz99NPV2VmqCCNHjjSjR482hx56qPEG21u2LGym/JM7AmmLh264kWDMmDHDNli0QlluU2+9gLnllluq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">

</img>

</td>

</tr>

<tr>

<td>

<div>

s 4 0 0

</div>

</td>

<td>
$A$の $0$番目の要素から始まる長さ $4$の部分列を、 $B$の $0$番目の要素を始点とする範囲に対して上書きする。 $B$の値は $[0, 1, 3, 4]$となる。
</td>

<td>

<img src="https://atcoder.jpdata:image/png;base64,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">

</img>

</td>

</tr>

<tr>

<td>

<div>

m 3
m 4

</div>

</td>

<td>
頂点 $0 → 3 → 4$の順で最初の目的地の頂点へと移動する。
</td>

<td>

<img src="https://atcoder.jpdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAMQGlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBoAQSkhN4EkRpASggt9I4gKiEJEEqMgaBiRxcVXLtYwIauiihYAbGgiJ1FsWFfLCgo62LBrrxJAV33le/N982d//5z5j9nzswtA4DaSY5IlIuqA5AnLBDHBvvTxyWn0Ek9AAUGAAAy8OJw80XM6OhweAeG2r+XdzcBIm2v2Uu1/tn/X4sGj5/PBQCJhjidl8/Ng/gQAHglVyQuAIAo5c2mFoikGFagJYYBQrxIijPluFKK0+V4n8wmPpYFcSsASiocjjgTANUrkKcXcjOhhmo/xI5CnkAIgBodYp+8vMk8iNMgtoY2Ioil+oz0H3Qy/6aZPqzJ4WQOY/lcZEUpQJAvyuVM/z/T8b9LXq5kyIclrCpZ4pBY6Zxh3m7lTA6TYhWI+4TpkVEQa0L8QcCT2UOMUrIkIQlye9SAm8+COQM6EDvyOAFhEMNVR4OEuZHhCj49QxDEhhjuEHSaoIAdD7EuxIv4+YFxCpst4smxCl9ofYaYxVTw5zlimV+prweSnASmQv91Fp+t0MdUi7LikyCmQGxeKEiMhFgVYof8nLgwhc3YoixW5JCNWBIrjd8c4li+MNhfro8VZoiDYhX2pXn5Q/PFtmQJ2JEKfKAgKz5Enh+slcuRxQ/ngl3hC5kJQzr8/HHhQ3Ph8QMC5XPHevjChDiFzgdRgX+sfCxOEeVGK+xxU35usJQ3hdglvzBOMRZPLIAbUq6PZ4gKouPlceJF2ZzQaHk8+HIQDlggANCBBNZ0MBlkA0F7X0MfvJP3BAEOEINMwAf2CmZoRJKsRwivcaAI/AkRH+QPj/OX9fJBIeS/DrPyqz3IkPUWykbkgKcQ54EwkAvvJbJRwmFvieAJZAT/8M6BlQvjzYVV2v/v+SH2O8OETLiCkQx5pKsNWRIDiQHEEGIQ0QbXx31wLzwcXv1gdcIZuMfQPL7bE54SOgiPCDcIXYTbkwTF4p+ijABdUD9IkYv0H3OBW0JNV9wf94bqUBnXwfWBPe4C/TBxX+jZFbIsRdzSrNB/0v7bDH5YDYUd2ZGMkkeQ/cjWP49UtVV1HVaR5vrH/MhjTR/ON2u452f/rB+yz4Nt2M+W2CLsIHYOO4VdwI5hDYCONWONWBt2XIqHd9cT2e4a8hYriycH6gj+4W9oZaWZzHescex1/CLvK+BPk76jAWuyaLpYkJlVQGfCLwKfzhZyHUbRnRydXACQfl/kr683MbLvBqLT9p2b/wcA3s2Dg4NHv3OhzQDsd4eP/5HvnDUDfjqUATh/hCsRF8o5XHohwLeEGnzS9IARMAPWcD5OwA14AT8QCEJBFIgHyWAijD4L7nMxmApmgnmgBJSB5WAN2AA2g21gF9gLDoAGcAycAmfBJXAF3AB34e7pBi9AP3gHPiMIQkKoCA3RQ4wRC8QOcUIYiA8SiIQjsUgykoZkIkJEgsxE5iNlyEpkA7IVqUb2I0eQU8gFpAO5jTxEepHXyCcUQ1VQLdQQtURHowyUiYah8egENBOdghahC9Cl6Dq0Ct2D1qOn0EvoDbQLfYEOYABTxnQwE8weY2AsLApLwTIwMTYbK8XKsSqsFmuC63wN68L6sI84EafhdNwe7uAQPAHn4lPw2fgSfAO+C6/HW/Fr+EO8H/9GoBIMCHYETwKbMI6QSZhKKCGUE3YQDhPOwGepm/COSCTqEK2I7vBZTCZmE2cQlxA3EuuIJ4kdxMfEARKJpEeyI3mTokgcUgGphLSetIfUTLpK6iZ9UFJWMlZyUgpSSlESKhUrlSvtVjqhdFXpmdJnsjrZguxJjiLzyNPJy8jbyU3ky+Ru8meKBsWK4k2Jp2RT5lHWUWopZyj3KG+UlZVNlT2UY5QFynOV1ynvUz6v/FD5o4qmiq0KSyVVRaKyVGWnykmV2ypvqFSqJdWPmkItoC6lVlNPUx9QP6jSVB1U2ao81TmqFar1qldVX6qR1SzUmGoT1YrUytUOql1W61Mnq1uqs9Q56rPVK9SPqHeqD2jQNMZoRGnkaSzR2K1xQaNHk6RpqRmoydNcoLlN87TmYxpGM6OxaFzafNp22hlatxZRy0qLrZWtVaa1V6tdq19bU9tFO1F7mnaF9nHtLh1Mx1KHrZOrs0zngM5NnU8jDEcwR/BHLB5RO+LqiPe6I3X9dPm6pbp1ujd0P+nR9QL1cvRW6DXo3dfH9W31Y/Sn6m/SP6PfN1JrpNdI7sjSkQdG3jFADWwNYg1mGGwzaDMYMDQyDDYUGa43PG3YZ6Rj5GeUbbTa6IRRrzHN2MdYYLzauNn4OV2bzqTn0tfRW+n9JgYmISYSk60m7SafTa1ME0yLTetM75tRzBhmGWarzVrM+s2NzSPMZ5rXmN+xIFswLLIs1lqcs3hvaWWZZLnQssGyx0rXim1VZFVjdc+aau1rPcW6yvq6DdGGYZNjs9Hmii1q62qbZVthe9kOtXOzE9httOsYRRjlMUo4qmpUp72KPdO+0L7G/qGDjkO4Q7FDg8PL0eajU0avGH1u9DdHV8dcx+2Od8dojgkdUzymacxrJ1snrlOF03VnqnOQ8xznRudXLnYufJdNLrdcaa4RrgtdW1y/urm7id1q3Xrdzd3T3CvdOxlajGjGEsZ5D4KHv8ccj2MeHz3dPAs8D3j+5WXvleO126tnrNVY/tjtYx97m3pzvLd6d/nQfdJ8tvh0+Zr4cnyrfB/5mfnx/Hb4PWPaMLOZe5gv/R39xf6H/d+zPFmzWCcDsIDggNKA9kDNwITADYEPgkyDMoNqgvqDXYNnBJ8MIYSEhawI6WQbsrnsanZ/qHvorNDWMJWwuLANYY/CbcPF4U0RaERoxKqIe5EWkcLIhigQxY5aFXU/2ip6SvTRGGJMdExFzNPYMbEzY8/F0eImxe2OexfvH78s/m6CdYIkoSVRLTE1sTrxfVJA0sqkrnGjx80adylZP1mQ3JhCSklM2ZEyMD5w/Jrx3amuqSWpNydYTZg24cJE/Ym5E49PUpvEmXQwjZCWlLY77QsnilPFGUhnp1em93NZ3LXcFzw/3mpeL9+bv5L/LMM7Y2VGT6Z35qrM3izfrPKsPgFLsEHwKjske3P2+5yonJ05g7lJuXV5SnlpeUeEmsIcYetko8nTJneI7EQloq4pnlPWTOkXh4l35CP5E/IbC7Tgj3ybxFryi+RhoU9hReGHqYlTD07TmCac1jbddvri6c+Kgop+m4HP4M5omWkyc97Mh7OYs7bORmanz26ZYzZnwZzuucFzd82jzMuZ93uxY/HK4rfzk+Y3LTBcMHfB41+Cf6kpUS0Rl3Qu9Fq4eRG+SLCofbHz4vWLv5XySi+WOZaVl31Zwl1y8dcxv677dXBpxtL2ZW7LNi0nLhcuv7nCd8WulRori1Y+XhWxqn41fXXp6rdrJq25UO5SvnktZa1kbde68HWN683XL1//ZUPWhhsV/hV1lQaViyvfb+RtvLrJb1PtZsPNZZs/bRFsubU1eGt9lWVV+TbitsJtT7cnbj/3G+O36h36O8p2fN0p3Nm1K3ZXa7V7dfVug93LatAaSU3vntQ9V/YG7G2sta/dWqdTV7YP7JPse74/bf/NA2EHWg4yDtYesjhUeZh2uLQeqZ9e39+Q1dDVmNzYcST0SEuTV9Phow5Hdx4zOVZxXPv4shOUEwtODDYXNQ+cFJ3sO5V56nHLpJa7p8edvt4a09p+JuzM+bNBZ0+fY55rPu99/tgFzwtHLjIuNlxyu1Tf5tp2+HfX3w+3u7XXX3a/3HjF40pTx9iOE1d9r566FnDt7HX29Us3Im903Ey4easztbPrFu9Wz+3c26/uFN75fHfuPcK90vvq98sfGDyo+sPmj7out67jDwMetj2Ke3T3Mffxiyf5T750L3hKfVr+zPhZdY9Tz7HeoN4rz8c/734hevG5r+RPjT8rX1q/PPSX319t/eP6u1+JXw2+XvJG783Oty5vWwaiBx68y3v3+X3pB70Puz4yPp77lPTp2eepX0hf1n21+dr0LezbvcG8wUERR8yR/QpgsKIZGQC83gkANRkAGjyfUcbLz3+ygsjPrDIE/hOWnxFlxQ2AWvj/HtMH/246Adi3HR6/oL5aKgDRVADiPQDq7Dxch85qsnOltBDhOWBL1Nf0vHTwb4r8zPlD3D+3QKrqAn5u/wWHkXxtWOlWQAAAAJZlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAOShgAHAAAAEgAAAISgAgAEAAAAAQAAAZCgAwAEAAAAAQAAAZAAAAAAQVNDSUkAAABTY3JlZW5zaG90KFFpvAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAtdpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQwMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj40MDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4xNDQ8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjE0NDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CsbP7/sAADx+SURBVHgB7Z0JtBxVnf/vy0Z2SALZISEhAQIkhABBZBcQ+MsiHA4QEHEQRhgOw/GPDh79a1ABOTLDKM4BWUZ0RAFlFRiRJQSQzQCBsCUhISzZyEYSsr7k9b+/96X61eu87q7urqquW/W55/Tr6qq7fn716lt3b8rlncFBAAIQgAAEqiTQqUr/eIcABCAAAQhYAggINwIEIAABCNREAAGpCRuBIAABCEAAAeEegAAEIACBmgggIDVhIxAEIAABCCAg3AMQgAAEIFATAQSkJmwEggAEIAABBIR7AAIQgAAEaiKAgNSEjUAQgAAEIICAcA9AAAIQgEBNBBCQmrARCAIQgAAEEBDuAQhAAAIQqIkAAlITNgJBAAIQgAACwj0AAQhAAAI1EUBAasJGIAhAAALVE3jmma2mqWm9/Uyd2lx9BAkLgYAkzCBkBwIQSC+Bq69uE43p07c6X9AmNpRy3oYUAAIQcISAah9+l8v19P907pgaiHMmI8MQgICLBNR8Vexcb8ZCQIotym8IQAACERDwmq+OOqqT0ScNjiasNFiRMkAAAokn4DVfTZu2g3nmmRbjCYrLzVjpkMHE3zpkEAIQyDKB4uarqVO7FnC43IzVpVAKDiCQUgJzF64yM2YvMbM/XmEWLv/crFm/2Za0b89uZtjOvc2euw4wB+452IwZ1i+lBChWowl4tY3W5qvONjs6Vk3EZUcTlsvWI+9lCbw2d6l5+IW55p0PV5T1510cN2KAOeXQMeaAMYO8U3xDoG4CSz5fbob0aR1tdch5L5lxZz5h43znT8eZl35/iD1evHadGdx7l7rTijsCaiBxEye9WAjc+sgb5snXFti0mjo3my79l5vOfVabTj3WmaYurWPxc1u6mpYNvczWtTuaLSt3tkIjsTn2gJHm4q9MiCWfJJJeAhKOh2Y/aR58/LN8Ic+3Bd1p7zmmxeQKx8a0CsiJF80w37pytTl1zy85JSQISHrv30yWbN3GZvPze14u1Dq6DfnIdB20KM+i9Z/WD6Wp62bTWZ++q0y3YR+a5qVDzebFu1nhWbRirfnOWZNNr+5tbdX+sBxDoByB6R++Yn735gOmJZczM//YKh6D911g9PGc/1jnXlo407yy8A1z/oSvmiNHHOx5S/Q3neiJNg+Zq5aAJx6duq83Pca+mRePhfkotheP7ePNWb8Ko7CqiSguHASqJfDI3Gnmzjfut+KhsEveGlkyiv3Pnm6vzbz7SPut2onCPjJnWskwSboQWw1ky5yZZuP0B03zWy+blk8/sQw6DRxuuu472XQ/8jTTZez+SeJCXhwkoGYrPfglAN1Hv2tUw6jWdeq5zobdOG/vfFzGKE6as6qlmA7/GjlVbSf3h6sXmplLNuYBtAqCn8T+5zzr/2mPB++Xv8nubj391++fn6+h5H/nXf5pae4bvMCM2HFY68WAf/2juwIGqctbLALy+W1TzcYn7tkuo1sXLzD66Fr3484yvS+aup0fTkAgCAF1mHt9Hjvs9n5N4uGlI+FRHBvmjLdxaoQWHesenex8H3VU53bzNYKVfGDemz7tXXHzlXfV34ylmoq/tjLTempbO8sLU+r7Rz+Kv7k18iasNddc1KF4FEOQiMgvDgK1ENBoKzn1eagWUa9THIpLzou73jgJ7x4BvdFr4l+UM8e9Zqx66Eg84q59KL+RDuMtVfMoB4qaSDk6XOuIgOZ5fP+OZ41GW/Xc79W8l1xH3mo412TWz5pkclu7mmsuPIJ5IjUQTFOQo4/e2K5Jy//Q1oir7z19QyTFve6YK/Mjs3a2cWvSoTenRCf8eYgk8QqRRlYDsX0eHTRbVciPra0oLA4CQQlokqCchuqGJx6KMbctTmMnIuoMLrsEpk3rbh/YHgE9yCUqcjMWzfJOh/7txZ008VBBIxMQdZjX6uoJW2uahHOXgGaYy2meR9jOi9NLI+z4ic8tAsVNWupkl4g8+sTnkRVEcWsdLa/moeY0Nas1osmquJCRCYhGW9Xq6glba5qEc5eAlieR0yTBsJ0Xp5dG2PETn3sE1Lnur41IRG657Ev5+R7bj7yqt3SKU3F7Tk1WSlt5SIKLbBSWN1S3lkJuXfqxmTdvXi1BCZNBAmvWbbKl9maYh4nAi1NpcE+GSdb9uL72NWPGju1mzj13gC2M5nIseWuEOeGa34VSOImHNz9EETa6v6OjQkVWA+koMc5BoNEEmpfsatbN/IL9bF4yvNHZIX3HCUyevNncddeKwgxzDcO989QfthuOW20RJRyKwxOPiWc/a7TkexKarIrLElkNRJMENcejFtd50K5m9OjRtQQlTAYJ9O0116zO1xC0tlUtkwfLIVOccn177cA9WQ5Uhq/pUfWPAdeYZ+48oPDQ16RADc/d/5zpVZEprnUojiMveC0fxwlVxROX58hqIJphXqurJ2ytaRLOXQJakl1OCyOG7bw4vTTCjp/40kFgWN9BViz8zVdeDaKaEvrDeAKkuJPqIhMQLU9Sq6snbK1pEs5dAtrPQ06r6obtvDi9NMKOn/jSQWCvAa0tJv4Z5/5Z5kFL6Z9U6NVevLiDxhGnv8gERGtbaVJgtU5hWBerWmrZ9q+lRuS0JHt+bqw9DudP07Y4jd1wKpw4iSWNBA4cup8tln85ko7Wvqqm7N6yJl7c1YSNy29kAqICaG2rbhMOC1wW+WU9rMC48LiNgHYS1GZQmjGuJdnDcopLcSpudisMi2o649FM8UOG7Z8fyntEoYA11UB8fSZLZo2wcXqz0AsRJ+ggUgFROft+/7ZANRHVPOQXB4FaCGgnQTnt59Gyvv6+EMWhuOS8uO0P/kCgBIFT9zw2P+Gv9WI58bAd5WXmjHjNWOoP0QZTSXaRjcLyF1q1CvVreMu5a56HnEZbsZy7nxTHtRLQarnaSVAr8m76aI+al3NX+rnmbjYOHStOVuIVCVwlAu/N6GcWz2rdurZU85V/lFWQOSPvzehvBh9VKeXGXY9FQFQ89Wv03rbnhzchi6G6jTN8GlPWvh3aSVD7eGg/Dy3JXu3KvKp5SIBaNvY0owf3YS+QNN4oEZXJW2pE0RfXQPzC4SXvzRnRyC2/f3Wee6OxNMs9KbPOvXz7vyNvwvInxjEEoiagbWjVZyEB0H4ezUu1Ic+2doWyiTdZvwrjiccZB+1sFi3Sdrg4CAQnoLWqLphwuum0rT2rWDzs8NxtOxEqVs0ZkR+5Tvl7VWE161zOL0r2RML+xFYDSVi5yU5KCWgP86lfP8zuJKjmLPVjNH86xK6qq4URcy2d20qeP966pp8d/qsRXOowl1Ozla3N5MVj5cqV9tzQoeF1ztsI+ZMqAv7dC/Xw157mK97Zw3zv/31u5rzauhS7CuyvbWg3QnW6qyaiGsf6ufuY637SOx+2v5lm2jaSUtxJrYVEuh9IqTuEJqxSZDgfJgHtUqjNoLTNbRCnmos6zP19HqqBSET69+9vEJEgFLPpx7/UeuuyI+337Tjnsk/MAVOeNQvXLDWrN7Uu/rnjDr2NJgn+7oqvmFmv9C2A89a80gq8ct7vgocEHSAgCTIGWYmGgDac0p4hWpJ9/uLVZuPmLTahHbp1NqOH7GQ0SVBzSUoN1UVEorFLmmL1NptS89WRR3Zu1/RULAAdvUD7BUhc/PG0Lt/ePZG4EJBEmoVMRUXgT9Nnmz9Nf89Gf+aRe5ozj9wrUFKISCBMmfSkJqajj25dEdoPQA9+iUdx81NHAqJwikd9Huo4L3aq1STR0YmeRKuQp8QRUPOVmrHUnEXHeuLMk7gMSTiq3bdDQuPfZ8RfKNVQkugQkCRahTwlkgAikkizNDxTxSOlipusqs2gt+uhP9z06Vv9PxNznNpRWLlcLj8rNMjwzcTYItMZ+fDDD83zzz9vZs+ebRYvXmxZDBgwwOy9997mi1/8ohkxYoTp2rV1lFQjQXkd6YzOaqQVkpN28eirsPbsUG1EzVZe30pHzVpJoJAKAZFYbNq0ySxbtsx8/vnn9ri5udn07NnT7LDDDqZXr162+UHHuGQRWL9+vfnzn/9s7r//fvPWW29ZG65b17o1bffu3c3AgQPNyJEjzVlnnWXOOOMMs/PObUMiG1USRKRR5BuX7pYtW8z1119v3n33XTNx4kRz/vnnm1122aWQoXprHYWIig7UpOV1sOs7LIEqSqbmn84LiAy7ZMkS8+qrr5p7773X/OMf/zAffPCB2bp1qzXw2LFjzX777WdOPfVUc9BBB1khqZkWAUMlINH/7W9/a26++WYrHnoRkOvcWW9fOSMhkS31Ucfjp59+ai688MJEDKdFREK9FRIfmYTjwQcfNK+//rrZvHmzOfPMM22e1Xw1bdoO23WUh1kgiYY65JNYC3FaQCQec+fONb/85S/N7bffbvRbrlOnTrbmoRqJHjpqGnn44YfNlVdeac4777xEvMWGeYO5Gtcjjzxi7aaahwTjsMMOMyeeeKKZMGGCba6SaDz++OPmiSeeMB999JH51a9+ZZuyTjvtNNO3b9u4+UaVHxFpFPl409W9+dhjj9mXGL2YqnXDe9lRDSEOpyat4tFccaRbKQ1nBaSlpcU+VP7rv/7L3HLLLbaceqjstdde9iGjf249dNSmrs/ChQvNtddea/1ddtllpksXZ4teyaZOXJe4q+lq5syZ9p/xkEMOMVdddZU5+OCDzU477WRrIZMnT7b9H3oh0AuAXgZ+85vfmAMOOMDsu+++iSgnIpIIM0SWCQnGAw88kN/3/C6zatWqyNJxNWJnn6KrV682Dz30kJGAyA0ZMsRccMEF5tJLLzXDhg2zHeiqauoBdfXVV9s3CD207rnnHnPyySezv3WD79gnn3zSzJgxw+hFQP0cl19+eX4C1pGmd+/W7WmVvR133NEKha6pGUu29Dra99gjv+Juvo8kCQ4RSYIVwsmD+uQ+/vhj+1HrxnPPPWdefvlle/+Fk0K6YnFSQPTQ0agdvY3KqebxT//0T/YN1v8A6tatmznwwAPNj3/8Y/Pmm2+aTz75xN4IahaR0OAaQ0D2e+aZZ8yCBQtsBiQckyZNaiceXs5U+1BNRM1as2bNss2UL774olGNRS8KSXGISFIsUV8+/vKXv5jbbrvNPl/Wrl1rli9fbvtT64s1vaGdnAciw77wwgv2gSLTSCT0luoXD89kegDpn1ujeAYNGmSbR3RT4BpHQMN0VaPw+qwOPfTQdiNainPWo0cPOxBCw3rlnnrqKducVeyv0b91nzHZsNFWqC99tVLoReX99983S5cuRTwq4HSyBqIx+OrUkuvXr5/50pe+ZJtBSpVVD56vf/3rttlKI3w0LBTXOALqk1J/hpyaofbZZ5+KneLyo6YuhVOn+5o1axpXgDIpUxMpA8eBS5pzpL5SNWX5nZrLp0+fXnjp8V/L8rFzAqLRD3p4qP1cTs0YGrlTzqkpS0N59cE1noBqH16H5PDhw+1LgIS9nNODuU+fPtaLai6a76PvJA6GQETKWTLZ18aNG2dfNL1RVl5u1WT+0ksvISAekG3fzgmIOsbVl6HqpZxqFzK6RkuoY11zB/T2IH+auazmDz14NLJHzVm4xhNQDXLDhg02I7JfkBnm6ufyTwSVrTWcMokCooIhIo2/z2rJge4x/33mxaFzrGzh0Wj7dk5AJA5qApGTIGg2qB4k6iSfNm2a/daxOmj1dqthvRoaetJJJ9mmqyTMH2jDn80j9WFpEqGcRloFERCtJuD3JwHRS4JeEJLqEJGkWoZ8hUXAOQGRWKxY0bpBkJqm9ADRHIGf/vSndpkBPxjNHvVmkN59993miiuuMKeccgqz0f2QGnDsFxAJul8YSmVHy9L4/SkOrxO+VJgknEdEkmAF8hAVAecERE1VXgeq2ilVG9GcAi1nov4Q1Tr0VqtrGm2lTldNInzjjTfsMF89eC6++OIOq6lRQSbe9gQ0jNdrY1bTQJCmRTUf+JsQ1HTl/90+hWT9QkSSZQ9yEx4BpwVEzSCvvPKKnbWsuQSaC3LCCSfYpUr0dirh0MiJG2+80QqI+k1uvfVWO5NZoy1wjSGgPikJh5qg9JGgVHKyp14ePBe05uL5b/Q3ItJoC5B+FAScFBBvtVYB0Vuo1lD6z//8TzvZzIOk5o6R+eG6mqGuf95vfvObdmkTNWn9+te/Nl/4whcCvfl68fEdHgENaFDTo2qD3miqSrFv3LjRaQFR+RCRSlbmumsEnByW5G+60OTAKVOmtBMPvxH0pqtZzOeee649rbdYLVGghxeuMQQ0d8fr/FZzpPq1KjkN+5WIeM61GoiXb4kIkw09Gny7TsA5AdF8Af+McwmIaiDlnB5YxxxzTMGLRnJpoUVcYwjIHt46Vprx669RlsqRZgh7/hRezWCV5o6UiqvR5xGRRluA9MMi4JyAqPPUPxRXb7Jqpirn1Jyl4b4atSWnOQjqdMc1hsDuu+9uJw8qdQ1y0B7j3rDeUjmS0Hi7AGodLL3Fu+wQEZetR949As4JiJqkdt11Vy//tg/EP7yzcKGDA++tV6N+FA+uMQT23HNPM2bMGNsHpdFYmrfz2WeflcyMmh21kY+31a3WzkrCzoQlMxzwAiISEBTeEkvAOQFRjUMPH8+pOUrLL5dzGsGjNnRv+K+awNTBjmsMAc3p0Cg4PUDltNObmhS9ob3FuXrttdfsjpOqpagGuv/++9uVBYr9ufgbEXHRauTZI+CcgKjmoIe/9/DRpEJtY1tuKKg6zLXlrZw64LUoX6VmLw8Q39EQOOKII4yasuS0OKK2tu2oX0rXfvGLXxTWPtNEUL1ABK11RpP7cGNFRMLlSWzxEXBuGK8nAGeccYa56aab7FyP//mf/7Ed6RKW4klpGuHz3nvvGfmRU1/I8ccfn6oHUHy3S3gpjRo1ymhrWo2IU3+UdnyT0Ouc9rFXbVF20yqof/vb32wfiZqtNJput912Cy8jCYnJeyHy+nm83wnJHtmAQIcEnBMQlUIL8OlN9L777rMdsH//+9/NddddZ7RVrWajq5YioVHz1vz58+2uhZqJLnHR5kTnnHNOhzA4GR8B2ejss8+29rnzzjttH4iWm9HEUNlXzVVaSUDNk+oD0eoC3/3ud+2LgjcEOL7cxpOSJxqISDy8SaV+Ak4KiEZTaV9sPVCuv/5627n63//937YpS8Li1UQ0afDpp5+2zR8SFG089Y1vfMNuLFU/OmKol4CaEb/97W9be9xxxx12FzjVOord+PHjzSWXXGK3Ik5D53lx+fy/ERE/DY6TTsBJARFUDePUJlF6G9W+6G+//bZdrkQ1jWInwTn88MMLD6Hi6/xuDAGJupqyLrroIrsfumofEhAN7ZXN1FelPVzUaa5VlVULKW6ibEzOo00VEYmWL7GHR8BZARECLYkhEdFDRv0hevio7VwTzjRaR6Ot9NCZOHGibd7Srna45BEYPHiw7ZuSfWQ/NV95Q61lY9nR1UmDtdJGRGolF024Sy+91G6LreZUzUPTPYszxmkBkQHVlq51rSZNmmQ3mpozZ45tN1fNRG+3as7SbPWsPYBcu7llH/V96INrJYCIJOdOUN+qPrj2BJwXEK84avKQYOiDg0BaCCAiabFkOsuRGgFJp3koFQRYxZd7ILkEEJDk2oacQaBAgJpIAQUHCSKAgCTIGGQFAuUIICLl6HCtEQQQkEZQJ00I1EgAEakRHMEiIYCARIKVSCEQHQFEJDq2xFwdAQSkOl74hkAiCCAiiTBD5jOBgGT+FgCAqwQQEVctl558IyDpsSUlySABRCSDRk9QkRGQBBmDrECgFgKISC3UCBMGAQQkDIrEAYEGE0BEGmyAjCaPgGTU8BQ7fQQQkfTZNOklQkCSbiHyB4EqCCAiVcDCa90EEJC6ERIBBJJFABFJlj3SnBsEJM3WpWyZJYCIZNb0sRYcAYkVN4lBID4CiEh8rLOaEgKSVctT7kwQQEQyYeaGFRIBaRh6EoZAPAQQkXg4ZzEVBCSLVqfMmSOAiGTO5LEUGAGJBTOJQKDxBBCRxtsgbTlAQNJmUcoDgTIEEJEycLhUNQEEpGpkBICA2wQQEbftl6TcIyBJsgZ5gUBMBBCRmECnPBkEJOUGpngQKEUAESlFhvNBCSAgQUnhDwIpJICIpNCoMRYJAYkRNklBIIkEEJEkWsWNPCEgbtiJXEIgUgKISKR4Uxs5ApJa01IwCFRHABGpjhe+jUFAuAsgAIECAUSkgIKDAAQQkACQ8AKBLBFARLJk7frKioDUx4/QEEglAUQklWYNvVAISOhIiRAC6SCAiKTDjlGWAgGJki5xQ8BxAoiI4waMOPsISMSAiR4CrhNARFy3YHT5R0CiY0vMEEgNAUQkNaYMtSAISKg4icwtAk1uZbfBuUVEGmyABCaPgCTQKGQpSgK5KCNPfdyISOpNXFUBEZCqcOEZAhBARLgHPAIIiEeCbwhAIDABRCQwqlR7REBSbV4KB4HoCCAi0bF1JWYExBVLkU8IJJAAIpJAo8SYJQQkRtgkBYE0EkBE0mjVYGVCQIJxwhcEIFCGACJSBk6KLyEgKTYuRYNAnAQQkThpJyMtBCQZdiAXEEgFAUQkFWYMXAgEJDAqPEIAAkEIICJBKKXDDwKSDjtSCggkigAikihzRJYZBCQytEQMgWwTQETSb38EJP02poQQaBgBRKRh6GNJGAGJBTOJQCC7BBCR9NoeAUmvbSkZBBJDABFJjClCzQgCEipOIoMABEoRQERKkXH3PALiru3IOQScI4CIOGeyshlGQMri4SIEIBA2AUQkbKKNiw8BaRx7UoZAZgkgIukwPQKSDjtSCgg4RwARcc5k22UYAdkOCScgAIG4CCAicZGOJh0EJBquxAoBCAQkgIgEBJVAbwhIAo1CliCQNQKIiJsWR0DctBu5hkDqCCAi7pkUAXHPZuQYAqklgIi4ZVoExC17kVsIpJ4AIuKOiREQd2xFTiGQGQKIiBumRkDcsBO5hEDmCCAiyTc5ApJ8G5FDCGSWACKSbNMjIMm2D7mDQOYJICLJvQUQkOTahpxBAALbCCAiybwVEJBk2oVcQQACRQQQkSIgCfiJgCTACGQBAhAIRgARCcYpLl8ISFykSQcCEAiFACISCsZQIkFAQsFIJBCAQJwEEJE4aZdOCwEpzYYrEIBAggkgIo03DgLSeBuQAwhAoEYCiEiN4EIKhoCEBJJoIACBxhBARBrDXakiII1jT8oQgEBIBBCRkEBWGQ0CUiUwvEMAAskkgIjEbxcEJH7mpAgBCEREABGJCGyJaBGQEmA4DQEIuEkAEYnPbghIfKxJCQIQiIkAIhIPaAQkHs6kAgEIxEwAEYkeOAISPWNSgAAEGkQAEYkWPAISLV9ihwAEGkwAEYnOAAhIdGyJGQIQSAgBRCQaQyAg0XAlVghAIGEEEJHwDYKAhM+UGCEAgYQSQETCNQwCEi5PYoMABBJOABEJz0AISHgsiQkCEHCEACISjqEQkHA4EgsEIOAYAUSkfoMhIPUzJAYIQMBRAohIfYZDQOrjR2gIQMBxAohI7QZEQGpnR0gIQCAlBBCR2gyJgNTGjVAQgEDKCCAi1RsUAameGSEgAIGUEkBEqjMsAlIdL3xDAAIpJ4CIBDcwAhKcFT4hAIGMEEBEghkaAQnGCV8QgEDGCCAilQ2OgFRmhA8IQCCjBBCR8oZHQMrz4SoEIJBxAohI6RsAASnNhisQgAAELAFEpOMbAQHpmAtnIQABCLQjgIi0w2F/ICDbM+EMBCAAgQ4JICLtsSAg7XnwCwIQgEBZAohIGx4EpI0FRxCAAAQCEUBEWjEhIIFuFzy5TGDuwlXm1dlLzHsfrzTzF68qFOUvL75v3l6w3Oy1a38zac/BZsywfoVrHECgEgFExBgEpNJdwnVnCbw2d6l5+IW55p0PV3RYho2bt+SvLbef+5+fY8aNGGBOOXSMOWDMoA79cxICxQSyLiIISPEdwe9UELj10TfMk68usGVp6rLFdOm3zHTus9psWdvXbFk21J7vssti0yV/buvaHc2WVbtYoZHYHDtppLn4/0xIBQcKET2BLIsIAhL9/UUKMRJYt7HZ/Pyelwu1jm5DPjJdBy3K5yBnc7F1fa9Cbpo6bzWd+66yn27DPjTNS4eazYt3s8KzaPla852zJpte3bsW/HMAgVIEsioinUoB4TwEXCTgiUen7htMj7Fv5sVjYb4YreJRvjw561dhFFY1EcWFg0BQAhKR/v37m5UrV5pFi/TSkn4XWw1ky5yZZuP0B03zWy+bHZd+bMmuGrSr6brvZNP9yNNMl7H7p582JYyUgJqt9OCXAHQf/Y5p6rq56vQ69Vxnw26cN87GpThpzqoaY2YDlKqJpPX515TLu6it/fltU83GJ+4pm0z3484yvS+aWtYPFyFQioA6zH/2x5fsZVuLyAtBR27zkuGmecmu9lLXwZ+YboNbX2aK/bbkm7o2zBlvT191ziF0rBcD4ndZAqqBqCaiGknfR29N7fMv8iasNddcVBGeLCGBkV8cBGohoNFWcurzUC2iXqc4FJecF3e9cRI+OwS85ixz0/9N9fMvUgFRzWPzG88HvmvkV2FwEKiGgOZ5qOlKo61aO8yrCV3ar+JSnIpbaeAgUA0B1Ty6zZsZOIiLz7/IBMS2+VVotuqIrGoiCouDQFACmiQop6G6wTrMrfcAf3Lb4jR2ImKAAHiBgCWQledfZAKiDvNaXT1ha02TcO4S0AxzOc3zCNt5cXpphB0/8aWTQD3PsHrCxk0zMgHRaKtaXT1ha02TcO4SWJifsyHXqUf9fR/FFLw4vTSKr/MbAh0RqOcZVk/YjvIS5bnIhvG2fPpJzfmuJ2zNiRLQWQJr17cO123q0lyxDFvXVLfelRfnmvWbzLx58yrGjwcIiIA3VaEWGi49/yITkFrAEQYCURLY/Mko07K+t01Cw3c1jBcHAQjUTiAyAek0cLjZunhBTTlTWBwEghLo07ObWb1uk8lt6Vpy8qDEo3l52yKJuS3dAkWvOOX69tzBjB49OlAYPEFAk6Sz8PyLrA9EM8xrdfWErTVNwrlLYNjOfWzmWza0rXPlL02xeHTdeanpNny+30vJYy9OL42SHrkAAR+Bep5h9YT1ZSGWw8gERMuT1OrqCVtrmoRzl4D285DTqrrFrh7x8MfppVEcP78h0BGBep5h9YTtKC9RnotMQLS2lZYnqdYpDOtiVUst2/61GZSclmQ3pske60+94qG4WuM0dsOpQsQcQKACgaw8/yITEPHV2lbdJhxWAXXbZfllPaw2HhwFI6CdBLUZVG5LF7sku0LVLx7GxqU4FTe7FQazBb7aCGTh+RepgAhl3+/fFqgmopqH/OIgUAsB7SQop/08Ni0Y267DvJo+Dy9tLaaouOS8uL1rfEMgKIG0P/9iWY1XsP3LGW/dtpx7Z5ZzD3of4i8AAf8uhJ73WsQj19zNaDn3lo092J3QA8l3XQT8zz9vnodGm6rDXH0erjbbRzaMt5i2APXetueHNyGLYZHFlPhdD4FOTW39H4qny04rAo+28tJVzWPTR2OseKjpir1APDJ810PA//yrJ56khY1NQJJWcPKTLgK3P/am+duMD9oVastnA0ynpcPabWnbzkO7H02FLW11WuKhLW1xEIBAaQIISGk2XHGEQLF4HH/g7qYlv0/ak68usP0YzcuG2lV1tTCi1rbylifRJEHN89DwX422Uoe53LGTRlLzcMT2ZLOxBBCQxvIn9ToJdCQe3zypdSfBA8cOtptBaT+P5mVD7Kdccqp1qMP8gDFtM9bL+edaNgho09aWlhbTuXPnbBS4ilLG1onuzxN9IH4aHNdKoJx4+OPUZlDaM0RLsmtVXW/xRS2BohnmmiSouSTFQ3Xfeecd8/DDD5tp06aZjz76yHz22Wdmt912MyNHjjSjRo0yZ511ltlvv/14sPhhp+B4/fr15rnnnjOPP/64eeutt8ySJUusgMj2e+yxh/2ceuqpZvjw4Zm3vdMCojeDjRs3VnXLNuU7Wrt3715VGDwnj0BQ8agl55s2bTL//u//bm688UazatUq+/DQveY53UPefXTmmWeaH/zgB1ZQOnWKfFS8lwW+IyLw5ptvmp/85CfmxRdfNMuWLTPNzc3Gs71s3rVrV/v82H333c33vvc9c/LJJ5uePXtGlJvkR+usgMioy5cvN9dff31gyroBBgwYYK666qrAYfCYPAJRiodK+93vftf86le/Mhs2bGhX+P79+5vVq1ebrVu3Fs7rnjr00EPNgw8+aO8t/ca5SUC1jX/+5382L7/8cjsbSzT69etnBcUTE5VQz5Irr7zSXHrppaZv375uFrrOXDsrIPonfumll8xhhwWf6S5WY8aMMXPmzKkTG8EbRSBq8XjsscfMlClTrFCojOPHj7c1jIkTJ5qdd97Zvo2qaeuGG24wDz30UOHt9IorrjDXXnut6dGjR6PQkG4dBNatW2e+9rWvWZuqv0Pu8ssvN8cdd5zZc889zQ477GDUtPX000/bl1Y1acrttNNO5tFHHzUHHXSQrZ3Ykxn642ydWwKyYMGCgqnUfNClS5eyn27dumW6ulmA5ehB1OIhLLfffrtZs2aNJaSaxf3332/U3q0+Dz0s9CZ6yCGHmN/97nfm7LPPtk1Z8nzHHXcYNX3h3CTw7LPP2hdSTzx+9KMfme985ztWQNTvof4PCcn5559v7r77bjMy3w8mp36x//iP/7Df9kTG/jg7CkuG/uCD1nH/Gh3x7W9/26hdspLbccftV2ytFIbrjScQh3johUQd5l4zhfpARowYYV9K/AR0v/Xp08fWTFQL0Zvp2rVrzccff2ybMugL8dNy41h2VJO4nPq1vvGNb5ihQ4cavy3VPNm7d29z4IEHmosvvthcc801RjUXDbS47rrrbA01a02YTgvI/PmtezqoE+uyyy6zbwlu3K7kshoCcYiH8vP+++8XBmVodJXeOFWrLeXGjh1r9EIiAZHT6MK99tqr3UOnVFjOJ4eAWjPU76EOc7lTTjnFDBw4sKQd1Sdy+OGH25cFCYjC6eVDLxtq5ciSc7oJS//wcr169bJvC1kyXFbKGpd4iOeiRYsKnacSh3LiIf+qdegB4jk1cWXtDdQru8vfGmnnNVuqHOPGjasoBGrSUr+I5xYuXGi2bNni/czMd+nXq4Qj0FvDe++9Z3NZ6U0x4UUheyUIxCkeysLRRx9tnnzySTtsd9CgQRWHe7/++utm8+bNhdyrXZzJZgUczhyoH2OXXXaxLwMaBKHBEpXs6A3x9Qo5ZMiQii8cnt80fTspIGqj1pufjKg2SgmI33lt2LwN+qm4dRy3eIjOsGHDbE1W94/uK3/7dzG9uXPn2k5Wbx7ShRdeaB9C3HPFpJL/W01PGiyhl1LZb/Dg1g3KyuX8+eefL9RadJ/o5UFNW1lzTgqIOtC9YXQynkZJ6E1QbZG6CSQu+q0RM3qTUFOEv7qZNSO7Vt5GiIcYlRKMlStX2vtNfR2q9c6aNcsO91S7t5xGZf3bv/0bQ3gtDff+6MGvDvOgTvbXqDs1YcqdeOKJ9lmTxZcHJwVEIuH98+qfXhO87rnnHvPAAw+YmTNnFkZn6U1i0qRJ5oQTTjDnnXeeHTlTqWoa9CbCXzQEGiUe5Uqje0r3j5o61M6t+88b7qnROD/+8Y9t7aOUAJWLm2tuEVBnu14WNOlQToMoNDFZL6tZdE4KiP55PQFRTUP/wF6NREbUm4CaIbSGjSb56POHP/zB/PznPzeTJ0/OZFulCzd3EsVD3CQaqoV0NM/jzjvvtB2uP/zhDzM5jNOF+yqMPKq2oTlCt912m62Fes2cGsqryaZZbL4SVydnoqsp4V//9V+tQb2bQ81UGs6rtkiNopCgaMawDK83RjmN1tJ472OOOYbRMh64hHwnVTyER8NzNUNdNZClS5ca9X94ne26rpqH7qnf//73dvhnFpsyxCGNTi+rTzzxhPnFL35h18fSPSCnTndNIDzppJMy23xlQeSVNHaXH36b06dWlx9yl8v/w2p1O/vJVx9z+cXvcp988kkhyrzhc59++mkuX73M5RdPLPjde++9c/nhmgV/HDSewG2PvpE78+oHCx/9TpLLv4Dk8p3lufzaWLn8y0su/1KSe/fdd3MXXHBBLi8e9t7Ki0YuXxO2fpKUd/JSO4F8M1XuoosuyuWH7OZkX+95k1/qJpdfRin3+eef5/ScybJzsgaiWsVpp51m3n77bdtxqZVTTz/9dCuIxX/UxPXnP//ZtmHnDW3fFi+55BK7WF6xX37HTyDJNY9yNPRmqvvw3HPPtbUT3Vvqi5s9e7ZtyioXlmvJJqBnhpqrbr75Zttc5c3v2H///W1/hyYRaqJhpXlCyS5lOLlzUkD8RZdxKxlSo7K0yuZdd91lg2qSWP4NsuSoG3/8HEdHwFXx8BO577777OKLeujIaW6I2sTpUPdTcudYy9GoT1VN3ZomIKfh3VoqSWuiabSWtoOgmbLVpk52ordmfVsByiw14fnT8gKqsXgCsnjxYqOPbgxcYwgkTTzyzRFm6tSphZnlWqZba6tVEoJ99tnHdqB6AqL7at99960YrjHUSbUcAYlHvsnKrofm2VOLJ2ql5dGjR9tRnAhHe4LOC0j74nT8S0N3NVfEc6q1aCFGBMQjEu930sRDpdcADA0D90b3HX/88XZttUoCUjy/SEPHK4WJlzapBSGgEXZXX321Xa5d88nUSa69hr785S8brUrA8P+OKTq5FpYMrDcEfbwRVh0Xr+2sfxdC3QzaDAYXP4Ekioco6KGvGof6MtS/8cYbbwS6tzSx0GsjV1Oq1khCQOK/r+pNUa0TjzzyiJ2MrJeJW265xZxxxhlGS5QgHqXpOicgEg8Nq9O8jnvvvdf2ZZQuXusViYy38KLOqElLyxfg4iWQVPHwKKiT1Gui0JDc4h0JPX/et+5FPWi85o4DDjig4iJ8Xli+k0NAzwdNRM6P2rSZ0pa2WhdNS/Z790NycpusnDgpINo+VOv1q33yZz/7WWH/hlJo9Q/+1FNPFS5ryW29ZeDiI5B08RAJDbTw9ovR3A+1h+uholpJsdPADE0e/N///d/CdW1A5K/pFofhdzIJqLapmqTsvOuuu9p9znUfIB6V7eVcH4iaCTSMTjNCZfC//vWvtkNcVc2ODK7mBdU+tMe1nGofGnqJi4+AC+IhGuoo/Zd/+Re7OZDeSrXAnjpWtT+EOsbVPKWROdoSWcM8NYzca77SYorqN8nqjOT47qbwU3r11VcLWxhrWfavfvWrVdck1V9yxBFHZG7NPScFRIvXadllNTFoiQnVRG699VY7xE7tlWqDVju2mhj0ZqE3Se8ffcKECeaCCy4I/y4kxg4JuCIeyrzuG61woI3K/vjHP9oXlFdeecXoAaMXF91bEhZ9vPtJ4bSYnrZAVZMHzj0CGlDjLVOj54ZeDKp1q1evLtREqw3rsn/nBET/5Oq/uOmmm2yTg/6Z1Tx17LHH2smCGoOvaqhG06hqqslA/uUHfvCDH9B8FdMd65J4eEg0uEK1W91PGsqrFxRPNDw/3rc63bUWkgSEJg+PinvfelboZRNXPQFnJxKq9qF/Xs1C19tDR+3UHg41bY0ZM8YupqjmCFz0BFwUDz8V9ZupuUrrXqkJVM1W2jN7+PDhtqlL4pFfFscKR9a2MfVzSsOx1jfT86TcM6RSOTXsV2vtddSMXimsy9edFRBBVzPCM888Y2644Qbz3HPP2d+qgupGUHODmh3Uqam3SflRzQQXPQHXxcMjpPtItQ/dU/rWb9WA9fGaSrP2wPDY8A0BEXBaQDwT6p9bm7zoTVHVUdVIVOPQ5MFRo0YZ7VWNi4dAWsQjHlqkAgG3CaRCQNw2QXpyj3ikx5aUBAJBCDg3DyRIofATPwHEI37mpAiBRhNAQBptgRSkj3ikwIgUAQI1EEBAaoBGkDYCiEcbC44gkDUCCEjWLB5ieRGPEGESFQQcJICAOGi0JGQZ8UiCFcgDBBpLAAFpLH8nU0c8nDQbmYZA6AQQkNCRpjtCxCPd9qV0EKiGAAJSDa2M+0U8Mn4DUHwIFBFAQIqA8LNjAohHx1w4C4EsE0BAsmz9gGVHPAKCwhsEMkYAAcmYwastLuJRLTH8QyA7BBCQ7Ni66pIiHlUjIwAEMkUAAcmUuYMXFvEIzgqfEMgqAQQkq5YvU27EowwcLkEAAgUCCEgBBQcigHhwH0AAAkEJICBBSWXAH+KRASNTRAiESAABCRGmy1EhHi5bj7xDoDEEEJDGcE9UqohHosxBZiDgDAEExBlTRZNRxCMarsQKgSwQQECyYOUSZUQ8SoDhNAQgEIgAAhIIU/o8IR7psyklgkDcBBCQuIknID3EIwFGIAsQSAEBBCQFRqymCIhHNbTwCwEIlCOAgJSjk7JriEfKDEpxINBgAghIgw0QV/KIR1ykSQcC2SGAgGTA1ohHBoxMESHQAAIISAOgx5kk4hEnbdKCQLYIICAptjfikWLjUjQIJIAAApIAI0SRBcQjCqrECQEI+AkgIH4aKTlGPFJiSIoBgYQTQEASbqBqs4d4VEsM/xCAQK0EEJBaySUwHOKRQKOQJQikmAACkhLjIh4pMSTFgIBDBBAQh4xVKquIRykynIcABKIkgIBESTeGuBGPGCCTBAQg0CEBBKRDLG6cRDzcsBO5hEBaCSAgjloW8XDUcGQbAikigIA4aEzEw0GjkWUIpJAAAuKYUREPxwxGdiGQYgIIiEPGRTwcMhZZhUAGCCAgjhgZ8XDEUGQTAhkigIA4YGzEwwEjkUUIZJAAApJwoyMeCTcQ2YNAhgkgIAk2PuKRYOOQNQhAwCAgCb0JEI+EGoZsQQACBQIISAFFcg4Qj+TYgpxAAAKlCSAgpdk05Ari0RDsJAoBCNRAAAGpAVpUQRCPqMgSLwQgEAUBBCQKqjXEiXjUAI0gEIBAQwkgIA3F35o44pEAI5AFCECgagIISNXIwg2AeITLk9ggAIH4CCAg8bHeLiXEYzsknIAABBwigIA0yFiIR4PAkywEIBAaAQQkNJTBI0I8grPCJwQgkFwCCEjMtkE8YgZOchCAQGQEEJDI0G4fMeKxPRPOQAAC7hJAQGKyHeIRE2iSgQAEYiOAgMSAGvGIATJJQAACsRNAQCJGjnhEDJjoIQCBhhFAQCJEj3hECJeoIQCBhhNAQCIyAeIREViihQAEEkMAAYnAFIhHBFCJEgIQSBwBBCRkkyAeIQMlOghAILEEEJAQTYN4hAiTqCAAgcQTQEBCMhHiERJIooEABJwhgICEYCrEIwSIRAEBCDhHAAGp02SIR50ACQ4BCDhLAAGpw3SIRx3wCAoBCDhPAAGp0YSIR43gCAYBCKSGAAJSgykRjxqgEQQCEEgdAQSkSpMiHlUCwzsEIJBaAghIFaZFPKqAhVcIQCD1BBCQgCZGPAKCwhsEIJAZAghIAFMjHgEg4QUCEMgcAQSkgskRjwqAuAwBCGSWAAJSxvSIRxk4XIIABDJPAAEpcQsgHiXAcBoCEIDANgIISAe3AuLRARROQQACECgigIAUAUE8ioDwEwIQgEAJAgiIDwzi4YPBIQQgAIEKBBCQbYAQjwp3CpchAAEIFBFAQPJAEI+iu4KfEIAABAIQyLyAIB4B7hK8QAACEOiAQKYFBPHo4I7gFAQgAIGABDIrIIhHwDsEbxCAAARKEMikgCAeJe4GTkMAAhCogkDmBATxqOLuwCsEIACBMgQyJSCIR5k7gUsQgAAEqiSQGQFBPKq8M/AOAQhAoAKBTAgI4lHhLuAyBCAAgRoIpF5AEI8a7gqCQAACEAhAINUCgngEuAPwAgEIQKBGAqkVEMSjxjuCYBCAAAQCEkilgCAeAa2PNwhAAAJ1EEidgCAeddwNBIUABCBQBYFUCQjiUYXl8QoBCECgTgKpERDEo847geAQgAAEqiSQCgFBPKq0Ot4hAAEIhEDAeQFBPEK4C4gCAhCAQA0EnBYQxKMGixMEAhCAQEgEnBUQxCOkO4BoIAABCNRIwEkBQTxqtDbBIAABCIRIwDkBQTxCtD5RQQACEKiDgFMCgnjUYWmCQgACEAiZgDMCgniEbHmigwAEIFAngaZc3tUZR8XgTzyx1fz1r1vNyy+3mDlzcmbFihYbZsCATmbs2CYzeXInc8IJnc1xx3XuMC7Eo0MsnIQABCDQUAKRCsjNN28xv/xls3nvvWAatddeTebyy7uaSy7pUoCCeBRQcAABCEAgUQQiEZBXX23JC8Fm88ILrTWNakt86KGd8sLTzby+9C3ztxkfFIIff+Du5psnjS/85gACEIAABBpHIHQBueeeLWbKlM2mpTbtKJCYdPJ7ZtSBHxd+Ix4FFBxAAAIQSASBtraiELIj8Tj77M0dxjTuC2+aUePnmkEjFpteO31u/az7rLdZ+uEQM//NMeadF9tqFgd8BfHoECInIQABCCSIQGg1EDVbHXzwxu1qHhKOL5z8rOnTf03ZYq9d2de8+JcjTPcB3czog9pqHvNnDDe//tFEM2mSMwPGypaTixCAAATSQiA0AfniFzdu1+dx1Nl/M/sfNSMwq8/WjjDr1g8s+J/3j+HmtUf2NuoT+fvfuxfOcwABCEAAAo0nEMprvUZbFXeYhyUeQqS4lQYOAhCAAASSQyAUAdFQXb9Ts1U9NY9ePT41G1e0j7M4DX96HEMAAhCAQPwE6hYQTRIsnuehPo+grrjZSuKxU98Pbb+JPw6lobRwEIAABCCQDAJ1C4hmmPudah+VOsw9/6XEQ9cVh+Lyu+K0/Nc4hgAEIACBeAnULSBansTvNFQ3iCsnHl744riK0/L88Q0BCEAAAvETqFtAtLaV32meRyUXRDwUR3FcxWlVSofrEIAABCAQHYG6BWTFivYC4k0SLJflzp3aOsi9Po+O/BfHVZxWR2E4BwEIQAAC8RAIdSZ60Cz36bXIet26tavtMA8aDn8QgAAEIJAcAnXXQAYMaGpXGi1PEsRJRDTaqpwrjqs4rXJhuQYBCEAAAtESqFtAtJ+H32ltq7BccVzFaYWVDvFAAAIQgED1BOoWEG0G5XdaGDEsVxxXcVphpUM8EIAABCBQPYH2T//qw9udBP3BtKquFkas1ykO/wq9ik+7FuIgAAEIQCAZBOoWEG1Dq50E/U6r6tbriuNQGqW2vK03LcJDAAIQgED1BOoWECWpbWj9TjWHmc8c6D9V1bHCFtc+itOoKkI8QwACEIBA6AQStZy7SifxeObu49sVlOXc2+HgBwQgAIFEEAhNQMLaUKq45tEpX0d65ZXuoWwotXnzZrN1a+vaXT169EiEAcgEBCAAAVcJhCYgAhDWlrZ+mHff3c2cdVb98x0XLVpk9t57b7NmTevOiLlc+xn0/jQ5hgAEIACBygRCFRAlJxGZMmXzdlvbVs5Kex+qefzhD+GIR0tLi/nyl79snnzyyUIiCEgBBQcQgAAEaiIQSie6P2XVFtTkpH6LWp3CKo4wah7Kw4033thOPGrNF+EgAAEIQKCNQOg1kLaojd2GVjsJFm845ffjP9ZQXY22uuSS+pusvHhnzJhhDj74YFNc4yj+7fnnGwIQgAAEghGIVEC8LGgnQW0Gpf08tCS7t6qu1rbS8iSaYa5JgmHP81i7dq2ZOHGimTdvnpeVwjcCUkDBAQQgAIGaCMQiIDXlrM5AEogLL7zQ/OY3v7ExTZ061ejjOQTEI8E3BCAAgdoI1N5RUVt6sYX605/+VBCPb33rW+b000+PLW0SggAEIJAFAqmsgXzwwQd2yO6mTZvMHnvsYV5//XWjc+PHjy/YlBpIAQUHEIAABGoikLoaSHNzsznvvPOMxKOpqSk/FPgPpnfvYHuU1ESQQBCAAAQySiB1AnLttdeaF154wZpTxwcddFBGTUuxIQABCERLIFVNWM8//7w5/PDDLbEjjjjCPPXUU6ZLl9YhwbNmzaIJK9p7idghAIGMEUhNDWTlypX5iYdnWfN1797d/Pa3vy2IR8ZsSnEhAAEIxEIgFQKiDvFLLrnEaL0ruTvuuMOMHDnSHvMHAhCAAASiIZAKAdFcj3vvvdcSmjJlSn4trinR0CJWCEAAAhAoEHC+D2T27Nlmn332scu0Dxs2zKivo1+/foUCegf0gXgk+IYABCAQDgGnayAasnvOOecU9vi46667OhSPcFARCwQgAAEI+Ak4XQNZtmyZGThwoC2P5nyMGzfOX7Z2xxs2bDDz588vnFOtRU7hvvKVr5jrrruucI0DCEAAAhCoTCC8ZW8rpxWpD3Wkv/3224HT8PudMGFC4HB4hAAEIACBVgJOC0in/K5TQ4cODWRLNXepxuI5L5xqIAMGDPBO8w0BCEAAAgEJON2EFbCM1pvWwho1alQhCGthFVBwAAEIQKAmAk53otdUYgJBAAIQgEAoBBCQUDASCQQgAIHsEUBAsmdzSgwBCEAgFAIISCgYiQQCEIBA9gggINmzOSWGAAQgEAqBzIzCCoUWkUAAAhCAQIEANZACCg4gAAEIQKAaAghINbTwCwEIQAACBQIISAEFBxCAAAQgUA0BBKQaWviFAAQgAIECAQSkgIIDCEAAAhCohgACUg0t/EIAAhCAQIEAAlJAwQEEIAABCFRDAAGphhZ+IQABCECgQAABKaDgAAIQgAAEqiGAgFRDC78QgAAEIFAg8P8BgSJyAn1Nq+0AAAAASUVORK5CYII=">

</img>

</td>

</tr>

<tr>

<td>

<div>

m 3
m 0
m 1

</div>

</td>

<td>
$4 → 3 → 0 → 1$の順で次の目的地の頂点へと移動する。
</td>

<td>

<img src="https://atcoder.jpdata:image/png;base64,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">

</img>

</td>

</tr>

<tr>

<td>

<div>

s 2 4 2

</div>

</td>

<td>
$A$の $4$番目の要素から始まる長さ $2$の部分列を、 $B$の $2$番目の要素を始点とする範囲に対して上書きする。 $B$の値は $[0, 1, 5, 6]$となる。
</td>

<td>

<img src="https://atcoder.jpdata:image/png;base64,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vfbaSSbpRNzOC4gMO3v2bPPkk0+aG2+80fz73/82r776qlmyZIk18GabbWa22WYbM2rUKLPjjjtaIXHCMgXIpET/2muvNZdeeqkVD70IyPXo0cPou4REttSf5tC///775uijj87Ugj5EpAAV1SuihOPWW281Tz31lFm0aJE55JBDilHwBqV0WkAkHi+99JK3bcCF5sorrzT6Ldfd25FMrQ21SPTQUdfI7bffbk499VRz+OGHZ+ottoF9cn37zjvvtHZTy0OCseuuu5r99tvPDBs2zHZXSTTuvfdeb0XvfeaNN94wF198se3KOuigg0yfPtGPD40LLiISF8lsxqO6effdd9uXGL2YqnfDf9nJZo7Ty5WzArJ06VL7ULnkkkvMZZddZonpoTJ06FD7kNE/aj101Keuv7ffftucc8451t8JJ5xgevZ0tujp1Y4EU5K4q+tq+vTp9h/jzjvvbE4//XSz0047mTXWWMO2QkaOHGnHP/RCoBcAvQxcffXVZvvttzdbb711grlrPWpEpHVmLoSQYNxyyy3muuuuMx999JELWU41j84+RefNm2duu+02IwGRW3/99c348ePN8ccfbwYMGGAH0NXU1APqzDPPtG8QemjdcMMN5oADDjBs6JhqPeuS2P3332+eeOIJb/vrpXac48QTTzR77LGH6d27d9nv6quvboVC99SNJVv6A+2bbLKJ0RhJlhwikiVrhMuLxuTefPNN+6fejYceesjby2qarX/hYsx3KCcFRA8dzdrR26icWh7f+9737Bts8AG04oormh122MGcddZZ5plnnjFvvfWWrQjqFpHQ4NpDQPabPHmyee2112wGJBwjRozoJB5+ztT6UEtE3VozZsyw3ZSPPvqoUYtFLwpZc4hI1izSWn7uuOMOc8UVV9jnyyeffGI+/PBDO57aWizF8e3OxvMBm8iwU6dOtQ8UXZZI6C01KB6+dz2A9I9as3jWXXdd2z2iSoFrHwFN01WLwh+z2mWXXerOaFl55ZXtRAhN65V74IEHbHdW+0pQP2XVN51oqA0YtSU8zh0C6qXQi8rLL79s3nvvPcSjgemcbIHoH6YGteTWXHNN87Wvfc12g9Qqqx48Rx55pO220gwfTQvFtY+AxqQ0niGnbqitttqq4aC4/GhKr8Jp0H3+/PntK0ATKdMSaQJSBr1ozZHGStWVFXTqLp8y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ccVOtpfdda1Pnz6lYcOGlSZOnFj69NNPE85RtqMP3QJRC6HaQHm9N5FWWiB+PGrpaHA9OL1X9zys5sMPPzTnnXee77Xhp1cBTL9+/czpp5/e0C8eskGgHS2P0047zVx88cXGe9noBEFbpMybN69Td4bq1C677GJuvfVWW7f0G+cmAbU2fvCDH5hp06Z1svEKK6xg1lxzTfPBBx/Y545fOj1LTj31VHP88ccbT1T8y8X6TFPfWm2B1Mvbl19+WXr44YfLb4We1Zr6vummm9aLlnsZIpB2y0NFv+uuu0qrr756uS5tu+22pRtvvNG2Mj766KPS3Llzbb076KCDOr2dnnzyybYlnCF8ZKUFAgsWLCgdfPDBtmXpP0tOPPHE0h133FGaOXNm6fXXXy89//zzpUsuuaTkdWOW68caa6xReuSRR0qLFjXfE9NCtjLvVYqamotTQL744ovSX/7yl7Ih1aXQs2fPun9qfqrpics+gXaIh6joIaKuCj1EvJaF7XJVXQt2UenlZf78+aWxY8eW/a622molCQzOTQJ33313af311y8/T84444zSm2++WVJ3prrK5fT5ySeflKZOnVryxsHKfkePHl16//333Sx4xFxH3sqkXe01DWq9+uqrNnkNYp5yyilm4403bpgd7+2yoR88tJdAO7qtVOLXXnvNDph7/6YsgPPPP98MGjTIeC8mnYCovnmCYX72s5+Z2267zWjQ1XuwGO+BY7syvJeZTv75kX0CsqO6xOUOOeQQc9RRR9kdnYO2VPdk7969zQ477GCOPfZY442TGW8MxE60OPfcc403ZuYda1GsLszO/zKyb+dyDiUgr7zyiv3tDWaaE044wc6SKHvgi5ME2iUeguW1kI33xmm5aXbV5ptv3kU8glA322wzoxcSCYicxviGDh1qgg+doH++Z5OApuhq3GPx4o41ZwceeKBZZ511atpRYyK77babfVmQgCicXj70suH1cmSzkAnlytlXJRld/+DlVl111Y7zHxKCRLTpEGineKiESl/1Sk7iUNnysDcC/1OrQw8Q33n94YV7A/XL7vKn1/VovC7JchG23HLLhkKg6dwrrbRSOYzX5Wq8rs3y76J8cbYFon/oL7zwgrVTozfFohjT5XK2WzzEbq+99jL333+/nfO/7rrrml696u/D9tRTTxlv8LSM3esXZ11AmYY7X7S+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">

</img>

</td>

</tr>

<tr>

<td>

<div>

m 0
m 6
m 5

</div>

</td>

<td>
頂点 $1 → 0 → 6 → 5$の順で最後の目的地の頂点へと移動する。

信号操作を2回行ったので、このテストケースのスコアは $2$となる。
</td>

<td>

<img src="https://atcoder.jpdata:image/png;base64,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UaZ+uX3wIfVsRJ+BUqnkDeRHuTo++jwS40oC77zzjpkyZYp5/fXXzUcffWQvDBo0yIwbN87stNNOZv311zc9erT3Fa8MFf8nfwxEYyJy/vf4UyYFCGSfQC4ERGKxePFiM2vWLDNv3jz7ecmSJWb11Vc3q622munTp48dENVnXLYILFiwwPzzn/80t9xyi3nppZesDefPbz+grFevXmbw4MFm5MiR5pBDDjEHHXSQWWstbRuRrPNFAxFJlnuWUlu6dKk599xzzauvvmq23HJLc+SRR5q119YWTsV2zguIDPvxxx+bZ5991tx0003mP//5j3nrrbfMsmXLrIE33HBDs9lmm5kDDjjAbLPNNlZIim3y7JReon/ttdeaSy+91IqHHgTkunXrZvRZQiJb6qXm/6effmqOOeaYVFoBiEh26k0aOZFw3Hbbbea5554zbW1t5uCDD04jG5lL02kBkXhMnz7dXHjhhebKK680+i7XtWtX2/JQi0Q3HXWN3HHHHea0004zRxxxRCpPsZmzfAYydNddd1m7qeUhwdh5553N3nvvbSZMmGC7qyQa9957r7n//vvNu+++ay6++GLblXXggQea/v37J14CRCRx5JlIUHXznnvusQ8xejBV74b/sJOJDKaYCWcFZPny5famcskll5jLLrvMItRNZeONN7Y3Gf2z66ajPnW9PvjgA3P22WdbfyeeeKLp3t3ZoqdYXaJLWuKurqtp06bZf8btt9/enHHGGWbbbbc1a665pm2FbLfddnb8Qw8EegDQw8DVV19tttpqK7PppptGl5kmYkJEmoCVA68SjFtvvdVcd9115osvoj1zJgd4jLN30a+++srcfvvtRgIiN3ToUHPUUUeZE044wQwfPtwOoKupqRvUWWedZZ8gdNO68cYbzX777WeamYmTB0NnrQwPPPCAeeaZZ4weBDTOcdJJJ5nddtvN9O278gCdNdZYwwqFrqkbS7b0B9rHjBljNEaShkNE0qCeTJoak3vvvffsS70bjz32mHnqqads/UsmB26l4qSA6KajWTt6GpVTy+P73/++fYKtvAH17NnTbL311uZXv/qVeeGFF8z7779vK4K6RSQ0uHQIyH6PPPKIefvtt20GJBwTJ07sIB5+ztT6UEtE3Vovvvii7aZ84oknjFoselBIyyEiaZGPN90777zTXHHFFfb+MnfuXPPZZ5/Z8dR4U3U39kg2U0y6+DLs1KlT7Q1FaUsk9JRaKR5+nnQD0j+7ZvEMGTLEdo+oUuDSI6BpumpR+GNWO+64Y90ZLb1797YTITStV+7BBx+03VnplaA9ZdUrbXei2VlaL4Jzn4B6KfSg8uabb5pPPvkE8WhgUidbIPqH1aCW3IABA8w3vvEN2w1Sq6y68Xzve9+z3Vaa4aNpobj0CGhMSuMZcuqG2mSTTRoOisuPuroUToPuc+bMSa8AFSnTEqmAkYOPWnOksVJ1ZVU6dZc/+uij5YeeymtF/uycgGj2g24e6j+XUzeGZu7Uc+rK0lRevXDpE1Drwx+QHDFihH0IkLDXc7pR+7vjquWi9T56z8JkCESknuXcujZ+/Hj7oFk9y0pd5k8++SQCUmVO5wREA+May1DzUk6tCxldsyU0sK61A3p6kD+tXFb3h248mtmj7ixc+gTUgly4cKHNiOwXZIW5xrkqF4LK1ppOmQUBUUEQkfTrVRQ5UB2rrGd+nPqNnS18GivfnRMQiYO6QOQkCFoNqhuJBskffvhh+67PGqDV062m9Wpq6D777GO7rtJYP7ASN59EQGNYWkQop5lWQQREuwlU+pOA6CFBDwhZcYhIVixBPpIi4JyASCw+/7x9m3h1TekGojUCv/nNb+w2A5XgtHrUX0F6ww03mFNOOcXsv//+rEavhJTC50oBkaBXCkOt7Ghbmkp/isMfhK8VJo3fEZE0qJNmWgScExB1VfkDqOqnVGtEawq0nYnGQ9Tq0FOtrmm2lQZdtYjw+eeft9N8deM57rjjOm2mpmWEoqWrabx+H7O6BoJ0Lar7oLILQV1Xld+zxBARyZI1yEucBJwWEHWDPP3003bVstYSaC3IXnvtZbcq0dOphEMzJ84//3wrIBo3ufzyy+1KZs22wKVDQGNSEg51QeklQWnkZE89PPguaMvF95/0OyKSNHHSS4OAkwLi79YqYHoK1R5Kf/rTn+xiMx+iujtGetN1tUJd/8w/+MEP7NYm6tL685//bHbYYYdAT75+fLxHR0ATGtT1qNagP5uqUeyLFi1ySkBUHkSkkVW57joBJ6clVXZdaHHgpEmTOohHpVH0pKtVzIcffrj9WU+x2qJANy9cOgS0dscf/FZ3pMa1GjlN+5WI+C7rLRA/nxIRFhv6NHjPGwHnBETrBSpXnEtA1AKp53TD2n333cteNJNLGy3i0iEge/j7WGnFb2WLslaOtELY96fw6gZrtHakVlxJ/46IJE2c9JIi4JyAaPC0ciqunmTVTVXPqTtL0301a0tOaxA06I5Lh8AGG2xgFw8qdU1y0DYg/rTeWjmS0PgHOmkfLD3Vu+QQEZesRV6DEnBOQNQlte6665bLp+6syumd5QudfPCfejXrR/Hg0iGw0UYbmbFjx9oxKM3G0rqdL7/8smZm1O2og3z8o261d1YaJxPWzGDAC4hIQFB4c4aAcwKiFoduPr5Td5S2X67nNINHfej+9F91gWmAHZcOAa3p0Cw43VDldNKbuhT9qb3Vufrvf/9rT5xUK0Ut0C222MLuLFDtz4XviIgLViKPQQk4JyBqOejm7998tKhQx9jWmwqqAXMdeSunFos25WvU7RUUIP7CEdh1112NurLktDmijrbtbFxK1y644ILy3mdaCKoHiKCtznC5izcUIhIvX2JPjoBz03h9ATjooIPMRRddZNd6/PWvf7UD6RKW6kVpmuHz2muvGfmR01jIHnvs4fQNKLnqEV9Ko0aNMjqaVjPiNB6lE98k9PpN59irtSi7aRfU++67z46RqNtKs+nWW2+9+DKWUMz+A5A/ruN/Tyh5koFAJAScExCVWhvw6Un05ptvtgOwjz/+uDnnnHOMjqrVanS1UiQ06t6aOXOmPbVQK9ElLjqc6LDDDosEHpGEJyAbHXroodY+11xzjR0D0XYzWhgq+6q7SjsJqHtSYyDaXeD000+3Dwr+FODwqWcjpC8aiEg27EEumifgpIBoNpXOxdYN5dxzz7WDq3/5y19sV5aExW+JaNHgQw89ZLs/JCg6eOroo4+2B0s1j4oQURNQN+Kpp55q7XHVVVfZU+DU6qh2m2++uTn++OPtUcQuDp5Xl6fyOyJSSYPPrhFwUkAEWdM4dUiUnkZ1LvrLL79stytRS6PaSXB22WWX8k2o+jrf0yEgUVdX1rHHHmvPQ1frQwKiqb2ymcaqdIaLBs21q7JaIdVdlOnkPNpUEZFoeRJbcgScFRAh0pYYEhHdZDQeopuP+s614EyzdTTbSjedLbfc0nZv6VQ7XPYIrLPOOnZsSvaR/dR95U+1lo1lR1cWDYali4iEJZdMuBNOOMEei63uVK1DU53FGeO0gMiA6kvXvlYTJ060B0298cYbtt9cLRM93ao7S6vV834Dcr0yyz4a+9CrqA4Rya7lNbaqF64jAecFxC+OujwkGHrhIOAqAUTEVcsVM9+5EZBimo9S55EAIpJHq+azTAhIPu1KqRwngIg4bsCCZB8BKYihKaZ7BBAR92xWtBwjIEWzOOV1igAi4pS5CpdZBKRwJqfArhFARFyzWHHyi4AUx9aU1GECiIjDxstx1hGQHBuXouWLACKSL3vmoTQISB6sSBkKQwARKYypnSgoAuKEmcgkBFYSQERWsuBTugQQkHT5kzoEQhFAREJhI1DEBBCQiIESHQSSIoCIJEWadGoRQEBqkeF3CDhAABFxwEg5ziICkmPjUrRiEEBEimHnLJYSAcmiVcgTBJokgIg0CQzvkRBAQCLBSCQQSJ8AIpK+DYqWAwSkaBanvLkmgIjk2ryZKxwCkjmTkCEItEYAEWmNH6GDE0BAgrPCJwScIYCIOGMqpzOKgDhtPjIPgdoEEJHabLgSDQEEJBqOxAKBTBJARDJpltxkCgHJjSkpCAQ6J4CIdM6FX1sngIC0zpAYIJB5AohI5k3kZAYRECfNRqYh0DwBRKR5ZoSoTwABqc+HqxDIFQFEJFfmTL0wCEjqJiADEEiWACKSLO88p4aA5Nm6lA0CNQggIjXA8HNTBBCQpnDhGQL5IYCI5MeWaZUEAUmLPOlCIAMEEJEMGMHhLCAgDhuPrEMgCgKISBQUixkHAlJMu1NqCHQggIh0wMGXgAQQkICg8AaBvBNARPJu4ejLh4BEz5QYIeAsAUTEWdOlknEEJBXsJAqB7BJARLJrm6zlDAHJmkXIDwQyQAARyYARHMgCAuKAkcgiBNIggIikQd2tNBEQt+xFbiGQKAFEJFHcziWGgDhnMjIMgWQJICLJ8nYpNQTEJWuRVwikRAARSQl8xpNFQDJuILIHgawQQESyYons5AMByY4tyAkEMk8AEcm8iRLNIAKSKG4Sg4D7BBAR920YVQkQkKhIEg8ECkQAESmQsesUFQGpA4dLEIBAbQKISG02RbmCgBTF0pQTAjEQQERigOpQlAiIQ8YiqxDIIgFEJItWSSZPCEgynEkFArkmgIjk2rw1C4eA1ETDBQhAoBkCiEgztPLhFwHJhx0pBQQyQQARyYQZEssEApIYahKCQDEIICLFsLNKiYAUx9aUFAKJEUBEEkOdakIISKr4SRwC+SWAiOTXtn7JEBCfBO8QgEDkBBCRyJFmKkIEJFPmIDMQyB8BRCR/NvVLhID4JHiHAARiI4CIxIY21YgRkFTxkzgEikMAEcmfrRGQ/NmUEkEgswQQkcyaJlTGEJBQ2AgEAQiEJYCIhCWXvXAISPZsQo4gkHsCiEg+TIyA5MOOlAICzhFARJwz2SoZRkBWQcIPEIBAUgQQkaRIx5MOAhIPV2KFAAQCEkBEAoLKoDcEJINGIUsQKBoBRMRNiyMgbtqNXEMgdwQQEfdMioC4ZzNyDIHcEkBE3DItAuKWvcgtBHJPABFxx8QIiDu2IqcQKAwBRMQNUyMgbtiJXEKgcAQQkeybHAHJvo3IIQQKSwARybbpEZBs24fcQaDwBBCR7FYBBCS7tiFnEIDACgKISDarAgKSTbuQKwhAoIoAIlIFJANfEZAMGIEsQAACwQggIsE4JeULAUmKNOlAAAKREEBEIsEYSSQISCQYiQQCEEiSACKSJO3aaSEgtdlwBQIQyDABRCR94yAg6duAHEAAAiEJICIhwUUUDAGJCCTRQAAC6RBARNLhrlQRkPTYkzIEIBARAUQkIpBNRoOANAkM7xCAQDYJICLJ2wUBSZ45KUIAAjERQERiAlsjWgSkBhh+hgAE3CSAiCRnNwQkOdakBAEIJEQAEUkGNAKSDGdSgQAEEiaAiMQPHAGJnzEpQAACKRFAROIFj4DEy5fYIQCBlAkgIvEZAAGJjy0xQwACGSGAiMRjCAQkHq7ECgEIZIwAIhK9QRCQ6JkSIwQgkFECiEi0hkFAouVJbBCAQMYJICLRGQgBiY4lMUEAAo4QQESiMRQCEg1HYoEABBwjgIi0bjAEpHWGxAABCDhKABFpzXAISGv8CA0BCDhOABEJb0AEJDw7QkIAAjkhgIiEMyQCEo4boSAAgZwRQESaNygC0jwzQkAAAjklgIg0Z1gEpDle+IYABHJOABEJbmAEJDgrfEIAAgUhgIgEMzQCEowTviAAgYIRQEQaGxwBacwIHxCAQEEJICL1DY+A1OfDVQhAoOAEEJHaFQABqc2GKxCAAAQsAUSk84qAgHTOhV8hAAEIdCCAiHTAYb/EKiD337/M/Pvfy8xTTy03bWsuNSO3bc/AeectNRf8fJHZbruuZq+9uplvfavbqjnjFwhAAAIZI4CIdDRILAJy6aVLzYUXLjGvvVYqpzb+ays/z59fMv95fLl53Hv98Y9LzcYbdzEnndTDHH98LNkp54EPEIAABFolgIisJNh15cfWPz377HKz006LzAkntHUQj0YxS2gURmEVBw4CEIBAlglIRAYOHGhmz55tPvzwwyxnNda8RSYgN9641Gy77SIzdWp4AVBYxaG4cBCAAASyTAARMSaSPiPd8A89tK1TW4/f4QUzavPpZs0RbWbx8rWsn62+8bQZtdE0M/OFseaVJzbvEG65pz9+XIccEkn2OsTPFwhAAAJRESh6d1aXkudagakuJ7UadOOvdBKOHfb7P9Nv4Bz785x5w8zc+cPt5359PjD9+7Y3++bO7m+euHPXVYSkq9c2evrpXmbixMgaSZXZ43MBCcyYMcOWevTo0QUsPUWOk4C6sdSdpW4tX1Sq08tj/WtZQDRuUd1t9bVD7zNbfO2ZDvxqCYjvadojW5tHbtjD/2rfd9yxqzfQ3qvDb3yBQDMElr4xzSx69Daz5KWnzLJP3rNBuw1Z1/TYdDvTa7cDTfcNt2gmOvxCoCaBzkQk7/WvJQHRbCsNfle6zsRD1xsJiPx0JiL/+789mZ0lOLimCcy7YrJZdP+NdcP1+tYhpu+xk+v64SIEghKoFJH+d1+e+/rXkoCMG7eww2wrdVvt8b27OmUdREAU8L5rv92hO0tTfF99tXencfIjBGoRmPPbY03b81NqXe7we88JO5v+P7+iw298gUBYAnZW1kX/z/ScMS1QFC7Xv9ADDFokWLnOQ6Q05tGqq45DaSgtHASCElDLI6h4KE75VRgcBKIgoJZHUPFQei7Xv9ACohXmlU6tD3/AvPL3Zj8rDsVV6arTqrzGZwhUErB9zg26rSr9+5/V1aWwOAi0QqBo9S+0gGh7kkqnqbpRueq4qtOKKh3iyR8BDZiHda2EDZsm4fJFoJU61ErYtCiGFpA33ug4+3fI+h9FVobquKrTiiwhIsodAc22CutaCRs2TcLli0ArdaiVsGlRDL1S7/PPOwpInzXnRVaG6riq04osISLKHYHln74fukya5uvP1Q8dCQELTWCNFVPFw0Bope6GSS+KMKEFpNnEtXDQXzzYbFj8QwACEIBA9giEFpBBg7qYWbNWtkLmf9k3kkF0IVJclU5p4SAQhEDXwSPMso/eDuJ1FT9aYMgq9VWw8EMTBL7w6lDY+qe665oLPQay4YYdb+qfvDM0srJXx1WdVmQJEVHuCGiFeVjXStiwaRIuXwRaqUOthE2LYmgB0WFQlU4bI0blquOqTiuqdIgnfwS0PUlY10rYsGkSLl8EWqlDrYRNi2JHFWgiFzpJsNJpV11tjNiqUxzVO/RWp9VqGoTPLwHtbaXtSZp1CsO+WM1Sw381gaLVv9AComNotc1IpdOuuq266jiUBkfetkq1WOHn7HucaRu9ReBCaysJ9sMKjAuPDQioLqlOBXUu17/QAiI4Ooa20qnloA0RwzqFrW59VKcRNm7CFYOAv5md+Z8/BGqJqOXBPljFqBtJllJ1KkhL2PX619JmijJI0O3cGxmvs5142c69ETWuVxLwxaPyTIbK7bT9efaa7aIBS/U5021VSZDPURPIe/1rWUCCHihVyzAcKFWLDL83Q6Az8WgmPH4hAIHmCbQsIEoyyJG22p7EX2GudR6aqtvZkbZ+EW64oafhSFufBu/1CCAe9ehwrVUCOrR1uXfkarduHScOtRpvHsJHIiACIRGZNKltlaNtm4Wko2yvvx7xaJZbUf3HKR6vvPKKueOOO8zDDz9s3n33XfPll1+a9dZbz4wcOdKMGjXKe8A5xGy22WbcWHJW+RYsWGAee+wxc++995qXXnrJfPzxx1ZAZPsxY8bY1wEHHGBGjBhReNtHJiCqQ+rOOumktlWOuA1avzTmceGFPQOfg64ng0WLFgWN3vrr0qWL6dWLY3KbgpZRz3GJx+LFi80f/vAHc/7555svvvjC3jxU13ynOuTXo4MPPticeeaZVlC66ukH5zSBF154wfz61782TzzxhLfTxiyzZMkS49teNu/Ro4e9f2ywwQbmZz/7mdlvv/3M6quv7nSZW8l8pALiZ0RH3V544ZJVDpzyr1e/a6quZlsdf3zwnVVk1M8++8yce+651dHV/K4KMGjQIHPGGWfU9MMFNwjEJR4q/emnn24uvvhis3Dhwg4wNDj/1VdfmWXLVp6Fozq14447mttuu83WLX3HuUlArY0f/vCH5qmnnupgY4nGgAEDrKD4YqIS6l5y2mmnecd6n2D69299DZyT1Dwgsbn77ltaOvXUxaWddlpYWnvtBaWuXefZlz7rN12TnzBu6dKlpSlTpuixsKnX2LFjwyRHmAwR+OCDD0ovvvhiSe9Ru7vvvru0xhprlOvU5ptvXrrppptK06dPL3mtkdLs2bNtvTvwwANLnliU/Z1yyiklr+sj6uwQX0IE5s2bV/rOd77j3Z+6lm160kknle68887SG955Eu+8807p1VdfLV1yySUlryur7GfNNdcsPf7446W2traEcpqtZNQ8S8y9+eabJb2icF43Q+lvf/tb2ZAyfPfu3eu+evbsWZowYUIUyRNHSgTiFA8VSTcRXxi8loWtr6prXqujXGI9vMyZM6d02GGHlf3269fPCkzZEx+cInDPPfeUhg4dWr6f/PKXvyy99957Ja+LvOQNoNuy6H3u3LmlqVOnlkaOHFn2e9BBB5U+/fRTp8obVWaD9xllrH2lWRFvvfWWzZVmR5x66qlG/ZKNnPd02cgL1zNKIM5uKxX57bfftgPm3j+XJaAxkPXXX994DyYdiKi+eYJhxz5uv/12o0FX78ZivBuO7cpgLKQDLie+yI7qEpfTuNbRRx9thg0bZiptqe7Jvn37mq233tocd9xx5re//a2ZP3++nWhxzjnnmLXWWsuOjTlR4Igy2fE/I6JIk4hGAjJz5kyblAaxTjzxRDtDJom0SSN5AnGLh0rktY7LkzI0u2qjjTZaRTwqS77hhhsaPZBIQOR0GNXGG2/c4aZT6Z/P2SSgMS2Ne2jAXG7//fc3gwcPrmlHjYnssssu9mFBAqJwevjQw4bXy5HNQsaUK2enjcjo+oeX69Onj31aiIkR0aZMIAnxUBGVjj9ALnGobnlUY1CrQzcQ33n94YV7AvXL7vK7Ztp5XZLlIowfP76hEGhK72qrrVYO43WtGq9rs/y9KB+cbYHoH/21116zdmr0pFgUY+axnEmJh9h9/etfNw888ICdtjtkyJCG072fe+454w2elrF7/eKFXxdQhuHQB63vWXvtte3DQO/evW1XVKNFg/4UX7+Y3vhJwwcO32+e3p0UEPVR68lPRlQfpQSk0vl92EyprKTi3uckxUN0hg8fbluyqj+qV5X939X0vFlZ5ic/+Um5y+uYY46xNyHqXDWp7H9X19Mtt9xiW5+y3zrrrNMw094M0HKrRfVEDw/q2iqac1JANP6hlcFyMp5Wh+pJUH2RaplIXPRdc7f1JKGuiMrmZtGM7GJ5kxYPvy51xsqbumvrm8Y61Or1phAbDbqq31tu++23Nz/96U+Nnl5x7hHQjV8D5kGd7H/VVVfZiRMKs/fee9t7TREfHpwUEImE/88rAdECrxtvvNHceuutZtq0aeXZWXqSmDhxotlrr73MEUccYWfONGqaBq1E+IuPQBriUa80qlOqP+rqUD+36p8eYuQ0G+dXv/qVbX3Ua7HUi59r7hDQYLseFrToUE6TKLQwWQ+rRXROCoj+eX0BUUtD/8B+i0RG1JOAuiG0h423MMy+rr/+enPeeeeZ7bbbrpB9la5U7qyJh7hJNNQK0RYn1e6aa66xA66/+MUvCjmNs5pHXr9rwsSVV15prrjiCtsK9bs5NZXXW2xayO4r2TqWrUxqVSJNc5QbPXp0LS+BfldXwsknn2wN6gdQN5Wm86ovUrMoJCjaDE+G1xOjnGZrqeth9913Z7aMDy5D71kUD+FRvfUWmtkWyCeffGI0/uEPtuu6Wh6qU97CVjv9s4hdGeKQR6eH1fvvv99ccMEFdn8stULlNOj+xz/+0eyzzz6F7b6yIDwlTcxFtRJdq4C9f9jySlCv+VjyNr8rvf/+++WyeIa3q0O95mXJ2zyx7HfcuHEl70ZV9seHbBCIe4V5K6X0HkDsimRvbyy7XYn3UGK3tTjqqKPKW194olHyWsIl+cHlg4DXTVU69thj7dYlsq93w7SvSZMmlZ588smStj/RfabIzsmtTHwB8aZa2i0Fbr755po21DYU1113XXnLCe9psfTjH/+4pn8uJE8gy+JRi4ZExXsaLe27777luuWNxZW8mYG1gvC7IwR0z9CeV5tuuqndGskXji222KJ0ww032D3YvAk7jpQm3mw62YVlm04r/qh/utGCL83K0i6bnpDYUFok5m2MVneaZmUafI6PQFa7rYKW2Ht48c7BmVReD6K1IeoTZ0A9KMFs+dN2NBpTVVe3lgnIaXq3tkrSGSCaraXjIOimbLebk4Po7VlfUYCqfYoqr/mftb2At3tqWUA++ugjo5cqBi49AlkSD687wkyePLm8slzbdGtvtUZCsMkmm9gBVH9BoeqV9+TaMFx61Em5FgGJh9dlZfdD8+155JFHGm+nZTtuq/3PEI6O9JwXkI7F6fybpu5qrYjv1GrRRowIiE8k+fcsiYdKrwkYmgbuz+7bY4897N5qjQSken2Rpo43CpM8bVJsREAz7M466yzz0EMP2fVkGiTXWUN77rmn0a4ETP/vnKCTe2FpwaCeEPTyZ1h1XryVv1aeQqjKoMNgcOkQyJp4iIJu+mpxeD3Gdo3H888/H6huaWGhHkjk1JWqPZIQEIvDqT/q3r7rrruseOhh4rLLLjPeNu1GW5QgHrVN6ZyASDw0rU7rOryDfuxYRu3itV+RyPgbL+oXdWlp+wJc8gSyKB4+BW+QtNxFoSm51ScS+v78d9VF3Wj87o6tttqq4SZ8fljes0NA9wctRPbO9LCZ0pG22heNLqvGNnJSQHR8qPbrV//k7373O/vUWK+o+gd/8MEHy1605baeMnDJEsiyeIiEJlr458Vo7Yf6w3VTUauk2mlihhYP/utf/ypf195YlS3d6jB8zyYBtTbVkpSd1113XXvOueoB4x2N7eXcGIi6CbQXv1aEyuD//ve/7YC4mpqdGVzdC2p96IxrObU+Dj/88MZk8BEpgayLhwqrBa7eFG+jw4H0VKoN9jSwqvMhNDCu7inNzPGOOLWLWF9++eVy95U2U9S4SRE31Iu0oqQQ2bPPPmvPulfS2pbdO5Wy6Zakxkt23XXXwu2556SAaPM6bVynLgZtMaGWyOWXX26n2Km/Un3QWkGqLgY9WehJ0u+n9o60NUcddVQK1bS4SbogHrKO6o12ONBBZX//+9/tA8rTTz9tdIPRg4vqloRFL78+KZw20/OOQLVdHvqOc4uAJtT429TovqEHg2bdV199VW6JNhvWZf/OCYj+yTV+cdFFF9kuB/0zq3vqm9/8pt3wTnPw1QzVbBo1TS+99FK7BYWMpJkVZ555Jt1XCdZYV8TDR6LJFWrdqj5pKq8eUHzR8P347xp0115IEhC6PHwq7r3rXqGHTVzzBJxdSKjWh/55vS1M7NNDZ/3UPg51bY0dO9ZupqjuCFwyBFwTj0oqGjdTd5X2vVIXqLqtdGb2iBEjbFeXxMPbFscKR9GOMa3klIfP2t9M95N695BG5dTDqfba66wbvVFYl687KyCCrm6ERx55xPz+9783jz32mP2uJqgqgrob1O2gQU09TcqPWia4ZAi4LB4+IdUjtT5Up/Su72oB6+V3lRbthuGz4R0CIuC0gPgm1D+3DnnRk6Kao+rPVItDiwdHjRpldFY1LjkCeRCP5GiREgTcJZALAXEXf/5yjnjkz6aUCAK1CDi3DqRWQfg9fQKIR/o2IAcQSJIAApIk7RynhXjk2LgUDQI1CCAgNcDwc3ACiEdwVviEQJ4IICB5smYKZUE8UoBOkhDICAEEJCOGcDEbiIeLViPPEIiOAAISHctCxYR4FMrcFBYCnRJAQDrFwo/1CCAe9ehwDQLFIYCAFMfWkZQU8YgEI5FAIBcEEJBcmDGZQiAeyXAmFQi4QgABccVSKecT8UjZACQPgQwSQEAyaJSsZQnxyJpFyA8EskEAAcmGHTKbC8Qjs6YhYxBInQACkroJspsBxCO7tiFnEMgCAQQkC1bIYB4QjwwahSxBIGMEEJCMGSQL2UE8smAF8gCB7BNAQLJvo0RziHgkipvEIOA0AQTEafNFm3nEI1qexAaBvBNAQPJu4YDlQzwCgsIbBCBQJoCAlFEU9wPiUVzbU3IItEIAAWmFXg7CIh45MCJFgEBKBBCQlMBnIVnEIwtWIA8QcJcAAuKu7VrKOeLREj4CQwACHgEEpIDVAPEooNEpMgRiIICAxAA1y1EiHlm2DnmDgFsEEBC37NVSbhGPlvARGAIQqCKAgFQByetXxCOvlqVcEEiPAAKSHvvEUkY8EkNNQhAoFAEEJOfmRjxybmCKB4EUCSAgKcKPO2nEI27CxA+BYhNAQHJqf8Qjp4alWBDIEAEEJEPGiCoriEdUJIkHAhCoRwABqUfHwWuIh4NGI8sQcJQAAuKo4TrLNuLRGRV+gwAE4iKAgMRFNuF4EY+EgZMcBCDAXlh5qAOIRx6sSBkg4B4BWiDu2axDjhGPDjj4AgEIJEgAAUkQdtRJIR5REyU+CECgGQIISDO0MuQX8ciQMcgKBApKAAFx0PCIh4NGI8sQyCEBBMQxoyIejhmM7EIgxwQQEIeMi3g4ZCyyCoECEEBAHDEy4uGIocgmBApEAAFxwNiIhwNGIosQKCABBCTjRkc8Mm4gsgeBAhNAQDJsfMQjw8YhaxCAAFuZZLUOIB5ZtQz5ggAEfAK0QHwSGXpHPDJkDLICAQjUJICA1ESTzgXEIx3upAoBCDRPAAFpnllsIRCP2NASMQQgEAMBBCQGqGGiRDzCUCMMBCCQJgEEJE36K9JGPDJgBLIAAQg0TQABaRpZtAEQj2h5EhsEIJAcAQQkOdarpIR4rIKEHyAAAYcIICApGQvxSAk8yUIAApERQEAiQxk8IsQjOCt8QgAC2SWAgCRsG8QjYeAkBwEIxEYAAYkN7aoRIx6rMuEXCEDAXQIISEK2QzwSAk0yEIBAYgQQkARQIx4JQCYJCEAgcQIISMzIEY+YARM9BCCQGgEEJEb0iEeMcIkaAhBInQACEpMJEI+YwBItBCCQGQIISAymQDxigEqUEIBA5gggIBGbBPGIGCjRQQACmSWAgERoGsQjQphEBQEIZJ4AAhKRiRCPiEASDQQg4AwBBCQCUyEeEUAkCghAwDkCCEiLJkM8WgRIcAhAwFkCCEgLpkM8WoBHUAhAwHkCCEhIEyIeIcERDAIQyA0BBCSEKRGPENAIAgEI5I4AAtKkSRGPJoHhHQIQyC0BBKQJ0yIeTcDCKwQgkHsCCEhAEyMeAUHhDQIQKAwBBCSAqRGPAJDwAgEIFI4AAtLA5IhHA0BchgAECksAAaljesSjDhwuQQAChSeAgNSoAohHDTD8DAEIQGAFAQSkk6qAeHQChZ8gAAEIVBFAQKqAIB5VQPgKAQhAoAYBBKQCDOJRAYOPEIAABBoQQEBWAEI8GtQULkMAAhCoIoCAeEAQj6pawVcIQAACAQgUXkAQjwC1BC8QgAAEOiFQaAFBPDqpEfwEAQhAICCBwgoI4hGwhuANAhCAQA0ChRQQxKNGbeBnCEAAAk0QKJyAIB5N1A68QgACEKhDoFACgnjUqQlcggAEINAkgcIICOLRZM3AOwQgAIEGBAohIIhHg1rAZQhAAAIhCOReQBCPELWCIBCAAAQCEMi1gCAeAWoAXiAAAQiEJJBbAUE8QtYIgkEAAhAISCCXAoJ4BLQ+3iAAAQi0QCB3AoJ4tFAbCAoBCECgCQK5EhDEownL4xUCEIBAiwRyIyCIR4s1geAQgAAEmiSQCwFBPJq0Ot4hAAEIREDAeQFBPCKoBUQBAQhAIAQBpwUE8QhhcYJAAAIQiIiAswKCeERUA4gGAhCAQEgCTgoI4hHS2gSDAAQgECEB5wQE8YjQ+kQFAQhAoAUCTgkI4tGCpQkKAQhAIGICzggI4hGx5YkOAhCAQIsEnBAQxKNFKxMcAhCAQAwEMi8giEcMVidKCEAAAhEQyLSAIB4RWJgoIAABCMREILMCgnjEZHGihQAEIBARgUwKCOIRkXWJBgIQgECMBDInIIhHjNYmaghAAAIREsiUgCAeEVqWqCAAAQjETKBLyXNxprH0jWlm0aO3mSUvPWWWffKeTarbkHVNj023M712O9B033AL+xviEacViBsCEIBA9ARiFZB5V0w2i+6/sW6ue33rEDNn3+PM7NmzzcCBA82wYcPq+uciBCAAAQhkg0BsAjLnt8eatuenBCpl22ivFfI/f0A8AtHCEwQgAIFsEIhlDEQtj6DiIQw9Z0wz/e++PBtEyAUEIAABCAQiELmA2DGPBt1WneVMXV0Ki4MABCAAATcIRC4gGjAP61oJGzZNwkEAAhCAQDgCkQuIZluFda2EDZsm4SAAAQhAIByByAVk+afvh8uJF6qVsKETJSAEIAABCIQiELmAhMoFgSAAAQhAwDkCkQtI18EjQkNoJWzoRAkIAQhAAAKhCEQuIFphHta1EjZsmoSDAAQgAIFwBCIXEG1PEta1EjZsmoSDAAQgAIFwBCIXEO1tpe1JmnUK4++L1WxY/EMAAhCAQPIEMrGVSc8JO5v+P78i+dKTIgQgAAEIhCYQm4AoR0E3U+x77OTQBWgmYFtbm1m2bJkN0rt372aC4hcCEIAABKoIxCogSqtyO3d/nYdmW1Vv516Vr8i/arv4cePGmTlz5ti4Y97FPvL8EyEEIACBrBGIXUCyUODly5ebPffc0zzwwAPl7CAgZRR8gAAEIBCKQOSD6KFyEXOg888/v4N4xJwc0UMAAhAoBIHct0CeeeYZs+2225rqFkf190JYm0JCAAIQiJBArgVk7ty5ZssttzQzZsxYBRkCsgoSfoAABCDQFIHcdmFJIE4++eSyeEyePLkpMHiGAAQgAIH6BHIrIP/4xz/M1VdfbUv/ox/9yHz3u9+tT4KrEIAABCDQFIFcdmG99dZbdsru4sWLzZgxY8xzzz1n9Nvmm29ehkMXVhkFHyAAAQiEIpC7FsiSJUvMEUccYSQeXbp0Mddff73p27dvKDgEggAEIACB2gRyJyBnn322mTp1qi2xPm+zzTa1S88VCEAAAhAITSBXXVhTpkwxu+yyi4Wx6667mgcffNB0797dfn/xxRfpwgpdTQgIAQhAYFUCuWmBzJ492xxySPsuwL169TLXXnttWTxWLTa/QAACEIBAqwRyISAaED/++OON9ruSu+qqq8zIkSPtZ/5AAAIQgEA8BHIhIJque9NNN1lCkyZNMnrhIAABCEAgXgLOj4G8/vrrZpNNNrHbtA8fPtxorGPAgAGrUGMMZBUk/AABCECgJQJOt0A0Zfewww4rn/Fx3XXXdSoeLREiMAQgAAEIdErA6RbIrFmzzODBg23BtOZj/PjxnRZSPy5cuNDMnDmzfF2tFjmF+/a3v23OOeec8jU+QAACEIBAYwLtc1wb+8u8Dw2kv/zyy4HzWel3woQJgcPhEQIQgAAE2gk4LSBdu3Y1w4YNC2RLdXepxeI7P5xaIIMGDfJ/5h0CEIAABAIScLoLK2AZrTfthTVq1KhyEPbCKqPgAwQgAIFQBJweRA9VYgJBAAIQgEAkBBCQSDASCQQgAIHiEUBAimdzSgwBCEAgEgIISCQYiQQCEIBA8QggIMWzOSWGAAQgEAmBwszCioQWkUAAAhCAQJkALZAyCj5AAAIQgEAzBBCQZmjhFwIQgAAEygQQkDIKPkAAAhCAQDMEEJBmaOEXAhCAAATKBBCQMgo+QAACEIBAMwQQkGZo4RcCEIAABMoEEJAyCj5AAAIQgEAzBBCQZmjhFwIQgAAEygQQkDIKPkAAAhCAQDMEEJBmaOEXAhCAAATKBP4/11iKbXUWEFcAAAAASUVORK5CYII=">

</img>

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
