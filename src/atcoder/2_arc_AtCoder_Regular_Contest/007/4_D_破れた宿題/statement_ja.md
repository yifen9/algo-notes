
<div>

<div>

### **問題文**

<section>
高橋君は数学の宿題で出された、等差数列の初項と公差を答える問題を解いています。

隣接する $2$つの数字間の差が定数である数字の連続のことを等差数列といい、最初の数字を初項、定数である数字間の差を公差、最後の数字を末項と呼びます。

ただ高橋君はうっかり宿題の数列を空白やカンマで区切ることなく $0$から $9$の数字で構成された $1$つの文字列としてノートに写しとってしまいました。

さらにそのノートの扱いが雑だったので、ノートの一部を破って切り離してしまいました。

破れて切り離されてしまったのは初項と末項の部分だけで、少なくとも初項の一部分が残っているのを確認しました。

そのような文字列が与えられるので、元の数列を推測してその初項と公差を答えなさい。



なお、初項と公差は $1$以上の整数であり、解が複数ある場合は初項が最も小さいものを答え、初項が等しい解が複数ある場合は公差が最も小さいものを答えなさい。

また、$003$や $012$のように不必要な $0$が前に付属している数字は写しとった数列には含まれていませんでした。

</section>

</div>

---

<div>

<div>

### **入力**

<section>
入力は以下の形式で標準入力から与えられる。

<div>

$c_{0}$$c_{1}$‥‥$c_{N-1}$
</div>

<ul>

<li>
入力は $1$行のみで等差数列の一部である長さ $N$の文字列が与えられる。
</li>

<li>
文字列は `0-9`から成り立っている。
</li>

</ul>

</section>

</div>

<div>

### **部分点**

<section>
テストデータには以下の $4$種類のテストデータセットのいずれかに含まれており、それぞれのデータセットに含まれているテストデータは以下に示すように与えられる文字列 $N$の範囲が異なっている。

あるテストデータセットに含まれているテストデータ全てに対して正しい解を出力できると、それ以外のテストデータセットで不正解を出力しても以下のように部分点が与えられる。


<ul>

<li>
level1 ( $25$点) : $1≦N≦4$
</li>

<li>
level2 ( $25$点) : $1≦N≦6$
</li>

<li>
level3 ( $25$点) : $1≦N≦200$
</li>

<li>
level4 ( $25$点) : $1≦N≦1,000$
</li>

</ul>

</section>

</div>

<div>

### **出力**

<section>
初項と末項の一部が切り離されている可能性のある等差数列に対して考えうる初項と公差を空白区切りで標準出力に $1$行で出力せよ。

解が複数ある場合は初項が最も小さいものを答え、初項が等しい解が複数ある場合は公差が最も小さいものを出力せよ。

なお、最後には改行を出力せよ。

</section>

</div>

</div>

---

<div>

### **入力例 1**

<section>

<div>

1

</div>

</section>

</div>

<div>

### **出力例 1**

<section>

<div>

1 1

</div>

<ul>

<li>
前後に文字が続く $1$つの数字の可能性もありますが、最も小さい初項は数字が切り離されていない場合の $1$です。
</li>

<li>
公差も任意の正の整数が考えられますが、最も小さい公差は $1$です。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 2**

<section>

<div>

0203

</div>

</section>

</div>

<div>

### **出力例 2**

<section>

<div>

10 10

</div>

<ul>

<li>
$02$は数字として認められないので $2$は初項ではありません。
</li>

<li>
初項の $10$の $1$が切り離されており、末項として $30$の $0$が切り離された数列であり、元の数列は `102030`です。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 3**

<section>

<div>

456789101112131415

</div>

</section>

</div>

<div>

### **出力例 3**

<section>

<div>

4 1

</div>

<ul>

<li>
数列のどこも欠けていない初項 $4$、公差 $1$の等差数列です。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 4**

<section>

<div>

579111315171921232

</div>

</section>

</div>

<div>

### **出力例 4**

<section>

<div>

5 2

</div>

<ul>

<li>
末項の $25$の $5$の部分が欠けている等差数列です。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 5**

<section>

<div>

001131261391521651

</div>

</section>

</div>

<div>

### **出力例 5**

<section>

<div>

100 13

</div>

<ul>

<li>
初項の $100$と末項の $178$の一部が欠けています。
</li>

</ul>

</section>

</div>

</div>
