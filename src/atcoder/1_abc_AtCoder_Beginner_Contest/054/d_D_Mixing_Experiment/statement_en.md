
<div>

<span>

<span>

<p>
Score : $400$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Dolphin is planning to generate a small amount of a certain chemical substance C.

In order to generate the substance C, he must prepare a solution which is a mixture of two substances A and B in the ratio of $M_a:M_b$.

He does not have any stock of chemicals, however, so he will purchase some chemicals at a local pharmacy.

The pharmacy sells $N$kinds of chemicals. For each kind of chemical, there is exactly one package of that chemical in stock.

The package of chemical $i$contains $a_i$grams of the substance A and $b_i$grams of the substance B, and is sold for $c_i$yen (the currency of Japan).

Dolphin will purchase some of these packages. For some reason, he must use all contents of the purchased packages to generate the substance C.

Find the minimum amount of money required to generate the substance C.

If it is not possible to generate the substance C by purchasing any combination of packages at the pharmacy, report that fact.  
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1≦N≦40$
</li>

<li>
$1≦a_i,b_i≦10$
</li>

<li>
$1≦c_i≦100$
</li>

<li>
$1≦M_a,M_b≦10$
</li>

<li>
$gcd(M_a,M_b)=1$
</li>

<li>
$a_i$, $b_i$, $c_i$, $M_a$and $M_b$are integers.
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

$N$$M_a$$M_b$$a_1$$b_1$$c_1$$a_2$$b_2$$c_2$$:$$a_N$$b_N$$c_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the minimum amount of money required to generate the substance C. If it is not possible to generate the substance C, print `-1`instead.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

3 1 1
1 2 1
2 1 2
3 3 10

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
The amount of money spent will be minimized by purchasing the packages of chemicals $1$and $2$.

In this case, the mixture of the purchased chemicals will contain $3$grams of the substance A and $3$grams of the substance B, which are in the desired ratio: $3:3=1:1$.

The total price of these packages is $3$yen.  
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

1 1 10
10 10 10

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

-1

</div>

<p>
The ratio $1:10$of the two substances A and B cannot be satisfied by purchasing any combination of the packages. Thus, the output should be `-1`.
</p>

</section>

</div>

</span>

</span>

</div>
