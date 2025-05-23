
<div>

<div>

### **問題文**

<section>
ある日高橋君はお母さんに近くのスーパーまでおつかいを頼まれました。

お母さんに手渡されたおつかいメモには、買ってきて欲しい商品の値段と個数がそれぞれ書かれています。

ただしメモに書かれている値段には消費税が含まれていませんが、全ての商品には消費税が $5\%$かかります。

高橋君のおつかいに必要な金額を答えなさい。

なお、消費税は $1$円未満は切り捨てます。

</section>

</div>

---

<div>

<div>

### **入力**

<section>
入力は以下の形式で標準入力から与えられる。

<div>

$N$$a_0$$b_0$$a_1$$b_1$:
:
$a_{N-1}$$b_{N-1}$
</div>

<ul>

<li>
入力は $N+1$行ある。
</li>

<li>
$1$行目には、購入する商品の品数を表す整数 $N(1≦N≦10)$が与えられる。
</li>

<li>
$2$行目から $N$行の $i+2$行目にはある商品の購入したい個数を表す整数 $a_i(1≦a_i≦10)$とその単価を表す整数 $b_i(1≦b_i≦1,000)$が空白区切りで与えられる。
</li>

</ul>

</section>

</div>

<div>

### **出力**

<section>
高橋君のおつかいに必要な金額を標準出力に $1$行で出力せよ。

なお、最後には改行を出力せよ。

</section>

</div>

</div>

---

<div>

### **入力例 1**

<section>

<div>

2
4 120
2 130

</div>

</section>

</div>

<div>

### **出力例 1**

<section>

<div>

777

</div>

<ul>

<li>
$120×4+130×2=740$円に消費税を加えると $740×1.05=777$円になります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 2**

<section>

<div>

1
1 100

</div>

</section>

</div>

<div>

### **出力例 2**

<section>

<div>

105

</div>

<ul>

<li>
$100×1×1.05=105$円になります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 3**

<section>

<div>

4
3 510
1 835
2 140
6 205

</div>

</section>

</div>

<div>

### **出力例 3**

<section>

<div>

4068

</div>

<ul>

<li>
合計金額 $3875$円に消費税を加えると $4068.75$円になります。
</li>

<li>
$1$円未満は切り捨てるので $4068$円が答えになります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 4**

<section>

<div>

10
8 10
7 189
4 545
1 596
3 209
10 850
9 943
6 921
8 984
10 702

</div>

</section>

</div>

<div>

### **出力例 4**

<section>

<div>

44321

</div>

</section>

</div>

</div>
