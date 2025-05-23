
<div>

<span>

<span>

<p>
Score : $1200$points
</p>

<div>

<section>

### **Problem Statement**

<p>
You are given an $N \times N$integer matrix $A = (A_{i,j})_{1 \leq i \leq N, 1 \leq j \leq N}$and an integer $M$.
</p>

<p>
For an integer sequence $x = (x_1, x_2, \cdots, x_M)$of length $M$consisting of integers between $1$and $N$, inclusive, define $f(x)$as follows:
</p>

<ul>

<li>
Let $y = (y_1, y_2, \cdots, y_M)$be the sequence obtained by sorting the elements of $x$to be non-decreasing.
</li>

<li>
Define $f(x) = \prod_{1 \leq i \leq M} A_{x_i, y_i}$.
</li>

</ul>

<p>
For each $k = 1, 2, \cdots, N$, solve the following problem:
</p>

<ul>

<li>
Find the sum of $f(x)$over all sequences $x$satisfying $x_1 = k$, modulo $998244353$.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Constraints**

<ul>

<li>
$1 \leq N \leq 50$
</li>

<li>
$1 \leq M \leq 50$
</li>

<li>
$0 \leq A_{i,j} < 998244353$
</li>

<li>
All input values are integers.
</li>

</ul>

</section>

</div>

---

<div>

<div>

<section>

### **Input**

<p>
The input is given from Standard Input in the following format:
</p>

<div>

$N$$M$$A_{1,1}$$A_{1,2}$$\cdots$$A_{1,N}$$A_{2,1}$$A_{2,2}$$\cdots$$A_{2,N}$$\vdots$$A_{N,1}$$A_{N,2}$$\cdots$$A_{N,N}$
</div>

</section>

</div>

<div>

<section>

### **Output**

<p>
Print the answer for each $k = 1, 2, \cdots, N$in this order.
</p>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

2 2
1 2
3 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

5 22

</div>

<p>
All possible $x$and the corresponding values of $f(x)$are as follows.
</p>

<ul>

<li>
$x = (1, 1)$: $y = (1, 1)$, $f(x) = A_{1,1} \times A_{1,1} = 1$
</li>

<li>
$x = (1, 2)$: $y = (1, 2)$, $f(x) = A_{1,1} \times A_{2,2} = 4$
</li>

<li>
$x = (2, 1)$: $y = (1, 2)$, $f(x) = A_{2,1} \times A_{1,2} = 6$
</li>

<li>
$x = (2, 2)$: $y = (2, 2)$, $f(x) = A_{2,2} \times A_{2,2} = 16$
</li>

</ul>

<p>
Thus, the answer is $1 + 4 = 5$for $k = 1$, and $6 + 16 = 22$for $k = 2$.
</p>

</section>

</div>

---

<div>

<section>

### **Sample Input 2**

<div>

2 3
1 2
3 4

</div>

</section>

</div>

<div>

<section>

### **Sample Output 2**

<div>

27 118

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 3**

<div>

5 4
785439575 250040585 709423541 945005786 19237225
404191279 250876592 22672563 519729086 344065186
273714212 560047125 139793596 542901248 520999410
855572558 498896932 418633758 742973826 248730678
238856535 319502970 908902333 164543594 245101681

</div>

</section>

</div>

<div>

<section>

### **Sample Output 3**

<div>

216530400 726773157 717209375 797938347 957133905

</div>

</section>

</div>

---

<div>

<section>

### **Sample Input 4**

<div>

10 50
197971506 714635866 966125570 768080799 80565655 459117401 256810168 775681305 582857561 948631706
437330820 321722967 531470304 255908811 45459908 504089816 695016247 91058795 905527130 30860430
151769562 979797105 619322493 298241991 360690308 480124392 297323928 284686636 922571073 627798362
753705854 712639027 721488863 69714419 485979799 88704853 758288417 423073188 595934547 86264514
272481811 622712481 221745114 225051881 433378197 985573661 210619166 851716760 283615535 834897126
366075547 933505674 858395194 490049033 22039836 361481447 735151983 518458804 422209788 28981946
907645400 111982636 978445563 686621115 486475154 734616351 587635888 527524079 454844580 826849288
868863954 490627044 967828344 887235558 138021910 435784230 343307056 118718683 547282350 757693154
32344652 101428952 585897722 693817619 790433406 848494439 873744405 604427602 951889915 989125209
865548541 642980476 603592935 911086893 466178404 79002814 902745597 825893950 147052664 805753279

</div>

</section>

</div>

<div>

<section>

### **Sample Output 4**

<div>

862518623 606960987 762676180 606184511 762408948 47716007 968649097 788324707 140177479 484063588

</div>

</section>

</div>

</span>

</span>

</div>
