
<div>

<span>

<span>

<p>
配点 : $250$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder 王国では、これから $N$日間のお祭りが開催されます。そのうち、$A_1$日目、$A_2$日目、$\dots$、$A_M$日目の $M$日では花火が上がります。ここで、お祭りの最終日には花火が上がることが保証されます。(つまり、$A_M=N$が保証されます。)
</p>

<p>
$i=1,2,\dots,N$に対して、以下の問題を解いてください。
</p>

<ul>

<li>
$i$日目以降で初めて花火が上がるのは、$i$日目から数えて何日後か？ただし、$i$日目に花火が上がる場合 $0$日後とする。
</li>

</ul>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \le M \le N \le 2 \times 10^5$
</li>

<li>
$1 \le A_1 < A_2 < \dots < A_M = N$
</li>

<li>
入力は全て整数
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

$N$$M$$A_1$$A_2$$\dots$$A_M$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$N$行出力せよ。
</p>

<p>
$i(1 \le i \le N)$行目には、$i$日目以降で初めて花火が上がるのは、$i$日目から数えて何日後かを整数として出力せよ。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

3 2
2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

1
0
0

</div>

<p>
AtCoder 王国ではお祭りを $3$日間開催し、$2,3$日目に花火が上がります。
</p>

<ul>

<li>
$1$日目以降で初めて花火が上がるのは $2$日目なので、$1$日目から数えて $1$日後です。
</li>

<li>
$2$日目以降で初めて花火が上がるのは $2$日目なので、$2$日目から数えて $0$日後です。
</li>

<li>
$3$日目以降で初めて花火が上がるのは $3$日目なので、$3$日目から数えて $0$日後です。
</li>

</ul>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

8 5
1 3 4 7 8

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0
1
0
0
2
1
0
0

</div>

</section>

</div>

</span>

</span>

</div>
