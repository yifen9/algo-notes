
<div>

<div>

<div>

<section>

### **問題文**

<p>
高橋くんはSNSの管理者をしています。このSNSではユーザ同士が友達という関係で繋がることができます。高橋くんはそれぞれのユーザの「友達の友達」が何人いるかを調べることにしました。友達関係が与えられるので、各ユーザの「友達の友達」の人数を求めてください。ただし、自分自身や友達は、「友達の友達」に含みません。
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

$N$$M$$A_1$$B_1$$A_2$$B_2$:
$A_M$$B_M$
</div>

<ul>

<li>
$1$行目には、ユーザ数 $N (1≦N≦10)$と友達の組の数 $M (0≦M≦N×(N-1)/2)$がスペース区切りで与えられる。
</li>

<li>
各ユーザには $1$から $N$までのユーザIDが割り当てられている。
</li>

<li>
$2$行目からの $M$行では、友達関係にあるユーザのID $A_i,B_i (1≦A_i
<B_i≦N)</var>
がスペース区切りで与えられる。ただし、 $i≠j$ならば $(A_i,B_i)≠(A_j,B_j)$を満たす。
</B_i≦N)</var>
$
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<p>
各ユーザの友達の友達の人数をユーザIDの小さい順に一行ごと出力せよ。出力の末尾には改行をつけること。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

```
3 2
1 2
2 3
```

</section>

</div>

<div>

<section>

### **出力例1**

```
1
0
1
```

</section>

<div>

<img src="https://atcoder.jp/img/abc/016/3-1.png">

</img>

</div>

</div>

---

<div>

<section>

### **入力例2**

```
3 3
1 2
1 3
2 3
```

</section>

</div>

<div>

<section>

### **出力例2**

```
0
0
0
```

</section>

</div>

---

<div>

<section>

### **入力例3**

```
8 12
1 6
1 7
1 8
2 5
2 6
3 5
3 6
4 5
4 8
5 6
5 7
7 8
```

</section>

</div>

<div>

<section>

### **出力例3**

```
4
4
4
5
2
3
4
2
```

</section>

</div>

</div>

</div>
