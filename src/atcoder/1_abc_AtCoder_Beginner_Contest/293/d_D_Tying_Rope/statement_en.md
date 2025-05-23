
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
There are $N$ropes numbered $1$through $N$.  One end of each rope is painted red, and the other is painted blue.
</p>

<p>
You are going to perform $M$operations of tying ropes.  In the $i$-th operation, you tie the end of rope $A_i$painted $B_i$with the end of rope $C_i$painted $D_i$, where `R`means red and `B`means blue.  For each rope, an end with the same color is not tied multiple times.  
</p>

<p>
Find the number of groups of connected ropes that form cycles, and the number of those that do not, after all the operations.  
</p>

<p>
Here, a group of connected ropes $\lbrace v_0, v_1, \ldots, v_{x-1} \rbrace$is said to form a cycle if one can rearrange the elements of $v$so that, for each $0 \leq i < x$, rope $v_i$is tied to rope $v_{(i+1) \bmod x}$.
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
$1 \leq A_i, C_i \leq N$
</li>

<li>
$(A_i, B_i) \neq (A_j, B_j), (C_i, D_i) \neq (C_j, D_j)$$(i \neq j)$
</li>

<li>
$(A_i, B_i) \neq (C_j, D_j)$
</li>

<li>
$N, M, A_i$, and $C_i$are integers.
</li>

<li>
$B_i$is `R`or `B`, and so is $D_i$.
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

$N$$M$$A_1$$B_1$$C_1$$D_1$$A_2$$B_2$$C_2$$D_2$$\vdots$$A_M$$B_M$$C_M$$D_M$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $X$and $Y$in this order, separated by a space, where $X$is the number of groups of connected ropes that form cycles, and $Y$is the number of those that do not.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

5 3
3 R 5 B
5 R 3 B
4 R 2 B

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

1 2

</div>

<p>
There are three groups of connected ropes: $\lbrace 1 \rbrace$, $\lbrace 2,4 \rbrace$, and $\lbrace 3,5 \rbrace$.
</p>

<p>
The group of ropes $\lbrace 3,5 \rbrace$forms a cycle, while the groups of rope $\lbrace 1 \rbrace$and ropes $\lbrace 2,4 \rbrace$do not.  Thus, $X = 1$and $Y = 2$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

7 0

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

0 7

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

7 6
5 R 3 R
7 R 4 R
4 B 1 R
2 R 3 B
2 B 5 B
1 B 7 B

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

2 1

</div>

</section>

</div>

</span>

</span>

</div>
