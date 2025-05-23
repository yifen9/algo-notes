
<div>

<span>

<span>

<p>
Score : $400$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given a sequence of positive integers $A=(a_1,\ldots,a_N)$of length $N$.

There are $(2^N-1)$ways to choose one or more terms of $A$.  How many of them have an integer-valued average?  Find the count modulo $998244353$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 100$
</li>

<li>
$1 \leq a_i \leq 10^9$
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

$N$$a_1$$\ldots$$a_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the answer.
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
2 6 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

6

</div>

<p>
For each way to choose terms of $A$, the average is obtained as follows:
</p>

<ul>

<li>

<p>
If just $a_1$is chosen, the average is $\frac{a_1}{1}=\frac{2}{1} = 2$, which is an integer.  
</p>

</li>

<li>

<p>
If just $a_2$is chosen, the average is $\frac{a_2}{1}=\frac{6}{1} = 6$, which is an integer.  
</p>

</li>

<li>

<p>
If just $a_3$is chosen, the average is $\frac{a_3}{1}=\frac{2}{1} = 2$, which is an integer.  
</p>

</li>

<li>

<p>
If $a_1$and $a_2$are chosen, the average is $\frac{a_1+a_2}{2}=\frac{2+6}{2} = 4$, which is an integer.  
</p>

</li>

<li>

<p>
If $a_1$and $a_3$are chosen, the average is $\frac{a_1+a_3}{2}=\frac{2+2}{2} = 2$, which is an integer.  
</p>

</li>

<li>

<p>
If $a_2$and $a_3$are chosen, the average is $\frac{a_2+a_3}{2}=\frac{6+2}{2} = 4$, which is an integer.  
</p>

</li>

<li>

<p>
If $a_1$, $a_2$, and $a_3$are chosen, the average is $\frac{a_1+a_2+a_3}{3}=\frac{2+6+2}{3} = \frac{10}{3}$, which is not an integer.
</p>

</li>

</ul>

<p>
Therefore, $6$ways satisfy the condition.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5
5 5 5 5 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

31

</div>

<p>
Regardless of the choice of one or more terms of $A$, the average equals $5$.
</p>

</section>

</div>

</span>

</span>

</div>
