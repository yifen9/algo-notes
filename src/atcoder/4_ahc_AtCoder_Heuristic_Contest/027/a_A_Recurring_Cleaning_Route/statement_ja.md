
<div>

<span>

<span>

<div>

<section>

### **ストーリー**

<p>
F社はロボット掃除機「お掃除高橋くん2号」を開発し、F社のオフィスの掃除を任せることにした。
お掃除高橋くん2号は、太陽光発電により永久に動き続けることが出来、決められたルートでの掃除を無限に繰り返す。
オフィスは場所によって汚れやすさが異なり、汚れやすい場所を頻繁に掃除することで、オフィス全体をより綺麗に保つことが出来る。
オフィスを出来るだけ綺麗に保つことが出来るような掃除ルートを決定して欲しい。
</p>

</section>

</div>

<div>

<section>

### **問題文**

<p>
$N\times N$マスの盤面がある。
一番左上のマスの座標を $(0,0)$とし、そこから下方向に $i$マス、右方向に $j$マス進んだ先のマスの座標を $(i,j)$とする。
$N\times N$マスの外周は壁で囲われており、上下左右に隣接するマス間にも壁がある場合がある。
</p>

<p>
各マス $(i, j)$には汚れやすさ $d_{i,j}$が定まっており、盤面上を移動することで掃除を行う。
壁で遮られていない隣接マスに移動することが出来、移動後に移動先のマスの汚れは $0$となり、それ以外の全てのマス $(i,j)$の汚れは $d_{i,j}$増加する。
$(0, 0)$からスタートして、$(0, 0)$に戻ってくるような、長さ(移動回数) $10^5$以下の掃除ルートを考える。
掃除ルートは同じマスを何度でも通って良いが、一度も通らないマスがあってはならない。
</p>

<p>
$t$回目の移動後の各マス $(i,j)$の汚れを $a_{t,i,j}$とし、汚れの総和を $S_t=\sum_{i=0}^{N-1}\sum_{j=0}^{N-1} a_{t,i,j}$と表す。
$t=0$において、全てのマスの汚れは $a_{0,i,j}=0$であるとする。
長さ $L$の掃除ルートでの掃除を無限に繰り返したとき、$t=L,L+1,\cdots,2L-1$の間の汚れの総和の平均値
\[
    \bar{S}=\frac{1}{L}\sum_{t=L}^{2L-1}S_t
\]
を
<strong>
平均汚れ
</strong>
と定義する。
</p>

<p>
平均汚れが出来るだけ小さくなるような掃除ルートを求めて欲しい。
</p>

#### **平均汚れの意味について**

<p>
長さ $L$の掃除ルートでの掃除を無限に繰り返した時、$t\geq L$に対して、$a_{t,i,j}=a_{t+L,i,j}$が成り立つことが証明出来る。
従って、$T$ターン目までの汚れの総和の平均値 $\frac{1}{T} \sum_{t=0}^{T-1} S_t$を考えると、その $T \to \infty$での極限が平均汚れと一致する。
</p>

</section>

</div>

<div>

<section>

### **得点**

<p>
出力した掃除ルートにおける平均汚れを $\bar{S}$としたとき、$\mathrm{round}(\bar{S})$の絶対スコアが得られる。絶対スコアは小さければ小さいほど良い。
不正な掃除ルート(長さが $10^5$を越える、$(0,0)$に戻ってこない、一度も通らないマスが存在する、壁にぶつかる)が出力された場合は 
<span>
WA
</span>
と判定される。
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
システムテスト: 2000個、コンテスト終了後に <a href="https://img.atcoder.jp/ahc027/seeds.txt">seeds.txt</a>(sha256=cdea33a6050850bf1387e2191b802a1df7e43fcb969fd6c3bf9cbd96a4d790d7) を公開
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

---

<div>

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$h_{0,0}\cdots h_{0,N-1}$$\vdots$$h_{N-2,0} \cdots h_{N-2,N-1}$$v_{0,0} \cdots v_{0,N-2}$$\vdots$$v_{N-1,0} \cdots v_{N-1,N-2}$$d_{0,0}$$\cdots$$d_{0,N-1}$$\vdots$$d_{N-1,0}$$\cdots$$d_{N-1,N-1}$
</div>

<ul>

<li>
$N$は盤面の縦横の大きさを表し、$20\leq N\leq 40$を満たす。
</li>

<li>
$h_{i,0}\cdots h_{i,N-1}$は `0`と `1`からなる $N$文字の文字列であり、$h_{i,j}=1$であればマス $(i,j)$とその下隣のマス $(i+1,j)$の間に壁があり、$h_{i,j}=0$であれば壁がないことを表す。
</li>

<li>
$v_{i,0}\cdots v_{i,N-2}$は `0`と `1`からなる $N-1$文字の文字列であり、$v_{i,j}=1$であればマス $(i,j)$とその右隣のマス $(i,j+1)$の間に壁があり、$v_{i,j}=0$であれば壁がないことを表す。
</li>

<li>
全てのマスは $(0, 0)$から到達可能であることが保証されている。
</li>

<li>
$d_{i,j}$はマス $(i,j)$の汚れやすさを表す整数値で、$1\leq d_{i,j}\leq 10^3$を満たす。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
上下左右への移動をそれぞれ `U`, `D`, `L`, `R`で表す。
長さ $L$の掃除ルートを対応する文字を繋げた $L$文字の文字列で表し、一行で標準出力に出力せよ。
</p>

<p>
<a href="https://img.atcoder.jp/ahc027/aPdjCUIZ.html?lang=ja&seed=0&output=sample">例を見る</a>
</p>

</section>

</div>

<div>

<section>

### **サンプルプログラム**

<p>

</p>

<details>
Pythonでの解答例を示す。
このプログラムでは、$(0,0)$からの深さ優先探索木に沿って移動することで、探索木の各辺を行きと帰りの2回通って$(0,0)$に戻ってくる掃除ルートを出力している。

```
import sys
sys.setrecursionlimit(1000000)
<p>

</p>

<p>
N = int(input())
h = [input() for _ in range(N-1)]
v = [input() for _ in range(N)]
d = [list(map(int, input().split())) for _ in range(N)]
</p>

<p>
visited = [[False for _ in range(N)] for _ in range(N)]
DIJ = [(0, 1), (1, 0), (0, -1), (-1, 0)]
DIR = "RDLU"
</p>

<p>
def dfs(i, j):
    visited[i][j] = True
    for dir in range(4):
        di, dj = DIJ[dir]
        i2 = i + di
        j2 = j + dj
        if 0 <= i2 < N and 0 <= j2 < N and not visited[i2][j2]:
            if di == 0 and v[i][min(j, j2)] == '0' or dj == 0 and h[min(i, i2)][j] == '0':
                print(DIR[dir], end='')
                dfs(i2, j2)
                print(DIR[(dir + 2) % 4], end='')
</p>

<p>
dfs(0, 0)
print()

</p>
```

</details>

<p>

</p>

</section>

</div>

<div>

<section>

### **入力生成方法**

<p>

</p>

<details>
$L$以上 $U$以下の整数値を一様ランダムに生成する関数を $\mathrm{randint}(L,U)$で表す。
$L$以上 $U$未満の浮動小数値を一様ランダムに生成する関数を $\mathrm{randdouble}(L,U)$で表す。
<p>

</p>

#### **$N$の生成**

<p>
$N=\mathrm{randint}(20,40)$と生成する。
</p>

#### **$h, v$の生成**

<p>
壁の多さを決めるパラメータ $w=\mathrm{randint}(1,N)$を生成する。
壁が全く無い状態から始め、以下の操作を $w$回繰り返すことで壁を生成する。
</p>

<p>
上下左右の四方向からランダムに1つ選択する。
左方向の場合、$i=\mathrm{randint}(0,N-2)$、$j=\mathrm{randint}(0,N-1)$、$k=\mathrm{randint}(3,\lfloor N/2\rfloor)$を生成し、$h_{i,j}\cdots h_{i,\max(j-k+1, 0)}$を $1$にする。
右方向の場合も同様に生成して、$h_{i,j}\cdots h_{i,\min(j+k-1, N-1)}$を $1$にする。
上方向の場合、$i=\mathrm{randint}(0,N-1)$、$j=\mathrm{randint}(0,N-2)$、$k=\mathrm{randint}(3,\lfloor N/2\rfloor)$を生成し、$v_{i,j}\cdots v_{\max(i-k+1, 0),j}$を $1$にする。
下方向の場合も同様に生成して、$v_{i,j}\cdots v_{\min(i+k-1,N-1),j}$を $1$にする。
</p>

<p>
$w$回の繰り返しが完了したら、全てのマスが $(0, 0)$から到達可能であるかを判定し、到達不能なマスがある場合は壁を全て除去して $w$回の繰り返し処理をやり直す。
</p>

#### **$d$の生成**

<p>
汚れやすい領域の数を決めるパラメータ $c=\mathrm{randint}(1,\lfloor N/2\rfloor)$を生成する。
全ての $(i,j)$について $d'_{i,j}=0$である配列 $d'$を用意し、以下の処理を $c$回繰り返すことで $d'$を更新する。
</p>

<p>
$i=\mathrm{randint}(0,N-1)$、$j=\mathrm{randint}(0,N-1)$、$m=\mathrm{randint}(N,\lfloor N^2/c\rfloor)$、$b=\mathrm{randdouble}(0,2)$を生成する。
集合 $S$を $S=\{(i,j)\}$から開始して、$S$の大きさが $m$になるまで以下の処理を繰り返すことで生成する。
</p>

<p>
$p\in S$をランダムに選び、上下左右の方向をランダムに選ぶ。$p$からその方向に壁が無い場合、隣接マス $q$を $S$に追加する。
</p>

<p>
生成した $S$に含まれる各マス $(i',j')\in S$に対して、$d'_{i',j'}=b$と上書きする。
</p>

<p>
$c$回の繰り返し処理が完了したら、各 $(i,j)$について、$d_{i,j}=\mathrm{round}(10^{d'_{i,j}+\mathrm{randdouble}(0,1)})$と生成する。
</p>

</details>

</section>

</div>

<div>

<section>

### **ツール(入力ジェネレータ・ビジュアライザ)**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc027/aPdjCUIZ.html?lang=ja">Web版</a>: ローカル版より高性能でアニメーション表示が可能です。
</li>

<li>
<a href="https://img.atcoder.jp/ahc027/aPdjCUIZ_v2.zip">ローカル版</a>: 使用するには<a href="https://www.rust-lang.org/ja">Rust言語</a>のコンパイル環境をご用意下さい。
<ul>

<li>
<a href="https://img.atcoder.jp/ahc027/aPdjCUIZ_windows_v2.zip">Windows用のコンパイル済みバイナリ</a>: Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
</li>

</ul>

</li>

</ul>

<p>
コンテスト期間中に、ビジュアライズ結果の共有や、解法・考察に関する言及は禁止されています。ご注意下さい。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

20
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
00000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000100000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
251 348 2 2 5 4 14 13 13 43 7 10 8 36 11 10 3 5 1 6
179 68 3 7 6 13 25 25 30 26 13 6 16 11 20 9 1 5 10 1
135 42 1 1 4 3 2 39 24 20 51 13 29 47 8 21 4 2 2 3
57 138 133 46 4 4 7 18 26 6 17 43 29 48 10 21 2 8 3 1
148 77 220 100 127 2 3 8 41 9 19 14 17 1 2 1 2 1 2 3
237 65 193 245 244 10 1 2 7 20 5 5 4 6 4 5 4 8 2 2
107 73 85 176 1 5 6 22 11 17 4 12 20 5 1 3 8 2 7 4
262 201 56 4 9 9 6 2 2 1 20 25 8 1 1 4 1 3 3 6
3 93 1 3 1 6 4 5 7 4 3 29 17 18 9 2 6 9 2 5
68 184 236 102 3 2 2 4 16 20 5 26 21 19 124 276 1 11 39 2
5 4 2 3 8 1 4 2 6 16 3 7 25 17 5 501 172 5 279 8
1 4 5 6 7 5 3 2 1 4 9 7 245 151 6 4 10 2 78 13
2 4 4 9 6 4 2 4 8 4 4 14 17 657 15 3 4 10 474 9
7 3 9 3 1 2 2 2 4 2 3 8 15 7 12 9 8 7 5 630
2 1 2 4 3 1 3 1 3 7 4 4 8 8 10 3 4 10 203 220
3 6 9 1 2 4 6 2 3 2 1 40 24 6 3 8 4 7 248 287
6 6 1 4 2 8 2 7 3 6 4 3 1 12 12 3 11 16 85 222
7 6 2 7 2 5 2 5 4 8 2 6 1 5 9 2 4 7 1 8
3 2 9 3 2 2 6 2 3 5 2 4 7 3 5 11 7 128 7 5
4 3 4 9 1 1 4 3 4 3 3 5 1 1 2 18 9 2 9 6

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

RRRRRRRRRRRRRRRRRRRDDDDDDDDDDDDDDDDDDDLLLLLLLLLLLLLLLLLLLURRRRRRRRRRRRRRRRRRULLLLLLLLLLLLLLLLLLURRRRRRRRRRRRRRRRRRULLLLLLLLLLLLLLLLLLURRRRRRRRRRRRRRRRRRULLLLLLLLLLLLLLLLLLURRRRRRRRRRRRRRRRRRULLLLLLLLLLLLLLLLLLURRRRULLLLURRRRULLLLURRRRULLLLURRRRURRRRRRRRRRRRRRDDDDDDDLLLLLLLLLLLLLURRRRRRRRRRRRULLLLLLLLLLLLURRRRRRRRRRRRULLLLLLLLLLLLURRRRRRRRRRRRULLLLLLLLLLLLRRRRRRRRRRRRDLLLLLLLLLLLLDRRRRRRRRRRRRDLLLLLLLLLLLLDRRRRRRRRRRRRDLLLLLLLLLLLLDRRRRRRRRRRRRRUUUUUUUULLLLLLLLLLLLLLLDLLLURRURRRRRRRRRRRRRRRRLLLLLLLLLLLLLLLLLLRRDLLDRRRURRRRRRRRRRRRRRRDLLLLLLLLLLLLLLDLLLLDRRRRDLLLLDRRRRDLLLLDRRRRDLLLLDRRRRRRRRRRRRRRRRRRDLLLLLLLLLLLLLLLLLLDRRRRRRRRRRRRRRRRRRDLLLLLLLLLLLLLLLLLLDRRRRRRRRRRRRRRRRRRDLLLLLLLLLLLLLLLLLLDRRRRRRRRRRRRRRRRRRDLLLLLLLLLLLLLLLLLLDRRRRRRRRRRRRRRRRRRRUUUUUUUUUUUUUUUUUUULLLLLLLLLLLLLLLLLLL

</div>

</section>

</div>

</span>

</span>

</div>
