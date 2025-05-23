
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
You are given integer sequences of length $N$: $A=(A_1,A_2,\cdots,A_N)$and $B=(B_1,B_2,\cdots,B_N)$, and an integer $K$.
</p>

<p>
You can perform the following operation zero or more times.
</p>

<ul>

<li>
Choose integers $i$and $j$($1 \leq i,j \leq N$).
Here, $|i-j| \leq K$must hold.
Then, change the value of $A_i$to $A_j$.
</li>

</ul>

<p>
Determine whether it is possible to make $A$identical to $B$.
</p>

<p>
There are $T$test cases for each input.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq T \leq 125000$
</li>

<li>
$1 \leq K < N \leq 250000$
</li>

<li>
$1 \leq A_i,B_i \leq N$
</li>

<li>
The sum of $N$across all test cases in each input is at most $250000$.
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

$T$$case_1$$case_2$$\vdots$$case_T$
</div>

<p>
Each test case is given in the following format:
</p>

<div>

$N$$K$$A_1$$A_2$$\cdots$$A_N$$B_1$$B_2$$\cdots$$B_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
For each test case, print `Yes`if it is possible to make $A$identical to $B$, and `No`otherwise.
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
3 1
1 1 2
1 2 2
5 4
2 4 5 1 3
2 1 3 2 2
13 1
3 1 3 3 5 3 3 4 2 2 2 5 1
5 3 3 3 4 2 2 2 2 5 5 1 3
20 14
10 6 6 19 13 16 15 15 2 10 2 16 9 12 2 6 13 5 5 9
5 9 6 2 10 19 16 15 13 12 10 2 9 6 5 16 19 12 15 13

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes
Yes
No
Yes

</div>

<p>
Consider the first test case.
If we operate with $i=2$and $j=3$, the value of $A_2$will be changed to $A_3=2$, resulting in $A=(1,2,2)$.
</p>

</section>

</div>

</span>

</span>

</div>
