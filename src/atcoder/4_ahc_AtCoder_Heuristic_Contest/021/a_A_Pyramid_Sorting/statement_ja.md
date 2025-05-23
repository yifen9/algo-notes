
<div>

<span>

<span>

<div>

<section>

### **問題文**

<p>
$N(N+1)/2$個のボールが下図のように $N$段のピラミッド型に並んでいる。
ピラミッドの頂上のボールの座標を $(0, 0)$とし、$x (0\leq x\leq N-1)$段目の左から $y (0\leq y\leq x)$個目のボールの座標を $(x,y)$とする。
</p>

<figure>

<img src="https://img.atcoder.jp/ahc021/d17182d7.png">

</img>

</figure>

<p>
各ボールには $0$〜 $N(N+1)/2-1$の数字が書かれており、各ボールの数字は全て異なる。
一回の操作で6方向に隣接する2つのボールを入れ替えることが出来る。
ここで、座標 $(x_1,y_1)$と $(x_2,y_2)$にあるボールは以下のいずれかの条件を満たす場合に6方向に隣接している。
</p>

<ul>

<li>
$x_1=x_2-1$かつ $y_1=y_2-1$
</li>

<li>
$x_1=x_2-1$かつ $y_1=y_2$
</li>

<li>
$x_1=x_2$かつ $y_1=y_2-1$
</li>

<li>
$x_1=x_2$かつ $y_1=y_2+1$
</li>

<li>
$x_1=x_2+1$かつ $y_1=y_2$
</li>

<li>
$x_1=x_2+1$かつ $y_1=y_2+1$
</li>

</ul>

<p>
この操作を最大 $10000$回繰り返すことで、最下層を除くどのボール $(x,y) (0\leq x\leq N-2, 0\leq y\leq x)$も自身の直下にある2つのボール $(x+1,y), (x+1,y+1)$よりも小さい数字となるようにしたい。
出来るだけ操作回数が少なくなるような操作列を求めて欲しい。
</p>

<figure>

<img src="https://img.atcoder.jp/ahc021/d17182d7.gif">

</img>

</figure>

</section>

</div>

<div>

<section>

### **得点**

<p>
操作回数を $K$、操作終了後に条件に違反しているボールのペアの数を $E$とする。
$E$は $(x,y)$と $(x+1,y') (y'\in\{y,y+1\})$の組であって、$(x,y)$のボールの数字の方が $(x+1,y')$のボールの数字より大きいようなものの総数である。
</p>

<p>
このとき、以下のスコアが得られる。
</p>

<ul>

<li>
$E=0$の場合、$100000-5K$
</li>

<li>
$E>0$の場合、$50000-50E$
</li>

</ul>

<p>
テストケースは全部で 150 個あり、各テストケースの得点の合計が提出の得点となる。
一つ以上のテストケースで不正な出力や制限時間超過をした場合、提出全体の判定が
<span>
WA
</span>
や
<span>
TLE
</span>
となる。
コンテスト時間中に得た最高得点で最終順位が決定され、コンテスト終了後のシステムテストは行われない。 同じ得点を複数の参加者が得た場合、提出時刻に関わらず同じ順位となる。
</p>

</section>

</div>

---

<div>

<div>

<section>

### **入力**

<p>
全ての入力でピラミッドの段数は $N=30$で固定であり、ボールの総数は $N(N+1)/2=465$となる。
入力は以下の形式で標準入力から与えられる。
</p>

<div>

$b_{0,0}$$b_{1,0}$$b_{1,1}$$b_{2,0}$$b_{2,1}$$b_{2,2}$$\vdots$$b_{29,0}$$\cdots$$b_{29,29}$
</div>

<p>
$b_{x,y}$は初期状態で座標 $(x,y)$にあるボールに書かれた数字を表す整数であり、$0\leq b_{x,y}\leq 464$を満たす。
同じ数字のボールは複数存在しない。
</p>

</section>

</div>

<div>

<section>

### **出力**

<p>
操作回数を $K$、$i$回目の操作で入れ替える2つのボールの座標を $(x_i,y_i), (x'_i,y'_i)$としたとき、以下の形式で標準出力に出力せよ。
</p>

<div>

$K$$x_0$$y_0$$x'_0$$y'_0$$\vdots$$x_{K-1}$$y_{K-1}$$x'_{K-1}$$y'_{K-1}$
</div>

<p>
操作回数 $K$は $10000$を超えてはならず、入れ替える2つのボールは6方向に隣接していなければならない。
これらの条件を満たさない場合、
<span>
WA
</span>
と判定される。
</p>

<p>
<a href="https://img.atcoder.jp/ahc021/d17182d7.html?lang=ja&seed=0&output=15%0D%0A2+0+3+1%0D%0A8+5+9+5%0D%0A24+5+25+6%0D%0A9+5+10+6%0D%0A10+10+11+10%0D%0A1+0+2+1%0D%0A28+9+29+10%0D%0A0+0+1+0%0D%0A18+7+19+8%0D%0A18+18+19+19%0D%0A20+5+21+5%0D%0A11+0+12+1%0D%0A27+12+28+12%0D%0A19+1+20+2%0D%0A7+3+8+3%0D%0A">例を見る</a>
</p>

</section>

</div>

<div>

<section>

### **入力生成方法**

<p>
$0$〜 $464$の数字の書かれた $465$個のボールをランダムな順番に並び替えることで入力は生成される。
</p>

</section>

</div>

<div>

<section>

### **ツール(入力ジェネレータ・ビジュアライザ)**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc021/d17182d7.html?lang=ja">Web版</a>: ローカル版より高性能でアニメーション表示が可能です。
</li>

<li>
<a href="https://img.atcoder.jp/ahc021/d17182d7.zip">ローカル版</a>: 使用するには<a href="https://www.rust-lang.org/ja">Rust言語</a>のコンパイル環境をご用意下さい。
<ul>

<li>
<a href="https://img.atcoder.jp/ahc021/d17182d7_windows.zip">Windows用のコンパイル済みバイナリ</a>: Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。
</li>

</ul>

</li>

</ul>

<p>
コンテスト期間中に、ビジュアライズ結果の共有や、解法・考察に関する言及は禁止されています。ご注意下さい。
</p>

</section>

</div>

</div>

---

<div>

<section>

### **入力例 1**

<div>

236
11 200
453 2 378
85 410 239 54
50 240 113 25 294
303 231 146 65 155 252
368 327 321 251 451 182 142
101 17 43 403 217 161 347 398
350 287 363 48 80 447 385 233 197
438 424 439 121 357 380 51 245 57 304
141 91 100 344 194 250 432 322 58 281 219
412 266 26 318 269 111 59 450 99 301 36 320
218 135 278 225 227 268 313 162 420 214 42 166 55
181 191 75 335 332 372 144 342 29 94 427 62 334 409
377 213 369 117 307 428 280 152 242 88 460 175 351 340 230
209 139 288 132 47 456 167 205 455 38 27 326 306 134 108 34
389 441 393 361 120 296 331 316 458 183 170 40 397 274 402 103 408
136 463 82 0 364 150 462 157 67 92 419 371 156 228 1 138 53 349
174 129 71 169 199 367 87 443 359 172 298 22 244 415 401 373 417 160 305
254 158 84 9 435 130 118 430 203 345 185 388 379 207 220 238 196 208 289 153
425 356 109 237 116 212 358 396 270 179 262 76 370 444 308 229 105 148 365 429 248
386 93 376 86 442 184 273 243 81 69 189 204 355 106 154 257 464 107 70 215 77 241
127 404 180 123 362 124 234 300 173 222 72 329 140 147 232 3 187 114 381 133 44 387 60
145 4 210 49 382 433 457 343 315 354 149 255 299 12 28 421 394 211 102 297 360 8 314 328
46 256 416 336 423 295 90 112 168 309 64 96 260 437 440 366 323 35 383 346 79 293 61 312 202
18 23 20 221 31 452 178 461 6 21 201 143 324 277 341 283 291 5 41 66 411 317 258 406 19 188
164 261 16 137 426 264 98 78 45 310 246 176 319 95 384 68 392 37 265 190 249 73 198 15 32 330 311
131 282 434 271 400 445 104 56 119 263 374 337 216 177 449 353 24 192 390 39 33 223 407 348 195 279 290 110
267 89 375 284 13 63 391 422 272 259 30 97 125 459 413 333 52 448 399 122 83 126 275 302 115 14 338 446 339
171 206 74 163 292 454 405 247 395 285 193 325 418 352 286 186 128 7 159 431 226 165 224 436 10 276 414 151 235 253

</div>

</section>

</div>

<div>

<section>

### **出力例 1**

<div>

15
2 0 3 1
8 5 9 5
24 5 25 6
9 5 10 6
10 10 11 10
1 0 2 1
28 9 29 10
0 0 1 0
18 7 19 8
18 18 19 19
20 5 21 5
11 0 12 1
27 12 28 12
19 1 20 2
7 3 8 3

</div>

</section>

</div>

</span>

</span>

</div>
