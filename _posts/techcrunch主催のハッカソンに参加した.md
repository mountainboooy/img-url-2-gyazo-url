---
title: TechCrunch主催のハッカソンに参加した
tags:
  - API
  - Design
  - FabLab
  - GraceNote
  - iOS
  - TechCrunch
  - webサービス
  - アイデア
  - ハッカソン
  - 大阪
  - 電子工作
  - 音楽
id: 506
categories:
  - ブログ
  - 開発
date: 2014-04-18 20:44:44
---

グランフロント大阪のイノベーションハブにて催されたTechCrunch主催のハッカソン。テーマがIoTだったので興味を惹かれて参加。良いチームにも恵まれ色々と発見ができたイベントだったので内容を記録。

[![SONY DSC](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC088471-1024x680.jpg)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC088471.jpg)

&nbsp;

**<span style="font-size: large;">イベントのテーマ</span>　**
<div><span style="font-size: large;"> </span>**
**</div>
<div></div>
<div>**<span style="color: #000000; font-size: large;">『IoTにて世の中に良い変化を起こす、一点突破型のプロダクトアウトプット』</span>
**</div>
&nbsp;

&nbsp;

**<span style="font-size: large;">協賛起業と提供技術</span>**

**・ユカイ工学　<span style="font-size: small;">[「KONASHI」](http://konashi.xu.com/)</span>
**iOSやJavascriptの開発環境に特化したフィジカルコンピューティングのツールキット。

**・mbed 「[mbed」](https://mbed.org/)
**クラウド上で動作するオンラインコンパイラや各種ライブラリを使用して、センサ制御やネットワーク接続機能を素早くプロトタイピングすることが可能。[
](https://mbed.org/)**
・PUX株式会社　[画像認識API](http://www.panasonic.co.jp/pux/api_sdk/)
**手書き認識、オブジェクト認識、顔、年齢認証など。

**・オムロン株式会社　[「画像センシングコンポ　HVC（Human Vision Components）」](http://plus-sensing.omron.co.jp/product/)
**10種類のアルゴリズム（顔検出、顔認証、表情推定、年齢推定、性別推定、顔向き推定、視線推定、目瞑り推定、手検出、人体検出）と、カメラモジュールをコンパクトに一体化した機器組込み型のセンサ。

**・日本マイクロソフト株式会社　[「Microsoft Azure」](http://azure.microsoft.com/ja-jp/)**

**・株式会社デンソー　[「NaviCon URLスキームAPI」](https://navicon.denso.co.jp/navicon_download/pages/ja/index.jsp)
**特定の位置情報をNaviConアプリに送信し、NaviConアプリ経由でカーナビに送るためのAPI。NaviConの地図上で該当地点を表示するためのアプリ起動URLを取得できる。

**・Physicaloid 「[PocketDuino」](http://www.physicaloid.com/wiki/doku.php?id=hardware%3Apocketduino)**
Android端末に直接さして使えるフィジカルコンピューティングツール。

**・アマゾンデータサービスジャパン　[「Amazon Web Services」](https://aws.amazon.com/jp/)
**

**・グレースノート株式会社 　[音楽解析API](https://www.gracenote.com/?language=ja)
**音楽解析API。音声からの曲名認識、テンポ、ジャンル、ムードからの選曲タイムライン分割など。

**・ゼンリンデータコム 　[「いつもNAVI API」](http://www.zenrin-datacom.net/business/develop/apicgi/index.html)
**住所検索、ルート検索、施設検索など。

&nbsp;

**タイムライン**

Day1(4/12)
10:00〜：開会宣言（TechCrunch Japan編集長）
10:10〜：イベント進行、ルールについてのガイダンス
10:20〜：Keynote（Moff 高萩氏より）
10:40〜：ハードウェア、デバイスガイダンス（協力企業様各社5分）
12:00〜：参加者によるアイデアブレストとチームビルディング
13:00〜：チーム毎のアイデアソン
14:30〜：チーム毎のアイデア宣言（開発プロダクトの確定）
15:00〜：Hackingタイム　&amp;　協力企業様の技術サポート
19:00〜：中間発表

Day2(4/13)
10:00〜：前日のおさらい、振り返りガイダンス
10:10〜：Hackingタイム　&amp;　協力企業様の技術サポート
16:00〜：成果発表
17:30〜：審査
17:30〜：懇親会、審査結果の発表、表彰、みんなで写真撮影
〜19:30 閉会

&nbsp;

**アイデア**<span style="font-size: large;">
<span style="font-size: small;">　まず協賛企業による提供技術の説明が一通りあり、その後アイデア展開の時間が設けられた。出したアイデアを持って１人１人がお互いにプレゼンして回り、仲間を集める。何も考えてきていなかったのでその場でアイデア考える。子供の日常の動きを音楽に変換し、親にBGMとしてリアルタイムで届けるような案を提案。身体と音楽をつなぐという点で同じ類いのアイデアをもつ３人とチームを組むことができた。</span></span>

[![SONY DSC](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08867-1024x680.jpg)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08867.jpg)

&nbsp;

**<span style="font-size: large;">製作</span>**
プロダクトを完成させる事が大前提のハッカソン、コンセプトの議論はそこそこにして早々に製作に入る。子供のアクションをセンシングできる専用のデバイスをこの場で作りたい所だが、チーム内は全員がソフトウエアエンジニア。なのでここはiOSの端末で代用する事になった。僕はこのiOSアプリとプロダクトのデザインを担当。あとはバックエンドに２人、音楽再生用のフロントエンドに１人。
周囲を眺めると、既にバリバリ配線周りをいじってるところや議論を重ねている所、黙々とコーディングしているところなど様々チームがある。ただし運営側でチームビルディングやアイデアソンにかける時間はうまくコントロールしてくれていたので、極端な差は出てなかったように思う。
途中小さなトラブルはいくつかあったが、優秀なチームメイトたちのおかげで予定通りのものが時間内に完成。

[![SONY DSC](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08880-1024x680.jpg)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08880.jpg)

[![SONY DSC](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08885-1024x680.jpg)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08885.jpg)

 [![feesic-04](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/feesic-043.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/feesic-043.png)

&nbsp;

**<span style="font-size: large;">プレゼン・結果
</span>**<span style="font-size: small;">最後にスライドとデモを用いてプレゼンを行う。時間は５分（質疑応答含めず）。プレゼンも問題なく無事に終わり、結果発表が懇親会の場にて行われた。協賛賞のMicrosoft賞、そして審査員として参加していた藤原健真さんよりサプライズで特別賞を頂いた。</span>

&nbsp;

**<span style="font-size: large;">他チームの成果物</span>**
どのチームもとてもユニークなプロダクトが完成していた。その中でも以下の作品はとても印象的だった。

**・＜プロダクト名失念＞**
酔えば酔う程強くなるというスマホゲーム。Android端末にとりつけられたアルコールセンサーにより酔っぱらい度をチェック。ある程度酔っていないとそもそもログインできないという徹底ぶり。

**・ポスタライズ
**閲覧者の反応を解析できるポスターシステム。ポスターに仕込まれた小型デバイスにより、そのポスターのPV(立ち止まって見入った人の数）や閲覧者の反応をトラッキングすることができる。

**・秘密のささやき**
街中で見つけた好みの女性の「吐息まじりの声」を聴く事ができるデバイス。好みの女性を見付けたら、専用のデバイスで写真を撮影。顔認証APIを使用してその顔のSM度合いを判定し、判定結果に合ったと吐息まじりの声を発してくれる。端末にはファンが組み込まれており、耳にあてる事でリアルな吐息を感じることができる。

**・DIVE**
音楽を体で体感できるシステム。音楽のテンポ位置を解析し、それに合わせて体に電気を流す。実際に試してみたところ、曲に合わせて体が勝手に動いてしまうので強烈な印象だった。

&nbsp;

[![SONY DSC](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08898-1024x680.jpg)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08898.jpg)

[![SONY DSC](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08904-1024x680.jpg)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/DSC08904.jpg)

&nbsp;

<span style="font-size: large;">**感想
**</span>

・運営陣がすごく手際がよかった。ハッカソンとはいえ材料与えて投げっ放す感じではなく、チームビルディングやアイデアソンなど各段階で時間を区切ってしっかりアテンドしてくれた。ワークショップ的な要素が多分に含まれていた。最終的にどのチームもしっかりアウトプットできたのはこういう運営あってのものなのかもしれない。ただ、チームビルディングはアイデアベースで行うのではなく、スキルによって事前に分けられているほうがやり易いと感じた。[以前参加したイベント](http://mountainboy.me/2013/08/06/36%E6%99%82%E9%96%93%E3%81%A7%E7%85%A7%E6%98%8E%E3%82%92%E4%BD%9C%E3%82%8B%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3-design-loves-engineering-1/)ではあらかじめ運営側によってチーム分けされており、とてもスムーズに役割が決まった。

・個人の発送やスキル、そしてごく少人数のチームワークが作り出すモノの大きな可能性を感じることができた。 これからはたくさんの小国が加わる戦国時代なのか。このことにワクワクする一方で、サラリーマンエンジニアとしてはイベント以降のアクションについて考えると急に敷居が高くなる。この後のアクションフェーズを細かく具体的に設定する必要がありそう。「とりあえず次はここまで進めてみよう。そして一旦考えよう」みたいなマイルストーン。

・もう少しだけ事前に準備しておけばよかった。協賛企業のAPIや技術を確認し試しておくくらいの事をやっておけばもっと濃厚に過ごせたかもしれない。

・ぼくは以前家電メーカーで働いていた。その業界には、社内的な事情で好きなものを作れずに悶々している優秀なエンジニアやプロダクトデザイナーもたくさんいた。実際にハードウェアを作れる人を求めている冒険家たちが今ではメーカーの外にたくさんいるので、たまには外にでると面白い反応が生まれると思う。

&nbsp;

[![10169422_677330252324312_5084330100894366470_n](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/10169422_677330252324312_5084330100894366470_n.jpg)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/04/10169422_677330252324312_5084330100894366470_n.jpg)

<span style="font-size: large;">** **</span>

&nbsp;