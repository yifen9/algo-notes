
<div>

<span>

<span>

<p>
配点 : $800$点
</p>

<div>

<section>

### **問題文**

<p>
高橋湖の周長は $L$です。高橋湖の周上には湖の所有者である高橋君の家があります。
高橋湖の周上の地点には高橋君の家から反時計回りに測った距離を用いて、$0$以上 $L$未満の実数の座標が定まっています。
</p>

<p>
高橋湖の周上には木が $N$本生えています。$i$本目の木は座標 $X_i$に生えています。高橋君の家のある座標 $0$には木は生えていません。
</p>

<p>
高橋君は、自分の家からはじめて、以下の行動を繰り返します。
</p>

<ul>

<li>
すべての木を燃やし終えている場合、終了する。
</li>

<li>
時計回りまたは反時計回りの向きを指定する。
</li>

<li>
初めてまだ燃やしていない木のある座標に到達するまで、指定した方向に高橋湖の周上を歩き続ける。
</li>

<li>
木のある座標に到達したら、その木を燃やしてその場に立ち止まり、最初に戻る。
</li>

</ul>

<p>
この行動を通じて、高橋君が歩く距離の合計の最大値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq L \leq 10^9$
</li>

<li>
$1 \leq N \leq 2\times 10^5$
</li>

<li>
$1 \leq X_1 < ... < X_N \leq L-1$
</li>

<li>
入力はすべて整数である
</li>

</ul>

</section>

</div>

<div>

<section>

### **部分点**

<p>
この問題には部分点が設定されている。
</p>

<ul>

<li>
$N \leq 2000$を満たす入力に正解すると、$300$点が得られる。
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

$L$$N$$X_1$$:$$X_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君が歩く距離の合計の最大値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

10 3
2
7
9

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

15

</div>

<p>
以下のような行動で、高橋君は距離 $15$を歩きます。
</p>

<ul>

<li>
反時計回りに距離 $2$ぶんだけ歩き、座標 $2$にある木を燃やして立ち止まる。
</li>

<li>
反時計回りに距離 $5$ぶんだけ歩き、座標 $7$にある木を燃やして立ち止まる。
</li>

<li>
時計回りに距離 $8$ぶんだけ歩き、座標 $9$にある木を燃やして立ち止まる。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10 6
1
2
3
6
7
9

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

27

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

314159265 7
21662711
77271666
89022761
156626166
160332356
166902656
298992265

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1204124749

</div>

</section>

</div>

</span>

</span>

</div>
