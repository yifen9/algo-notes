
<div>

<span>

<span>

<p>
Score: $400$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Takahashi is hosting a contest with $N$players numbered $1$to $N$. 
The players will compete for points. Currently, all players have zero points.
</p>

<p>
Takahashi's foreseeing ability lets him know how the players' scores will change. Specifically, for $i=1,2,\dots,T$, the score of player $A_i$will increase by $B_i$points at $i$seconds from now. There will be no other change in the scores.
</p>

<p>
Takahashi, who prefers diversity in scores, wants to know how many different score values will appear among the players' scores at each moment. For each $i=1,2,\dots,T$, find the number of different score values among the players' scores at $i+0.5$seconds from now.
</p>

<p>
For example, if the players have $10$, $20$, $30$, and $20$points at some moment, there are three different score values among the players' scores at that moment.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1\leq N, T\leq 2\times 10^5$
</li>

<li>
$1\leq A_i \leq N$
</li>

<li>
$1\leq B_i \leq 10^9$
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

$N$$T$$A_1$$B_1$$A_2$$B_2$$\vdots$$A_T$$B_T$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print $T$lines.
The $i$-th line $(1\leq i \leq T)$should contain an integer representing the number of different score values among the players' scores at $i+0.5$seconds from now.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 4
1 10
3 20
2 10
2 10

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

2
3
2
2

</div>

<p>
Let $S$be the sequence of scores of players $1, 2, 3$in this order.
Currently, $S=\lbrace 0,0,0\rbrace$.
</p>

<ul>

<li>
After one second, the score of player $1$increases by $10$points, making $S=\lbrace 10,0,0\rbrace$. Thus, there are two different score values among the players' scores at $1.5$seconds from now.
</li>

<li>
After two seconds, the score of player $3$increases by $20$points, making $S=\lbrace 10,0,20\rbrace$. Thus, there are three different score values among the players' scores at $2.5$seconds from now.
</li>

<li>
After three seconds, the score of player $2$increases by $10$points, making $S=\lbrace 10,10,20\rbrace$. Therefore, there are two different score values among the players' scores at $3.5$seconds from now.
</li>

<li>
After four seconds, the score of player $2$increases by $10$points, making $S=\lbrace 10,20,20\rbrace$. Therefore, there are two different score values among the players' scores at $4.5$seconds from now.
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

1 3
1 3
1 4
1 3

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

1
1
1

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10 10
7 2620
9 2620
8 3375
1 3375
6 1395
5 1395
6 2923
10 3375
9 5929
5 1225

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

2
2
3
3
4
4
5
5
6
5

</div>

</section>

</div>

</span>

</span>

</div>
