
<div>

<span>

<span>

<div>

<section>

### **ストーリー**

<p>
AtCoder社は、穀物の品種改良に取り組んでいる。穀物は美味しさ、収穫量、病気への耐性など複数の評価項目を持っており、高橋社長は全ての評価項目に優れた穀物を作り上げたいと考えている。
</p>

<p>
グリッド状の畑に穀物の種を植えると、隣り合ったマスに植えられた2つの種同士の各評価項目の値をランダムに受け継いだ新しい種が1年後に収穫できる。種植えと収穫を何度か繰り返して、できるだけ優れた穀物の種を作り上げて欲しい。
</p>

</section>

</div>

<div>

<section>

### **問題文**

<p>
$N\times N$マスのグリッドで表される畑がある。畑の一番左上のマスの座標を $(0,0)$とし、そこから下方向に $i$マス、右方向に $j$マス移動した先のマスの座標を $(i,j)$とする。
</p>

<p>
穀物の種が $2N(N-1)$個与えられる。評価項目が $M$個存在し、種 $k$には各評価項目の良さを表す非負整数ベクトル $\boldsymbol{x_k}=(x_{k,0}, x_{k, 1}, \cdots, x_{k,M-1})$（以下、評価項目ベクトルと呼ぶ）が定められており、種 $k$の価値 $V_k$は $V_k=\sum_{l=0}^{M-1}x_{k,l}$で表される。
</p>

<p>
以下の操作を $T$回繰り返すことで、手持ちの種の価値の最大値 $\max (V_0, V_1, \cdots, V_{2N(N-1)-1})$をできるだけ大きくせよ。
</p>

<ul>

<li>
畑の $N^2$個のマスに1つずつ種を植える。同じ種を複数のマスに植えることはできず、植えなかった $2N(N-1)-N^2$個の種は全て破棄される。その後、上下左右に隣接するマスに植えられた種のペア $(k, k')$について、新たな評価項目ベクトルを持った新しい種が生成される。この評価項目ベクトルの $l$番目の要素の値は、もとの種の $x_{k,l}$および $x_{k',l}$から等確率でランダムに選ばれる。これによって生成された $2N(N-1)$個の種が新たな手持ちの種となる。
</li>

</ul>

<details>

<summary>
新しい種の生成の例
</summary>
例として、 $M=3$のときに種 $0$をマス $(0, 0)$に、種 $1$をマス $(0, 1)$に植えることを考える。種 $0$の評価項目ベクトルが $\boldsymbol{x_0}=(1, 2, 3)$、種 $1$の評価項目ベクトルが $\boldsymbol{x_1}=(4, 5, 6)$であったとすると、新しい種の評価項目ベクトルとしてありうるものは以下の $8$個である。


<ul>

<li>
$(1, 2, 3)$
</li>

<li>
$(1, 2, 6)$
</li>

<li>
$(1, 5, 3)$
</li>

<li>
$(1, 5, 6)$
</li>

<li>
$(4, 2, 3)$
</li>

<li>
$(4, 2, 6)$
</li>

<li>
$(4, 5, 3)$
</li>

<li>
$(4, 5, 6)$
</li>

</ul>
これら $8$個の評価項目ベクトルから等確率でランダムに $1$個が選ばれ、新しい種の評価項目ベクトルとなる。

</details>

</section>

</div>

<div>

<section>

### **得点**

<p>
最初に与えられる $2N(N-1)$個の種に対して、評価項目ベクトルの $l$番目の要素の最大値を $X_l=\max(x_{0,l}, x_{1, l}, \cdots, x_{2N(N-1)-1, l})$とする。 $T$回の操作終了後の手持ちの種の価値 $V_i$の最大値を $W=\max(V_0, V_1, \cdots, V_{2N(N-1)-1})$としたとき、 $\mathrm{round}(10^6\times W/\sum_{l=0}^{M-1}{X_l})$点が得られる。
</p>

<p>
テストケースは全部で 300 個あり、各テストケースの得点の合計が提出の得点となる。
一つ以上のテストケースで不正な出力や制限時間超過をした場合、提出全体の判定が
<span>
WA
</span>
や
<span>
TLE
</span>
となる。
コンテスト時間中に得た最高得点で最終順位が決定され、コンテスト終了後のシステムテストは行われない。 同じ得点を複数の参加者が得た場合、提出時刻に関わらず同じ順位となる。
</p>

</section>

</div>

<div>

<section>

### **入出力**

<p>

<strong>
※この問題はインタラクティブ形式である。以下の内容を読み、ジャッジプログラムとのやり取りを行うこと。
</strong>

</p>

<p>
まずはじめに、標準入力からグリッドの大きさ $N$、評価項目の数 $M$、操作回数 $T$、評価項目ベクトル $\boldsymbol{x_k}=(x_{k,0}, x_{k,1}, \cdots, x_{k,M-1})$が以下の形式で与えられる。
</p>

<div>

$N$$M$$T$$x_{0,0}$$\cdots$$x_{0,M-1}$$\vdots$$x_{2N(N-1)-1,0}$$\cdots$$x_{2N(N-1)-1,M-1}$
</div>

<p>
ここで、入力は以下の制約を満たす。
</p>

<ul>

<li>
$N=6$
</li>

<li>
$M=15$
</li>

<li>
$T=10$
</li>

<li>
$0\le x_{k,l}\le 100$
</li>

<li>
入力は全て整数
</li>

</ul>

<p>
上記の情報を読み込んだら、以下の処理を $T$ターン繰り返す。
</p>

<p>
各ターンでは、まず各マスにどの種を植えるかについて以下の形式で標準出力へ出力せよ。
</p>

<div>

$A_{0,0}$$\cdots$$A_{0,N-1}$$\vdots$$A_{N-1,0}$$\cdots$$A_{N-1,N-1}$
</div>

<p>
ここで、 $A_{i,j}$はマス $(i,j)$に植える種の番号を表し、 $0\le A_{i,j} \lt 2N(N-1)$を満たす整数である必要がある。同一ターン内で同じ $A_{i,j}$を複数回出力してはならない。
</p>

<p>
出力後、新たに生成された $2N(N-1)$個の種の評価項目ベクトルが以下の形式で標準入力から与えられる。
</p>

<div>

$x_{0,0}$$\cdots$$x_{0,M-1}$$\vdots$$x_{2N(N-1)-1,0}$$\cdots$$x_{2N(N-1)-1,M-1}$
</div>

<p>
ここで、評価項目ベクトルの各要素は $0\le x_{k,l}\le 100$を満たす整数である。
</p>

<p>

<strong>
出力の後には改行をし、更に標準出力を flush しなければならない。
</strong>
そうしない場合、
<span>
TLE
</span>
となる可能性がある。
</p>

<p>
解答プログラムは、`#`から始まるコメント行を出力に含めても良い。 Web版ビジュアライザを使用すると、コメント行を対応するタイミングで表示出来るため、デバッグや考察等に役立てることが出来る。 ジャッジプログラムはコメント行を全て無視するため、コメント行を出力するプログラムをそのまま提出可能である。
</p>

</section>

</div>

<div>

<section>

### **入出力例**

<p>
以下は入力の制約を満たさない説明用の入力である点に注意せよ。
</p>

<table>

<thead>

<tr>

<th>
ターン
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

3 5 10
42 45 29 50 53
19 35 91 0 11
35 83 30 9 31
28 18 20 28 88
0 52 21 66 51
24 9 35 10 89
57 27 13 73 24
22 2 5 78 59
66 67 27 18 12
81 38 24 21 32
89 21 32 16 19
6 27 9 67 68

</div>

</td>

</tr>

<tr>

<td>
0
</td>

<td>

<div>

5 4 7
8 9 0
11 2 6

</div>

</td>

<td>

<div>

0 52 21 10 89
0 52 21 78 59
66 67 24 18 32
81 38 24 50 32
6 27 30 67 31
57 27 13 73 24
24 9 27 10 12
81 52 24 21 51
42 45 5 50 53
66 27 27 67 68
35 83 30 9 31
42 27 13 73 53

</div>

</td>

</tr>

<tr>

<td>
1
</td>

<td>

<div>

6 8 11
3 9 1
7 2 5

</div>

</td>

<td>

<div>

42 45 5 10 12
42 45 13 73 53
66 38 24 50 32
66 52 27 67 68
81 52 24 18 32
66 67 13 18 32
81 38 27 10 12
42 27 5 50 68
0 52 13 78 53
81 52 24 50 32
66 67 27 67 32
0 52 13 78 59

</div>

</td>

</tr>

<tr>

<td>
$\vdots$
</td>

<td>

</td>

<td>

</td>

</tr>

<tr>

<td>
9
</td>

<td>

<div>

2 6 10
8 1 9
11 4 3

</div>

</td>

<td>

<div>

42 27 5 50 68
42 27 5 50 32
0 67 27 50 68
42 27 5 50 68
42 27 24 50 32
42 67 5 50 68
42 67 24 50 68
42 27 27 50 68
0 27 5 50 32
0 67 24 50 68
42 67 5 50 68
42 27 5 50 32

</div>

</td>

</tr>

</tbody>

</table>

<p>
この例では、 $W=V_6=42+67+24+50+68=251$、 $\sum_{l=0}^{M-1}{X_l}=89+83+91+78+89=430$であるため、 $583721$点が得られる。
</p>

<p>
<a href="https://img.atcoder.jp/ahc035/F5dI2O6U.html?lang=ja&seed=0&output=sample">例を見る</a>
</p>

</section>

</div>

<div>

<section>

### **サンプルプログラム(Python)**

<details>
Pythonでの解答例を示す。このプログラムでは、毎回0番目から35番目までの種を左上から右下に順番に並べて出力している。


```
N, M, T = map(int, input().split())
SEED_COUNT = 2 * N * (N - 1)
X = []

for i in range(SEED_COUNT):
    X.append(list(map(int, input().split())))

for t in range(T):
    A = [[0] * N for i in range(N)]

    for i in range(N):
        for j in range(N):
            A[i][j] = i * N + j

    for i in range(N):
        print(' '.join(map(str, A[i])), flush=True)

    X = []

    for i in range(SEED_COUNT):
        X.append(list(map(int, input().split())))
```

</details>

</section>

</div>

<div>

<section>

### **サンプルプログラム(C++)**

<details>
C++での解答例を示す。このプログラムでは、毎回0番目から35番目までの種を左上から右下に順番に並べて出力している。

```
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int N, M, T;
    cin >> N >> M >> T;

    int seed_count = 2 * N * (N - 1);
    vector<vector<int>> X(seed_count, vector<int>(M, 0));

    for (int i = 0; i < seed_count; i++) {
        for (int j = 0; j < M; j++) {
            cin >> X[i][j];
        }
    }

    for (int t = 0; t < T; t++) {
        vector<vector<int>> A(N, vector<int>(N, 0));

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                A[i][j] = i * N + j;
            }
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                cout << A[i][j];

                if (j < N - 1) {
                    cout << " ";
                } else {
                    cout << endl;
                }
            }
        }

        cout.flush();

        for (int i = 0; i < seed_count; i++) {
            for (int j = 0; j < M; j++) {
                cin >> X[i][j];
            }
        }
    }

    return 0;
}
```

</details>

</section>

</div>

<div>

<section>

### **入力生成方法**

<p>
<a href="https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83#%E6%A8%99%E6%BA%96%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83">標準正規分布</a>から値を生成する関数を $\mathrm{randnormal}()$と定義する。
</p>

<p>
各 $k=0, 1, \cdots, 2N(N-1)$に対して、以下のようにして $\boldsymbol{x_k}=(x_{k,0}, x_{k,1}, \cdots, x_{k,M-1})$を生成する。
</p>

<p>
$M$次元のベクトル $(x_{k,0}',\cdots,x_{k,M-1}')$を $x_{k,l}'=|\mathrm{randnormal}()|$により生成する。 $p_k=\frac{100}{\sqrt{\sum_{l=0}^{M-1}x_{k,l}'^2}}$として、 $x_{k,l}=\mathrm{round}(p_kx_{k,l}')$とする。
</p>

</section>

</div>

<div>

<section>

### **ツール(入力ジェネレータ・ローカルテスタ・ビジュアライザ)**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc035/F5dI2O6U.html?lang=ja">Web版</a>: ローカル版より高性能でアニメーション表示が可能です。
</li>

<li>
<a href="https://img.atcoder.jp/ahc035/F5dI2O6U.zip">ローカル版</a>: 使用するには<a href="https://www.rust-lang.org/ja">Rust言語</a>のコンパイル環境をご用意下さい。
<ul>

<li>
<a href="https://img.atcoder.jp/ahc035/F5dI2O6U_windows.zip">Windows用のコンパイル済みバイナリ</a>: Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
</li>

</ul>

</li>

</ul>

<p>
コンテスト期間中における、ビジュアライズ結果の共有や解法・考察に関する言及は禁止されています。ご注意下さい。
</p>

#### **ツールで用いられる入力ファイルの仕様**

<details>
ローカルテスタに与える入力ファイルは以下の形式を用いている。




<div>

$N$$M$$T$$x_{0,0}$$\cdots$$x_{0,M-1}$$\vdots$$x_{2N(N-1)-1,0}$$\cdots$$x_{2N(N-1)-1,M-1}$$u_{0,0,0}$$\cdots$$u_{0,0,N-2}$$\vdots$$u_{0,N-1,0}$$\cdots$$u_{0,N-1,N-2}$$v_{0,0,0}$$\cdots$$v_{0,0,N-1}$$\vdots$$v_{0,N-2,0}$$\cdots$$v_{0,N-2,N-1}$$\vdots$$u_{T-1,0,0}$$\cdots$$u_{T-1,0,N-2}$$\vdots$$u_{T-1,N-1,0}$$\cdots$$u_{T-1,N-1,N-2}$$v_{T-1,0,0}$$\cdots$$v_{T-1,0,N-1}$$\vdots$$v_{T-1,N-2,0}$$\cdots$$v_{T-1,N-2,N-1}$
</div>
ここで、 $u_{t,i,j}$および $v_{t,i,j}$は `0`, `1`からなる $M$文字の文字列であり、それぞれ以下を意味する。


<ul>

<li>
$u_{t,i,j}$の $l$文字目が `0`である場合、 $t$回目の操作で $(i,j)$と $(i, j+1)$に植えられた種 $A_{i,j}$および $A_{i,j+1}$から生成される新しい種の評価項目ベクトルの $l$番目の要素は $x_{A_{i,j},l}$となり、`1`である場合は $x_{A_{i,j+1},l}$となる。
</li>

<li>
$v_{t,i,j}$の $l$文字目が `0`である場合、 $t$回目の操作で $(i,j)$と $(i+1, j)$に植えられた種  $A_{i,j}$および $A_{i+1,j}$から生成される新しい種の評価項目ベクトルの $l$番目の要素は $x_{A_{i,j},l}$となり、`1`である場合は $x_{A_{i+1,j},l}$となる。
</li>

</ul>

</details>

</section>

</div>

</span>

</span>

</div>
