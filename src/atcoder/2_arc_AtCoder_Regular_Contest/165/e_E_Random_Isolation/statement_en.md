
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
There is a tree with $N$vertices numbered $1$to $N$. The $i$-th edge connects vertices $A_i$and $B_i$.
</p>

<p>
Let us keep performing the following operation until each connected component of the graph has $K$or fewer vertices.
</p>

<ul>

<li>
From the $N$vertices, choose one uniformly at random that belongs to a connected component with $K+1$or more vertices. Delete all edges with the chosen vertex as an endpoint.
</li>

</ul>

<p>
Find the expected value of the number of times the operation is performed, modulo $998244353$.
</p>

<details>

<summary>
How to print an expected value modulo $\text{mod }{998244353}$
</summary>

<p>
It can be proved that the sought expected value is always a rational number. Additionally, under the constraints of this problem, it can also be proved that when that value is represented as an irreducible fraction $\frac{P}{Q}$, we have $Q \not \equiv 0 \pmod{998244353}$. Thus, there is a unique integer $R$such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R < 998244353$. Report this $R$.


</p>

</details>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq K < N \leq 100$
</li>

<li>
$1 \leq A_i,B_i \leq N$
</li>

<li>
The given graph is a tree.
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

$N$$K$$A_1$$B_1$$A_2$$B_2$$\vdots$$A_{N-1}$$B_{N-1}$
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

4 2
1 2
2 3
2 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

249561090

</div>

<p>
For example, if the first operation chooses vertex $2$, it deletes all edges, after which each connected component has not more than two vertices, so we finish performing the operation. On the other hand, if the first operation chooses vertex $1$, there will still be a connected component with vertices $2$, $3$, and $4$, so we perform the second operation.
</p>

<p>
The expected value of the number of operations is $\frac{7}{4}$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

20 10
16 8
6 2
18 3
3 12
5 1
13 9
13 19
3 11
5 13
17 6
8 14
1 16
16 20
11 15
3 10
15 4
5 18
1 7
1 17

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

181196154

</div>

</section>

</div>

</span>

</span>

</div>
