
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
コンビニエンスストアのりんごマートでは，りんごジュースを販売しています。
</p>

<p>
りんごマートはある日の朝に開店し，その時にはジュースの在庫が $A$本ありました。
すぬけ君は毎日昼にりんごマートでジュースを $B$本買います。
りんごマートでは毎日夜にジュースの在庫を確認し，$C$本以下だった場合，次の日の朝までに $D$本在庫を追加します。
</p>

<p>
すぬけ君がジュースを永遠に買い続けられるかを判定して下さい。
つまり，ジュースを買おうとした時，必ず在庫が $B$本以上あるかどうかを判定して下さい。
すぬけ君以外がジュースを買うことはありません。
</p>

<p>
また，今回の問題では入力ケースは $T$個のクエリからなります。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq T \leq 300$
</li>

<li>
$1 \leq A, B, C, D \leq 10^{18}$
</li>

<li>
入力される値は全て整数である
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

$T$$A_1$$B_1$$C_1$$D_1$$A_2$$B_2$$C_2$$D_2$$:$$A_T$$B_T$$C_T$$D_T$
</div>

<p>
$i$個目のクエリにおいては，$A = A_i, B = B_i, C = C_i, D = D_i$である。
</p>

</section>

</div>

<div>

<section>

### **出力**

<p>
$T$行出力せよ。$i$行目には，$i$個目のクエリですぬけ君が永遠にりんごジュースを買い続けられる場合 `Yes`，そうでない場合 `No`と出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

14
9 7 5 9
9 7 6 9
14 10 7 12
14 10 8 12
14 10 9 12
14 10 7 11
14 10 8 11
14 10 9 11
9 10 5 10
10 10 5 10
11 10 5 10
16 10 5 10
1000000000000000000 17 14 999999999999999985
1000000000000000000 17 15 999999999999999985

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

No
Yes
No
Yes
Yes
No
No
Yes
No
Yes
Yes
No
No
Yes

</div>

<p>
$1$個目のクエリでは在庫の個数は以下のように変動します。
</p>

<p>
$9$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$2$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$11$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$4$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$13$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$6$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$6$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
x
</p>

<p>
$2$個目のクエリでは在庫の個数は以下のように変動します。
</p>

<p>
$9$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$2$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$11$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$4$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$13$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$6$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$15$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$8$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$8$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$1$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$10$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$3$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$12$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$5$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$14$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$7$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$7$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$0$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$9$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
$2$
<ruby>

<rb>
→
</rb>

<rt>
夜
</rt>

</ruby>
$11$
<ruby>

<rb>
→
</rb>

<rt>
昼
</rt>

</ruby>
…
</p>

<p>
と続いていき，このまま永遠に購入し続けられます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

24
1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
2 1 4 3
2 3 1 4
2 3 4 1
2 4 1 3
2 4 3 1
3 1 2 4
3 1 4 2
3 2 1 4
3 2 4 1
3 4 1 2
3 4 2 1
4 1 2 3
4 1 3 2
4 2 1 3
4 2 3 1
4 3 1 2
4 3 2 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

No
No
No
No
No
No
Yes
Yes
No
No
No
No
Yes
Yes
Yes
No
No
No
Yes
Yes
Yes
No
No
No

</div>

</section>

</div>

</span>

</span>

</div>
