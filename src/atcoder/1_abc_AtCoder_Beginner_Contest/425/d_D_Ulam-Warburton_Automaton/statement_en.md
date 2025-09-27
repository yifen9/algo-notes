
<div>

<span>

<span>

<p>
Score : $425$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There is a grid with $H$rows and $W$columns. We call the cell at the $i$-th row from the top $(1\leq i\leq H)$and $j$-th column from the left $(1\leq j\leq W)$as cell $(i,j)$.
</p>

<p>
Initially, cell $(i,j)$is colored black if $S_{i,j}$is `#`and white if it is `.`.
</p>

<p>
Perform the following operation $10^{100}$times:
</p>

<ul>

<li>
Let $T$be the set of cells that are colored white and have exactly one adjacent cell colored black. Color each cell in $T$black. Here, two cells $(i_1,j_1)$and $(i_2,j_2)$are adjacent if and only if $|i_1-i_2|+|j_1-j_2|=1$.
</li>

</ul>

<p>
Find the number of cells that are colored black after all operations are completed.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2\leq H,W$
</li>

<li>
$HW\leq 3\times 10^5$
</li>

<li>
$H$and $W$are integers.
</li>

<li>
$S_{i,j}$is `#`or `.`.
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

$H$$W$$S_{1,1}S_{1,2}\ldots S_{1,W}$$S_{2,1}S_{2,2}\ldots S_{2,W}$$\vdots$$S_{H,1}S_{H,2}\ldots S_{H,W}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Output the answer.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

9 9
.........
.........
.........
.........
....#....
.........
.........
.........
.........

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

57

</div>

<p>
The grid changes as follows through the operations. (The number above represents the operation count. The first ten operations are displayed.)
</p>

<p>

<img src="https://img.atcoder.jp/abc425/66c86ae7efa44c7545e6db9451921205.gif">

</img>

</p>

<p>
Eventually, $57$cells are colored black.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2 2
..
..

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

0

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10 10
..........
....#.....
#.......#.
......#...
.......#..
.....#....
..........
..........
..#...#...
.......#..

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

64

</div>

</section>

</div>

</span>

</span>

</div>
