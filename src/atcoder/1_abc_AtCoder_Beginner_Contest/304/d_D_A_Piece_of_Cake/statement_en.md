
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
There is a rectangular cake with some strawberries on the $xy$-plane. The cake occupies the rectangular area $\lbrace (x, y) : 0 \leq x \leq W, 0 \leq y \leq H \rbrace$.
</p>

<p>
There are $N$strawberries on the cake, and the coordinates of the $i$-th strawberry are $(p_i, q_i)$for $i = 1, 2, \ldots, N$. No two strawberries have the same coordinates.
</p>

<p>
Takahashi will cut the cake into several pieces with a knife, as follows.
</p>

<ul>

<li>
First, cut the cake along $A$different lines parallel to the $y$-axis: lines $x = a_1$, $x = a_2$, $\ldots$, $x = a_A$.
</li>

<li>
Next, cut the cake along $B$different lines parallel to the $x$-axis: lines $y = b_1$, $y = b_2$, $\ldots$, $y = b_B$.
</li>

</ul>

<p>
As a result, the cake will be divided into $(A+1)(B+1)$rectangular pieces. Takahashi will choose just one of these pieces to eat. Print the minimum and maximum possible numbers of strawberries on the chosen piece.
</p>

<p>
Here, it is guaranteed that there are no strawberries along the edges of the final pieces. For a more formal description, refer to the constraints below.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$3 \leq W, H \leq 10^9$
</li>

<li>
$1 \leq N \leq 2 \times 10^5$
</li>

<li>
$0 \lt p_i \lt W$
</li>

<li>
$0 \lt q_i \lt H$
</li>

<li>
$i \neq j \implies (p_i, q_i) \neq (p_j, q_j)$
</li>

<li>
$1 \leq A, B \leq 2 \times 10^5$
</li>

<li>
$0 \lt a_1 \lt a_2 \lt \cdots \lt a_A \lt W$
</li>

<li>
$0 \lt b_1 \lt b_2 \lt \cdots \lt b_B \lt H$
</li>

<li>
$p_i \not \in \lbrace a_1, a_2, \ldots, a_A \rbrace$
</li>

<li>
$q_i \not \in \lbrace b_1, b_2, \ldots, b_B \rbrace$
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

$W$$H$$N$$p_1$$q_1$$p_2$$q_2$$\vdots$$p_N$$q_N$$A$$a_1$$a_2$$\ldots$$a_A$$B$$b_1$$b_2$$\ldots$$b_B$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the minimum possible number of strawberries $m$and the maximum possible number $M$on the chosen piece in the following format, separated by a space.
</p>

<div>

$m$$M$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

7 6
5
6 1
3 1
4 2
1 5
6 2
2
2 5
2
3 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

0 2

</div>

<p>
There are nine pieces in total: six with zero strawberries, one with one strawberry, and two with two strawberries. Therefore, when choosing just one of these pieces to eat, the minimum possible number of strawberries on the chosen piece is $0$, and the maximum possible number is $2$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4 4
4
1 1
3 1
3 3
1 3
1
2
1
2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1 1

</div>

<p>
Each piece has one strawberry on it.
</p>

</section>

</div>

</span>

</span>

</div>
