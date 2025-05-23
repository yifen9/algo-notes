
<div>

<span>

<span>

<p>
Score : $700$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given an integer $L$. Construct a directed graph that satisfies the conditions below. The graph may contain multiple edges between the same pair of vertices. It can be proved that such a graph always exists.
</p>

<ul>

<li>
The number of vertices, $N$, is at most $20$. The vertices are given ID numbers from $1$to $N$.
</li>

<li>
The number of edges, $M$, is at most $60$. Each edge has an integer length between $0$and $10^6$(inclusive).
</li>

<li>
Every edge is directed from the vertex with the smaller ID to the vertex with the larger ID. That is, $1,2,...,N$is one possible topological order of the vertices.
</li>

<li>
There are exactly $L$different paths from Vertex $1$to Vertex $N$. The lengths of these paths are all different, and they are integers between $0$and $L-1$.
</li>

</ul>

<p>
Here, the length of a path is the sum of the lengths of the edges contained in that path, and two paths are considered different when the sets of the edges contained in those paths are different.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq L \leq 10^6$
</li>

<li>
$L$is an integer.
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

$L$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
In the first line, print $N$and $M$, the number of the vertices and edges in your graph.
In the $i$-th of the following $M$lines, print three integers $u_i,v_i$and $w_i$, representing the starting vertex, the ending vertex and the length of the $i$-th edge.
If there are multiple solutions, any of them will be accepted.
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

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

8 10
1 2 0
2 3 0
3 4 0
1 5 0
2 6 0
3 7 0
4 8 0
5 6 1
6 7 1
7 8 1

</div>

<p>
In the graph represented by the sample output, there are four paths from Vertex $1$to $N=8$:
</p>

<ul>

<li>
$1$→ $2$→ $3$→ $4$→ $8$with length $0$
</li>

<li>
$1$→ $2$→ $3$→ $7$→ $8$with length $1$
</li>

<li>
$1$→ $2$→ $6$→ $7$→ $8$with length $2$
</li>

<li>
$1$→ $5$→ $6$→ $7$→ $8$with length $3$
</li>

</ul>

<p>
There are other possible solutions.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

5 7
1 2 0
2 3 1
3 4 0
4 5 0
2 4 0
1 3 3
3 5 1

</div>

</section>

</div>

</span>

</span>

</div>
