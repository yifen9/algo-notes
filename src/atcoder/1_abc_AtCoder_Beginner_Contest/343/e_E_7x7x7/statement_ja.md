
<div>

<span>

<span>

<p>
配点 : $475$点
</p>

<div>

<section>

### **問題文**

<blockquote>

<p>
座標空間上に一辺 $7$の立方体を $3$つ、ちょうど $1,2,3$個の立方体に含まれる領域の体積がそれぞれ $V_1,V_2,V_3$となるように配置したいです。
</p>

</blockquote>

<p>
$3$つの整数 $a,b,c$に対し、$(a\leq x\leq a+7) \land (b\leq y\leq b+7) \land (c\leq z\leq c+7)$で表される立方体領域を $C(a,b,c)$とおきます。
</p>

<p>
以下の条件を全て満たすような $9$つの整数 $a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3$が存在するか判定し、存在するならば実際に $1$つ求めてください。
</p>

<ul>

<li>
$|a_1|,|b_1|,|c_1|,|a_2|,|b_2|,|c_2|,|a_3|,|b_3|,|c_3| \leq 100$
</li>

<li>
$C_i = C(a_i,b_i,c_i)\ (i=1,2,3)$とおいたとき、
<ul>

<li>
$C_1,C_2,C_3$のうちちょうど $1$個に含まれる領域の体積は $V_1$である。
</li>

<li>
$C_1,C_2,C_3$のうちちょうど $2$個に含まれる領域の体積は $V_2$である。
</li>

<li>
$C_1,C_2,C_3$の全てに含まれる領域の体積は $V_3$である。
</li>

</ul>

</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$0\leq V_1,V_2,V_3 \leq 3\times 7^3$
</li>

<li>
入力は全て整数
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

$V_1$$V_2$$V_3$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
問題文中の条件を全て満たすような $9$つの整数 $a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3$が存在しないならば `No`を出力し、存在するならば以下の形式で出力せよ。
複数存在する場合はそのどれを出力してもよい。
</p>

<div>

Yes
$a_1$$b_1$$c_1$$a_2$$b_2$$c_2$$a_3$$b_3$$c_3$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

840 84 7

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes
0 0 0 0 6 0 6 0 0

</div>

<p>
$(a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3)=(0,0,0,0,6,0,6,0,0)$の場合を考えます。
</p>

<p>

<img src="https://img.atcoder.jp/abc343/aa534bf0a0e8e3f3487c5eeb540e54dc.png">

</img>

</p>

<p>
この図は $C_1,C_2,C_3$の位置関係を表したもので、それぞれ橙、水色、緑の立方体に対応しています。
</p>

<p>
このとき、
</p>

<ul>

<li>
$|a_1|,|b_1|,|c_1|,|a_2|,|b_2|,|c_2|,|a_3|,|b_3|,|c_3|$は全て $100$以下
</li>

<li>
$C_1,C_2,C_3$の全てに含まれる領域は $(6\leq x\leq 7)\land (6\leq y\leq 7) \land (0\leq z\leq 7)$であり、その体積は $(7-6)\times(7-6)\times(7-0)=7$
</li>

<li>
$C_1,C_2,C_3$のうちちょうど $2$個に含まれる領域は $((0\leq x < 6)\land (6\leq y\leq 7) \land (0\leq z\leq 7))\lor((6\leq x\leq 7)\land (0\leq y< 6) \land (0\leq z\leq 7))$であり、
その体積は $(6-0)\times(7-6)\times(7-0)\times 2=84$
</li>

<li>
$C_1,C_2,C_3$のうちちょうど $1$個に含まれる領域の体積は $840$
</li>

</ul>

<p>
であり、条件を全て満たします。
</p>

<p>
$(a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3)=(-10, 0, 0, -10, 0, 6, -10, 6, 1)$なども同様に条件を全て満たすため、正当な出力として判定されます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

343 34 3

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

No

</div>

<p>
条件を全て満たすような $9$つの整数 $a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3$は存在しません。
</p>

</section>

</div>

</span>

</span>

</div>
