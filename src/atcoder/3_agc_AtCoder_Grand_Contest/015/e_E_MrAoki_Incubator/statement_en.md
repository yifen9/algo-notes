
<div>

<span>

<span>

<p>
Score : $1200$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Takahashi is an expert of Clone Jutsu, a secret art that creates copies of his body.
</p>

<p>
On a number line, there are $N$copies of Takahashi, numbered $1$through $N$.
The $i$-th copy is located at position $X_i$and starts walking with velocity $V_i$in the positive direction at time $0$.
</p>

<p>
Kenus is a master of Transformation Jutsu, and not only can he change into a person other than himself, but he can also transform another person into someone else.
</p>

<p>
Kenus can select some of the copies of Takahashi at time $0$, and transform them into copies of Aoki, another Ninja.
The walking velocity of a copy does not change when it transforms.
From then on, whenever a copy of Takahashi and a copy of Aoki are at the same coordinate, that copy of Takahashi transforms into a copy of Aoki.
</p>

<p>
Among the $2^N$ways to transform some copies of Takahashi into copies of Aoki at time $0$, in how many ways will all the copies of Takahashi become copies of Aoki after a sufficiently long time?
Find the count modulo $10^9+7$.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 ≤ N ≤ 200000$
</li>

<li>
$1 ≤ X_i,V_i ≤ 10^9(1 ≤ i ≤ N)$
</li>

<li>
$X_i$and $V_i$are integers.
</li>

<li>
All $X_i$are distinct.
</li>

<li>
All $V_i$are distinct.
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

$N$$X_1$$V_1$:
$X_N$$V_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the number of the ways that cause all the copies of Takahashi to turn into copies of Aoki after a sufficiently long time, modulo $10^9+7$.
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
2 5
6 1
3 7

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

6

</div>

<p>
All copies of Takahashi will turn into copies of Aoki after a sufficiently long time if Kenus transforms one of the following sets of copies of Takahashi into copies of Aoki: $(2)$, $(3)$, $(1,2)$, $(1,3)$, $(2,3)$and $(1,2,3)$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4
3 7
2 9
8 16
10 8

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

9

</div>

</section>

</div>

</span>

</span>

</div>
