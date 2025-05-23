
<div>

<span>

<span>

<p>
配点 : $500$点
</p>

<div>

<section>

### **問題文**

<p>
AtCoder さんはバレンタインデーの日に $N$人の友達にチョコレートを配ることにしました。$i$人目 $(1 \leq i \leq N)$の友達には、大きさ $2^{A_i} \times 2^{A_i}$の正方形の板チョコを渡したいです。
</p>

<p>
ここで、AtCoder さんは大きさ $H \times W$の長方形の板チョコを $1$枚仕入れました。この板チョコは切れ目によって縦 $H$行・横 $W$列のマス目状に区切られており、その各マスは大きさ $1 \times 1$の正方形になっています。
</p>

<p>
板チョコを切れ目に沿っていくつかのピースに分割することにより、友達に渡す板チョコをすべて得ることが可能か判定してください。なお、余るピースがあっても構いません。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1 \leq H \leq 10^9$
</li>

<li>
$1 \leq W \leq 10^9$
</li>

<li>
$1 \leq N \leq 1000$
</li>

<li>
$0 \leq A_i \leq 25 \ (1 \leq i \leq N)$
</li>

<li>
入力はすべて整数
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
入力は以下の形式で標準入力から与えられます。  
</p>

<div>

$H$$W$$N$$A_1$$A_2$$\cdots$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
可能ならば `Yes`、不可能ならば `No`と出力してください。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

4 4 4
1 0 0 1

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

Yes

</div>

<p>
以下の図のように大きさ $4 \times 4$の板チョコを分割することで、大きさ $2 \times 2, 1 \times 1, 1 \times 1, 2 \times 2$のピースを得ることができます。
</p>

<p>

<img src="https://img.atcoder.jp/arc172/46f487245ec72edd225e4e6b36cb7600.png">

</img>

</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5 7 6
0 1 0 2 0 1

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

Yes

</div>

<p>
以下の図のように大きさ $5 \times 7$の板チョコを分割することで、大きさ $1 \times 1, 2 \times 2, 1 \times 1, 4 \times 4, 1 \times 1, 2 \times 2$のピースを得ることができます。
</p>

<p>

<img src="https://img.atcoder.jp/arc172/4c2ab4192df6687b23e2d68d318868bb.png">

</img>

</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

3 2 7
0 0 0 0 0 0 0

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

No

</div>

<p>
大きさ $3 \times 2$の板チョコから、大きさ $1 \times 1$のピースを $7$つ得ることは不可能です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 4**

<div>

11 11 2
2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 4**

<div>

No

</div>

<p>
大きさ $11 \times 11$の板チョコから、大きさ $4 \times 4, 8 \times 8$のピースを両方得ることは不可能です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 5**

<div>

777 777 6
8 6 9 1 2 0

</div>

</section>

</div>

<div>

<section>

### **出力例 5**

<div>

Yes

</div>

</section>

</div>

</span>

</span>

</div>
