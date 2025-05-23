
<div>

<span>

<span>

<p>
配点 : $2200$点
</p>

<div>

<section>

### **問題文**

<p>
$\{1,2,...,N\}$の部分集合が $N-1$個与えられます。$i$番目の集合を $E_i$とします。
</p>

<p>
各集合 $E_i$から相異なる $2$要素 $u_i,v_i$を選び、$\{1,2,..,N\}$を頂点集合、
$(u_1,v_1),(u_2,v_2),...,(u_{N-1},v_{N-1})$を辺集合とするような、$N$頂点 $N-1$辺グラフ $T$を考えます。
うまく $u_i,v_i$を定めることにより、$T$を木にすることができるかどうか判定してください。
さらに可能な場合は、$T$が実際に木となるような $(u_1,v_1),(u_2,v_2),...,(u_{N-1},v_{N-1})$を一つ求めてください。
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
$E_i$は $\{1,2,..,N\}$の部分集合である。
</li>

<li>
$|E_i| \geq 2$
</li>

<li>
$|E_i|$の和は $2 \times 10^5$以下である。
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

$N$$c_1$$w_{1,1}$$w_{1,2}$$...$$w_{1,c_1}$$:$$c_{N-1}$$w_{N-1,1}$$w_{N-1,2}$$...$$w_{N-1,c_{N-1}}$
</div>

<p>
ただし、$c_i$は $E_i$の要素数を指し、$w_{i,1},...,w_{i,c_i}$は $E_i$の $c_i$個の元である。
また、$2 \leq c_i \leq N$, $1 \leq w_{i,j} \leq N$, $w_{i,j} \neq w_{i,k}$($1 \leq j < k \leq c_i$) である。
</p>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$を木とすることができない場合は `-1`を出力せよ。そうでない場合は以下の形式に従って条件を満たす $(u_i,v_i)$を出力せよ。
</p>

<div>

$u_1$$v_1$$:$$u_{N-1}$$v_{N-1}$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5
2 1 2
3 1 2 3
3 3 4 5
2 4 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1 2
1 3
3 4
4 5

</div>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6
3 1 2 3
3 2 3 4
3 1 3 4
3 1 2 4
3 4 5 6

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

-1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
5 1 2 3 4 5
5 2 3 4 5 6
5 3 4 5 6 7
5 4 5 6 7 8
5 5 6 7 8 9
5 6 7 8 9 10
5 7 8 9 10 1
5 8 9 10 1 2
5 9 10 1 2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1 2
2 3
3 4
4 5
5 6
6 7
7 8
8 9
9 10

</div>

</section>

</div>

</span>

</span>

</div>
