
<div>

<span>

<span>

<p>
配点 : $900$点
</p>

<div>

<section>

### **問題文**

<p>
厚さを無視できる細長い紙があります。右端を持ち上げ、中央を折り目にして左端に合わせて折りたたむ操作を $100$回行い、もとに戻します。このとき紙には折り目が $2^{100} - 1$個あり、これらは山折り、谷折りの $2$種類に分類できます。下の図は $2$回操作を行った状態を表した図で、赤い実線は山折り、赤い点線は谷折りを表します。
</p>

<details>

<summary>
山折り、谷折りとは
</summary>

<ul>

<li>
ある折り目が山折りであるとは、折り目が紙の裏面同士が重なる方向に折られたことをいいます。
</li>

<li>
ある折り目が谷折りであるとは、折り目が紙の表面同士が重なる方向に折られたことをいいます。
</li>

</ul>

</details>

<p>

<img src="https://img.atcoder.jp/arc184/80090ca5edac0dd6fbd781a6a353719a.png">

</img>

</p>

<p>
長さ $N$の非負整数列 $A = (A_1, A_2, \dots ,A_N)$が与えられます。ここで $0 = A_1 < A_2 < \dots < A_N \leq 10^{18}$です。
</p>

<p>
$1$以上 $2^{100} - A_N - 1$以下の整数 $i$に対し、 $f(i)$を以下のように定義します。
</p>

<ul>

<li>
$k = 1, 2, \dots ,N$のうち、左から $i + A_k$番目の折り目が山折りであるものの個数
</li>

</ul>

<p>
$f(1), f(2), \dots ,f(2^{100} - A_N - 1)$の最大値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 10^3$
</li>

<li>
$0 = A_1 < A_2 < \dots < A_N \leq 10^{18}$
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

$N$$A_1$$A_2$$\cdots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
答えを $1$行に出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4
0 1 2 3

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
山折り、谷折りをそれぞれ `M`, `V`と表すことにすると、折り目には `MMVM`と連続する箇所が存在します。`MMMM`と連続する箇所は存在しないので、答えは $3$となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6
0 2 3 5 7 8

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4

</div>

</section>

</div>

</span>

</span>

</div>
