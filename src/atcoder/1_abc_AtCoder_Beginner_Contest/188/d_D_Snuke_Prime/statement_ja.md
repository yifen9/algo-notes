
<div>

<span>

<span>

<p>
配点 : $400$点
</p>

<div>

<section>

### **問題文**

<p>
株式会社すぬけは様々なサービスを提供しています。

この会社は、すぬけプライムという支払いプランを用意しています。

すぬけプライムへの加入中は、$1$日あたり $C$円を支払うことで、提供される全てのサービスを追加料金の支払いなしに利用することができます。

すぬけプライムへの加入および脱退は、それぞれ $1$日の始めおよび終わりに自由に行うことができます。  
</p>

<p>
高橋くんは、この会社のサービスのうち $N$個を利用しようとしています。

そのうち $i$個目のサービスは、今日を $1$日目として、$a_i$日目の始めから $b_i$日目の終わりまで利用する予定です。

すぬけプライムに加入していない期間中は、$i$個目のサービスを利用する際に $1$日あたり $c_i$円を支払う必要があります。  
</p>

<p>
サービスを利用するために高橋くんが支払う必要のある最小の合計金額を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N \leq 2 \times 10^5$
</li>

<li>
$1 \leq C \leq 10^9$
</li>

<li>
$1 \leq a_i \leq b_i \leq 10^9$
</li>

<li>
$1 \leq c_i \leq 10^9$
</li>

<li>
入力に含まれる値は全て整数
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

$N$$C$$a_1$$b_1$$c_1$$\vdots$$a_N$$b_N$$c_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋くんが支払う必要のある最小の合計金額を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2 6
1 2 4
2 2 4

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

10

</div>

<p>
$1$番目のサービスは $1$日目と $2$日目に、 $2$番目のサービスは $2$日目に利用します。

$2$日目のみすぬけプライムに加入すると、 $1$日目に $4$円、 $2$日目に $6$円がかかるため、高橋くんが支払う合計金額は $10$円です。

高橋くんが支払う金額を $10$円より少なくすることはできないため、 $10$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 1000000000
583563238 820642330 44577
136809000 653199778 90962
54601291 785892285 50554
5797762 453599267 65697
468677897 916692569 87409

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

163089627821228

</div>

<p>
すぬけプライムに全く加入しないのが最適です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5 100000
583563238 820642330 44577
136809000 653199778 90962
54601291 785892285 50554
5797762 453599267 65697
468677897 916692569 87409

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

88206004785464

</div>

</section>

</div>

</span>

</span>

</div>
