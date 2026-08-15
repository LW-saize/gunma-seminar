# 新作ソシャゲ情報まとめアプリ（MVP）

Claude Codeセミナーの演習として作成した、静的HTML/CSS/JSのみで動くWebアプリのMVPです。
`notes/new-service-spec.md`（仕様書）・`notes/new-service-design.md`（デザイン定義書）を元に実装しています。

## 起動方法

ブラウザのセキュリティ制限を避けるため、簡易サーバーで起動することを推奨します。

```
cd app
python3 -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` を開いてください。

## ページ構成

- `index.html` — 新作タイトル一覧（ジャンルフィルタ付き）
- `detail.html` — タイトル詳細
- `admin.html` — 管理画面（タイトルの登録・編集・削除）

## データの扱いについて

このMVPでは、管理画面で登録したデータはブラウザの localStorage に保存されます。
別のブラウザ・別の端末とはデータが共有されません（本番実装ではサーバー側DBが必要です）。
初期表示用のサンプルデータは `js/seed-data.js` に定義しています。
