
<div>

<span>

<span>

<p>
Score : $500$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Given are an $N \times N$matrix and an integer $K$. The entry in the $i$-th row and $j$-th column of this matrix is denoted as $a_{i, j}$. This matrix contains each of $1, 2, \dots, N^2$exactly once.
</p>

<p>
Sigma can repeat the following two kinds of operation 
<strong>
arbitrarily
</strong>
many times in any order.
</p>

<ul>

<li>
Pick two integers $x, y (1 \leq x < y \leq N)$that satisfy $a_{i, x} + a_{i, y} \leq K$for all $i$($1 \leq i \leq N$) and swap the $x$-th and the $y$-th columns.
</li>

<li>
Pick two integers $x, y (1 \leq x < y \leq N)$that satisfy $a_{x, i} + a_{y, i} \leq K$for all $i$($1 \leq i \leq N$) and swap the $x$-th and the $y$-th rows.
</li>

</ul>

<p>
How many matrices can he obtain by these operations? Find it modulo $998244353$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 50$
</li>

<li>
$1 \leq K \leq 2 \times N^2$
</li>

<li>
$a_{i, j}$'s are a rearrangement of $1, 2, \dots, N^2$.
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

$N$$K$$a_{1, 1}$$a_{1, 2}$$...$$a_{1, N}$$a_{2, 1}$$a_{2, 2}$$...$$a_{2, N}$$:$$a_{N, 1}$$a_{N, 2}$$...$$a_{N, N}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the number of matrices Sigma can obtain modulo $998244353$.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 13
3 2 7
4 8 9
1 6 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

12

</div>

<p>
For example, Sigma can swap two columns, by setting $x = 1, y = 2$. After that, the resulting matrix will be:
</p>

<div>

2 3 7
8 4 9
6 1 5

</div>

<p>
After that, he can swap two row vectors by setting $x = 1, y = 3$, resulting in the following matrix:
</p>

<div>

6 1 5
8 4 9
2 3 7

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

10 165
82 94 21 65 28 22 61 80 81 79
93 35 59 85 96 1 78 72 43 5
12 15 97 49 69 53 18 73 6 58
60 14 23 19 44 99 64 17 29 67
24 39 56 92 88 7 48 75 36 91
74 16 26 10 40 63 45 76 86 3
9 66 42 84 38 51 25 2 33 41
87 54 57 62 47 31 68 11 83 8
46 27 55 70 52 98 20 77 89 34
32 71 30 50 90 4 37 95 13 100

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

348179577

</div>

</section>

</div>

</span>

</span>

</div>
