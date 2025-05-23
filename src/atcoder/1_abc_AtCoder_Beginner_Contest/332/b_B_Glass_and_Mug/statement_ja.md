
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder 社は<a href="https://suzuri.jp/AtCoder/5510290/water-glass/m/clear">グラス</a>と<a href="https://suzuri.jp/AtCoder/5510290/mug/m/white">マグカップ</a>を販売しています。  
</p>

<p>
高橋君は容量が $G$ml のグラスと、容量が $M$ml のマグカップを $1$つずつ持っています。

ここで、$G,M$は $G<M$をみたします。
</p>

<p>
最初、グラスとマグカップはいずれも空です。

以下の操作を $K$回繰り返した後で、グラスとマグカップに水がそれぞれ何 ml ずつ入っているか求めてください。
</p>

<ul>

<li>
グラスが水で満たされているとき、すなわちグラスにちょうど $G$ml 入っているとき、グラスの水をすべて捨てる。
</li>

<li>
そうでなく、マグカップが空であるとき、マグカップを水で満たす。
</li>

<li>
上のいずれでもないとき、マグカップが空になるかグラスが水で満たされるまで、マグカップからグラスに水を移す。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq K\leq 100$
</li>

<li>
$1\leq G<M\leq 1000$
</li>

<li>
$G,M,K$は整数
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

$K$$G$$M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
操作を $K$回行った後で、グラスとマグカップに水がそれぞれ何 ml ずつ入っているか、この順に空白区切りで出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 300 500

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

200 500

</div>

<p>
操作は次の順で行われます。最初、グラスとマグカップはいずれも空です。
</p>

<ul>

<li>
マグカップを水で満たす。グラスには $0$ml, マグカップには $500$ml 入った状態になる。
</li>

<li>
グラスが満たされるまでマグカップからグラスに水を移す。グラスには $300$ml, マグカップには $200$ml 入った状態になる。
</li>

<li>
グラスの水をすべて捨てる。グラスには $0$ml, マグカップには $200$ml 入った状態になる。
</li>

<li>
マグカップが空になるまでマグカップからグラスに水を移す。グラスには $200$ml, マグカップには $0$ml 入った状態になる。
</li>

<li>
マグカップを水で満たす。グラスには $200$ml, マグカップには $500$ml 入った状態になる。
</li>

</ul>

<p>
よって、$5$回の操作の後でグラスには $200$ml, マグカップには $500$ml 入った状態になります。
ゆえに、$200$, $500$を空白区切りでこの順に出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 100 200

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0 0

</div>

</section>

</div>

</span>

</span>

</div>
