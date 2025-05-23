
<div>

<span>

<span>

<div>

<section>

### **ストーリー**

<p>
AtCoder社は最短路アルゴリズムを活用した道案内アプリを開発している。
サービスの対象エリアは30×30個の頂点をグリッド状に繋いだ道路網で表される。
ユーザーが現在位置の頂点と目的地の頂点を指定すると、アプリはその間の最短経路を出力する予定だ。
困ったことに、アプリのリリース予定日が迫っているにもかかわらず、最短経路の計算に必要不可欠な各辺の長さの計測が全く出来ていない。
そこで、事前に辺の長さを計測することを諦め、最短でないパスの出力も許すことにした。
ユーザーが目的地に到着するまでに実際にかかった時間の情報をもとに、出力した各辺の長さを推測することで、徐々に性能の改善が可能であるはずだ。
</p>

</section>

</div>

<div>

<section>

### **問題文**

<p>
辺の長さが未知の30×30頂点の無向グリッドグラフがある。
一番左上の頂点を $(0,0)$とし、そこから下方向に $i$回、右方向に $j$回移動した先の頂点を $(i, j)$とする。
以下のクエリを1000個処理せよ。
</p>

<p>
$k$番目のクエリでは、まずはじめに、標準入力から頂点 $s_k=(si_k,sj_k)$と $t_k=(ti_k,tj_k)$が以下の形式で与えられる。
</p>

<div>

$si_k$$sj_k$$ti_k$$tj_k$
</div>

<p>
入力を読み込んだら、あなたのプログラムは $s_k$から $t_k$へのパス $P_k$を1つ求める。
$(i, j)$から $(i-1,j)$, $(i+1,j)$, $(i,j-1)$, $(i,j+1)$の頂点への移動をそれぞれ `U`, `D`, `L`, `R`として、$P_k$を文字列で表し、標準出力に一行で出力せよ。

<strong>
出力のあとは標準出力を flush しなければならない。
</strong>
そうしない場合、`TLE`となる可能性がある。
</p>

<p>
パスが出力されると、ジャッジプログラムはパスの長さ $b_k$を計算し、$0.9$以上 $1.1$以下の一様乱数 $e_k$を生成して、整数値 $\mathrm{round}(b_k\times e_k)$を標準入力に与える。
それを読み込むことで$k$番目のクエリが終了し、$k+1$番目のクエリへ進む。
</p>

</section>

</div>

<div>

<section>

### **例**

<table>

<thead>

<tr>

<th>
Input
</th>

<th>
Output
</th>

</tr>

</thead>

<tbody>

<tr>

<td>

<div>

3 19 16 17
</div>

</td>

<td>

</td>

</tr>

<tr>

<td>

</td>

<td>

<div>

DDDDDDDDDDDDDLL
</div>

</td>

</tr>

<tr>

<td>

<div>

99561
</div>

</td>

<td>

</td>

</tr>

<tr>

<td>

<div>

26 18 13 18
</div>

</td>

<td>

</td>

</tr>

<tr>

<td>

</td>

<td>

<div>

UUUUUUUUUUUUU
</div>

</td>

</tr>

<tr>

<td>

<div>

72947
</div>

</td>

<td>

</td>

</tr>

</tbody>

</table>

</section>

</div>

<div>

<section>

### **得点**

<p>
$k$番目 ($1\leq k\leq 1000$) のクエリに対する最短路長を $a_k$、出力されたパスの長さを $b_k$とすると、以下の得点が得られる。
</p>

<p>
$\mathrm{round}(2312311\times \sum_{k=1}^{1000}0.998^{1000-k} \frac{a_k}{b_k})$
</p>

<p>
各テストケースの得点の合計が提出の得点となる。
不正なパス(同じ頂点を複数回通る、30×30の外へはみ出す、sからtへのパスでない)が出力された場合、`WA`と判定される。
コンテスト終了後に一番最後の提出に対してシステムテストが行われ、最終順位が決定される。
</p>

<ul>

<li>
暫定テストは100個のテストケースを用いる。1つ以上のテストケースで`AC`以外の判定がされた場合、提出の得点は0点となる。
</li>

<li>
システムテストは3000個のテストケースを用いる。`AC`以外の判定がされた場合、そのテストケースのみ0点となる。コンテスト終了後に<a href="https://img.atcoder.jp/ahc003/seeds.txt">seeds.txt</a>(md5=0cf5051d586e7f62c0b3527f6f7fbb1c)を公開
</li>

</ul>

</section>

</div>

<div>

<section>

### **入力生成方法**

<p>
$L$以上 $U$以下の整数値を一様ランダムに生成する関数を $\mathrm{rand}(L,U)$で表す。
まずはじめに、2つのパラメータ $D=\mathrm{rand}(100, 2000)$と $M=\mathrm{rand}(1, 2)$を生成する。
頂点 $(i, j)$と $(i,j+1)$を結ぶ辺の長さを $h_{i,j}$、頂点 $(i, j)$と $(i+1,j)$を結ぶ辺の長さを $v_{i,j}$とする。
</p>

#### **$h_{i,j}$の生成**

<ol>

<li>
各 $i\in\{0,\ldots,29\}$, $p\in\{0,\ldots,M-1\}$に対して独立に乱数値 $H_{i,p}=\mathrm{rand}(1000+D,9000-D)$を生成する。
</li>

<li>
各 $i\in\{0,\ldots,29\}$, $j\in\{0,\ldots,28\}$に対して独立に乱数値 $\delta_{i,j}=\mathrm{rand}(-D,D)$を生成する。
</li>

<li>
$M=1$の場合は、各 $i\in\{0,\ldots,29\}$, $j\in\{0,\ldots,28\}$に対して $h_{i,j}=H_{i,0}+\delta_{i,j}$と設定する。
</li>

<li>
$M=2$の場合は、各 $i\in\{0,\ldots,29\}$に対して乱数 $x_i=\mathrm{rand}(1,28)$を生成し、$j\in\{0,\ldots,x_i-1\}$に対しては $h_{i,j}=H_{i,0}+\delta_{i,j}$、$j\in\{x_i,\ldots,28\}$に対しては $h_{i,j}=H_{i,1}+\delta_{i,j}$と設定する。
</li>

</ol>

#### **$v_{i,j}$の生成**

<ol>

<li>
各 $j\in\{0,\ldots,29\}$, $p\in\{0,\ldots,M-1\}$に対して独立に乱数値 $V_{j,p}=\mathrm{rand}(1000+D,9000-D)$を生成する。
</li>

<li>
各 $i\in\{0,\ldots,28\}$, $j\in\{0,\ldots,29\}$に対して独立に乱数値 $\gamma_{i,j}=\mathrm{rand}(-D,D)$を生成する。
</li>

<li>
$M=1$の場合は、各 $j\in\{0,\ldots,29\}$, $i\in\{0,\ldots,28\}$に対して $v_{i,j}=V_{j,0}+\gamma_{i,j}$と設定する。
</li>

<li>
$M=2$の場合は、各 $j\in\{0,\ldots,29\}$に対して乱数 $y_j=\mathrm{rand}(1,28)$を生成し、$i\in\{0,\ldots,y_j-1\}$に対しては $v_{i,j}=V_{j,0}+\gamma_{i,j}$、$i\in\{y_j,\ldots,28\}$に対しては $v_{i,j}=V_{j,1}+\gamma_{i,j}$と設定する。
</li>

</ol>

#### **$s_k$, $t_k$の生成**

<p>
クエリで与えられる頂点 $s_k$と$t_k$は、全ての頂点の中から一様ランダムに選択される。
$s_k$と $t_k$のマンハッタン距離 $|si_k-ti_k|+|sj_k-tj_k|$が10未満の場合は、10以上になるまで選択を繰り返す。
</p>

</section>

</div>

<div>

<section>

### **ツール**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc003/c1ae4a8996958aa31f5f9d3aa3f51033.zip">ローカルテスタ</a>: 使用するには、<a href="https://www.rust-lang.org/ja">Rust 言語</a>のコンパイル環境をご用意下さい。
</li>

<li>
<a href="https://img.atcoder.jp/ahc003/e7eb814463364c249c93216eee64275.html">ビジュアライザ</a>
</li>

<li>
<a href="https://img.atcoder.jp/ahc003/499df4d8fb8c9326c7b718917d14f17a.zip">入力データ</a>: 上のローカルテスタを使用しない場合は、こちらのローカルテスト用の100個の入力データ(seed 0-99)を利用することも出来ます。これらの入力は実際のテストケースとは異なります。入力データは以下のフォーマットとなっており、各自でジャッジ用のプログラムを書いてご利用下さい。
</li>

</ul>

<div>

$h_{0,0}$$\ldots$$h_{0,28}$$\vdots$$h_{29,0}$$\ldots$$h_{29,28}$$v_{0,0}$$\ldots$$v_{0,29}$$\vdots$$v_{28,0}$$\ldots$$v_{28,29}$$si_1$$sj_1$$ti_1$$tj_1$$a_1$$e_1$$\vdots$$si_{1000}$$sj_{1000}$$ti_{1000}$$tj_{1000}$$a_{1000}$$e_{1000}$
</div>

#### **ジャッジ用プログラムの例(疑似コード)**

<div>

string query(s, t, prev_result) {
    // WRITE YOUR SOLUTION HERE
}

int main() {
    if (LOCAL_TEST) {
        read_h_v();
    }
    prev_result = 0;
    score = 0.0;
    for (int k = 0; k < 1000; k++) {
        if (LOCAL_TEST) {
            read_s_t_a_e();
        } else {
            read_s_t();
        }
        path = query(s, t, prev_result);
        print(path);
        if (LOCAL_TEST) {
            b = compute_path_length(path);
            score = score * 0.998 + a / b;
            prev_result = round(b * e);
        } else {
            prev_result = read_result();
        }
    }
    if (LOCAL_TEST) {
        print(round(2312311 * score));
    }
    return 0;
}

</div>

</section>

</div>

</span>

</span>

</div>
