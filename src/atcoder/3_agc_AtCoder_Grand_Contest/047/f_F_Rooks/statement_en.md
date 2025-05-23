
<div>

<span>

<span>

<p>
Score : $2200$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given positions $(X_i, Y_i)$of $N$enemy rooks on an infinite chessboard.
No two rooks attack each other (at most one rook per row or column).
</p>

<p>
You're going to replace one rook with a king and then move the king repeatedly to beat as many rooks as possible.
</p>

<p>
You can't enter a cell that is being attacked by a rook.
Additionally, you 
<strong>
can't move diagonally to an empty cell
</strong>
(but you can beat a rook diagonally).
</p>

<p>
(So this king moves like a superpawn that beats diagonally in 4 directions and moves horizontally/vertically in 4 directions.)
</p>

<p>
For each rook, consider replacing it with a king, and find the minimum possible number of moves
    needed to beat the maximum possible number of rooks.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq N \leq 200\,000$
</li>

<li>
$1 \leq X_i, Y_i \leq 10^6$
</li>

<li>
$X_i \neq X_j$
</li>

<li>
$Y_i \neq Y_j$
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
Input is given from Standard Input in the following format.
</p>

<div>

$N$$X_1$$Y_1$$X_2$$Y_2$$\vdots$$X_N$$Y_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $N$lines.
The $i$-th line is for scenario of replacing the rook at $(X_i, Y_i)$with your king.
This line should contain one integer: the minimum number of moves to beat $M_i$rooks
    where $M_i$denotes the maximum possible number of beaten rooks in this scenario (in infinite time).
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

6
1 8
6 10
2 7
4 4
9 3
5 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

5
0
7
5
0
0

</div>

<p>
See the drawing below.
If we replace rook 3 with a king, we can beat at most two other rooks.
The red path is one of optimal sequences of moves: beat rook 1,
    then keep going down and right until you can beat rook 4.
There are 7 steps and that's the third number in the output.
</p>

<p>

<img src="https://img.atcoder.jp/agc047/rooks_path_small3.png">

</img>

</p>

<p>

<em>
x-coordinate increases from left to right,
    while y increases bottom to top.
</em>

</p>

<p>
Starting from rook 2, 5 or 6, we can't beat any other rook.
The optimal number of moves is 0.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

5
5 5
100 100
70 20
81 70
800 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

985
985
1065
1034
0

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10
2 5
4 4
13 12
12 13
14 17
17 19
22 22
16 18
19 27
25 26

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

2
2
9
9
3
3
24
5
0
25

</div>

</section>

</div>

</span>

</span>

</div>
