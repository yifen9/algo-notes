
<div>

<span>

<span>

<p>
Score : $400$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There is a grid with $H$horizontal rows and $W$vertical columns.  $(i, j)$denotes the square at the $i$-th row from the top and $j$-th column from the left.

$N$squares, $(r_1, c_1), (r_2, c_2), \ldots, (r_N, c_N)$, have walls.
</p>

<p>
Takahashi is initially at square $(r_\mathrm{s}, c_\mathrm{s})$.
</p>

<p>
$Q$instructions are given to Takahashi.
For $i = 1, 2, \ldots, Q$, the $i$-th instruction is represented by a pair of a character $d_i$and a positive integer $l_i$.  $d_i$is one of `L`, `R`, `U`, and `D`, representing the directions of left, right, up, and down, respectively.
</p>

<p>
Given the $i$-th direction, Takahashi repeats the following action $l_i$times:
</p>

<blockquote>

<p>
If a square without a wall is adjacent to the current square in the direction represented by $d_i$, move to that square;
otherwise, do nothing.
</p>

</blockquote>

<p>
For $i = 1, 2, \ldots, Q$, print the square where Takahashi will be after he follows the first $i$instructions.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq H, W \leq 10^9$
</li>

<li>
$1 \leq r_\mathrm{s} \leq H$
</li>

<li>
$1 \leq c_\mathrm{s} \leq W$
</li>

<li>
$0 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq r_i \leq H$
</li>

<li>
$1 \leq c_i \leq W$
</li>

<li>
$i \neq j \Rightarrow (r_i, c_i) \neq (r_j, c_j)$
</li>

<li>
$(r_\mathrm{s}, c_\mathrm{s}) \neq (r_i, c_i)$for all $i = 1, 2, \ldots, N$.
</li>

<li>
$1 \leq Q \leq 2 \times 10^5$
</li>

<li>
$d_i$is one of the characters `L`, `R`, `U`, and `D`.
</li>

<li>
$1 \leq l_i \leq 10^9$
</li>

<li>
All values in the input other than $d_i$are integers.
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

$H$$W$$r_\mathrm{s}$$c_\mathrm{s}$$N$$r_1$$c_1$$r_2$$c_2$$\vdots$$r_N$$c_N$$Q$$d_1$$l_1$$d_2$$l_2$$\vdots$$d_Q$$l_Q$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $Q$lines.
For $i = 1, 2, \ldots, Q$, the $i$-th line should contain the square $(R_i, C_i)$where Takahashi will be after he follows the first $i$instructions, in the following format:
</p>

<div>

$R_1$$C_1$$R_2$$C_2$$\vdots$$R_Q$$C_Q$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

5 5 4 4
3
5 3
2 2
1 4
4
L 2
U 3
L 2
R 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

4 2
3 2
3 1
3 5

</div>

<p>
The given grid and the initial position of Takahashi are as follows, where `#`denotes a square with a wall, `T`a square where Takahashi is, and `.`the other squares:
</p>

<div>

...#.
.#...
.....
...T.
..#..

</div>

<p>
Given the $1$-st instruction, Takahashi moves $2$squares to the left, ending up in square $(4, 2)$as follows:
</p>

<div>

...#.
.#...
.....
.T...
..#..

</div>

<p>
Given the $2$-nd instruction, Takahashi first moves $1$square upward, then he "does nothing" twice because the adjacent square in his direction has a wall.  As a result, he ends up in square $(3, 2)$as follows:
</p>

<div>

...#.
.#...
.T...
.....
..#..

</div>

<p>
Given the $3$-rd instruction, Takahashi first moves $1$square to the left, then he "does nothing" once because there is no square in his direction.  As a result, he ends up in square $(3, 1)$as follows:
</p>

<div>

...#.
.#...
T....
.....
..#..

</div>

<p>
Given the $4$-th instruction, Takahashi moves $4$squares to the right, ending up in square $(3, 5)$as follows:
</p>

<div>

...#.
.#...
....T
.....
..#..

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

6 6 6 3
7
3 1
4 3
2 6
3 4
5 5
1 1
3 2
10
D 3
U 3
L 2
D 2
U 3
D 3
U 3
R 3
L 3
D 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

6 3
5 3
5 1
6 1
4 1
6 1
4 1
4 2
4 1
5 1

</div>

</section>

</div>

</span>

</span>

</div>
