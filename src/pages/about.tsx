import Head from "next/head";
import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | about</title>
        <meta name="description" content="meta description" />
      </Head>
      <Layout>
        <article className="h-screen">
          <section>
            <PageTitle title="About" />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default About;
