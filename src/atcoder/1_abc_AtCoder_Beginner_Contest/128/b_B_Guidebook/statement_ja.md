
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
あなたは美味しいレストランを紹介する本を書くことにしました。
あなたは $N$個のレストラン、レストラン $1$、レストラン $2$、$…$、レストラン $N$を紹介しようとしています。レストラン $i$は $S_i$市にあり、あなたは $100$点満点中 $P_i$点と評価しています。
異なる $2$個のレストランに同じ点数がついていることはありません。
</p>

<p>
この本では、次のような順でレストランを紹介しようとしています。
</p>

<ul>

<li>
市名が辞書順で早いものから紹介していく。
</li>

<li>
同じ市に複数レストランがある場合は、点数が高いものから紹介していく。
</li>

</ul>

<p>
この本で紹介される順にレストランの番号を出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 ≤ N ≤ 100$
</li>

<li>
$S$は英小文字のみからなる長さ $1$以上 $10$以下の文字列
</li>

<li>
$0 ≤ P_i ≤ 100$
</li>

<li>
$P_i$は整数
</li>

<li>
$P_i ≠ P_j$$(1 ≤ i < j ≤ N)$
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

$N$$S_1$$P_1$$:$$S_N$$P_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$N$行出力せよ。$i$行目 ($1 ≤ i ≤ N$) には、$i$番目に紹介されるレストランの番号を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

6
khabarovsk 20
moscow 10
kazan 50
kazan 35
moscow 60
khabarovsk 40

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3
4
6
1
5
2

</div>

<p>
$3$種類の市名は辞書順で `kazan`$<$`khabarovsk`$<$`moscow`です。
それぞれの市について、点数が高いレストランから順に紹介されていきます。よって、レストランは $3,4,6,1,5,2$の順に紹介されていきます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10
yakutsk 10
yakutsk 20
yakutsk 30
yakutsk 40
yakutsk 50
yakutsk 60
yakutsk 70
yakutsk 80
yakutsk 90
yakutsk 100

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

10
9
8
7
6
5
4
3
2
1

</div>

</section>

</div>

</span>

</span>

</div>
