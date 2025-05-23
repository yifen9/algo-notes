
<div>

<span>

<span>

<div>

<section>

### **ストーリー**

<p>
AtCoder社は、ロゴ入りの限定グッズをいくつか販売している。
このたび、それらの限定グッズをまとめて値引きした「スペシャルセット」の販売を開始することになった。
高橋くんは、ベルトコンベアで順番に運ばれてくるグッズをダンボール箱に梱包し、配送業者に渡す作業を担当する予定である。
そのため、販売開始に備えて梱包の練習を行うことにした。
</p>

<p>
配送料はダンボール箱の横幅と縦幅の合計に比例するため、できるだけ小さな箱に詰める必要がある。
各グッズは長方形であり、手元に計測器具がないため、高橋くんは横幅と縦幅を目分量で測り、最適化が得意なあなたに電話で相談することにした。
</p>

<p>
あなたが電話越しにグッズの配置方法を指示すると、その指示に従って高橋くんは商品を配置する。
そして、その配置において必要となるダンボール箱の横幅と縦幅を再び目分量で計測し、結果をあなたに伝える。
あなたはその情報を元に新しい配置方法を指示する。
</p>

<p>
このやりとりを繰り返し、すべてのグッズをできるだけ小さなダンボール箱に収める配置方法を求めて欲しい。
</p>

</section>

</div>

<div>

<section>

### **問題文**

<p>
$N$個の長方形が与えられる。
$i$番目の長方形の大きさは、横幅 $w_i$と縦幅 $h_i$である。
入力として、それぞれの値に計測誤差が乗った観測値 $w'_i=\mathrm{normal}(w_i, \sigma)$と $h'_i=\mathrm{normal}(h_i, \sigma)$が与えられる。
ここで、$\mathrm{normal}(\mu, \sigma)$は次の手順で値を生成する関数である。
</p>

<ol>

<li>
平均 $\mu$、標準偏差 $\sigma$の正規分布からランダムに値を生成する。
</li>

<li>
生成した値を四捨五入し、整数に変換する。
</li>

<li>
値が $1$未満の場合は $1$とし、$10^9$を超える場合は $10^9$とする。
</li>

</ol>

<p>
これらの長方形を、平面上で互いに重ならないように番号順に配置する。
長方形は必要に応じて $90^\circ$回転させ、横幅と縦幅を入れ替えることができる。
</p>

<p>
右方向に $x$軸を、下方向に $y$軸を取る。
長方形は $x \geq 0$かつ $y \geq 0$の領域に配置することができる。
配置方法は以下のような列 $(p_0, r_0, d_0, b_0), (p_1, r_1, d_1, b_1), \dots$として指定する。
</p>

<ul>

<li>
$p_i$は $i$番目に配置する長方形の番号 ($0 \leq p_i \leq N-1$) を表す。
<strong>
一部の長方形だけを配置することもできるが、番号は昇順に並んでいなければならず、すべての $i < j$に対して $p_i < p_j$を満たす必要がある。
</strong>

</li>

<li>
$r_i$は長方形を $90^\circ$回転させて配置するかどうかを表す。$r_i = 0$の場合、長方形は回転させず、$r_i = 1$の場合、回転させる。
</li>

<li>
$d_i$は長方形を配置する方向を表す。$d_i$が `U`の場合、長方形を下から上へ動かし、既に配置した他の長方形の下端または $y = 0$の線に接触したところで停止して配置する。$d_i$が `L`の場合、長方形を右から左へ動かし、既に配置した他の長方形の右端または $x = 0$の線に接触したところで停止して配置する。
</li>

<li>
$b_i$は長方形を配置する際の基準となる長方形の番号を表す。$b_i$は $-1$または既に配置した長方形の番号である必要がある。
<ul>

<li>
下から上に配置する場合 (`U`)、$b_i$は新しい長方形の左端をどの長方形の右端と揃えるかを表す。$b_i = -1$の場合、左端が $x = 0$になるように配置する。
</li>

<li>
右から左に配置する場合 (`L`)、$b_i$は新しい長方形の上端をどの長方形の下端と揃えるかを表す。$b_i = -1$の場合、上端が $y = 0$になるように配置する。
</li>

</ul>

</li>

</ul>

#### **操作の例**

<p>
以下の例では、3番の長方形を回転させず、各$(d,b)$の組に対して配置した結果を図示している。
</p>

<table>

<tbody>

<tr>

<td>
操作$(d,b)$
</td>

<td>
操作前
</td>

<td>
(U,-1)
</td>

<td>
(U,0)
</td>

<td>
(U,1)
</td>

<td>
(U,2)
</td>

</tr>

<tr>

<td>
結果
</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_0.png">

</img>

</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_1.png">

</img>

</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_2.png">

</img>

</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_3.png">

</img>

</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_4.png">

</img>

</td>

</tr>

<tr>

<td>
操作$(d,b)$
</td>

<td>
操作前
</td>

<td>
(L,-1)
</td>

<td>
(L,0)
</td>

<td>
(L,1)
</td>

<td>
(L,2)
</td>

</tr>

<tr>

<td>
結果
</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_0.png">

</img>

</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_5.png">

</img>

</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_6.png">

</img>

</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_7.png">

</img>

</td>

<td>

<img src="https://img.atcoder.jp/ahc040/RGoXy7re_8.png">

</img>

</td>

</tr>

</tbody>

</table>

<p>
以下の操作を $T$回繰り返す。
</p>

<ol>

<li>
長方形の配置方法を指定する。前回の配置の続きからではなく、何も置かれていない状態から再度配置をすることに注意。
</li>

<li>
配置後の横幅（長方形が存在する $x$座標の最大値）を $W$、縦幅（長方形が存在する $y$座標の最大値）を $H$とする。このとき、$W' = \mathrm{normal}(W, \sigma)$と $H' = \mathrm{normal}(H, \sigma)$の値が計測結果として得られる。
</li>

</ol>

</section>

</div>

<div>

<section>

### **得点**

<p>
$t$回目の配置における横幅を $W_t$、縦幅を $H_t$、使用しなかった長方形の集合を $U_t$とする。このとき、$t$回目のスコア $s_t$を次のように定義する。
</p>

<p>
\[
s_t = W_t + H_t + \sum_{i\in U_t}(w_i+h_i)
\]
</p>

<p>
このとき、$\min_t s_t$の値が絶対スコアとして得られる。

<font color="red">
<strong>
絶対スコアは小さければ小さいほど良い。
</strong>
</font>

</p>

<p>
各テストケース毎に、$\mathrm{round}(10^9\times \frac{全参加者中の最小絶対スコア}{自身の絶対スコア})$の
<font color="red">
<strong>
相対評価スコア
</strong>
</font>
が得られ、その和が提出の得点となる。
</p>

<p>
最終順位はコンテスト終了後に実施されるより多くの入力に対するシステムテストにおける得点で決定される。
暫定テスト、システムテストともに、一部のテストケースで不正な出力や制限時間超過をした場合、そのテストケースの相対評価スコアは0点となり、そのテストケースにおいては「全参加者中の最小絶対スコア」の計算から除外される。
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

#### **テストケース数**

<ul>

<li>
暫定テスト: 50個
</li>

<li>
システムテスト: 3000個、コンテスト終了後に <a href="https://img.atcoder.jp/ahc040/seeds.txt">seeds.txt</a>(sha256=1e93374aa02130a1167c2893f1904b4234a3b517d1e7b9d25022a9125ff3777d) を公開
</li>

</ul>

#### **相対評価システムについて**

<p>
暫定テスト、システムテストともに、
<span>
CE
</span>
以外の結果を得た一番最後の提出のみが順位表に反映される。
相対評価スコアの計算に用いられる各テストケース毎の全参加者中の最小絶対スコアの算出においても、順位表に反映されている最終提出のみが用いられる。
</p>

<p>
順位表に表示されているスコアは相対評価スコアであり、新規提出があるたびに、相対評価スコアが再計算される。
一方、提出一覧から確認出来る各提出のスコアは各テストケース毎の絶対スコアをそのまま足し合わせたものであり、相対評価スコアは表示されない。
最新以外の提出の、現在の順位表における相対評価スコアを知るためには、再提出が必要である。
不正な出力や制限時間超過をした場合、提出一覧から確認出来るスコアは0となるが、順位表には正解したテストケースに対する相対スコアの和が表示されている。
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
まず初めに、長方形の個数 $N$、操作ターン数 $T$、計測に発生する誤差の標準偏差 $\sigma$、各長方形の大きさの計測値 $w'_i, h'_i$が、以下の形式で標準入力から与えられる。
</p>

<div>

$N$$T$$\sigma$$w'_0$$h'_0$$\vdots$$w'_{N-1}$$h'_{N-1}$
</div>

<ul>

<li>
長方形の個数 $N$は $30\leq N\leq 100$を満たす。
</li>

<li>
操作回数 $T$は $N/2\leq T\leq 4N$を満たす。
</li>

<li>
計測時に発生する誤差の標準偏差 $\sigma$は $1000\leq\sigma\leq 10000$を満たす整数値である。
</li>

<li>
横幅と縦幅の計測値 $w'_i, h'_i$は $1$以上 $10^9$以下の整数値である。
</li>

</ul>

<p>
上記の情報を読み込んだ後、以下の処理を $T$回繰り返す。
</p>

<p>
長方形の配置方法を表す列を $(p_0, r_0, d_0, b_0), (p_1, r_1, d_1, b_1), \dots, (p_{n-1}, r_{n-1}, d_{n-1}, b_{n-1})$とする。
ここで、$n$は配置する長方形の個数を表し、$n < N$であっても良い。
この列を以下の形式で標準出力に出力せよ。
</p>

<div>

$n$$p_0$$r_0$$d_0$$b_0$$\vdots$$p_{n-1}$$r_{n-1}$$d_{n-1}$$b_{n-1}$
</div>

<p>
出力後に、配置の横幅と縦幅の計測値を表す整数 $W'$と $H'$が、以下の形式で標準入力から与えられる。
</p>

<div>

$W'$$H'$
</div>

<p>

<font color="red">
<strong>
出力の後には改行をし、更に標準出力を flush しなければならない。
</strong>
</font>
そうしない場合、
<span>
TLE
</span>
となる可能性がある。
</p>

<p>
解答プログラムは、# から始まるコメント行を出力に含めても良い。 Web版ビジュアライザを使用すると、コメント行を対応するタイミングで表示出来るため、デバッグや考察等に役立てることが出来る。 ジャッジプログラムはコメント行を全て無視するため、コメント行を出力するプログラムをそのまま提出可能である。 
</p>

#### **例**

<table>

<thead>

<tr>

<th>
$t$
</th>

<th>
Output
</th>

<th>
Input
</th>

</tr>

</thead>

<tbody>

<tr>

<td>
事前情報
</td>

<td>

</td>

<td>

<div>

4 3 1000
77685 46130
32459 75368
54192 88183
60740 42948
</div>

</td>

</tr>

<tr>

<td>
1
</td>

<td>

<div>

2
0 0 U -1
1 1 U 0
</div>

</td>

<td>

<div>

153220 47195
</div>

</td>

</tr>

<tr>

<td>
2
</td>

<td>

<div>

4
0 0 U -1
1 1 L -1
2 1 L 1
3 0 U -1
</div>

</td>

<td>

<div>

167543 86611
</div>

</td>

</tr>

<tr>

<td>
3
</td>

<td>

<div>

4
0 0 U -1
1 0 L -1
2 0 U -1
3 0 U 2
</div>

</td>

<td>

<div>

113031 134437
</div>

</td>

</tr>

</tbody>

</table>

<p>
<a href="https://img.atcoder.jp/ahc040/RGoXy7re.html?lang=ja&seed=0&output=sample">例を見る</a>
</p>

</section>

</div>

<div>

<section>

### **サンプルプログラム**

<details>
Pythonでの解答例を示す。 このプログラムでは、各長方形を順番にランダムな回転・位置で配置することを $T$回試している。


```
import random

def query(prdb):
    print(len(prdb))
    for p, r, d, b in prdb:
        print(p, r, d, b)
    W, H = map(int, input().split())
    return W, H

N, T, sigma = map(int, input().split())
wh = [tuple(map(int, input().split())) for _ in range(N)]

rng = random.Random(1234)

for _ in range(T):
    prdb = []
    for i in range(N):
        prdb.append((
            i,
            rng.randint(0, 1),
            ['U', 'L'][rng.randint(0, 1)],
            rng.randint(-1, i - 1),
        ))
    query(prdb)
```

</details>

</section>

</div>

<div>

<section>

### **入力生成方法**

<ul>

<li>
$\mathrm{rand}(L,U)$: $L$以上 $U$以下の整数値を一様ランダムに生成する。
</li>

<li>
$\mathrm{rand\_double}(L,U)$: $L$以上 $U$以下の実数値を一様ランダムに生成する。
</li>

</ul>

#### **$N$, $T$, $\sigma$の生成**

<ul>

<li>
$N=\mathrm{rand}(30,100)$
</li>

<li>
$T=\mathrm{round}(N\times 2^{\mathrm{rand\_double}(-1,2)})$
</li>

<li>
$\sigma=\mathrm{rand}(1000,10000)$
</li>

</ul>

#### **$w, h$の生成**

<p>
$U=10^5$とし、$L=\mathrm{rand}(U/10,U/2)$を生成する。
各 $i$に対し、$w_i=\mathrm{rand}(L,U), h_i=\mathrm{rand}(L,U)$により生成される。
</p>

</section>

</div>

<div>

<section>

### **ツール(入力ジェネレータ・ローカルテスタ・ビジュアライザ)**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc040/RGoXy7re.html?lang=ja">Web版</a>: ローカル版より高性能でアニメーション表示が可能です。
</li>

<li>
<a href="https://img.atcoder.jp/ahc040/RGoXy7re.zip">ローカル版</a>: 使用するには<a href="https://www.rust-lang.org/ja">Rust言語</a>のコンパイル環境をご用意下さい。
<ul>

<li>
<a href="https://img.atcoder.jp/ahc040/RGoXy7re_windows.zip">Windows用のコンパイル済みバイナリ</a>: Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
</li>

</ul>

</li>

</ul>

<p>
コンテスト期間中に、ビジュアライズ結果の共有や、解法・考察に関する言及は禁止されています。ご注意下さい。
</p>

#### **ツールで用いられる入力ファイルの仕様**

<p>
ローカルテスタに与える入力ファイルは解答プログラムに与えられる事前情報の末尾に以下の形式の情報が追加されている。
</p>

<div>

$w_0$$h_0$$\vdots$$w_{N-1}$$h_{N-1}$$dW_0$$dH_0$$\vdots$$dW_{T-1}$$dH_{T-1}$
</div>

<ul>

<li>
$w_i, h_i$は $i$番目の長方形の真の横幅と縦幅である。
</li>

<li>
$dW_t, dH_t$は $t$ターン目の計測結果に加算される計測誤差である。
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
