---
title: UIImageの画像の拡大・縮小・反転・回転
tags:
  - Core Graphics
  - iOS
  - iPhone
  - Objective-C
  - UIImage
id: 633
categories:
  - ブログ
  - 開発
date: 2014-05-26 21:24:12
---

UIImageの画像をリサイズ、回転、反転したい場合がある。こんなときにはQuartz 2D APIを使用する。Quartz 2D APIはCore Graphicsフレームワークの一部。

CTM(Current Transformation Matrix）を使う。主に以下の3つ。

**CGContextTranslateCTM** : 原点の平行移動
**CGContextRotateCTM **: 原点を中心として座標系を回転
**CGContextScaleCTM** : 原点を中心として座標系を拡大縮小

&nbsp;

<span style="font-size: medium;">**①とりあえずそのまま描画**</span>
> <pre class="brush: objc; gutter: false">- (UIImage*)drawImage> 
> {> 
>     UIImage *original_img = [UIImage imageNamed:@&quot;frog&quot;];> 
> 
>     UIGraphicsBeginImageContext(self.view.bounds.size);> 
>     [original_img drawInRect:CGRectMake(0, 0, original_img.size.width, original_img.size.height)];> 
>     UIImage *final_img = UIGraphicsGetImageFromCurrentImageContext();> 
> 
>     UIGraphicsEndImageContext();> 
> 
>     return final_img;> 
> }</pre>> 
> [![uiimage-07](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-07.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-07.png)
&nbsp;

<span style="font-size: medium;">**②画像を平行移動させて描画する場合**</span>
CGContextTranslateCTMで座標系を平行移動
> <pre class="brush: objc; gutter: false">- (UIImage*)drawImageWithTranslateCTM> 
> {> 
>     UIImage *original_img = [UIImage imageNamed:@&quot;frog&quot;];> 
> 
>     UIGraphicsBeginImageContext(self.view.bounds.size);> 
>     CGContextRef context = UIGraphicsGetCurrentContext();> 
>     CGContextTranslateCTM(context, 100, 100);> 
> 
>     [original_img drawInRect:CGRectMake(0, 0, original_img.size.width, original_img.size.height)];> 
>     UIImage *final_img = UIGraphicsGetImageFromCurrentImageContext();> 
> 
>     UIGraphicsEndImageContext();> 
> 
>     return final_img;> 
> }</pre>> 
> [![uiimage-08](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-08.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-08.png)
&nbsp;

<span style="font-size: medium;">**③画像を回転させて描画する場合**</span>
CGContextRotateCTMで座標系を回転
> <pre class="brush: objc; gutter: false">- (UIImage*)drawImageWithRotateCTM> 
> {> 
>     UIImage *original_img = [UIImage imageNamed:@&quot;frog&quot;];> 
> 
>     UIGraphicsBeginImageContext(self.view.bounds.size);> 
>     CGContextRef context = UIGraphicsGetCurrentContext();> 
>     CGContextRotateCTM(context, 30 * M_PI/180);> 
> 
>     [original_img drawInRect:CGRectMake(0, 0, original_img.size.width, original_img.size.height)];> 
>     UIImage *final_img = UIGraphicsGetImageFromCurrentImageContext();> 
> 
>     UIGraphicsEndImageContext();> 
> 
>     return final_img;> 
> }</pre>> 
> [![uiimage-09](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-09.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-09.png)
&nbsp;

<span style="font-size: medium;">**④画像を縮小して描画する場合**</span>
CGContextScaleCTMで座標系を縮小
> <pre class="brush: objc; gutter: false">- (UIImage*)drawImageWithScaleCTM> 
> {> 
>     UIImage *original_img = [UIImage imageNamed:@&quot;frog&quot;];> 
> 
>     UIGraphicsBeginImageContext(self.view.bounds.size);> 
>     CGContextRef context = UIGraphicsGetCurrentContext();> 
>     CGContextScaleCTM(context, 0.5, 0.5);> 
> 
>     [original_img drawInRect:CGRectMake(0, 0, original_img.size.width, original_img.size.height)];> 
>     UIImage *final_img = UIGraphicsGetImageFromCurrentImageContext();> 
> 
>     UIGraphicsEndImageContext();> 
> 
>     return final_img;> 
> }</pre>> 
> [![uiimage-10](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-10.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-10.png)
&nbsp;

<span style="font-size: medium;">**④画像を反転して描画する場合**</span>
CGContextScaleCTMで座標系をマイナス方向に拡大してCGContextTranslateCTMで平行移動
> <pre class="brush: objc; gutter: false">- (UIImage*)drawImageInverted{> 
>     UIImage *original_img = [UIImage imageNamed:@&quot;frog&quot;];> 
> 
>     UIGraphicsBeginImageContext(self.view.bounds.size);> 
>     CGContextRef context = UIGraphicsGetCurrentContext();> 
>     CGContextScaleCTM(context, -1, 1.0);> 
>     CGContextTranslateCTM(context, -self.view.bounds.size.width, 0);> 
> 
>     [original_img drawInRect:CGRectMake(0, 0, original_img.size.width, original_img.size.height)];> 
>     UIImage *final_img = UIGraphicsGetImageFromCurrentImageContext();> 
> 
>     UIGraphicsEndImageContext();> 
> 
>     return final_img;> 
> }</pre>> 
> [![uiimage-11](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-11.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/05/uiimage-11.png)