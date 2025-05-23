
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
You are given an undirected graph $G$with $N$vertices and $M$edges.
$G$is 
<strong>
simple
</strong>
(it has no self-loops and multiple edges) and 
<strong>
connected
</strong>
.
</p>

<p>
For $i = 1, 2, \ldots, M$, the $i$-th edge is an undirected edge $\lbrace u_i, v_i \rbrace$connecting Vertices $u_i$and $v_i$.
</p>

<p>
Construct two spanning trees $T_1$and $T_2$of $G$that satisfy both of the two conditions below.  ($T_1$and $T_2$do not necessarily have to be different spanning trees.)
</p>

<ul>

<li>

<p>
$T_1$satisfies the following.
</p>

<blockquote>

<p>
If we regard $T_1$as a rooted tree rooted at Vertex $1$, for any edge $\lbrace u, v \rbrace$of $G$not contained in $T_1$, one of $u$and $v$is an ancestor of the other in $T_1$.
</p>

</blockquote>

</li>

<li>

<p>
$T_2$satisfies the following.
</p>

<blockquote>

<p>
If we regard $T_2$as a rooted tree rooted at Vertex $1$, there is no edge $\lbrace u, v \rbrace$of $G$not contained in $T_2$such that one of $u$and $v$is an ancestor of the other in $T_2$.
</p>

</blockquote>

</li>

</ul>

<p>
We can show that there always exists $T_1$and $T_2$that satisfy the conditions above.
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
$N-1 \leq M \leq \min\lbrace 2 \times 10^5, N(N-1)/2 \rbrace$
</li>

<li>
$1 \leq u_i, v_i \leq N$
</li>

<li>
All values in input are integers.
</li>

<li>
The given graph is simple and connected.
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

$N$$M$$u_1$$v_1$$u_2$$v_2$$\vdots$$u_M$$v_M$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $(2N-2)$lines to output $T_1$and $T_2$in the following format.  Specifically,
</p>

<ul>

<li>
The $1$-st through $(N-1)$-th lines should contain the $(N-1)$undirected edges $\lbrace x_1, y_1\rbrace, \lbrace x_2, y_2\rbrace, \ldots, \lbrace x_{N-1}, y_{N-1}\rbrace$contained in $T_1$, one edge in each line.
</li>

<li>
The $N$-th through $(2N-2)$-th lines should contain the $(N-1)$undirected edges $\lbrace z_1, w_1\rbrace, \lbrace z_2, w_2\rbrace, \ldots, \lbrace z_{N-1}, w_{N-1}\rbrace$contained in $T_2$, one edge in each line.
</li>

</ul>

<p>
You may print edges in each spanning tree in any order.  Also, you may print the endpoints of each edge in any order.
</p>

<div>

$x_1$$y_1$$x_2$$y_2$$\vdots$$x_{N-1}$$y_{N-1}$$z_1$$w_1$$z_2$$w_2$$\vdots$$z_{N-1}$$w_{N-1}$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

6 8
5 1
4 3
1 4
3 5
1 2
2 6
1 6
4 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

1 4
4 3
5 3
4 2
6 2
1 5
5 3
1 4
2 1
1 6

</div>

<p>
In the Sample Output above, $T_1$is a spanning tree of $G$containing $5$edges $\lbrace 1, 4 \rbrace, \lbrace 4, 3 \rbrace, \lbrace 5, 3 \rbrace, \lbrace 4, 2 \rbrace, \lbrace 6, 2 \rbrace$.  This $T_1$satisfies the condition in the Problem Statement.  Indeed, for each edge of $G$not contained in $T_1$:
</p>

<ul>

<li>
for edge $\lbrace 5, 1 \rbrace$, Vertex $1$is an ancestor of $5$;  
</li>

<li>
for edge $\lbrace 1, 2 \rbrace$, Vertex $1$is an ancestor of $2$;  
</li>

<li>
for edge $\lbrace 1, 6 \rbrace$, Vertex $1$is an ancestor of $6$.
</li>

</ul>

<p>
$T_2$is another spanning tree of $G$containing $5$edges $\lbrace 1, 5 \rbrace, \lbrace 5, 3 \rbrace, \lbrace 1, 4 \rbrace, \lbrace 2, 1 \rbrace, \lbrace 1, 6 \rbrace$.  This $T_2$satisfies the condition in the Problem Statement.  Indeed, for each edge of $G$not contained in $T_2$:
</p>

<ul>

<li>
for edge $\lbrace 4, 3 \rbrace$, Vertex $4$is not an ancestor of Vertex $3$, and vice versa;
</li>

<li>
for edge $\lbrace 2, 6 \rbrace$, Vertex $2$is not an ancestor of Vertex $6$, and vice versa;
</li>

<li>
for edge $\lbrace 4, 2 \rbrace$, Vertex $4$is not an ancestor of Vertex $2$, and vice versa.
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4 3
3 1
1 2
1 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1 2
1 3
1 4
1 4
1 3
1 2

</div>

<p>
Tree $T$, containing $3$edges $\lbrace 1, 2\rbrace, \lbrace 1, 3 \rbrace, \lbrace 1, 4 \rbrace$, is the only spanning tree of $G$.
Since there are no edges of $G$that are not contained in $T$, obviously this $T$satisfies the conditions for both $T_1$and $T_2$.
</p>

</section>

</div>

</span>

</span>

</div>
