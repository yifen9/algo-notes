
<div>

<span>

<span>

<p>
配点 : $700$点
</p>

<div>

<section>

### **問題文**

<p>
$N$行 $M$列のグリッドがあります．
あなたはグリッドの各マスに $0$以上 $2^K-1$以下の整数を書き込み，以下の条件を満たしたいです．
</p>

<ul>

<li>
左上のマスを出発し，右または下に隣接するマスへの移動を繰り返して，右下のマスへと至るパスを考える．
ここで，通ったマス (始点終点を含む) に書かれた整数の総 $\mathrm{XOR}$が $0$になるパスを，
<strong>
よい
</strong>
パスと呼ぶことにする．
</li>

<li>
よいパスはちょうど $1$つだけ存在し，それは文字列 $S$が表すパスである．
文字列 $S$が表すパスとは，各 $i$($1 \leq i \leq N+M-2$) について，$i$回目の移動の際，$S$の $i$文字目が `R`なら右，`D`なら下に進むようなパスである．
</li>

</ul>

<p>
条件を満たす整数の書き込み方が存在するかどうか判定してください．
</p>

<p>
$1$つの入力ファイルにつき，$T$個のテストケースを解いてください．
</p>

<details>

<summary>
ビット単位 $\mathrm{XOR}$演算とは
    
</summary>

<p>
非負整数 $A, B$のビット単位 $\mathrm{XOR}$、$A \oplus B$は、以下のように定義されます。
        
</p>

<ul>

<li>
$A \oplus B$を二進表記した際の $2^k$($k \geq 0$) の位の数は、$A, B$を二進表記した際の $2^k$の位の数のうち一方のみが $1$であれば $1$、そうでなければ $0$である。
</li>

</ul>
例えば、$3 \oplus 5 = 6$となります (二進表記すると: $011 \oplus 101 = 110$)。

一般に $k$個の非負整数 $p_1, p_2, p_3, \dots, p_k$のビット単位 $\mathrm{XOR}$は $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$と定義され、これは $p_1, p_2, p_3, \dots, p_k$の順番によらないことが証明できます。  
    
<p>

</p>

</details>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq T \leq 100$
</li>

<li>
$2 \leq N,M \leq 30$
</li>

<li>
$1 \leq K \leq 30$
</li>

<li>
$S$はちょうど $N-1$個の `D`と $M-1$個の `R`からなる文字列
</li>

<li>
入力される数はすべて整数
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

$T$$case_1$$case_2$$\vdots$$case_T$
</div>

<p>
各ケースは以下の形式で与えられる．
</p>

<div>

$N$$M$$K$$S$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
各ケースに対し，条件を満たす整数の書き込み方が存在する場合は `Yes`を，存在しないならば `No`を出力せよ．
出力中の各文字は英大文字・小文字のいずれでもよい．
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4
2 2 1
RD
4 3 1
RDDDR
15 20 18
DDRRRRRRRDDDDRRDDRDRRRRDDRDRDDRRR
20 15 7
DRRDDDDDRDDDRRDDRRRDRRRDDDDDRRRDD

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes
No
Yes
No

</div>

<p>
例えば $1$ケース目については，以下のようなグリッドを作れば良いです．
</p>

<div>

11
00

</div>

</section>

</div>

</span>

</span>

</div>
