
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
There is an iron bar of length $L$lying east-west. We will cut this bar at $11$positions to divide it into $12$bars. Here, each of the $12$resulting bars must have a positive integer length.

Find the number of ways to do this division. Two ways to do the division are considered different if and only if there is a position cut in only one of those ways.

Under the constraints of this problem, it can be proved that the answer is less than $2^{63}$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$12 \le L \le 200$
</li>

<li>
$L$is an integer.
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

$L$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the number of ways to do the division.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

12

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

1

</div>

<p>
There is only one way: to cut the bar into $12$bars of length $1$each.  
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

13

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

12

</div>

<p>
Just one of the resulting bars will be of length $2$. We have $12$options: one where the westmost bar is of length $2$, one where the second bar from the west is of length $2$, and so on.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

17

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

4368

</div>

</section>

</div>

</span>

</span>

</div>
