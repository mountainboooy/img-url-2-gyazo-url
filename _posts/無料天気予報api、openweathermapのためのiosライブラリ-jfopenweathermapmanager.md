---
title: 無料天気予報API、OpenWeatherMapのためのiOSライブラリ JFOpenWeatherMapManager
tags:
  - API
  - iOS
  - JFOpenWeatherMapManger
  - OpenStreetMap
  - OpenWeatherMap
  - 天気予報
id: 334
categories:
  - 開発
date: 2013-12-02 19:11:46
---

そのうち役にたちそうなのでメモ。
[OpenWeatherMap](http://openweathermap.org/ "OpenWeatherMap")は開発者に無料で天気情報を提供するオンラインサービス。APIはJSONやxmlで取得可能。このAPIをiOSやMac OSX でより簡単に利用できるライブラリが[JFOpenWeatherMapManager](https://github.com/jfield44/JFOpenWeatherMapManager "JFOpenWeatherMapManager")。

[![c763a28b7cbae1305abb59db44a93234](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2013/12/c763a28b7cbae1305abb59db44a93234.png)](http://mountainboy.boo.jp/wordpress/wp-content/uploads/2013/12/c763a28b7cbae1305abb59db44a93234.png)

&nbsp;

<span style="font-size: large;">**使い方**</span>

**①ヘッダファイルをインポート**
> #import "JFWeatherData.h"> 
> #import "JFWeatherManager.h"> 
> #import "DataModels.h"
**②OpenWeatherMapのAPI_KEYを作成**
> static NSString *API_KEY = @"YOUR_API_KEY_HERE";
**③インスタンス作成**
> JFWeatherManager *weatherManager = [[JFWeatherManager alloc]init];
**③情報を取得**
パラメータとして緯度軽度を渡すと、情報が取得できる
> [weatherManager fetchWeatherDataForLatitude:toAdd.coordinate.latitude andLongitude:toAdd.coordinate.longitude withAPIKeyOrNil:API_KEY :^(JFWeatherData *returnedWeatherData){> 
> NSLog(@"Latitude %.3f",[returnedWeatherData latitudeCoordinateOfRequest]);> 
> NSLog(@"Longitude %.3f",[returnedWeatherData longitudeCoordinateOfRequest]);> 
> NSLog(@"Conditions are %@",[returnedWeatherData currentConditionsTextualDescription]);> 
> NSLog(@"Temperature is %f",[returnedWeatherData temperatureInUnitFormat:kTemperatureCelcius]);> 
> NSLog(@"Sunrise is %@",[returnedWeatherData sunriseTime]);> 
> NSLog(@"Sunset is %@",[returnedWeatherData sunsetTime]);> 
> NSLog(@"Hours of Day Light are %@",[returnedWeatherData dayLightHours]);> 
> NSLog(@"Humidity is %@",[returnedWeatherData humidityPercentage]);> 
> NSLog(@"Pressure is %0.1f",[returnedWeatherData pressureInUnitFormat:kPressureHectopascal]);> 
> NSLog(@"Wind Speed is %0.1f",[returnedWeatherData windSpeedInUnitFormat:kWindSpeedMPH]);> 
> NSLog(@"Wind Direction is %@",[returnedWeatherData windDirectionInGeographicalDirection]);> 
> NSLog(@"Cloud Coverage %@",[returnedWeatherData cloudCovergePercentage]);> 
> NSLog(@"Rainfall Over Next 3h is %0.1fmm",[returnedWeatherData rainFallVolumeOver3HoursInMillimeters]);> 
> NSLog(@"SnowFall Over Next 3h is %0.1fmm",[returnedWeatherData snowFallVolumeOver3HoursInMillimeters]);> 
> }];
**④取得できるレスポンス情報は以下の通り**
> - (NSString *)currentConditionsTextualDescription; //e.g Broken Clouds> 
> - (double)temperatureInUnitFormat:(TemperatureUnit)temperatureUnit; //e.g 3.0°C , Temperature Available in Kelvin, Celsius and Fahrenheit> 
> - (double)pressureInUnitFormat:(PressureUnit)pressureUnit; //e.g 1007.0 hPA , Pressure Available in Hectopascal, and Pascal> 
> - (NSString *)sunriseTime; //e.g 06:33> 
> - (NSString *)sunsetTime; //e.g 19:32> 
> - (NSString *)dayLightHours; //e.g 12:15> 
> - (NSString *)humidityPercentage; //e.g 88%> 
> - (NSString *)cloudCovergePercentage; //e.g 32%> 
> - (double)windSpeedInUnitFormat:(WindSpeedUnit)windSpeedUnit; //e.g 20.8 MPH, Wind Speed Available in Meters Per Second, Miles Per Hour, Kilometres Per Hour> 
> - (double)windDirectionInDegrees; //e.g 320°> 
> - (NSString *)windDirectionInGeographicalDirection; //e.g N (North)> 
> - (double)rainFallVolumeOver3HoursInMillimeters; //e.g 3mm> 
> - (double)snowFallVolumeOver3HoursInMillimeters; //e.g 7mm> 
> - (double)latitudeCoordinateOfRequest; //e.g 32.79> 
> - (double)longitudeCoordinateOfRequest; //e.g -96.0