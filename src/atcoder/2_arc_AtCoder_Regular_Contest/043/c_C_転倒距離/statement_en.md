
<div>

<div>

<div>

<section>

### **問題文**

<p>
$1$から $N$の整数を並び替えた数列をサイズ $N$の順列と呼ぶ。
</p>

<p>
同じサイズの順列 $X, Y$があるとき、$X$と $Y$で順序が入れ替わっている数字の組の数を $X$と $Y$の転倒距離と呼ぶ。
</p>

<p>
例えば $[3, 1, 4, 2, 5]$と $[2, 5, 3, 4, 1]$では以下の $7$個の組の順序が入れ替わっているので転倒距離は $7$である。
</p>

<ul>

<li>
$(1, 2), (1, 4), (1, 5), (2, 3), (2, 4), (3, 5), (4, 5)$
</li>

</ul>

<p>
サイズ $N$の順列 $A, B$が与えられる。
</p>

<p>
$A$とも $B$とも転倒距離が等しいサイズ $N$の順列があるか判断し、あるならば $1$つ挙げよ。
</p>

<p>
答えが複数通りある場合はどれを挙げても良い。
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

$N$$A_1$$A_2$.. $A_N$$B_1$$B_2$.. $B_N$
</div>

<ul>

<li>
$1$行目には与えられる順列のサイズを表す整数 $N (1 ≦ N ≦ 10^5)$が与えられる。
</li>

<li>
$2$行目には順列 $A$の要素を表す整数が $N$個、空白区切りで与えられる。 $i$番目の整数は $A$の $i$番目の要素 $A_i(1 ≦ A_i ≦ N)$である。
</li>

<li>
$3$行目には順列 $B$の要素を表す整数が $N$個、空白区切りで与えられる。 $i$番目の整数は $B$の $i$番目の要素 $B_i(1 ≦ B_i ≦ N)$である。
</li>

<li>
$i ≠ j$ならば $A_i ≠ A_j$と $B_i ≠ B_j$が成り立つ。
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
$1 ≦ N ≦ 3,000$を満たすデータセットに正解した場合は $30$点が与えられる。
</li>

<li>
$1 ≦ N ≦ 10^5$を満たすデータセットに正解した場合はさらに $70$点が与えられる。合計で $100$点となる。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
もし条件を満たす順列が存在しなければ $-1$を $1$行に出力せよ。
存在するならば、その要素を空白区切りで $1$行に出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

<div>

5
1 2 3 4 5
5 4 3 2 1

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

5 2 1 3 4

</div>

<p>
出力した順列を $C$とすると、$A$と $C$の転倒距離も $B$と $C$の転倒距離も $5$である。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

5
1 2 3 4 5
1 2 4 3 5

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

-1

</div>

<p>
$A$とも $B$とも同じ転倒距離の順列は存在しません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例3**

<div>

9
3 1 4 2 5 9 7 6 8
2 1 8 3 5 7 9 4 6

</div>

</section>

</div>

<div>

<section>

### **出力例3**

<div>

3 1 2 8 4 5 7 9 6

</div>

</section>

</div>

</div>

</div>
