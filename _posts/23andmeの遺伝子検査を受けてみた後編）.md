---
title: 23andmeのDNA検査を受けてみた(後編）
tags:
  - 23andMe
  - API
  - DNA検査
  - google
  - ルーツ探し
id: 441
categories:
  - ブログ
  - ライフ
  - 旅
  - 開発
date: 2014-03-02 00:21:59
---

23andmeの検査キットをつかって唾液を送って一ヶ月後、DNA検査の結果が閲覧可能になった旨を知らせるメールが届いた。 結果を順に紹介してみる。

&nbsp;

<span style="font-size: large;"> **①ANCESTRY COMPOSITION (DNAの構成比)**</span>

この項目では自分のDNAの地域構成比を示している。期間は500年間なので、つまり自分の祖先たちが500年前にどこに住んでいたのかを確認できる。結果は99.9%がアジア系で構成されており、日本人のDNAの割合は88.9%。残りは朝鮮半島や中国といった感じ。平均が示されてないけど、まあ一般的なんじゃないかな。

[![comp](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/comp-1024x530.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/comp.png)

&nbsp;

<span style="font-size: large;">**②YOUR FATHER’S LINE (父系の先祖がたどった軌跡）**</span>

男性にしか受け継がれないY染色体のハプログループを元に、父系の祖先たどった軌跡を示している。ハプログループにはアフリカに多いグループAから始まり、ヨーロッパに多いグループEやインドに多いグループLなど、多岐にわたる。今回の結果ではグループD2*。D2系に関してはほぼ日本にしか存在しないようで、発生時期は20000年前。図は500年前のD2*の分布図。父系の先祖たちは500年間はほぼ日本国内にとどまっていたようだ。

[![father](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/father.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/father.png)

&nbsp;

<span style="font-size: large;">**③YOUR MOTHER’S LINE (母系の先祖がたどった軌跡）**</span>

ミトコンドリアDNAのグループにより、母系の先祖がたどった軌跡を示している。ミトコンドリアDNAは母からしか受け継がれない。結果はD4g1。Dグループは主に南米やアジアに多い。D4g1グループの500年前の分布を見ると、かなり広い地域にまたがっている。母は5姉妹で全員が極端に旅行好き。無意識にルーツを求めてさまよっているのかもしれない。

[![mother](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/mother.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/mother.png)

&nbsp;

<span style="font-size: large;">**④NEANDERTHAL ANCESTRY (DNAに含まれるネアンデールタール人の比率）**</span>

ネアンデルタール人？なんで？と思った。昔習った記憶によれネアンデルタール人は今の人類とは関係なく進化し、絶滅した原人の名前だったと思う。
ところが最近になってこの定説が覆されていたらしいのだ。2010年にネアンデルタール人のゲノムが解析され、現生人類のゲノムとの比較が行われた。すると実はぼくらのご先祖様の一部がネアンデルタール人と交配していたということが分かったそうだ。マジか・・・。20万年前の浮気までバレてしまうのね・・・結果は3.0パーセント。日本人の平均が2.7パーセントなのでちょっと高めだ。ちなみにネアンデルタール人はヨーロッパに生息してたらしい。なのでアフリカにとどまった現生人類、つまり今のアフリカ系の人々はネアンデルタール人のDNAは持っていないそうだ。

[![nean](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/nean.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/nean.png)

&nbsp;

<span style="font-size: large;">**⑤DNA RELATIVES (DNAから分かる親戚たち）**</span>

なんと遺伝子上、自分の近縁にあたるであろう人々が列挙されている。ぼくの場合は全部で136人。地域は主に日本と北アメリカ、ハワイにもいる。一番関係が近い人で3-4cousinとなっている。1cousinがいとこ、つまりおじいさん・おばあさんを共有する関係なので3cousinだとひいひいじいさん・ばあさんを共有する関係という事になる。これくらいなら両親どうしなら知ってるかもしれない。23andme上のユーザは自分に関係する名字や地域をタグ付けし検索も可能。さらに家系図の入力もできるので、内容が相手とマッチした際に具体的な関係まで分かりそうだ。DNAの解析結果で構成される、ユーザ同士のグループみたいな使い方も用意されている。自分の母系・父系のどちらの親戚なのかも判別が可能だが、両親のうちどちらかが23andmeのユーザである必要がある。

[![relative](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/relative.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/relative.png)

&nbsp;

[![relative2](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/relative2.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/relative2.png)

[![tree](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/tree-1024x439.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/03/tree.png)

&nbsp;

<span style="font-size: large;">**⑥その他**</span>

・23andmeでは解析結果をAPIとして提供している。一般の開発者でも大量の遺伝子情報を使ってアプリやサービスを作れてしまうということ。
・23andme内ではユーザに自分の嗜好や特技、行動パターンなんかの入力フォームを用意しており、情報提供を募っている。

&nbsp;

<span style="font-size: large;">**まとめ**</span>

・話題のDNA解析サービスの手順を最初から最後まで体験できた。
・自分のルーツの一端を知る事ができた。
・海外転送サービスの便利さを実感できた。
・知らない用語をや内容を調べたので、興味深い関連情報に触れるたくさんふれる事ができた。

DNAは突然変異が生まれては消えていくというような過程が日常的に起きているらしい。常に色んな変異体を用意しておく事で、環境が変化した時にその内のどれかが生き残っていくためだと。環境に適応した変異体が数を増やし、新たなグループになるわけだ。ただ考えてみると、一方でその時の環境に合わない変異体は淘汰され時代によっては病気として扱われるわけで、なんだか不思議だ。変異体によって明暗の差はあれどそれぞれが同じ目的をもって存在してるんだな。漫画で読んだブッダが似たようなこと言ってた気がする。

それにしても、知らない事を調べるに当たって、自分に関連する事から知識を広めていくのは楽しい。モチベーションが変わる。今回のケースに限らず、教育や勉強にはこういう動機付けは利用するとよさそう。

&nbsp;

<span style="font-size: large;">**かかった費用・期間**</span>

・検査キット：$99
・送料(アメリカ→自宅)：$42.5
・転送手数料：¥500
・返送料：¥1400