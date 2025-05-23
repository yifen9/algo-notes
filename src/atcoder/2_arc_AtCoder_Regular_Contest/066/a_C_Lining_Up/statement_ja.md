
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
$1～N$までの番号がついた、$N$人の人がいます。
彼らは昨日、ある順番で左右一列に並んでいましたが、今日になってその並び方が分からなくなってしまいました。
しかし、彼らは全員、「自分の左に並んでいた人数と自分の右に並んでいた人数の差の絶対値」を覚えています。
彼らの報告によると、人 $i$の、「自分の左に並んでいた人数と自分の右に並んでいた人数の差の絶対値」は $A_i$です。
</p>

<p>
彼らの報告を元に、元の並び方が何通りあり得るかを求めてください。
ただし、答えは非常に大きくなることがあるので、$10^9+7$で割った余りを出力してください。
また、彼らの報告が間違っており、ありうる並び方がないこともありえます。
その際は $0$を出力してください。
</p>

</section>

</div>

<div>

<section>

### **制約**

<ul>

<li>
$1≦N≦10^5$
</li>

<li>
$0≦A_i≦N-1$
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

$N$$A_1$$A_2$$...$$A_N$
</div>

</section>

</div>

<div>

<section>

### **出力**

<p>
元の並び順としてありうるものが何通りあるか求め、$10^9+7$で割った余りを出力せよ。
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
2 4 4 0 2

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

4

</div>

<p>
ありうる並び方は、人の番号で書くと、
</p>

<ul>

<li>
$2,1,4,5,3$
</li>

<li>
$2,5,4,1,3$
</li>

<li>
$3,1,4,5,2$
</li>

<li>
$3,5,4,1,2$
</li>

</ul>

<p>
の $4$通りです。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 2**

<div>

7
6 4 0 2 4 0 2

</div>

</section>

</div>

<div>

<section>

### **出力例 2**

<div>

0

</div>

<p>
どのような並び方でも、報告と矛盾するので、$0$が答えになります。
</p>

</section>

</div>

---

<div>

<section>

### **入力例 3**

<div>

8
7 5 1 1 7 3 5 3

</div>

</section>

</div>

<div>

<section>

### **出力例 3**

<div>

16

</div>

</section>

</div>

</span>

</span>

</div>
