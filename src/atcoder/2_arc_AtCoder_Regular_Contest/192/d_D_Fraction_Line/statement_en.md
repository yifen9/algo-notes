
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
For a positive rational number $x$, define $f(x)$as follows:
</p>

<blockquote>

<p>
Express $x$as $\dfrac{P}{Q}$using coprime positive integers $P$and $Q$. $f(x)$is defined as the value $P\times Q$.
</p>

</blockquote>

<p>
You are given a positive integer $N$and a sequence $A=(A_1,A_2,\dots,A_{N-1})$of positive integers of length $N-1$.
</p>

<p>
We call a sequence $S=(S_1,S_2,\dots,S_N)$of positive integers of length $N$a 
<strong>
good sequence
</strong>
if it satisfies all of the following conditions:
</p>

<ul>

<li>
For every integer $i$with $1\leq i\leq N-1$, it holds that $f\left(\dfrac{S_i}{S_{i+1}}\right)=A_i$.
</li>

<li>
$\gcd(S_1,S_2,\dots,S_N)=1$.
</li>

</ul>

<p>
Define the 
<strong>
score
</strong>
of a sequence as the product of all its elements.
</p>

<p>
It can be proved that there are finitely many good sequences. Find the sum, modulo $998244353$, of the scores of all good sequences.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2\leq N\leq 1000$
</li>

<li>
$1\leq A_i\leq 1000$$(1\leq i\leq N-1)$
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

$N$$A_1$$A_2$$\dots$$A_{N-1}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the sum, modulo $998244353$, of the scores of all good sequences.
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
1 9 2 2 9

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

939634344

</div>

<p>
For example, both $(2,2,18,9,18,2)$and $(18,18,2,1,2,18)$are good sequences, and both have a score of $23328$.
</p>

<p>
There are a total of $16$good sequences, and the sum of the scores of all of them is $939634344$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2
9

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

18

</div>

<p>
There are $2$good sequences, both with a score of $9$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

25
222 299 229 22 999 922 99 992 22 292 222 229 992 922 22 992 222 222 99 29 92 999 2 29

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

192457116

</div>

<p>
Do not forget to compute the sum modulo $998244353$.
</p>

</section>

</div>

</span>

</span>

</div>
