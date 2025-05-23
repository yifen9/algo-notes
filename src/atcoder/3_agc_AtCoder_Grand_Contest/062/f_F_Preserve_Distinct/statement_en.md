
<div>

<span>

<span>

<p>
Score : $2000$points
</p>

<div>

<section>

### **Problem Statement**

<p>
There are $N$decks of cards, each card in which has an integer between $1$and $M$, inclusive, written on it. The $i$-th deck $(1\leq i \leq N)$contains $K_i$cards, and the number written on the $j$-th card from the top is $A_{i,j}\ (1\leq j \leq K_i)$.
</p>

<p>
Initially, the integers written on the cards satisfy the following conditions:
</p>

<ul>

<li>
For each integer $x\ (1\leq x \leq M)$, there are exactly two cards with $x$written on them, each in a different deck.
</li>

<li>
The integers written on the top cards of all the decks are pairwise different.
</li>

</ul>

<p>
We can perform the following operation on the $N$decks:
</p>

<ul>

<li>
Choose a deck that still has cards and discard the top card. After discarding, the integers written on the top cards of the decks that still have cards must remain pairwise different.
</li>

</ul>

<p>
Determine the maximum number of times this operation can be performed.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$2 \leq N \leq M$
</li>

<li>
$2 \leq M \leq 2 \times 10^5$
</li>

<li>
$1 \leq K_i \leq M$
</li>

<li>
$1 \leq A_{i,j} \leq M$
</li>

<li>
For each integer $x\ (1\leq x \leq M)$, there are exactly two pairs $(i,j)$such that $x=A_{i,j}$, and the two values of $i$are different.
</li>

<li>
$A_{i,1}\ (1\leq i \leq N)$are pairwise different.
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

$N$$M$$K_1$$A_{1,1}$$A_{1,2}$$\dots$$A_{1,K_1}$$K_2$$A_{2,1}$$A_{2,2}$$\dots$$A_{2,K_2}$$\vdots$$K_N$$A_{N,1}$$A_{N,2}$$\dots$$A_{N,K_N}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the answer.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

2 4
4 1 2 3 4
4 3 2 1 4

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
If you initially perform the operation on the first deck, the numbers on the cards of this deck become $2, 3, 4$in order from the top. After this, you may not perform the operation again on the first deck because both the first and second decks would have $3$on their top cards. Similarly, you cannot perform the operation on the second deck either. Therefore, if you start by performing the operation on the first deck, you can only do it once.
</p>

<p>
Even if you start by performing the operation on the second deck, you can only do it once. Therefore, the answer is $1$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

4 6
2 6 4
3 2 5 3
4 3 1 5 6
3 4 1 2

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

12

</div>

<p>
By operating properly, it is possible to discard all the cards.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

3 3
2 1 2
2 2 3
2 3 1

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

0

</div>

<p>
There are cases when no operation can be performed.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

12 40
4 35 39 11 21
7 31 29 16 15 30 32 34
4 21 27 38 40
11 17 28 26 23 33 22 3 36 8 1 20
1 30
4 40 38 24 6
8 8 36 9 10 5 7 20 4
10 5 10 9 3 22 33 23 26 28 17
4 15 16 29 31
11 19 13 12 18 25 2 39 35 7 14 37
3 4 1 14
13 24 27 11 2 25 18 12 13 19 32 37 6 34

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

53

</div>

</section>

</div>

</span>

</span>

</div>
