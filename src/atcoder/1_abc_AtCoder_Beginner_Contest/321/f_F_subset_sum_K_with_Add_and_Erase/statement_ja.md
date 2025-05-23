
<div>

<span>

<span>

<p>
配点 : $525$点
</p>

<div>

<section>

### **問題文**

<p>
箱を用意します。最初、箱は空です。

この箱に対して、以下の $2$種類の操作を合計 $Q$個、入力で与えられた順に施します。  
</p>

<div>

+ $x$
</div>

<p>
タイプ $1$: 箱の中に整数 $x$の書かれたボールを $1$つ追加する。  
</p>

<div>

- $x$
</div>

<p>
タイプ $2$: 箱の中にある、整数 $x$の書かれたボールを $1$つ取り除く。


<strong>
但し、取り除く前の時点で箱の中に整数 $x$が書かれたボールが含まれることが保証されます。
</strong>

</p>

<p>



</p>

<p>
各操作後の箱に関して、以下の問題を解いてください。
</p>

<blockquote>

<p>
箱からボールをいくつか取り出して、ボールに書かれた整数の総和を $K$とする方法の総数を $998244353$で割った余りを求めてください。

但し、箱の中に入っている全てのボールは区別可能です。
</p>

</blockquote>

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
$1 \le Q \le 5000$
</li>

<li>
$1 \le K \le 5000$
</li>

<li>
タイプ $1$の操作に関して、 $1 \le x \le 5000$
</li>

<li>
全ての操作は問題文中の条件を満たす。
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

但し、 $\rm{Query}$$_{i}$は $i$個目の操作を表す。
</p>

<div>

$Q$$K$$\rm{Query}$$_{1}$$\rm{Query}$$_{2}$$\vdots$$\rm{Query}$$_{Q}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
全体で $Q$行出力せよ。

そのうち $i$行目には、 $i$個目までの操作を終えた時点での答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

15 10
+ 5
+ 2
+ 3
- 2
+ 5
+ 10
- 3
+ 1
+ 3
+ 3
- 5
+ 1
+ 7
+ 4
- 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

0
0
1
0
1
2
2
2
2
2
1
3
5
8
5

</div>

<p>
この入力には、操作が $15$個含まれます。
</p>

<p>
最後の操作の後、箱の中に入ったボールは $(5,10,1,3,1,7,4)$となります。

総和を $10$にする方法は以下の $5$通りです。
</p>

<ul>

<li>
$5+1+3+1$( $1,3,4,5$番目のボールを取り出す )
</li>

<li>
$5+1+4$( $1,3,7$番目のボールを取り出す )
</li>

<li>
$5+1+4$( $1,5,7$番目のボールを取り出す )
</li>

<li>
$10$( $2$番目のボールを取り出す )
</li>

<li>
$3+7$( $4,6$番目のボールを取り出す )
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
