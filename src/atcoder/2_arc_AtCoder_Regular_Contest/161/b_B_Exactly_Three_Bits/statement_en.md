
<div>

<span>

<span>

<p>
Score : $400$points
</p>

<div>

<section>

### **Problem Statement**

<p>
For a positive integer $X$, let $f(X)$be the number of $1$s that appear when $X$is represented in binary notation.
For example, $6 = 110_{(2)}, \ 11 = 1011_{(2)}, \ 16 = 10000_{(2)}$, so $f(6) = 2, \ f(11) = 3, \ f(16) = 1$.
</p>

<p>
You are given a positive integer $N$.
Determine whether there is a positive integer $X$less than or equal to $N$such that $f(X) = 3$, and if so, find the maximum such $X$.
</p>

<p>
There are $T$test cases to solve.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq T \leq 10^5$
</li>

<li>
$1 \leq N \leq 10^{18}$
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
The input is given from Standard Input in the following format, where $N_i$represents the value of $N$in the $i$-th test case:
</p>

<div>

$T$$N_1$$N_2$$\vdots$$N_T$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $T$lines.
The $i$-th line should contain the maximum positive integer $X$less than or equal to $N_i$such that $f(X) = 3$.
If there is no such positive integer $X$, print `-1`.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4
16
161
4
1000000000000000000

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

14
161
-1
936748722493063168

</div>

<ul>

<li>
For the first test case, $f(14) = 3, \ f(15) = 4, \ f(16) = 1$, so the maximum positive integer $X$satisfying $X \leq 16$and $f(X) = 3$is $14$.
</li>

<li>
For the second test case, $f(161) = 3$, so the maximum positive integer $X$satisfying $X \leq 161$and $f(X) = 3$is $161$.
</li>

<li>
For the third test case, $f(1) = 1, \ f(2) = 1, \ f(3) = 2, \ f(4) = 1$, so there is no positive integer $X$satisfying $X \leq 4$and $f(X) = 3$.
</li>

<li>
As seen in the fourth test case, the input and output values may not fit in a 32-bit integer type.
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
