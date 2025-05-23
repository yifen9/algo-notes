
<div>

<div>

<div>

<section>

### **問題文**

<p>
高梁空港には、周長 $L$の円形の動く歩道があり、その床面は $1$秒間に距離 $X$進む速度で時計回りに動いています。
動く歩道のある円周上の点の位置は、その中で最も北にある点から時計回りに測った距離 ( $0$以上 $L$未満) であらわされます。
動く歩道の外周の位置 $D$の点には出口があり、そこから動く歩道の外に出ることができるようになっています。
それ以外の外周と内周には手すりがあるため、高橋君は出口以外の場所から外に出ることはできません。
</p>

<p>
高橋君は動く歩道の床面に対して $1$秒間に距離 $Y$進む速度で時計回りまたは反時計回りに歩くことができ、動く歩道上の位置 $S$の点に乗っています。
</p>

<p>
高橋君が出口にたどり着くまでにかかる最小の時間を求めてください。
</p>

<p>
なお、出口の $1$箇所しかない動く歩道にわざわざ乗るような物好きな人は高橋君以外にはいないので、動く歩道を逆走しても誰にも迷惑をかけることはありません。
</p>

</section>

</div>

---

<div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≦ L,X,Y ≦ 10^9, 0 ≦ S,D ≦ L-1$
</li>

<li>
入力はすべて整数である。
</li>

</ul>

</section>

</div>

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$L$$X$$Y$$S$$D$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君が出口にたどり着くまでにかかる最小の時間を $1$行に出力せよ。絶対誤差あるいは相対誤差が $10^{-6}$以下のとき正答と認められる。
</p>

<p>
出力の最後には改行を忘れないこと。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

<div>

6 2 3 1 5

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

0.8000000000

</div>

<p>
時計回りに歩き続けると $0.8$秒で出口にたどり着くことができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

6 2 10 1 5

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

0.2500000000

</div>

<p>
反時計回りに歩き続けると $0.25$秒で出口にたどり着くことができます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例3**

<div>

6 3 1 5 3

</div>

</section>

</div>

<div>

<section>

### **出力例3**

<div>

1.0000000000

</div>

</section>

</div>

---

<div>

<section>

### **入力例4**

<div>

10 7 7 6 0

</div>

</section>

</div>

<div>

<section>

### **出力例4**

<div>

0.2857142857

</div>

</section>

</div>

</div>

</div>
