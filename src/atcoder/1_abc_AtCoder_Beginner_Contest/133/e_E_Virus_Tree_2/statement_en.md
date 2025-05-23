
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
You are given a tree with $N$vertices and $N-1$edges. The vertices are numbered $1$to $N$, and the $i$-th edge connects Vertex $a_i$and $b_i$.
</p>

<p>
You have coloring materials of $K$colors.
For each vertex in the tree, you will choose one of the $K$colors to paint it, so that the following condition is satisfied:
</p>

<ul>

<li>
If the distance between two different vertices $x$and $y$is less than or equal to two, $x$and $y$have different colors.
</li>

</ul>

<p>
How many ways are there to paint the tree? Find the count modulo $1\ 000\ 000\ 007$.
</p>

<p>

</p>

<details>

<summary>
What is tree?
</summary>
A tree is a kind of graph. For detail, please see: <a href="https://ja.wikipedia.org/wiki/%E6%9C%A8_(%E6%95%B0%E5%AD%A6)">Wikipedia "Tree (graph theory)"</a>
<p>

</p>

<p>

</p>

</details>

<p>

</p>

<p>

</p>

<details>

<summary>
What is distance?
</summary>
The distance between two vertices $x$and $y$is the minimum number of edges one has to traverse to get from $x$to $y$.
<p>

</p>

<p>

</p>

</details>

<p>

</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N,K \leq 10^5$
</li>

<li>
$1 \leq a_i,b_i \leq N$
</li>

<li>
The given graph is a tree.
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

$N$$K$$a_1$$b_1$$a_2$$b_2$$.$$.$$.$$a_{N-1}$$b_{N-1}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the number of ways to paint the tree, modulo $1\ 000\ 000\ 007$.
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
1 2
2 3
3 4

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

<img src="https://img.atcoder.jp/ghi/491cd56a53e99ba7677ee4827b8f767a.png">

</img>

</p>

<p>
There are six ways to paint the tree.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 4
1 2
1 3
1 4
4 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

48

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

16 22
12 1
3 1
4 16
7 12
6 2
2 15
5 16
14 16
10 11
3 10
3 13
8 6
16 8
9 12
4 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

271414432

</div>

</section>

</div>

</span>

</span>

</div>
