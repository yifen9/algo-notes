
<div>

<div>

### **問題文**

<section>

<p>
あなたのたこ焼き屋さんは試食イベントのおかげもあり、とても繁盛しました。

喜んだ高橋社長は全国展開するために、工場で冷凍たこ焼きの生産をすることを決めました。

高橋社長がたこ焼き生産のために買ってきた機械の $1$つにタコヤキオイシクナールという機械があります。

このタコヤキオイシクナールはトンネルの形をした $N$個のボックスからできています。

それぞれのボックスはベルトコンベアで一直線に接続されており、$i(1≦i≦N-1)$番目のボックスの出口が $i+1$番目のボックスの入り口に繋がっています。

ボックスにはそれぞれ $2$つの実数 $(a,b)$が書かれており、美味しさ $r$のたこ焼きを入れると不思議なことに美味しさが $a×r+b$に変化します。


</p>

<p>
図 $1$はタコヤキオイシクナールにたこ焼きを入れた図です。

$(2,1)$と書かれたボックスを美味しさ $1$のたこ焼きが通過すると美味しさは $2×1+1=3$に変化し、さらに次の $(-1,2)$と書かれたボックスを通過すると $3$から $-1$へと美味しさが変化します。


</p>

<div style="text-align: center;">

<img src="https://atcoder.jp/img/arc/008/4_1.png">

</img>

<div>
図：美味しさ $1$のたこ焼きを $1$個、タコヤキオイシクナールに載せた場合の美味しさの変化
</div>

</div>

<p>
最初ボックスに書かれている数字は全て $(1,0)$になっておりたこ焼きは $N$個のボックスを通過しても美味しさが変化しない状態でした。

そこで、あなたは美味しさ $1$のたこ焼きを $1$個ずつタコヤキオイシクナールに入れてみることにしました。

しかし、ボックスの数字を $M$回いたずら好きの高橋社長が変更してしまいました。

美味しさが保障できないと出荷ができません。出来上がったたこ焼きの美味しさの最小値と最大値を求めなさい。


</p>

<p>
なお、タコヤキオイシクナールは同時に $1$個分のたこ焼きしか加工することができず、タコヤキオイシクナールが加工を行なっている間に高橋社長が任意のボックスの数字を変更することはありません。

つまり、高橋社長がボックスの数字を変更することができるのは、たこ焼きが出来上がってから次のたこ焼きをあなたがタコヤキオイシクナールのベルトコンベアに乗せるまでの間です。

また、その間に高橋社長が複数のボックスの数字を変更することはないものとする。

</p>

</section>

</div>

---

<div>

<div>

### **入力**

<section>
入力は以下の形式で標準入力から与えられる。

<div>

$N$$M$$p_0$$a_0$$b_0$$p_1$$a_1$$b_1$:
:
$p_{M-1}$$a_{M-1}$$b_{M-1}$
</div>

<ul>

<li>
入力は $M+1$行ある。
</li>

<li>
$1$行目には、一直線上に接続するボックスの個数を表す整数 $N$と高橋社長がボックスの数字を変更した回数を表す整数 $M$が空白区切りで与えられる。
</li>

<li>
$2$行目からの $M$行には高橋社長が変更したボックスの内容が与えられる。
</li>

<ul>

<li>
$i+2\ (0≦i≦M-1)$行目には高橋社長が $i+1$番目に変更したボックスの番号を表す整数 $p_i\ (1≦p_i≦N)$、そのボックスの変更後の $a$の値を表す実数 $a_i\ (-1≦a_i≦1)$、$b$の値を表す実数 $b_i\ (-1≦b_i≦1)$が空白区切りで与えられる。
				
<ul>

<li>
ボックスの番号はたこ焼きが流れる順に $1$から $N$まで順に振られている。
</li>

<li>
$a_i$と $b_i$は小数点以下第 $5$位までで与えられる。
</li>

</ul>

</li>

</ul>

</ul>

</section>

</div>

<div>

### **部分点**

<section>
テストデータには以下の $2$種類のテストデータセットのいずれかに含まれており、それぞれのデータセットに含まれているテストデータは以下に示すように与えられる整数 $N$と $M$の範囲が異なっている。

あるテストデータセットに含まれているテストデータ全てに対して正しい解を出力できると、それ以外のテストデータセットで不正解を出力しても以下のように部分点が与えられる。


<ul>

<li>
small ( $50$点) : $1≦N≦1,000,\ 0≦M≦1,000$
</li>

<li>
large ( $50$点) : $1≦N≦10^{12},\ 0≦M≦100,000$
</li>

</ul>

</section>

</div>

<div>

### **出力**

<section>
$1$行目に出来上がったたこ焼きの中での美味しさの最小値を、 $2$行目に最大値を標準出力に出力せよ。

出力は整数および小数のみとし、誤差は絶対誤差あるいは相対誤差の少なくとも片方が $10^{−6}$以下であれば許容する。

なお、最後には改行を出力せよ。

</section>

</div>

</div>

---

<div>

### **入力例 1**

<section>

<div>

1 1
1 1 0

</div>

</section>

</div>

<div>

### **出力例 1**

<section>

<div>

1
1

</div>

<ul>

<li>
高橋社長が数字を変更してしまいますが、変更後の数字が元の数字と同じなので美味しさは変化しません。
</li>

<li>
したがって、出来上がるたこ焼きの美味しさは全て $1$になります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 2**

<section>

<div>

3 2
2 -1 1
2 1 0.5

</div>

</section>

</div>

<div>

### **出力例 2**

<section>

<div>

0
1.5

</div>

<ul>

<li>
$1$回目のボックスの数字変更後のたこ焼きの美味しさは $(-1)×1+1=0$となります。
</li>

<li>
$2$回目のボックスの数字変更後のたこ焼きの美味しさは $1×1+0.5=1.5$となります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 3**

<section>

<div>

4 5
1 -0.8 0.5
2 0.72 -0.21
3 1 0.8
4 0.3 0.4142
3 1 0.8

</div>

</section>

</div>

<div>

### **出力例 3**

<section>

<div>

-0.426
1

</div>

<ul>

<li>
$2$回目のボックスの数字変更後のたこ焼きの美味しさは$-0.426$、$4$回目のボックスの数字変更後のたこ焼きの美味しさは$0.5264$になります。
</li>

<li>
しかし、$1$回目のボックスの数字を変更前はたこ焼きの美味しさは $1$だったので、美味しさの最大値は $1$になります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 4**

<section>

<div>

10 10
6 0.5674 -1
3 -0.432 0.1235
8 0.92 0
4 -0.673 0.12578
6 0.986 -0.567
1 0.11111 1
10 0.98765 -0.1234
10 0.18543 -0.16532
9 -0.756 0.54849
2 -1 0.74436

</div>

</section>

</div>

<div>

### **出力例 4**

<section>

<div>

-1.175043
1

</div>

<ul>

</ul>

</section>

</div>

</div>
