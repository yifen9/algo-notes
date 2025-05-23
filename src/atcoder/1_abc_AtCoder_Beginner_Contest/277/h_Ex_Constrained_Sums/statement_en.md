
<div>

<span>

<span>

<p>
Score : $600$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Determine whether there is a sequence of $N$integers $X = (X_1, X_2, \ldots ,X_N)$that satisfies all of the following conditions, and construct one such sequence if it exists.


</p>

<ul>

<li>
$0 \leq X_i \leq M$for every $1 \leq i \leq N$.


</li>

<li>
$L_i \leq X_{A_i} + X_{B_i} \leq R_i$for every $1 \leq i \leq Q$.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 10000$
</li>

<li>
$1 \leq M \leq 100$
</li>

<li>
$1 \leq Q \leq 10000$
</li>

<li>
$1 \leq A_i, B_i \leq N$
</li>

<li>
$0 \leq L_i \leq R_i \leq 2 \times M$
</li>

<li>
All values in the input are integers.
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

$N$$M$$Q$$A_1$$B_1$$L_1$$R_1$$A_2$$B_2$$L_2$$R_2$$\vdots$$A_Q$$B_Q$$L_Q$$R_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If there is an integer sequence that satisfies all of the conditions in the Problem Statement, print the elements $X_1, X_2, \ldots, X_N$of one such sequence, separated by spaces. Otherwise, print `-1`.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4 5 3
1 3 5 7
1 4 1 2
2 2 3 8

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2 4 3 0

</div>

<p>
For $X = (2,4,3,0)$, we have $X_1 + X_3 = 5$, $X_1 + X_4 = 2$, and $X_2 + X_2 = 8$, so all conditions are satisfied. There are other sequences, such as $X = (0,2,5,2)$and $X = (1,3,4,1)$, that satisfy all conditions, and those will also be accepted.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3 7 3
1 2 3 4
3 1 9 12
2 3 2 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

-1

</div>

<p>
No sequence $X$satisfies all conditions.
</p>

</section>

</div>

</span>

</span>

</div>
