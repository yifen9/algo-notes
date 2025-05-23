
<div>

<span>

<span>

<p>
Score : $475$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There are $N$roulette wheels.
The $i$-th $(1\leq i\leq N)$wheel has $P _ i$integers $S _ {i,1},S _ {i,2},\ldots,S _ {i,P _ i}$written on it, and you can play it once by paying $C _ i$yen.
When you play the $i$-th wheel once, an integer $j$between $1$and $P _ i$, inclusive, is chosen uniformly at random, and you earn $S _ {i,j}$points.
</p>

<p>
The points you earn from the wheels are determined independently of past results.
</p>

<p>
Takahashi wants to earn at least $M$points.
Takahashi will act to minimize the amount of money he pays before he earns at least $M$points.
After each play, he can choose which wheel to play next based on the previous results.
</p>

<p>
Find the expected amount of money Takahashi will pay before he earns at least $M$points.
</p>

<details>

<summary>
More formal definition
</summary>

<p>
Here is a more formal statement.
For a strategy that Takahashi can adopt in choosing which wheel to play, the expected amount of money $E$that he pays before he earns at least $M$points with that strategy is defined as follows.
</p>

<ul>

<li>
For a natural number $X$, let $f(X)$be the expected amount of money Takahashi pays before he earns at least $M$points or plays the wheels $X$times in total according to that strategy. Let $E=\displaystyle\lim _ {X\to+\infty}f(X)$.
</li>

</ul>

<p>
Under the conditions of this problem, it can be proved that $\displaystyle\lim _ {X\to+\infty}f(X)$is finite no matter what strategy Takahashi adopts.
Find the value of $E$when he adopts a strategy that minimizes $E$.
</p>

</details>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N\leq 100$
</li>

<li>
$1\leq M\leq 100$
</li>

<li>
$1\leq C _ i\leq 10 ^ 4\ (1\leq i\leq N)$
</li>

<li>
$1\leq P _ i\leq 100\ (1\leq i\leq N)$
</li>

<li>
$0\leq S _ {i,j}\leq M\ (1\leq i\leq N,1\leq j\leq P _ i)$
</li>

<li>
$\displaystyle\sum _ {j=1}^{P _ i}S _ {i,j}\gt0\ (1\leq i\leq N)$
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

$N$$M$$C _ 1$$P _ 1$$S _ {1,1}$$S _ {1,2}$$\ldots$$S _ {1,P _ 1}$$C _ 2$$P _ 2$$S _ {2,1}$$S _ {2,2}$$\ldots$$S _ {2,P _ 2}$$\vdots$$C _ N$$P _ N$$S _ {N,1}$$S _ {N,2}$$\ldots$$S _ {N,P _ N}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the expected amount of money Takahashi will pay until he earns at least $M$points in a single line.
Your output will be considered correct when the relative or absolute error from the true value is at most $10 ^ {-5}$.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 14
100 2 5 9
50 4 1 2 4 8
70 5 2 4 2 8 8

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

215.913355350494384765625

</div>

<p>
For instance, Takahashi can play the wheels as follows.
</p>

<ul>

<li>
Pay $50$yen to play roulette $2$and earn $S _ {2,4}=8$points.
</li>

<li>
Pay $50$yen to play roulette $2$and earn $S _ {2,1}=1$point.
</li>

<li>
Pay $100$yen to play roulette $1$and earn $S _ {1,1}=5$points. He has earned a total of $8+1+5\geq14$points, so he quits playing.
</li>

</ul>

<p>
In this case, he pays $200$yen before earning $14$points.
</p>

<p>
Your output will be considered correct when the relative or absolute error from the true value is at most $10 ^ {-5}$, so outputs such as `215.9112`and `215.9155`would also be considered correct.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2 100
1 2 1 2
10 6 0 0 0 0 0 100

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

60

</div>

<p>
It is optimal to keep spinning roulette $2$until you get $100$points.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

20 90
3252 9 0 4 2 7 3 2 3 2 4
2147 1 1
4033 8 0 4 1 7 5 2 5 0
3795 6 6 6 2 3 2 2
3941 7 2 4 4 7 2 0 5
2815 6 2 1 0 5 2 2
3020 2 3 6
3858 9 4 2 7 3 0 4 4 6 5
4533 10 3 6 4 0 6 4 4 2 7 7
4198 8 6 7 0 6 3 6 5 6
3739 8 2 7 1 5 1 4 4 7
2465 4 1 4 0 1
4418 9 7 6 2 4 6 1 5 0 7
5450 12 0 4 4 7 7 4 4 5 4 5 3 7
4196 9 1 6 5 5 7 2 3 6 3
4776 9 2 2 7 3 6 6 1 6 6
2286 3 3 5 6
3152 3 4 1 5
3509 7 0 6 7 0 1 0 3
2913 6 0 1 5 0 5 6

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

45037.072314895291126319493887599716

</div>

</section>

</div>

</span>

</span>

</div>
