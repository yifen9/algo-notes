
<div>

<span>

<span>

<p>
Score : $600$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Determine whether there is an $N$-by-$N$matrix $X$that satisfies the following conditions, and present one such matrix if it exists. (Let $x_{i,j}$denote the element of $X$at the $i$-th row from the top and $j$-th column from the left.)
</p>

<ul>

<li>
$x_{i,j} \in \{ 0,1,2 \}$for every $i$and $j$$(1 \leq i,j \leq N)$.
</li>

<li>
The following holds for each $i=1,2,\ldots,Q$.
<ul>

<li>
Let $P = \prod_{a_i \leq j \leq b_i} \prod_{c_i \leq k \leq d_i} x_{j,k}$. Then, $P$is congruent to $e_i$modulo $3$.
</li>

</ul>

</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N,Q \leq 2000$
</li>

<li>
$1 \leq a_i \leq b_i \leq N$
</li>

<li>
$1 \leq c_i \leq d_i \leq N$
</li>

<li>
$e_i \in \{0,1,2 \}$
</li>

<li>
All values in the input are integers.
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

$N$$Q$$a_1$$b_1$$c_1$$d_1$$e_1$$\vdots$$a_Q$$b_Q$$c_Q$$d_Q$$e_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If no matrix $X$satisfies the conditions, print `No`.
</p>

<p>
If there is a matrix $X$that satisfies them, print `Yes`in the first line and one such instance of $X$in the following format in the second and subsequent lines.
</p>

<div>

$x_{1,1}$$x_{1,2}$$\ldots$$x_{1,N}$$x_{2,1}$$x_{2,2}$$\ldots$$x_{2,N}$$\vdots$$x_{N,1}$$x_{N,2}$$\ldots$$x_{N,N}$
</div>

<p>
If multiple matrices satisfy the conditions, any of them will be accepted.
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
1 1 1 2 0
1 2 2 2 1
2 2 1 2 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes
0 2
1 2

</div>

<p>
For example, for $i=2$, we have $P = \prod_{a_2 \leq j \leq b_2} \prod_{c_2 \leq k \leq d_2} x_{j,k}= \prod_{1 \leq j \leq 2} \prod_{2 \leq k \leq 2} x_{j,k}=x_{1,2} \times x_{2,2}$.

In this sample output, we have $x_{1,2}=2$and $x_{2,2}=2$, so $P=2 \times 2 = 4$, which is congruent to $e_2=1$modulo $3$.

It can be similarly verified that the condition is also satisfied for $i=1$and $i=3$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4 4
1 4 1 4 0
1 4 1 4 1
1 4 1 4 2
1 4 1 4 0

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

No

</div>

</section>

</div>

</span>

</span>

</div>
