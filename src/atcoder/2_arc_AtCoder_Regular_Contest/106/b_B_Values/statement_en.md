
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
Given is a simple undirected graph with $N$vertices and $M$edges. The $i$-th edge connects Vertex $c_i$and Vertex $d_i$.
Initially, Vertex $i$has the value $a_i$written on it. You want to change the values on Vertex $1$, $\ldots$, Vertex $N$to $b_1$, $\cdots$, $b_N$, respectively, by doing the operation below zero or more times.
</p>

<ul>

<li>
Choose an edge, and let Vertex $x$and Vertex $y$be the vertices connected by that edge. Choose one of the following and do it:
<ul>

<li>
Decrease the value $a_x$by $1$, and increase the value $a_y$by $1$.
</li>

<li>
Increase the value $a_x$by $1$, and decrease the value $a_y$by $1$.
</li>

</ul>

</li>

</ul>

<p>
Determine whether it is possible to achieve the objective by properly doing the operation.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 2 \times 10^5$
</li>

<li>
$0 \leq M \leq 2 \times 10^5$
</li>

<li>
$-10^9 \leq a_i,b_i \leq 10^9$
</li>

<li>
$1 \leq c_i,d_i \leq N$
</li>

<li>
The given graph is simple, that is, has no self-loops and no multi-edges.
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

$N$$M$$a_1$$\cdots$$a_N$$b_1$$\cdots$$b_N$$c_1$$d_1$$\vdots$$c_M$$d_M$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print `Yes`if it is possible to achieve the objective by properly doing the operation, and `No`otherwise.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 2
1 2 3
2 2 2
1 2
2 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes

</div>

<p>
You can achieve the objective by, for example, doing the operation as follows:
</p>

<ul>

<li>
In the first operation, choose the edge connecting Vertex $1$and $2$. Then, increase $a_1$by $1$and decrease $a_2$by $1$.
</li>

<li>
In the second operation, choose the edge connecting Vertex $2$and $3$. Then, increase $a_2$by $1$and decrease $a_3$by $1$.
</li>

</ul>

<p>
This sequence of operations makes $a_1=2$, $a_2=2$, and $a_3=2$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

1 0
5
5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

Yes

</div>

<p>
The objective may be achieved already in the beginning.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

2 1
1 1
2 1
1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

No

</div>

<p>
There is no way to do the operation to achieve the objective.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

17 9
-905371741 -999219903 969314057 -989982132 -87720225 -175700172 -993990465 929461728 895449935 -999016241 782467448 -906404298 578539175 9684413 -619191091 -952046546 125053320
-440503430 -997661446 -912471383 -995879434 932992245 -928388880 -616761933 929461728 210953513 -994677396 648190629 -530944122 578539175 9684413 595786809 -952046546 125053320
2 10
6 12
9 11
11 5
7 6
3 15
3 1
1 9
10 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

Yes

</div>

</section>

</div>

</span>

</span>

</div>
