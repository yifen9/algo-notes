
<div>

<span>

<span>

<p>
配点 : $1000$点
</p>

<div>

<section>

### **問題文**

<p>
非負整数のひとつ書かれたカードが $N$枚積まれた山があります。上から $i$番目のカードに書かれた整数は $A_i$です。
</p>

<p>
すぬけ君は、以下の操作をカードが $2$枚になるまで繰り返します。
</p>

<ul>

<li>
連続して積まれている $3$枚のカードを選ぶ。
</li>

<li>
$3$枚のうち真ん中のカードを食べる。
</li>

<li>
あとの $2$枚のカードに書かれている整数を、その整数に食べたカードに書かれていた整数を足してできる整数に書き換える。
</li>

<li>
食べなかった $2$枚のカードを、順序を保ったまま山のもとの位置に戻す。
</li>

</ul>

<p>
最終的に残る $2$枚のカードに書かれた整数の和の最小値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 18$
</li>

<li>
$0 \leq A_i \leq 10^9 (1\leq i\leq N)$
</li>

<li>
入力はすべて整数である
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

$N$$A_1$$A_2$$...$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
最終的に残る $2$枚のカードに書かれた整数の和の最小値を出力せよ。
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
3 1 4 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

16

</div>

<p>
以下の操作を行うことで、最終的に残る $2$枚のカードに書かれた整数の和を最小にできます。
</p>

<ul>

<li>
最初、カードに書かれた整数は順に $3,1,4,2$である。
</li>

<li>
$1,2,3$番目のカードを選ぶ。$1$の書かれた $2$枚目のカードを食べ、残ったカードに書かれた整数に $1$を足し、山のもとの位置に戻す。カードに書かれた整数は順に $4,5,2$となる。
</li>

<li>
$1,2,3$番目のカードを選ぶ。$5$の書かれた $2$枚目のカードを食べ、残ったカードに書かれた整数に $5$を足し、山のもとの位置に戻す。カードに書かれた整数は順に $9,7$となる。
</li>

<li>
最後に残った $2$枚のカードに書かれた整数の和は $16$になる。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6
5 2 4 1 6 9

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

51

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
3 1 4 1 5 9 2 6 5 3

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

115

</div>

</section>

</div>

</span>

</span>

</div>
