---
title: Xcode6でのローカライズの流れをメモ
tags:
  - iOS
  - Xcode6
id: 1424
categories:
  - 開発
date: 2015-04-23 23:20:13
---

ローカライズが必要なのは以下のもの

<span style="font-size: 11pt;">**1\. Storyboard**</span>
<span style="font-size: 11pt;"> ** 2\. Info.plist**</span>
<span style="font-size: 11pt;"> ** 3\. 各ソースコード**</span>

<span style="font-size: 11pt;">**1\. Storyboard**</span>
Storyboardのローカライズ情報は.stringsファイルで管理できる。UIに使われているラベルの値が関連づけれらて設定可能になる。各国に対応した画像を使う場合は.stringsではなくstoryboardの追加が必要。これらはUIの編集に伴う更新は自動では行われない。自動化のスクリプトが出回っているのでそれを使う。

<span style="font-size: 11pt;">**2\. Info.plist**</span>
アプリ名なんかのローカライズはここでやる必要がある。

<span style="font-size: 11pt;">**3\. 各ソースコード**</span>
Localizable.stringファイルを作成して管理。genstrings -a $(find . -name "*.m") で自動生成可能。

上記3種の設定は XLIFF (XML Localization Interchange File Format) 形式での書き出しが可能。このファイルを設定して再度読み込めば、元の設定を更新することも可能らしい。翻訳のみ他の人にお願いするときに便利っぽい。