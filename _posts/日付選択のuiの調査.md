---
title: 日付選択のUIの調査
tags:
  - airbnb
  - datepicker
  - form
  - javascript
  - jquery
  - web
  - webサービス
id: 1589
categories:
  - デザイン
  - ブログ
  - 開発
date: 2016-09-23 20:04:57
---

先日作った[新幹線の予約アプリ](http://mountainboy.me/2016/09/20/%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%97%85%E8%A1%8C%E8%80%85%E5%90%91%E3%81%91%E3%81%AB%E6%96%B0%E5%B9%B9%E7%B7%9A%E3%81%AE%E4%BA%88%E7%B4%84%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E4%BD%9C%E3%81%A3/)で日付選択のためにinputタグのtype='date'を使っていたのだが、かなりの環境で表示されていないことがわかった。他の方法を考えることにした。シンプルなデザインでモバイルフレンドリなものを探す。ところで他のサービスはどんな手法を使ってるのだろうか。

<div style='width: 100%; height: 50px;'></div>

## airbnb

![](https://i.gyazo.com/3c83c307a8737c87b6a2d15bcddf1755.png)
フォームがバラバラに分割されておらずシンプル。モバイルの場合はフォームを全画面モーダルで表示。あくまで入口はシンプルに見せたいらしい。この辺り、従来の旅行会社のサイトとはちょっと違う。日付の選択もモバイルに特化したモーダルタイプになっていて安心感がある。モバイルの場合は遷移を増やしてでもその時その時のUIにフォーカスさせることが効果的だと感じる。

<div style='width: 100%; height: 50px;'></div>

## skyescanner

![](https://i.gyazo.com/2adf084ea67f5551ff4a22ec5f4066f9.png)
ファーストビューでのフォームはちょっと複雑だが要素がはっきりしてて視認しやすい。日付選択もモバイルもやはりしっかりと全画面表示されている。

他にもモバイルに特化したものなら[この辺り](http://pttrns.com/?scid=4)が参考になりそうだ。

<div style='width: 100%; height: 50px;'></div>

### 探した結果

[pickadate.js](https://gyazo.com/b75b174fc60e5fb5a5a725e91594f5e3)が良さそうだ。デフォルトのデザインがシンプルでモバイルフレンドリ。

![](https://i.gyazo.com/ea56d1f0e3b7046afa53910cd07cc900.png)