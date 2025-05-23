
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
高橋君が運営する SNS「Twidai」にはユーザー $1$からユーザー $N$までの $N$人のユーザーがいます。
Twidai では、ユーザーは別のユーザーをフォローすることや、フォローを解除することができます。
</p>

<p>
Twidai がサービスを開始してから、$Q$回の操作が行われました。
$i$回目 $(1\leq i\leq Q)$の操作は $3$つの整数 $T _ i, A _ i, B _ i$で表され、それぞれ次のような操作を表します。
</p>

<ul>

<li>
$T _ i=1$のとき：ユーザー $A _ i$がユーザー $B _ i$をフォローしたことを表す。この操作の時点でユーザー $A _ i$がユーザー $B _ i$をフォローしている場合、ユーザーのフォロー状況に変化はない。
</li>

<li>
$T _ i=2$のとき：ユーザー $A _ i$がユーザー $B _ i$のフォローを解除したことを表す。この操作の時点でユーザー $A _ i$がユーザー $B _ i$をフォローしていない場合、ユーザーのフォロー状況に変化はない。
</li>

<li>
$T _ i=3$のとき：ユーザー $A _ i$とユーザー $B _ i$が互いにフォローしているかをチェックすることを表す。この操作の時点でユーザー $A _ i$がユーザー $B _ i$をフォローしており、かつユーザー $B _ i$がユーザー $A _ i$をフォローしているとき、このチェックに対して `Yes`と答え、そうでないときこのチェックに対して `No`と答える必要がある。
</li>

</ul>

<p>
サービス開始時には、どのユーザーも他のユーザーをフォローしていません。
</p>

<p>
すべての $T _ i=3$であるような操作に対して、$i$が小さいほうから順番に正しい答えを出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 10 ^ 9$
</li>

<li>
$1 \leq Q \leq 2\times10 ^ 5$
</li>

<li>
$T _ i=1,2,3\ (1\leq i\leq Q)$
</li>

<li>
$1 \leq A _ i \leq N\ (1\leq i\leq Q)$
</li>

<li>
$1 \leq B _ i \leq N\ (1\leq i\leq Q)$
</li>

<li>
$A _ i\neq B _ i\ (1\leq i\leq Q)$
</li>

<li>
$T _ i=3$となる $i\ (1\leq i\leq Q)$が存在する
</li>

<li>
入力される値はすべて整数
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

$N$$Q$$T _ 1$$A _ 1$$B _ 1$$T _ 2$$A _ 2$$B _ 2$$\vdots$$T _ Q$$A _ Q$$B _ Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T _ i=3$であるような $i\ (1\leq i\leq Q)$の個数を $X$として、$X$行出力せよ。
$j\ (1\leq j\leq X)$行目には $j$番目の $T _ i=3$であるような操作に対する答えを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 9
1 1 2
3 1 2
1 2 1
3 1 2
1 2 3
1 3 2
3 1 3
2 1 2
3 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

No
Yes
No
No

</div>

<p>
Twidai には $3$人のユーザーがいます。
$9$回の操作はそれぞれ次のようになっています。
</p>

<ul>

<li>
ユーザー $1$がユーザー $2$をフォローします。そのほかにフォローしている/されているユーザーはいません。
</li>

<li>
ユーザー $1$とユーザー $2$が互いにフォローしているかチェックします。ユーザー $1$はユーザー $2$をフォローしていますが、ユーザー $2$はユーザー $1$をフォローしていません。この操作への正しい答えは `No`です。
</li>

<li>
ユーザー $2$がユーザー $1$をフォローします。
</li>

<li>
ユーザー $1$とユーザー $2$が互いにフォローしているかチェックします。ユーザー $1$はユーザー $2$をフォローしており、ユーザー $2$はユーザー $1$をフォローしています。この操作への正しい答えは `Yes`です。
</li>

<li>
ユーザー $2$がユーザー $3$をフォローします。
</li>

<li>
ユーザー $3$がユーザー $2$をフォローします。
</li>

<li>
ユーザー $1$とユーザー $3$が互いにフォローしているかチェックします。ユーザー $1$はユーザー $3$をフォローしておらず、ユーザー $3$もユーザー $1$をフォローしていません。この操作への正しい答えは `No`です。
</li>

<li>
ユーザー $1$がユーザー $2$のフォローを解除します。
</li>

<li>
ユーザー $1$とユーザー $2$が互いにフォローしているかチェックします。ユーザー $2$はユーザー $1$をフォローしていますが、ユーザー $1$はユーザー $2$をフォローしていません。この操作への正しい答えは `No`です。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 8
1 1 2
1 2 1
3 1 2
1 1 2
1 1 2
1 1 2
2 1 2
3 1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

Yes
No

</div>

<p>
同じユーザーに対して何度もフォロー操作をする場合があります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10 30
3 1 6
3 5 4
1 6 1
3 1 7
3 8 4
1 1 6
2 4 3
1 6 5
1 5 6
1 1 8
1 8 1
2 3 10
1 7 6
3 5 6
1 6 7
3 6 7
1 9 5
3 8 6
3 3 8
2 6 9
1 7 1
3 10 8
2 9 2
1 10 9
2 6 10
2 6 8
3 1 6
3 1 8
2 8 5
1 9 10

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

No
No
No
No
Yes
Yes
No
No
No
Yes
Yes

</div>

</section>

</div>

</span>

</span>

</div>
