
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
You are given a tree with $N$vertices.
The vertices are labeled from $1$to $N$, and the $i$-th edge connects vertex $A_i$and vertex $B_i$.
Moreover, for every vertex, the 
<b>
number of incident edges is odd
</b>
.
</p>

<p>
You will color each vertex of the given tree either black ( `B`) or white ( `W`).
Here, the string obtained by arranging the colors ( `B`or `W`) of the vertices in the order of vertex labels is called a 
<b>
color sequence
</b>
.
</p>

<p>
You are given a color sequence $S$.
Determine whether the color sequence $S$can result from performing the following operation once when all vertices are colored, and if it can, find one possible color sequence before the operation.
</p>

<p>

<b>
Operation:
</b>
For each vertex $k = 1, 2, \dots, N$, let $C_k$be the color that occupies the majority (more than half) of the colors of the vertices connected to $k$by an edge.
For every vertex $k$, change its color to $C_k$simultaneously.
</p>

<p>
There are $T$test cases to solve.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$T \geq 1$
</li>

<li>
$N \geq 2$
</li>

<li>
The sum of $N$over the test cases in each input file is at most $2 \times 10^5$.
</li>

<li>
$1 \leq A_i < B_i \leq N \ \ (1 \leq i \leq N - 1)$
</li>

<li>
The given edges $(A_i, B_i) \ (1 \leq i \leq N - 1)$form a tree.
</li>

<li>
Each vertex $k \ (1 \leq k \leq N)$appears an 
<b>
odd number of times in total
</b>
as $A_i, B_i \ (1 \leq i \leq N - 1)$.
</li>

<li>
$S$is a string of length $N$consisting of `B`and `W`.
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
Each test case $\mathrm{case}_i \ (1 \leq i \leq T)$is in the following format:
</p>

<div>

$N$$A_1$$B_1$$A_2$$B_2$$\vdots$$A_{N-1}$$B_{N-1}$$S$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $T$lines.
For the $i$-th line, if the color sequence $S$can result from performing the operation in the $i$-th test case, print one possible color sequence before the operation; otherwise, print `-1`.
If there are multiple possible color sequences before the operation, any of them will be considered correct.
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
4
1 2
1 3
1 4
BWWW
4
1 2
1 3
1 4
BBWW

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

WBBW
-1

</div>

<p>
For the first test case, suppose the color sequence before the operation was `WBBW`.
In this case,
</p>

<ul>

<li>
for vertex $1$, the colors of the connected vertices $2, 3, 4$are `B`, `B`, `W`, respectively, with $C_1 = {}$`B`occupying the majority;
</li>

<li>
for vertex $2$, the color of the connected vertex $1$is `W`, with $C_2 = {}$`W`occupying the majority;
</li>

<li>
for vertex $3$, the color of the connected vertex $1$is `W`, with $C_3 = {}$`W`occupying the majority;
</li>

<li>
for vertex $4$, the color of the connected vertex $1$is `W`, with $C_4 = {}$`W`occupying the majority.
</li>

</ul>

<p>
Therefore, the color sequence after the operation is `BWWW`, satisfying the condition.
Similarly, if the color sequence before the operation was `WBBB`, `WBWB`, or `WWBB`, the color sequence after the operation would be `BWWW`, and any of these are considered correct.
</p>

<p>
For the second test case, the color sequence `BBWW`cannot result from the operation on the given tree.
</p>

</section>

</div>

</span>

</span>

</div>
