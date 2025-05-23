
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
長さ $n$の文字列 $X$に対して、$X$を $k$回繰り返して得られる文字列を $f(X,k)$と表記し、$X$の $1$文字目、$2$文字目、$\dots$、$n$文字目を $k$回ずつこの順に繰り返して得られる文字列を $g(X,k)$と表記します。
例えば、$X=$`abc`のとき、$f(X,2)=$`abcabc`、$g(X,3)=$`aaabbbccc`です。
また、任意の文字列 $X$に対して、$f(X,0)$と $g(X,0)$は共に空文字列です。
</p>

<p>
正整数 $N$および文字列 $S,T$が与えられます。
$g(T,k)$が $f(S,N)$の（連続とは限らない）部分列であるような最大の非負整数 $k$を求めてください。
なお、定義より、$g(T,0)$は常に $f(S,N)$の部分列であることに注意してください。
</p>

<details>

<summary>
部分列とは
</summary>
文字列 $X$の（連続とは限らない）部分列とは、$X$から $0$個以上の文字を取り除いた後、残りの文字を元の順序で連結して得られる文字列のことをいいます。  
例えば、`ac`、`atcoder`、``（空文字列）などはどれも `atcoder`の部分列ですが、`ta`は `atcoder`の部分列ではありません。 

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$N$は整数
</li>

<li>
$1\leq N\leq 10^{12}$
</li>

<li>
$S, T$は英小文字からなる長さ $1$以上 $10^5$以下の文字列
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

$N$$S$$T$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$g(T,k)$が $f(S,N)$の（連続とは限らない）部分列であるような最大の非負整数 $k$を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3
abc
ab

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<p>
$f(S,3)=$`abcabcabc`です。
$g(T,2)=$`aabb`は $f(S,3)$の部分列ですが、$g(T,3)=$`aaabbb`は $f(S,3)$の部分列ではないので、$2$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3
abc
arc

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

1000000000000
kzazkakxkk
azakxk

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

344827586207

</div>

</section>

</div>

</span>

</span>

</div>
