
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
There are $10^{100}+1$villages, labeled with numbers $0$, $1$, $\ldots$, $10^{100}$.

For every integer $i$between $0$and $10^{100}-1$(inclusive), you can pay $1$yen (the currency) in Village $i$to get to Village $(i + 1)$.
There is no other way to travel between villages.
</p>

<p>
Taro has $K$yen and is in Village $0$now. He will try to get to a village labeled with as large a number as possible.

He has $N$friends. The $i$-th friend, who is in Village $A_i$, will give Taro $B_i$yen when he reaches Village $A_i$.

Find the number with which the last village he will reach is labeled.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 2\times 10^5$
</li>

<li>
$1 \leq K \leq 10^9$
</li>

<li>
$1 \leq A_i \leq 10^{18}$
</li>

<li>
$1 \leq B_i \leq 10^9$
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

$N$$K$$A_1$$B_1$$:$$A_N$$B_N$
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

2 3
2 1
5 10

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

4

</div>

<p>
Takahashi will travel as follows:
</p>

<ul>

<li>
Go from Village $0$to Village $1$, for $1$yen. Now he has $2$yen.
</li>

<li>
Go from Village $1$to Village $2$, for $1$yen. Now he has $1$yen.
</li>

<li>
Get $1$yen from the $1$-st friend in Village $2$. Now he has $2$yen.
</li>

<li>
Go from Village $2$to Village $3$, for $1$yen. Now he has $1$yen.
</li>

<li>
Go from Village $3$to Village $4$, for $1$yen. Now he has $0$yen, and he has no friends in this village, so his journey ends here.
</li>

</ul>

<p>
Thus, we should print $4$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 1000000000
1 1000000000
2 1000000000
3 1000000000
4 1000000000
5 1000000000

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

6000000000

</div>

<p>
Note that the answer may not fit into a $32$-bit integer.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

3 2
5 5
2 1
2 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

10

</div>

<p>
He may have multiple friends in the same village.
</p>

</section>

</div>

</span>

</span>

</div>
