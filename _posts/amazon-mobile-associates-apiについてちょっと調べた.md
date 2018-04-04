---
title: Amazon Mobile Associates APIについてちょっと調べた
tags:
  - Amazon
  - Amazon Mobile Associates API
  - Android
  - API
  - EC
  - iOS
  - webサービス
  - アイデア
id: 1386
categories:
  - 開発
date: 2014-12-07 13:44:46
---

https://www.youtube.com/watch?v=w5bU28_GYmc

&nbsp;

**<span style="font-size: 12pt;">Amazon Mobile Associates APIとは</span>**

モバイルアプリでAmazonの商品を扱うためのAPI。アプリ内で購入まで完結させる機能もある。商品が売れればアプリの開発者は最大6%のマージンを受け取ることができる。この内容を見るとすごく魅力的。

**<span style="font-size: 12pt;">前提</span>**

これまでモバイルアプリではAmazonの商品情報を取得するAPIを使用する事ができなかった。そんな中でこのAPIが公開されたのは2013年の話。最近になってアプリ内で購入まで完結させたい開発の機会があったので、ちょっと調べてみた。

<span style="font-size: 12pt;"> **ざっくり概要**</span>

*   モバイルアプリ内で商品の検索、詳細表示、購入などが可能
*   Android端末では利用可能だがiOS端末での利用に関しては検討中
*   ユースケースを提出しておけばいいことがあるかもしれない
*   取り扱える商品は1000まで（後述）
*   商品が売れた場合には最大6%の報酬を受け取る事ができる[（詳細）](https://affiliate-program.amazon.com/gp/associates/help/operating/advertisingfees)
[![associates_rates_table_20141101._V320966667_](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/12/associates_rates_table_20141101._V320966667_.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/12/associates_rates_table_20141101._V320966667_.png)[
](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/12/associates_rates_table_20141101._V320966667_.png)

&nbsp;

<span style="font-size: medium;">**具体的な機能**</span>

**① Direct Linking To Amazon
**WebViewやブラウザ等にAmazonの情報を表示できる。個別の商品ページ、検索結果ページ、Amazonのホームページなど。

[![direct-link-to-search-page](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/12/direct-link-to-search-page.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/12/direct-link-to-search-page.png)

&nbsp;

**② In-App Storefront
**ASINを元に商品の詳細情報を返してくれる。返却された情報を元にどういう風に商品を見せるのかは自分次第。ユーザが商品を選ぶと、Amaozon購入用のページが表示される。（たぶんwebView）ユーザはアプリから退出せずに商品を購入することができる。

[![inappshoppingexperience](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/12/inappshoppingexperience.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/12/inappshoppingexperience.png)

【条件】

*   AmazonAppStoreが端末上にインストールされていること
*   アプリがUSで公開されていること
*   ユーザはUSのAmazonアカウントでログインしていること
&nbsp;

**③Testing the Mobile Associates API
**APIをテストするためのツール。Amazon Appstoreにアプリを提出する前の段階で購入テストできる**App Tester**と、Amazon Appstoreにアプリを提出後に購入テストができるLive App Testingがある。

&nbsp;

<span style="font-size: 12pt;">**使えない理由**</span>

とても興味のあるAPIだけど結局は使えなさそう。理由はいくつかある。

**理由１：日本で使えない**

アプリがUSで公開されている必要がある。また、ユーザはAmazon USのアカウント保持者でなければならない。つまり日本で公開するアプリに関しては、購入や個別の商品情報取得の機能が使えない。ダイレクトリンクに関してはこの限りではない。

**理由2：取り扱える商品が少ない**

説明を見ると、1つのアプリで扱える商品はひと月1000までとある。ん！？ 1000！？　それはちょっと少なすぎだろう。と思って、フォーラムのQ&amp;Aを漁ってみた。その結果以下のような事がわかった。

*   まず確認として、ひとつのアプリというのは、One installed appではない。あくまで One developed app。つまりユーザひとりにつき1000個のプロダクトを扱える訳ではなく、自分が開発したアプリひとつにつき1000個のプロダクトしか扱えない。
*   なぜ1000個までなのか。理由はMAAはそもそもたくさんの優良なコンテンツを有するアプリに広告の手段として利用してもらう事が前提だから。つまりショッピング用アプリを開発してもらうために作ったAPIではない。
&nbsp;