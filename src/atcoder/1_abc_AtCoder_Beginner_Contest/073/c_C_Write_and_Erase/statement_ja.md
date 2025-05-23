
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
あなたは、joisinoお姉ちゃんと以下のようなゲームをしています。
</p>

<ul>

<li>
最初、何も書いていない紙がある。
</li>

<li>
joisinoお姉ちゃんが一つの数字を言うので、その数字が紙に書いてあれば紙からその数字を消し、書いていなければその数字を紙に書く。これを $N$回繰り返す。
</li>

<li>
その後、紙に書かれている数字がいくつあるかを答える。
</li>

</ul>

<p>
joisinoお姉ちゃんが言った数字が、言った順番に $A_1, ... ,A_N$として与えられるので、ゲーム終了後に紙に書かれている数字がいくつあるか答えてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1≦N≦100000$
</li>

<li>
$1≦A_i≦1000000000(=10^9)$
</li>

<li>
入力は全て整数である。
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

$N$$A_1$$:$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
ゲーム終了後に紙に書かれている数字の個数を出力せよ。
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
6
2
6

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
以下の操作を行うこととなります。
</p>

<ul>

<li>

<p>
紙に $6$は書かれていないので、$6$を書く。
</p>

</li>

<li>

<p>
紙に $2$は書かれていないので、$2$を書く。
</p>

</li>

<li>

<p>
紙に $6$は書かれているので、$6$を消す。
</p>

</li>

</ul>

<p>
よって、最後に書いてあるのは $2$だけなので、答えは $1$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4
2
5
5
2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

<p>
最後に紙に数字が一つも書かれていない場合もあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

6
12
22
16
22
18
12

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

2

</div>

</section>

</div>

</span>

</span>

</div>
