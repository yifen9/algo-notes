
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
Snuke is standing on a two-dimensional plane. In one operation, he can move by $1$in the positive $x$-direction, or move by $1$in the positive $y$-direction.
</p>

<p>
Let us define a function $f(r, c)$as follows:
</p>

<ul>

<li>
$f(r,c) := $(The number of paths from the point $(0, 0)$to the point $(r, c)$that Snuke can trace by repeating the operation above)
</li>

</ul>

<p>
Given are integers $r_1$, $r_2$, $c_1$, and $c_2$.
Find the sum of $f(i, j)$over all pair of integers $(i, j)$such that $r_1 ≤ i ≤ r_2$and $c_1 ≤ j ≤ c_2$, and compute this value modulo $(10^9+7)$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 ≤ r_1 ≤ r_2 ≤ 10^6$
</li>

<li>
$1 ≤ c_1 ≤ c_2 ≤ 10^6$
</li>

<li>
All values in input are integers.
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
Input is given from Standard Input in the following format:
</p>

<div>

$r_1$$c_1$$r_2$$c_2$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the sum of $f(i, j)$modulo $(10^9+7)$.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

1 1 2 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

14

</div>

<p>
For example, there are two paths from the point $(0, 0)$to the point $(1, 1)$: $(0,0)$→ $(0,1)$→ $(1,1)$and $(0,0)$→ $(1,0)$→ $(1,1)$, so $f(1,1)=2$.
</p>

<p>
Similarly, $f(1,2)=3$, $f(2,1)=3$, and $f(2,2)=6$. Thus, the sum is $14$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

314 159 2653 589

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

602215194

</div>

</section>

</div>

</span>

</span>

</div>
