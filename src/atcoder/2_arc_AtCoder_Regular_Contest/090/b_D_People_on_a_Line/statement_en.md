
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
There are $N$people standing on the $x$-axis.
Let the coordinate of Person $i$be $x_i$.
For every $i$, $x_i$is an integer between $0$and $10^9$(inclusive).
It is possible that more than one person is standing at the same coordinate.
</p>

<p>
You will given $M$pieces of information regarding the positions of these people.
The $i$-th piece of information has the form $(L_i, R_i, D_i)$.
This means that Person $R_i$is to the right of Person $L_i$by $D_i$units of distance, that is, $x_{R_i} - x_{L_i} = D_i$holds.
</p>

<p>
It turns out that some of these $M$pieces of information may be incorrect.
Determine if there exists a set of values $(x_1, x_2, ..., x_N)$that is consistent with the given pieces of information.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 100$$000$
</li>

<li>
$0 \leq M \leq 200$$000$
</li>

<li>
$1 \leq L_i, R_i \leq N$($1 \leq i \leq M$)
</li>

<li>
$0 \leq D_i \leq 10$$000$($1 \leq i \leq M$)
</li>

<li>
$L_i \neq R_i$($1 \leq i \leq M$)
</li>

<li>
If $i \neq j$, then $(L_i, R_i) \neq (L_j, R_j)$and $(L_i, R_i) \neq (R_j, L_j)$.
</li>

<li>
$D_i$are integers.
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

$N$$M$$L_1$$R_1$$D_1$$L_2$$R_2$$D_2$$:$$L_M$$R_M$$D_M$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If there exists a set of values $(x_1, x_2, ..., x_N)$that is consistent with all given pieces of information, print `Yes`; if it does not exist, print `No`.
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
1 2 1
2 3 1
1 3 2

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
Some possible sets of values $(x_1, x_2, x_3)$are $(0, 1, 2)$and $(101, 102, 103)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3 3
1 2 1
2 3 1
1 3 5

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
If the first two pieces of information are correct, $x_3 - x_1 = 2$holds, which is contradictory to the last piece of information.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

4 3
2 1 1
2 3 5
3 4 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

Yes

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

10 3
8 7 100
7 9 100
9 8 100

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

No

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 5**

<div>

100 0

</div>

</section>

</div>

<div>

<section>

### **Sample Output 5**

<div>

Yes

</div>

</section>

</div>

</span>

</span>

</div>
