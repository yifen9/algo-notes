
<div>

<div>

<div>

<section>

### **問題文**

<p>
高橋くん様は、アットコーダー王国の王様です。
</p>

<p>
プログラミングコンテスト好きな彼が統治するアットコーダー王国では、年に一度コンテストが開催されます。
</p>

<p>
このコンテストでは $N$問の問題が出題されます。また、順位を付ける際の $1$つの要素としてペナルティというものが存在します。
ある問題を正解したとき、コンテスト開始から経過した時間分だけのペナルティが、各問題ごとに発生します。そして、その発生したペナルティの総和がコンテストペナルティとなります。ARCのペナルティとは異なるルールであることに注意してください。
</p>

<p>
非常に優秀な国民である貴方には、全ての問題を解く力があります。
しかも、全ての問題について、その問題を正解するためにどれだけ時間をかければよいのかを知っており、ちょうどその時間取り組むと必ず正解することができます。
</p>

<p>
貴方は、自由な順番で問題を解くことができるので、コンテストペナルティが最小となるように解こうと思いました。
</p>

<p>
全ての問題を解くときのコンテストペナルティの最小値と、そのような解き方が何通りあるかを $1,000,000,007(10^9+7)$で割った余りを答えて下さい。
</p>

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

$N$$T_1$$T_2$:
$T_N$
</div>

<ul>

<li>
$1$行目には、コンテストでの問題数を表す整数 $N (1 ≦ N ≦ 10,000)$がスペース区切りで与えられる。
</li>

<li>
$2$行目からの $N$行には、各問題を解くのにかかる時間の情報が与えられる。そのうち $i (1≦i≦N)$行目には、整数 $T_i (1≦T_i≦10,000)$が書かれており、$i$番目の問題を解くのに $T_i$分かかることを示す。
</li>

</ul>

</section>

</div>

<div>

<section>

### **部分点**

<p>
この問題には部分点が存在する。
</p>

<ul>

<li>
$100$点中 $50$点分のテストケースにおいて、コンテストペナルティが最小となるような解き方の数は $1$通りである。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
出力は以下の形式で標準出力に出力せよ。
</p>

<ul>

<li>
$1$行目には、コンテストペナルティの最小値を出力せよ。32bit整数型ではオーバーフローする可能性があることに気をつけること。
</li>

<li>
$2$行目には、コンテストペナルティが最小となるような解き方の数を $1,000,000,007(10^9+7)$で割った余りを出力せよ。
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

<div>

2
20
10

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

40
1

</div>

<p>
$2$番目の問題を解いてから $1$番目の問題を解くのがよい。
</p>

<ul>

<li>
コンテストが開始する(時刻：$0$分)。
</li>

<li>
$10$分後、$2$番目の問題に正解する(時刻：$10$分)。この時点で発生するペナルティは $10$分である。
</li>

<li>
その $20$分後、$1$番目の問題に正解する(時刻： $30$分)。この時点で発生するペナルティは $30$分である。
</li>

</ul>

<p>
コンテストペナルティは $40(=10+30)$分となる。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

5
2
1
2
1
2

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

21
12

</div>

</section>

</div>

---

<div>

<section>

### **入力例3**

<div>

13
1
1
1
1
1
1
1
1
1
1
1
1
1

</div>

</section>

</div>

<div>

<section>

### **出力例3**

<div>

91
227020758

</div>

<p>
どのような順番で解いても良い。余りを取るのを忘れないこと。
</p>

</section>

</div>

</div>

</div>
