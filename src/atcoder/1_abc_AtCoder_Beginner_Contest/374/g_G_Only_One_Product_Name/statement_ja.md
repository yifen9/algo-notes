
<div>

<span>

<span>

<p>
配点 : $600$点
</p>

<div>

<section>

### **問題文**

<p>
キーエンスの商品名はすべて 
<strong>
英大文字 $2$文字
</strong>
からなります。

すでに $N$個の商品名を使用しており、$i$個目 $(1\leq i\leq N)$の商品名は $S_i$です。

一度使用した商品名は再び使うことができないので、過去に使用した商品名の一覧がすぐわかるように NG リストを作ることにしました。
</p>

<p>
NGリストは次の条件をみたす必要があります。
</p>

<ul>

<li>
$1$つ以上の文字列からなり、各文字列は英大文字のみからなる。
</li>

<li>
すでに使用されている商品名それぞれについて、その商品名を（連続する）部分文字列として含む文字列が $1$つ以上存在する。
</li>

<li>
リスト内のすべての文字列は、すでに使用されている商品名でない長さ $2$の文字列を（連続する）部分文字列として含まない。
</li>

</ul>

<p>
NG リストの文字列の数としてあり得る最小の値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq 26^2$
</li>

<li>
$N$は整数
</li>

<li>
$S_i$は英大文字のみからなる長さ $2$の文字列
</li>

<li>
$S_1,S_2,\ldots,S_N$はすべて異なる。
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

$N$$S_1$$S_2$$\vdots$$S_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
NG リストの文字列の数としてあり得る最小の値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

7
AB
BC
CA
CD
DE
DF
XX

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
条件をみたす NG リストとしては例えば次の $3$つの文字列からなるようなものが考えられます。
</p>

<ul>

<li>
`CABCDE`
</li>

<li>
`DF`
</li>

<li>
`XX`
</li>

</ul>

<p>
これは $3$つの文字列からなり、$2$つ以下の文字列からなり条件をみたす NG リストは存在しないため、 $3$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
AC
BC
CD
DE
DF

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

2

</div>

<p>
条件をみたす NG リストとしては例えば次の $2$つの文字列からなるようなものが考えられます。
</p>

<ul>

<li>
`ACDE`
</li>

<li>
`BCDF`
</li>

</ul>

<p>
すでに使用されている商品名は NG リスト内の複数の文字列に登場したり、同一文字列に複数回含まれたりしていても良いことに注意してください。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

6
AB
AC
CB
AD
DB
BA

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1

</div>

<p>
例えば、`ABACBADB`のみからなる NG リストが条件をみたしています。
</p>

</section>

</div>

</span>

</span>

</div>
