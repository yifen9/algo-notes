
<div>

<div>

### **問題文**

<section>
世界的大手鉛筆会社のファイバーカステラ社が、小さくなって使えなくなってしまった鉛筆を再利用する画期的な新技術を発明した。

この技術は小さくなった鉛筆 $m$本から新しい鉛筆を $n$本 $(m > n)$作り出すものである。

ファイバーカステラ社が $N$本の鉛筆を製造・販売し、その全てが使用されて回収され、回収された使えなくなった鉛筆から新しい鉛筆を作る。

これらを販売し、やはり全てが使用後回収されて新たな鉛筆の原料となる。これを繰り返した結果として、ファイバーカステラ社が総計何本の鉛筆を販売できるか計算するプログラムを作成せよ。

再利用する際に、回収されたにもかかわらず新しい鉛筆の原料とされなかった鉛筆を保持しておき、任意のタイミングで回収した鉛筆に加えても良い。

販売できる本数には、はじめの $N$本も忘れずに加えること。また、 $N > m$とし、$m$と $n$が互いに素であるとする。


</section>

</div>

---

<div>

<div>

### **入力**

<section>
入力は以下の形式で標準入力から与えられる。
自然数 $m$、 $n$、 $N$がこの順に半角空白区切りで入力される。

<div>

$m$$n$$N$
</div>

<ol>

<li>
$1$行目には整数 $m$、 $n$、$N$が与えられる。
</li>

<ul>

<li>
$m$は小さくなって使えなくなってしまった鉛筆の数である。
</li>

<li>
$n$はファイバーカステラ社が作り出す新しい鉛筆の本数である。
</li>

<li>
$N$はファイバーカステラ社が最初に販売する鉛筆の本数である。
</li>

<li>
$(1≦n<m<N≦1,000)$であり、$m$と $n$が互いに素であることは保証されている。
</li>

</ul>

</ol>

</section>

</div>

</div>

<div>

### **出力**

<section>
ファイバーカステラ社が販売する鉛筆の総数を標準出力に $1$行で出力すること。

この数には使い終わった後に再度製造された鉛筆も含まれる。

また、出力の最後には改行をいれること。 

</section>

</div>

---

<div>

### **入力例 1**

<section>

```
2 1 8
```

</section>

</div>

<div>

### **出力例 1**

<section>

```
15
```

<ol>

<li>
初めに、鉛筆を$8$本販売する。
</li>

<li>
販売した $8$本を回収する。$2$本から $1$本鉛筆を作るので新たに $4$本作成し、販売する。
</li>

<li>
販売した $4$本を回収する。$2$本から $1$本鉛筆を作るので新たに $2$本作成し、販売する。
</li>

<li>
販売した $2$本を回収する。$2$本から $1$本鉛筆を作るので新たに $1$本作成し、販売する。
</li>

<li>
販売した $1$本を回収する。$2$本から $1$本鉛筆を作るが、 $1$本しか回収できなかったので、新たに作成することができない。
</li>

</ol>

<ul>

<li>
販売した鉛筆の合計は $8 + 4 + 2 + 1 = 15$本である。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 2**

<section>

```
7 4 30
```

</section>

</div>

<div>

### **出力例 2**

<section>

```
62
```

<ol>

<li>
初めに、鉛筆を$30$本販売する。
</li>

<li>
販売した $30$本を回収する。鉛筆を新たに $16$本作成し、販売する。このとき、 $2$本だけ再利用されない。
</li>

<li>
販売した $16$本を回収する。鉛筆を新たに $8$本作成し、販売する。このときも、 $2$本再利用されない鉛筆があり、計 $4$本再利用されていない。
</li>

<li>
販売した $8$本を回収する。鉛筆を新たに $4$本作成し、販売する。このとき、 $1$本再利用されない鉛筆があり、計 $5$本再利用されていない。
</li>

<li>
販売した $4$本を回収する。鉛筆 $7$本から新たに $4$本鉛筆を作りたいが、販売した $4$本しか回収できなかったので、これだけでは新たに作成することができない。このとき、 回収した $4$本の鉛筆に新しい鉛筆の原料とされなかった $5$本の鉛筆を追加し、計 $9$本の再利用されていない鉛筆がある。
</li>

<li>
再利用されていない鉛筆が $9$本あるので、そのうち $7$本から新たに $4$本鉛筆を作成し、販売する。このとき、 $2$本再利用されない鉛筆がある。
</li>

<li>
販売した $4$本を回収する。$7$本から $4$本鉛筆を作るが、 回収した $4$本と余った $2$本の鉛筆を足しても $6$本なので、新たに鉛筆を作成することができない。
</li>

</ol>

<ul>

<li>
販売した鉛筆の合計は $30 + 16 + 8 + 4 + 4 = 62$本である。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 3**

<section>

```
100 99 1000
```

</section>

</div>

<div>

### **出力例 3**

<section>

```
90199
```

<ul>

</ul>

</section>

</div>

</div>
