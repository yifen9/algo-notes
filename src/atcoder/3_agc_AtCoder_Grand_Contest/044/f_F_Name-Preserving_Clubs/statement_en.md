
<div>

<span>

<span>

<p>
Score : $2400$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There are $N$people (with different names) and $K$clubs. For each club you know the list of members (so you have $K$unordered lists). Each person can be a member of many clubs (and also $0$clubs) and two different clubs might have exactly the same members.
The value of the number $K$is the minimum possible such that the following property can be true for at least one configuration of clubs.
If every person changes her name (maintaining the property that all names are different) and you know the new $K$lists of members of the clubs (but you don't know which list corresponds to which club), you are sure that you would be able to match the old names with the new ones.
</p>

<p>
Count the number of such configurations of clubs (or say that there are more than $1000$).
Two configurations of clubs that can be obtained one from the other if the $N$people change their names are considered equal.
</p>

<p>

<strong>
Formal statement
</strong>
:
A club is a (possibly empty) subset of $\{1,\dots, N\}$(the subset identifies the members, assuming that the people are indexed by the numbers $1, 2,\dots, N$).
A configuration of clubs is an unordered collection of $K$clubs (not necessarily distinct).
Given a permutation $\sigma(1), \dots, \sigma(N)$of $\{1,\dots, N\}$and a configuration of clubs $L=\{C_1, C_2, \dots, C_K\}$, we denote with $\sigma(L)$the configuration of clubs $\{\sigma(C_1), \sigma(C_2), \dots, \sigma(C_K)\}$(if $C$is a club,  $\sigma(C)=\{\sigma(x):\, x\in C\}$).
A configuration of clubs $L$is name-preserving if for any pair of distinct permutations $\sigma\not=\tau$, it holds $\sigma(L)\not=\tau(L)$.
</p>

<p>
You have to count the number of name-preserving configurations of clubs with the minimum possible number of clubs (so $K$is minimum). Two configurations $L_1, L_2$such that $L_2=\sigma(L_1)$(for some permutation $\sigma$) are considered equal.
If there are more than $1000$such configurations, print $-1$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \le N \le 2\cdot10^{18}$
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
The input is given from Standard Input in the format
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
If $ans$is the number of configurations with the properties described in the statement, you should print on Standard Output
</p>

<div>

$ans$
</div>

<p>
If there are more than $1000$such configurations, print $-1$.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

1

</div>

<p>
The value of $K$is $1$and the unique name-preserving configuration of clubs is $\{\{1\}\}$(the configuration $\{\{2\}\}$is considered the same).
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1

</div>

<p>
The value of $K$is $2$and the unique (up to permutation) name-preserving configuration of clubs is $\{\{1\}, \{1, 2\}\}$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

7

</div>

<p>
The value of $K$is $3$and the name-preserving configurations of clubs with $3$clubs are:
</p>

<ul>

<li>
$\{\{1\}, \{2\}, \{1, 3\}\}$
</li>

<li>
$\{\{1\}, \{1, 2\}, \{2, 3\}\}$
</li>

<li>
$\{\{1, 2\}, \{1, 2\}, \{1, 3\}\}$
</li>

<li>
$\{\{1\}, \{1, 2\}, \{1, 2, 3\}\}$
</li>

<li>
$\{\{1\}, \{2, 3\}, \{1, 2, 4\}\}$
</li>

<li>
$\{\{1, 2\}, \{1, 3\}, \{1, 2, 4\}$
</li>

<li>
$\{\{1, 2\}, \{1, 2, 3\}, \{2, 3, 4\}\}$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

13

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

6

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 5**

<div>

26

</div>

</section>

</div>

<div>

<section>

### **Sample Output 5**

<div>

-1

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 6**

<div>

123456789123456789

</div>

</section>

</div>

<div>

<section>

### **Sample Output 6**

<div>

-1

</div>

</section>

</div>

</span>

</span>

</div>
