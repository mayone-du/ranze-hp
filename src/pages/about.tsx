import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";
import { Estimate } from "../components/separate/Estimate";

const About: React.FC = () => {
  return (
    <>
      <Layout metaTitle="Ranze official site | About" metaDescription="meta description">
        <article>
          <section className="h-screen flex items-center justify-center">
            <PageTitle title="About" />
          </section>
        </article>
        <article>
          <section>
            <Estimate />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default About;
