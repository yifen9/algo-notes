
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
Takahashi, a cabbage farmer, has grown $N$brands of cabbages, called Brand $1$through Brand $N$. He has $A_i$heads of cabbage of Brand $i$$(1 \leq i \leq N)$. Here, 
<strong>
all heads of cabbages are distinguishable.
</strong>


He has $M$clients called Company $1$through Company $M$. Company $j$$(1 \leq j \leq M)$has ordered $B_j$heads of cabbages.

Different companies accept different brands of cabbages. For each pair $i, j$$(1 \leq i \leq N, 1 \leq j \leq M)$,
</p>

<ul>

<li>
if $c_{i, j} = 1$, cabbage of Brand $i$can be shipped to Company $j$;
</li>

<li>
if $c_{i, j} = 0$, cabbage of Brand $i$cannot be shipped to Company $j$.
</li>

</ul>

<p>
Takahashi will be called a Cabbage Master if he succeeds in deciding where to ship the heads of cabbages so that $B_j$or more heads of cabbages will be shipped to every company $j$$(1 \leq j \leq M)$.
</p>

<p>
Snuke has decided to choose and eat zero or more heads of cabbages so that Takahashi cannot get the title of Cabbage Master, regardless of where to ship his cabbages. He does not like cabbage very much, so he will choose to eat the 
<strong>
minimum
</strong>
number of heads of cabbages needed to achieve his objective.
</p>

<p>
Print the number of heads of cabbages Snuke will eat, and the number of ways, modulo $998244353$, for Snuke to choose heads of cabbages to eat. Two ways to choose heads of cabbages are considered different when there is a head of cabbage that is eaten in one way but not in the other. Here, remember that any two heads of cabbages are 
<strong>
distinguishable even if they are of the same brand
</strong>
.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 20$
</li>

<li>
$1 \leq M \leq 10^4$
</li>

<li>
$1 \leq A_i \leq 10^5$
</li>

<li>
$1 \leq B_j \leq 10^5$
</li>

<li>
$c_{i, j} \in \lbrace 0, 1 \rbrace$
</li>

<li>
For every $1 \leq j \leq M$, there exists $1 \leq i \leq N$such that $c_{i, j} = 1$.
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

$N$$M$$A_1$$A_2$$\ldots$$A_N$$B_1$$B_2$$\ldots$$B_M$$c_{1, 1}$$c_{1, 2}$$\ldots$$c_{1, M}$$c_{2, 1}$$c_{2, 2}$$\ldots$$c_{2, M}$$\vdots$$c_{N, 1}$$c_{N, 2}$$\ldots$$c_{N, M}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $X$, the number of heads of cabbages Snuke will eat, and $Y$, the number of ways for Snuke to choose heads of cabbages to eat, modulo $998244353$, in this order, with a space in between.
</p>

<div>

$X$$Y$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 2
2 2 5
3 4
1 0
1 1
0 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2 6

</div>

<p>
Snuke will eat two heads of cabbages to prevent Takahashi from becoming a Cabbage Master. There are six such ways to choose heads of cabbages to eat, as shown below, where $(i, j)$denotes the $j$-th head of cabbage of Brand $i$.
</p>

<ul>

<li>
$(1, 1), (1, 2)$
</li>

<li>
$(1, 1), (2, 1)$
</li>

<li>
$(1, 1), (2, 2)$
</li>

<li>
$(1, 2), (2, 1)$
</li>

<li>
$(1, 2), (2, 2)$
</li>

<li>
$(2, 1), (2, 2)$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

1 1
3
4
1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

0 1

</div>

<p>
It is possible that Takahashi is unable to become a Cabbage Master even if Snuke eats no cabbage.
Then, Snuke will eat zero heads of cabbages, and there is just one way for him to choose heads of cabbages to eat: do not eat anything.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

1 3
100
30 30 30
1 1 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

11 892328666

</div>

<p>
For the number of ways for Snuke to choose heads of cabbages to eat, be sure to print it modulo $998244353$.
</p>

</section>

</div>

</span>

</span>

</div>
