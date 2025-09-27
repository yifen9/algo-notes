
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
長さ $N$の英小文字列 $T$が与えられます。
</p>

<p>
以下の条件をすべて満たす文字列の列 $s=(s_0,s_1,\ldots,s_N)$の個数を $998244353$で割った余りを出力してください。
</p>

<ul>

<li>
$s_0$は空文字列
</li>

<li>
$i=1,2,\ldots,N$に対し、$s_{i}$は $s_{i-1}$の好きな位置（先頭や末尾でもよい）に好きな文字を $1$文字挿入することで得られる文字列
</li>

<li>
$s_N=T$
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq 22$
</li>

<li>
$N$は整数
</li>

<li>
$T$は長さ $N$の英小文字列
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

$N$$T$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ。
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
aab

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
条件を満たす $s$は以下の $3$つです。
</p>

<ul>

<li>
$s=(\texttt{""}, \texttt{"a"} ,\texttt{"aa"} ,\texttt{"aab"} )$
</li>

<li>
$s=(\texttt{""}, \texttt{"a"} ,\texttt{"ab"} ,\texttt{"aab"} )$
</li>

<li>
$s=(\texttt{""}, \texttt{"b"} ,\texttt{"ab"} ,\texttt{"aab"} )$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7
atcoder

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5040

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

22
atcoderbeginnercontest

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

115732070

</div>

</section>

</div>

</span>

</span>

</div>
