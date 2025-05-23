
<div>

<span>

<span>

<p>
Score: $300$points
</p>

<div>

<section>

### **Problem Statement**

<p>
In Japan, there are six types of coins in circulation: $1$yen, $5$yen, $10$yen, $50$yen, $100$yen, and $500$yen. Answer the following question regarding these coins.
</p>

<blockquote>

<p>
Mr. AtCoder's wallet contains $A$$1$-yen coins, $B$$5$-yen coins, $C$$10$-yen coins, $D$$50$-yen coins, $E$$100$-yen coins, and $F$$500$-yen coins.
</p>

<p>
He is planning to shop at $N$stores in sequence.
Specifically, at the $i$-th store $(1 \leq i \leq N)$, he plans to buy one item that costs $X_i$yen (including tax).
</p>

<p>
Giving and receiving change takes time, so he wants to choose his coins so that he can pay the 
<strong>
exact amount
</strong>
at each store.
Determine if this is possible.
</p>

</blockquote>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$0 \leq A \leq 200$
</li>

<li>
$0 \leq B \leq 200$
</li>

<li>
$0 \leq C \leq 200$
</li>

<li>
$0 \leq D \leq 200$
</li>

<li>
$0 \leq E \leq 200$
</li>

<li>
$0 \leq F \leq 200$
</li>

<li>
$1 \leq N \leq 10$
</li>

<li>
$1 \leq X_i \leq 10000 \ (1 \leq i \leq N)$
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

$A$$B$$C$$D$$E$$F$$N$$X_1$$X_2$$\cdots$$X_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print `Yes`if the objective is achievable, and `No`otherwise.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

0 0 6 3 4 1
3
700 250 160

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes

</div>

<p>
For example, he can make exact payments at all three stores as follows:
</p>

<ul>

<li>
At the first store: Use two $100$-yen coins and one $500$-yen coin.
</li>

<li>
At the second store: Use five $10$-yen coins and two $100$-yen coins.
</li>

<li>
At the third store: Use one $10$-yen coin and three $50$-yen coins.
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

0 0 0 2 4 0
3
100 200 300

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

No

</div>

<p>
The total amount in the wallet is $500$yen, but a total payment of $100+200+300=600$yen is required, so it is impossible to purchase all the items.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

0 0 0 0 8 8
1
250

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

No

</div>

<p>
There are no $50$-yen or smaller coins in the wallet, so it is impossible to pay exactly $250$yen.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

20 5 9 7 10 6
5
177 177 177 177 177

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

Yes

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 5**

<div>

17 5 9 7 10 6
5
177 177 177 177 177

</div>

</section>

</div>

<div>

<section>

### **Sample Output 5**

<div>

No

</div>

</section>

</div>

</span>

</span>

</div>
