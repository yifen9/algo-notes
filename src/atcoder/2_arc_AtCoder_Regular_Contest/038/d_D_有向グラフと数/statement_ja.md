
<div>

<div>

<div>

<section>

### **問題文**

<p>
$N$頂点 $M$辺の有向グラフがあります。このグラフの頂点 $i$には、整数 $X_i$が書かれています。ゲーム好きな兄妹がこのグラフと $1$つのチェスの駒を使ってゲームをしようとしています。
</p>

<ul>

<li>
最初、駒を頂点 $1$に置く。
</li>

<li>
プレイヤーは自分のターンに、以下のいずれかちょうど $1$つの操作をしなければならない。
		
<ul>

<li>

<strong>
移動
</strong>
: 駒を別の頂点にちょうど $1$回移動させる。駒が頂点 $i$にある場合は、頂点 $i$から頂点 $j$に向かう辺があるような頂点 $j$にのみ移動させることができる。
			
</li>

<li>

<strong>
終了宣言
</strong>
: ゲームを終了させる。
			
</li>

</ul>

</li>

<li>
交互にターンを繰り返し、どちらかのプレイヤーが終了宣言をするか、後手が $10^9$回移動をさせた直後の時点でゲームは終了となり、その時点で駒がある頂点に書かれた整数がこのゲームの 
		
<strong>
スコア
</strong>
となる。
	
</li>

</ul>

<p>
先手のプレイヤーがスコアを出来るだけ大きくするような行動を取り、後手のプレイヤーがスコアを出来るだけ小さくするような行動を取るとき、ゲームのスコアはいくつになるでしょうか？
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

$N$$M$$X_1$$X_2$... $X_N$$A_1$$B_1$$A_2$$B_2$:
$A_M$$B_M$
</div>

<ul>

<li>
$1$行目には、グラフの頂点の個数を表す整数 $N (1 ≦ N ≦ 100,000)$と辺の個数を表す $M (1 ≦ M ≦ 200,000)$が空白区切りで与えられる。
</li>

<li>
$2$行目には、各頂点に書かれた整数を表す $N$個の整数が空白区切りで与えられる。このうち $i (1 ≦ i ≦ N)$番目の整数 $X_i (0 ≦ X_i ≦ 10^9)$は、頂点 $i$に書かれた整数を表す。
</li>

<li>
$3$行目からの $M$行には、辺の情報が与えられる。このうち $i (1 ≦ i ≦ M)$行目には、$2$つの整数 $A_i,B_i (1 ≦ A_i ≦ N, 1 ≦ B_i ≦ N, A_i \neq B_i)$が空白区切りで与えられる。これは、グラフに頂点 $A_i$から頂点 $B_i$に向かう有向辺があることを表す。ただし、同じ辺が $2$回与えられることはないこと、すなわち $p \neq q$のとき $A_p \neq A_q$または $B_p \neq B_q$が成り立つことが保証される。
</li>

</ul>

</section>

</div>

<div>

<section>

### **部分点**

<p>
この問題には部分点が設定されている。
</p>

<ul>

<li>
$N ≦ 1000$かつ $M ≦ 2000$を満たすデータセット $1$に正解した場合は、$30$点が与えられる。
</li>

<li>
全てのテストケースに正解した場合は、上記とは別に $70$点が与えられる。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
ゲームのスコアを $1$行に出力せよ。出力の末尾に改行を入れること。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

<div>

3 3
1 3 2
1 2
2 3
3 1

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

2

</div>

<p>
この例では、ゲームは以下のように進行します。
</p>

<ul>

<li>
先手が移動を選択し、駒を頂点 $1$から頂点 $2$に移動させる。
</li>

<li>
後手が移動を選択し、駒を頂点 $2$から頂点 $3$に移動させる。
</li>

<li>
先手が終了宣言を選択し、ゲームを終了させる。このときスコアは $2$となる。
</li>

</ul>

<p>
先手がどのような行動を取っても、後手が適切な行動を取ることによってスコアを $2$より大きくすることは出来ません。
</p>

<p>
また、後手がどのような行動を取っても、先手が適切な行動を取ることによってスコアを $2$より小さくすることは出来ません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

4 5
1 3 2 1
1 2
2 3
3 1
2 4
4 3

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

1

</div>

<p>
この例では、ゲームは以下のように進行します。
</p>

<ul>

<li>
先手が移動を選択し、駒を頂点 $1$から頂点 $2$に移動させる。
</li>

<li>
後手が移動を選択し、駒を頂点 $2$から頂点 $4$に移動させる。
</li>

<li>
先手が移動を選択し、駒を頂点 $4$から頂点 $3$に移動させる。
</li>

<li>
後手が移動を選択し、駒を頂点 $3$から頂点 $1$に移動させる。
</li>

<li>
先手が移動を選択し、駒を頂点 $1$から頂点 $2$に移動させる。
</li>

<li>
後手が移動を選択し、駒を頂点 $2$から頂点 $4$に移動させる。
</li>

<li>
（上の流れをしばらく繰り返す）
</li>

<li>
後手が $10^9$回目の移動を選択し、駒を頂点 $3$から頂点 $1$に移動させる。
</li>

<li>
この時点でゲームが終了し、スコアは $1$となる。
</li>

</ul>

<p>
先手がどのような行動を取っても、後手が適切な行動を取ることによってスコアを $1$より大きくすることは出来ません。
</p>

<p>
また、後手がどのような行動を取っても、先手が適切な行動を取ることによってスコアを $1$より小さくすることは出来ません。
</p>

</section>

</div>

</div>

</div>
