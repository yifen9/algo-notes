
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
There are $N$boxes.
For $i = 1, 2, \ldots, N$, the $i$-th box contains $A_i$red balls and $B_i$blue balls.
</p>

<p>
You are also given two permutations $P = (P_1, P_2, \ldots, P_N)$and $Q = (Q_1, Q_2, \ldots, Q_N)$of $(1, 2, \ldots, N)$.
</p>

<p>
Takahashi can repeat the following operation any number of times, possibly zero:
</p>

<ul>

<li>
Choose an integer $1 \leq i \leq N$, and take all the balls from the $i$-th box into his hand.
</li>

<li>
Put all the red balls in his hand into the $P_i$-th box.
</li>

<li>
Put all the blue balls in his hand into the $Q_i$-th box.
</li>

</ul>

<p>
His goal is to make a state where all boxes other than the $X$-th box contain no balls by repeating the above operations.
Determine whether it is possible to achieve his goal, and if possible, print the minimum number of operations needed to achieve it.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

<li>
$0 \leq A_i, B_i \leq 1$
</li>

<li>
$1 \leq P_i, Q_i \leq N$
</li>

<li>
$P$and $Q$are permutations of $(1, 2, \ldots, N)$.
</li>

<li>
$1 \leq X \leq N$
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

$N$$X$$A_1$$A_2$$\ldots$$A_N$$B_1$$B_2$$\ldots$$B_N$$P_1$$P_2$$\ldots$$P_N$$Q_1$$Q_2$$\ldots$$Q_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If it is impossible for Takahashi to achieve a state where all boxes other than the $X$-th box contain no balls, print `-1`. If it is possible, print the minimum number of operations needed to achieve it.
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
0 1 0 1 0
0 0 1 0 1
4 1 2 3 5
3 4 5 2 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

4

</div>

<p>
The numbers of red and blue balls in each box are $A = (0, 1, 0, 1, 0)$and $B = (0, 0, 1, 0, 1)$, respectively.
Consider the following steps:
</p>

<ul>

<li>
First, perform the operation on the 5th box. As a result, $A = (0, 1, 0, 1, 0)$, $B = (1, 0, 1, 0, 0)$.
</li>

<li>
Next, perform the operation on the 2nd box. As a result, $A = (1, 0, 0, 1, 0)$, $B = (1, 0, 1, 0, 0)$.
</li>

<li>
Then, perform the operation on the 1st box. As a result, $A = (0, 0, 0, 2, 0)$, $B = (0, 0, 2, 0, 0)$.
</li>

<li>
Finally, perform the operation on the 4th box. As a result, $A = (0, 0, 2, 0, 0)$, $B = (0, 0, 2, 0, 0)$.
</li>

</ul>

<p>
These four operations achieve a state where all boxes other than the $X$-th (3rd) box contain no balls.
This is the minimum number of operations possible.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 3
0 0 0 0 0
0 0 0 0 0
4 1 2 3 5
3 4 5 2 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

0

</div>

<p>
There are no balls in any boxes.
Thus, the state where all boxes other than the $X$-th (3rd) box contain no balls is already achieved, so the required number of operations is $0$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

2 2
1 1
1 1
1 2
1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

-1

</div>

<p>
There is no way to perform the operation to achieve a state where all boxes other than the $X$-th (2nd) box contain no balls.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

10 10
0 0 0 0 0 0 1 0 1 0
0 0 0 0 1 1 0 0 1 0
1 4 9 5 8 2 3 6 10 7
7 4 9 10 6 3 1 2 8 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

8

</div>

</section>

</div>

</span>

</span>

</div>
