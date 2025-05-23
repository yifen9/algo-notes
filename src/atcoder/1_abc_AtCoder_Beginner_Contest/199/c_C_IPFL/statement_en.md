
<div>

<span>

<span>

<p>
Score : $300$points
</p>

<div>

<section>

### **Problem Statement**

<p>
We have a string $S$of length $2N$.

You are given $Q$queries on this string.

In the $i$-th query, given three integers $T_i$, $A_i$, and $B_i$, do the following:
</p>

<ul>

<li>
if $T_i = 1$: swap the $A_i$-th and $B_i$-th characters of $S$;
</li>

<li>
if $T_i = 2$: swap the first $N$characters and last $N$characters of $S$(the values $A_i$and $B_i$are not used).

For example, if $S$is `FLIP`, this query makes it `IPFL`.
</li>

</ul>

<p>
Print the string $S$after processing all $Q$queries in the order they are given.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \le N \le 2 \times 10^5$
</li>

<li>
$S$is a string of length $2N$consisting of uppercase English letters.
</li>

<li>
$1 \le Q \le 3 \times 10^5$
</li>

<li>
$T_i$is $1$or $2$.
</li>

<li>
If $T_i = 1$, $1 \le A_i \lt B_i \le 2N$.
</li>

<li>
If $T_i = 2$, $A_i = B_i = 0$.
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

$N$$S$$Q$$T_1$$A_1$$B_1$$T_2$$A_2$$B_2$$T_3$$A_3$$B_3$$\hspace{21pt} \vdots$$T_Q$$A_Q$$B_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the string $S$after processing the queries.
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
FLIP
2
2 0 0
1 1 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

LPFI

</div>

<p>
The $1$-st query swaps the first $N$characters and last $N$characters of $S$, making it `IPFL`.

The $2$-nd query swaps the $1$-st and $4$-th characters of $S$, making it `LPFI`.  
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2
FLIP
6
1 1 3
2 0 0
1 1 2
1 2 3
2 0 0
1 1 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

ILPF

</div>

</section>

</div>

</span>

</span>

</div>
