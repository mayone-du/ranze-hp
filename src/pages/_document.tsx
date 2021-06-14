import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta
            property="og:url"
            content="https://ranze-official-site.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ranze official site" />
          <meta
            property="og:description"
            content="イラストレーターRanzeの公式ホームページです。LINEスタンプやイラスト、名刺制作などのご依頼を承っています！お気軽にご相談ください！"
          />
          <meta property="og:site_name" content="Ranze official site" />
          <meta property="og:image" content="/images/bg.jpg" />

          <meta name="twitter:card" content="Summary Card" />
          <meta name="twitter:site" content="@ranchan_1201" />

          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
