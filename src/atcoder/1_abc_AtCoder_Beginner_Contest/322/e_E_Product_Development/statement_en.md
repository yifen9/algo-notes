
<div>

<span>

<span>

<p>
Score : $475$points
</p>

<div>

<section>

### **Problem Statement**

<p>
AtCoder Inc. is planning to develop a product. The product has $K$parameters, whose values are currently all zero. The company aims to raise all parameter values to at least $P$.
</p>

<p>
There are $N$development plans. Executing the $i$-th development plan ($1 \le i \le N$) increases the value of the $j$-th parameter by $A_{i,j}$for every integer $j$such that $1 \le j \le K$, at the cost of $C_i$.
</p>

<p>
A development plan cannot be executed more than once. Determine whether the company can achieve its goal, and if it can, find the minimum total cost required to achieve the goal.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \le N \le 100$
</li>

<li>
$1 \le K,P \le 5$
</li>

<li>
$0 \le A_{i,j} \le P(1 \le i \le N,1 \le j \le K)$
</li>

<li>
$1 \le C_i \le 10^9(1 \le i \le N)$
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

$N$$K$$P$$C_1$$A_{1,1}$$A_{1,2}$$\dots$$A_{1,K}$$C_2$$A_{2,1}$$A_{2,2}$$\dots$$A_{2,K}$$\dots$$C_N$$A_{N,1}$$A_{N,2}$$\dots$$A_{N,K}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If AtCoder Inc. can achieve its goal, print the minimum total cost required to achieve the goal; otherwise, print `-1`.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4 3 5
5 3 0 2
3 1 2 3
3 2 4 0
1 0 1 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

9

</div>

<p>
If you execute the first, third, and fourth development plans, each parameter will be $3+2+0=5,0+4+1=5,2+0+4=6$, all of which are at least $5$, so the goal is achieved. The total cost in this case is $5 + 3 + 1 = 9$.
</p>

<p>
It is impossible to achieve the goal at a total cost of $8$or less. Thus, the answer is $9$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

7 3 5
85 1 0 1
37 1 1 0
38 2 0 0
45 0 2 2
67 1 1 0
12 2 2 0
94 2 2 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

-1

</div>

<p>
You cannot achieve the goal no matter what you do. Thus, print `-1`.
</p>

</section>

</div>

</span>

</span>

</div>
