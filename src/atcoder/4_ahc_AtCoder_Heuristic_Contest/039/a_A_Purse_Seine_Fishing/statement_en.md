
<div>

<span>

<span>

<div>

<section>

### **Story**

<p>
Takahashi is a skilled purse seine fisher.
His fishing boat is equipped with state-of-the-art sonar, allowing him to accurately determine the positions of fish within the fishing area.
Additionally, the boat is capable of high-speed movement, enabling him to assume that fish remain stationary while he sets up the fishing net.
</p>

<p>
The fishing method involves using the boat to deploy nets and form a closed polygon, capturing the fish within the enclosed area.
To optimize efficiency, each edge of the polygon formed by the nets must be aligned either parallel to the east-west or north-south direction.
Furthermore, due to the limited length of the nets equipped on the boat, the polygon must be constructed within these constraints.
</p>

<p>
The fishing area contains two types of fish: mackerels and sardines.
For resource conservation reasons, sardines are currently prohibited from being caught in this fishing area.
Any sardines caught in the net must be released back into the sea.
Because this process is labor-intensive, Takahashi should focus on maximizing the catch of mackerel while avoiding sardines as much as possible.
</p>

</section>

</div>

<div>

<section>

### **Problem Statement**

<p>
There are $N$mackerels and $N$sardines on a two-dimensional plane.
Construct a polygon that satisfies the following conditions and maximize the value obtained by subtracting the total number of sardines inside the polygon from the total number of mackerels inside it.
Note that any points lying on the edges of the polygon are considered to be inside the polygon.
</p>

</section>

</div>

<div>

<section>

### **Conditions**

<ol>

<li>
The number of vertices in the polygon must not exceed $1000$, and the total length of its edges must not exceed $4 \times 10^5$.
</li>

<li>
The coordinates of each vertex $(x, y)$must be integers satisfying $0 \leq x, y \leq 10^5$.
</li>

<li>
Each edge of the polygon must be parallel to either the $x$-axis or the $y$-axis.
</li>

<li>
The polygon must not self-intersect: non-adjacent edges must not share any points, and adjacent edges must only meet at their endpoints.
</li>

</ol>

</section>

</div>

<div>

<section>

### **Scoring**

<p>
Let $a$be the total number of mackerels inside the polygon and $b$be the total number of sardines inside the polygon.
Then, you will obtain the score of $\max(0, a - b + 1)$.
</p>

<p>
There are $150$test cases, and the score of a submission is the total score for each test case.
If your submission produces an illegal output or exceeds the time limit for some test cases, the submission itself will be judged as 
<span>
WA
</span>
or 
<span>
TLE
</span>
, and the score of the submission will be zero.
The highest score obtained during the contest will determine the final ranking, and there will be no system test after the contest.
If more than one participant gets the same score, they will be ranked in the same place regardless of the submission time.
</p>

</section>

</div>

---

<div>

<div>

<section>

### **Input**

<p>
Input is given from Standard Input in the following format:
</p>

<div>

$N$$x_0$$y_0$$\vdots$$x_{2N-1}$$y_{2N-1}$
</div>

<ul>

<li>
In all test cases, the number of mackerels and sardines, $N$, is fixed at $5000$.
</li>

<li>
For each $i = 0, 1, \dots, N-1$, $(x_i, y_i)$represents the coordinates of the $i$-th mackerel.
</li>

<li>
For each $i = 0, 1, \dots, N-1$, $(x_{N+i}, y_{N+i})$represents the coordinates of the $i$-th sardine.
</li>

<li>
Each coordinate $(x_i, y_i)$satisfies $0 \leq x_i, y_i \leq 10^5$, and all coordinates are distinct.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Output**

<p>
Let the number of vertices in the polygon be $m$($4 \leq m \leq 1000$), and let $(a_i, b_i)$denote the coordinates of the $i$-th vertex.
Then, output to Standard Output in the following format:
</p>

<div>

$m$$a_0$$b_0$$\vdots$$a_{m-1}$$b_{m-1}$
</div>

<p>
The output vertices do not necessarily need to form the actual corners of the polygon.
In other words, three consecutive vertices $(a_i, b_i), (a_{i+1}, b_{i+1}), (a_{i+2}, b_{i+2})$may lie on a straight line.
However, all vertices must have distinct coordinates.
</p>

<p>
The vertices can be output in either clockwise or counterclockwise order.
</p>

<p>
<a href="https://img.atcoder.jp/ahc039/KNtTkgAy.html?lang=en&seed=0&output=sample">Show example</a>
</p>

<p>
Your program may output multiple solutions.
If multiple solutions are output, only the last one is used for scoring.
You can compare multiple solutions using the web version of the visualizer.
</p>

</section>

</div>

<div>

<section>

### **Input Generation**

<ul>

<li>
$\mathrm{rand}(L, U)$: Generates a random integer uniformly distributed between $L$and $U$(inclusive).
</li>

<li>
$\mathrm{rand\_double}(L, U)$: Generates a random real number uniformly distributed between $L$and $U$.
</li>

<li>
$\mathrm{normal}(\mu, \sigma)$: Generates a random real number from a normal distribution with mean $\mu$and standard deviation $\sigma$.
</li>

</ul>

<p>
First, generate the coordinates of mackerels.
The number of clusters $n$is determined by generating $n = \mathrm{rand}(10, 25)$.
For each cluster $i$, generate the following parameters:
</p>

<ul>

<li>
Weight $w_i = \mathrm{rand\_double}(0, 1)$
</li>

<li>
Center $(cx_i, cy_i) = (\mathrm{rand}(20000, 80000), \mathrm{rand}(20000, 80000))$
</li>

<li>
Standard deviation $\sigma_i = \mathrm{rand}(1000, 5000)$
</li>

</ul>

<p>
Repeat the following process $N$times to generate the coordinates of $N$mackerels:
</p>

<ul>

<li>
Randomly select a cluster $i$with probability proportional to its weight $w_i$.
</li>

<li>
Generate $x = \mathrm{round}(\mathrm{normal}(cx_i, \sigma_i))$and $y = \mathrm{round}(\mathrm{normal}(cy_i, \sigma_i))$.
</li>

<li>
If the generated coordinates $(x, y)$satisfy $0 \leq x, y \leq 10^5$and are distinct from all previously generated coordinates, they are accepted as the coordinates of a mackerel. Otherwise, regenerate $(x, y)$.
</li>

</ul>

<p>
After generating the coordinates of mackerels, generate the coordinates of sardines in the same way.
</p>

</section>

</div>

<div>

<section>

### **Tools (Input generator and visualizer)**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc039/KNtTkgAy.html?lang=en">Web version</a>: This is more powerful than the local version providing animations.
</li>

<li>
<a href="https://img.atcoder.jp/ahc039/KNtTkgAy.zip">Local version</a>: You need a compilation environment of <a href="https://www.rust-lang.org/">Rust language</a>.
<ul>

<li>
<a href="https://img.atcoder.jp/ahc039/KNtTkgAy_windows.zip">Pre-compiled binary for Windows</a>: If you are not familiar with the Rust language environment, please use this instead.
</li>

</ul>

</li>

</ul>

<p>
Please be aware that sharing visualization results or discussing solutions/ideas during the contest is prohibited.
</p>

</section>

</div>

</div>

</span>

</span>

</div>
