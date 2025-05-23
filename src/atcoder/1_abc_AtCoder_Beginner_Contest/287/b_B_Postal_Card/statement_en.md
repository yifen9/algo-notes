
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
You are given $N$strings of length six each, consisting of digits.  Let $S_i$be the $i$-th $(i = 1, 2, \dots, N)$of them.
</p>

<p>
You are also given $M$strings of length three each, consisting of digits.  Let $T_j$be the $j$-th $(j = 1, 2, \dots, M)$of them.
</p>

<p>
Find the number of strings among $S_1, S_2, \dots, S_N$whose last three characters coincide with one or more of $T_1, T_2, \dots, T_M$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N, M \leq 1000$
</li>

<li>
$N$and $M$are integers.
</li>

<li>
$S_i$is a string of length $6$consisting of digits, for all $i = 1, 2, \dots, N$.
</li>

<li>
$T_j$is a string of length $3$consisting of digits, for all $j = 1, 2, \dots, M$.
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

$N$$M$$S_1$$S_2$$\vdots$$S_N$$T_1$$T_2$$\vdots$$T_M$
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
142857
004159
071028
159
287
857

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
The last three characters of $S_1$are `857`, which coincide with $T_3$.

The last three characters of $S_2$are `159`, which coincide with $T_1$.

The last three characters of $S_3$are `028`, which do not coincide with $T_1$, $T_2$, or $T_3$.  
</p>

<p>
Thus, the answer is $2$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 4
235983
109467
823476
592801
000333
333
108
467
983

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

3

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

4 4
000000
123456
987111
000000
000
111
999
111

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

3

</div>

</section>

</div>

</span>

</span>

</div>
