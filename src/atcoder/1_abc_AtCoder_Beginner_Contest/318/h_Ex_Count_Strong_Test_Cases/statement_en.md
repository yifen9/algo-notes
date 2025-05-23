
<div>

<span>

<span>

<p>
Score : $650$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Snuke has come up with the following problem.
</p>

<blockquote>

<p>
You are given permutations $P=(P_1,P_2,\ldots,P_N)$and $Q=(Q_1,Q_2,\ldots,Q_N)$of $(1,2,\ldots,N)$.
    Let us build a graph with $N$vertices and $N$edges as follows.
</p>

<ul>

<li>
For $i=1,2,\ldots,N$in this order, draw an edge of weight $Q_i$connecting vertices $i$and $P_i$bidirectionally.
</li>

</ul>

<p>
When removing some number of edges to eliminate cycles from the graph, find the minimum possible total weight of the removed edges.
</p>

</blockquote>

<p>
Alice and Bob came up with the following solutions.
</p>

<p>

<strong>
Alice:
</strong>
Initialize the answer to $0$. For $i=1,2,\ldots,N$in this order, if the edge connecting vertices $i$and $P_i$is contained in a cycle, remove that edge and add its weight to the answer.
</p>

<p>

<strong>
Bob:
</strong>
Initialize the answer to $0$. For $i=N,N-1,\ldots,1$in this order, if the edge connecting vertices $i$and $P_i$is contained in a cycle, remove that edge and add its weight to the answer.
</p>

<p>
Snuke has realized that their solutions are both incorrect, and he wants to know the number of inputs for which neither of their solutions gives the correct answer.
</p>

<p>
Among the $(N!)^2$possible inputs, find the number, modulo $998244353$, of inputs for which neither Alice's nor Bob's solution gives the correct answer.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N\leq 2\times 10^5$
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

$N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the answer as an integer.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

4

</div>

<p>
The following four inputs satisfy the condition.
</p>

<ul>

<li>
$P=(2,3,1),Q=(2,1,3)$
</li>

<li>
$P=(2,3,1),Q=(3,1,2)$
</li>

<li>
$P=(3,1,2),Q=(2,1,3)$
</li>

<li>
$P=(3,1,2),Q=(3,1,2)$
</li>

</ul>

<p>
For example, for the input $P=(2,3,1),Q=(2,1,3)$, the correct answer is $1$, but Alice's solution gives $2$and Bob's gives $3$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2

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
There may be no inputs that satisfy the condition.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

6

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

314708

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

318

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

321484323

</div>

</section>

</div>

</span>

</span>

</div>
