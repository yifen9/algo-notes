
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
選手 $1$から選手 $2^N$までの $2^N$人の選手がトーナメント形式のプログラミング対決をします。

選手 $i$のレートは $A_i$です。どの $2$人の選手のレートも異なり、$2$人の選手が対戦すると常にレートが高い方が勝ちます。  
</p>

<p>
トーナメント表は完全二分木の形をしています。

より正確には、このトーナメントは以下の要領で行われます。  
</p>

<ul>

<li>

<p>
$i = 1, 2, 3, \dots, N$について順に、以下のことが行われる。  
</p>

<ul>

<li>
各整数 $j (1 \le j \le 2^{N - i})$について、まだ負けたことのない選手のうち、 $2j - 1$番目に番号の小さい選手と $2j$番目に番号の小さい選手が対戦する。  
</li>

</ul>

</li>

</ul>

<p>

<strong>
準優勝
</strong>
する、すなわち最後に行われる対戦において負ける選手の番号を求めてください。  
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \le N \le 16$
</li>

<li>
$1 \le A_i \le 10^9$
</li>

<li>
$A_i$は相異なる
</li>

<li>
入力に含まれる値は全て整数である
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

$N$$A_1$$A_2$$A_3$$\dots$$A_{2^N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>

<strong>
準優勝
</strong>
する選手の番号を出力せよ。  
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

2
1 4 2 5

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
まず選手 $1$と $2$、選手 $3$と $4$がそれぞれ対戦し、レートの大小から選手 $2$と $4$が勝利します。

次に選手 $2$と選手 $4$が対戦し、選手 $4$が勝利してトーナメントが終了します。

最後の対戦で負けるのは選手 $2$なので、$2$を出力します。  
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

2
3 1 5 4

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
まず選手 $1$と $2$、選手 $3$と $4$がそれぞれ対戦し、レートの大小から選手 $1$と $3$が勝利します。

次に選手 $1$と選手 $3$が対戦し、選手 $3$が勝利してトーナメントが終了します。

最後の対戦で負けるのは選手 $1$なので、$1$を出力します。  
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

4
6 13 12 5 3 7 10 11 16 9 8 15 2 1 14 4

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

2

</div>

</section>

</div>

</span>

</span>

</div>
