
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
Given is an undirected graph with $N$vertices and $M$edges. The $i$-th edge connects Vertices $A_i$and $B_i$and has a weight of $C_i$.
</p>

<p>
Initially, all vertices are painted black. You can do the following operation at most $K$times.
</p>

<ul>

<li>
Operation: choose any vertex $v$and any integer $x$. Paint red all vertices reachable from the vertex $v$by traversing edges whose weights are at most $x$, including $v$itself.
</li>

</ul>

<p>
How many sets can be the set of vertices painted red after the operations?

Find the count modulo $998244353$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq N \leq 10^5$
</li>

<li>
$0 \leq M \leq 10^5$
</li>

<li>
$1 \leq K \leq 500$
</li>

<li>
$1 \leq A_i,B_i \leq N$
</li>

<li>
$1 \leq C_i \leq 10^9$
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

$N$$M$$K$$A_1$$B_1$$C_1$$\vdots$$A_M$$B_M$$C_M$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the answer.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 2 1
1 2 1
2 3 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

6

</div>

<p>
For example, an operation with $(v,x)=(2,1)$paints Vertices $1,2$red, and an operation with $(v,x)=(1,0)$paints Vertex $1$.
</p>

<p>
After at most one operation, the set of vertices painted red can be one of the following six: $\{\},\{1\},\{2\},\{3\},\{1,2\},\{1,2,3\}$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 0 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

16

</div>

<p>
The given graph may not be connected.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

6 8 2
1 2 1
2 3 2
3 4 3
4 5 1
5 6 2
6 1 3
1 2 10
1 1 100

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

40

</div>

<p>
The given graph may have multi-edges and self-loops.
</p>

</section>

</div>

</span>

</span>

</div>
