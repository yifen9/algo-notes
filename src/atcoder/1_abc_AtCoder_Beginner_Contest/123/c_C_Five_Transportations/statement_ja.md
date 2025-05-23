
<div>

<span>

<span>

<p>
﻿配点: $300$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder 社は成長し、2028 年になってついに $6$つの都市 (都市 $1, 2, 3, 4, 5, 6$) からなる AtCoder 帝国を作りました！  
</p>

<p>
AtCoder 帝国には $5$つの交通機関があります。
</p>

<ul>

<li>
電車：都市 $1$から $2$まで $1$分で移動する。$1$つの電車には $A$人まで乗ることができる。
</li>

<li>
バス：都市 $2$から $3$まで $1$分で移動する。$1$つのバスには $B$人まで乗ることができる。
</li>

<li>
タクシー：都市 $3$から $4$まで $1$分で移動する。$1$つのタクシーには $C$人まで乗ることができる。
</li>

<li>
飛行機：都市 $4$から $5$まで $1$分で移動する。$1$つの飛行機には $D$人まで乗ることができる。
</li>

<li>
船：都市 $5$から $6$までを $1$分で移動する。$1$つの船には $E$人まで乗ることができる。
</li>

</ul>

<p>
それぞれの交通機関は、各整数時刻 ($0, 1, 2, 3, ...$) に、都市から出発します。

いま、$N$人のグループが都市 $1$におり、全員都市 $6$まで移動したいです。全員が都市 $6$に到着するまでに最短で何分かかるでしょうか？

なお、乗り継ぎにかかる時間を考える必要はありません。  
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq N, A, B, C, D, E \leq 10^{15}$
</li>

<li>
入力中の値はすべて整数である。
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

$N$$A$$B$$C$$D$$E$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
全員が都市 $6$に移動するのに必要な最小の時間を分単位で出力せよ。  
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
3
2
4
3
5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

7

</div>

<p>
例えば、次のような移動方法が考えられます。

はじめ、次の画像のように、$N = 5$人が都市 $1$にいます。  
</p>

<p>

<img src="https://img.atcoder.jp/ghi/9c306138eddc8a2e08acfa5da19bdfe8.png">

</img>

</p>

<p>
$1$分後までに、$3$人が都市 $1$から都市 $2$に電車で移動します。ここで、電車は一度に $3$人までしか運べないことに注意してください。  
</p>

<p>

<img src="https://img.atcoder.jp/ghi/bd30b5ab37fc06951c9f5256bb974e4f.png">

</img>

</p>

<p>
$2$分後までに、残り $2$人が都市 $1$から都市 $2$に電車で移動し、都市 $2$にいた $3$人のうち $2$人がバスで都市 $3$に移動します。ここで、バスは一度に $2$人までしか運べないことに注意してください。  
</p>

<p>

<img src="https://img.atcoder.jp/ghi/50f2e49a770a30193fc53588ec8475b3.png">

</img>

</p>

<p>
$3$分後までに、$2$人が都市 $2$から都市 $3$にバスで移動し、$2$人が都市 $3$から都市 $4$にタクシーで移動します。    
</p>

<p>

<img src="https://img.atcoder.jp/ghi/d6d80dc50abe58190905c8c5ea6ba345.png">

</img>

</p>

<p>
それ以降は、まだ都市 $6$に到着していない人が止まらずに移動し続けると、全員が $7$分で都市 $6$に着くことができます。

また、$6$分以内で全員が都市 $6$に着く方法はありません。  
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

10
123
123
123
123
123

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

5

</div>

<p>
どの交通機関も $N = 10$人を $1$回で運ぶことができます。

したがって、全員が止まらずに移動し続ければ $5$分で都市 $6$に着くことができます。  
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10000000007
2
3
5
7
11

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

5000000008

</div>

<p>
入力・出力が $32$ビット整数型に収まらない可能性があることに注意してください。  
</p>

</section>

</div>

</span>

</span>

</div>
