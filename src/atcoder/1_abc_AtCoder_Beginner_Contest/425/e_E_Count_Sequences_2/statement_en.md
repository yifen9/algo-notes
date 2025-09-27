
<div>

<span>

<span>

<p>
Score : $450$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given a positive integer $N$and a sequence of positive integers $C=(C_1,C_2,\ldots,C_N)$of length $N$.
</p>

<p>
Find, modulo a given positive integer $M$, the number of sequences of positive integers that satisfy all of the following conditions.
</p>

<ul>

<li>
All elements of the sequence are between $1$and $N$, inclusive.
</li>

<li>
For each $i=1,2,\ldots,N$, the value $i$appears exactly $C_i$times in the sequence.
</li>

</ul>

<p>
$T$test cases are given, so find the answer for each. $M$is common to all $T$test cases.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq T\leq 10^5$
</li>

<li>
$2\leq M\leq 10^9$
</li>

<li>
$1\leq N$
</li>

<li>
$1\leq C_i$
</li>

<li>
$\sum_{i=1}^N C_i\leq 5000$
</li>

<li>
The sum of $N$over all test cases is at most $3\times 10^5$.
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

$T$$M$$\mathrm{case}_1$$\mathrm{case}_2$$\vdots$$\mathrm{case}_T$
</div>

<p>
The $i$-th test case, $\mathrm{case}_i$, is given in the following format:
</p>

<div>

$N$$C_1$$C_2$$\ldots$$C_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Output $T$lines. The $i$-th line should contain the answer for the $i$-th test case.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 1000000000
2
2 2
5
1 1 1 1 1
6
1 2 3 4 5 6

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

6
120
230379200

</div>

<p>
For the first test case, the sequences that satisfy the conditions are $(1,1,2,2),(1,2,1,2),(1,2,2,1),(2,1,1,2),(2,1,2,1),(2,2,1,1)$, which is six sequences.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3 998244353
1
1
3
4 2 5
10
500 500 500 500 500 500 500 500 500 500

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1
6930
261233246

</div>

</section>

</div>

</span>

</span>

</div>
