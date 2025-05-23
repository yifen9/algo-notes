
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
There is a grid of $N^2$squares with $N$rows and $N$columns.
Let $(i,j)$denote the square at the $i$-th row from the top $(1\leq i\leq N)$and $j$-th column from the left $(1\leq j\leq N)$.
</p>

<p>
Each square is either empty or has a piece placed on it.
There are $M$pieces placed on the grid, and the $k$-th $(1\leq k\leq M)$piece is placed on square $(a_k,b_k)$.
</p>

<p>
You want to place your piece on an 
<strong>
empty square
</strong>
in such a way that it 
<strong>
cannot be captured by any of the existing pieces
</strong>
.
</p>

<p>
A piece placed on square $(i,j)$can capture pieces that satisfy any of the following conditions:
</p>

<ul>

<li>
Placed in row $i$
</li>

<li>
Placed in column $j$
</li>

<li>
Placed on any square $(a,b)\ (1\leq a\leq N,1\leq b\leq N)$where $i+j=a+b$
</li>

<li>
Placed on any square $(a,b)\ (1\leq a\leq N,1\leq b\leq N)$where $i-j=a-b$
</li>

</ul>

<p>
For example, a piece placed on square $(4,4)$can capture pieces placed on the squares shown in blue in the following figure:
</p>

<p>

<img src="https://img.atcoder.jp/abc377/b0741e9d4d5765a5eeaf1b7f03310f3c.png">

</img>

</p>

<p>
How many squares can you place your piece on?
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N\leq10^9$
</li>

<li>
$1\leq M\leq10^3$
</li>

<li>
$1\leq a_k\leq N,1\leq b_k\leq N\ (1\leq k\leq M)$
</li>

<li>
$(a_k,b_k)\neq(a_l,b_l)\ (1\leq k\lt l\leq M)$
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

$N$$M$$a_1$$b_1$$a_2$$b_2$$\vdots$$a_M$$b_M$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the number of empty squares where you can place your piece without it being captured by any existing pieces.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

8 6
1 4
2 1
3 8
4 5
5 2
8 3

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
The existing pieces can capture pieces placed on the squares shown in blue in the following figure:
</p>

<p>

<img src="https://img.atcoder.jp/abc377/49766c3613371e99673e5722bd64ad58.png">

</img>

</p>

<p>
Therefore, you can place your piece on only two squares: squares $(6,6)$and $(7,7)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

1000000000 1
1 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

999999997000000002

</div>

<p>
Out of $10^{18}$squares, the squares that cannot be used are: squares in row $1$, squares in column $1$, and squares $(1,1)$, $(2,2)$, $\ldots$, $(10^9,10^9)$, totaling $3\times10^9-2$squares.
</p>

<p>
Note that the answer may be $2^{32}$or greater.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

20 10
1 4
7 11
7 15
8 10
11 6
12 5
13 1
15 2
20 10
20 15

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

77

</div>

</section>

</div>

</span>

</span>

</div>
