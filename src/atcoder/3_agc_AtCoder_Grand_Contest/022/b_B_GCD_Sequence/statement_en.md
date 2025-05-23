
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
Nagase is a top student in high school. One day, she's analyzing some properties of special sets of positive integers.  
</p>

<p>
She thinks that a set $S = \{a_{1}, a_{2}, ..., a_{N}\}$of 
<strong>
distinct
</strong>
positive integers is called 
<strong>
special
</strong>
if for all $1 \leq i \leq N$, the gcd (greatest common divisor) of $a_{i}$and the sum of the remaining elements of $S$is 
<strong>
not
</strong>
$1$.
</p>

<p>
Nagase wants to find a 
<strong>
special
</strong>
set of size $N$. However, this task is too easy, so she decided to ramp up the difficulty. Nagase challenges you to find a 
<strong>
special
</strong>
set of size $N$such that the gcd of all elements are $1$and the elements of the set does not exceed $30000$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$3 \leq N \leq 20000$
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

$N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Output $N$space-separated integers, denoting the elements of the set $S$. $S$must satisfy the following conditions :
</p>

<ul>

<li>
The elements must be 
<strong>
distinct
</strong>
positive integers not exceeding $30000$.
</li>

<li>
The gcd of all elements of $S$is $1$, i.e. there does not exist an integer $d > 1$that divides all elements of $S$.
</li>

<li>
$S$is a 
<strong>
special
</strong>
set.
</li>

</ul>

<p>
If there are multiple solutions, you may output any of them. The elements of $S$may be printed in any order. It is guaranteed that at least one solution exist under the given contraints.
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

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2 5 63

</div>

<p>
$\{2, 5, 63\}$is special because $gcd(2, 5 + 63) = 2, gcd(5, 2 + 63) = 5, gcd(63, 2 + 5) = 7$. Also, $gcd(2, 5, 63) = 1$. Thus, this set satisfies all the criteria.
</p>

<p>
Note that $\{2, 4, 6\}$is not a valid solution because $gcd(2, 4, 6) = 2 > 1$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

2 5 20 63

</div>

<p>
$\{2, 5, 20, 63\}$is special because $gcd(2, 5 + 20 + 63) = 2, gcd(5, 2 + 20 + 63) = 5, gcd(20, 2 + 5 + 63) = 10, gcd(63, 2 + 5 + 20) = 9$. Also, $gcd(2, 5, 20, 63) = 1$. Thus, this set satisfies all the criteria.
</p>

</section>

</div>

</span>

</span>

</div>
