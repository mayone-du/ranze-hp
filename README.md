# Ranze official site


## 開発中メモ
フォームの送信確認は、毎回mainブランチにpush or mergeして[デプロイ先](https://ranze-official-site.vercel.app/)のページで確認。
基本的にsubブランチで開発を進めて、本番環境確認時などにmainブランチからsubブランチをmergeする

## メインコンテンツの余白のとり方
```
<article className="container mx-auto">
  <section>
    <div className="flex w-11/12 mx-auto">
      <div className="mx-4 w-screen"></div>
    </div>
  </section>
</article>
```