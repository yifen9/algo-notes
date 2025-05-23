
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
Given is a sequence $a_1,\dots,a_n$consisting of $1,\dots, n$and $-1$, along with an integer $d$.
How many sequences $p_1,\dots,p_n$satisfy the conditions below?
Print the count modulo $998244353$.
</p>

<ul>

<li>
$p_1,\dots,p_n$is a permutation of $1,\dots, n$.
</li>

<li>
For each $i=1,\dots,n$, $a_i=p_i$if $a_i\neq -1$. (That is, $p_1,\dots,p_n$can be obtained by replacing the $-1$s in $a_1,\dots,a_n$in some way.)
</li>

<li>
For each $i=1,\dots,n$, $|p_i - i|\le d$.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \le d \le 5$
</li>

<li>
$d < n \le 500$
</li>

<li>
$1\le a_i \le n$or $a_i=-1$.
</li>

<li>
$|a_i-i|\le d$if $a_i\neq -1$.
</li>

<li>
$a_i\neq a_j$, if $i\neq j$and $a_i, a_j \neq -1$.
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

$n$$d$$a_1$$\dots$$a_n$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the number of sequences that satisfy the conditions, modulo $998244353$.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4 2
3 -1 1 -1

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
The conditions are satisfied by $(3,2,1,4)$and $(3,4,1,2)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 1
2 3 4 5 -1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

0

</div>

<p>
The only permutation of $1,2,3,4,5$that can be obtained by replacing the $-1$is $(2,3,4,5,1)$, whose fifth term violates the condition, so the answer is $0$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

16 5
-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

794673086

</div>

<p>
Print the count modulo $998244353$.
</p>

</section>

</div>

</span>

</span>

</div>
