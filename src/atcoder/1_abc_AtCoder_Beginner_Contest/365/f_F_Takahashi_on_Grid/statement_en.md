
<div>

<span>

<span>

<p>
Score : $575$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There are infinitely many cells on a plane.
For every pair of integers $(x,y)$, there is a corresponding cell, which we will call cell $(x,y)$.
</p>

<p>
Each cell is either an empty cell or a wall cell.

You are given two sequences of positive integers of length $N$: $L=(L _ 1,L _ 2,\dotsc,L _ N)$and $U=(U _ 1,U _ 2,\dotsc,U _ N)$. 
Here, $L _ i$and $U _ i$satisfy $1\leq L _ i\leq U _ i\leq10 ^ 9$for $i=1,2,\ldots,N$.

All cells $(x,y)\ (1\leq x\leq N,L _ x\leq y\leq U _ x)$are empty cells, and all other cells are wall cells.
</p>

<p>
When Takahashi is at an empty cell $(x,y)$, he can perform one of the following actions.
</p>

<ul>

<li>
If cell $(x+1,y)$is an empty cell, move to cell $(x+1,y)$.
</li>

<li>
If cell $(x-1,y)$is an empty cell, move to cell $(x-1,y)$.
</li>

<li>
If cell $(x,y+1)$is an empty cell, move to cell $(x,y+1)$.
</li>

<li>
If cell $(x,y-1)$is an empty cell, move to cell $(x,y-1)$.
</li>

</ul>

<p>
It is guaranteed that he can travel between any two empty cells by repeating his actions.
</p>

<p>
Answer $Q$queries in the following format.
</p>

<p>
For the $i$-th query $(1\leq i\leq Q)$, you are given a quadruple of integers $(s _ {x,i},s _ {y,i},t _ {x,i},t _ {y,i})$. Find the minimum number of actions required for Takahashi to move from cell $(s _ {x,i},s _ {y,i})$to cell $(t _ {x,i},t _ {y,i})$.
For each query, it is guaranteed that the given two cells are empty cells.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N\leq2\times10 ^ 5$
</li>

<li>
$1\leq L _ i\leq U _ i\leq10 ^ 9\ (1\leq i\leq N)$
</li>

<li>
$\lbrack L _ i,U _ i\rbrack\cap\lbrack L _ {i+1},U _ {i+1}\rbrack\neq\emptyset\ (1\leq i\lt N)$
</li>

<li>
$1\leq Q\leq2\times10 ^ 5$
</li>

<li>
$1\leq s _ {x,i}\leq N$and $L _ {s _ {x,i}}\leq s _ {y,i}\leq U _ {s _ {x,i}}\ (1\leq i\leq Q)$
</li>

<li>
$1\leq t _ {x,i}\leq N$and $L _ {t _ {x,i}}\leq t _ {y,i}\leq U _ {t _ {x,i}}\ (1\leq i\leq Q)$
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

$N$$L _ 1$$U _ 1$$L _ 2$$U _ 2$$\vdots$$L _ N$$U _ N$$Q$$s _ {x,1}$$s _ {y,1}$$t _ {x,1}$$t _ {y,1}$$s _ {x,2}$$s _ {y,2}$$t _ {x,2}$$t _ {y,2}$$\vdots$$s _ {x,Q}$$s _ {y,Q}$$t _ {x,Q}$$t _ {y,Q}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $Q$lines.
The $i$-th line $(1\leq i\leq Q)$should contain the answer to the $i$-th query.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

7
1 5
3 3
1 3
1 1
1 4
2 4
3 5
3
1 4 6 3
1 4 1 1
7 5 1 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

10
3
14

</div>

<p>
The given cells are as follows.
</p>

<p>

<img src="https://img.atcoder.jp/abc365/4d07a40c98eda33ee86b773e564681c7.png">

</img>

</p>

<p>
For the first query, for example, Takahashi can move from cell $(1,4)$to cell $(6,3)$in ten actions as follows.
</p>

<p>

<img src="https://img.atcoder.jp/abc365/4e579f6b171a642891732ae6efcdd550.png">

</img>

</p>

<p>
It is impossible to move from cell $(1,4)$to cell $(6,3)$in nine or fewer actions, so print $10$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

12
1 1000000000
1000000000 1000000000
1 1000000000
1 1
1 1000000000
1000000000 1000000000
1 1000000000
1 1
1 1000000000
1000000000 1000000000
1 1000000000
1 1
1
1 1 12 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

6000000005

</div>

<p>
Note that the output value may not fit in a $32$-bit integer.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10
1694 7483
3396 5566
2567 6970
1255 3799
2657 3195
3158 8007
3368 8266
1447 6359
5365 8614
3141 7245
15
3 3911 6 4694
7 5850 10 4641
1 5586 6 4808
2 3401 8 2676
3 3023 6 6923
8 4082 3 6531
6 3216 7 6282
8 5121 8 3459
8 4388 1 6339
6 6001 3 6771
10 5873 8 5780
1 6512 6 6832
8 5345 7 4975
10 4010 8 2355
7 5837 9 6279

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

2218
1212
4009
1077
3903
4228
3067
1662
4344
6385
95
6959
371
4367
444

</div>

</section>

</div>

</span>

</span>

</div>
