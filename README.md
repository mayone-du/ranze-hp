# Ranze official site

## 開発中メモ

フォームの送信確認は、毎回 main ブランチに push or merge して[デプロイ先](https://ranze-official-site.vercel.app/)のページで確認。
基本的に sub ブランチで開発を進めて、本番環境確認時などに main ブランチから sub ブランチを merge する

## メインコンテンツの余白のとり方

```
<!-- セクションを区切るコンポーネント -->
<article className="container mx-auto">
  <section className="md:py-16 py-10">

    <!-- セクションの見出しコンポーネント -->
    <p className="text-center>サブテキスト</p>
    <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2>タイトル</h2>

    <!-- rowコンポーネント -->
    <div className="flex w-11/12 mx-auto">

    <!-- colコンポーネント -->
      <div className="lg:mx-4 my-4 lg:w-screen"></div>
    </div>
  </section>
</article>
```
