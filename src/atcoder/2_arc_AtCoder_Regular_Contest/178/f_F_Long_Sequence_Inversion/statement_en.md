
<div>

<span>

<span>

<p>
Score : $1000$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given positive integers $N$, $M$, and $K$, and a sequence of $M$non-negative integers $A = (A_{0}, A_{1}, \dots, A_{M-1})$. Here, $2^{N - 1} \leq K < 2^{N}$holds.
</p>

<p>
In the input, $K$is given as an $N$-digit number in binary notation, while the other integers are given in decimal notation.
</p>

<p>
Additionally, $A$is not given directly in the input. Instead, for each $i = 0, 1, \dots, M - 1$, you are given a sequence of $L_i$integers $X_{i} = (X_{i,0}, X_{i,1}, \dots, X_{i,L_{i}-1})$such that $A_{i} = \sum_{j=0}^{L_{i}-1} 2^{X_{i,j}}$. Here, $0 \leq X_{i,0} < X_{i,1} < \cdots < X_{i,L_{i}-1} < N$holds.
</p>

<p>
Find the inversion number, modulo $998244353$, of the sequence $B = (B_{0}, B_{1}, \dots, B_{MK-1})$defined as follows.
</p>

<ul>

<li>
For any integer $a$such that $0 \leq a < K$and any integer $b$such that $0 \leq b < M$, the following holds:
<ul>

<li>
$B_{aM+b}$is equal to the remainder when $\operatorname{popcount}(a \operatorname{AND} A_{b})$is divided by $2$.
</li>

</ul>

</li>

</ul>

<details>

<summary>
What is $\operatorname{AND}$?
</summary>

<p>
The bitwise $\operatorname{AND}$of integers $A$and $B$, denoted as $A \operatorname{AND} B$, is defined as follows:
</p>

<ul>

<li>
In the binary representation of $A \operatorname{AND} B$, the digit at the $2^k$($k \geq 0$) place is $1$if and only if the digits at the $2^k$place in the binary representations of both $A$and $B$are $1$; otherwise, it is $0$.
</li>

</ul>

<p>
For example, $3 \operatorname{AND} 5 = 1$(in binary: $011 \operatorname{AND} 101 = 001$). 
Generally, the bitwise $\operatorname{AND}$of $k$integers $p_1, p_2, p_3, \dots, p_k$is defined as $(\dots ((p_1 \operatorname{AND} p_2) \operatorname{AND} p_3) \operatorname{AND} \dots \operatorname{AND} p_k)$, and it can be proved that this is independent of the order of $p_1, p_2, p_3, \dots, p_k$.
</p>

</details>

<details>

<summary>
What is $\operatorname{popcount}$?
</summary>

<p>
For a non-negative integer $x$, $\operatorname{popcount}(x)$is the number of $1$s in the binary representation of $x$. More precisely, for a non-negative integer $x$such that $\displaystyle x = \sum_{i=0}^{\infty} b_i 2^i\ (b_i \in {0, 1})$, it holds that $\displaystyle \operatorname{popcount}(x) = \sum_{i=0}^{\infty} b_i$.
For example, $13$is `1101`in binary, so $\operatorname{popcount}(13) = 3$.
</p>

</details>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq M \leq 2 \times 10^5$
</li>

<li>
$2^{N-1} \leq K < 2^{N}$
</li>

<li>
$0 \leq L_{i} \leq N$
</li>

<li>
$\sum L_{i} \leq 2 \times 10^5$
</li>

<li>
$0 \leq X_{i,0} < X_{i,1} < \cdots < X_{i,L_{i}-1} < N$
</li>

<li>
All input values are integers.
</li>

<li>
$K$is given in binary notation.
</li>

<li>
All numbers except $K$are given in decimal notation.
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

$N$$M$$K$$L_{0}$$X_{0,0}$$X_{0,1}$$\cdots$$X_{0,L_{0}-1}$$L_{1}$$X_{1,0}$$X_{1,1}$$\cdots$$X_{1,L_{1}-1}$$\vdots$$L_{M-1}$$X_{M-1,0}$$X_{M-1,1}$$\cdots$$X_{M-1,L_{M-1}-1}$
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

2 4
11
1 0
2 0 1
0
1 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

9

</div>

<p>
$A = (1, 3, 0, 2), B = (0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3 3
101
2 1 2
2 0 1
1 0

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

23

</div>

<p>
$A = (6, 3, 1), B = (0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

16 7
1101010000100110
11 0 1 2 3 7 10 11 12 13 14 15
7 4 6 8 10 11 12 13
6 0 1 6 8 10 12
8 0 3 5 6 10 11 12 13
10 0 1 2 3 4 5 6 8 12 13
9 3 4 5 6 8 9 11 14 15
8 0 4 7 9 10 11 13 14

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

97754354

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

92 4
10101100101111111111011101111111101011001011111110011110111111101111111110100111100010111011
23 1 2 5 13 14 20 28 32 34 39 52 56 59 60 62 64 67 69 71 78 84 87 91
20 15 17 22 28 36 40 43 47 52 53 57 67 72 77 78 81 87 89 90 91
23 7 8 9 10 11 13 16 19 22 23 30 33 42 49 51 52 58 64 71 73 76 79 83
22 1 13 19 26 27 28 29 35 39 40 41 46 55 60 62 64 67 74 79 82 89 90

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

291412708

</div>

<p>
Find the number modulo $998244353$.
</p>

</section>

</div>

</span>

</span>

</div>
