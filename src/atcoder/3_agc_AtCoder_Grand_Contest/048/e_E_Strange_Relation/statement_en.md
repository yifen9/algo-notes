
<div>

<span>

<span>

<p>
Score : $1500$points
</p>

<div>

<section>

### **Problem Statement**

<p>
For an integer sequence of length $N$, $A=(A_1,A_2,\cdots,A_N)$, and an integer $T$, let $f(A,T)$defined as follows:
</p>

<ul>

<li>

<p>
$f(A, T)$is the lexicographically greatest integer sequence $x$that satisfies all of the conditions below.
Here, under the constraints in this problem, it can be proved that there always are sequences that satisfy the conditions and that the number of those sequences is finite. Thus, $f(A, T)$can always be defined.
</p>

<ul>

<li>
$x$is a sequence of length $N$consisting of non-negative integers.
</li>

<li>
For each $i$($1 \leq i \leq N$), let $y_i$be the number of indices $j$such that $j<i$and $A_j+T \times x_j < A_i+T \times x_i$. Then, $y_i=x_i$holds.
</li>

</ul>

</li>

</ul>

<p>
For example, assume that $A=(6,5,1)$and $T=3$.
Then, the sequences $x$that satisfy the conditions are: $(0,0,0)$, $(0,0,2)$, and $(0,1,0)$.
Thus, the value of $f(A, T)$is the lexicographically maximum among them: $(0,1,0)$.
</p>

<p>
Now, Snuke has $N$integer sequences $B_1,B_2,\cdots,B_N$and an integer $T$.
Each of the sequences $B_i$($1 \leq i \leq N$) is an integer sequence of length $K$.
</p>

<p>
He will create an integer sequence $A$of length $N$and compute $f(A, T)$.
The value of $A_i$will be chosen from $B_{i,1},B_{i,2},\cdots,B_{i,K}$.
Here, if $B_i$contains the same value multiple times, we will distinguish those occurrences; that is, there are $K^N$ways to create $A$.
</p>

<p>
For every $i$($1 \leq i \leq N$), solve the following problem:
</p>

<ul>

<li>
For all $K^N$choices of $A$, we will compute $f(A,T)$and record the value of its $i$-th element.
Find the sum of these values, modulo $(10^9+7)$.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 50$
</li>

<li>
$1 \leq K \leq 50$
</li>

<li>
$1 \leq T \leq 10^7$
</li>

<li>
$1 \leq B_{i,j} \leq 10^9$
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

$N$$K$$T$$B_{1,1}$$B_{1,2}$$\cdots$$B_{1,K}$$B_{2,1}$$B_{2,2}$$\cdots$$B_{2,K}$$\vdots$$B_{N,1}$$B_{N,2}$$\cdots$$B_{N,K}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
For every $i$, print the answer in its own line.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

2 2 1
1 2
1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

0
3

</div>

<ul>

<li>
For $A=(1,1)$: $f(A,T)=(0,1)$
</li>

<li>
For $A=(1,2)$: $f(A,T)=(0,1)$
</li>

<li>
For $A=(2,1)$: $f(A,T)=(0,0)$
</li>

<li>
For $A=(2,2)$: $f(A,T)=(0,1)$
</li>

</ul>

<p>
Thus, the answer is $0+0+0+0=0$for $i=1$and $1+1+0+1=3$for $i=2$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3 2 3
6 2
5 3
1 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

0
6
13

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10 15 45
129 82 26 185 217 258 22 192 24 117 167 255 91 180 203
171 73 168 26 208 169 115 164 121 214 154 196 172 66 230
185 178 241 220 243 143 111 124 10 62 56 117 254 43 81
201 74 213 163 204 35 44 203 207 73 218 60 243 51 250
229 117 212 245 112 152 206 96 266 165 105 94 231 41 27
261 201 258 111 100 72 239 31 199 203 226 151 72 268 44
94 19 47 243 133 174 141 82 190 62 175 256 126 123 210
186 64 73 82 68 183 261 120 265 212 18 24 36 152 92
205 101 186 91 172 153 91 242 141 97 247 193 45 245 66
225 97 162 213 61 219 184 195 80 203 79 72 269 258 199

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

0
248044096
333666695
536381826
8787512
11659012
661959013
166067001
529828166
526544756

</div>

</section>

</div>

</span>

</span>

</div>
