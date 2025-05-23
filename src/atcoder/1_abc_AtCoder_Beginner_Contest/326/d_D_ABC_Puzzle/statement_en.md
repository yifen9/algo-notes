
<div>

<span>

<span>

<p>
Score : $450$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given an integer $N$and strings $R$and $C$of length $N$consisting of `A`, `B`, and `C`. Solve the following problem.
</p>

<p>
There is a $N \times N$grid. All cells are initially empty.

You can write at most one character from `A`, `B`, and `C`in each cell. (You can also leave the cell empty.)
</p>

<p>
Determine if it is possible to satisfy all of the following conditions, and if it is possible, print one way to do so.
</p>

<ul>

<li>
Each row and each column contain exactly one `A`, one `B`, and one `C`.
</li>

<li>
The leftmost character written in the $i$-th row matches the $i$-th character of $R$.
</li>

<li>
The topmost character written in the $i$-th column matches the $i$-th character of $C$.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$N$is an integer between $3$and $5$, inclusive.
</li>

<li>
$R$and $C$are strings of length $N$consisting of `A`, `B`, and `C`.
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

$N$$R$$C$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If there is no way to fill the grid to satisfy the conditions in the problem statement, print `No`in one line.

Otherwise, print one such way to fill the grid in the following format:
</p>

<div>

Yes
$A_1$$A_2$$\vdots$$A_N$
</div>

<p>
The first line should contain `Yes`.
The $i$-th of the subsequent $N$lines should contain a string $A_i$of length $N$.
</p>

<ul>

<li>
If the $j$-th character of $A_i$is `.`, it indicates that the cell in the $i$-th row from the top and the $j$-th column from the left is empty.
</li>

<li>
If the $j$-th character of $A_i$is `A`, it indicates that `A`is written in the cell in the $i$-th row from the top and the $j$-th column from the left.
</li>

<li>
If the $j$-th character of $A_i$is `B`, it indicates that `B`is written in the cell in the $i$-th row from the top and the $j$-th column from the left.
</li>

<li>
If the $j$-th character of $A_i$is `C`, it indicates that `C`is written in the cell in the $i$-th row from the top and the $j$-th column from the left.
</li>

</ul>

<p>
If there are multiple correct ways to fill the grid, you may print any of them.
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
ABCBC
ACAAB

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes
AC..B
.BA.C
C.BA.
BA.C.
..CBA

</div>

<p>
The grid in the output example satisfies all the following conditions, so it will be treated as correct.
</p>

<ul>

<li>
Each row contains exactly one `A`, one `B`, and one `C`.
</li>

<li>
Each column contains exactly one `A`, one `B`, and one `C`.
</li>

<li>
The leftmost characters written in the rows are `A`, `B`, `C`, `B`, `C`from top to bottom.
</li>

<li>
The topmost characters written in the columns are `A`, `C`, `A`, `A`, `B`from left to right.
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3
AAA
BBB

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
For this input, there is no way to fill the grid to satisfy the conditions.
</p>

</section>

</div>

</span>

</span>

</div>
