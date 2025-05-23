
<div>

<span>

<span>

<p>
Score: $500$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There is an integer sequence $A=(A_1,A_2,\ldots,A_N)$of length $N$, where all elements are initially set to $0$. Also, there is a set $S$, which is initially empty.
</p>

<p>
Perform the following $Q$queries in order. Find the value of each element in the sequence $A$after processing all $Q$queries. The $i$-th query is in the following format:
</p>

<ul>

<li>
An integer $x_i$is given. If the integer $x_i$is contained in $S$, remove $x_i$from $S$. Otherwise, insert $x_i$to $S$. Then, for each $j=1,2,\ldots,N$, add $|S|$to $A_j$if $j\in S$.
</li>

</ul>

<p>
Here, $|S|$denotes the number of elements in the set $S$. For example, if $S=\lbrace 3,4,7\rbrace$, then $|S|=3$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N,Q\leq 2\times10^5$
</li>

<li>
$1\leq x_i\leq N$
</li>

<li>
All given numbers are integers.
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

$N$$Q$$x_1$$x_2$$\ldots$$x_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the sequence $A$after processing all queries in the following format:
</p>

<div>

$A_1$$A_2$$\ldots$$A_N$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 4
1 3 3 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

6 2 2

</div>

<p>
In the first query, $1$is inserted to $S$, making $S=\lbrace 1\rbrace$. Then, $|S|=1$is added to $A_1$. The sequence becomes $A=(1,0,0)$.
</p>

<p>
In the second query, $3$is inserted to $S$, making $S=\lbrace 1,3\rbrace$. Then, $|S|=2$is added to $A_1$and $A_3$. The sequence becomes $A=(3,0,2)$.
</p>

<p>
In the third query, $3$is removed from $S$, making $S=\lbrace 1\rbrace$. Then, $|S|=1$is added to $A_1$. The sequence becomes $A=(4,0,2)$.
</p>

<p>
In the fourth query, $2$is inserted to $S$, making $S=\lbrace 1,2\rbrace$. Then, $|S|=2$is added to $A_1$and $A_2$. The sequence becomes $A=(6,2,2)$.
</p>

<p>
Eventually, the sequence becomes $A=(6,2,2)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4 6
1 2 3 2 4 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

15 9 12 7

</div>

</section>

</div>

</span>

</span>

</div>
