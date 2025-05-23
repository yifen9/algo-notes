
<div>

<span>

<span>

<p>
Score : $625$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given positive integers $N, K$, and an $N \times N$matrix $C=(C_{i,j})$$(1\leq i,j\leq N)$. It is guaranteed that $C_{i,i} = 0$and $C_{i,j} = C_{j,i}$.
</p>

<p>
There is a weighted complete graph with $N$vertices labeled $1,2,\dots,N$. For each pair of vertices $i$and $j$with $i\lt j$, the weight of the edge connecting vertices $i$and $j$is $C_{i,j}$.
</p>

<p>
You have $Q$queries. In the $i$-th query, you are given a pair of distinct integers $s_i$and $t_i$(both between $K+1$and $N$, inclusive), for which you must solve the following problem.
</p>

<blockquote>

<p>
A 
<strong>
good graph
</strong>
is a 
<strong>
connected
</strong>
graph containing all of the vertices $1,2,\dots,K,s_i,t_i$obtained by removing any number of edges and vertices (possibly zero) from the graph above.
</p>

<p>
The 
<strong>
cost
</strong>
of a good graph is the sum of the weights of its edges.
</p>

<p>
Find the minimum possible cost of a good graph.
</p>

</blockquote>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$3 \leq N \leq 80$
</li>

<li>
$1\leq K\leq \min(N-2,\textcolor{red}{8})$
</li>

<li>
$0 \leq C_{i,j} \leq 10^9 \ (1 \leq i,j \leq N, i \ne j)$
</li>

<li>
$C_{i,j} = C_{j,i} \ (1 \leq i,j \leq N, i \ne j)$
</li>

<li>
$C_{i,i} = 0 \ (1 \leq i \leq N)$
</li>

<li>
$1 \leq Q \leq 5000$
</li>

<li>
$K+1 \leq s_i, t_i \leq N \ (1 \leq i \leq Q)$
</li>

<li>
$s_i \ne t_i \ (1 \leq i \leq Q)$
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

$N$$K$$C_{1,1}$$C_{1,2}$$\dots$$C_{1,N}$$C_{2,1}$$C_{2,2}$$\dots$$C_{2,N}$$\vdots$$C_{N,1}$$C_{N,2}$$\dots$$C_{N,N}$$Q$$s_1$$t_1$$s_2$$t_2$$\vdots$$s_Q$$t_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $Q$lines.
</p>

<p>
The $i$-th line should contain the answer for the $i$-th query.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

5 2
0 395 395 1 1
395 0 1 395 1
395 1 0 395 1
1 395 395 0 1
1 1 1 1 0
3
3 4
3 5
4 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

4
3
3

</div>

<p>
Let “edge $i-j$” denote the edge connecting vertices $i$and $j$.
</p>

<p>
For the first query, it is optimal to keep the following vertices and edges, and remove all others. The cost is $4$.
</p>

<ul>

<li>
Vertices $1,2,3,4,5$
</li>

<li>
Edges $1-4,2-3,3-5,4-5$
</li>

</ul>

<p>
For the second query, it is optimal to keep the following vertices and edges, and remove all others. The cost is $3$.
</p>

<ul>

<li>
Vertices $1,2,3,5$
</li>

<li>
Edges $1-5,2-3,3-5$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

9 5
0 344670307 744280520 967824729 322288793 152036485 628902494 596982638 853214705
344670307 0 249168130 769431650 532405020 981520310 755031424 86416231 284114341
744280520 249168130 0 80707350 256358888 620411718 713892371 272961036 836365490
967824729 769431650 80707350 0 45539861 298766521 722757772 623807668 366719378
322288793 532405020 256358888 45539861 0 361324668 69837030 222135106 935147464
152036485 981520310 620411718 298766521 361324668 0 486834509 225447688 859904884
628902494 755031424 713892371 722757772 69837030 486834509 0 434140395 490910900
596982638 86416231 272961036 623807668 222135106 225447688 434140395 0 22078599
853214705 284114341 836365490 366719378 935147464 859904884 490910900 22078599 0
20
9 7
8 9
9 8
7 6
9 8
8 9
9 7
7 8
7 8
6 9
9 8
9 6
8 6
8 9
6 8
8 7
7 6
8 9
7 6
9 6

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

849002970
779165940
779165940
882119751
779165940
779165940
849002970
826924371
826924371
834361320
779165940
834361320
812282721
779165940
812282721
826924371
882119751
779165940
882119751
834361320

</div>

</section>

</div>

</span>

</span>

</div>
