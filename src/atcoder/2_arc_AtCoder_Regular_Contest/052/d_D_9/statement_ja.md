
<div>

<div>

<div>

<section>

### **問題文**

<p>
整数の $9$には面白い性質があります。
どのような非負整数 $N$を選んでも $N$を $9$で割った余りと、 $N$を $10$進法で表記した時の各桁の数字の和を $9$で割った余りが一致するのです。
</p>

<p>
高橋君はこのような性質を持つ整数が他にないか気になりました。しかし、残念なことにこのような性質をもつ整数は $9$と $3$と $1$くらいしか見つかりませんでした。
そこで、「どのような非負整数 $N$を選んでも・・・」ではなくて「できるだけ多くの非負整数 $N$に対して・・・」というふうに性質の条件を落として探してみることにしてみました。
</p>

<p>
高橋君は非負整数 $K$がどれくらい多くの非負整数 $N$に対して上のような条件をみたすのかが知りたいです。
</p>

<p>
高橋君を手伝うために以下の問いに答えてください。
</p>

<ul>

<li>
$1 ≦ N ≦ M$となる整数 $N$のうち $K$で割った余りと、$N$を $10$進法表記した時の各桁の数字の和を $K$で割った余りが一致するような $N$の個数を求めてください。
</li>

</ul>

</section>

</div>

---

<div>

<div>

<section>

### **制約**

<ul>

<li>
与えられる数字はすべて整数
</li>

<li>
$1 ≦ K ≦ M ≦ 10^{10}$
</li>

</ul>

</section>

</div>

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$K$$M$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **部分点**

<p>
この問題には部分点が設定されている。
</p>

<ul>

<li>
$1 ≦ M ≦ 10^5$を満たすデータセットに正解した場合は $10$点が与えられる。
</li>

<li>
$1 ≦ M ≦ 10^{10}$を満たすデータセットに正解した場合はさらに $90$点が与えられる。合計で$100$点となる。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
問題文で挙げた条件に一致する非負整数の個数を $1$行で出力せよ。

</p>

</section>

</div>

---

<div>

<section>

### **入力例1**

<div>

5 100

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

19

</div>

<p>
$1$桁の整数はかならず条件を満たします。
そのほかに $50 ≦ N ≦ 59$を満たす整数は全て条件を満たします。
これら以外に条件を満たす整数は $100$以下の範囲にはありません。
よって $19$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

112 32279

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

309

</div>

</section>

</div>

---

<div>

<section>

### **入力例3**

<div>

108 3141592653

</div>

</section>

</div>

<div>

<section>

### **出力例3**

<div>

261799999

</div>

</section>

</div>

---

<div>

<section>

### **入力例4**

<div>

9 10000000000

</div>

</section>

</div>

<div>

<section>

### **出力例4**

<div>

10000000000

</div>

</section>

</div>

</div>

</div>
