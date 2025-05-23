
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
You are given a positive integer $N$, and an integer $A_{x,y,z}$for each triple of integers $(x, y, z)$such that $1 \leq x, y, z \leq N$.
</p>

<p>
You will be given $Q$queries in the following format, which must be processed in order.
</p>

<p>
For the $i$-th query $(1 \leq i \leq Q)$, you are given a tuple of integers $(Lx_i, Rx_i, Ly_i, Ry_i, Lz_i, Rz_i)$such that $1 \leq Lx_i \leq Rx_i \leq N$, $1 \leq Ly_i \leq Ry_i \leq N$, and $1 \leq Lz_i \leq Rz_i \leq N$. Find:
</p>

<p>
$\displaystyle{\sum_{x=Lx_i}^{Rx_i} \sum_{y=Ly_i}^{Ry_i} \sum_{z=Lz_i}^{Rz_i} A_{x,y,z}}$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 100$
</li>

<li>
$1 \leq Q \leq 2 \times 10^{5}$
</li>

<li>
$0 \leq A_{x,y,z} \leq 999$$(1 \leq x, y, z \leq N)$
</li>

<li>
$1 \leq Lx_i \leq Rx_i \leq N$$(1 \leq i \leq Q)$
</li>

<li>
$1 \leq Ly_i \leq Ry_i \leq N$$(1 \leq i \leq Q)$
</li>

<li>
$1 \leq Lz_i \leq Rz_i \leq N$$(1 \leq i \leq Q)$
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

$N$$A_{1,1,1}$$A_{1,1,2}$$\ldots$$A_{1,1,N}$$A_{1,2,1}$$A_{1,2,2}$$\ldots$$A_{1,2,N}$$\vdots$$A_{1,N,1}$$A_{1,N,2}$$\ldots$$A_{1,N,N}$$A_{2,1,1}$$A_{2,1,2}$$\ldots$$A_{2,1,N}$$A_{2,2,1}$$A_{2,2,2}$$\ldots$$A_{2,2,N}$$\vdots$$A_{2,N,1}$$A_{2,N,2}$$\ldots$$A_{2,N,N}$$\vdots$$A_{N,1,1}$$A_{N,1,2}$$\ldots$$A_{N,1,N}$$A_{N,2,1}$$A_{N,2,2}$$\ldots$$A_{N,2,N}$$\vdots$$A_{N,N,1}$$A_{N,N,2}$$\ldots$$A_{N,N,N}$$Q$$Lx_1$$Rx_1$$Ly_1$$Ry_1$$Lz_1$$Rz_1$$Lx_2$$Rx_2$$Ly_2$$Ry_2$$Lz_2$$Rz_2$$\vdots$$Lx_Q$$Rx_Q$$Ly_Q$$Ry_Q$$Lz_Q$$Rz_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $Q$lines.
The $i$-th line should contain the answer to the $i$-th query.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

2
1 2
3 4
5 6
7 8
2
1 2 2 2 1 1
2 2 1 2 1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

10
26

</div>

<p>
For the 1st query, the sought value is $A_{1,2,1} + A_{2,2,1} = 3 + 7 = 10$. Thus, print $10$.
</p>

<p>
For the 2nd query, the sought value is $A_{2,1,1} + A_{2,1,2} + A_{2,2,1} + A_{2,2,2} = 5 + 6 + 7 + 8 = 26$. Thus, print $26$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3
733 857 714
956 208 257
123 719 648
840 881 245
245 112 746
306 942 694
58 870 849
13 208 789
687 906 783
8
3 3 3 3 1 1
1 3 2 3 3 3
2 2 2 3 1 1
1 3 1 1 1 1
2 3 2 3 2 3
1 2 1 1 1 2
3 3 2 2 1 3
1 2 2 3 2 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

687
3917
551
1631
5180
3311
1010
4326

</div>

</section>

</div>

</span>

</span>

</div>
