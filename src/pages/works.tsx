import Head from "next/head";
import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";

const Works: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | works</title>
      </Head>
      <Layout>
        <article>
          <section>
            <PageTitle title="Works" />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Works;
