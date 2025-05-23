
<div>

<span>

<span>

<p>
配点 : $400$点
</p>

<div>

<section>

### **問題文**

<p>
$N$個のレンガが横一列に並んでいます。
</p>

<p>
左から $i~(1 \leq i \leq N)$番目のレンガには、整数 $a_i$が書かれています。
</p>

<p>
あなたはこのうち $N - 1$個以下の任意のレンガを選んで砕くことができます。
</p>

<p>
その結果、$K$個のレンガが残っているとします。このとき、任意の整数 $i~(1 \leq i \leq K)$について、残っているレンガの中で左から $i$番目のものに書かれた整数が $i$であるとき、すぬけさんは満足します。
</p>

<p>
すぬけさんが満足するために砕く必要のあるレンガの最小個数を出力してください。もし、どのように砕いてもそれが不可能な場合、代わりに `-1`を出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力は全て整数である。
</li>

<li>
$1 \leq N \leq 200000$
</li>

<li>
$1 \leq a_i \leq N$
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

$N$$a_1$$a_2$$...$$a_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
すぬけさんが満足するために砕く必要のあるレンガの最小個数を出力せよ。もし、どのように砕いてもそれが不可能な場合、代わりに `-1`を出力せよ。
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
2 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1

</div>

<p>
一番左のレンガ $1$個を砕くと、残ったレンガに書かれた整数は左から $1$, $2$となります。
</p>

<p>
このとき、すぬけさんは満足します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3
2 2 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

-1

</div>

<p>
この場合、すぬけさんが満足するレンガの砕き方は存在しません。
</p>

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

7

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

1
1

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

0

</div>

<p>
レンガを $1$つも砕かなくていい場合もあります。
</p>

</section>

</div>

</span>

</span>

</div>
