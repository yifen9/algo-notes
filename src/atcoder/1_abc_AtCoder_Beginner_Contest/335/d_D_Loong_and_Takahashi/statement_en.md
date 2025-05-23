
<div>

<span>

<span>

<p>
Score : $350$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There is a grid with $N$rows and $N$columns, where $N$is an odd number at most $45$.
</p>

<p>
Let $(i,j)$denote the cell at the $i$-th row from the top and $j$-th column from the left.
</p>

<p>
In this grid, you will place Takahashi and a dragon consisting of $N^2-1$parts numbered $1$to $N^2-1$in such a way that satisfies the following conditions:
</p>

<ul>

<li>
Takahashi must be placed at the center of the grid, that is, in cell $(\frac{N+1}{2},\frac{N+1}{2})$.
</li>

<li>
Except for the cell where Takahashi is, exactly one dragon part must be placed in each cell.
</li>

<li>
For every integer $x$satisfying $2 \leq x \leq N^2-1$, the dragon part $x$must be placed in a cell adjacent by an edge to the cell containing part $x-1$.
<ul>

<li>
Cells $(i,j)$and $(k,l)$are said to be adjacent by an edge if and only if $|i-k|+|j-l|=1$.
</li>

</ul>

</li>

</ul>

<p>
Print one way to arrange the parts to satisfy the conditions. It is guaranteed that there is at least one arrangement that satisfies the conditions.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$3 \leq N \leq 45$
</li>

<li>
$N$is odd.
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

$N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $N$lines.

The $i$-th line should contain $X_{i,1},\ldots,X_{i,N}$separated by spaces, where $X_{i,j}$is `T`when placing Takahashi in cell $(i,j)$and $x$when placing part $x$there.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

1 2 3 4 5
16 17 18 19 6
15 24 T 20 7
14 23 22 21 8
13 12 11 10 9

</div>

<p>
The following output also satisfies all the conditions and is correct.
</p>

<div>

9 10 11 14 15
8 7 12 13 16
5 6 T 18 17
4 3 24 19 20 
1 2 23 22 21

</div>

<p>
On the other hand, the following outputs are incorrect for the reasons given.
</p>

<p>
Takahashi is not at the center.
</p>

<div>

1 2 3 4 5
10 9 8 7 6
11 12 13 14 15
20 19 18 17 16
21 22 23 24 T

</div>

<p>
The cells containing parts $23$and $24$are not adjacent by an edge.
</p>

<div>

1 2 3 4 5
10 9 8 7 6
11 12 24 22 23
14 13 T 21 20
15 16 17 18 19

</div>

</section>

</div>

</span>

</span>

</div>
