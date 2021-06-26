import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout: React.VFC<{
  children: any;
  metaTitle: string;
  metaDescription: string;
  isActivePage: string;
}> = ({ children, metaTitle, metaDescription, isActivePage }) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
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
      <main className="overflow-x-hidden">
        <Header isActivePage={isActivePage} />
        {children}
        <Footer />
      </main>
    </>
  );
};

export { Layout };
