
<div>

<span>

<span>

<p>
配点 : $200$点
</p>

<div>

<section>

### **問題文**

<p>
パティシエの赤木さんは、「お菓子の素」という粉のみを材料として $N$種類のドーナツを作ることができます。これらのドーナツはドーナツ $1$、ドーナツ $2$、$...$、ドーナツ $N$と呼ばれます。ドーナツ $i$$(1 ≤ i ≤ N)$を $1$個作るには、お菓子の素 $m_i$グラムを消費する必要があります。なお、$0.5$個など整数でない個数のドーナツを作ることはできません。
</p>

<p>
いま、赤木さんはお菓子の素を $X$グラム持っています。これを使って、今夜のパーティーに向けて可能な限りたくさんのドーナツを作ることにしました。ただし、来客の味の好みは様々なので、次の条件を守ることにしました。
</p>

<ul>

<li>
$N$種類のドーナツそれぞれを少なくとも $1$個は作る。
</li>

</ul>

<p>
このとき、最大で何個のドーナツを作ることができるでしょうか？お菓子の素を使い切る必要はありません。また、この問題の制約のもとでは、条件を守ることは必ず可能です。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 ≤ N ≤ 100$
</li>

<li>
$1 ≤ m_i ≤ 1000$
</li>

<li>
$m_1 + m_2 + ... + m_N ≤ X ≤ 10^5$
</li>

<li>
入力中のすべての値は整数である。
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

$N$$X$$m_1$$m_2$$:$$m_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
条件を守って作ることのできるドーナツの最大の個数を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 1000
120
100
140

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

9

</div>

<p>
$1000$グラムのお菓子の素があり、赤木さんは $3$種類のドーナツを作ることができます。$3$種類すべてのドーナツを $1$個ずつ作ると、$120 + 100 + 140 = 360$グラムのお菓子の素を消費します。このとき残る $640$グラムのお菓子の素から、ドーナツ $2$をさらに $6$個作ることができます。以上で合計 $9$個のドーナツを作ることができ、これが最大です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

4 360
90
90
90
90

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4

</div>

<p>
$4$種類すべてのドーナツを $1$個ずつ作った時点でお菓子の素が尽きます。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

5 3000
150
130
150
130
110

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

26

</div>

</section>

</div>

</span>

</span>

</div>
