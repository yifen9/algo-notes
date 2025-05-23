
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
Takahashi found a puzzle along some road.

It is composed of an undirected graph with nine vertices and $M$edges, and eight pieces.
</p>

<p>
The nine vertices of the graph are called Vertex $1$, Vertex $2$, $\ldots$, Vertex $9$. For each $i = 1, 2, \ldots, M$, the $i$-th edge connects Vertex $u_i$and Vertex $v_i$.

The eight pieces are called Piece $1$, Piece $2$, $\ldots$, Piece $8$.
For each $j = 1, 2, \ldots, 8$, Piece $j$is on Vertex $p_j$.

Here, it is guaranteed that all pieces are on distinct vertices.
Note that there is exactly one 
<em>
empty
</em>
vertex without a piece.
</p>

<p>
Takahashi can do the following operation on the puzzle any number of times (possibly zero).
</p>

<blockquote>

<p>
Choose a piece on a vertex adjacent to the empty vertex, and move it to the empty vertex.
</p>

</blockquote>

<p>
By repeating this operation, he aims to 
<em>
complete
</em>
the puzzle.
The puzzle is considered complete when the following holds.
</p>

<ul>

<li>
For each $j = 1, 2, \ldots, 8$, Piece $j$is on Vertex $j$.
</li>

</ul>

<p>
Determine whether it is possible for Takahashi to complete the puzzle. If it is possible, find the minimum number of operations needed to do so.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$0 \leq M \leq 36$
</li>

<li>
$1 \leq u_i, v_i \leq 9$
</li>

<li>
The given graph has no multi-edges or self-loops.
</li>

<li>
$1 \leq p_j \leq 9$
</li>

<li>
$j \neq j' \Rightarrow p_j \neq p_{j'}$
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

$M$$u_1$$v_1$$u_2$$v_2$$\vdots$$u_M$$v_M$$p_1$$p_2$$\ldots$$p_8$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If it is possible for Takahashi to complete the puzzle, find the minimum number of operations needed to do so.
Otherwise, print $-1$.
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
1 2
1 3
1 9
2 9
3 9
3 9 2 4 5 6 7 8

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

5

</div>

<p>
The following procedure completes the puzzle in five operations.
</p>

<ol>

<li>
Move Piece $2$from Vertex $9$to Vertex $1$.
</li>

<li>
Move Piece $3$from Vertex $2$to Vertex $9$.
</li>

<li>
Move Piece $2$from Vertex $1$to Vertex $2$.
</li>

<li>
Move Piece $1$from Vertex $3$to Vertex $1$.
</li>

<li>
Move Piece $3$from Vertex $9$to Vertex $3$.
</li>

</ol>

<p>
On the other hand, it is impossible to complete the puzzle in less than five operations. Thus, we should print $5$.

Note that the given graph may not be connected.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5
1 2
1 3
1 9
2 9
3 9
1 2 3 4 5 6 7 8

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

0

</div>

<p>
The puzzle is already complete from the beginning.
Thus, the minimum number of operations needed to complete the puzzle is $0$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

12
8 5
9 6
4 5
4 1
2 5
8 9
2 1
3 6
8 7
6 5
7 4
2 3
1 2 3 4 5 6 8 7

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

-1

</div>

<p>
No sequence of operations can complete the puzzle, so we should print $-1$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

12
6 5
5 4
4 1
4 7
8 5
2 1
2 5
6 9
3 6
9 8
8 7
3 2
2 3 4 6 1 9 7 8

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

16

</div>

</section>

</div>

</span>

</span>

</div>
