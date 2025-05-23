
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
We have a grid with $10^9$rows and $10^9$columns. Let $(i,j)$denote the square at the $i$-th row from the top and $j$-th column from the left.
</p>

<p>
For $i=1,2,\ldots,N$, a positive integer $x_i$is written on $(r_i,c_i)$. On the other $10^{18}-N$squares, $0$is written.
</p>

<p>
You choose a square $(R,C)$and compute the sum $S$of the integers written on the $2 \times 10^9 - 1$squares that share a row or column with $(R,C)$. 
</p>

<p>
Find the maximum possible value of $S$.
</p>

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
$1 \leq r_i,c_i,x_i \leq 10^9$
</li>

<li>
$(r_i,c_i) \neq (r_j,c_j)$if $i \neq j$.
</li>

<li>
All values in the input are integers.
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

$N$$r_1$$c_1$$x_1$$\vdots$$r_N$$c_N$$x_N$
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

4
1 1 2
1 2 9
2 1 8
3 2 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

20

</div>

<p>
If you choose $(2,2)$as $(R,C)$, then $S$will be $20$, which is the maximum possible value.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

1
1 1000000000 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

15
158260522 877914575 602436426
24979445 861648772 623690081
433933447 476190629 262703497
211047202 971407775 628894325
731963982 822804784 450968417
430302156 982631932 161735902
880895728 923078537 707723857
189330739 910286918 802329211
404539679 303238506 317063340
492686568 773361868 125660016
650287940 839296263 462224593
492601449 384836991 191890310
576823355 782177068 404011431
818008580 954291757 160449218
155374934 840594328 164163676

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

1510053068

</div>

</section>

</div>

</span>

</span>

</div>
