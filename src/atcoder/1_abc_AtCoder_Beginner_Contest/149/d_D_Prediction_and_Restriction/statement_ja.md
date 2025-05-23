
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
高橋君は、ゲームセンターで「じゃんけんバトル」というゲームをプレイすることにしました。このゲームのルールは以下の通りです。
</p>

<ul>

<li>
プレイヤーは筐体と $N$回じゃんけんを行う (あいこの場合も $1$回のジャンケンと数える)。
</li>

<li>
プレイヤーがじゃんけんで勝った場合、プレイヤーは出した手に応じて以下のスコアを得る (あいこや負けは $0$点)。
<ul>

<li>
グーで勝った場合、 $R$点
</li>

<li>
チョキで勝った場合、 $S$点
</li>

<li>
パーで勝った場合、 $P$点
</li>

</ul>

</li>

<li>
ただし、ちょうど $K$回前のじゃんけんで出した手と同じ手を出すことはできない。( $K$回目までのじゃんけんでは好きな手を出せる。)
</li>

</ul>

<p>
筐体は、各回のジャンケンで出す手をゲーム開始前に決定します。能力者である高橋君は、ゲーム開始前にこれをすべて読み取りました。
</p>

<p>
高橋君が読み取った情報は文字列 $T$として与えられます。$T$の $i(1 \leq i \leq N)$文字目が `r`のときは $i$回目のじゃんけんで筐体がグーを出すことを、`s`のときはチョキを出すことを、`p`のときはパーを出すことを表します。
</p>

<p>
高橋君が $N$回のじゃんけんで出す手を最適に選んだとき、ゲーム終了までに最大で合計何点を得られるでしょうか。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 \leq N \leq 10^5$
</li>

<li>
$1 \leq K \leq N-1$
</li>

<li>
$1 \leq R,S,P \leq 10^4$
</li>

<li>
$N,K,R,S,P$は全て整数である。
</li>

<li>
$|T| = N$
</li>

<li>
$T$に含まれる文字は `r`, `s`, `p`のいずれかである。
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

$N$$K$$R$$S$$P$$T$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
得られる最大の合計スコアを出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

5 2
8 7 6
rsrpr

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

27

</div>

<p>
筐体は、{グー、チョキ、グー、パー、グー} と手を出します。
</p>

<p>
これに対して、例えば {パー、グー、グー、チョキ、パー} と出せば、$27$点を獲得できます。
これより大きい点は獲得できないので、$27$を出力します。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7 1
100 10 1
ssssppr

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

211

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

30 5
325 234 123
rspsspspsrpspsppprpsprpssprpsr

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

4996

</div>

</section>

</div>

</span>

</span>

</div>
