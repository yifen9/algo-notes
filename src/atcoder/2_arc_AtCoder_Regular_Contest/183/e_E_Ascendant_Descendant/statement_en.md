
<div>

<span>

<span>

<p>
Score : $900$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There is a rooted tree with $N$vertices numbered from $1$to $N$.
The root is vertex $1$, and the parent of vertex $i$($2 \leq i \leq N$) is vertex $P_i$($P_i<i$).
</p>

<p>
There are also integer sequences of length $M$: $A=(A_1,A_2,\cdots,A_M)$and $B=(B_1,B_2,\cdots,B_M)$, consisting of integers between $1$and $N$, inclusive.
</p>

<p>
$A$is said to be 
<strong>
good
</strong>
if and only if for each $i$, vertex $A_i$is an ancestor of vertex $B_i$or $A_i=B_i$.
Initially, $A$is good.
</p>

<p>
Consider the following operation on $A$.
</p>

<ul>

<li>
Choose an integer $i$($1 \leq i \leq M-1$) and swap the values of $A_i$and $A_{i+1}$.
Here, $A$must remain good after the operation.
</li>

</ul>

<p>
Find the number, modulo $998244353$, of sequences that can result from performing this operation on $A$zero or more times.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq N \leq 250000$
</li>

<li>
$2 \leq M \leq 250000$
</li>

<li>
$1 \leq P_i <i$
</li>

<li>
$1 \leq A_i \leq B_i \leq N$
</li>

<li>
Vertex $A_i$is an ancestor of vertex $B_i$or $A_i=B_i$.
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

$N$$M$$P_2$$P_3$$\cdots$$P_N$$A_1$$A_2$$\cdots$$A_M$$B_1$$B_2$$\cdots$$B_M$
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

3 3
1 2
1 2 1
1 2 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2

</div>

<p>
Consider choosing $i=1$. The $A=(2,1,1)$after the operation is not good, so this operation is invalid.
</p>

<p>
Consider choosing $i=2$. The $A=(1,1,2)$after the operation is good, so this operation is valid.
</p>

<p>
There are two sequences that can result from performing zero or more operations on $A$: $A=(1,2,1)$and $(1,1,2)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4 3
1 1 1
2 3 4
2 3 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

8 13
1 2 2 3 4 4 3
5 3 2 5 4 6 2 8 2 6 7 4 7
5 5 8 5 6 6 5 8 3 6 7 4 7

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

8

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

30 27
1 2 1 1 5 1 7 1 5 10 1 12 12 13 15 16 12 18 19 18 21 21 23 13 18 18 27 27 13
1 18 1 5 11 12 1 1 1 12 1 12 1 15 1 1 21 1 12 10 2 8 3 1 1 30 12
14 27 30 5 11 17 1 18 24 27 29 27 19 15 28 5 21 21 29 11 2 8 3 4 10 30 22

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

60

</div>

</section>

</div>

</span>

</span>

</div>
