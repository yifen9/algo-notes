
<div>

<span>

<span>

<p>
Score : $350$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given an integer sequence $A=(A_1,A_2,\ldots,A_N)$of length $N$.
</p>

<p>
Process $Q$queries in order. There are two types of queries, given in the following formats:
</p>

<ul>

<li>
`1 c`: Perform the operation of moving the first element of $A$to the end $c$times.
</li>

<li>
`2 l r`: Output the value of $\displaystyle \sum_{i=l}^r A_i$.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\le N\le 2\times 10^5$
</li>

<li>
$1\le Q\le 2\times 10^5$
</li>

<li>
$1\le A_i \le 10^9$
</li>

<li>
$1\le c\le N$
</li>

<li>
$1\le l\le r \le N$
</li>

<li>
At least one query of the second type exists.
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

$N$$Q$$A_1$$A_2$$\ldots$$A_N$$\text{query}_1$$\text{query}_2$$\vdots$$\text{query}_Q$
</div>

<p>
Each query $\text{query}_i$is given in one of the following two formats:
</p>

<div>

$1$$c$
</div>

<div>

$2$$l$$r$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Following the instructions in the problem statement, output the answers to the second type queries, separated by newlines.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4 3
3 1 4 5
2 1 3
1 1
2 2 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

8
9

</div>

<p>
Each query is processed as follows:
</p>

<ul>

<li>
First query: $A_1+A_2+A_3=3+1+4=8$, so output $8$.
</li>

<li>
Second query: $A=(3,1,4,5)$changes to $A=(1,4,5,3)$.
</li>

<li>
Third query: $A_2+A_3=4+5=9$, so output $9$.
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 7
1 2 4 8 16
2 1 5
1 4
1 5
2 1 5
2 2 4
1 1
2 3 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

31
31
7
4

</div>

</section>

</div>

</span>

</span>

</div>
