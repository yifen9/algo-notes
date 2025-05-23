
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
You are given a sequence of $N$numbers: $A=(A_1,A_2,\ldots,A_N)$. Here, each $A_i$$(1\leq i\leq N)$satisfies $1\leq A_i \leq N$.
</p>

<p>
Takahashi and Aoki will play $N$rounds of a game. For each $i=1,2,\ldots,N$, the $i$-th game will be played as follows.
</p>

<ol>

<li>
Aoki specifies a positive integer $K_i$.
</li>

<li>
After knowing $K_i$Aoki has specified, Takahashi chooses an integer $S_i$between $1$and $N$, inclusive, and writes it on a blackboard.
</li>

<li>

<p>
Repeat the following $K_i$times.
</p>

<ul>

<li>
Replace the integer $x$written on the blackboard with $A_x$.
</li>

</ul>

</li>

</ol>

<p>
If $i$is written on the blackboard after the $K_i$iterations, Takahashi wins the $i$-th round; otherwise, Aoki wins.

Here, $K_i$and $S_i$can be chosen independently for each $i=1,2,\ldots,N$.
</p>

<p>
Find the number of rounds Takahashi wins if both players play optimally to win.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N\leq 2\times 10^5$
</li>

<li>
$1\leq A_i\leq N$
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

$N$$A_1$$A_2$$\ldots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Find the number of rounds Takahashi wins if both players play optimally to win.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3
2 2 3

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
In the first round, if Aoki specifies $K_1=2$, Takahashi cannot win whichever option he chooses for $S_1$: $1$, $2$, or $3$.
</p>

<p>
For example, if Takahashi writes $S_1=1$on the initial blackboard, the two operations will change this number as follows: $1\to 2(=A_1)$, $2\to 2(=A_2)$. The final number on the blackboard will be $2(\neq 1)$, so Aoki wins.
</p>

<p>
On the other hand, in the second and third rounds, Takahashi can win by writing $2$and $3$, respectively, on the initial blackboard, whatever value Aoki specifies as $K_i$.
</p>

<p>
Therefore, if both players play optimally to win, Takashi wins two rounds: the second and the third. Thus, you should print $2$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2
2 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

2

</div>

<p>
In the first round, Takahashi can win by writing $2$on the initial blackboard if $K_1$specified by Aoki is odd, and $1$if it is even.
</p>

<p>
Similarly, there is a way for Takahashi to win the second round. Thus, Takahashi can win both rounds: the answer is $2$.
</p>

</section>

</div>

</span>

</span>

</div>
