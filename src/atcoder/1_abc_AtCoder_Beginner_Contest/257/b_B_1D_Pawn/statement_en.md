
<div>

<span>

<span>

<p>
Score : $200$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There are $N$squares, indexed Square $1$, Square $2$, …, Square $N$, arranged in a row from left to right.

Also, there are $K$pieces.  The $i$-th piece from the left is initially placed on Square $A_i$.

Now, we will perform $Q$operations against them.
The $i$-th operation is as follows:
</p>

<ul>

<li>
If the $L_i$-th piece from the left is on its rightmost square, do nothing.
</li>

<li>
Otherwise, move the $L_i$-th piece from the left one square right if there is no piece on the next square on the right; if there is, do nothing.
</li>

</ul>

<p>
Print the index of the square on which the $i$-th piece from the left is after the $Q$operations have ended, for each $i=1,2,\ldots,K$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq K\leq N\leq 200$
</li>

<li>
$1\leq A_1<A_2<\cdots<A_K\leq N$
</li>

<li>
$1\leq Q\leq 1000$
</li>

<li>
$1\leq L_i\leq K$
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

$N$$K$$Q$$A_1$$A_2$$\ldots$$A_K$$L_1$$L_2$$\ldots$$L_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $K$integers in one line, with spaces in between.
The $i$-th of them should be the index of the square on which the $i$-th piece from the left is after the $Q$operations have ended.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

5 3 5
1 3 4
3 3 1 1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2 4 5

</div>

<p>
At first, the pieces are on Squares $1$, $3$, and $4$.  The operations are performed against them as follows:
</p>

<ul>

<li>
The $3$-rd piece from the left is on Square $4$.
This is not the rightmost square, and the next square on the right does not contain a piece, so move the $3$-rd piece from the left to Square $5$.
Now, the pieces are on Squares $1$, $3$, and $5$.
</li>

<li>
The $3$-rd piece from the left is on Square $5$.
This is the rightmost square, so do nothing.
The pieces are still on Squares $1$, $3$, and $5$.
</li>

<li>
The $1$-st piece from the left is on Square $1$.
This is not the rightmost square, and the next square on the right does not contain a piece, so move the $1$-st piece from the left to Square $2$.
Now, the pieces are on Squares $2$, $3$, and $5$.
</li>

<li>
The $1$-st piece from the left is on Square $2$.
This is not the rightmost square, but the next square on the right (Square $3$) contains a piece, so do nothing.
The pieces are still on Squares $2$, $3$, and $5$.
</li>

<li>
The $2$-nd piece from the left is on Square $3$.
This is not the rightmost square, and the next square on the right does not contain a piece, so move the $2$-nd piece from the left to Square $4$;
Now, the pieces are still on Squares $2$, $4$, and $5$.
</li>

</ul>

<p>
Thus, after the $Q$operations have ended, the pieces are on Squares $2$, $4$, and $5$, so $2$, $4$, and $5$should be printed in this order, with spaces in between.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2 2 2
1 2
1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1 2

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10 6 9
1 3 5 7 8 9
1 2 3 4 5 6 5 6 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

2 5 6 7 9 10

</div>

</section>

</div>

</span>

</span>

</div>
