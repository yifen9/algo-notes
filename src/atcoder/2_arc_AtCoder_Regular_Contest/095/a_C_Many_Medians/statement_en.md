
<div>

<span>

<span>

<p>
Score : $300$points
</p>

<div>

<section>

### **Problem Statement**

<p>
When $l$is an odd number, the median of $l$numbers $a_1, a_2, ..., a_l$is the $(\frac{l+1}{2})$-th largest value among $a_1, a_2, ..., a_l$.
</p>

<p>
You are given $N$numbers $X_1, X_2, ..., X_N$, where $N$is an even number.
For each $i = 1, 2, ..., N$, let the median of $X_1, X_2, ..., X_N$excluding $X_i$, that is, the median of $X_1, X_2, ..., X_{i-1}, X_{i+1}, ..., X_N$be $B_i$.
</p>

<p>
Find $B_i$for each $i = 1, 2, ..., N$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq N \leq 200000$
</li>

<li>
$N$is even.
</li>

<li>
$1 \leq X_i \leq 10^9$
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

$N$$X_1$$X_2$... $X_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $N$lines.
The $i$-th line should contain $B_i$.
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
2 4 4 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

4
3
3
4

</div>

<ul>

<li>
Since the median of $X_2, X_3, X_4$is $4$, $B_1 = 4$.
</li>

<li>
Since the median of $X_1, X_3, X_4$is $3$, $B_2 = 3$.
</li>

<li>
Since the median of $X_1, X_2, X_4$is $3$, $B_3 = 3$.
</li>

<li>
Since the median of $X_1, X_2, X_3$is $4$, $B_4 = 4$.
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2
1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

2
1

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

6
5 5 4 4 3 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

4
4
4
4
4
4

</div>

</section>

</div>

</span>

</span>

</div>
