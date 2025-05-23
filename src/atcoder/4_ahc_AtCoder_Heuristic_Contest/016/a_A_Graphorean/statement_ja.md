
<div>

<span>

<span>

<div>

<section>

### **ストーリー**

<p>
天才発明家の高橋くんは、過去へと<a href="https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%95_(%E3%83%87%E3%83%BC%E3%82%BF%E6%A7%8B%E9%80%A0)">グラフ</a>を送ることの出来るタイムマシン「グラフォリアン:Graphorean」(グラフ:Graph + デロリアン:DeLorean)を発明した。
このマシンを使って一攫千金を目論む高橋くんは、カジノのルーレットをプレイし、プレイ前の時刻へと当選番号の情報を送ろうと考えた。
成功すれば見事番号を的中させた世界線へと移動し、大金持ちになることが出来る。
</p>

<p>
ただし、マシンでは直接数値を送ることは出来ないため、当選番号の数値を一度グラフに変換(エンコード)して送信し、送られてきたグラフを数値に戻す(デコード)作業が必要である。
マシンでグラフを送ると、頂点番号の情報は失われ、更にノイズが入ってしまうため、正しく数値が復元できるように、エンコード・デコードの仕方を工夫しなければならない。
また、$N$頂点のグラフを受け取るためには、受け取る日時において予めマシンに整数 $N$を設定しておく必要があるため、送るグラフの頂点数はあらかじめ決めておく必要がある。
</p>

<p>
マシンは一度使うと壊れてしまうので、失敗は許されない。
事前にシミュレーションをすることで成功確率を見積もり、出来るだけ成功確率が高くなるようなエンコード・デコードの方式を準備することにした。
また、大きなグラフを送るには膨大なエネルギーが必要となるため、送るグラフのサイズは出来るだけ小さい方が望ましい。
高橋くんの手伝いをして欲しい。
</p>

</section>

</div>

<div>

<section>

### **問題文**

<p>
整数 $M$とエラー率 $\epsilon$が与えられるので、$4\leq N\leq 100$の整数 $N$を決めて、頂点数が全て $N$であるような $M$個の無向グラフ $G_0,G_1,\cdots,G_{M-1}$を作成し出力せよ。グラフは非連結でも構わない。
その後、以下のクエリを $100$回処理せよ。
</p>

<p>
$k$回目のクエリでは、$N$頂点の無向グラフ $H_k$が与えられる。
$H_k$は、ある $G_{s_k}$から以下のようにして生成されたグラフである。
</p>

<ol>

<li>
$H_k=G_{s_k}$と初期化する。
</li>

<li>
各 $0\leq i<j\leq N-1$の組 $(i,j)$について、確率 $\epsilon$で$H_k$が辺 $(i,j)$を含むか否かを反転する。
</li>

<li>
$H_k$の頂点の順番をランダムに並び替える。
</li>

</ol>

<p>
$H_k$の情報を受け取ったら、どのグラフ $G_{s_k}$から生成されたかを予測し、$s_k$の予測値 $t_k$を出力せよ。
</p>

</section>

</div>

<div>

<section>

### **得点**

<p>
予測が外れた回数を $E$としたとき、以下の点数が得られる。
\[
    \mathrm{round}\left(10^9\times \frac{0.9^E}{N}\right)
\]
</p>

#### **テストケース数**

<ul>

<li>
暫定テスト: 50個
</li>

<li>
システムテスト: 2000個、コンテスト終了後に <a href="https://img.atcoder.jp/ahc016/seeds.txt">seeds.txt</a>(sha256=4093b6cb740beea16eb0ecf55120ca6ca6fbef18015ea4a863e64d0bea3de91d) を公開
</li>

<li>
システムテストは各 $(M,\epsilon)$の組を高々1つ含む
</li>

</ul>

<p>
各テストケース毎に、$\mathrm{round}(10^9\times \frac{自身の得点}{全参加者中の最高点})$の
<font color="red">
<strong>
相対評価スコア
</strong>
</font>
が得られ、その和が提出の得点となる。
</p>

<p>
最終順位はコンテスト終了後に実施されるより多くの入力に対するシステムテストにおける得点で決定される。
暫定テスト、システムテストともに、不正な出力や制限時間超過をした場合、そのテストケースのみ0点となる。
システムテストは
<font color="red">
<strong>

<span>
CE
</span>
以外の結果を得た一番最後の提出
</strong>
</font>
に対してのみ行われるため、最終的に提出する解答を間違えないよう注意せよ。
</p>

#### **相対評価システムについて**

<p>
暫定テスト、システムテストともに、
<span>
CE
</span>
以外の結果を得た一番最後の提出のみが順位表に反映される。
相対評価スコアの計算に用いられる各テストケース毎の全参加者中の最高点の算出においても、順位表に反映されている最終提出のみが用いられる。
</p>

<p>
順位表に表示されているスコアは相対評価スコアであり、新規提出があるたびに、相対評価スコアが再計算される。
一方、提出一覧から確認出来る各提出のスコアは各テストケース毎の得点をそのまま足し合わせた絶対評価スコアであり、相対評価スコアは表示されない。
最新以外の提出の、現在の順位表における相対評価スコアを知るためには、再提出が必要である。

<strong>
(追記)
</strong>
不正な出力や制限時間超過をした場合、提出一覧から確認出来る絶対スコアは0となっているが、順位表には正解したテストケースに対する相対スコアの和が表示されている。
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

<div>

<section>

### **入出力**

<p>
まずはじめに、標準入力から以下の形式で問題設定に関する情報が与えられる。
</p>

<div>

$M$$\epsilon$
</div>

<ul>

<li>
$M$は出力グラフ数を表す整数で、$10\leq M\leq 100$を満たす。
</li>

<li>
$\epsilon$はエラー率を表す実数で、$0.01$の倍数であり、$0.00\leq \epsilon\leq 0.4$を満たす。
</li>

</ul>

<p>
入力を読み込んだら、$M$個のグラフ $G_0,G_1,\cdots,G_{M-1}$を以下の形式で標準出力に出力せよ。
</p>

<div>

$N$$g_0$$\vdots$$g_{M-1}$
</div>

<ul>

<li>
$N$は各グラフの頂点数を表す整数で、$4\leq N\leq 100$を満たさなければならない。
</li>

<li>
各 $g_k$は $k$番目のグラフ $G_k$を表す $N(N-1)/2$文字の`01`文字列であり、$0\leq i<j\leq N-1$を満たす各 $(i,j)$について、$G_k$が辺 $(i,j)$を含むならば `1`、含まないならば `0`として $(i,j)$の辞書順に並べたものである。例えば、$N=4$のとき、文字列 `100101`は $4$点が直線上につながったグラフを表す。
</li>

</ul>

<p>

<font color="red">
<strong>
出力の後には標準出力を flush しなければならない。
</strong>
</font>
そうしない場合、
<span>
TLE
</span>
となる可能性がある。
$M$個のグラフの出力後、以下の処理を $100$回繰り返す。
</p>

<p>
$k$回目の処理ではまず、$N$頂点のグラフ $H_k$を先と同じ形式により $N(N-1)/2$文字の `01`文字列として表したものが一つ、標準入力から一行で与えられる。
入力を受け取ったら、$H_k$がどのグラフ $G_{s_k}$から生成されたものであるかを予測し、$s_k$の予測値 $t_k (0\leq t_k\leq M-1)$を標準出力に一行で出力せよ。
出力の後には改行をし、更に標準出力を flush しなければならない。

<font color="red">
<strong>
$k$回目の処理を完了するまで、$k+1$回目の処理に対する入力は与えられないので注意せよ。
</strong>
</font>

</p>

</section>

</div>

<div>

<section>

### **サンプルプログラム**

<p>
Pythonでの解答例を示す。
このプログラムでは、$N=20$と設定し、グラフ $G_k$は $k$本の辺を含むようにしている。
$H_k$を受け取ったら、辺の数 $m$を数え、$\min(m, M-1)$を出力している。
</p>

```
M, eps = input().split()
M = int(M)
eps = float(eps)
print(20)
for k in range(M):
    print("1" * k + "0" * (190 - k))

for q in range(100):
    H = input()
    t = min(H.count('1'), M - 1)
    print(t)
```

</section>

</div>

<div>

<section>

### **入力生成方法**

<p>
$L$以上 $U$以下の整数値を一様ランダムに生成する関数を $\mathrm{rand}(L,U)$で表す。
$M$は $\mathrm{rand}(10,100)$により生成される。
$\epsilon$は $0.01\times \mathrm{rand}(0,40)$により生成される。
各 $s_k$は $\mathrm{rand}(0,M-1)$により生成される。
</p>

</section>

</div>

<div>

<section>

### **ツール(入力ジェネレータ・ビジュアライザ・ローカルテスタ)**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc016/d5f3c281.html?lang=ja">Web版</a>: ビジュアライズ機能により各入出力グラフの形状を確認出来ます。
</li>

<li>
<a href="https://img.atcoder.jp/ahc016/d5f3c281.zip">ローカル版</a>: 使用するには<a href="https://www.rust-lang.org/ja">Rust言語</a>のコンパイル環境をご用意下さい。
<ul>

<li>
<a href="https://img.atcoder.jp/ahc016/d5f3c281_windows.zip">Windows用のコンパイル済みバイナリ</a>: Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
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

#### **ツールで用いられる入出力ファイルの仕様**

<p>
ローカルテスタに与える入力ファイルは以下の形式を用いている。
</p>

<div>

$M$$\epsilon$$s_0$$\vdots$$s_{99}$$\mathrm{seed}$
</div>

<p>
最後の $\mathrm{seed}$はノイズ生成に用いられる乱数シード値である。
各グラフ $H_0,\cdots,H_{99}$は出力されたグラフ $G_0,\cdots,G_{M-1}$に依存するため、入力ファイルには乱数シード値のみが記載されている。
</p>

<p>
ローカルテスタは解答プログラムの出力をそのまま出力ファイルに書き出す。
解答プログラムは、`#`から始まるコメント行を出力に含めても良い。
Web版ビジュアライザを使用すると、コメント行を対応するクエリと合わせて表示出来るため、デバッグや考察等に役立てることが出来る。
ジャッジプログラムはコメント行を全て無視するため、コメント行を出力するプログラムをそのまま提出可能である。
コメント行のうち、以下で始まるものはビジュアライザで特別扱いされる。
</p>

<ul>

<li>
`#v`: 以下の形式で出力することで、$H_k$における頂点 $i$が $G_{t_k}$における頂点 $p_i$に対応すると予測したことをビジュアライザに伝えることが出来る。
</li>

</ul>

<div>

#v $p_0$$\cdots$$p_{N-1}$
</div>

<ul>

<li>
`#h`: 提供されているローカルテスタを用いない場合に `#h 100101 001101`のように出力することで、ビジュアライザが表示する $H_k$を置き換えることが出来る。左側が $G_{s_k}$にノイズを加えた後で、右側が更に頂点の順番をランダムに並び替えたものである。
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
