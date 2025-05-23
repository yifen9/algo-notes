
<div>

<div>

### **問題文**

<section>
高橋君は艦長である。

高橋艦長の任務は、鎮守府のある海域から最終目的地となる海域へ進軍することである。

高橋艦長は次の順序で行動する。


<ol>

<li>
航路選択
</li>

<ul>

<li>
進軍する航路を選択する。現在の海域から異なる海域へ移動できる航路が $1$本も存在しない場合、$4$の海域離脱を行う。
</li>

<li>
また、現在の海域から異なる海域への航路が複数本存在する場合、何者かの陰謀によって等確率で航路が選択される。
</li>

<ul>

<li>
たとえば、鎮守府のある海域から、他の海域への航路が $4$本存在する場合、それぞれ $25%$の確率で選択されます。
</li>

</ul>

</ul>

<li>
進軍
</li>

<ul>

<li>
選択された航路によって、海域を移動する。
</li>

</ul>

<li>
戦闘
</li>

<ul>

<li>
進軍先の海域 $i$には敵艦が待ち構えており、戦闘が発生する。
</li>

<li>
鎮守府から出港したとき、高橋艦長が率いる軍艦の体力は $H$であり、戦闘によって軍艦の体力は $D_i$だけ減少する。
</li>

<li>
軍艦の体力が $0$以下になると、軍艦は沈没してしまう。
</li>

<li>
軍艦が沈没すると高橋艦長は失意のあまりこれ以上出撃することが出来なくなってしまうため、`絶対に沈没させてはいけない`。
</li>

<li>
なお、鎮守府のある海域では戦闘は発生しないが、最終目的地である海域では必ず戦闘が発生する。
</li>

</ul>

<li>
海域離脱 or 航路選択に戻る
</li>

<ul>

<li>
海域離脱とは、鎮守府のある海域へ戻ることを意味する。
</li>

<li>
海域離脱した際に、軍艦の残り体力が $C$であった場合、$H-C$だけ体力回復のために時間を消費する。
</li>

</ul>

</ol>
上記`1`,`2`,`3`,`4`のサイクル1回につき時間を $1$だけ使う。


---
海域と航路について

<ul>

<li>
いま、$N$個の海域と $M$個の航路がある。
</li>

<li>
これら $M$個の航路は、すべて一方通行である。
</li>

</ul>
そのため、任意の異なる海域 $A,B$において、ある $1$本の航路を利用して、海域 $A$から海域 $B$へ移動し、海域 $B$から海域 $A$へ移動することはできない。


---
あなたは高橋艦長の参謀であり、高橋艦長が消費する時間を最小となるよう行動した場合、最終目的地における戦闘で生存するまでに経過する時間の期待値を求めることが仕事である。

どのようにしても高橋艦長が任務を完遂できない場合は`-1`と出力せよ。

ただし、出力する期待値が $10^6$より大きくなる入力は与えられない。

</section>

</div>

---

<div>

### **入力**

<section>
入力は以下の形式で標準入力から与えられる。

<div>

$N$$M$$H$$f_1$$t_1$$f_2$$t_2$:
$f_M$$t_M$$D_1$$D_2$:
$D_N$
</div>

<ol>

<li>
$1$行目は、海域数を表す整数 $N (2≦N≦100)$、航路数を表す整数 $M (0≦M≦N * (N - 1) / 2)$、出港時の艦隊の体力を表す整数 $H (1≦H≦100)$が半角空白区切りで与えられる。
</li>

<ul>

<li>
鎮守府のある海域は $1$で、最終目的地である海域は $N$です。
</li>

</ul>

<li>
$2$行目から $M$行は、 $i$番目の航路を表す。移動元の海域を表す整数 $f_i (1≦f_i≦N)$、移動先の海域を表す整数 $t_i (1≦t_i≦N)$が、スペース区切りで与えられる。
</li>

<ul>

<li>
$f_i<t_i$であることが保証されている。
</li>

</ul>

<li>
$2+M$行目から $N$行は、$i$番目の海域での戦闘で受けるダメージを表す整数 $D_i (0≦D_i≦100)$が、一行で与えられる。
</li>

<ul>

<li>
$D_1$の値は常に $0$である（鎮守府のある海域です）。
</li>

</ul>

</ol>

<ul>

<li>
出力する期待値が $10^6$より大きくなる入力が与えられないことに留意せよ。
</li>

</ul>

</section>

</div>

<div>

### **出力**

<section>
高橋艦長が消費する時間が最小となるよう行動した場合、最終目的地における戦闘で生存するまでに経過する時間の期待値を出力せよ。

出力は絶対誤差あるいは相対誤差の少なくとも片方が $10^{-6}$以下であれば許容される。 

また、どのようにしても高橋艦長が任務を完遂できない場合は`-1`と出力せよ。

なお、出力の最後には改行をいれること。


</section>

</div>

---

<div>

### **入力例 1**

<section>

```
6 6 8
1 2
1 3
2 4
3 5
4 6
5 6
0
1
1
2
3
4
```

</section>

</div>

<div>

### **出力例 1**

<section>

```
5.0
```

<ul>

<li>
鎮守府のある $1$から、最終目的地である $6$までは、$2$通りの経路があります。
</li>

<ol>

<li>
1 -> 2 -> 4 -> 6
</li>

<ul>

<li>
このルートが選択される確率は $50%$です。
</li>

<li>
このルートで軍艦が受けるダメージは $0+1+2+4=7$です。
</li>

<li>
このルートで消費する時間は、サイクル $3$回の時間のみなので、$3$です。
</li>

</ul>

<li>
1 -> 3 -> 5 -> 6
</li>

<ul>

<li>
このルートが選択される確率は $50%$です。
</li>

<li>
このルートで軍艦が受けるダメージは $0+1+3+4=8$です。
</li>

<li>
出港時の軍艦の体力は $8$なので、このルートでは沈没してしまいます。
</li>

<li>
高橋艦長は、沈没を避けるため、海域 $3$の戦闘終了時に海域離脱を選択します。
</li>

<li>
このルートで消費する時間は、サイクル $1$回の時間 $+$体力の回復にかかる時間 $=$$1+1=2$です。
</li>

</ul>

</ol>
1 -> 3 -> 5 -> 6 で `1`度撤退してから 1-> 2-> 4 -> 6
		
<ul>

<li>
$50%$の確率で 1 -> 3 -> 5 -> 6 が選択され、時間 $2$を使って鎮守府に戻る。
</li>

<li>
その後、 $50%$の確率で 1 -> 2 -> 4 -> 6 が選択され、時間 $3$を使って最終目的地に到達する。
</li>

<li>
つまり、$25%$の確率で時間 $5$を使って最終目的地に到達。
</li>

</ul>
1 -> 3 -> 5 -> 6 で `2`度撤退してから 1-> 2-> 4 -> 6
		
<ul>

<li>
$12.5%$の確率で時間 $7$を使って最終目的地に到達。
</li>

</ul>
1 -> 3 -> 5 -> 6 で `3`度撤退してから 1-> 2-> 4 -> 6
		
<ul>

<li>
$6.25%$の確率で時間 $9$を使って最終目的地に到達。
</li>

</ul>

<li>
上記から、求める期待値は $3*0.5+5*0.25+7*0.125+...=5$となります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 2**

<section>

```
3 2 5
1 2
1 3
0
5
1
```

</section>

</div>

<div>

### **出力例 2**

<section>

```
-1
```

</section>

<ul>

<li>
鎮守府のある $1$から、$2$通りの航路があります。
</li>

<ol>

<li>
1 -> 2
</li>

<ul>

<li>
このルートが選択される確率は $50%$です。
</li>

<li>
このルートで軍艦が受けるダメージは $0+5=5$です。
</li>

<li>
出港時の軍艦の体力は $5$なので、このルートでは沈没してしまいます。
</li>

</ul>

<li>
1 -> 3
</li>

<ul>

<li>
このルートが選択される確率は $50%$です。
</li>

<li>
このルートで軍艦が受けるダメージは $0+1=1$です。
</li>

<li>
このルートで消費する時間は、サイクル $1$回の時間のみなので、$1$です。
</li>

</ul>

</ol>

<ul>

<li>
このように、1 -> 3の航路が選択されれば、最終目的地にたどり着くことが出来ますが、1 -> 2の航路が選択される可能性が残ってしまい、鎮守府から進軍することが出来ません。
</li>

<li>
そのため、`-1`を出力します。
</li>

</ul>

</ul>

</div>

---

<div>

### **入力例 3**

<section>

```
3 2 6
1 2
1 3
0
5
1
```

</section>

</div>

<div>

### **出力例 3**

<section>

```
7
```

</section>

<ul>

<li>
入力例 $2$と同じマップですが、体力が入力例  $2$と比べて1増えています。
</li>

<li>
このため、鎮守府から進軍して海域 $2$に移動してしまったとしても、ダメージ $5$を受けた後に海域離脱を行うことができます。
</li>

<li>
よって、高橋艦長は最終目的地に到達することが可能になります。
</li>

</ul>

</div>

---

<div>

### **入力例 4**

<section>

```
9 13 4
1 2
1 3
2 4
2 5
2 7
3 5
3 6
4 7
5 8
6 8
7 8
7 9
8 9
0
1
1
1
1
1
1
1
1
```

</section>

</div>

<div>

### **出力例 4**

<section>

```
36.9999999999999
```

</section>

<ul>

<li>
1 -> 2 -> 7 -> 9の経路でのみ、最終目的地に到達することが可能となります。
</li>

<li>
それ以外の海域に入ってしまった場合、即撤退をすることが最善となります。
</li>

<li>
期待値は $37$ですが、出力に誤差が許容されているので、上記のような出力でも問題ありません。
</li>

</ul>

</div>

</div>
