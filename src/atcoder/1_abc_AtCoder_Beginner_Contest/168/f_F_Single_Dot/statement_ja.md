
<div>

<span>

<span>

<p>
配点: $600$点
</p>

<div>

<section>

### **問題文**

<p>
無限に広がる草原があります。
</p>

<p>
この草原上に、大きさが無視できるほど小さい $1$頭の牛がいます。牛の今いる点から南に $x\ \mathrm{cm}$、東に $y\ \mathrm{cm}$移動した点を $(x, y)$と表します。牛自身のいる点は $(0, 0)$です。
</p>

<p>
また、草原には $N$本の縦線と $M$本の横線が引かれています。$i$本目の縦線は点 $(A_i, C_i)$と点 $(B_i, C_i)$とを結ぶ線分、$j$本目の横線は点 $(D_j, E_j)$と点 $(D_j, F_j)$とを結ぶ線分です。
</p>

<p>
牛が線分を(端点を含め)通らない限り自由に動き回れるとき、牛が動き回れる範囲の面積は何 $\mathrm{cm^2}$でしょうか。この範囲の面積が無限大である場合は代わりに `INF`と出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力はすべて $-10^9$以上 $10^9$以下の整数
</li>

<li>
$1 \leq N, M \leq 1000$
</li>

<li>
$A_i < B_i\ (1 \leq i \leq N)$
</li>

<li>
$E_j < F_j\ (1 \leq j \leq M)$
</li>

<li>
点 $(0, 0)$はどの与えられた線分上にも位置しない
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

$N$$M$$A_1$$B_1$$C_1$$:$$A_N$$B_N$$C_N$$D_1$$E_1$$F_1$$:$$D_M$$E_M$$F_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
牛が動き回れる範囲の面積が無限大ならば `INF`を、そうでなければその面積を表す整数 (単位: $\mathrm{cm^2}$) を出力せよ。
</p>

<p>
(この問題の制約下で、牛が動き回れる範囲の面積が有限である場合、その面積は必ず整数であることが示せる。)
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 6
1 2 0
0 1 1
0 2 2
-3 4 -1
-2 6 3
1 0 1
0 1 2
2 0 2
-1 -4 5
3 -2 4
1 2 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

13

</div>

<p>
牛が動き回れる範囲の面積は $13\ \mathrm{cm^2}$です。
</p>

<p>

<img src="https://img.atcoder.jp/abc168/education.png">

</img>

</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

6 1
-3 -1 -2
-3 -1 1
-2 -1 2
1 4 -2
1 4 -1
1 4 1
3 1 4

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

INF

</div>

<p>
牛が動き回れる範囲の面積は無限大です。
</p>

</section>

</div>

</span>

</span>

</div>
