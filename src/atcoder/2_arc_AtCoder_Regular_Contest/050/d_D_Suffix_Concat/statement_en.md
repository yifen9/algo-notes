
<div>

<section>

### **問題文**

<p>
長さ $N$の文字列 $S$が与えられます。各 $i$($1≦i≦N$) について、$S$の $i$文字目から $N$文字目までの部分文字列を $S_i$と呼ぶことにします。
</p>

<p>
$S_1$，$S_2$，$...$，$S_N$を好きな順番で連結して得られる文字列のうち、辞書順で最小のものを求めてください。
</p>

</section>

<section>

### **制約**

<ul>

<li>
$1≦N≦10^5$
</li>

<li>
$S$の長さは $N$である。
</li>

<li>
$S$は英小文字のみからなる。
</li>

</ul>

</section>

---

<div>

<section>

### **入力**

<p>
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$S$
</div>

</section>

<section>

### **出力**

<p>
$N$行出力せよ。$i$行目には $p_i$を出力せよ。
</p>

<p>
ただし、$(p_1，p_2，...，p_N)$は、$1$から $N$までの順列であって、次の条件を満たすものである。
</p>

<ul>

<li>
$S_{p_1}$，$S_{p_2}$，$...$，$S_{p_N}$をこの順番で連結して得られる文字列が、辞書順で最小である。
</li>

</ul>

<p>
$(p_1，p_2，...，p_N)$が複数通りある場合、どれを出力してもよい。
</p>

</section>

</div>

---

<section>

### **入力例1**

<div>

3
arc

</div>

</section>

<section>

### **出力例1**

<div>

1
3
2

</div>

<p>
`arc`，`c`，`rc`の順番で連結して得られる `arccrc`が、辞書順で最小です。
</p>

</section>

---

<section>

### **入力例2**

<div>

2
zz

</div>

</section>

<section>

### **出力例2**

<div>

1
2

</div>

<p>
他には、$2$，$1$の順番で出力してもよいです。
</p>

</section>

---

<section>

### **入力例3**

<div>

5
abaab

</div>

</section>

<section>

### **出力例3**

<div>

3
1
4
2
5

</div>

</section>

</div>
