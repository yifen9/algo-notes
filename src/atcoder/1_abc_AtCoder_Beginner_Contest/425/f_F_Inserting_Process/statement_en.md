
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
You are given a string $T$of length $N$consisting of lowercase English letters.
</p>

<p>
Output, modulo $998244353$, the number of sequences of strings $s=(s_0,s_1,\ldots,s_N)$that satisfy all of the following conditions.
</p>

<ul>

<li>
$s_0$is an empty string.
</li>

<li>
For $i=1,2,\ldots,N$, the string $s_{i}$is obtained by inserting one arbitrary character at an arbitrary position (possibly beginning or end) in $s_{i-1}$.
</li>

<li>
$s_N=T$
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N\leq 22$
</li>

<li>
$N$is an integer.
</li>

<li>
$T$is a string of length $N$consisting of lowercase English letters.
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

$N$$T$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Output the answer.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3
aab

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

3

</div>

<p>
The sequences $s$that satisfy the conditions are the following three:
</p>

<ul>

<li>
$s=(\texttt{""}, \texttt{"a"} ,\texttt{"aa"} ,\texttt{"aab"} )$
</li>

<li>
$s=(\texttt{""}, \texttt{"a"} ,\texttt{"ab"} ,\texttt{"aab"} )$
</li>

<li>
$s=(\texttt{""}, \texttt{"b"} ,\texttt{"ab"} ,\texttt{"aab"} )$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

7
atcoder

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

5040

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

22
atcoderbeginnercontest

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

115732070

</div>

</section>

</div>

</span>

</span>

</div>
