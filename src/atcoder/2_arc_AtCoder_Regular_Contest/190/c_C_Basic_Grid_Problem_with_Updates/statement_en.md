
<div>

<span>

<span>

<p>
Score : $800$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There is an $H \times W$grid. Let $(h,w)$denote the cell at the $h$-th row from the top and the $w$-th column from the left. A non-negative integer $A_{h,w}$is written in cell $(h,w)$.
</p>

<p>
Takahashi starts at cell $(sh,sw)$and will perform $Q$changes to the grid. The $i$-th change is given by a character $d_i$($d_i$is one of `L`, `R`, `U`, `D`) and a non-negative integer $a_i$, meaning Takahashi will do the following:
</p>

<ul>

<li>
Move one cell in the direction $d_i$. That is, if $d_i$is `L`, move left; if `R`, move right; if `U`, move up; if `D`, move down by one cell. Then, let the destination cell be $(h,w)$, and set $A_{h,w}$to $a_i$.
</li>

</ul>

<p>
It is guaranteed that in each change, he can move one cell in direction $d_i$.
</p>

<p>
After each change, print the answer to the following problem:
</p>

<blockquote>

<p>
A sequence of cells $P = ((h_1,w_1), \ldots, (h_{M},w_{M}))$is said to be a 
<strong>
path
</strong>
if and only if it satisfies all of the following conditions:
</p>

<ul>

<li>
$(h_1,w_1) = (1,1)$, $(h_{M},w_{M}) = (H,W)$, and $M = H + W - 1$.
</li>

<li>
For every $i$with $1 \leq i \leq M-1$, either $(h_{i+1}, w_{i+1}) = (h_i + 1, w_i)$or $(h_{i+1}, w_{i+1}) = (h_i, w_i + 1)$.
</li>

</ul>

<p>
There are $\binom{H+W-2}{H-1}$paths. For a path $P = ((h_1,w_1), \ldots, (h_{M},w_{M}))$, define $f(P) = \prod_{1\leq i\leq M}A_{h_i,w_i}$. Print the sum, modulo $998244353$, of $f(P)$over all paths $P$.
</p>

</blockquote>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq H, W \leq 200000$
</li>

<li>
$HW \leq 200000$
</li>

<li>
$0 \leq A_{h,w} < 998244353$
</li>

<li>
$1 \leq Q \leq 200000$
</li>

<li>
$1 \leq sh \leq H$, $1 \leq sw \leq W$
</li>

<li>
$0 \leq a_i < 998244353$
</li>

<li>
$H$, $W$, $A_{h,w}$, $Q$, $sh$, $sw$, and $a_i$are integers.
</li>

<li>
Each $d_i$is `L`, `R`, `U`, or `D`.
</li>

<li>
In each change, Takahashi can move one cell in the direction $d_i$.
</li>

</ul>

</section>

</div>

---

<div>

<div>

<section>

### **Input**

<p>
The input is given from Standard Input in the following format:
</p>

<div>

$H$$W$$A_{1,1}$$\cdots$$A_{1,W}$$\vdots$$A_{H,1}$$\cdots$$A_{H,W}$$Q$$sh$$sw$$d_1$$a_1$$\vdots$$d_Q$$a_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $Q$lines.
</p>

<p>
The $i$-th line should contain the sum, modulo $998244353$, of $f(P)$over all paths $P$after performing the $i$-th change to the grid. 
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

2 3
1 2 3
4 5 6
3 2 2
U 7
R 8
L 9

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

456
666
822

</div>

<ul>

<li>
Initially, Takahashi is at $(2,2)$.
</li>

<li>
Move up, then set $A_{1,2}$to $7$. The value of $f(P)$for each path is:
<ul>

<li>
$P=((1,1),(1,2),(1,3),(2,3))$: $f(P)=1 \times 7 \times 3 \times 6=126$.
</li>

<li>
$P=((1,1),(1,2),(2,2),(2,3))$: $f(P)=1 \times 7 \times 5 \times 6=210$.
</li>

<li>
$P=((1,1),(2,1),(2,2),(2,3))$: $f(P)=1 \times 4 \times 5 \times 6=120$.
</li>

</ul>

</li>

<li>
Move right, then set $A_{1,3}$to $8$. The value of $f(P)$for each path is:
<ul>

<li>
$P=((1,1),(1,2),(1,3),(2,3))$: $f(P)=1 \times 7 \times 8 \times 6=336$.
</li>

<li>
$P=((1,1),(1,2),(2,2),(2,3))$: $f(P)=1 \times 7 \times 5 \times 6=210$.
</li>

<li>
$P=((1,1),(2,1),(2,2),(2,3))$: $f(P)=1 \times 4 \times 5 \times 6=120$.
</li>

</ul>

</li>

<li>
Move left, then set $A_{1,2}$to $9$. The value of $f(P)$for each path is:
<ul>

<li>
$P=((1,1),(1,2),(1,3),(2,3))$: $f(P)=1 \times 9 \times 8 \times 6=432$.
</li>

<li>
$P=((1,1),(1,2),(2,2),(2,3))$: $f(P)=1 \times 9 \times 5 \times 6=270$.
</li>

<li>
$P=((1,1),(2,1),(2,2),(2,3))$: $f(P)=1 \times 4 \times 5 \times 6=120$.
</li>

</ul>

</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 4
147015809 294958521 852121867 499798308
790350368 404692331 645419803 290531806
275766153 896286651 239187926 945049742
340760022 236352314 926236110 223464913
287023679 590772036 340282357 521075891
6 3 1
U 344644511
R 45812235
D 260083498
R 781118585
L 156297846
L 411901560

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

299123226
548055393
810247224
876210800
773990840
506814544

</div>

</section>

</div>

</span>

</span>

</div>
