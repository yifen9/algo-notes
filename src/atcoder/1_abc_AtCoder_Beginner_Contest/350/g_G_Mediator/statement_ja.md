
<div>

<span>

<span>

<p>
配点 : $600$点
</p>

<div>

<section>

### **問題文**

<p>

<strong>
特殊な入力形式に注意してください。 また、メモリ制限が通常より小さいことに注意してください。
</strong>

</p>

<p>
頂点 $1,2,\dots,N$の $N$頂点からなる無向グラフがあり、最初辺はありません。

このグラフに対して、以下の $Q$個のクエリを処理してください。  
</p>

<p>



</p>

<div>

1 $u$$v$
</div>

<p>
タイプ $1$: 頂点 $u$と頂点 $v$との間に辺を追加する。

辺を追加する前の時点で、 $u$と $v$は異なる連結成分に属する。(すなわち、グラフは常に森である。)
</p>

<p>



</p>

<div>

2 $u$$v$
</div>

<p>
タイプ $2$: 頂点 $u$と頂点 $v$の双方に隣接する頂点があるならその番号を答え、無ければ $0$と答える。

グラフが常に森であることから、このクエリに対する解答は一意に定まることが示せる。
</p>

<p>



</p>

<p>
但し、上記のクエリは暗号化して与えられます。

本来のクエリは $3$つの整数 $A,B,C$として定義され、これをもとに暗号化されたクエリが $3$つの整数 $a,b,c$として与えられます。

タイプ $2$のクエリのうち、先頭から $k$個目のものに対する解答を $X_k$とします。 さらに、 $k = 0$に対して $X_k = 0$と定義します。

与えられた $a,b,c$から以下の通りに $A,B,C$を復号してください。  
</p>

<ul>

<li>
そのクエリより前に与えられたタイプ $2$のクエリの個数を $l$とする(そのクエリ自身は数えない)。このとき、以下の通りに復号せよ。
<ul>

<li>
$A = 1 + (((a \times (1+X_l)) \mod 998244353) \mod 2)$
</li>

<li>
$B = 1 + (((b \times (1+X_l)) \mod 998244353) \mod N)$
</li>

<li>
$C = 1 + (((c \times (1+X_l)) \mod 998244353) \mod N)$
</li>

</ul>

</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力は全て整数
</li>

<li>
$2 \le N \le 10^5$
</li>

<li>
$1 \le Q \le 10^5$
</li>

<li>
$1 \le u < v \le N$
</li>

<li>
$0 \le a,b,c < 998244353$
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

但し、 $\rm{Query}$$_i$は $i$個目のクエリを表す。
</p>

<div>

$N$$Q$$\rm{Query}$$_1$$\rm{Query}$$_2$$\vdots$$\rm{Query}$$_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
タイプ $2$のクエリの個数を $k$としたとき、全体で $k$行出力せよ。

そのうち $i$行目には、タイプ $2$のクエリのうち、先頭から $i$個目のものに対する解答を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6 12
143209915 123840720 97293110
89822758 207184717 689046893
67757230 270920641 26993265
952858464 221010240 871605818
730183361 147726243 445163345
963432357 295317852 195433903
120904472 106195318 615645575
817920568 27584394 770578609
38727673 250957656 506822697
139174867 566158852 412971999
205467538 606353836 855642999
159292205 319166257 51234344

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

0
2
0
2
6
0
1

</div>

<p>
全てのクエリを復号した後の入力は以下の通りです。
</p>

<div>

6 12
2 1 3
1 2 6
1 2 4
1 1 3
2 4 6
2 1 4
1 5 6
1 1 2
2 1 4
2 2 5
2 3 4
2 2 3

</div>

<p>
この入力について、グラフは $6$頂点であり、 $12$個のクエリが含まれます。
</p>

<ul>

<li>
$1$個目のクエリは `2 1 3`である。
<ul>

<li>
頂点 $1$と頂点 $3$の双方に隣接する頂点はないので、 $0$と答える。
</li>

</ul>

</li>

<li>
$2$個目のクエリは `1 2 6`である。
<ul>

<li>
頂点 $2$と頂点 $6$との間に辺を追加する。
</li>

</ul>

</li>

<li>
$3$個目のクエリは `1 2 4`である。
<ul>

<li>
頂点 $2$と頂点 $4$との間に辺を追加する。
</li>

</ul>

</li>

<li>
$4$個目のクエリは `1 1 3`である。
<ul>

<li>
頂点 $1$と頂点 $3$との間に辺を追加する。
</li>

</ul>

</li>

<li>
$5$個目のクエリは `2 4 6`である。
<ul>

<li>
頂点 $4$と頂点 $6$の双方に隣接する頂点は、頂点 $2$である。
</li>

</ul>

</li>

<li>
$6$個目のクエリは `2 1 4`である。
<ul>

<li>
頂点 $1$と頂点 $4$の双方に隣接する頂点はないので、 $0$と答える。
</li>

</ul>

</li>

<li>
$7$個目のクエリは `1 5 6`である。
<ul>

<li>
頂点 $5$と頂点 $6$との間に辺を追加する。
</li>

</ul>

</li>

<li>
$8$個目のクエリは `1 1 2`である。
<ul>

<li>
頂点 $1$と頂点 $2$との間に辺を追加する。
</li>

</ul>

</li>

<li>
$9$個目のクエリは `2 1 4`である。
<ul>

<li>
頂点 $1$と頂点 $4$の双方に隣接する頂点は、頂点 $2$である。
</li>

</ul>

</li>

<li>
$10$個目のクエリは `2 2 5`である。
<ul>

<li>
頂点 $2$と頂点 $5$の双方に隣接する頂点は、頂点 $6$である。
</li>

</ul>

</li>

<li>
$11$個目のクエリは `2 3 4`である。
<ul>

<li>
頂点 $3$と頂点 $4$の双方に隣接する頂点はないので、 $0$と答える。
</li>

</ul>

</li>

<li>
$12$個目のクエリは `2 2 3`である。
<ul>

<li>
頂点 $2$と頂点 $3$の双方に隣接する頂点は、頂点 $1$である。
</li>

</ul>

</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 1
377373366 41280240 33617925

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>


</div>

<p>
出力が空である場合もあります。
</p>

</section>

</div>

</span>

</span>

</div>
