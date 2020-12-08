# about

> This repository is just temporay and disposable repo.

レポジトリ名は誤字ったけど、そこは流しといてくれ！

- React, vue などをやる時はをこれを使わないこと。他に良い ecosystem がある。
  (`create-react-app`, `vue-cli` ... etc)
- これはかなり使い捨て。落書きみたいなもん

## install

git でレポジトリをクローン

```shell
git clone https://github.com/bananaguard/learnBoostrap.git
```

依存関係をインストール

```shell
npm intall

```

## run server

`http://127.0.0.1:3000`でをブラウザで開けばページが表示

```shell
npm run start
```

## html の場所

下記のようなディレクトリ構成に。

ファイルの拡張子は '.ejs'にすること

```config
 - views
    - page
        - index.ejs
        - testpage.ejs
```

## 記述

`page` 内のファイルは下のように書ける。

```html
<h1>hello test page</h1>
```

でも、吐き出されるHTMLは下記のような感じに。

`<body>`タグ内にだけ記述されるようになる。

```html

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <body>
    
    <!--  ここ各テンプレートファイルで記述された場所  -->
  <h1>hello test page</h1>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>

```

`ejs`は変数を渡したりループ処理を記述したりと色々なことが出来るけど、そこは割愛

## 挙動がおかしいとき

下記のコマンドをプロジェクトディレクトリ上で実行

```shell
npm run kill
```
