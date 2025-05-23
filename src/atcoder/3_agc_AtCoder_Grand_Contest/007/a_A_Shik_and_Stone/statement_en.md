
<div>

<span>

<span>

<p>
Score : $200$points
</p>

<div>

<section>

### **Problem Statement**

<style>
#nck {
      width: 30px;
      height: auto;
   }

</style>

<p>
We have a grid of $H$rows and $W$columns. Initially, there is a stone in the top left cell. Shik is trying to move the stone to the bottom right cell. In each step, he can move the stone one cell to its left, up, right, or down (if such cell exists). It is possible that the stone visits a cell multiple times (including the bottom right and the top left cell).
</p>

<p>
You are given a matrix of characters $a_{ij}$($1 \leq i \leq H$, $1 \leq j \leq W$). After Shik completes all moving actions, $a_{ij}$is `#`if the stone had ever located at the $i$-th row and the $j$-th column during the process of moving. Otherwise, $a_{ij}$is `.`. Please determine whether it is possible that Shik only uses right and down moves in all steps.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq H, W \leq 8$
</li>

<li>
$a_{i,j}$is either `#`or `.`.
</li>

<li>
There exists a valid sequence of moves for Shik to generate the map $a$.
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

$H$$W$$a_{11}a_{12}$$...$$a_{1W}$$:$$a_{H1}a_{H2}$$...$$a_{HW}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If it is possible that Shik only uses right and down moves, print `Possible`. Otherwise, print `Impossible`.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

4 5
##...
.##..
..##.
...##

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Possible

</div>

<p>
The matrix can be generated by a $7$-move sequence: right, down, right, down, right, down, and right.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5 3
###
..#
###
#..
###

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

Impossible

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

4 5
##...
.###.
.###.
...##

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

Impossible

</div>

</section>

</div>

</span>

</span>

</div>
