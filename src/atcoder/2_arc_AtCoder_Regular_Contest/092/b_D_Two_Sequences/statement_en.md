
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
You are given two integer sequences, each of length $N$: $a_1, ..., a_N$and $b_1, ..., b_N$.
</p>

<p>
There are $N^2$ways to choose two integers $i$and $j$such that $1 \leq i, j \leq N$. For each of these $N^2$pairs, we will compute $a_i + b_j$and write it on a sheet of paper.
That is, we will write $N^2$integers in total.
</p>

<p>
Compute the XOR of these $N^2$integers.
</p>

<p>

</p>

<details>

<summary>
Definition of XOR
</summary>

<p>

</p>

<p>
The XOR of integers $c_1, c_2, ..., c_m$is defined as follows:
</p>

<ul>

<li>
Let the XOR be $X$. In the binary representation of $X$, the digit in the $2^k$'s place ($0 \leq k$; $k$is an integer) is $1$if there are an odd number of integers among $c_1, c_2, ...c_m$whose binary representation has $1$in the $2^k$'s place, and $0$if that number is even.
</li>

</ul>

<p>
For example, let us compute the XOR of $3$and $5$. The binary representation of $3$is $011$, and the binary representation of $5$is $101$, thus the XOR has the binary representation $110$, that is, the XOR is $6$.
</p>

<p>

</p>

</details>

<p>

</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
All input values are integers.
</li>

<li>
$1 \leq N \leq 200,000$
</li>

<li>
$0 \leq a_i, b_i < 2^{28}$
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

$N$$a_1$$a_2$$...$$a_N$$b_1$$b_2$$...$$b_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the result of the computation.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

2
1 2
3 4

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
On the sheet, the following four integers will be written: $4(1+3), 5(1+4), 5(2+3)$and $6(2+4)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

6
4 6 0 0 3 3
0 5 6 5 0 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

8

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

5
1 2 3 4 5
1 2 3 4 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

2

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

1
0
0

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

0

</div>

</section>

</div>

</span>

</span>

</div>
