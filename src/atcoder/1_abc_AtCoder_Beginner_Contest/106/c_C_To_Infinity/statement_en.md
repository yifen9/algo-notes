
<div>

<span>

<span>

<p>
﻿Score: $300$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Mr. Infinity has a string $S$consisting of digits from `1`to `9`. Each time the date changes, this string changes as follows:
</p>

<ul>

<li>
Each occurrence of `2`in $S$is replaced with `22`. Similarly, each `3`becomes `333`, `4`becomes `4444`, `5`becomes `55555`, `6`becomes `666666`, `7`becomes `7777777`, `8`becomes `88888888`and `9`becomes `999999999`. `1`remains as `1`.
</li>

</ul>

<p>
For example, if $S$is `1324`, it becomes `1333224444`the next day, and it becomes `133333333322224444444444444444`the day after next.
You are interested in what the string looks like after $5 \times 10^{15}$days. What is the $K$-th character from the left in the string after $5 \times 10^{15}$days?
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$S$is a string of length between $1$and $100$(inclusive).
</li>

<li>
$K$is an integer between $1$and $10^{18}$(inclusive).
</li>

<li>
The length of the string after $5 \times 10^{15}$days is at least $K$.
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

$S$$K$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the $K$-th character from the left in Mr. Infinity's string after $5 \times 10^{15}$days.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

1214
4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2

</div>

<p>
The string $S$changes as follows:  
</p>

<ul>

<li>
Now: `1214`
</li>

<li>
After one day: `12214444`
</li>

<li>
After two days: `1222214444444444444444`
</li>

<li>
After three days: `12222222214444444444444444444444444444444444444444444444444444444444444444`
</li>

</ul>

<p>
The first five characters in the string after $5 \times 10^{15}$days is `12222`. As $K=4$, we should print the fourth character, `2`.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3
157

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

3

</div>

<p>
The initial string is `3`. The string after $5 \times 10^{15}$days consists only of `3`.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

299792458
9460730472580800

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

2

</div>

</section>

</div>

</span>

</span>

</div>
