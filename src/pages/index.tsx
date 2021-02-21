import Head from "next/head";
import { Header } from "../components/shared/Header";
import { Wrapper } from "../components/shared/Wrapper";
import { Footer } from "../components/shared/Footer";

const Home: React.FC = () => {
  const siteTitle = "Ranze official site";
  const metaDescription = "イラストレーターRanzeの公式HPです。LINEスタンプ・イラスト制作";
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
      <Wrapper>
      <Header />
        <article
          className="mx-auto md:px-24"
          style={{ backgroundImage: "url(./images/bg.jpg)" }}
        >
          <section className="h-screen">
            <h2 className="md:text-6xl text-2xl transform translate-y-96 text-center">イラスト・LINEスタンプ制作</h2>
          </section>
        </article>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
