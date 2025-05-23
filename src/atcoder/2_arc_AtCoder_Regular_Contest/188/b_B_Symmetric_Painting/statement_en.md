
<div>

<span>

<span>

<p>
Score : $600$points
</p>

<div>

<section>

### **Problem Statement**

<p>
On a circle, there are $N$equally spaced points numbered $0,1,\ldots,N-1$in this order, with Alice at point $0$and Bob at point $K$. Initially, all points are colored white. Starting with Alice, they alternately perform the following operation:
</p>

<ul>

<li>
Choose one of the currently white points and color it black. Here, after the operation, the coloring of the points must be symmetric with respect to the straight line connecting the operator and the center of the circle.
</li>

</ul>

<p>
If the operator cannot perform an operation satisfying the above condition, the sequence of operations ends there.
</p>

<p>
Both players cooperate and make the best choices to maximize the total number of points colored black in the end. Determine whether all points are colored black at the end of the sequence of operations.
</p>

<p>
You are given $T$test cases to solve.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq T \leq 10^5$
</li>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq K \leq N-1$
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

$T$$\mathrm{case}_1$$\mathrm{case}_2$$\vdots$$\mathrm{case}_T$
</div>

<p>
Each test case $\mathrm{case}_i$$(1 \leq i \leq T)$is in the following format:
</p>

<div>

$N$$K$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $T$lines. The $i$-th line should contain `Yes`if all points can be colored black for the $i$-th test case, and `No`otherwise.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4
6 2
6 3
6 1
200000 100000

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes
No
Yes
No

</div>

<p>
For $N=6$and $K=2$, all points can be colored black by, for example, performing operations in the following order:
</p>

<ol>

<li>
Alice colors point $3$black.
</li>

<li>
Bob colors point $1$black.
</li>

<li>
Alice colors point $5$black.
</li>

<li>
Bob colors point $2$black.
</li>

<li>
Alice colors point $4$black.
</li>

<li>
Bob colors point $0$black.
</li>

</ol>

<p>

<img src="https://img.atcoder.jp/arc188/ecb64f0798aaa883117c594cb6db2724.png">

</img>

</p>

<p>
For $N=6$and $K=3$, below is one possible progression. Actually, no matter what they do, they cannot color all points black.
</p>

<ol>

<li>
Alice colors point $3$black.
</li>

<li>
Bob colors point $0$black.
</li>

<li>
Alice cannot color any point black so that the coloring will be symmetric with respect to her line, so she cannot perform the operation.
</li>

</ol>

</section>

</div>

</span>

</span>

</div>
