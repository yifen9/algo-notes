
<div>

<span>

<span>

<div>

<section>

### **ストーリー**

<p>
AtCoder社の倉庫には $n$個のダンボール箱があり、$m$個の山に分けて垂直に積まれている。
各箱には $1,\cdots,n$の番号がちょうど一つずつ書かれており、番号の小さい方から1つずつ順番に倉庫から運び出したい。
ある箱を運び出すためには、その上に積まれている全ての箱を別の山へ移動させておく必要がある。
高橋社長はとても力持ちなので、積み重なった箱を一度に何箱でも持ち上げて動かすことが出来るが、持ち上げる箱の個数に応じて体力を消費してしまう。
出来るだけ体力消費が少なくなるような運び出し方を求めて欲しい。
</p>

</section>

</div>

<div>

<section>

### **問題文**

<p>
$1,\cdots,n$の番号がちょうど一つずつ書かれた $n$個のダンボール箱があり、$m$個の山に分けて積まれている。
番号 $v(1\leq v\leq n)$の書かれた箱を「箱 $v$」、左から $i(1\leq i\leq m)$番目の山を「山 $i$」と呼ぶことにする。
山の個数 $m$は $n$を割り切り、各山 $i$には $n/m$個の箱が垂直に積まれており、箱の番号は下から順に $b_{i,1},b_{i,2},\cdots,b_{i,n/m}$である。
</p>

<p>
以下の2種類の操作を最大で $5000$回繰り返すことが出来る。
</p>

<ol>

<li>
まだ運び出されていない箱 $v (1\leq v\leq n)$を一つ選ぶ。箱 $v$とその上に積まれている全ての箱を現在の山から取り除き、別の山 $i(1\leq i\leq m)$の上へそのままの順序で移動する。箱 $v$の属する山 $i'$に積まれている箱が下から順に $b_{i',1},\cdots,b_{i',h'}$であり、$b_{i',j}=v$であったとする。また、移動先の山 $i$に積まれている箱が下から順に $b_{i,1},\cdots,b_{i,h}$であったとする。この操作後に山 $i'$は $b_{i',1},\cdots,b_{i',j-1}$となり、山 $i$は $b_{i,1},\cdots,b_{i,h},b_{i',j},\cdots,b_{i',h'}$となる。この操作により動かした箱の個数を $k=h'-j+1$とすると、$k+1$の体力を消費する。$i=i'$の場合、この操作により何も変化せず、ただ体力を浪費する。
</li>

<li>
残っている全ての箱の中で一番小さい番号が $v$であり、箱 $v$が山の一番上に積まれているならば、箱 $v$を外に運び出すことが出来る。この操作は体力を消費しない。
</li>

</ol>

<p>
操作1で新たな山 $i>m$を作成することは出来ないが、操作 $2$によって全ての箱が運び出されて空となった山 $i(1\leq i\leq m)$のスペースに操作1で箱を移動させることは可能である。
</p>

<p>
全ての箱を運び出す操作列であって、合計の体力消費量が出来るだけ少ないものを求めて欲しい。
</p>

</section>

</div>

<div>

<section>

### **得点**

<p>
$5000$回以下の操作回数で全ての箱を運び出すことが出来た場合、合計の体力消費量を $V$として、$\max(1, 10000-V)$の得点が得られる。
全ての箱を運び出すことが出来なかった場合や、不正な操作列(範囲外の値や既に運び出された箱を指定、もしくは操作2で条件を満たさない箱を指定)を出力した場合、
<span>
WA
</span>
と判定される。
</p>

<p>
合計で 150 個のテストケースがあり、各テストケースの得点の合計が提出の得点となる。
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

---

<div>

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$n$$m$$b_{1,1}$$\cdots$$b_{1,n/m}$$\vdots$$b_{m,1}$$\cdots$$b_{m,n/m}$
</div>

<p>
箱の個数 $n$と山の個数 $m$は全てのテストケースで $n=200$、
<font color="red">$m=10$</font>
で固定である。
$b_{i,j}$は山 $i$の下から $j$番目の箱の番号を表し、$1\leq b_{i,j}\leq n$を満たす。
</p>

</section>

</div>

<div>

<section>

### **出力**

<p>
$k$回目の操作を2つの整数 $(v_k,i_k)$によって以下のように表す。
</p>

<ol>

<li>
操作1を用いて箱 $v(1\leq v\leq n)$とその上に積まれている全ての箱を別の山 $i(1\leq i\leq m)$に移動する場合、$(v_k,i_k)=(v,i)$。
</li>

<li>
操作2を用いて箱 $v$を運び出す場合、$(v_k,i_k)=(v,0)$。
</li>

</ol>

<p>
求めた操作列を $(v_1,i_1),\cdots,(v_K,i_K)$($K\leq 5000$) としたとき、以下の形式で標準出力に出力せよ。
</p>

<div>

$v_1$$i_1$$\vdots$$v_K$$i_K$
</div>

<p>
<a href="https://img.atcoder.jp/ahc026/lPQezTZx.html?lang=ja&seed=0&output=sample">例を見る</a>
</p>

</section>

</div>

<div>

<section>

### **入力生成方法**

<p>
箱の番号は $1,\cdots,n$の整数をランダムな順に並び替え、$n/m$個ずつに区切ることにより生成される。
</p>

</section>

</div>

<div>

<section>

### **ツール(入力ジェネレータ・ビジュアライザ)**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc026/lPQezTZx.html?lang=ja">Web版</a>: ローカル版より高性能でアニメーション表示が可能です。
</li>

<li>
<a href="https://img.atcoder.jp/ahc026/lPQezTZx.zip">ローカル版</a>: 使用するには<a href="https://www.rust-lang.org/ja">Rust言語</a>のコンパイル環境をご用意下さい。
<ul>

<li>
<a href="https://img.atcoder.jp/ahc026/lPQezTZx_windows.zip">Windows用のコンパイル済みバイナリ</a>: Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
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

</span>

</span>

</div>
