
<div>

<span>

<span>

<p>
配点 : $1600$点
</p>

<div>

<section>

### **問題文**

<p>

<em>
平衡ネットワーク
</em>
とは、左から右へと延びる $N$本のケーブルと、それぞれ $2$本のケーブルを繋ぐ $M$個の 
<em>
平衡器
</em>
からなる抽象機械です。
ケーブルには上から順に $1$から $N$までの番号が、平衡器には左から順に $1$から $M$までの番号がついています。平衡器 $i$はケーブル $x_i, y_i$($x_i < y_i$) を繋ぎます。
</p>

<div>

<img src="https://img.atcoder.jp/agc041/pic1-small-2acea94b.png">

</img>

</div>

<p>
各平衡器は 
<i>
上
</i>
または 
<i>
下
</i>
のいずれかの状態に設定します。
</p>

<p>
$1$枚のコインが、いずれかのケーブルに沿ってどの平衡器よりも左に位置する点から右へと流れ始めるとします。
これから、このコインはすべての平衡器のもとをちょうど一度ずつ通過します。
コインが平衡器 $i$の位置に来たとき、次のことが起こります。
</p>

<ul>

<li>
コインがケーブル $x_i$に沿って流れており、かつ平衡器 $i$の状態が下であるなら、コインはケーブル $y_i$に移ってから再び右へと流れる。
</li>

<li>
コインがケーブル $y_i$に沿って流れており、かつ平衡器 $i$の状態が上であるなら、コインはケーブル $x_i$に移ってから再び右へと流れる。
</li>

<li>
上記のいずれでもないなら、コインが別のケーブルに移ることはない。
</li>

</ul>

<p>
平衡ネットワークの状態とは、すべての平衡器の状態を表す長さ $M$の文字列です。
この文字列の $i$文字目は、平衡器 $i$の状態が上なら `^`、下なら `v`です。
</p>

<p>
平衡ネットワークの状態が 
<em>
均一的
</em>
であるとは、あるケーブル $w$が存在して、コインがどのケーブルから流れ始めたとしてもケーブル $w$に行き着き、これに沿って永遠に流れることをいいます。それ以外の場合、平衡ネットワークの状態は 
<em>
非均一的
</em>
であるといわれます。
</p>

<p>
整数 $T$($1 \le T \le 2$) が与えられます。次の問いに答えてください。
</p>

<ul>

<li>
$T = 1$の場合は、このネットワークの均一的な状態をいずれかひとつ求めるか、そのような状態が存在しないことを検出せよ。
</li>

<li>
$T = 2$の場合は、このネットワークの非均一的な状態をいずれかひとつ求めるか、そのような状態が存在しないことを検出せよ。
</li>

</ul>

<p>
なお、いずれか $1$種類の問いにのみ正しく答えると部分点が得られます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 50000$
</li>

<li>
$1 \leq M \leq 100000$
</li>

<li>
$1 \leq T \leq 2$
</li>

<li>
$1 \leq x_i < y_i \leq N$
</li>

<li>
入力中のすべての値は整数である。
</li>

</ul>

</section>

</div>

<div>

<section>

### **部分点**

<ul>

<li>
$T = 1$であるようなテストケースすべてに正解すると、$800$点が与えられる。
</li>

<li>
$T = 2$であるようなテストケースすべてに正解すると、$800$点が与えられる。
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

$N$$M$$T$$x_1$$y_1$$x_2$$y_2$$:$$x_M$$y_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T = 1$の場合は与えられたネットワークの均一的な状態をいずれかひとつ出力し、$T = 2$の場合は非均一的な状態をいずれかひとつ出力せよ。ただし、そのような状態が存在しないなら `-1`と出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 5 1
1 3
2 4
1 2
3 4
2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

^^^^^

</div>

<p>
どのケーブルから流れ始めてもコインはケーブル $1$に行き着くため、この状態は均一的です。
</p>

<div>

<img src="https://img.atcoder.jp/agc041/pic2-small-2acea94b.png">

</img>

</div>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 5 2
1 3
2 4
1 2
3 4
2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

v^^^^

</div>

<p>
流れ始めるケーブル次第で、コインはケーブル $1$にもケーブル $2$にも行き着くことがあるため、この状態は非均一的です。
</p>

<div>

<img src="https://img.atcoder.jp/agc041/pic3final-small-2acea94b.png">

</img>

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

3 1 1
1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

-1

</div>

<p>
均一的な状態が存在しません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

2 1 2
1 2

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

-1

</div>

<p>
非均一的な状態が存在しません。
</p>

</section>

</div>

</span>

</span>

</div>
