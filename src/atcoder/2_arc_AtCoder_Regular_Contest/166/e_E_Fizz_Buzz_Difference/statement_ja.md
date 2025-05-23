
<div>

<span>

<span>

<p>
配点 : $800$点
</p>

<div>

<section>

### **問題文**

<p>
正整数 $n, a, b$であって，$a<b$を満たすものが与えられます．
</p>

<p>
$1\leq L\leq R$を満たす整数の組 $(L,R)$が
<strong>
良い組
</strong>
であるとは，次の条件が成り立つことをいいます．
</p>

<ul>

<li>
$L$以上 $R$以下の整数のうちで $a$の倍数であるものの個数を $n_a$，$b$の倍数であるものの個数を $n_b$とするとき，$n_a - n_b = n$が成り立つ．
</li>

</ul>

<p>
良い組は必ず存在することが証明できます．良い組のうち，$R-L$が最大であるものを答えてください．そのような組が複数存在する場合には，さらにそのうちで $L$が最小であるものを答えてください（$1\leq L$より $L$が最小のものが存在し，答えるべき $(L, R)$は一意に定まります）．
</p>

<p>
$T$個のテストケースが与えられるので，それぞれについて答えを求めてください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq T\leq 2\times 10^5$
</li>

<li>
$1\leq n \leq 10^6$
</li>

<li>
$1\leq a < b \leq 10^6$
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
入力は以下の形式で標準入力から与えられます．
</p>

<div>

$T$$\text{case}_1$$\vdots$$\text{case}_T$
</div>

<p>
各テストケースは以下の形式で与えられます．
</p>

<div>

$n$$a$$b$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力してください．$i$行目には $i$番目のテストケースについて，答えとなる組 $(L,R)$を次の形式で出力してください．
</p>

<div>

$L$$R$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

1
3 3 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4 35

</div>

<p>
$(L,R)=(4,35)$は，$n_a=10, n_b=7$より良い組です．
</p>

<p>
他には例えば $(1,26)$, $(10,41)$などの良い組があります．このうち $(1,26)$は $R-L$が最大ではないので答えではありません．また $(10,41)$は $R-L$は最大ですが，$L$が最小ではないので答えではありません．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
4 3 5
6 2 4
1 1 2
123 456 789
9876 54 321

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

10 50
3 29
2 4
5473 140447
163 641411

</div>

</section>

</div>

</span>

</span>

</div>
