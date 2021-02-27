import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";

const About: React.FC = () => {
  return (
    <>
      <Layout metaTitle="Ranze official site | About" metaDescription="meta description">
        <article>
          <section className="h-screen flex items-center justify-center">
            <PageTitle title="About" />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default About;
