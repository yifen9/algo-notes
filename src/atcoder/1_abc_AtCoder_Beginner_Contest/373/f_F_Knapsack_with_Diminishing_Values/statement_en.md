
<div>

<span>

<span>

<p>
Score : $550$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There are $N$types of items. The $i$-th type of item has a weight of $w_i$and a value of $v_i$. Each type has $10^{10}$items available.
</p>

<p>
Takahashi is going to choose some items and put them into a bag with capacity $W$. He wants to maximize the value of the selected items while avoiding choosing too many items of the same type. Hence, he defines the 
<strong>
happiness
</strong>
of choosing $k_i$items of type $i$as $k_i v_i - k_i^2$. He wants to choose items to maximize the total happiness over all types while keeping the total weight at most $W$. Calculate the maximum total happiness he can achieve.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 3000$
</li>

<li>
$1 \leq W \leq 3000$
</li>

<li>
$1 \leq w_i \leq W$
</li>

<li>
$1 \leq v_i \leq 10^9$
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

$N$$W$$w_1$$v_1$$w_2$$v_2$$\vdots$$w_N$$v_N$
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

2 10
3 4
3 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

5

</div>

<p>
By choosing $2$items of type $1$and $1$item of type $2$, the total happiness can be $5$, which is optimal.
</p>

<p>
Here, the happiness for type $1$is $2 \times 4 - 2^2 = 4$, and the happiness for type $2$is $1 \times 2 - 1^2 = 1$.
</p>

<p>
The total weight is $9$, which is within the capacity $10$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3 6
1 4
2 3
2 7

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

14

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

1 10
1 7

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

12

</div>

</section>

</div>

</span>

</span>

</div>
