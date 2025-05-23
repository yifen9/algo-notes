
<div>

<span>

<span>

<p>
Score: $450$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given a weighted undirected graph $G$with $N$vertices, numbered $1$to $N$. Initially, $G$has no edges.
</p>

<p>
You will perform $M$operations to add edges to $G$. The $i$-th operation $(1 \leq i \leq M)$is as follows:
</p>

<ul>

<li>
You are given a subset of vertices $S_i=\lbrace A_{i,1},A_{i,2},\dots,A_{i,K_i}\rbrace$consisting of $K_i$vertices.
For every pair $u, v$such that $u, v \in S_i$and $u < v$, add an edge between vertices $u$and $v$with weight $C_i$.
</li>

</ul>

<p>
After performing all $M$operations, determine whether $G$is connected. If it is, find the total weight of the edges in a minimum spanning tree of $G$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq M \leq 2 \times 10^5$
</li>

<li>
$2 \leq K_i \leq N$
</li>

<li>
$\sum_{i=1}^{M} K_i \leq 4 \times 10^5$
</li>

<li>
$1 \leq A_{i,1} < A_{i,2} < \dots < A_{i,K_i} \leq N$
</li>

<li>
$1 \leq C_i \leq 10^9$
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

$N$$M$$K_1$$C_1$$A_{1,1}$$A_{1,2}$$\dots$$A_{1,K_1}$$K_2$$C_2$$A_{2,1}$$A_{2,2}$$\dots$$A_{2,K_2}$$\vdots$$K_M$$C_M$$A_{M,1}$$A_{M,2}$$\dots$$A_{M,K_M}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If $G$is not connected after all $M$operations, print `-1`. If $G$is connected, print the total weight of the edges in a minimum spanning tree of $G$.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4 3
3 3
1 2 3
2 2
1 2
3 4
1 3 4

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

<img src="https://img.atcoder.jp/abc352/b54e4b0cfe2f7e5974a2b95be370953a.png">

</img>

</p>

<p>
The left diagram shows $G$after all $M$operations, and the right diagram shows a minimum spanning tree of $G$(the numbers next to the edges indicate their weights).
</p>

<p>
The total weight of the edges in the minimum spanning tree is $3 + 2 + 4 = 9$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3 2
2 1
1 2
2 1
1 2

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
$G$is not connected even after all $M$operations.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10 5
6 158260522
1 3 6 8 9 10
10 877914575
1 2 3 4 5 6 7 8 9 10
4 602436426
2 6 7 9
6 24979445
2 3 4 5 8 10
4 861648772
2 4 8 9

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

1202115217

</div>

</section>

</div>

</span>

</span>

</div>
