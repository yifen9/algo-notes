
<div>

<span>

<span>

<p>
Score : $500$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given sequences of positive integers of length $N$: $A=(A_1,A_2,\ldots,A_N)$and $B=(B_1,B_2,\ldots,B_N)$.
</p>

<p>
You are given $Q$queries to process in order. The $i$-th query is explained below.
</p>

<ul>

<li>
You are given positive integers $l_i,r_i,L_i,R_i$. Print `Yes`if it is possible to rearrange the subsequence $(A_{l_i},A_{l_i+1},\ldots,A_{r_i})$to match the subsequence $(B_{L_i},B_{L_i+1},\ldots,B_{R_i})$, and `No`otherwise.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N,Q\leq 2\times 10^5$
</li>

<li>
$1\leq A_i,B_i\leq N$
</li>

<li>
$1\leq l_i \leq r_i\leq N$
</li>

<li>
$1\leq L_i \leq R_i\leq N$
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

$N$$Q$$A_1$$A_2$$\ldots$$A_N$$B_1$$B_2$$\ldots$$B_N$$l_1$$r_1$$L_1$$R_1$$l_2$$r_2$$L_2$$R_2$$\vdots$$l_Q$$r_Q$$L_Q$$R_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $Q$lines. The $i$-th line should contain the answer to the $i$-th query.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

5 4
1 2 3 2 4
2 3 1 4 2
1 3 1 3
1 2 3 5
1 4 2 5
1 5 1 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes
No
No
Yes

</div>

<ul>

<li>
For the 1st query, it is possible to rearrange $(1,2,3)$to match $(2,3,1)$. Hence, we print `Yes`.
</li>

<li>
For the 2nd query, it is impossible to rearrange $(1,2)$in any way to match $(1,4,2)$. Hence, we print `No`.
</li>

<li>
For the 3rd query, it is impossible to rearrange $(1,2,3,2)$in any way to match $(3,1,4,2)$. Hence, we print `No`.
</li>

<li>
For the 4th query, it is possible to rearrange $(1,2,3,2,4)$to match $(2,3,1,4,2)$. Hence, we print `Yes`.
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4 4
4 4 4 4
4 4 4 4
1 2 2 3
3 3 1 1
1 3 1 4
1 4 2 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

Yes
Yes
No
No

</div>

</section>

</div>

</span>

</span>

</div>
