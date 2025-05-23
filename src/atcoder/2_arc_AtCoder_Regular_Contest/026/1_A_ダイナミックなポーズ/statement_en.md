
<div>

<div>

<div>

<section>

### **問題文
**

<p>
高橋君はプログラミングコンテストに参加しようとしています。このコンテストでは簡単な問題が $N$問出題されます。高橋君は普段 $1$問あたり $A$分で解くことが出来ますが、ダイナミックなポーズをとりながら問題を解くことで $1$問あたり $B$分で解くことが出来るようになります。ただし、ダイナミックなポーズには体力を著しく消耗してしまうので、$1$回のプログラミングコンテストでは $5$問までしかダイナミックなポーズをとりながら解くことができません。高橋君は最短何分で $N$問の問題を全て解くことが出来るでしょうか。

</p>

</section>

</div>

---

<div>

<div>

<section>

### **入力
**

<p>
入力は以下の形式で標準入力から与えられる。

</p>

<div>

$N$$A$$B$
</div>

<ul>

<li>
$1$行目には、問題数を表した整数 $N (1 ≦ N ≦ 10)$と、高橋君が普段 $1$問の問題を解くためにかかる時間を分単位で表した整数 $A (2 ≦ A ≦ 60)$と、高橋君がダイナミックなポーズをとりながら $1$問の問題を解くためにかかる時間を分単位で表した整数 $B (1 ≦ B < A)$が空白区切りで与えられる。
	
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力
**

<p>
最短時間で高橋君が全ての問題を解いたときにかかる時間を分単位で表した整数 $1$行に出力せよ。出力の末尾に改行をいれること。

</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1
**

```
10 5 1
```

</section>

</div>

<div>

<section>

### **出力例1
**

```
30
```

<p>
このケースでは、$5$問をダイナミックなポーズをとりながら解き、残りの $5$問を普段通りに解くことによって合計 $30$分で全ての問題を解くことが出来ます。

</p>

</section>

</div>

---

<div>

<section>

### **入力例2
**

```
4 60 7
```

</section>

</div>

<div>

<section>

### **出力例2
**

```
28
```

<p>
このケースでは、全ての問題をダイナミックなポーズをとりながら解くことが出来ます。

</p>

</section>

</div>

</div>

</div>
