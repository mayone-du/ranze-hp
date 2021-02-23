import Head from "next/head";
import { Layout } from "../components/shared/layout/Layout";

const SiteMap: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | sitemap</title>
      </Head>
      <Layout>
        <article>
          <section>
            <h2>サイトマップ</h2>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default SiteMap;
