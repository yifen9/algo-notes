
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
You are given two strings $S$and $T$.
Determine whether it is possible to make $S$equal $T$by performing the following operation some number of times (possibly zero).
</p>

<blockquote>

<p>
Between two consecutive equal characters in $S$, insert a character equal to these characters.
That is, take the following three steps.
</p>

<ol>

<li>
Let $N$be the current length of $S$, and $S = S_1S_2\ldots S_N$.
</li>

<li>
Choose an integer $i$between $1$and $N-1$(inclusive) such that $S_i = S_{i+1}$. (If there is no such $i$, do nothing and terminate the operation now, skipping step 3.)
</li>

<li>
Insert a single copy of the character $S_i(= S_{i+1})$between the $i$-th and $(i+1)$-th characters of $S$. Now, $S$is a string of length $N+1$: $S_1S_2\ldots S_i S_i S_{i+1} \ldots S_N$.
</li>

</ol>

</blockquote>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
Each of $S$and $T$is a string of length between $2$and $2 \times 10^5$(inclusive) consisting of lowercase English letters.
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

$S$$T$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If it is possible to make $S$equal $T$, print `Yes`; otherwise, print `No`.
Note that the judge is case-sensitive.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

abbaac
abbbbaaac

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

Yes

</div>

<p>
You can make $S =$`abbaac`equal $T =$`abbbbaaac`by the following three operations.
</p>

<ul>

<li>
First, insert `b`between the $2$-nd and $3$-rd characters of $S$. Now, $S =$`abbbaac`.
</li>

<li>
Next, insert `b`again between the $2$-nd and $3$-rd characters of $S$. Now, $S =$`abbbbaac`.
</li>

<li>
Lastly, insert `a`between the $6$-th and $7$-th characters of $S$. Now, $S =$`abbbbaaac`.
</li>

</ul>

<p>
Thus, `Yes`should be printed.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

xyzz
xyyzz

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

No

</div>

<p>
No sequence of operations makes $S =$`xyzz`equal $T =$`xyyzz`.
Thus, `No`should be printed.
</p>

</section>

</div>

</span>

</span>

</div>
