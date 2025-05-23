
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
There is an infinitely long street that runs west to east, which we consider as a number line.
</p>

<p>
There are $N$roadworks scheduled on this street.
The $i$-th roadwork blocks the point at coordinate $X_i$from time $S_i - 0.5$to time $T_i - 0.5$.
</p>

<p>
$Q$people are standing at coordinate $0$. The $i$-th person will start the coordinate $0$at time $D_i$, continue to walk with speed $1$in the positive direction and stop walking when reaching a blocked point.
</p>

<p>
Find the distance each of the $Q$people will walk.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
All values in input are integers.
</li>

<li>
$1 \leq N, Q \leq 2 \times 10^5$
</li>

<li>
$0 \leq S_i < T_i \leq 10^9$
</li>

<li>
$1 \leq X_i \leq 10^9$
</li>

<li>
$0 \leq D_1 < D_2 < ... < D_Q \leq 10^9$
</li>

<li>
If $i \neq j$and $X_i = X_j$, the intervals $[S_i, T_i)$and $[S_j, T_j)$do not overlap.
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

$N$$Q$$S_1$$T_1$$X_1$$:$$S_N$$T_N$$X_N$$D_1$$:$$D_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $Q$lines. The $i$-th line should contain the distance the $i$-th person will walk or $-1$if that person walks forever.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4 6
1 3 2
7 13 10
18 20 13
3 4 2
0
1
2
3
5
8

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2
2
10
-1
13
-1

</div>

<p>
The first person starts coordinate $0$at time $0$and stops walking at coordinate $2$when reaching a point blocked by the first roadwork at time $2$.
</p>

<p>
The second person starts coordinate $0$at time $1$and reaches coordinate $2$at time $3$. The first roadwork has ended, but the fourth roadwork has begun, so this person also stops walking at coordinate $2$.
</p>

<p>
The fourth and sixth persons encounter no roadworks while walking, so they walk forever. The output for these cases is $-1$.
</p>

</section>

</div>

</span>

</span>

</div>
