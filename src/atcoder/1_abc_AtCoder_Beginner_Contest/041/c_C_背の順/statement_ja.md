
<div>

<section>

### **問題文**

<p>
高橋学級には $N$人の生徒がいます。 生徒は $1$から $N$まで出席番号が振られています。 $i$番目の生徒の身長は $a_i$です。 $a_i$はすべて相異なります。
</p>

<p>
高橋先生は $N$人の生徒を背の高い方から順に並べました。 $N$人の生徒の出席番号を背の高い方から順に出力してください。

</p>

</section>

<section>

### **制約**

<ul>

<li>
$2≦N≦10^5$
</li>

<li>
$a_i$は整数である。
</li>

<li>
$1≦a_i≦10^9$
</li>

<li>
$a_i$はすべて相異なる。
</li>

</ul>

</section>

<section>

### **部分点**

<ul>

<li>
$30$点分のテストケースでは、$N≦1000$を満たす。
</li>

</ul>

</section>

---

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$a_1$$a_2$$...$$a_N$
</div>

</section>

<section>

### **出力**

<p>
$N$行出力せよ。 $i$行目には、$i$番目に背の高い生徒の出席番号を出力せよ。
</p>

</section>

</div>

---

<section>

### **入力例1**

<div>

3
140 180 160

</div>

</section>

<section>

### **出力例1**

<div>

2
3
1

</div>

<p>
生徒の身長を大きい方から順に並べると $180$，$160$，$140$となります。 この順に生徒の出席番号を並べると $2$，$3$，$1$となります。
</p>

</section>

---

<section>

### **入力例2**

<div>

2
1000000000 1

</div>

</section>

<section>

### **出力例2**

<div>

1
2

</div>

</section>

---

<section>

### **入力例3**

<div>

8
3 1 4 15 9 2 6 5

</div>

</section>

<section>

### **出力例3**

<div>

4
5
7
8
3
1
6
2

</div>

</section>

</div>
