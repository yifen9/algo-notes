
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
高橋君は青木君とすぬけ君に 
<strong>
$1$つずつ
</strong>
贈り物を送ることにしました。

青木君への贈り物の候補は $N$個あり、
それぞれの価値は $A_1, A_2, \ldots,A_N$です。

すぬけ君への贈り物の候補は $M$個あり、
それぞれの価値は  $B_1, B_2, \ldots,B_M$です。  
</p>

<p>
高橋君は $2$人への贈り物の価値の差が $D$以下になるようにしたいと考えています。
</p>

<p>
条件をみたすように贈り物を選ぶことが可能か判定し、可能な場合はそのような選び方における贈り物の価値の和の最大値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N,M\leq 2\times 10^5$
</li>

<li>
$1\leq A_i,B_i\leq 10^{18}$
</li>

<li>
$0\leq D \leq 10^{18}$
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
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$M$$D$$A_1$$A_2$$\ldots$$A_N$$B_1$$B_2$$\ldots$$B_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君が条件をみたすように贈り物を選ぶことができる場合、
条件をみたし、かつ価値の和が最大になるように贈り物を選んだ時の価値の和を出力せよ。
高橋君が条件をみたすように選ぶことができない場合、$-1$を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 3 2
3 10
2 5 15

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
高橋君は贈り物の価値の差を $2$以下にする必要があります。

青木君に価値 $3$, すぬけ君に価値 $5$の贈り物を渡すと条件をみたし、価値の和としてはこのときが最大となります。

よって、$3+5=8$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 3 0
1 3 3
6 2 7

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
条件をみたすように贈り物を選ぶことは不可能です。
また、同一人物に対して、同じ価値の贈り物が複数存在することもあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1 1 1000000000000000000
1000000000000000000
1000000000000000000

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

2000000000000000000

</div>

<p>
答えが $32$bit整数型の範囲に収まらないことがあることに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

8 6 1
2 5 6 5 2 1 7 9
7 2 5 5 2 4

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

14

</div>

</section>

</div>

</span>

</span>

</div>
