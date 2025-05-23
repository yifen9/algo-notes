
<div>

<span>

<span>

<p>
配点 : $600$点
</p>

<div>

<section>

### **問題文**

<p>
$N\times N$のマス目があり、それぞれのマスには $0$以上 $5$以下の整数が書かれています。
上から $i$行目、左から $j$列目 $(1\leq i,j\leq N)$のマスをマス $(i,j)$と表し、マス $(i,j)$には整数 $A _ {i,j}$が書かれています。
</p>

<p>
このマス目に対して、次の操作を $0$回以上好きな回数行います。
</p>

<ul>

<li>
$0$が書かれているマス $(i,j)$と $1$以上 $5$以下の整数 $x$を $1$つ選ぶ。選ばれたマスに書かれている数を $x$に変更する。
</li>

</ul>

<p>
操作が終了したあと、マス $(i,j)$に書かれている整数を $B _ {i,j}$とします。
マス目の
<strong>
コスト
</strong>
を、隣接するマスに書かれた整数の差の二乗の総和とします。つまり、コストは次の式で表されます。
</p>

<p>

</p>

<center>
$\displaystyle\sum _ {i=1} ^ N\sum _ {j=1} ^ {N-1}(B _ {i,j}-B _ {i,j+1})^2+\sum _ {i=1} ^ {N-1}\sum _ {j=1} ^ N(B _ {i,j}-B _ {i+1,j})^2$
</center>

<p>

</p>

<p>
操作が終了したあとのマス目としてありえるもののうち、コストが最小のものを求めてください。
</p>

<p>
ただし、コストが最小となるマス目の状態が複数ある場合、そのうちどれを出力しても構いません。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1\leq N\leq20$
</li>

<li>
$0\leq A _ {i,j}\leq 5\ (1\leq i\leq N,1\leq j\leq N)$
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
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$N$$A _ {1,1}$$A _ {1,2}$$\ldots$$A _ {1,N}$$A _ {2,1}$$A _ {2,2}$$\ldots$$A _ {2,N}$$\vdots$$\ \vdots$$\ddots$$\vdots$$A _ {N,1}$$A _ {N,2}$$\ldots$$A _ {N,N}$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
$N$行に出力せよ。
$i$行目 $(1\leq i\leq N)$にはコストが最小になるように操作を行ったときの $B _ {i,1},B _ {i,2},\ldots,B _ {i,N}$をこの順に、空白を区切りとして出力せよ。
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
0 2 1 0 4
4 0 0 0 2
3 1 0 3 0
1 0 0 0 0
0 0 2 0 5

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

3 2 1 2 4
4 2 2 2 2
3 1 2 3 3
1 1 2 3 4
1 1 2 3 5

</div>

<p>
与えられるマス目は以下のようになります。
</p>

<p>

<img src="https://img.atcoder.jp/abc347/0748d5e94455d9f4c627617596f61af6.png">

</img>

</p>

<p>
図の右の状態になるように操作を行うことで、コストが $2 ^ 2\times6+1 ^ 2\times18+0 ^ 2\times16=42$となります。
</p>

<p>
コストが $41$以下になることはないので、この状態に対応する $B _ {i,j}$を出力することで正解になります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

3
0 0 0
0 0 0
0 0 0

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0 0 0
0 0 0
0 0 0

</div>

<p>
はじめからコストが $0$なので、操作を行わないことでコストが最小になります。
</p>

<p>
操作が終了した後のマスの状態のうちコストが最小のものが複数ある場合どれを出力しても構わないため、
</p>

<div>

2 2 2
2 2 2
2 2 2

</div>

<p>
のように出力しても正解となります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

10
1 0 0 3 0 0 0 0 0 0
1 0 0 4 0 1 0 5 0 0
0 0 0 0 0 0 2 0 3 0
0 0 2 0 0 0 4 0 0 3
0 3 4 3 3 0 3 0 0 5
4 1 3 4 4 0 2 1 0 0
2 0 1 0 5 2 0 1 1 5
0 0 0 5 0 0 3 2 4 0
4 5 0 0 3 2 0 3 5 0
4 0 0 5 0 0 0 3 0 5

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

1 2 3 3 3 2 3 4 4 4
1 2 3 4 3 1 3 5 4 4
2 2 2 3 3 2 2 3 3 3
2 2 2 3 3 3 4 3 3 3
3 3 4 3 3 3 3 2 3 5
4 1 3 4 4 3 2 1 2 4
2 2 1 4 5 2 2 1 1 5
3 3 3 5 4 3 3 2 4 5
4 5 4 4 3 2 3 3 5 5
4 4 4 5 4 3 3 3 4 5

</div>

</section>

</div>

</span>

</span>

</div>
