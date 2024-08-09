# 概要
カジノで行えるゲームの1つ  
「レッドドッグ」をwebアプリケーションでゲームとして遊ぶことができるサイトです  

持ち点100ptからスタート  
獲得した得点に応じて中央のキャラクター(犬)の色が変化します  

ギャンブルの高揚感、喪失感を体感できるゲームを目指して作成をしました  
Reactを使用しているため、CSR(SPA)に向いているアプリを作れるように意識しております  

スマホデバイスでゲームを行うことを想定しているため
CSSはスマホのサイズで綺麗に見えるように作成しております
※今後Tailwind CSSを使用してレスポンシブ対応する予定です
# URL
https://reddog-app-caccb.web.app/

# 使用技術
・React  
・Redux Toolkit  
・Firebase  
　・Hosting 

# 使用したフリー素材
・Loose Drawing  
　https://loosedrawing.com/tag/animal/  
　犬のイラストで使用

・いらすとや  
　https://www.irasutoya.com/  
　カード(トランプ)のイラストで使用

# 機能一覧
・ゲーム「レッドドッグ」  
・X投稿機能(現在の持ち点を投稿)　　

# 使用方法
## ゲームのルール
アプリケーション内に画像付きで説明があります  

【確認方法】  
画面右上に配置している本マークのボタンをタップ  
※ゲーム中どのタイミングでも確認できます  

## ゲームの操作方法
初セッションの際は「ゲームを始める」をタップ  

ゲーム中は必要最低限のボタンが画面下部に表示されます  
① ベットするptを決める(持ち点合計によってボタンで操作できるpt額を変更)  
② 倍賭けができる場合: 倍賭けを するか、しないか の2択をボタンをタップして決定  
③ 引き分けが確定していない場合: 3枚目のカードをめくる  
④ 「次のゲームへ」ボタンをタップし①に戻る  
以後繰り返し

## ゲームオーバーになった場合
画面をリロードして新しいゲームを始めてください  