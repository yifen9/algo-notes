
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder スキー場には広場 $1$、広場 $2$、$\ldots$、広場 $N$の $N$個の広場があり、広場 $i$の標高は $H_i$です。
また、$2$つの広場を双方向に結ぶ $M$本の坂があり、$i$$(1 \leq i \leq M)$本目の坂は広場 $U_i$と広場 $V_i$を双方向に結んでいます。どの $2$つの広場の間もいくつかの坂を使って移動することができます。
</p>

<p>
高橋君は坂を使うことによってのみ広場の間を移動でき、坂を通るごとに
<strong>
楽しさ
</strong>
が変化します。具体的には広場 $X$と広場 $Y$を直接結ぶ坂を使って広場 $X$から広場 $Y$まで移動したとき次のように楽しさが変化します。
</p>

<ul>

<li>
広場 $X$が広場 $Y$より標高が真に高い場合、その標高差、すなわち $H_X-H_Y$だけ楽しさが
<strong>
増加
</strong>
する。
</li>

<li>
広場 $X$が広場 $Y$より標高が真に低い場合、その標高差の $2$倍、すなわち $2(H_Y-H_X)$だけ楽しさが
<strong>
減少
</strong>
する。
</li>

<li>
広場 $X$と広場 $Y$の標高が等しい場合、楽しさは変化しない。
</li>

</ul>

<p>
楽しさは負の値になることもあります。
</p>

<p>
最初、高橋君は広場 $1$におり、楽しさは $0$です。
高橋君はいくつかの坂（ $0$本でも良い）を移動した後に好きな広場で行動を終えることができるとしたとき、行動を終えた時点の高橋君の楽しさとしてありうる最大の値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 2\times 10^5$
</li>

<li>
$N-1 \leq M \leq \min( 2\times 10^5,\frac{N(N-1)}{2})$
</li>

<li>
$0 \leq H_i\leq 10^8$$(1 \leq i \leq N)$
</li>

<li>
$1 \leq U_i < V_i \leq N$$(1 \leq i \leq M)$
</li>

<li>
$i \neq j$ならば $(U_i,V_i) \neq (U_j, V_j)$
</li>

<li>
入力はすべて整数である。
</li>

<li>
どの $2$つの広場の間もいくつかの坂を使って移動することができる。
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

$N$$M$$H_1$$H_2$$\ldots$$H_N$$U_1$$V_1$$U_2$$V_2$$\vdots$$U_M$$V_M$
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

4 4
10 8 12 5
1 2
1 3
2 3
3 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3

</div>

<p>
広場 $1$$\to$広場 $3$$\to$広場 $4$と移動したとき、楽しさは次のように変化します。
</p>

<ul>

<li>
広場 $1$（標高 $10$）から坂を使って広場 $3$（標高 $12$）へ移動します。楽しさは $2\times (12-10)=4$だけ減少し、$0-4=-4$になります。
</li>

<li>
広場 $3$（標高 $12$）から坂を使って広場 $4$（標高 $5$）へ移動します。楽しさは $12-5=7$だけ増加し、$-4+7=3$になります。
</li>

</ul>

<p>
ここで行動を終了したとき終了時の楽しさは $3$であり、このときが最大となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2 1
0 10
1 2

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
一度も移動を行わない時、楽しさが最大となります。
</p>

</section>

</div>

</span>

</span>

</div>
