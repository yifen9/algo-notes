
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
数直線の原点に高橋君がいます。高橋君は座標 $X$にあるゴールに移動しようとしています。
</p>

<p>
また、数直線上に $N$枚の壁と $N$本のハンマーがあります。
</p>

<ul>

<li>
座標 $Y_1,Y_2,\dots,Y_N$にはそれぞれタイプ $1,2,\dots,N$の壁があります。
<ul>

<li>
最初、高橋君は壁を超えて移動することができません。
</li>

</ul>

</li>

<li>
座標 $Z_1,Z_2,\dots,Z_N$にはそれぞれタイプ $1,2,\dots,N$のハンマーがあります。
<ul>

<li>
高橋君はハンマーのある座標に着くとそこにあるハンマーを手に入れます。
</li>

<li>
タイプ $i$のハンマーはタイプ $i$の壁を破壊するための専用のもので、タイプ $i$のハンマーを手に入れた後でなら、タイプ $i$の壁を破壊して通過できるようになります。
</li>

</ul>

</li>

</ul>

<p>
高橋君がゴールに到達することが可能か判定し、可能であれば移動距離の最小値を求めてください。
</p>

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
$1 \le N \le 1500$
</li>

<li>
$1 \le |X|,|Y_i|,|Z_i| \le 10^9$
</li>

<li>
合計 $2 \times N + 1$個の座標 $X,Y_i,Z_i$は相異なる
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

$N$$X$$Y_1$$Y_2$$\dots$$Y_N$$Z_1$$Z_2$$\dots$$Z_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君がゴールに到達することが可能であれば移動距離の最小値を整数として出力せよ。

不可能であれば `-1`と出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 10
-2 8 -5
5 -10 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

40

</div>

<p>
以下の手順により、移動距離 $40$で高橋くんがゴールに到達でき、これが移動距離の最小です。
</p>

<ul>

<li>
座標 $0$から高橋君が行動を開始する。
</li>

<li>
座標 $3$に行く。タイプ $3$のハンマーを手に入れる。
</li>

<li>
座標 $5$に行く。タイプ $1$のハンマーを手に入れる。
</li>

<li>
座標 $-2$に行く。タイプ $1$の壁を破壊する。
</li>

<li>
座標 $-5$に行く。タイプ $3$の壁を破壊する。
</li>

<li>
座標 $-10$に行く。タイプ $2$のハンマーを手に入れる。
</li>

<li>
座標 $8$に行く。タイプ $2$の壁を破壊する。
</li>

<li>
座標 $10$に行く。ここがゴールである。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 -1
10 -20 30 -40 50
-10 20 -30 40 -50

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1

</div>

<p>
ゴールに移動するために、ハンマーを手に入れる必要も壁を破壊する必要もない場合もあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

1 100
30
60

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
高橋君がタイプ $1$のハンマーを手に入れることは不可能であり、ゴールに辿り着くこともできません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

4 865942261
703164879 -531670946 -874856231 -700164975
-941120316 599462305 -649785130 665402307

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

4078987507

</div>

</section>

</div>

</span>

</span>

</div>
