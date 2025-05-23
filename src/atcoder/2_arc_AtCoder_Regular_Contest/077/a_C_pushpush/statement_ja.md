
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
長さ $n$の数列 $a_1, ... , a_n$が与えられます。
空の数列 $b$に対して、以下の操作を $n$回行うことを考えます。
</p>

<p>
$i$回目には
</p>

<ol>

<li>
数列の $i$番目の要素 $a_i$を $b$の末尾に追加する。
</li>

<li>
$b$を逆向きに並び替える。
</li>

</ol>

<p>
この操作をしてできる数列 $b$を求めて下さい。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq n \leq 2\times 10^5$
</li>

<li>
$0 \leq a_i \leq 10^9$
</li>

<li>
$n,a_i$は整数である。
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

$n$$a_1$$a_2$$...$$a_n$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$n$個の整数を空白区切りで $1$行に出力せよ。
$i$番目には、 $b_i$を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4
1 2 3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4 2 1 3

</div>

<p>
$1$回目の操作 $1$の後、 $b$は $1$となります。

$1$回目の操作 $2$の後、 $b$は $1$となります。

$2$回目の操作 $1$の後、 $b$は $1, 2$となります。

$2$回目の操作 $2$の後、 $b$は $2, 1$となります。

$3$回目の操作 $1$の後、 $b$は $2, 1, 3$となります。

$3$回目の操作 $2$の後、 $b$は $3, 1, 2$となります。

$4$回目の操作 $1$の後、 $b$は $3, 1, 2, 4$となります。

$4$回目の操作 $2$の後、 $b$は $4, 2, 1, 3$となります。
よって、答えは `4 2 1 3`です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3
1 2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3 1 2

</div>

<p>
出力例 1 の説明の通り、 $3$回目の操作 $2$の後、 $b$は $3, 1, 2$となるので、
答えは `3 1 2`です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1
1000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1000000000

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

6
0 6 7 6 7 0

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

0 6 6 0 7 7

</div>

</section>

</div>

</span>

</span>

</div>
