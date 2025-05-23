
<div>

<span>

<span>

<p>
配点 : $1100$点
</p>

<div>

<section>

### **問題文**

<p>
整数 $N$が与えられます。
</p>

<p>
以下の条件を満たすような $N \times N$行列 $a$をどれか $1$つ構成してください。この問題の制約下で、必ず解が存在することが証明できます。
</p>

<ul>

<li>
$1 \leq a_{i,j} \leq 10^{15}$
</li>

<li>
$a_{i,j}$は相異なる整数である
</li>

<li>
ある正の整数 $m$が存在して、上下左右に隣接する $2$つの数 $x,y$をどこから取り出しても、${\rm max}(x,y)$を ${\rm min}(x,y)$で割ったあまりは $m$となる
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 500$
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

$N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを以下の形式で出力せよ。
</p>

<div>

$a_{1,1}$$...$$a_{1,N}$$:$$a_{N,1}$$...$$a_{N,N}$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4 7
23 10

</div>

<ul>

<li>
どの隣接した $2$つの数についても、大きい方の数を小さい数で割ったあまりが $3$となっています
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
