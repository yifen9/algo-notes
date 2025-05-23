
<div>

<div>

### **問題文**

<section>
AtCoder社の社員である青木さんの給料は以下のように決められます。

ある月に、青木さんがタスクをこなした数を $x$とします。

この月の給料は、$1$から $x$までの整数が $1$面ずつに書かれた $x$面ダイスを振って出た目 ${}\times{}$$1$万円がもらえます。

ただし、このダイスは、どの面が出る確率も等しく $1/x$です。

青木くんは、暮らしていくのに十分な給料が得られるかどうかが心配で、平均いくら程度給料がもらえるか調べたいです。

毎月、青木くんはちょうど $N$個のタスクをこなすこととし、毎月の給料の平均値を求めるプログラムを書いてください。


</section>

</div>

---

<div>

<section>

<span>

<p>
A問題では、提出した結果、全てのテストに対する判定がWAまたはREになってしまった場合のみ、質問タブにて可能な限りのトラブルシューティングを受け付けます。
</p>

<p>
提出結果のURLを添えて、お気軽にご質問ください。
</p>

<p>
また、ページ下部、「よくある質問」も、併せてご活用ください。
</p>

</span>

</section>

</div>

---

<div>

### **入力**

<section>
入力は以下の形式で標準入力から与えられる。

<div>

$N$
</div>

<ol>

<li>
$1$行目には、整数で、青木くんが毎月こなすタスクの数 $N\ (4 ≦ N ≦ 100)$が与えられる。
</li>

</ol>

</section>

</div>

---

<div>

### **出力**

<section>
青木くんがもらえる毎月の給料（単位は円）の平均値を $1$行で出力せよ。

絶対誤差、または、相対誤差が $10^{-6}$以下であれば許容される。

また、出力の末尾には改行を入れること。
	
</section>

</div>

---

<div>

### **入力例 1**

<section>

```
6
```

</section>

</div>

<div>

### **出力例 1**

<section>

```
35000
```

<ul>

<li>
$1$万円から $6$万円がもらえる確率がそれぞれ $1/6$であるので、答えは
</li>

<ul>

<li>
$10000 \times (1/6) + 20000 \times (1/6) + 30000 \times (1/6) + 40000 \times (1/6) + 50000 \times (1/6) + 60000 \times (1/6) = 35000$
</li>

</ul>

<li>
となります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 2**

<section>

```
91
```

</section>

</div>

<div>

### **出力例 2**

<section>

```
460000
```

</section>

</div>

</div>
