
<div>

<span>

<span>

<p>
Score : $200$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given an integer sequence $A=(A_1,A_2,\ldots,A_N)$of length $N$. Here, each element of $A$is either $-1$or an integer between $1$and $N$, inclusive.
</p>

<p>
Determine whether there exists an integer sequence $P=(P_1,P_2,\ldots,P_N)$of length $N$that satisfies all of the following conditions, and if it exists, find one.
</p>

<ul>

<li>
$P$is a permutation of $(1,2,\ldots,N)$.
</li>

<li>
For $i=1,2,\ldots,N$, if $A_i \neq -1$, then $P_i=A_i$holds.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\le N\le 10$
</li>

<li>
$A_i=-1$or $1\le A_i \le N$
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

$N$$A_1$$A_2$$\ldots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If there is no $P$that satisfies all conditions, output `No`.
</p>

<p>
Otherwise, output $P$that satisfies all conditions in the following format:
</p>

<div>

Yes
$P_1$$P_2$$\ldots$$P_N$
</div>

<p>
If there are multiple $P$that satisfy all conditions, any of them may be output.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4
-1 -1 2 -1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes
3 1 2 4

</div>

<p>
$P=(3,1,2,4)$satisfies all conditions.
</p>

<p>
Besides this, $P=(1,3,2,4)$or $P=(4,3,2,1)$also satisfies all conditions.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5
-1 -1 1 -1 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

No

</div>

<p>
There is no $P$that satisfies all conditions.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

7
3 -1 4 -1 5 -1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

Yes
3 7 4 1 5 6 2

</div>

</section>

</div>

</span>

</span>

</div>
