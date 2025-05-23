
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<blockquote>

<p>
この問題における 11/22 文字列の定義は A 問題および C 問題と同じです。
</p>

</blockquote>

<p>
文字列 $T$が以下の条件を全て満たすとき、$T$を 
<strong>
11/22 文字列
</strong>
と呼びます。
</p>

<ul>

<li>
$|T|$は奇数である。ここで、$|T|$は $T$の長さを表す。
</li>

<li>
$1$文字目から $\frac{|T|+1}{2} - 1$文字目までが `1`である。
</li>

<li>
$\frac{|T|+1}{2}$文字目が `/`である。
</li>

<li>
$\frac{|T|+1}{2} + 1$文字目から $|T|$文字目までが `2`である。
</li>

</ul>

<p>
例えば `11/22`, `111/222`, `/`は 11/22 文字列ですが、`1122`, `1/22`, `11/2222`, `22/11`, `//2/2/211`はそうではありません。
</p>

<p>
`1`, `2`, `/`からなる長さ $N$の文字列 $S$が与えられるので、$Q$個のクエリを処理してください。  
</p>

<p>
各クエリでは $L$, $R$が与えられます。$S$の $L$文字目から $R$文字目までからなる 
<strong>
(連続な)
</strong>
部分文字列を $T$としたとき、 11/22 文字列であるような $T$の 
<strong>
(連続とは限らない)
</strong>
部分列の長さの最大値を求めてください。そのような部分列が存在しないときは `0`を出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 10^5$
</li>

<li>
$1 \leq Q \leq 10^5$
</li>

<li>
$S$は `1`, `2`, `/`からなる長さ $N$の文字列
</li>

<li>
$1 \leq L \leq R \leq N$
</li>

<li>
$N, Q, L, R$は整数
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
入力は以下の形式で標準入力から与えられる。ここで $\mathrm{query}_i$は $i$番目のクエリを意味する。
</p>

<div>

$N$$Q$$S$$\mathrm{query}_1$$\mathrm{query}_2$$\vdots$$\mathrm{query}_Q$
</div>

<p>
各クエリは以下の形式で与えられる。
</p>

<div>

$L$$R$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$Q$行出力せよ。$i$行目には $i$番目のクエリへの答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

12 5
111/212/1122
1 7
9 12
3 6
4 10
1 12

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

5
0
3
1
7

</div>

<p>
$1$番目のクエリについて、$S$の $1$文字目から $7$文字目からなる部分文字列は `111/212`です。この文字列は `11/22`を部分列として含み、これは 11/22 文字列であるような部分列として最大です。よって答えは $5$です。

$2$番目のクエリについて、$S$の $9$文字目から $12$文字目からなる部分文字列は `1122`です。この文字列は 11/22 文字列であるような部分列を含まないので、答えは $0$です。
</p>

</section>

</div>

</span>

</span>

</div>
