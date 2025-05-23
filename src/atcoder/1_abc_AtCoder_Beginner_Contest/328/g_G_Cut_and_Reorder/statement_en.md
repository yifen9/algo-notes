
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
You are given two sequences of length $N$: $A=(A_1,A_2,\ldots,A_N)$and $B=(B_1,B_2,\ldots,B_N)$.
</p>

<p>
You can perform the following two types of operations on the sequence $A$any number of times in any order.
</p>

<ul>

<li>
Split $A$at any positions and freely rearrange the split sequences. Each split position incurs a cost of $C$.
More formally, at a cost of $(X-1)C$, take a sequence of length $X+1$, $(i_0,i_1,i_2,\ldots,i_X)\ (0=i_0\lt i_1\lt i_2\lt\cdots\lt i_X=N)$, and a permutation $p$of $(1,2,\ldots,X)$, and replace $A$with the concatenation of $(A_{i_{p_j-1}+1},A_{i_{p_j-1}+2},\ldots,A_{i_{p_j}})$in ascending order of $j$.
</li>

<li>
Choose an integer $k$and any element of $A$, and add $k$to the value of the chosen element, for a cost of $|k|$.
</li>

</ul>

<p>
Find the minimum total cost required to make $A$and $B$equal by performing the operations.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N\leq22$
</li>

<li>
$1\leq C\leq10^{15}$
</li>

<li>
$1\leq A_i\leq10^{15}\ (1\leq i\leq N)$
</li>

<li>
$1\leq B_i\leq10^{15}\ (1\leq i\leq N)$
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

$N$$C$$A_1$$A_2$$\ldots$$A_N$$B_1$$B_2$$\ldots$$B_N$
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

5 1
3 1 4 1 5
9 2 6 5 3

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
For example, you can make $A$and $B$equal by performing the following operations.
</p>

<ul>

<li>
Add $2$to $A_2$. It costs $2$, and $A$becomes $(3,3,4,1,5)$.
</li>

<li>
Add $1$to $A_4$. It costs $1$, and $A$becomes $(3,3,4,2,5)$.
</li>

<li>
Add $3$to $A_3$. It costs $3$, and $A$becomes $(3,3,7,2,5)$.
</li>

<li>
Split $A$into $(3,3)$and $(7,2,5)$, and swap their order. It costs $1$, and $A$becomes $(7,2,5,3,3)$.
</li>

<li>
Add $1$to $A_3$. It costs $1$, and $A$becomes $(7,2,6,3,3)$.
</li>

<li>
Add $2$to $A_4$. It costs $2$, and $A$becomes $(7,2,6,5,3)$.
</li>

<li>
Add $2$to $A_1$. It costs $2$, and $A$becomes $(9,2,6,5,3)$.
</li>

</ul>

<p>
The total cost incurred is $2+1+3+1+1+2+2=12$.
</p>

<p>
It is impossible to make $A$and $B$equal with a total cost of $11$or less, so print $12$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 1000000000
3 1 4 1 5
9 2 6 5 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

15

</div>

<p>
For example, you can make $A$and $B$equal by performing the following operations.
</p>

<ul>

<li>
Add $6$to $A_1$. It costs $6$, and $A$becomes $(9,1,4,1,5)$.
</li>

<li>
Add $1$to $A_2$. It costs $1$, and $A$becomes $(9,2,4,1,5)$.
</li>

<li>
Add $2$to $A_3$. It costs $2$, and $A$becomes $(9,2,6,1,5)$.
</li>

<li>
Add $4$to $A_4$. It costs $4$, and $A$becomes $(9,2,6,5,5)$.
</li>

<li>
Add $-2$to $A_5$. It costs $2$, and $A$becomes $(9,2,6,5,3)$.
</li>

</ul>

<p>
The total cost incurred is $15$.
</p>

<p>
It is impossible to make $A$and $B$equal with a total cost of $14$or less, so print $15$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

22 467772225675200
814424018890229 837987908732596 281175505732576 405797525366223 319378664987871 305374284356649 519144936694626 316916938328237 590332737480143 506785561790072 945769796193819 365498597798550 5386616044591 672368930784037 478017750715806 340276460237787 176509793332130 2734777402752 677509027289850 250325127275409 260270543315523 103584313625431
720386673780641 77160494100361 540947273460639 255177791002759 969333325196025 477751866935037 369600749728569 466236682780196 343161112138696 541310338013515 42740499599240 165778332156355 618106559852784 16582487395877 591851763813728 221861304303645 982850624742022 728669467505250 337968530842725 746724490610504 61587851254728 451153536869240

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

4370668608634071

</div>

<p>
Note that the input and the answer may not fit into a $32\operatorname{bit}$integer.
</p>

</section>

</div>

</span>

</span>

</div>
