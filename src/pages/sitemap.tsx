import Head from "next/head";
import { Header } from "../components/shared/Header";
import { Wrapper } from "../components/shared/Wrapper";
import { Footer } from "../components/shared/Footer";

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
