import Head from "next/head";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { Footer } from "../components/Footer";

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
      <Header />
      <Wrapper>
        <div
          className="mx-auto px-24"
          style={{ backgroundImage: "url(./images/bg.jpg)" }}
        >
          <section className="h-screen">
            <h2 className="text-6xl transform translate-y-96 text-center">イラスト・LINEスタンプ制作</h2>
          </section>
        </div>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
