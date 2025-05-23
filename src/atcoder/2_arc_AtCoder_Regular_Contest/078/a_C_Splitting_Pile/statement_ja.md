
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
すぬけくんとアライグマは $N$枚のカードの山を作りました。カードの山の上から $i$番目のカードには整数 $a_i$が書かれています。
</p>

<p>
$N$枚のカードを分け合うことにしました。
すぬけくんがカードの山の上から何枚かのカードを取ったあと、アライグマは残ったカード全てを取ります。
このとき、すぬけくんもアライグマも $1$枚以上のカードを取る必要があります。
</p>

<p>
すぬけくんとアライグマが持っているカードに書かれた数の総和をそれぞれ $x,y$として、$|x-y|$を最小化したいです。
$|x-y|$としてありうる値の最小値を求めなさい。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 2 \times 10^5$
</li>

<li>
$-10^{9} \leq a_i \leq 10^{9}$
</li>

<li>
$a_i$は整数
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

$N$$a_1$$a_2$$...$$a_{N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6
1 2 3 4 5 6

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
すぬけくんが上から $4$枚のカードを、アライグマが残った $2$枚のカードを取ったとき、$x=10,y=11$となって、$|x-y|$は $1$となり、これが最小です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2
10 -10

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

20

</div>

<p>
すぬけくんは上から $1$枚のカードを、アライグマは残った $1$枚を取るしかありえません。このとき $x=10,y=-10$となって、$|x-y|$は $20$となります。
</p>

</section>

</div>

</span>

</span>

</div>
