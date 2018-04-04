---
title: Self Sizing Cells 選択時にセルの位置がずれてしまう問題を解決
tags:
  - iOS
  - iOS8
  - swift
  - UITableView
id: 1435
categories:
  - 開発
date: 2015-04-25 00:52:13
---

#### 問題

iOS8からはtableViewのセルの高さを動的に計算できるようになった。使ってみるとひとつ問題が発生。セルを選択して次画面にナビゲーション遷移する場合、選択直後にセルの位置がずれてしまう。

#### 

#### 原因

セル選択時にestimatedHeightForRowIndexPathが呼ばれて、セルの高さが一斉にデフォルト値に調整されているっぽい。なぜかは分からない。

#### 

#### 解決策

セルの表示タイミングで実際のセルサイズをキャッシュして、estimatedHeightForRowIndexPathでその値を返すようにすることで対処できた。
<pre class="theme:github toolbar:2 show-lang:2 lang:swift decode:true ">func tableView(tableView: UITableView, willDisplayCell cell: UITableViewCell, forRowAtIndexPath indexPath: NSIndexPath) {
    // セルが表示されるタイミングで高さをキャッシュ
    self.cache?[indexPath.row] = cell.frame.size.height
}

func tableView(tableView: UITableView, estimatedHeightForRowAtIndexPath indexPath: NSIndexPath) -&amp;amp;gt; CGFloat {
    if let height = self.cache?[indexPath.row] {
   return height
    }
    return defaultHeight
}</pre>