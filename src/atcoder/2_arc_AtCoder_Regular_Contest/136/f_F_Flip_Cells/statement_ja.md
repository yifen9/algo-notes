
<div>

<span>

<span>

<p>
配点 : $1000$点
</p>

<div>

<section>

### **問題文**

<p>
$H$行 $W$列からなる盤面があり，各マスには `0`か `1`が書き込まれています．
盤面の状態は $H$個の文字列 $S_1,S_2,\cdots,S_H$で表され，
$S_i$の $j$文字目が，上から $i$行目，左から $j$列目のマスに書かれている数字を表します．
</p>

<p>
すぬけくんはこれから，次の操作を繰り返します．
</p>

<ul>

<li>
一つのマス目を一様ランダムに選ぶ．
そして，そのマス目に書かれている値を flip する．（つまり，`0`ならば `1`に変え，`1`ならば `0`に変える）
</li>

</ul>

<p>
ところで，すぬけ君は整数列 $A=(A_1,A_2,\cdots,A_H)$が大好きです．
そのため，以下の条件が満たされた瞬間，操作を終了します．
</p>

<ul>

<li>
すべての $i$($1 \leq i \leq H$) について，$i$行目にある `1`の個数がちょうど $A_i$である．
</li>

</ul>

<p>
特に，操作を $0$回しか行わないこともありえます．
</p>

<p>
すぬけくんが行う操作回数の期待値を $\text{mod }{998244353}$で求めてください．
</p>

<details>

<summary>
期待値 $\text{mod }{998244353}$の定義
</summary>

<p>
求める期待値は必ず有理数になることが証明できます。 また、この問題の制約のもとでは、その値を既約分数 $\frac{P}{Q}$で表した時、$Q \not \equiv 0 \pmod{998244353}$となることも証明できます。 よって、$R \times Q \equiv P \pmod{998244353}, 0 \leq R < 998244353$を満たす整数 $R$が一意に定まります。 この $R$を答えてください。


</p>

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq H,W \leq 50$
</li>

<li>
$S_i$は `0`, `1`からなる長さ $W$の文字列
</li>

<li>
$0 \leq A_i \leq W$
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
入力は以下の形式で標準入力から与えられる．
</p>

<div>

$H$$W$$S_1$$S_2$$\vdots$$S_H$$A_1$$A_2$$\cdots$$A_H$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ．
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

1 2
01
0

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3

</div>

<p>
操作の様子は以下のようになります．
</p>

<ul>

<li>
確率 $1/2$で `1`の書かれたマスを flip する．$1$行目にある `1`の個数が $0$になり，操作が終了する．
</li>

<li>
確率 $1/2$で `0`の書かれたマスを flip する．$1$行目にある `1`の個数は $2$になり，操作は継続する．
<ul>

<li>
いずれかのマスを flip する．flip したマスに依らず，$1$行目にある `1`の個数は $1$になり，操作は継続する．
<ul>

<li>
確率 $1/2$で `1`の書かれたマスを flip する．$1$行目にある `1`の個数が $0$になり，操作が終了する．
</li>

<li>
確率 $1/2$で `0`の書かれたマスを flip する．$1$行目にある `1`の個数は $2$になり，操作は継続する．
</li>

<li>
$\vdots$
</li>

</ul>

</li>

</ul>

</li>

</ul>

<p>
操作回数の期待値は $3$になります．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 3
000
100
110
0 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

2 2
00
01
1 0

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

332748127

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

5 4
1101
0000
0010
0100
1111
1 3 3 2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

647836743

</div>

</section>

</div>

</span>

</span>

</div>
