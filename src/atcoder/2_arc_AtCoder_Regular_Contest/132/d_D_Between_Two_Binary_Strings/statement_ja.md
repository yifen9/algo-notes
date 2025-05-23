
<div>

<span>

<span>

<p>
配点 : $700$点
</p>

<div>

<section>

### **問題文**

<p>
文字列の 
<strong>
美しさ
</strong>
を、その文字列のなかで同じ $2$文字が隣り合っている位置の個数として定義します。
例えば、`00011`の美しさは $3$で、`10101`の美しさは $0$です。
</p>

<p>
$S_{n,m}$を $n$文字の `0`と $m$文字の `1`からなる長さ $n+m$の文字列全体の集合とします。
</p>

<p>
$s_1,s_2 \in S_{n,m}$について、$s_1,s_2$の 
<strong>
距離
</strong>
$d(s_1,s_2)$を
「隣り合った $2$文字を入れ替える操作によって文字列 $s_1$を文字列 $s_2$に並び替えるのに必要な最小の操作回数」
と定義します。
</p>

<p>
また、$s_1,s_2,s_3\in S_{n,m}$について、$s_2$が $s_1$と $s_3$の 
<strong>
間にある
</strong>
ことを、$d(s_1,s_3)=d(s_1,s_2)+d(s_2,s_3)$で定義します。
</p>

<p>
$s,t\in S_{n,m}$が与えられるので、$s$と $t$の間にある文字列の美しさの最大値を出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \le n + m\le 3\times 10^5$
</li>

<li>
$0 \le n,m$
</li>

<li>
$s,t$は $n$文字の `0`と $m$文字の `1`からなる長さ $n+m$の文字列
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

$n$$m$$s$$t$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$s$と $t$の間にある文字列の美しさの最大値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 3
10110
01101

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<p>
`10110`と `01101`の距離は $2$で、これらの間にある文字列は、`10110`, `01110`, `01101`, `10101`です。
それぞれの美しさは $1,2,1,0$であるため、答えは $2$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 2
000011
110000

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4

</div>

<p>
`000011`と `110000`の距離は $8$です。
美しさが最大になる文字列は `000011`と `110000`で、答えは $4$です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

12 26
01110111101110111101001101111010110110
10011110111011011001111011111101001110

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

22

</div>

</section>

</div>

</span>

</span>

</div>
