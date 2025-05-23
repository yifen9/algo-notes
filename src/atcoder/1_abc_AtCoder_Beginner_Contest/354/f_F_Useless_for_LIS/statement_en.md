
<div>

<span>

<span>

<p>
Score : $525$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given an integer sequence $A$of length $N$.
</p>

<p>
For each $t = 1, 2, \dots, N$, determine whether $A_t$is included in a longest increasing subsequence of $A$.
</p>

<p>
Here, $A_t$is included in a longest increasing subsequence of $A$if and only if the following holds:
</p>

<ul>

<li>

<p>
Let $L$be the length of a longest increasing subsequence of $A$. There exists a strictly increasing integer sequence $i = (i_1, i_2, \dots, i_L) \ (i_1 < i_2 < \dots < i_L)$, where each element is between $1$and $N$, inclusive, that satisfies all of the following conditions:

</p>

<ul>

<li>
$A_{i_1} < A_{i_2} < \dots < A_{i_L}$.

</li>

<li>
$i_k = t$for some $k \ (1 \leq k \leq L)$.

</li>

</ul>

</li>

</ul>

<p>
You are given $T$test cases; solve each of them.
</p>

<details>

<summary>
What is a longest increasing subsequence?
</summary>

<p>
A subsequence of a sequence $A$is a sequence that can be derived by extracting some elements from $A$without changing the order.

</p>

<p>
A longest increasing subsequence of a sequence $A$is a subsequence of $A$that is strictly increasing with the greatest possible length.

</p>

</details>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq T \leq 2 \times 10^5$
</li>

<li>
$1 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq A_i \leq 10^9$
</li>

<li>
The sum of $N$across all test cases is at most $2 \times 10^5$.
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

$T$$\mathrm{case}_1$$\mathrm{case}_2$$\vdots$$\mathrm{case}_T$
</div>

<p>
Here, $\mathrm{case_i}$represents the input for the $i$-th case. Each case is given in the following format:
</p>

<div>

$N$$A_1$$A_2$$\cdots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the answers in the following format:
</p>

<div>

$\mathrm{answer}_1$$\mathrm{answer}_2$$\vdots$$\mathrm{answer}_T$
</div>

<p>
Here, $\mathrm{answer}_i$represents the output for the $i$-th case. For each case, let there be $m$indices $t$such that $A_t$is included in a longest increasing subsequence of $A$, which are $i_1, i_2, \dots, i_m$in ascending order. Print these in the following format:
</p>

<div>

$m$$i_1$$i_2$$\cdots$$i_m$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

1
5
2 1 4 5 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

4
1 2 3 4

</div>

<p>
One of the longest increasing subsequences is $(2, 4, 5)$, with a length of $3$. Another longest increasing subsequence is $(1, 4, 5)$. However, no longest increasing subsequence includes $A_5$.
</p>

<p>
Therefore, print $1, 2, 3, 4$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2
6
2 5 3 4 3 4
5
10000 1000 100 1 10

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

5
1 3 4 5 6
2
4 5

</div>

</section>

</div>

</span>

</span>

</div>
