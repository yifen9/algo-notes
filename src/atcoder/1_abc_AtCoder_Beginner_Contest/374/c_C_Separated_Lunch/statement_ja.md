
<div>

<span>

<span>

<p>
配点 : $300$点
</p>

<div>

<section>

### **問題文**

<p>
キーエンス本社に勤務する人数が増えてきたので、本社に存在する部署を $2$つのグループに分け、昼休みの時間帯を分けることにしました。
</p>

<p>
キーエンス本社には $N$個の部署が存在し、$i$番目 $(1\leq i\leq N)$の部署に所属する人数は $K_i$人です。  
</p>

<p>
それぞれの部署をグループ $A$, $B$のいずれか一方に割り当て、グループごとに同時に昼休みをとり、
かつグループ $A$, $B$の昼休みの時間が重ならないようにしたとき、同時に昼休みをとる最大人数としてあり得る最小の値を求めてください。

すなわち、グループ $A$に割り当てられた部署に所属する人数の合計とグループ $B$に割り当てられた部署に所属する人数の合計
のうち大きい方の値としてあり得る最小の値を求めてください。  
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2\leq N \leq 20$
</li>

<li>
$1\leq K_i \leq 10^8$
</li>

<li>
入力はすべて整数
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

$N$$K_1$$K_2$$\ldots$$K_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
同時に昼休みを取る最大人数としてあり得る最小の値を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5
2 3 5 10 12

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

17

</div>

<p>
$1,2,5$番目の部署をグループ $A$に、$3,4$番目の部署をグループ $B$に割り当てたとき、
グループ $A$に割り当てられた部署に所属する人数の合計は $2+3+12=17$、
グループ $B$に割り当てられた部署に所属する人数の合計は $5+10=15$となり、
このとき同時に昼休みを取る最大人数は $17$となります。
</p>

<p>
一方で、グループ $A,B$それぞれに割り当てられた部署に所属する人数の合計がいずれも $16$以下になるように
部署を割り当てることはできないため、$17$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2
1 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

1

</div>

<p>
同一人数の部署が複数存在する可能性もあります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

6
22 25 26 45 22 31

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

89

</div>

<p>
例えば、$1,4,5$番目の部署をグループ $A$に、$2,3,6$番目の部署をグループ $B$に割り当てたとき同時に昼休みを取る最大人数は $89$となります。
</p>

</section>

</div>

</span>

</span>

</div>
