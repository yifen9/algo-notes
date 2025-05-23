
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
The Kingdom of Takahashi can be represented as a grid with $H$rows and $W$columns. Let $(i, j)$denote the square at the $i$-th row from the north and $j$-th column from the west.
</p>

<p>
Recently, there have been more and more requests from the kingdom's citizens to build a railway, and now the king, Takahashi, has no choice but to build one.

The construction of the railway will have the following two phases.
</p>

<ul>

<li>
First, choose two 
<strong>
different
</strong>
squares and build a station on each of them. It costs $A_{i,j}$yen to build a station on the square $(i, j)$.
</li>

<li>
Then, build a railway track connecting these two stations. This costs $C \times (|i-i'| + |j-j'|)$yen when the two stations are on the squares $(i, j)$and $(i', j')$. ($|x|$denotes the absolute value of $x$.)
</li>

</ul>

<p>
Takahashi's priority is to spend as little as possible on this construction, rather than to improve convenience for the citizens.

Print the minimum possible total cost of the construction of the railway.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq H, W \leq 1000$
</li>

<li>
$1 \leq C \leq 10^9$
</li>

<li>
$1 \leq A_{ij} \leq 10^9$
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

$H$$W$$C$$A_{1,1}$$A_{1,2}$$\cdots$$A_{1,W}$$\vdots$$A_{H,1}$$A_{H,2}$$\cdots$$A_{H,W}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the minimum possible total cost of the construction of the railway.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 4 2
1 7 7 9
9 6 3 7
7 8 6 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

10

</div>

<p>
If we build stations on the squares $(1, 1)$and $(2, 3)$, it will cost $1 + 3 = 4$yen to build the stations and $2 \times (|1-2| + |1-3|) = 6$yen to build the track, for a total of $4+6 = 10$yen.
This is the minimum possible total cost of the construction.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3 3 1000000000
1000000 1000000 1
1000000 1000000 1000000
1 1000000 1000000

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1001000001

</div>

</section>

</div>

</span>

</span>

</div>
