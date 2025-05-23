
<div>

<span>

<span>

<p>
Score: $475$points
</p>

<div>

<section>

### **Problem Statement**

<blockquote>

<p>
In a coordinate space, we want to place three cubes with a side length of $7$so that the volumes of the regions contained in exactly one, two, three cube(s) are $V_1$, $V_2$, $V_3$, respectively.
</p>

</blockquote>

<p>
For three integers $a$, $b$, $c$, let $C(a,b,c)$denote the cubic region represented by $(a\leq x\leq a+7) \land (b\leq y\leq b+7) \land (c\leq z\leq c+7)$.
</p>

<p>
Determine whether there are nine integers $a_1, b_1, c_1, a_2, b_2, c_2, a_3, b_3, c_3$that satisfy all of the following conditions, and find one such tuple if it exists.
</p>

<ul>

<li>
$|a_1|, |b_1|, |c_1|, |a_2|, |b_2|, |c_2|, |a_3|, |b_3|, |c_3| \leq 100$
</li>

<li>
Let $C_i = C(a_i, b_i, c_i)\ (i=1,2,3)$.
<ul>

<li>
The volume of the region contained in exactly one of $C_1, C_2, C_3$is $V_1$.
</li>

<li>
The volume of the region contained in exactly two of $C_1, C_2, C_3$is $V_2$.
</li>

<li>
The volume of the region contained in all of $C_1, C_2, C_3$is $V_3$.
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
$0 \leq V_1, V_2, V_3 \leq 3 \times 7^3$
</li>

<li>
All input values are integers.
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

$V_1$$V_2$$V_3$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If no nine integers $a_1, b_1, c_1, a_2, b_2, c_2, a_3, b_3, c_3$satisfy all of the conditions in the problem statement, print `No`. Otherwise, print such integers in the following format. If multiple solutions exist, you may print any of them.
</p>

<div>

Yes
$a_1$$b_1$$c_1$$a_2$$b_2$$c_2$$a_3$$b_3$$c_3$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

840 84 7

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes
0 0 0 0 6 0 6 0 0

</div>

<p>
Consider the case $(a_1, b_1, c_1, a_2, b_2, c_2, a_3, b_3, c_3) = (0, 0, 0, 0, 6, 0, 6, 0, 0)$.
</p>

<p>

<img src="https://img.atcoder.jp/abc343/aa534bf0a0e8e3f3487c5eeb540e54dc.png">

</img>

</p>

<p>
The figure represents the positional relationship of $C_1$, $C_2$, and $C_3$, corresponding to the orange, cyan, and green cubes, respectively.
</p>

<p>
Here,
</p>

<ul>

<li>
All of $|a_1|, |b_1|, |c_1|, |a_2|, |b_2|, |c_2|, |a_3|, |b_3|, |c_3|$are not greater than $100$.
</li>

<li>
The region contained in all of $C_1, C_2, C_3$is $(6\leq x\leq 7)\land (6\leq y\leq 7) \land (0\leq z\leq 7)$, with a volume of $(7-6)\times(7-6)\times(7-0)=7$.
</li>

<li>
The region contained in exactly two of $C_1, C_2, C_3$is $((0\leq x < 6)\land (6\leq y\leq 7) \land (0\leq z\leq 7))\lor((6\leq x\leq 7)\land (0\leq y < 6) \land (0\leq z\leq 7))$, with a volume of $(6-0)\times(7-6)\times(7-0)\times 2=84$.
</li>

<li>
The region contained in exactly one of $C_1, C_2, C_3$has a volume of $840$.
</li>

</ul>

<p>
Thus, all conditions are satisfied.
</p>

<p>
$(a_1, b_1, c_1, a_2, b_2, c_2, a_3, b_3, c_3) = (-10, 0, 0, -10, 0, 6, -10, 6, 1)$also satisfies all conditions and would be a valid output.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

343 34 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

No

</div>

<p>
No nine integers $a_1, b_1, c_1, a_2, b_2, c_2, a_3, b_3, c_3$satisfy all of the conditions.
</p>

</section>

</div>

</span>

</span>

</div>
