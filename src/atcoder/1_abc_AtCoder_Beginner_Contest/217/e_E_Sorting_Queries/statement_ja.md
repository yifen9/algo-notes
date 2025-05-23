
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
空の列 $A$があります。クエリが $Q$個与えられるので、与えられた順番に処理してください。

クエリは次の $3$種類のいずれかです。
</p>

<ul>

<li>
`1 x`: $A$の最後尾に $x$を追加する。
</li>

<li>
`2`: $A$の最初の要素を出力する。その後、その要素を削除する。このクエリが与えられるとき、$A$は空でないことが保証される。
</li>

<li>
`3`: $A$を昇順にソートする。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq Q \leq 2 \times 10^5$
</li>

<li>
$0 \leq x \leq 10^9$
</li>

<li>
クエリ `2`が与えられるとき、$A$は空でない。
</li>

<li>
入力は全て整数である。
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

$Q$$\mathrm{query} 1$$\mathrm{query} 2$$\vdots$$\mathrm{query} Q$
</div>

<p>
$i$番目のクエリ $\mathrm{query} i$では、まずクエリの種類 $c_i$（ $1, 2, 3$のいずれか）が与えられる。
$c_i = 1$の場合はさらに整数 $x$が追加で与えられる。
</p>

<p>
すなわち、各クエリは以下に示す $3$つの形式のいずれかである。
</p>

<div>

$1$$x$
</div>

<div>

$2$
</div>

<div>

$3$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$c_i = 2$を満たすクエリの回数を $q$として $q$行出力せよ。

$j$$(1 \leq j \leq q)$行目では $j$番目のそのようなクエリに対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

8
1 4
1 3
1 2
1 1
3
2
1 0
2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
2

</div>

<p>
入力例 $1$において、 $i$番目のクエリを処理した後の $A$の状態を $i$行目に示すと以下のようになります。
</p>

<ul>

<li>
$(4)$
</li>

<li>
$(4, 3)$
</li>

<li>
$(4, 3, 2)$
</li>

<li>
$(4, 3, 2, 1)$
</li>

<li>
$(1, 2, 3, 4)$
</li>

<li>
$(2, 3, 4)$
</li>

<li>
$(2, 3, 4, 0)$
</li>

<li>
$(3, 4, 0)$
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

9
1 5
1 5
1 3
2
3
2
1 6
3
2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5
3
5

</div>

<p>
入力例 $2$において、 $i$番目のクエリを処理した後の $A$の状態を $i$行目に示すと以下のようになります。
</p>

<ul>

<li>
$(5)$
</li>

<li>
$(5, 5)$
</li>

<li>
$(5, 5, 3)$
</li>

<li>
$(5, 3)$
</li>

<li>
$(3, 5)$
</li>

<li>
$(5)$
</li>

<li>
$(5, 6)$
</li>

<li>
$(5, 6)$
</li>

<li>
$(6)$
</li>

</ul>

</section>

</div>

</span>

</span>

</div>
