
<div>

<div>

<div>

<section>

### **問題文**

<p>
高橋君はある部屋に移動する予定です。
</p>

<p>
部屋は正方形のマスが縦に $R$行、横に $C$列並んだ形状をしています。このうち $i (1 ≦ i ≦ R)$行目の $j (1 ≦ j ≦ C)$列目にあるマスをマス $(i,j)$と呼ぶことにします。
</p>

<p>
これらのマスには飴が合計 $N$個存在します。飴には $1$から $N$までの番号が付けられており、飴 $i (1 ≦ i ≦ N)$はマス $(r_i,c_i)$に置いてあります。これらのうちどの $2$つの飴も同一のマス上にありません。
</p>

<p>
高橋君はマスのうち任意の $1$マスに移動します。移動した後、高橋君は次に示すように飴を獲得します。
</p>

<ul>

<li>
最初に、高橋君がいるマスと同じ行にあるすべてのマスについて、そのマスにある飴をすべて獲得する。
</li>

<li>
次に、高橋君がいるマスと同じ列にあるすべてのマスについて、そのマスにあるすべての飴を獲得する。
</li>

</ul>

<p>
高橋君はこの行動以外には何も行動しません。
</p>

<p>
高橋君は獲得する飴の個数がちょうど $K$個になるようにしたいです。このような移動先として考えられるマスの総数を求めてください。
</p>

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

$R$$C$$K$$N$$r_1$$c_1$$r_2$$c_2$:
$r_N$$c_N$
</div>

<ul>

<li>
$1$行目には、$3$つの整数 $R (1 ≦ R ≦ 100,000)$, $C (1 ≦ C ≦ 100,000)$, $K (1 ≦ K ≦ 100,000)$が空白区切りで書かれている。これは、部屋を構成する正方形マスが縦 $R$行、横 $C$列あることを表す。$K$は高橋君が獲得したい飴の個数である。
</li>

<li>
$2$行目には、飴の個数を表す整数 $N (K ≦ N ≦ 100,000)$が与えられる。
</li>

<li>
$3$行目から $N$行には、飴に関する情報が与えられる。$N$行のうち $i (1 ≦ i ≦ N)$行目には、$2$つの整数 $r_i (1 ≦ r_i ≦ R)$, $c_i (1 ≦ c_i ≦ C)$が空白区切りで書かれている。これは飴 $i$がマス ($r_i$,$c_i$) にあることを表す。
</li>

<li>
$i≠j$のとき、$(r_i,c_i)≠(r_j,c_j)$となる。
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
$R ≦ 50$かつ $C ≦ 50$かつ $N ≦ 50$を満たすデータセット $1$に正解した場合は、$30$点が与えられる。
</li>

<li>
追加制約のないデータセット $2$に正解した場合は、上記とは別に $70$点が与えられる。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
獲得する飴の個数がちょうど $K$個になるような移動先の総数を $1$行に出力せよ。出力の末尾にも改行を入れること。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

<div>

3 5 3
5
1 2
2 1
2 5
3 2
3 5

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

5

</div>

<p>
例えば、マス $(3,2)$に高橋君が移動した場合を考えます。
</p>

<ul>

<li>
飴 $1$は、マス $(1,2)$にあります。このマスはマス $(3,2)$と同じ列にあるので、高橋君は飴 $1$を獲得します。
</li>

<li>
飴 $2$は、マス $(2,1)$にあります。このマスはマス $(3,2)$と同じ行にも同じ列にもないので、高橋君は飴 $2$を獲得しません。
</li>

<li>
飴 $3$は、マス $(2,5)$にあります。このマスはマス $(3,2)$と同じ行にも同じ列にもないので、高橋君は飴 $3$を獲得しません。
</li>

<li>
飴 $4$は、マス $(3,2)$にあります。このマスはマス $(3,2)$と同じマス (同じ行かつ同じ列) にあるので、高橋君は飴 $4$を獲得します。
</li>

<li>
飴 $5$は、マス $(3,5)$にあります。このマスはマス $(3,2)$と同じ行にあるので、高橋君は飴 $5$を獲得します。
</li>

</ul>

<p>
以上より、飴 $1$, $4$, $5$のちょうど $3$個だけ飴を獲得するので、マス $(3,2)$は獲得する飴の個数がちょうど $K$個になるような移動先です。
</p>

<p>
他にもマス $(1,5)$, $(2,5)$, $(3,1)$, $(3,5)$が条件をみたすので答えとして $5$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

7 3 1
4
3 2
3 3
4 2
4 3

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

0

</div>

<p>
どのように移動先を指定しても、獲得する飴の個数をちょうど $1$個にすることはできません。
</p>

</section>

</div>

---

<div>

<section>

### **入力例3**

<div>

5 5 2
5
1 1
2 2
3 3
4 4
5 5

</div>

</section>

</div>

<div>

<section>

### **出力例3**

<div>

20

</div>

</section>

</div>

</div>

</div>
