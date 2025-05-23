
<div>

<span>

<span>

<p>
配点 : $2000$点
</p>

<div>

<section>

### **問題文**

<p>
表と裏が区別できるカードが $N$枚あります。
このうち $i$枚目のカードには、表に整数 $A_i$が、裏に整数 $B_i$が書かれています。
これらのカードの山を $X$と呼びます。
また、別のカードが $N+1$枚あります。
このうち $i$番目のカードには、表に整数 $C_i$が書かれています。
裏には何も書かれていません。
これらのカードの山を $Y$と呼びます。
</p>

<p>
あなたはこれから、$Q$回ゲームを行います。
すべてのゲームは独立に行われます。
$i$回目のゲームでは、表と裏の区別できる新しいカードが渡されます。
このカードの表には整数 $D_i$が、裏には整数 $E_i$が書かれています。
これと $X$を合わせて、$N+1$枚のカードの山 $Z$を作ります。
その後、$Z$のカードと $Y$のカード $1$枚ずつからなるペアを、$N+1$個作ります。
どのカードも、必ずいずれか一つのペアに属している必要があります。
この時、$Z$のカードそれぞれについて、「使用する面」を決めます。
その際、どのペアについても、
</p>

<p>
$Z$のカードの「使用する面」に書かれている整数 $\leq $$Y$のカードに書かれている整数
</p>

<p>
が成り立っている必要があります。
どのようにペアを作って「使用する面」を決めてもこの条件を満たすことができない場合、
ゲームのスコアは $-1$です。
そうでない場合ゲームのスコアは、「使用する面」が表である $Z$のカードの枚数です。
</p>

<p>
すべてのゲームについて、ゲームのスコアの最大値を求めてください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
入力は全て整数である
</li>

<li>
$1 \leq N \leq 10^5$
</li>

<li>
$1 \leq Q \leq 10^5$
</li>

<li>
$1 \leq A_i ,B_i ,C_i ,D_i ,E_i \leq 10^9$
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

$N$$A_1$$B_1$$A_2$$B_2$$:$$A_N$$B_N$$C_1$$C_2$$..$$C_{N+1}$$Q$$D_1$$E_1$$D_2$$E_2$$:$$D_Q$$E_Q$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
それぞれのゲームについて、そのゲームのスコアの最大値を $1$行に出力せよ。
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
4 1
5 3
3 1
1 2 3 4
3
5 4
4 3
2 3

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

0
1
2

</div>

<p>
例えば $3$回目のゲームでは、$Z$のカードは、$(4,1),(5,3),(3,1),(2,3)$となります。
これらのカードの使用する面をそれぞれ、表、裏、裏、表、として、$Y$のカードの $4,3,1,2$番目のものとそれぞれペアにすれば、
条件を満たし、スコアが $2$になります。スコアを $3$以上にはできないので、$2$が答えになります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

5
7 1
9 7
13 13
11 8
12 9
16 7 8 6 9 11
7
6 11
7 10
9 3
12 9
18 16
8 9
10 15

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

4
3
3
1
-1
3
2

</div>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

9
89 67
37 14
6 1
42 25
61 22
23 1
63 60
93 62
14 2
67 96 26 17 1 62 56 92 13 38
11
93 97
17 93
61 57
88 62
98 29
49 1
5 1
1 77
34 1
63 27
22 66

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

7
9
8
7
7
9
9
10
9
7
9

</div>

</section>

</div>

</span>

</span>

</div>
