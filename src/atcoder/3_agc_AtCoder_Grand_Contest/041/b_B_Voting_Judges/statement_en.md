
<div>

<span>

<span>

<p>
Score : $700$points
</p>

<div>

<section>

### **Problem Statement**

<p>
$N$problems are proposed for an upcoming contest. Problem $i$has an initial integer score of $A_i$points.
</p>

<p>
$M$judges are about to vote for problems they like. Each judge will choose exactly $V$problems, independently from the other judges,
and increase the score of each chosen problem by $1$.
</p>

<p>
After all $M$judges cast their vote, the problems will be sorted in non-increasing order of score, and the first $P$problems will be chosen for the problemset.
Problems with the same score can be ordered arbitrarily, this order is decided by the chief judge.
</p>

<p>
How many problems out of the given $N$have a chance to be chosen for the problemset?
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \le N \le 10^5$
</li>

<li>
$1 \le M \le 10^9$
</li>

<li>
$1 \le V \le N - 1$
</li>

<li>
$1 \le P \le N - 1$
</li>

<li>
$0 \le A_i \le 10^9$
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

$N$$M$$V$$P$$A_1$$A_2$$...$$A_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the number of problems that have a chance to be chosen for the problemset.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

6 1 2 2
2 1 1 3 0 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

5

</div>

<p>
If the only judge votes for problems $2$and $5$, the scores will be $2$$2$$1$$3$$1$$2$.
The problemset will consist of problem $4$and one of problems $1$, $2$, or $6$.
</p>

<p>
If the only judge votes for problems $3$and $4$, the scores will be $2$$1$$2$$4$$0$$2$.
The problemset will consist of problem $4$and one of problems $1$, $3$, or $6$.
</p>

<p>
Thus, problems $1$, $2$, $3$, $4$, and $6$have a chance to be chosen for the problemset. On the contrary, there is no way for problem $5$to be chosen.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

6 1 5 2
2 1 1 3 0 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

3

</div>

<p>
Only problems $1$, $4$, and $6$have a chance to be chosen.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10 4 8 5
7 2 3 6 1 6 5 4 6 5

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

</span>

</span>

</div>
