
<div>

<div>

<div>

<section>

### **問題文**

<p>
高橋君は太りやすく痩せやすい体質です。そこで彼は $N$日間の体重の変化量を記録してみました。
</p>

<p>
$1$日目の高橋くんの体重は $W$キログラムでした。
$i$日目 $(2≦i≦N)$の体重の変化量は $A_i$キログラムでした($A_i$は負になり得ます)。
つまり $i-1$日目の体重を $X$キログラムとすると、 $i$日目の体重は $X + A_i$キログラムだったということです。
</p>

<p>
ところで、高橋君の個人的な価値観では、体重が $S$キログラム以上 $T$キログラム以下の体型が「ベストボディー」だと考えています。
</p>

<p>
体重を記録した $N$日間のうち、高橋君がベストボディーであった日数を求めてください。
</p>

</section>

</div>

---

<div>

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる
</p>

<div>

$N$$S$$T$$W$$A_2$$A_3$:
$A_N$
</div>

<ul>

<li>
$1$行目には高橋君が体重を記録した日数を表す整数 $N(2 ≦ N ≦ 1,000)$、ベストボディーの基準となる値 $S, T(1 ≦ S ≦ T ≦ 10^5)$が空白区切りで与えられる。
</li>

<li>
$2$行目には $1$日目の高橋君の体重を表す整数 $W(1 ≦ W ≦ 10^5)$が与えられる。
</li>

<li>
$3$行目からの $N-1$行のうち $i$行目には $i+1$日目の体重の変化量を表す整数 $A_{i+1}(-10^5 ≦ A_{i+1} ≦ 10^5)$が与えられる。
</li>

<li>
高橋君の体重が $0$キログラム以下になることはない。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君がベストボディーであった日数を $1$行で出力せよ。出力の末尾にも改行を入れること。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

<div>

5 60 70
50
10
10
10
10

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

2

</div>

<p>
高橋君の体重を $1$日目から順に書き出すと $50, 60, 70, 80, 90$になります。
よって$2$日目と $3$日目にのみ高橋君はベストボディーだったことになります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

5 50 100
120
-10
-20
-30
70

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

2

</div>

</section>

</div>

</div>

</div>
