
<div>

<span>

<span>

<p>
配点 : $1000$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder 王国には $2N$個の交差点があり、各交差点には $1$から $2N$までの番号が付けられています。
また、AtCoder 王国には以下の $3$種類の
<strong>
一方通行の
</strong>
道路があります。
</p>

<ul>

<li>

<strong>
タイプ A:
</strong>
$2 \leq i \leq N$について、交差点 $2i-3$から交差点 $2i-1$へ向かう道路
</li>

<li>

<strong>
タイプ B:
</strong>
$2 \leq i \leq N$について、交差点 $2i-2$から交差点 $2i$へ向かう道路
</li>

<li>

<strong>
タイプ C:
</strong>
$1 \leq i \leq N$について、交差点 $2i-1$と交差点 $2i$を結ぶ向き $s_i$の道路
</li>

</ul>

<p>
ここで、$s_i$は `X`または `Y`であり、向き `X`は交差点 $2i-1$から交差点 $2i$に向かう方向、向き `Y`は交差点 $2i$から交差点 $2i-1$に向かう方向を指します。
</p>

<p>
高橋君は
<strong>
ウォーキング
</strong>
を何回か行うことで、各 $1 \leq i \leq N$について、交差点 $2i-1$と交差点 $2i$を結ぶタイプ C の道路の向きを $t_i$にしたいです。
</p>

<blockquote>

<p>

<strong>
ウォーキングとは
</strong>

</p>

<p>
好きな交差点から出発し、以下の行動を $0$回以上繰り返す。
</p>

<ul>

<li>
もし現在いる交差点からタイプ C の道路に進めるのであれば、タイプ C の道路を次の交差点まで歩く。
</li>

<li>
上記以外で、現在いる交差点からタイプ A または B の道路に進めるのであれば、その道路を次の交差点まで歩く。
</li>

</ul>

<p>
その後、通ったすべてのタイプ C の道路の向きを反転させる。
</p>

</blockquote>

<p>
最小何回のウォーキングで目的を達成できるかを計算し、最小回数で目的を達成する方法を $1$つ答えてください。
なお、この問題の制約下では有限回で目的を達成できることが証明できます。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$N$は $1 \leq N \leq 4000$を満たす整数
</li>

<li>
$s_1, s_2, \dots, s_N$は `X`または `Y`
</li>

<li>
$t_1, t_2, \dots, t_N$は `X`または `Y`
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
入力は以下の形式で標準入力から与えられます。
</p>

<div>

$N$$s_1 s_2 \cdots s_N$$t_1 t_2 \cdots t_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
以下の形式で出力してください。
ただし、ウォーキングの回数を $X$とします。また、$i$回目 $(1 \leq i \leq X)$のウォーキングでは交差点 $a_i$から出発し、交差点 $b_i$でウォーキングを終えるものとします。
</p>

<div>

$X$$a_1$$b_1$$a_2$$b_2$$\vdots$$a_X$$b_X$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5
XYXYX
XXYXX

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
2 7

</div>

<p>
この入力例では、高橋君は以下のようなウォーキングを行います。
</p>

<ul>

<li>
交差点 $2$から出発する。
</li>

<li>
交差点 $2$から進めるタイプ C の道路はないので、タイプ B の道路を通って交差点 $4$まで進む。
</li>

<li>
交差点 $4$から進めるタイプ C の道路はあるので、タイプ C の道路を通って交差点 $3$まで進む。
</li>

<li>
交差点 $3$から進めるタイプ C の道路はないので、タイプ A の道路を通って交差点 $5$まで進む。
</li>

<li>
交差点 $5$から進めるタイプ C の道路はあるので、タイプ C の道路を通って交差点 $6$まで進む。
</li>

<li>
交差点 $6$から進めるタイプ C の道路はないので、タイプ B の道路を通って交差点 $8$まで進む。
</li>

<li>
交差点 $8$から進めるタイプ C の道路はあるので、タイプ C の道路を通って交差点 $7$まで進む。
</li>

<li>
交差点 $7$でウォーキングを終える。
</li>

</ul>

<p>
ここで、このウォーキングでは、以下の $3$本のタイプ C の道路を通っています。
</p>

<ul>

<li>
交差点 $3$と交差点 $4$を結ぶ道路
</li>

<li>
交差点 $5$と交差点 $6$を結ぶ道路
</li>

<li>
交差点 $7$と交差点 $8$を結ぶ道路
</li>

</ul>

<p>
これらの道路の向きが反転するため、$i = 1, 2, 3, 4, 5$について交差点 $2i-1$と交差点 $2i$を結ぶ道路の向きは順に `X`、`X`、`Y`、`X`、`X`となり、目的を達成します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
XXYYX
XXYYX

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
最初の時点で目的が達成されているため、$1$回もウォーキングを行う必要がないことに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5
XXXXX
YYYYY

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

5
1 2
3 4
5 6
7 8
9 10

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

20
XXXYXYYXXXYXXXXYYXXY
XXYXYYXXYXXYXYXYXYXY

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

5
14 18
29 38
14 26
5 10
27 35

</div>

</section>

</div>

---

<div>

<section>

### **入力例 5**

<div>

20
YXYXYXYYYXYYXYYXYXXX
XXXXXYXYYYXYYXXYYYXY

</div>

</section>

</div>

<div>

<section>

### **出力例 5**

<div>

5
29 36
10 38
2 3
4 7
28 40

</div>

</section>

</div>

</span>

</span>

</div>
