
<div>

<span>

<span>

<p>
配点 : $1200$点
</p>

<div>

<section>

### **問題文**

<p>
$1$から $N$までの番号のついた $N$個のランプと，$1$から $N$までの番号のついた $N$個のボタンがあります．
最初，ランプ $1,2,\cdots,A$は点灯しており，それ以外のランプは点灯していません．
</p>

<p>
すぬけくんとりんごさんは，次のようなゲームを行うことにしました．
</p>

<ul>

<li>

<p>
まず，りんごさんが $(1,2,\cdots,N)$の順列 $(p_1,p_2,\cdots,p_N)$を生成する．
この順列は $N!$通りの中から一様ランダムに選ばれる．
すぬけくんは，この順列を知らされない．
</p>

</li>

<li>

<p>
次に，すぬけくんは，以下の操作を好きなだけ繰り返す．
</p>

<ul>

<li>
現在点灯しているランプを $1$つ選ぶ（そのようなランプがない場合は操作を行えない）．
選んだランプの番号を $i$とする．
そして，ボタン $i$を押す．
すると，ランプ $p_i$の状態が反転する．つまり，ランプ $p_i$がもともと点灯しているなら消灯し，もともと点灯していないなら点灯する．
</li>

</ul>

</li>

</ul>

<p>
すぬけくんは，常に，どのランプが点灯しているかを知ることができます．
すぬけくんの勝利条件は，すべてのランプを点灯した状態にすることです．
これが不可能と判明した時点ですぬけくんは負けを認めます．
すぬけくんが最適に行動するとき，勝率はいくらでしょうか？
</p>

<p>
すぬけくんの勝率を $w$とした時，$w \times N!$は整数になります．
$w \times N!$を $10^9+7$で割ったあまりを求めてください．
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 10^7$
</li>

<li>
$1 \leq A \leq \min(N-1,5000)$
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
入力は以下の形式で標準入力から与えられる．
</p>

<div>

$N$$A$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
すぬけくんの勝率を $w$とした時，$w \times N!$を $10^9+7$で割ったあまりを出力せよ．
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

2

</div>

<p>
すぬけくんはまず，ボタン $1$を押します．
ランプ $1$が消灯した場合はすぬけくんの負けです．
そうでないときは，新しく点灯したランプに対応するボタンを押します．
ここで残っていたランプが点灯すれば，すぬけくんの勝ちです．
逆に，ランプ $1$が消灯した場合，すぬけくんの負けです．
このゲームの勝率は $1/3$なので，$(1/3)\times 3!=2$を出力します．
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

3

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8 4

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

16776

</div>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

9999999 4999

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

90395416

</div>

</section>

</div>

</span>

</span>

</div>
