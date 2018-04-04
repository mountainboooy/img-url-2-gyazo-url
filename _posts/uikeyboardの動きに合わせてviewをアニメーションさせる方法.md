---
title: UIKeyboardの動きに合わせてviewをアニメーションさせる方法
tags:
  - iOS
  - iOS7
  - iPhone
  - UIKeyboard
  - UIViewAnimationCurve
  - UIViewAnimationOptions
id: 697
categories:
  - 開発
date: 2014-07-12 23:07:53
---

UIkeyboardの動きに合わせてビューも移動させたい。以下の動画ではピンクの部分が対象のビュー。

[![keyboard](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/07/keyboard.gif)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/07/keyboard.gif)

<span style="font-size: 12pt;">**通常の方法**</span>
NSNotificationCenterを使い、キーボードの動きを通知。その際にキーボードの動きに合わせてビューのアニメーションを行う。キーボードのアニメーションに関するパラメータはNSNotificationCenterの引数として渡されるので、それを使用する。

<span style="font-size: 12pt;">**問題点**</span>
NSNotificationの引数として渡されるUIKeyboardのアニメーションの動きはUIViewAnimationCurve型。しかし、UIViewのアニメーションを定義するのに必要なパラメータはUIViewAnimationOptions型。なのでUIViewAnimationCurveをUIViewAnimationOptionsに変換してあげる必要がある。UIViewAnimationOptionsはドキュメントでは4つ定義してあり、通常であればこの4つのいずれかに当てはまるはず。ところが、UIKeyboardに使われてるUIViewAnimationCurveは上記のいずれのオプションにも当てはまらない。iO7以降では、KIKeyboardのアニメーションはドキュメント非記述の設定で動いているようだ。

<span style="font-size: 12pt;">**解決案**</span>
UIViewAnimationCurveの値を強引にUIViewAnimationOptionsに変換する。どうやらUIViewAnimationCurveをビット演算で左に16回シフトするとUIViewAnimationOptionsの値になるようだ。
> <pre class="brush: objc; gutter: false">- (void)keyboardWillMove:(NSNotification *)n> 
> {> 
>     CGRect keyboardFrame = [n.userInfo[UIKeyboardFrameEndUserInfoKey]CGRectValue];> 
> 
>     //animation params> 
>     NSTimeInterval duration = [n.userInfo[UIKeyboardAnimationDurationUserInfoKey] doubleValue];> 
>     UIViewAnimationCurve keyboardCurve = [n.userInfo[UIKeyboardAnimationCurveUserInfoKey]intValue];> 
>     UIViewAnimationOptions keyboardOption = keyboardCurve &lt;&lt; 16;> 
> 
>     _bottmSpaceToInputView.constant = self.view.frame.size.height - keyboardFrame.origin.y;> 
> 
>     //animation action> 
>     [UIView animateWithDuration:duration delay:0.0 options:keyboardOption animations:^{> 
>         [self.view layoutIfNeeded];> 
>     } completion:nil];> 
> }> 
> </pre>
<span style="font-size: 12pt;">**参考URL**</span>
[https://devforums.apple.com/message/878410#878410](https://devforums.apple.com/message/878410#878410)