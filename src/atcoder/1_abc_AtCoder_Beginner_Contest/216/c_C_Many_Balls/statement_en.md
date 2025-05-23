
<div>

<span>

<span>

<p>
Score : $300$points
</p>

<div>

<section>

### **Problem Statement**

<p>
We have an empty box.

Takahashi can cast the following two spells any number of times in any order.
</p>

<ul>

<li>
Spell $A$: puts one new ball into the box.
</li>

<li>
Spell $B$: doubles the number of balls in the box.
</li>

</ul>

<p>
Tell us a way to have exactly $N$balls in the box with 
<strong>
at most $\mathbf{120}$casts
</strong>
of spells.

It can be proved that there always exists such a way under the Constraints given.
</p>

<p>
There is no way other than spells to alter the number of balls in the box.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 10^{18}$
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

$N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print a string $S$consisting of `A`and `B`.
The $i$-th character of $S$should represent the spell for the $i$-th cast.
</p>

<p>
$S$must have 
<strong>
at most $\mathbf{120}$
</strong>
characters.
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

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

AABA

</div>

<p>
This changes the number of balls as follows: $0 \xrightarrow{A} 1\xrightarrow{A} 2 \xrightarrow{B}4\xrightarrow{A} 5$.

There are also other acceptable outputs, such as `AAAAA`.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

14

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

BBABBAAAB

</div>

<p>
This changes the number of balls as follows: $0 \xrightarrow{B} 0 \xrightarrow{B} 0  \xrightarrow{A}1 \xrightarrow{B} 2 \xrightarrow{B} 4  \xrightarrow{A}5  \xrightarrow{A}6 \xrightarrow{A} 7  \xrightarrow{B}14$.

It is not required to minimize the length of $S$.
</p>

</section>

</div>

</span>

</span>

</div>
