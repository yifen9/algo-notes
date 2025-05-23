
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
高橋くんは人気ゲーム機「スヌケマシン」を買おうとしています。

スヌケマシンを販売している店は店 $1, 2, \dots, N$の $N$軒あり、店 $i$は高橋くんの現在地から徒歩 $A_i$分、スヌケマシンの販売価格は $P_i$円、現在のスヌケマシンの在庫は $X_i$台です。

高橋くんは今から徒歩でスヌケマシンを販売している店に向かい、店に着いたときにスヌケマシンの在庫があればスヌケマシンを買います。

しかし、スヌケマシンは人気商品なので、今から $0.5, 1.5, 2.5, \dots$分後に全ての店でスヌケマシンの在庫が (存在するなら) $1$台減ります。

高橋くんがスヌケマシンを買うことができるか判定し、できる場合は買うのに必要な最小の金額を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力は全て整数
</li>

<li>
$1 ≤ N ≤ 10^5$
</li>

<li>
$1 ≤ A_i, P_i, X_i ≤ 10^9$
</li>

</ul>

</section>

</div>

---

<div>

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$A_1$$P_1$$X_1$$\vdots$$A_N$$P_N$$X_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋くんがスヌケマシンを買うことができる場合は、買うのに必要な最小の金額を出力せよ。

できない場合は、`-1`を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

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

### **出力例 1**

<div>

8

</div>

<p>
店 $1$に向かうと、高橋くんが着いたときにはスヌケマシンが $2$台残っていて、$9$円でスヌケマシンを買うことができます。

店 $2$に向かうと、高橋くんが着いたときにはスヌケマシンが $1$台残っていて、$8$円でスヌケマシンを買うことができます。

店 $3$に向かうと、高橋くんが着いたときにはスヌケマシンが売り切れていて、買うことができません。  
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

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

### **出力例 2**

<div>

-1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

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

### **出力例 3**

<div>

861648772

</div>

</section>

</div>

</span>

</span>

</div>
