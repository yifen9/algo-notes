
<div>

<span>

<span>

<p>
配点 : $1400$点
</p>

<div>

<section>

### **問題文**

<p>
$N$頂点からなる木があり、頂点には $1$から $N$の番号がついています。
また、 $N-1$本の辺の内、$i$番目の辺は頂点 $a_i$と頂点 $b_i$を結んでいます。
</p>

<p>
はじめ、各辺は青色に塗られています。
そこで、高橋君は以下の操作を $N-1$回行い、赤色の木に作り替えることにしました。
</p>

<ul>

<li>
青色の辺のみからなるパスを一つ選び、そのパス上の辺を一つ取り除く。
</li>

<li>
その後、初めに選んだパスの両端点間に赤色の辺を追加する。
</li>

</ul>

<p>
最終的に、各 $i$に対し、頂点 $c_i$と頂点 $d_i$を結ぶ赤い辺が存在するような $N$頂点の木に作り替えたいです。
</p>

<p>
これが可能であるかどうか判定してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$2 ≦ N ≦ 10^5$
</li>

<li>
$1 ≦ a_i,b_i,c_i,d_i ≦ N$
</li>

<li>
$a_i ≠ b_i$
</li>

<li>
$c_i ≠ d_i$
</li>

<li>
入力で与えられるグラフはどちらも木である。
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

$N$$a_1$$b_1$:
$a_{N-1}$$b_{N-1}$$c_1$$d_1$:
$c_{N-1}$$d_{N-1}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
高橋君が木を目標の木に作り替えられるならば `YES`を、作り替えられないならば `NO`を出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3
1 2
2 3
1 3
3 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

YES

</div>

<p>
高橋君は以下の手順で目標の赤い木を作ることができます。
</p>

<ul>

<li>
まず、頂点 $1$と頂点 $3$を結ぶパスを選び、青い辺 $1-2$を削除する。そして、赤い辺 $1-3$を追加する。
</li>

<li>
次に、頂点 $2$と頂点 $3$を結ぶパスを選び、青い辺 $2-3$を削除する。そして、赤い辺 $2-3$を追加する。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
1 2
2 3
3 4
4 5
3 4
2 4
1 4
1 5

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

YES

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

6
1 2
3 5
4 6
1 6
5 1
5 3
1 4
2 6
4 3
5 6

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

NO

</div>

</section>

</div>

</span>

</span>

</div>
