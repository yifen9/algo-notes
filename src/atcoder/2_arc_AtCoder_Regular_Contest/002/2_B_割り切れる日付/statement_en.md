
<div>

<div>

### **問題文**

<section>
高橋君は割り切れる日付が好きです。

割り切れる日付とは、年÷月÷日の計算結果が整数になる日付のことです。

例えば今日の日付は $2012$年 $5$月 $2$日ですが、
$2012÷5÷2=201.2$となり整数ではないので、今日の日付は割り切れる日付ではありません。



高橋君は割り切れる日付が好きでたまらないので、次の割り切れる日付を心待ちにして、毎日今日が割り切れる日付かどうかをチェックしてしまいます。

彼に少しでも多くの仕事をしてもらうために、入力として与えられた日付以降で最初に来る割り切れる日付を求めなさい。

ただし、入力として与えられた日付が割り切れる日付だった場合は、与えられた日付が答えになります。

</section>

</div>

---

<div>

<div>

### **入力**

<section>
入力は以下の形式で標準入力から与えられる。

<div>

$Y/M/D$
</div>

<ul>

<li>
グレゴリオ暦(現在、日本で一般的に使われている暦)に従って年を表す $Y$、月を表す $M$、日を表す $D$が `/`で区切られて $1$行で与えられる。
</li>

<li>
$Y$は $4$桁、$M$と $D$は $0$埋めされた $2$桁の整数である（$M$と $D$は、$1$桁の数の場合も $1$桁目に `0`をつけて $2$桁にする）。
	
</li>

<li>
与えられる日付は $1000/01/01$以降、$2999/12/31$以前とする。
</li>

</ul>

</section>

</div>

<div>

### **出力**

<section>
入力として与えられた日付以降で最初に割り切れる日付を、入力と同じ形式で標準出力に $1$行で出力せよ。

ただし、入力として与えられた日付が割り切れる日付だった場合は、入力と同じ日付を出力すること。

なお、最後には改行を出力せよ。

</section>

</div>

</div>

---

<div>

### **入力例 1**

<section>

```
2012/05/02
```

</section>

</div>

<div>

### **出力例 1**

<section>

```
2013/01/01
```

<ul>

<li>
$2012/05/02$は割り切れる日付ではないので、$2012/05/03$から $2012/12/31$の間の日付に割り切れる日付はないので $2013/01/01$が答えとなります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 2**

<section>

```
2020/05/02
```

</section>

</div>

<div>

### **出力例 2**

<section>

```
2020/05/02
```

<ul>

<li>
入力として与えられた日付は割り切れる日付なので、$2020/05/02$が答えとなります。
</li>

</ul>

</section>

</div>

---

<div>

### **入力例 3**

<section>

```
2088/02/28
```

</section>

</div>

<div>

### **出力例 3**

<section>

```
2088/02/29
```

</section>

<ul>

<li>
$2088$年はうるう年なので、$2$月 $29$日が存在します。
</li>

</ul>

</div>

</div>
