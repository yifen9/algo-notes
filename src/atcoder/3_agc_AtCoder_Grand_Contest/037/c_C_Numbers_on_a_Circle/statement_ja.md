
<div>

<span>

<span>

<p>
配点 : $800$点
</p>

<div>

<section>

### **問題文**

<p>
円環状に $N$個の正整数が並んでおり、それらには円環に沿った順に $1$から $N$の番号がついています。
</p>

<p>
今 $i$番目の数は $A_i$です。高橋君は $i$番目の正整数が $B_i$となるようにしたいです。
そこで、高橋君は以下の操作を繰り返し行うことにしました。
</p>

<ul>

<li>
$1 \leqq i \leqq N$なる整数 $i$を一つ選ぶ。
</li>

<li>
$i-1,i,i+1$番目の数をそれぞれ $a,b,c$としたとき、$i$番目の数を $a+b+c$に置き換える。
</li>

</ul>

<p>
ただし、$0$番目の数は $N$番目の数を指し、$N+1$番目の数は $1$番目の数を指すことに注意してください。
</p>

<p>
高橋君が条件をみたすように操作を行うことができるかどうか判定してください。
また可能である場合は、高橋君が行う必要のある操作回数として考えられる最小の値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$3 ≦ N ≦ 2 \times 10^5$
</li>

<li>
$1 ≦ A_i, B_i ≦ 10^9$
</li>

<li>
入力中のすべての値は整数である
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

$N$$A_1$$A_2$$...$$A_N$$B_1$$B_2$$...$$B_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君が行う必要のある操作回数として考えられる最小の値を出力せよ。
ただし、高橋君が条件をみたすように操作を行うことができない場合は `-1`を出力せよ。
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
1 1 1
13 5 7

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4

</div>

<p>
例えば高橋君は以下のように操作を行うことができます。
</p>

<ul>

<li>
$2$番目の数を $3$に置き換える。
</li>

<li>
$2$番目の数を $5$に置き換える。
</li>

<li>
$3$番目の数を $7$に置き換える。
</li>

<li>
$1$番目の数を $13$に置き換える。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4
1 2 3 4
2 3 4 5

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

5
5 6 5 2 1
9817 1108 6890 4343 8704

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

25

</div>

</section>

</div>

</span>

</span>

</div>
