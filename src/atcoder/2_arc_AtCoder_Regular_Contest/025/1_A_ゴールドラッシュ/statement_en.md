
<div>

<div>

<div>

<section>

### **問題文**

<p>
stove 君はとある平面世界の住人である。
</p>

<p>
ある日 stove 君は多くの金が取れる鉱山を砂漠とジャングルに発見した。
</p>

<p>
stove 君は $7$日間かけて鉱山採掘に取り組むことにした。
</p>

<p>
砂漠とジャングルは遠い位置関係にあるので、それぞれの日にはどちらか一方の鉱山でしか採掘できない。
</p>

<p>
その日の天候、気分に応じて採掘量が鉱山ごとに変化してしまうので、どちらの鉱山を選ぶべきかがその日毎に異なる場合がある。
</p>

<p>
それぞれの日においての採掘量が分かっているとき、最適に鉱山を選んだ場合に得られる金の量がいくらかを求めるプログラムを作成せよ。
</p>

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

$D_1$$D_2$.. $D_7$$J_1$$J_2$.. $J_7$
</div>

<ul>

<li>
$1$行目には、砂漠の鉱山に関する情報を表す $7$個の整数が空白区切りで書かれている。このうち左から $i$番目の整数 $D_i (0 ≦ D_i ≦ 2,000)$は、$i$日目に砂漠の鉱山で採掘を行った場合に得られる金の量が $D_i$キログラムであることを表す。
</li>

<li>
$2$行目にはジャングルの鉱山に関する情報を表す $7$個の整数が空白区切りで書かれている。このうち左から $i$番目の整数 $J_i (0 ≦ J_i ≦ 2,000)$は、$i$日目にジャングルの鉱山で採掘を行った場合に得られる金の量が $J_i$キログラムであることを表す。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
最適に鉱山を選んだ場合に得られる金の量を $1$行に出力せよ。出力の末尾にも改行を入れること。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

<div>

4 2 0 5 6 2 5
6 1 4 3 6 4 6

</div>

</section>

</div>

<div>

<section>

### **出力例1**

<div>

33

</div>

<p>
以下のように行動すれば良い。
</p>

<ul>

<li>
$1$日目にはジャングルの鉱山を選び、$6$キログラムの金を得る。
</li>

<li>
$2$日目には砂漠の鉱山を選び、$2$キログラムの金を得る。
</li>

<li>
$3$日目にはジャングルの鉱山を選び、$4$キログラムの金を得る。
</li>

<li>
$4$日目には砂漠の鉱山を選び、$5$キログラムの金を得る。
</li>

<li>
$5$日目には砂漠の鉱山を選び、$6$キログラムの金を得る。
</li>

<li>
$6$日目にはジャングルの鉱山を選び、$4$キログラムの金を得る。
</li>

<li>
$7$日目にはジャングルの鉱山を選び、$6$キログラムの金を得る。
</li>

</ul>

<p>
このように行動すると、$6$+ $2$+ $4$+ $5$+ $6$+ $4$+ $6$= $33$キログラムの金を得ることができる。なお、$5$日目にジャングルの鉱山を選んでも同じ量を達成することができる。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

<div>

1 2 3 4 5 6 7
2 3 4 5 6 7 8

</div>

</section>

</div>

<div>

<section>

### **出力例2**

<div>

35

</div>

<p>
ジャングル一択である。
</p>

</section>

</div>

---

<div>

<section>

### **入力例3**

<div>

0 0 0 0 0 0 0
0 0 0 0 0 0 0

</div>

</section>

</div>

<div>

<section>

### **出力例3**

<div>

0

</div>

<p>
この例の場合、金を得ることができない。金が出るという話はなんだったのだろうか。
</p>

</section>

</div>

---

<div>

<section>

### **入力例4**

<div>

8 3 0 2 5 25 252
252 252 2 5 2 5 2

</div>

</section>

</div>

<div>

<section>

### **出力例4**

<div>

793

</div>

</section>

</div>

</div>

</div>
