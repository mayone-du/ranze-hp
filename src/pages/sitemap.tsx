import Head from "next/head";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { Footer } from "../components/Footer";

const SiteMap: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | sitemap</title>
      </Head>
      <Wrapper>
        <Header />
        <h2>サイトマップ</h2>
        <Footer />
      </Wrapper>
    </>
  );
};

export default SiteMap;
