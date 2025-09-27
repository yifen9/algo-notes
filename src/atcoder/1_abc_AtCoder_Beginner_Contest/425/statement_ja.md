
<div>

<span>

<span>

<canvas>

</canvas>

<canvas>

</canvas>

<script>
document.addEventListener('DOMContentLoaded', () => {
            // キャンバス要素の取得
            const groundCanvas = document.getElementById('groundCanvas');
            const leafCanvas = document.getElementById('leafCanvas');
            const leafCtx = leafCanvas.getContext('2d');
            const groundCtx = groundCanvas.getContext('2d');

            // 葉っぱと地面の葉の配列
            let leaves = [];
            let groundLeaves = [];

            // スクロール位置を取得する関数
            const getScrollProgress = () => {
              const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
              const currentScroll = window.scrollY;
              return Math.min(currentScroll / scrollHeight, 1);
            };

            // スクロール位置に基づいて葉の色を決定
            const getLeafColor = (scrollProgress = null) => {
              const progress = scrollProgress !== null ? scrollProgress : getScrollProgress();

              if (progress < 0.2) {
                // 若葉（緑）
                const green = Math.floor(120 + Math.random() * 40);
                return `rgba(${50 + Math.random() * 30}, ${green}, ${20 + Math.random() * 30}, 0.3)`;
              } else if (progress < 0.8) {
                // 紅葉（赤・黄色のミックス）
                const isRed = Math.random() < 0.5;
                if (isRed) {
                  return `rgba(${180 + Math.random() * 50}, ${30 + Math.random() * 50}, ${20 + Math.random() * 30}, 0.3)`;
                } else {
                  return `rgba(${200 + Math.random() * 40}, ${150 + Math.random() * 50}, ${30 + Math.random() * 30}, 0.3)`;
                }
              } else {
                // 落ち葉（茶色）
                return `rgba(${100 + Math.random() * 40}, ${60 + Math.random() * 30}, ${30 + Math.random() * 20}, 0.3)`;
              }
            };

            // キャンバスのリサイズ処理
            const resizeCanvas = () => {
              const fullHeight = window.innerHeight;
              leafCanvas.width = window.innerWidth;
              leafCanvas.height = fullHeight;
              groundCanvas.width = window.innerWidth;
              groundCanvas.height = fullHeight;
            };

            // 初期化
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            // 葉っぱの生成（画面中央を避ける）
            const createLeaf = (x = null, y = null) => {
              let leafX;

              if (x !== null) {
                leafX = x;
              } else {
                // 画面中央を避けて左右どちらかに生成
                const centerZone = leafCanvas.width * 0.6; // 中央60%を避ける
                const leftZone = (leafCanvas.width - centerZone) / 2;
                const rightZoneStart = leftZone + centerZone;

                if (Math.random() < 0.5) {
                  // 左側に生成
                  leafX = Math.random() * leftZone;
                } else {
                  // 右側に生成
                  leafX = rightZoneStart + Math.random() * leftZone;
                }
              }

              const leafY = y !== null ? y : -30;
              const size = 5 + Math.random() * 10;
              const speed = 0.5 + Math.random() * 1.5;
              const swaySpeed = 0.02 + Math.random() * 0.03;
              const swayAmount = 30 + Math.random() * 40;
              const rotation = Math.random() * Math.PI * 2;
              const rotationSpeed = (Math.random() - 0.5) * 0.04;
              const color = getLeafColor();

              leaves.push({
                x: leafX,
                y: leafY,
                initialX: leafX,
                size,
                speed,
                swaySpeed,
                swayAmount,
                swayOffset: Math.random() * Math.PI * 2,
                rotation,
                rotationSpeed,
                color,
                type: Math.random() // 葉っぱの形のバリエーション用
              });
            };

            // 地面に落ちた葉の追加
            const addGroundLeaf = (x, y, color, size, type) => {
              groundLeaves.push({
                x,
                y,
                color,
                size,
                rotation: Math.random() * Math.PI * 2,
                opacity: 0.25,
                fadeSpeed: 0.01 + Math.random() * 0.02, // 徐々に透明になる速度
                type
              });

              if (groundLeaves.length > 50) {
                groundLeaves.shift();
              }
            };

            // より自然な葉っぱの形を描画
            const drawLeaf = (ctx, x, y, size, rotation, color, type) => {
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(rotation);

              // 半透明の設定はcolorに含まれている
              ctx.fillStyle = color;

              ctx.beginPath();

              if (type < 0.5) {
                // タイプ1: 楕円形の葉（イチョウ風）
                ctx.ellipse(0, 0, size * 0.6, size, 0, 0, Math.PI * 2);
                ctx.fill();

                // 葉脈
                ctx.strokeStyle = `rgba(0, 0, 0, 0.1)`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(0, -size);
                ctx.lineTo(0, size);
                ctx.moveTo(-size * 0.3, -size * 0.5);
                ctx.lineTo(0, 0);
                ctx.moveTo(size * 0.3, -size * 0.5);
                ctx.lineTo(0, 0);
                ctx.stroke();
              } else {
                // タイプ2: 自然な葉の形（ベジェ曲線）
                ctx.moveTo(0, -size);
                ctx.bezierCurveTo(
                  size * 0.5, -size * 0.8,
                  size * 0.7, -size * 0.2,
                  size * 0.4, 0
                );
                ctx.bezierCurveTo(
                  size * 0.5, size * 0.3,
                  size * 0.3, size * 0.6,
                  0, size * 0.8
                );
                ctx.bezierCurveTo(
                  -size * 0.3, size * 0.6,
                  -size * 0.5, size * 0.3,
                  -size * 0.4, 0
                );
                ctx.bezierCurveTo(
                  -size * 0.7, -size * 0.2,
                  -size * 0.5, -size * 0.8,
                  0, -size
                );
                ctx.fill();

                // 中央の葉脈
                ctx.strokeStyle = `rgba(0, 0, 0, 0.08)`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(0, -size);
                ctx.quadraticCurveTo(0, 0, 0, size * 0.8);
                ctx.stroke();
              }

              ctx.restore();
            };

            // 葉っぱの更新と描画
            const updateLeaves = () => {
              leafCtx.clearRect(0, 0, leafCanvas.width, leafCanvas.height);

              // 新しい葉っぱを生成
              if (Math.random() < 0.06 && leaves.length < 40) {
                createLeaf();
              }

              // 既存の葉っぱを更新
              for (let i = leaves.length - 1; i >= 0; i--) {
                const leaf = leaves[i];

                // 落下と横揺れ
                leaf.y += leaf.speed;
                leaf.swayOffset += leaf.swaySpeed;
                leaf.x = leaf.initialX + Math.sin(leaf.swayOffset) * leaf.swayAmount;

                // 回転
                leaf.rotation += leaf.rotationSpeed;

                // 地面に到達したら
                if (leaf.y >= leafCanvas.height * 0.95) {
                  addGroundLeaf(leaf.x, leafCanvas.height * 0.95, leaf.color, leaf.size, leaf.type);
                  leaves.splice(i, 1);
                  continue;
                }

                // 葉っぱを描画
                drawLeaf(leafCtx, leaf.x, leaf.y, leaf.size, leaf.rotation, leaf.color, leaf.type);
              }
            };

            // 地面の葉っぱの更新と描画
            const updateGroundLeaves = () => {
              groundCtx.clearRect(0, 0, groundCanvas.width, groundCanvas.height);

              for (let i = groundLeaves.length - 1; i >= 0; i--) {
                const leaf = groundLeaves[i];
                leaf.opacity -= leaf.fadeSpeed;

                if (leaf.opacity <= 0) {
                  groundLeaves.splice(i, 1);
                  continue;
                }

                // 地面の葉は色に透明度を上書き
                const colorWithOpacity = leaf.color.replace(/[\d.]+\)$/, `${leaf.opacity})`);
                drawLeaf(groundCtx, leaf.x, leaf.y, leaf.size * 0.8, leaf.rotation, colorWithOpacity, leaf.type);
              }
            };

            // クリックイベントの処理
            document.addEventListener('click', (e) => {
              const x = e.clientX;
              const y = e.clientY;

              // クリック位置に葉を生成
              for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                  createLeaf(x + (Math.random() - 0.5) * 50, y);
                }, i * 100);
              }
            });

            // アニメーションループ
            const animate = () => {
              updateLeaves();
              updateGroundLeaves();
              requestAnimationFrame(animate);
            };

            animate();
          });

        
</script>

<iframe src="https://www.youtube.com/embed/kazpuoYunNE?si=nIMRaJyGbtDxBlIG" width="100%" height="360" frameborder="0" allowfullscreen>

</iframe>

### **コンテスト情報**

<section>

<ul>

<li>
コンテスト時間: 100 分
</li>

<li>
レーティング更新対象: 0 - 
<span>
1999
</span>

</li>

</ul>

</section>

---

### **コンテスト概要**

<section>

<div>

<img src="https://img.atcoder.jp/abc372/uv_abc_banner.png">

</img>

<p>
当コンテストは、<a href="https://www.uniquevision.co.jp/">
<font color="#D6124B">ユニークビジョン株式会社</font>
</a>
<img src="https://img.atcoder.jp/abc346/icon.png">

</img>
が主催するプログラミングコンテストです。
            
</p>

<p>
<a href="https://atcoder.jp/contests/abc425#office-event">▼ABC425参加者限定イベント</a><a href="https://atcoder.jp/contests/abc425#campaign">▼Amazonギフトカードが当たる！UV賞キャンペーン</a><a href="https://jobs.atcoder.jp/offers/list?f.CompanyScreenName=uniquevision">▶AtCoderJobs</a>
</p>

</div>

</section>

---

### **ユニークビジョン株式会社について**

<div>

<img src="https://img.atcoder.jp/abc359/uniquevison_logo.png">

</img>

</div>

#### **Belugaシリーズ**

<section>

<p>
ユニークビジョンは、ソーシャルメディアを活用して企業の幅広いマーケティング施策で
<b>
ブランド体験
</b>
をつくる、テクノロジーカンパニーです。

SNSマーケティングをより効果的に運営するための
<b>
「Belugaシリーズ」
</b>
を開発・運用しています。
          
</p>

<ul>
<a href="https://www.uniquevision.co.jp/service/beluga/">Beluga スタジオ
            </a>
<ul>

<li>
X（旧Twitter）・Facebook・Instagramのアカウントを一元管理できるツールとして、企業のSNS運用をサポートします。
              
</li>

</ul>

</ul>

<ul>
<a href="https://www.uniquevision.co.jp/service/beluga-campaign/">Beluga キャンペーン
            </a>
<ul>

<li>
X・LINE・Instagramにて自動返信やインスタントウィン（その場で抽選、当落の確認）キャンペーンを提供。スピーディで品質の高いキャンペーンを実現します。
              
</li>

</ul>

</ul>

<ul>
<a href="https://www.uniquevision.co.jp/case/belugacampaign-hololivecity-checkincampaign">Beluga チェックイン
            </a>
<ul>

<li>
X・LINE上で配布されるユニークなQRコードを端末にかざすことで抽選が可能となる、SNSとリアルをつなげるサービスです。店舗へのチェックインやスタンプラリーなど幅広く展開可能なシステムで、大規模なイベントにも導入されました。
              
</li>

</ul>

</ul>

<p>
上記以外にも、様々なBelugaシリーズ製品を開発・運用しています。
</p>

<p>

<b>
<a href="https://jobs.atcoder.jp/offers/list?f.CompanyScreenName=uniquevision">
<font color="#D6124B">AtCoderJobs</font>
</a>にて、26年卒・27年卒・中途エンジニア職を募集中です！
</b>





</p>

</section>

#### **導入事例**

<section>

<p>
Belugaシリーズは2011年のリリース以来、大手企業を中心にのべ400社以上の企業に導入され、3000件以上の施策に利用していただいております。
          
</p>

<p>
以下、導入事例の一部です。その他の事例は<a href="https://www.uniquevision.co.jp/case">こちら</a>よりご覧ください！
          
</p>

<ul>

<li>
<a href="https://www.uniquevision.co.jp/case/belugacampagin-lawson-trial-sale-election">ローソン：ファンの声を商品化！Twitter総選挙キャンペーンを開催</a>
</li>

<li>
<a href="https://www.uniquevision.co.jp/case/belugacampaign-warnerbros-tokyo-revengersjp">ワーナー・ブラザース：”10回のいいねを行う時間を競う”新たな形式のTwitterキャンペーンを実施</a>
</li>

<li>
<a href="https://www.uniquevision.co.jp/case/belugacampaignforline-ffa-ajinomoto-gyozamileage">味の素冷凍食品：商品購入でポイントを貯めるマイレージ型レシートキャンペーンをLINEで開催</a>
</li>

<li>
<a href="https://www.uniquevision.co.jp/case/belugacampaign-hololivecity-checkincampaign">ホロライブ：QRコードでチェックイン！Xとリアルイベントを繋ぐOMO施策に1万人が参加</a>
</li>

</ul>

<div>
<a href="https://www.uniquevision.co.jp/case">
<img src="https://img.atcoder.jp/abc312/casestudy.png">

</img>
</a>
</div>

</section>

---

### **技術スタック**

<section>

#### **主要開発言語**

<ul>

<li>
Rust
</li>

</ul>

#### **開発言語**

<ul>

<li>
TypeScript、SQL、Ruby、Python3
</li>

</ul>

#### **フレームワーク**

<ul>

<li>
Vue.js、axum、actix-web、Ruby on Rails、Node.js、Sinatra
            
</li>

</ul>

#### **データベース**

<ul>

<li>
PostgreSQL、DynamoDB
</li>

</ul>

#### **環境**

<ul>

<li>
nginx、Redis、Linux、Amazon Web Service、Google Cloud
              Platform、BigQuery
            
</li>

</ul>

#### **プロジェクト管理**

<ul>

<li>
Git
</li>

</ul>

</section>

---

### **ユニークビジョンがAtCoderユーザーを必要としている理由**

<section>

<p>
ユニークビジョンは日本で7社の
<b>
X Marketing Partner
</b>
、日本で3社の<a href="https://www.uniquevision.co.jp/news/4hrLqcEoYS9BUCpdh2YK5t">
<b>
LINE
                Technology
                Partner（販促・OMO部門）
</b>
</a>です。2025年8月現在、1社単独でX社・LINE社とのパートナー契約を結んでいる会社は日本でユニークビジョンのみとなっております（グループでは博報堂グループ・電通グループ・ユニークビジョンのみ）。
          
</p>

<p>
お客様もナショナルクライアントを中心とする大手企業が多く、一つ一つの案件の難易度も高くなっていっています。大手企業が実施する案件はマーケティング予算も豊富で参加者数が増えるため、高負荷案件が多くなります。また、日本でトップレベルのブランドを預かって案件を進めるため、高い安全性は不可欠です。その中でも私たちは業界の最先端を走り続けているため、先駆者のいない初めて出会う仕様の連続で、常に新しい挑戦を続けています。
          
</p>

<p>
一方でエンジニアチームについては、少数の優秀なメンバーで構成されることが望ましいと考えています。ただ数だけが多くても成果はでないため、ユニークビジョンでも各プロジェクト数名〜多くても10名程度で構成しています。こうした高難易度案件を少数精鋭で数多く実施していくため、新しい技術へのキャッチアップを続け、技術的な選択肢を増やしていっています。
          
</p>

<p>
私たちは、技術でマーケティングを変えていきます。
</p>

<p>
このコンテスト開催を通じて技術が好きなAtCoderユーザーの皆様にユニークビジョンを知っていただき、是非とも一緒に技術で世の中を変えていく仲間となっていただけたらと思います。求人情報に関しては、<a href="https://jobs.atcoder.jp/offers/list?f.CompanyScreenName=uniquevision">
<font color="#D6124B">
<b>
AtCoderJobs
</b>
</font>
</a>よりご確認ください。
          
</p>

<p>
なお、今年も定期的にコンテストを開催予定です！
</p>

</section>

<div>

<img src="https://img.atcoder.jp/abc248/fe5ac201d15145eb993fd383d7a0f188.png">

</img>

</div>

---

### **ユニークビジョンで活かせるAtCoderの経験**

<section>

<p>
ユニークビジョンのサービスは<a href="https://www.uniquevision.co.jp/case/belugacampaign-famichiki">ファミリーマート様</a>、<a href="https://www.uniquevision.co.jp/case/belugacampaign-bdff-squareenix">スクウェア・エニックス様</a>、<a href="https://www.uniquevision.co.jp/case/belugachatbot-suntory-cclemongame">サントリー様</a>など日本でもトップレベルの企業さまにX/LINE施策の一環で使っていただくことが多いため、ユニークビジョンの社名をご存知でなくても実際にユニークビジョンのシステムを使用したSNSキャンペーンを見かけたことがある方・参加されたことがある方は少なくないと思います。
          
</p>

<p>
SNSは情報の展開が早く影響力の高いメディアであるため、こうした大手企業がSNSで実施するキャンペーンは品質やスピードの面でシビアなものがほとんどで、高負荷・高難易度案件が多く存在しています。その中でも即時性を求められるケースや大規模データを扱う際などで、アルゴリズムの知見を活用していただけます。
          
</p>

<p>
ただ、直接的なアルゴリズムの能力のみを求められる業務はほぼありません。様々な技術領域を組み合わせて、全社を挙げてより良いサービスを作り上げていく中での1つの強みとしていただけたらと思います。特に競技プログラミングに取り組む中で培われた、
<b>
決められた時間内でいかに問題を解決していくか
</b>
という能力は幅広い業務に活かしていただけます。
          
</p>

<p>
他にも計算量やコーナーケースへの意識、問題解決のための選択肢の多さ、得意な言語を何かしらお持ちであることなど、競技プログラミングを通じて実業務で強みとなる要素は数多くあります。競技プログラミングでのご経験を活かし、ユニークビジョンで活躍していただけたら嬉しいです。


</p>

<p>
<a href="https://prtimes.jp/main/html/rd/p/000000039.000028415.html">「AtCoder 競技プログラマー就職企業人気ランキング2023」</a>では学生競技プログラマー（レーティング800～1599）のランキングにて選出していただきましたが、実際にユニークビジョン社内にも
            
<b>

<span>
橙色コーダー1名
</span>
、
<span>
黄色コーダー1名
</span>
、
<span>
青色コーダー7名 
</span>
、
              
<span>
水色コーダー6名
</span>
、
<span>
緑色コーダー3名
</span>

</b>
、その他数名の競技プログラマーが在籍しており、競技プログラマーの皆様とは高い親和性を感じております！
          
</p>

</section>

---

### **社内競技プログラミング部員のメッセージ**

<section>

<p>
数年前まで社内に競技プログラマーはほぼいなかったのですが、年々増え続け、今では15名以上の競技プログラマーが在籍しています。有志で競技プログラミング部を作り、出場したいコンテストの仲間を募ったり、問題の振り返りをしたりという活動をしています！
          
</p>

<p>
競プロユーザーがいなかった時代もあったので、社員同士でチーム戦のコンテストに出たときはとても嬉しかったです。
            実際の案件でも、再帰関数・トポロジカル順序など競技プログラミングの知識を活かしてスピード感のある実装を叶えられている業務もあります。
          
</p>

<p>
共通の話題があるので打ち解けるのも早いですし、AtCoderさんの本社が近いことも密かに嬉しいポイントです(笑)

気になった方は是非、UV Study（勉強会）などで遊びに来てください！
          
</p>

</section>

<div>

<img src="https://img.atcoder.jp/abc334/Competitive_programming_club.png">

</img>

</div>

---

### **社内AtCoderユーザーからのメッセージ**

<section>

<p>
ユニークビジョンでは担当業務に関わらずスピード感を持った開発と高いパフォーマンスや可用性が求められており、その実現のためにエンジニア主導で新しい技術の導入や開発体験を高めるための改善の検討を行うなど、改善意欲のあるエンジニアが力を発揮しやすい職場となっています。
          
</p>

<p>
また、主要サービスであるBelugaキャンペーンは柔軟で表現能力が高く未知のキャンペーンでも多くの場合追加開発なしで行うことが出来るようになっています。一方で、その柔軟さ故に案件実現の可否を判断するためには深い業務知識と問題の本質を見抜く能力、パフォーマンス的に問題が無いかを判断する計算量などの知識が必要で簡単ではありません。こういった業務は通常のWebアプリケーション開発にはない面白さがあり、競技プログラミングで培った知識や思考力を活かしていただけるのではないかと期待しています。
          
</p>

<p>
向上心の高いエンジニアが多く、競技プログラミングをはじめ様々な技術分野について社内で議論することが出来ます。少しでもご興味を持たれた方は是非、オフィスツアーや弊社主催の勉強会に参加してみてください！
          
</p>

</section>

---

### **イベント**

<section>

<p>
2025年10月15日(水)に、本コンテスト参加者のみを対象としたLT会+懇親会をユニークビジョン 新宿オフィス （現地参加のみ）にて開催予定です！
            LT回は「競技プログラミング」をテーマとして、登壇参加・聴講参加ともに募集いたします。

            LT会は1人5分枠にて、最大6名様のご登壇を想定しております！
            お話いただく内容は、今日から使える競プロTipsや競プロ用実行環境構築の話、お気に入りのアルゴリズムなど、競技プログラミングに関連すればなんでもOKです。

            こちらの参加を希望される方は、参加登録情報よりご回答ください。コンテスト終了後、メールにて詳細をご案内いたします。
            是非お気軽にご参加ください！
            ※希望者多数の場合には抽選とさせていただきます
</p>

</section>

---

### **配点**

<section>

<div>

<div>

<table>

<thead>

<tr>

<th>
問題
</th>

<th>
点数
</th>

</tr>

</thead>

<tbody>

<tr>

<td>
A
</td>

<td>
100
</td>

</tr>

<tr>

<td>
B
</td>

<td>
200
</td>

</tr>

<tr>

<td>
C
</td>

<td>
350
</td>

</tr>

<tr>

<td>
D
</td>

<td>
425
</td>

</tr>

<tr>

<td>
E
</td>

<td>
450
</td>

</tr>

<tr>

<td>
F
</td>

<td>
500
</td>

</tr>

<tr>

<td>
G
</td>

<td>
575
</td>

</tr>

</tbody>

</table>

</div>

</div>

</section>

---

### **賞品**

<section>

<p>
条件を満たす方へ抽選で25名にAmazonギフトカード10,000円分を進呈します。未成年の参加者は、賞品の受け取りについて保護者の同意を得てください。
          
</p>

</section>

#### **賞品に関する注意事項**

<section>

<ul>

<li>
少なくとも1問以上の正解が必要です。
</li>

<li>
賞品は日本国内に在住の方のみに、Amazonギフトカードにてお送りいたします。
</li>

<li>
受賞対象者になるには、参加登録情報の全ての必須項目を記入していただく必要があります。未記入の必須項目がある場合は受賞対象外とさせていただきます。
</li>

<li>
賞品の受け取り方法などについては、コンテスト終了後に受賞された方へメールにてご連絡させていただきます。運営事務局が提示させていただく期限内に必要事項をご返信いただけない場合はお送りできかねますので、ご注意ください。
            
</li>

<li>
何らかの理由により賞品配送が完了しなかった場合、ご登録いただいたメールアドレスにご連絡させて頂きます。2週間以内にご返信がない場合は賞品対象外となります。
</li>

</ul>

</section>

### **ユニークビジョン賞**

<section>

<p>
本コンテストでは上記賞品に加え、ユニークビジョンのサービスである<a href="https://www.uniquevision.co.jp/service/beluga-campaign/">Belugaキャンペーン for 𝕏</a>の「カスタムストーリー」機能を用いてユニークビジョン賞を決定します！

2025年10月10日(金)～10月16日(木)の期間中、ユニークビジョン技術𝕏アカウント（<a href="https://twitter.com/uv_technology">@uv_technology</a>）からキャンペーンに参加していただいた方の中から、

合計100名に500円分のAmazonギフトカードを贈呈します。
          
</p>

<p>
キャンペーン対象となる投稿は、2025年10月10日(金)11:00に<a href="https://twitter.com/uv_technology">@uv_technology</a>よりポストいたします。

是非、アカウントをフォローしてお待ちください！
          
</p>

<img src="https://img.atcoder.jp/abc283/f87431c5cca83ecad57d6da9d3be5d7f.png">

</img>

#### **【キャンペーン参加方法】**

<ol>

<li>
ユニークビジョン技術𝕏アカウント（<a href="https://twitter.com/uv_technology">@uv_technology</a>）をフォロー
            
</li>

<li>
キャンペーンポストから問題に挑戦！
</li>

<li>
成績をポストで応募完了
</li>

<li>
キャンペーン終了後一週間以内に、当選者のみにDMでご連絡（当選：100名）
</li>

</ol>

#### **【キャンペーン開催期間】**

<p>
2025年10月10日(金)11:00～10月16日(木)23:59
</p>

#### **【ユニークビジョン賞キャンペーンにおける注意事項】**

<p>
■対象者
</p>

<ul>

<li>
本キャンペーンのご参加前にこちらの応募規約をお読みいただき、同意の上でご参加ください。本キャンペーンに参加された場合、本規約にご同意いただいたものとみなします。
            
</li>

<li>
15歳未満のお客様は事前に保護者のご同意を得るか、又は保護者と一緒に本規約をお読みの上でご参加ください。15歳未満のお客様からのご参加は、すべて保護者のご同意を得たものとみなします。
            
</li>

<li>
本コンテストにご参加いただく際の参加登録情報に
<b>
ユーザー名を入力していただいた𝕏アカウント
</b>
が、本キャンペーンの参加対象となります。
            
</li>

<li>
本コンテストの参加登録時に
<b>
𝕏ユーザー名を入力されていない方、誤った入力をされている方、情報提供同意のチェックを外されている方、本コンテスト参加時のレーティングが0の方は、キャンペーン参加対象外
</b>
となります。参加対象外のアカウントで本キャンペーンに参加された場合には、
<b>
一切のリプライ及びDMの送信を行っておりません
</b>
のでご了承ください。
              
<ul>

<li>
過去のキャンペーンでは、情報提供同意のチェックや𝕏ユーザー名入力の間違いから、誤って参加対象外となっているケースもございます。
<b>
コンテスト終了後の変更は反映できかねます
</b>
ため、キャンペーン参加をご希望の方はコンテスト開始までに参加登録情報をご確認ください。
                
</li>

</ul>

</li>

<li>
𝕏アカウントを非公開（鍵付き）にしている場合、ポストを確認できないため本キャンペーンにはご参加いただけません。
            
</li>

<li>
𝕏アカウントが、新規作成したばかり、利用頻度が少ない、𝕏ルールに反している等と𝕏 APIが判断した場合には、リプライをお送りできない場合がございます。
            
</li>

</ul>

<p>
■参加
</p>

<ul>

<li>
成績のポストに際し、第三者のプライバシーや肖像に対する権利、著作権、その他一切権利を侵害するもの、第三者を誹謗中傷するもの、政治活動・宗教活動を伴うもの、犯罪に結びつくもの、𝕏の定める規約又はその他法令もしくは公序良俗に反するもの、閲覧者が不快になるものは投稿しないでください。
            
</li>

<li>
前項への違反もしくはその可能性があることが判明した場合、又はその他弊社において対象投稿の内容が不適切と判断した場合、応募又は当選を無効とする場合があります。
            
</li>

<li>
問題に参加される際、ページを閉じる、もしくはリロードを行うと、最初からやり直しとなります。
            
</li>

<li>
広告をブロックするアプリやサービスなどをご利用の場合には問題が正常にお楽しみいただけない可能性があるため、成績のポストが完了するまで該当機能の停止・解除をお願い致します。
            
</li>

<li>

<b>
iOSの「低電力モード」では正常に動作しないため、必ず解除の上でご参加ください。
</b>

</li>

</ul>

<p>
■当選
</p>

<ul>

<li>
当選は1アカウントにつき期間中で1回までとなります。
            
</li>

<li>
当選の権利は当選者ご本人のみに帰属します。当選者の権利を譲渡・換金・変更することはできません。
            
</li>

<li>
抽選結果につきましては、キャンペーン終了後一週間以内に、当選者のみにダイレクトメッセージにて当選のご連絡と賞品に関するご案内をさせていただきます。
            
</li>

<li>
当選連絡時までに対象投稿を削除された場合は、応募を無効とさせていただきます。
            
</li>

<li>
ユニークビジョン技術𝕏アカウントをフォローされていない場合、DMを送信できないため、他の参加条件を満たしていた場合にも自動的に落選となります。
<b>
キャンペーンにご参加いただく際には、当選のご連絡までユニークビジョン技術𝕏アカウントのフォローは外さない
</b>
ようにお願いいたします。
            
</li>

<li>
都合により当選通知のご連絡が遅れる場合がございます。あらかじめご了承ください。
            
</li>

</ul>

<p>
■その他
</p>

<ul>

<li>
𝕏ユーザー名から他のデータを抽出することはありません。
</li>

<li>
無効となる当選が発生した場合など、状況によっては当選者数が記載の人数に達しない可能性がございます。
            
</li>

<li>
本キャンペーンについてのご確認や賞品送付等に関して、ユニークビジョン株式会社からご連絡をさせていただく場合がございます。
            
</li>

<li>
本キャンペーンの参加状況および抽選結果に関するお問い合わせに関してはお答え致しかねますので、あらかじめご了承ください。
            
</li>

<li>
本キャンペーンは、スマートフォン/PCからご参加いただけます。
            
</li>

<li>
本キャンペーンへのご参加は、日本国内に在住の方に限らせていただきます。
            
</li>

<li>
インターネットの通信料/接続料はお客様の負担となります。通信の際の接続トラブルについては責任を負いかねます。
            
</li>

<li>
𝕏のバージョンおよびご利用端末のOSのバージョンが最新の状態でない場合、正常にご参加いただけない可能性がございます。
            
</li>

<li>
本キャンペーンは、𝕏 APIや仕様の変動、その他やむを得ない事情により予告なく中止または内容・期間が変更になる場合もございますので、あらかじめご了承ください。
            
</li>

<li>
キャンペーン主催：ユニークビジョン株式会社
            
</li>

<li>
AmazonはAmazon.com, Inc.またはその関連会社の商標です。
            
</li>

</ul>

<p>
本キャンペーン参加者の個人情報の取り扱いについては、下記ページをご覧ください。

個人情報保護方針：<a href="https://www.uniquevision.co.jp/privacypolicy">https://www.uniquevision.co.jp/privacypolicy</a>
</p>

</section>

---

### **注意事項**

<section>

<ul>

<li>
大学生および大学院生の方には、弊社の新卒採用イベント等のご案内をさせていただくことがございます。
            
</li>

<li>
社会人の方には、弊社のキャリア採用イベント等のご案内をさせていただくことがございます。
            
</li>

</ul>

</section>

---

### **ルール**

<section>

<ol>

<li>
コンテスト中に問題に正解すると点数を獲得できます。
</li>

<li>
順位は総合得点で決定します。
</li>

<li>
同点の場合は提出時間の早い人が上の順位になります。
</li>

<li>
誤答を提出するたびにペナルティが加算されます。このコンテストのペナルティは5分です。詳細は画面下部の「ルール」をご覧ください。
            
</li>

</ol>

<p>
このコンテストは full-feedback
            形式のコンテストです。コンテスト中に提出された結果だけで順位が決定します。
          
</p>

</section>

### **便利情報**

<ul>

<li>
<a href="https://atcoder.jp/">トップページ</a>
</li>

<li>
<a href="https://atcoder.jp/post/37">参加方法</a>
</li>

<li>
<a href="https://atcoder.jp/contests/practice">提出の練習ページ</a>
</li>

</ul>

</span>

</span>

</div>
