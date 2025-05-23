
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
$1$から $N$の番号がついた $N$個の頂点と $1$から $M$の番号がついた $M$本の辺からなる連結な無向グラフが与えられます。
このグラフに多重辺は存在するかもしれませんが、自己ループはありません。
</p>

<p>
このグラフのそれぞれの辺には $1$以上 $N$以下の整数で表されるラベルがついています。
辺 $i$はラベル $c_i$がついており、頂点 $u_i,v_i$を双方向につなぐ辺です。
</p>

<p>
すぬけ君はそれぞれの頂点に $1$以上 $N$以下の整数を書き込んだのち(頂点に書き込まれた整数に重複があっても構いません)、以下の条件を満たす辺のみを残してそれ以外の辺を取り除くことにしました。
</p>

<p>

<strong>
条件
</strong>
：辺の両端の頂点に書き込まれた整数を $x,y$として、$x,y$のいずれか一方
<strong>
のみ
</strong>
が辺についたラベルと等しい
</p>

<p>
上記の条件を満たさない辺を取り除いたあとのグラフも連結のままであるような頂点への整数の書き込み方を 
<em>
よい書き込み方
</em>
と呼びます。よい書き込み方が存在するかどうかを判定し、存在するならばその一例を示してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 10^5$
</li>

<li>
$N-1 \leq M \leq 2 \times 10^5$
</li>

<li>
$1 \leq u_i,v_i,c_i \leq N$
</li>

<li>
与えられるグラフは連結
</li>

<li>
与えられるグラフに自己ループはない
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

$N$$M$$u_1$$v_1$$c_1$$\vdots$$u_M$$v_M$$c_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
よい書き込み方が存在しないならば `No`を出力せよ。
存在する場合、$N$行出力せよ。$i$行目には頂点 $i$に書き込む整数を出力せよ。
この書き込み方がよい書き込み方ならば正解となる。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 4
1 2 1
2 3 2
3 1 3
1 3 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
2
1

</div>

<ul>

<li>
頂点 $1,2,3$にそれぞれ $1,2,1$を書き込みます。
</li>

<li>
辺 $1$は頂点 $1,2$をつないでおり、ラベルが $1$です。
<ul>

<li>
頂点 $1$に書き込まれた整数のみが辺についたラベルと等しいため辺 $1$は取り除かれません。
</li>

</ul>

</li>

<li>
辺 $2$は頂点 $2,3$をつないでおり、ラベルが $2$です。
<ul>

<li>
頂点 $2$に書き込まれた整数のみが辺についたラベルと等しいため辺 $2$は取り除かれません。
</li>

</ul>

</li>

<li>
辺 $3$は頂点 $1,3$をつないでおり、ラベルが $3$です。
<ul>

<li>
どちらの頂点に書き込まれた整数も辺についたラベルと異なるため辺 $3$は取り除かれます。
</li>

</ul>

</li>

<li>
辺 $4$は頂点 $1,3$をつないでおり、ラベルが $1$です。
<ul>

<li>
どちらの頂点に書き込まれた整数も辺についたラベルと等しいため辺 $4$は取り除かれます。
</li>

</ul>

</li>

<li>
辺 $3,4$が取り除かれたあともグラフは連結なので、この書き込み方はよい書き込み方です。
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
