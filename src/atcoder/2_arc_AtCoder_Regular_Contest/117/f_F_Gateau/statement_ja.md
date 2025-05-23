
<div>

<span>

<span>

<p>
配点: $900$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder さんは $2N$人の友人のために、円形のチョコレートケーキを作りました。このケーキは中心から放射状に $2N$個のピースに等分されており、各ピースには時計回りの順番で $0$から $2N-1$までの番号が付けられています。
</p>

<p>
いま、最後の仕上げとして、AtCoder さんはこのケーキの各ピースの上にいちごを乗せようとしており、そのために友人に希望を聞きました。友人には $0$から $2N-1$までの番号が付けられており、友人 $i \ (0 \leq i \leq 2N-1)$の希望は以下の通りです。
</p>

<ul>

<li>
ピース $i, i+1, \dots, i+N-1$には、合計で $A_i$個以上のいちごが乗せられていてほしい（ただし、$x \geq 2N$に対しては、ピース $x$はピース $x-2N$のことを指すものとする）
</li>

</ul>

<p>
友人全員の希望を叶えるためには、ケーキ全体に最小で何個のいちごを乗せる必要があるでしょうか？
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 150000$
</li>

<li>
$0 \leq A_i \leq 5 \times 10^8 \ (0 \leq i \leq 2N-1)$
</li>

<li>
入力はすべて整数
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
入力は以下の形式で標準入力から与えられます。  
</p>

<div>

$N$$A_0$$A_1$$\cdots$$A_{2N-1}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
友人全員の希望を叶えるために乗せる必要のあるいちごの個数の最小値を出力してください。
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
2 5 7 4 2 1

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
ピース $0, 1, 2, 3, 4, 5$の上に置くいちごの個数を、それぞれ $1, 0, 1, 4, 2, 0$とする場合を考えます。
</p>

<p>
そのとき、それぞれの友人の希望は、以下のようにすべて叶います。
</p>

<ul>

<li>
友人 $0$：ピース $0, 1, 2$にはいちごが合計 $2$個あり、これは $A_0 = 2$個以上である
</li>

<li>
友人 $1$：ピース $1, 2, 3$にはいちごが合計 $5$個あり、これは $A_1 = 5$個以上である
</li>

<li>
友人 $2$：ピース $2, 3, 4$にはいちごが合計 $7$個あり、これは $A_2 = 7$個以上である
</li>

<li>
友人 $3$：ピース $3, 4, 5$にはいちごが合計 $6$個あり、これは $A_3 = 4$個以上である
</li>

<li>
友人 $4$：ピース $4, 5, 0$にはいちごが合計 $3$個あり、これは $A_4 = 2$個以上である
</li>

<li>
友人 $5$：ピース $5, 0, 1$にはいちごが合計 $1$個あり、これは $A_5 = 1$個以上である
</li>

</ul>

<p>
したがって、チョコレートケーキ全体で $8$個のいちごを置くことで、友人全員の希望を叶えることができます。
これが最小値となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3
8 0 6 0 9 0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

12

</div>

<p>
ピース $0, 1, 2, 3, 4, 5$の上に置くいちごの個数を、それぞれ $6, 0, 2, 1, 3, 0$とする場合を考えます。
</p>

<p>
そのとき、それぞれの友人の希望は、以下のようにすべて叶います。
</p>

<ul>

<li>
友人 $0$：ピース $0, 1, 2$にはいちごが合計 $8$個あり、これは $A_0 = 8$個以上である
</li>

<li>
友人 $1$：ピース $1, 2, 3$にはいちごが合計 $3$個あり、これは $A_1 = 0$個以上である
</li>

<li>
友人 $2$：ピース $2, 3, 4$にはいちごが合計 $6$個あり、これは $A_2 = 6$個以上である
</li>

<li>
友人 $3$：ピース $3, 4, 5$にはいちごが合計 $4$個あり、これは $A_3 = 0$個以上である
</li>

<li>
友人 $4$：ピース $4, 5, 0$にはいちごが合計 $9$個あり、これは $A_4 = 9$個以上である
</li>

<li>
友人 $5$：ピース $5, 0, 1$にはいちごが合計 $6$個あり、これは $A_5 = 0$個以上である
</li>

</ul>

<p>
したがって、チョコレートケーキ全体で $12$個のいちごを置くことで、友人全員の希望を叶えることができます。
これが最小値となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5
3 1 5 7 0 8 4 6 4 9

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

12

</div>

<p>
ピース $0, 1, \dots, 9$の上に置くいちごの個数を、それぞれ $0, 0, 0, 4, 0, 1, 1, 1, 0, 5$とすると、友人全員の希望を叶えることができます。
</p>

<p>
このとき、チョコレートケーキ全体で $12$個のいちごを置くことになり、これが最小値となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

1
267503 601617

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

869120

</div>

<p>
ピース $0$の上に $267503$個、ピース $1$の上に $601617$個のいちごを置くと、友人全員の希望を叶えることができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 5**

<div>

8
418940906 38034755 396064111 43044067 356084286 61548818 15301658 35906016 20933120 211233791 30314875 25149642 42550552 104690843 81256233 63578117

</div>

</section>

</div>

<div>

<section>

### **出力例 5**

<div>

513119404

</div>

</section>

</div>

</span>

</span>

</div>
