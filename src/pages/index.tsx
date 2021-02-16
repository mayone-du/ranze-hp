import Head from "next/head";
import { Header } from "../components/header/Header";

const Home: React.FC = () => {
  const siteTitle = "Ranze";
  const metaDescription = "meta description";
  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <title>{siteTitle}</title>
      </Head>
      <Header title="home" />
      <div className="overflow-x-hidden">
        <main
          className="mx-auto px-24 bg"
          style={{ backgroundImage: "url(./images/bg.jpg)" }}
        >
          <section className="h-screen">
            <h2 className="text-6xl transform translate-y-96 text-center">Ranze イラスト・LINEスタンプ制作</h2>
            <div style={{ height: "3000px" }}></div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
