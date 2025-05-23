
<div>

<span>

<span>

<p>
配点 : $475$点
</p>

<div>

<section>

### **問題文**

<p>
$N$台のルーレットがあります。
$i$番目 $(1\leq i\leq N)$のルーレットには $P _ i$個の整数 $S _ {i,1},S _ {i,2},\ldots,S _ {i,P _ i}$が書かれており、$C _ i$円支払うことで $1$回プレイできます。
$i$番目のルーレットを $1$回プレイすると、$1$以上 $P _ i$以下の整数 $j$が一様ランダムに選ばれ、$S _ {i,j}$ポイントを得ることができます。
</p>

<p>
ルーレットで得られるポイントは、過去の結果と独立に決まります。
</p>

<p>
高橋くんは、ポイントを $M$ポイント以上獲得したいです。
高橋くんは、$M$ポイント以上獲得するまでに支払う金額をなるべく小さくするように行動します。
ただし、高橋くんはルーレットをプレイするたびこれまでのルーレットの結果を見て次にプレイするルーレットを選ぶことができます。
</p>

<p>
高橋くんがポイントを $M$ポイント以上獲得するまでに支払う金額の期待値を求めてください。
</p>

<details>

<summary>
より厳密な定義
</summary>

<p>
より厳密には、次のようになります。
高橋くんがルーレットを選ぶ戦略を決めるごとに、その戦略で $M$ポイント以上獲得するまでに支払う金額の期待値 $E$が次のように定義されます。
</p>

<ul>

<li>
自然数 $X$に対して、その戦略に従って高橋くんが $M$ポイント以上獲得するか、ルーレットを $X$回プレイするまでに支払う金額の期待値を $f(X)$とする。$E=\displaystyle\lim _ {X\to+\infty}f(X)$とする。
</li>

</ul>

<p>
この問題の条件のもとで、高橋くんがどのような戦略をとっても $\displaystyle\lim _ {X\to+\infty}f(X)$が有限の値になることが証明できます。
高橋くんが $E$を最小にするような戦略をとったときの $E$の値を求めてください。
</p>

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq 100$
</li>

<li>
$1\leq M\leq 100$
</li>

<li>
$1\leq C _ i\leq 10 ^ 4\ (1\leq i\leq N)$
</li>

<li>
$1\leq P _ i\leq 100\ (1\leq i\leq N)$
</li>

<li>
$0\leq S _ {i,j}\leq M\ (1\leq i\leq N,1\leq j\leq P _ i)$
</li>

<li>
$\displaystyle\sum _ {j=1}^{P _ i}S _ {i,j}\gt0\ (1\leq i\leq N)$
</li>

<li>
入力はすべて整数
</li>

</ul>

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

$N$$M$$C _ 1$$P _ 1$$S _ {1,1}$$S _ {1,2}$$\ldots$$S _ {1,P _ 1}$$C _ 2$$P _ 2$$S _ {2,1}$$S _ {2,2}$$\ldots$$S _ {2,P _ 2}$$\vdots$$C _ N$$P _ N$$S _ {N,1}$$S _ {N,2}$$\ldots$$S _ {N,P _ N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋くんが $M$ポイント以上獲得するまでに支払う金額の期待値を $1$行で出力せよ。
出力された値と真の値の相対誤差もしくは絶対誤差が $10 ^ {-5}$以下のとき、正答と判定される。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 14
100 2 5 9
50 4 1 2 4 8
70 5 2 4 2 8 8

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

215.913355350494384765625

</div>

<p>
例えば、高橋くんはルーレットを次のようにプレイすることができます。
</p>

<ul>

<li>
$50$円を支払ってルーレット $2$をプレイする。$S _ {2,4}=8$ポイントを得る。
</li>

<li>
$50$円を支払ってルーレット $2$をプレイする。$S _ {2,1}=1$ポイントを得る。
</li>

<li>
$100$円を支払ってルーレット $1$をプレイする。$S _ {1,1}=5$ポイントを得る。得たポイントの合計が $8+1+5\geq14$ポイントとなったため、終了する。
</li>

</ul>

<p>
この例では、$14$ポイントを得るまでに $200$円を支払っています。
</p>

<p>
出力と真の値の相対誤差もしくは絶対誤差が $10 ^ {-5}$以下のとき正答と判定されるため、`215.9112`や `215.9155`などと出力しても正解になります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 100
1 2 1 2
10 6 0 0 0 0 0 100

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

60

</div>

<p>
$100$ポイントが出るまでルーレット $2$を回し続けるのが最適です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

20 90
3252 9 0 4 2 7 3 2 3 2 4
2147 1 1
4033 8 0 4 1 7 5 2 5 0
3795 6 6 6 2 3 2 2
3941 7 2 4 4 7 2 0 5
2815 6 2 1 0 5 2 2
3020 2 3 6
3858 9 4 2 7 3 0 4 4 6 5
4533 10 3 6 4 0 6 4 4 2 7 7
4198 8 6 7 0 6 3 6 5 6
3739 8 2 7 1 5 1 4 4 7
2465 4 1 4 0 1
4418 9 7 6 2 4 6 1 5 0 7
5450 12 0 4 4 7 7 4 4 5 4 5 3 7
4196 9 1 6 5 5 7 2 3 6 3
4776 9 2 2 7 3 6 6 1 6 6
2286 3 3 5 6
3152 3 4 1 5
3509 7 0 6 7 0 1 0 3
2913 6 0 1 5 0 5 6

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

45037.072314895291126319493887599716

</div>

</section>

</div>

</span>

</span>

</div>
