
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
高橋君は全 $10^9$巻の漫画『すぬけ君』を読むことにしました。

初め、高橋君は『すぬけ君』の単行本を $N$冊持っています。$i$番目の単行本は $a_i$巻です。  
</p>

<p>
高橋君は『すぬけ君』を
<strong>
読み始める前に限り
</strong>
次の操作を $0$回以上何度でも繰り返せます。
</p>

<ul>

<li>
現在持っている単行本が $1$冊以下の場合、何もしない。そうでない場合、現在持っている単行本から $2$冊を選んで売り、代わりに好きな巻を選んで $1$冊買う
</li>

</ul>

<p>
その後、高橋君は『すぬけ君』を $1$巻、$2$巻、$3$巻、$\ldots$と順番に読みます。ただし、次に読むべき巻を持っていない状態になった場合、(他の巻を持っているかどうかに関わらず)その時点で『すぬけ君』を読むのをやめます。  
</p>

<p>
高橋君が『すぬけ君』を最大で何巻まで読めるかを求めてください。ただし、$1$巻を読めない場合の答えは $0$とします。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 3 \times 10^5$
</li>

<li>
$1 \leq a_i \leq 10^9$
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

$N$$a_1$$\ldots$$a_N$
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
1 2 4 6 7 271

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
『すぬけ君』を読み始める前に「$7$巻と $271$巻を選んで売り、代わりに $3$巻を選んで $1$冊買う」という内容で操作をすると、高橋君は $1$巻、$2$巻、$3$巻、$4$巻、$6$巻を $1$冊ずつ持っている状態になります。

この状態から『すぬけ君』を読み始めると、高橋君は $1$巻、$2$巻、$3$巻、$4$巻を読み、続いて $5$巻を読もうとしますが持っていないためこの時点で『すぬけ君』を読むのをやめます。

操作の方法を変えても $5$巻を読むことは出来ないため、$4$が答えです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10
1 1 1 1 1 1 1 1 1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5

</div>

<p>
高橋君は同じ巻を $2$冊以上持っているかもしれません。

この入力に対しては以下のように $4$回操作をしてから『すぬけ君』を読み始めることで $5$巻まで読むことが出来、これが最大です。
</p>

<ul>

<li>
$1$巻を $2$冊選んで売り、代わりに $2$巻を選んで $1$冊買う
</li>

<li>
$1$巻を $2$冊選んで売り、代わりに $3$巻を選んで $1$冊買う
</li>

<li>
$1$巻を $2$冊選んで売り、代わりに $4$巻を選んで $1$冊買う
</li>

<li>
$1$巻を $2$冊選んで売り、代わりに $5$巻を選んで $1$冊買う
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1
5

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

0

</div>

<p>
高橋君は $1$巻を読めません。
</p>

</section>

</div>

</span>

</span>

</div>
