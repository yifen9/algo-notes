
<div>

<span>

<span>

<p>
配点 : $575$点
</p>

<div>

<section>

### **問題文**

<p>
高橋くんは $N$種類の泳ぎ方ができます。

高橋くんが $i$種類目の泳ぎ方で泳ぐと、 $1$秒あたり体力を $A_i$消費して $B_i$[m] 進みます。  
</p>

<p>
$Q$個のクエリに答えてください。そのうち $i$個目は次の通りです。
</p>

<ul>

<li>
消費する体力の合計を $C_i$以下にして $D_i$[m] 進むことができるか判定し、進める場合は必要な最小の秒数を求めよ。
</li>

</ul>

<p>
ただし、高橋くんは泳ぎ方を自由に組み合わせることができ、泳ぎ方を変える時間は無視できます。

具体的には、次の手順で泳ぐことができます。  
</p>

<ul>

<li>
正整数 $m$、全ての要素が正である長さ $m$の実数列 $t=(t_1,t_2,\dots,t_m)$、全ての要素が $1$以上 $N$以下の長さ $m$の整数列 $x=(x_1,x_2,\dots,x_m)$を選択する。
</li>

<li>
その後、 $i=1,2,\dots,m$の順で、 $x_i$種類目の泳ぎ方で $t_i$秒間泳ぐ。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力は全て整数
</li>

<li>
$1 \le N \le 2 \times 10^5$
</li>

<li>
$1 \le A_i,B_i \le 10^9$
</li>

<li>
$1 \le Q \le 2 \times 10^5$
</li>

<li>
$1 \le C_i,D_i \le 10^9$
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

$N$$A_1$$B_1$$A_2$$B_2$$\vdots$$A_N$$B_N$$Q$$C_1$$D_1$$C_2$$D_2$$\vdots$$C_Q$$D_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
全体で $Q$行出力せよ。

そのうち $i$行目に、 $i$個目のクエリに対する解答を次の通りに出力せよ。
</p>

<ul>

<li>
もし消費する体力の合計を $C_i$以下にして $D_i$[m] 進むことができない場合、 `-1`と出力せよ。
</li>

<li>
そうでない場合、必要な最小の秒数を出力せよ。このとき、「出力された値」と「正答の真の値」との絶対誤差または相対誤差が $10^{-9}$以下であれば、出力は正答とみなされる。
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4
1 2
2 3
3 3
4 4
5
4 7
7 7
49 100
1000 500
4 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3.000000000000000000
1.750000000000000000
-1
125.000000000000000000
1.500000000000000000

</div>

<p>
この入力において、高橋くんは以下の $4$種類の泳ぎ方ができます。
</p>

<ul>

<li>
$1$秒あたり体力を $1$消費して $2$[m] 進む。
</li>

<li>
$1$秒あたり体力を $2$消費して $3$[m] 進む。
</li>

<li>
$1$秒あたり体力を $3$消費して $3$[m] 進む。
</li>

<li>
$1$秒あたり体力を $4$消費して $4$[m] 進む。
</li>

</ul>

<p>
この入力にはクエリが $5$個含まれます。
</p>

<ul>

<li>
$1$個目の質問では、 $C_1=4,D_1=7$です。
<ul>

<li>
$t=(1,2),x=(2,1)$と選択します。このとき高橋くんは次の通りに泳ぎます。
<ul>

<li>
最初の $1$秒で高橋くんは体力を $2$消費して $3$[m] 進みます。
</li>

<li>
次の $2$秒で高橋くんは体力を $2$消費して $4$[m] 進みます。
</li>

</ul>

</li>

<li>
このとき、高橋くんは全体で体力を $4$消費して $7$[m] 進みました。この場合の所要時間は $3$秒で、これが達成可能な最小です。
</li>

</ul>

</li>

<li>
$2$個目の質問では、 $C_2=7,D_2=7$です。
<ul>

<li>
$t=(7/4),x=(4)$と選択します。このとき高橋くんは次の通りに泳ぎます。
<ul>

<li>
最初の $7/4$秒で高橋くんは体力を $7$消費して $7$[m] 進みます。
</li>

</ul>

</li>

<li>
このとき、高橋くんは全体で体力を $7$消費して $7$[m] 進みました。この場合の所要時間は $7/4$秒で、これが達成可能な最小です。
</li>

</ul>

</li>

<li>
$3$個目の質問では、 $C_3=49,D_3=100$です。
<ul>

<li>
高橋くんがどのような泳ぎ方をしても、消費する体力の合計を $49$以下にして $100$[m] 進むことはできません。
</li>

</ul>

</li>

<li>
$4$個目の質問では、 $C_4=1000,D_4=500$です。
<ul>

<li>
$t=(125),x=(4)$と選択します。このとき高橋くんは次の通りに泳ぎます。
<ul>

<li>
最初の $125$秒で高橋くんは体力を $500$消費して $500$[m] 進みます。
</li>

</ul>

</li>

<li>
このとき、高橋くんは全体で体力を $500$消費して $500$[m] 進みました。この場合の所要時間は $125$秒で、これが達成可能な最小です。
</li>

</ul>

</li>

<li>
$5$個目の質問では、 $C_5=4,D_5=5$です。
<ul>

<li>
$t=(1/2,1),x=(4,2)$と選択します。このとき高橋くんは次の通りに泳ぎます。
<ul>

<li>
最初の $1/2$秒で高橋くんは体力を $2$消費して $2$[m] 進みます。
</li>

<li>
次の $1$秒で高橋くんは体力を $2$消費して $3$[m] 進みます。
</li>

</ul>

</li>

<li>
このとき、高橋くんは全体で体力を $4$消費して $5$[m] 進みました。この場合の所要時間は $3/2$秒で、これが達成可能な最小です。
</li>

</ul>

</li>

</ul>

</section>

</div>

</span>

</span>

</div>
