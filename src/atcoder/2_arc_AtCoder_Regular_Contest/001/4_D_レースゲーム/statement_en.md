
<div>

### **問題文**

<section>
高橋君は、レーシングゲームをプレイしようとしています。

レースは $(x, y) = (start, 0)$からスタートし、$(x, y) = (goal, N)$のゴールに向かって走っていきます。

$0 ≦ k ≦ N$の $y=k$に対してコースの存在する左端と右端が与えられ、それぞれを順に結んだ線の内側がコースとなります。


<img src="https://atcoder.jp/img/arc/001/4_1.png">

</img>


図：入力1の例。赤丸がスタート地点。青丸がゴール地点。茶色部分がコースとなる。



レースに使う車はコース上以外を走ることは出来ません。また、一瞬で方向転換できるものとし、車の幅及び長さは無視できるものとします。

高橋君は、このレーシングゲームを攻略するためにスタートからゴールまでの最短経路を求めたいです。


</section>

---

### **入力**

<section>
入力は以下の形式で与えられる。

<div>

$N$$start$$goal$$l_0$$r_0$$l_1$$r_1$$:$$:$$l_N$$r_N$
</div>

<ul>

<li>
$1$行目には、レースの全長 $N$が与えられる。
</li>

<li>
$2$行目には、コースのスタート地点の $start$座標及びゴール地点の $goal$座標が空白を区切りとして与えられる。
</li>

<li>
続く $3$行目から $N+2$行目の各行には、$i+3$行目に$y=i$のコースの左端 $l_i$及びコースの右端 $r_i$が空白を区切りとして与えられる。
</li>

<li>
また、入力値はそれぞれ以下の条件を満たす。
</li>

<ul>

<li>
$N$は整数であり、$1 ≦ N ≦ 200,000$を満たす。
</li>

<li>
$l_i$及び $r_i$は整数であり、$0 ≦ l_i ＜ r_i ≦ 1,000,000$を満たす。
</li>

<li>
$start$は整数であり、$l_0 ≦ start ≦ r_0$を満たす。
</li>

<li>
$goal$は整数であり、$l_N ≦ goal ≦ r_N$を満たす。
</li>

</ul>

</ul>

</section>

### **出力**

<section>
レースの最短経路を $1$行で出力せよ。

なお、出力は絶対誤差または相対誤差 $1e-9$以下までを許容する。


</section>

---

### **入力例 1**

<section>

```
7
3 3
2 5
4 6
2 3
3 6
3 4
4 6
2 5
1 5
```

</section>

### **出力例 1**

```
8.22677276241436
```

<ul>

<li>
赤丸をスタート地点、青丸をゴール地点として、下図の赤線のルートが最短となります。
</li>

</ul>

<img src="https://atcoder.jp/img/arc/001/4_2.png">

</img>



---

### **入力例 2**

<section>

```
5
3 3
0 5
0 5
0 5
0 5
0 5
0 5
```

</section>

### **出力例 2**

<section>

```
5
```

</section>

</div>
