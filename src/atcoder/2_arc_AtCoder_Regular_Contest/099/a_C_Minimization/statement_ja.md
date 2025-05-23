
<div>

<span>

<span>

<p>
配点 : $300$点
</p>

<div>

<section>

### **問題文**

<p>
長さ $N$の数列 $A_1, A_2, ..., A_N$があります．最初，この数列の要素は $1, 2, ..., N$を並び替えたものになっています．
</p>

<p>
スヌケ君は，この数列に対して次の操作を行うことができます．
</p>

<ul>

<li>
数列のうち，連続した $K$個の要素を選ぶ．その後，選んだ要素それぞれの値を，選んだ要素の中の最小値で置き換える．
</li>

</ul>

<p>
スヌケ君は，上の操作を何回か繰り返すことで，この数列の要素をすべて等しくしたいです．
必要な操作の回数の最小値を求めてください．
この問題の制約の下，このようなことは必ず可能であることが証明できます．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq K \leq N \leq 100000$
</li>

<li>
$A_1, A_2, ..., A_N$は $1, 2, ..., N$の並び替え
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
入力は以下の形式で標準入力から与えられる．
</p>

<div>

$N$$K$$A_1$$A_2$$...$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
必要な操作の回数の最小値を出力せよ．
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 3
2 3 1 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<p>
例えば，次のようにするとよいです：
</p>

<ul>

<li>
$1$回目の操作では，$1, 2, 3$番目の要素を選ぶ．すると，数列 $A$は $1, 1, 1, 4$になる．
</li>

<li>
$2$回目の操作では，$2, 3, 4$番目の要素を選ぶ．すると，数列 $A$は $1, 1, 1, 1$になる．
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 3
1 2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8 3
7 3 1 8 4 6 2 5

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

4

</div>

</section>

</div>

</span>

</span>

</div>
