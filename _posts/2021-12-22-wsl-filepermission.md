---
title: WSL2から見たWindows側フォルダの所有者がおかしかった
date: 2021/12/22
categories: [WSL]
tags: [WSL, Linux, Ubuntu, Windows, WSL2]
---

WSL2 (Windows Subsystem for Linux) の Ubuntu環境をインストール後、dockerコマンドを実行した時にパーミッション関連でエラーが発生した。

## 結論

WSL2 を再起動したら直った。

## 状況

`/mnt/c/Users/togino77/work` ディレクトリ内で `ls -al` したところ、本来 `togino77` が所有者であるのに `root` が所有者になっているディレクトリがある。

```sh
togino77@machine:/mnt/c/Users/togino77/work $ ls -al
...略...
drwxr-xr-x 1 root root 4096 Dec 21 17:36 _posts
...略...
```

## やってみたこと

Windows側で、 `C:\Users\togino77\work\_posts` のプロパティにあるセキュリティを確認したが、詳細設定で所有者を見ても `togino77` になっており、正常である。

`chmod` コマンドで所有者を変更してみるが、変化しない。（コマンドエラーにもならない）

```sh
togino77@machine:/mnt/c/Users/togino77/work $ chmod togino77:togino77 _posts
```

## 解決

Windows側の Terminal にて Powershell を開き、下記コマンドを実行して、Ubuntu 環境に再接続したら直った。

```PowerShell
PS C:\Users\togino77> wsl --shutdown
```

## おまけ

WSL のファイルパーミッションについて

https://docs.microsoft.com/ja-jp/windows/wsl/file-permissions