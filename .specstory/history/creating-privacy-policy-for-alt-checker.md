## SpecStory

## Creating Privacy Policy for Alt Checker (2025/2/4 23:01:20)

_**User**_

@Codebase 
このツールをGoogleで公開しようとしたら
プライバシーポリシーを作成してくださいと言われたので
githubpageで作成しようと考えています。
作成お願いします

---

_**Assistant**_

プライバシーポリシーのページを作成いたします。GitHubページ用のHTMLファイルを作成します。

```html:privacy-policy.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>プライバシーポリシー - Alt Checker</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }
        h2 {
            color: #34495e;
            margin-top: 30px;
        }
        .last-updated {
            color: #666;
            font-style: italic;
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
    <h1>プライバシーポリシー</h1>
    <div class="last-updated">最終更新日: 2024年3月</div>

    <p>Alt Checker（以下、「本拡張機能」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーでは、本拡張機能の利用に関する個人情報の取り扱いについて説明します。</p>

    <h2>1. 収集する情報</h2>
    <p>本拡張機能は、以下の情報のみを収集します：</p>
    <ul>
        <li>閲覧中のWebページ上の画像情報（src属性、alt属性、width属性、height属性、loading属性）</li>
        <li>閲覧中のWebページのURL</li>
    </ul>
    <p>※これらの情報は、画像のアクセシビリティチェックを行う目的でのみ使用され、ユーザーのローカル環境でのみ処理されます。</p>

    <h2>2. 情報の使用目的</h2>
    <p>収集した情報は、以下の目的でのみ使用されます：</p>
    <ul>
        <li>Webページ上の画像のアクセシビリティ状況の分析</li>
        <li>分析結果のレポート生成</li>
        <li>CSVファイルとしてのエクスポート</li>
    </ul>

    <h2>3. 情報の保存</h2>
    <p>本拡張機能で収集した情報は、以下の方法で保存されます：</p>
    <ul>
        <li>情報はユーザーのブラウザ内のローカルストレージにのみ一時的に保存されます</li>
        <li>拡張機能を閉じると、保存された情報は自動的に削除されます</li>
        <li>外部サーバーへの情報送信は一切行いません</li>
    </ul>

    <h2>4. 第三者への情報提供</h2>
    <p>本拡張機能は、収集した情報を第三者に提供することはありません。</p>

    <h2>5. セキュリティ</h2>
    <p>本拡張機能は、以下のセキュリティ対策を実施しています：</p>
    <ul>
        <li>情報の処理はユーザーのブラウザ内でのみ行われます</li>
        <li>外部との通信は行いません</li>
        <li>Manifest V3に準拠したセキュアな実装を採用しています</li>
    </ul>

    <h2>6. ユーザーの権利</h2>
    <p>ユーザーは以下の権利を有します：</p>
    <ul>
        <li>拡張機能の使用停止および削除</li>
        <li>ブラウザの設定からローカルストレージのクリア</li>
    </ul>

    <h2>7. プライバシーポリシーの変更</h2>
    <p>本プライバシーポリシーは、必要に応じて更新される場合があります。重要な変更がある場合は、拡張機能の更新時に通知いたします。</p>

    <h2>8. お問い合わせ</h2>
    <p>本プライバシーポリシーに関するお問い合わせは、GitHubのIssueページにてお受けしております。</p>

    <footer style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #eee;">
        <p>© 2024 Alt Checker. All rights reserved.</p>
    </footer>
</body>
</html>
```

このHTMLファイルを以下のように使用してください：

1. リポジトリのルートディレクトリに`privacy-policy.html`として保存します。

2. GitHubページを有効にする手順：
   - リポジトリの「Settings」タブを開く
   - 左側メニューの「Pages」を選択
   - Source セクションで「main」ブランチを選択
   - 保存後、数分でページが公開されます

3. 公開されたURLは通常以下の形式になります：
   `https://[ユーザー名].github.io/[リポジトリ名]/privacy-policy.html`

4. このURLを Chrome Web Store の公開情報に記載してください。

プライバシーポリシーの内容は、本拡張機能の実際の動作に基づいて作成しており、以下の重要なポイントを含んでいます：

- データの収集範囲の明確な説明
- ローカルでの処理のみを行う旨の説明
- 第三者へのデータ提供を行わないことの明記
- ユーザーの権利と選択肢の説明
- セキュリティ対策の概要

必要に応じて内容を調整してください。

---



---

