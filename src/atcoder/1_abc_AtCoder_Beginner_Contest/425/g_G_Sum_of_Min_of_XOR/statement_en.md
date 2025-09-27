
<div>

<span>

<span>

<p>
Score : $575$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given positive integers $N,M$and a sequence of non-negative integers $A=(A_1,A_2,\ldots,A_N)$of length $N$.
</p>

<p>
Find $\displaystyle \sum_{x=0}^{M-1} \min_{1\le i\le N} \left(x\oplus A_i \right)$.
</p>

<p>
Here, $x\oplus A_i$represents the bitwise $\mathrm{XOR}$of $x$and $A_i$.
</p>

<details>

<summary>
What is bitwise $\mathrm{XOR}$operation?
    
</summary>

<p>
The bitwise $\mathrm{XOR}$of non-negative integers $X,Y$, $X \oplus Y$, is defined as follows:
        
</p>

<ul>

<li>
When $X \oplus Y$is written in binary, the digit in the $2^k$($k \geq 0$) place is $1$if exactly one of $X,Y$has $1$in the $2^k$place when written in binary, and $0$otherwise.
</li>

</ul>
For example, $3 \oplus 5 = 6$(in binary representation: $011 \oplus 101 = 110$).


<p>

</p>

</details>

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
$1\le M\le 10^9$
</li>

<li>
$0\le A_i \le 10^9$
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

$N$$M$$A_1$$A_2$$\ldots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Output the answer.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

2 4
1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2

</div>

<ul>

<li>
When $x=0$: $x\oplus A_1=1,x\oplus A_2= 2$, so $\displaystyle \min_{1\le i\le N} \left(x\oplus A_i \right) = 1$.
</li>

<li>
When $x=1$: $x\oplus A_1=0,x\oplus A_2= 3$, so $\displaystyle \min_{1\le i\le N} \left(x\oplus A_i \right) = 0$.
</li>

<li>
When $x=2$: $x\oplus A_1=3,x\oplus A_2= 0$, so $\displaystyle \min_{1\le i\le N} \left(x\oplus A_i \right) = 0$.
</li>

<li>
When $x=3$: $x\oplus A_1=2,x\oplus A_2= 1$, so $\displaystyle \min_{1\le i\le N} \left(x\oplus A_i \right) = 1$.
</li>

</ul>

<p>
Therefore, output $1+0+0+1=2$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

6 5
0 1 2 3 4 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

0

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10 8762
347 883 264 816 533 306 190 880 624 279

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

34912221

</div>

</section>

</div>

</span>

</span>

</div>
