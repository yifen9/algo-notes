
<div>

<div>

<div>

<section>

### **問題文**

<p>
高橋君は、毎年誕生日にお母さんから数列をもらっています。
高橋君はバブルソートの交換回数を求めるのが好きなので、毎年、お母さんからもらった数列のバブルソートの交換回数を求めるのを楽しんできました。
</p>

<p>
しかし今年のお母さんは一味違います。なんと、高橋君がバブルソートの交換回数を求めるのをより一層楽しめるように、とても長い数列を圧縮したものを高橋君に渡したのです。
</p>

<p>
長さ $10^7$の数列のバブルソートの交換回数なら目視で $1$秒とかからずに求められる高橋君でも、この数列には歯が立ちませんでした。
</p>

<p>
あなたの仕事は、高橋君に代わってこの数列のバブルソートの交換回数を $10^9+7$で割ったあまり求めることです。
</p>

<p>
ただし、バブルソートとは、以下の擬似コードで与えられるアルゴリズムです。
</p>

<div>

input: a[1],...,a[N]
for i=1 to N-1
{
      for j=1 to N-i
      {
              if a[j]>a[j+1] swap(a[j],a[j+1])
      }
}

</div>

<p>
バブルソートの交換回数とは、上の疑似コードでswapが呼ばれる回数です。
</p>

<p>
また、圧縮された列からもとの数列を得る方法は、以下の通りです。
</p>

<ul>

<li>
最初、ポインタは圧縮列の最初の項を指しており、スタックは空である。以下の操作をポインタの位置が圧縮列からはみ出すまで繰り返す。最終的にスタックに残ったひとつの数列が、目的の数列である。
</li>

<li>
ポインタの指す値が正なら、スタックにその値の項ひとつからなる数列を積み、ポインタを一つ進める。
</li>

<li>
ポインタの指す値が $0$なら、スタックの上から $1$番目と $2$番目の数列を取り出し、後者の後ろに前者をつなげた数列をスタックに積み、ポインタを一つ進める。
</li>

<li>
ポインタの指す値が負なら、スタックの一番上の数列を取り出し、それを $|ポインタの指す値|$回繰り返したものをスタックに積み、ポインタを一つ進める。
</li>

</ul>

<p>
例えば、列 

</p>

<div>

1 2 3 0 -4 5 0 0 -2

</div>
は数列


<div>

1 2 3 2 3 2 3 2 3 5 1 2 3 2 3 2 3 2 3 5

</div>
を表します。
<p>

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
$N > 0$
</li>

<li>
$-10^5 ≦ A_i ≦ 10^5(1 ≦ i ≦ N)$
</li>

<li>
$A_i ≠ 0$なる $i$の個数は $10^5$を超えない。
</li>

<li>
与えられる圧縮列からは、上述の方法によって元の数列が復元できることが保障される。
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

$N$$A_1$... $A_N$
</div>

</section>

</div>

</div>

---

<div>

<section>

### **部分点**

<p>
この問題には部分点が設定されている。
</p>

<ul>

<li>
圧縮列の $0$でない要素の個数が $2000$を超えないデータセットに正解した場合、部分点として$50$点が与えられる。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
圧縮列が表す数列のバブルソートの交換回数を $10^9+7$で割った余りを出力せよ。
</p>

<p>
出力の最後には改行を忘れないこと。
</p>

</section>

</div>

---

<div>

<section>

### **入力例1**

<div>

9
1 2 3 0 -4 5 0 0 -2

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

45

</div>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

22
12 35 -901 0 43 73 0 -18 2 6 0 -9 428 0 0 0 -23 8 0 -66 2 0

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

509114582

</div>

</section>

</div>

</div>

</div>
