import Head from "next/head";
import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";

const Service: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | service</title>
        <meta name="description" content="meta description" />
      </Head>
      <Layout>
        <article>
          <section>
            <PageTitle title="Service" />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Service;
