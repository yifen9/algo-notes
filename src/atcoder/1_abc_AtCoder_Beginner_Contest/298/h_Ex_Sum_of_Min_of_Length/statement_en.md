
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
You are given a tree with $N$vertices. The vertices are numbered $1$to $N$, and the $i$-th edge connects vertex $A_i$and vertex $B_i$.
</p>

<p>
Let $d(x,y)$denote the distance between vertex $x$and $y$in this tree. Here, the distance between vertex $x$and $y$is the number of edges on the shortest path from vertex $x$to $y$.
</p>

<p>
Answer $Q$queries in order. The $i$-th query is as follows.
</p>

<ul>

<li>
You are given integers $L_i$and $R_i$. Find $\displaystyle\sum_{j = 1}^{N} \min(d(j, L_i), d(j, R_i))$.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N, Q \leq 2 \times 10^5$
</li>

<li>
$1 \leq A_i, B_i, L_i, R_i \leq N$
</li>

<li>
The given graph is a tree.
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

$N$$A_1$$B_1$$\vdots$$A_{N-1}$$B_{N-1}$$Q$$L_1$$R_1$$\vdots$$L_Q$$R_Q$
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

5
3 4
4 5
2 5
1 5
3
4 1
1 2
5 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

4
6
3

</div>

<p>
Let us explain the first query.

Since $d(1, 4) = 2$and $d(1, 1) = 0$, we have $\min(d(1, 4), d(1, 1)) = 0$.

Since $d(2, 4) = 2$and $d(2, 1) = 2$, we have $\min(d(2, 4), d(2, 1)) = 2$.

Since $d(3, 4) = 1$and $d(3, 1) = 3$, we have $\min(d(3, 4), d(3, 1)) = 1$.

Since $d(4, 4) = 0$and $d(4, 1) = 2$, we have $\min(d(4, 4), d(4, 1)) = 0$.

Since $d(5, 4) = 1$and $d(5, 1) = 1$, we have $\min(d(5, 4), d(5, 1)) = 1$. 

$0 + 2 + 1 + 0 + 1 = 4$, so you should print $4$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

8
4 2
4 1
5 6
6 1
7 6
8 1
3 7
7
8 4
4 4
7 2
4 4
5 3
4 4
6 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

14
16
10
16
14
16
8

</div>

</section>

</div>

</span>

</span>

</div>
