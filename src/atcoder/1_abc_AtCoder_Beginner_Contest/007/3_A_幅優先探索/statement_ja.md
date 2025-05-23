
<div>

<div>

<div>

<section>

### **問題文**

<p>
たかはし君は迷路が好きです。今、上下左右に移動できる二次元盤面上の迷路を解こうとしています。盤面は以下のような形式で与えられます。
</p>

<ul>

<li>
まず、盤面のサイズと、迷路のスタート地点とゴール地点の座標が与えられる。
</li>

<li>
次に、それぞれのマスが通行可能な空きマス(`.`)か通行不可能な壁マス(`#`)かという情報を持った盤面が与えられる。盤面は壁マスで囲まれている。スタート地点とゴール地点は必ず空きマスであり、スタート地点からゴール地点へは、空きマスを辿って必ずたどり着ける。具体的には、入出力例を参考にすると良い。
</li>

</ul>

<p>
今、彼は上記の迷路を解くのに必要な最小移動手数を求めたいと思っています。どうやって求めるかを調べていたところ、「幅優先探索」という手法が効率的であることを知りました。幅優先探索というのは以下の手法です。
</p>

<ul>

<li>
スタート地点から近い(たどり着くための最短手数が少ない)マスから順番に、たどり着く手数を以下のように確定していく。説明の例として図1の迷路を利用する。
</li>

</ul>

<center>

<img src="http://abc007.contest.atcoder.jp/img/abc/007/3-2.png">

</img>

</center>

<p>

</p>

<center>
図1. 説明に用いる盤面
</center>

<p>

</p>

<ul>

<li>
最初に、スタート地点は、スタート地点から手数0でたどり着ける(当然)ので、最短手数0で確定させる(図2)。
</li>

</ul>

<center>

<img src="http://abc007.contest.atcoder.jp/img/abc/007/3-3.png">

</img>

</center>

<center>
図2. 最短手数0でたどり着けるマスが確定(初期)
</center>

<p>

</p>

<ul>

<li>
次に、スタート地点の四近傍(上下左右)の空きマスについて、手数1で確定させる(図3)。
</li>

</ul>

<center>

<img src="http://abc007.contest.atcoder.jp/img/abc/007/3-4.png">

</img>

</center>

<center>
図3. 最短手数1でたどり着けるマスが確定
</center>

<p>

</p>

<ul>

<li>
次に、手数1で確定したそれぞれのマスの4近傍を見て、まだ確定していない空きマスがあればそのマスを手数2で確定させる(図4)。
</li>

</ul>

<center>

<img src="http://abc007.contest.atcoder.jp/img/abc/007/3-5.png">

</img>

</center>

<center>
図4. 最短手数2でたどり着けるマスが確定
</center>

<p>

</p>

<ul>

<li>
次に、手数2で確定したそれぞれのマスの4近傍を見て、まだ確定していない空きマスがあればそのマスを手数3で確定させる(図5)。
</li>

</ul>

<center>

<img src="http://abc007.contest.atcoder.jp/img/abc/007/3-6.png">

</img>

</center>

<center>
図5. 最短手数3でたどり着けるマスが確定
</center>

<p>

</p>

<ul>

<li>
次に、手数3で確定したそれぞれのマスの4近傍を見て、まだ確定していない空きマスがあればそのマスを手数4で確定させる(図6)。
</li>

</ul>

<center>

<img src="http://abc007.contest.atcoder.jp/img/abc/007/3-7.png">

</img>

</center>

<center>
図6. 最短手数4でたどり着けるマスが確定
</center>

<ul>

<li>
上記の手順を確定の更新が無くなるまで繰り返すと、スタート地点からたどり着ける全ての空きマスについて最短手数が確定する(図7)。スタートとゴールは必ず空きマスを辿ってたどり着けるという制約があるので、ゴール地点への最短手数も分かる。
</li>

</ul>

<center>

<img src="http://abc007.contest.atcoder.jp/img/abc/007/3-9.png">

</img>

</center>

<center>
図7. すべてのたどり着けるマスへの最短手数が確定
</center>

<p>

</p>

<p>
さて、この処理をスマートに実装するためには、先入れ先出し(FIFO)のキュー(Queue)というデータ構造を用いると良いことが知られています。もちろん、使わなくても解くことは可能です。今回、よく分からなければ思いついた方法で解くことをおすすめします。先入れ先出しのキューとは以下のような機能を持つデータ構造です。
</p>

<ul>

<li>
追加(Push): キューの末尾にデータを追加する。
</li>

<li>
取り出し(Pop): キューの先頭のデータを取り出す。
</li>

</ul>

<p>
このデータ構造を使うと、先ほどの幅優先探索の説明における「マスの最短手数の確定」のタイミングでその確定マスをキューに追加し、追加操作が終わればPopを行い、取り出したマスの4近傍を調べるということを繰り返せば(つまり先に追加されたものから順番に処理していけば)、簡潔に処理ができることが分かります。
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

$R\ C$$sy\ sx$$gy\ gx$$c_{(1,1)}c_{(1,2)}\ …\ c_{(1,C)}$$c_{(2,1)}c_{(2,2)}\ …\ c_{(2,C)}$:
$c_{(R,1)}c_{(R,2)}\ …\ c_{(R,C)}$
</div>

<ul>

<li>
$1$行目には、行数 $R(1≦R≦50)$と列数 $C(1≦C≦50)$がそれぞれ空白区切りで与えられる。
</li>

<li>
$2$行目には、スタート地点の座標 $(sy,sx)$が空白区切りで与えられる。スタート地点が $sy$行 $sx$列にあることを意味する。 $1≦sy≦R$かつ $1≦sx≦C$である。
</li>

<li>
$3$行目には、ゴール地点の座標 $(gy,gx)$が空白区切りで与えられる。ゴール地点が $gy$行 $gx$列にあることを意味する。 $1≦gy≦R$かつ $1≦gx≦C$であり、$(gy,gx)≠(sy,sx)$であることが保障されている。
</li>

<li>
$4$行目から $R$行、長さ $C$の文字列が $1$行ずつ与えられる。各文字は `.`もしくは `#`のいずれかであり、$i$回目 $(1≦i≦R)$に与えられられる文字列のうち $j$文字目 $(1≦j≦C)$について、その文字が `.`なら、マス $(i,j)$が空きマスであり、`#`なら、マス $(i,j)$が壁マスであることをあらわす。
</li>

<li>
盤面は壁マスで囲まれている。つまり、$i=1,i=R,j=1,j=C$のうちいずれか1つでも条件を満たすマス $(i,j)$について、$c_{(i,j)}$は `#`である。また、スタート地点とゴール地点は必ず空きマスであり、スタート地点からゴール地点へは、空きマスを辿って必ずたどり着ける。
</li>

</ul>

</section>

</div>

<div>

<section>

### **出力**

<ul>

<li>
スタート地点からゴール地点に移動する最小手数を $1$行に出力せよ。最後に改行を忘れないこと。
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **入力例1**

```
7 8
2 2
4 5
########
#......#
#.######
#..#...#
#..##..#
##.....#
########
```

</section>

</div>

<div>

<section>

### **出力例1**

```
11
```

<p>
問題文中の例です。
</p>

</section>

</div>

---

<div>

<section>

### **入力例2**

```
5 8
2 2
2 4
########
#.#....#
#.###..#
#......#
########
```

</section>

</div>

<div>

<section>

### **出力例2**

```
10
```

<p>
図8のように進めば $10$手でたどり着くことが進むことができます(※Sはスタート、Gはゴールをあらわす)。
</p>

<center>

<img src="http://abc007.contest.atcoder.jp/img/abc/007/3-1.png">

</img>

</center>

<center>
図8. 入出力例2において最小手数10を達成する進み方
</center>

<p>

</p>

</section>

</div>

---

<div>

<section>

### **入力例3**

```
50 50
2 2
49 49
##################################################
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
#................................................#
##################################################
```

</section>

</div>

<div>

<section>

### **出力例3**

```
94
```

<p>
もはやただの広い空間であり、迷路と呼んで良いのかは分からないがこの問題でこのような盤面も迷路として扱う。兎にも角にも、スタートからゴールへの最短手数は $94$である。
</p>

</section>

</div>

</div>

</div>
