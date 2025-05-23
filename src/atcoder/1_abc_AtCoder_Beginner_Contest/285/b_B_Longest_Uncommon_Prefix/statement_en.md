
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
You are given a string $S$of length $N$consisting of lowercase English letters.  The $x$-th $(1 \le x \le N)$character of $S$is $S_x$.
</p>

<p>
For each $i=1,2,\dots,N-1$, find the maximum non-negative integer $l$that satisfies all of the following conditions:
</p>

<ul>

<li>
$l+i \le N$, and
</li>

<li>
for all integers $k$such that $1 \le k \le l$, it holds that $S_{k} \neq S_{k+i}$.
</li>

</ul>

<p>
Note that $l=0$always satisfies the conditions.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$N$is an integer such that $2 \le N \le 5000$.
</li>

<li>
$S$is a string of length $N$consisting of lowercase English letters.
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

$N$$S$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $(N-1)$lines.  The $x$-th $(1 \le x < N)$line should contain the answer as an integer when $i=x$.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

6
abcbac

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

5
1
2
0
1

</div>

<p>
In this input, $S=$`abcbac`.  
</p>

<ul>

<li>
When $i=1$, we have $S_1 \neq S_2, S_2 \neq S_3, \dots$, and $S_5 \neq S_6$, so the maximum value is $l=5$.
</li>

<li>
When $i=2$, we have $S_1 \neq S_3$but $S_2 = S_4$, so the maximum value is $l=1$.
</li>

<li>
When $i=3$, we have $S_1 \neq S_4$and $S_2 \neq S_5$but $S_3 = S_6$, so the maximum value is $l=2$.
</li>

<li>
When $i=4$, we have $S_1 = S_5$, so the maximum value is $l=0$.
</li>

<li>
When $i=5$, we have $S_1 \neq S_6$, so the maximum value is $l=1$.
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
