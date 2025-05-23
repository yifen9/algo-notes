
<div>

<span>

<span>

<p>
Score : $200$points
</p>

<div>

<section>

### **Problem Statement**

<p>
Takahashi wants to buy the popular video game console called Play Snuke.

There are $N$shops that sell Play Snuke: Shop $1, 2, \dots, N$. Shop $i$is $A_i$minutes' walk from where Takahashi is now, sells Play Snuke for $P_i$yen (Japanese currency), and currently has $X_i$Play Snukes in stock.

Now, Takahashi will go to one of those shops on foot and buy Play Snuke if it is still in stock when he gets there.

However, Play Snuke is so popular that the number of consoles in stock (if any) in every shop will decrease by $1$at the following moments: $0.5, 1.5, 2.5, \dots$minutes from now.

Determine whether Takahashi can buy Play Snuke. If he can, find the minimum amount of money needed to buy one.
</p>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
All values in input are integers.
</li>

<li>
$1 ≤ N ≤ 10^5$
</li>

<li>
$1 ≤ A_i, P_i, X_i ≤ 10^9$
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

$N$$A_1$$P_1$$X_1$$\vdots$$A_N$$P_N$$X_N$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
If Takahashi can buy Play Snuke, print the minimum amount of money needed to buy one, as an integer.

If he cannot buy one, print `-1`.
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
3 9 5
4 8 5
5 7 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

8

</div>

<p>
If he goes to Shop $1$, it will still have $2$Play Snukes when he gets there, and he can buy one for $9$yen.

If he goes to Shop $2$, it will still have $1$Play Snuke when he gets there, and he can buy one for $8$yen.

If he goes to Shop $3$, Play Snuke will be out of stock when he gets there; he cannot buy one.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

3
5 9 5
6 8 5
7 7 5

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

-1

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

10
158260522 877914575 602436426
24979445 861648772 623690081
433933447 476190629 262703497
211047202 971407775 628894325
731963982 822804784 450968417
430302156 982631932 161735902
880895728 923078537 707723857
189330739 910286918 802329211
404539679 303238506 317063340
492686568 773361868 125660016

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

861648772

</div>

</section>

</div>

</span>

</span>

</div>
