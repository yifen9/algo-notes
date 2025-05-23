
<div>

<span>

<span>

<p>
Score : $500$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There are $N$cities numbered $1$through $N$, and $M$buses that go between these cities. The $i$-th bus $(1 \leq i \leq M)$departs from City $A_i$at time $S_i+0.5$and arrive at City $B_i$at time $T_i+0.5$.
</p>

<p>
Takahashi will travel between these $N$cities. When he is in City $p$at time $t$, he will do the following.
</p>

<ol>

<li>
If there is a bus that departs from City $p$not earlier than time $t$, take the bus that departs the earliest among those buses to get to another city.
</li>

<li>
If there is no such bus, do nothing and stay in City $p$.
</li>

</ol>

<p>
Takahashi repeats doing the above until there is no bus to take. It is guaranteed that all $M$buses depart at different times, so the bus to take is always uniquely determined. Additionally, the time needed to change buses is negligible.
</p>

<p>
Here is your task: process $Q$queries, the $i$-th $(1 \leq i \leq Q)$of which is as follows.
</p>

<ul>

<li>
If Takahashi begins his travel in City $Y_i$at time $X_i$, in which city or on which bus will he be at time $Z_i$?
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq N \leq 10^5$
</li>

<li>
$1 \leq M \leq 10^5$
</li>

<li>
$1 \leq Q \leq 10^5$
</li>

<li>
$1 \leq A_i,B_i \leq N\ (1 \leq i \leq M)$
</li>

<li>
$A_i \neq B_i\ (1 \leq i \leq M)$
</li>

<li>
$1 \leq S_i \lt T_i \leq 10^9\ (1 \leq i \leq M)$
</li>

<li>
$S_i \neq S_j\ (i \neq j)$
</li>

<li>
$1 \leq X_i \lt Z_i \leq 10^9\ (1 \leq i \leq Q)$
</li>

<li>
$1 \leq Y_i \leq N\ (1 \leq i \leq Q)$
</li>

<li>
All values in input are integers.
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

$N$$M$$Q$$A_1$$B_1$$S_1$$T_1$$A_2$$B_2$$S_2$$T_2$$\hspace{1.8cm}\vdots$$A_M$$B_M$$S_M$$T_M$$X_1$$Y_1$$Z_1$$X_2$$Y_2$$Z_2$$\hspace{1.2cm}\vdots$$X_Q$$Y_Q$$Z_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $Q$lines. The $i$-th line should contain the response to the $i$-th query as follows.
</p>

<ul>

<li>
If Takashi is on some bus at time $Z_i$, print two integers representing the city from which the bus departs and the city at which the bus arrives, in this order, with a space between them.
</li>

<li>
Otherwise, that is, if Takahashi is in some city at time $Z_i$, print an integer representing that city.
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 2 3
1 2 1 3
2 3 3 5
1 1 5
2 2 3
1 3 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2 3
2
3

</div>

<p>
In the first query, Takahashi will travel as follows.
</p>

<ol>

<li>
Start in City $1$at time $1$.
</li>

<li>
Take the bus that departs from City $1$at time $1.5$and arrives at City $2$at time $3.5$.
</li>

<li>
Take the bus that departs from City $2$at time $3.5$and arrives at City $3$at time $5.5$.
</li>

<li>
Since no bus departs from City $3$at time $5.5$or later, stay in City $3$(forever).
</li>

</ol>

<p>
At time $5$, he will be on the bus that departs from City $2$and arrives at City $3$. Thus, as specified in the Output section, we should print $2$and $3$with a space between them.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

8 10 10
4 3 329982133 872113932
6 8 101082040 756263297
4 7 515073851 793074419
8 7 899017043 941751547
5 7 295510441 597348810
7 2 688716395 890599546
6 1 414221915 748470452
6 4 810915860 904512496
3 1 497469654 973509612
4 1 307142272 872178157
374358788 4 509276232
243448834 6 585993193
156350864 4 682491610
131643541 8 836902943
152874385 6 495945159
382276121 1 481368090
552433623 2 884584430
580376205 2 639442239
108790644 7 879874292
883275610 1 994982498

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

4
6 1
4 1
8
6 1
1
2
2
7 2
1

</div>

</section>

</div>

</span>

</span>

</div>
