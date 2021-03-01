import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";

const About: React.VFC = () => {
  return (
    <>
      <Layout metaTitle="Ranze official site | About" metaDescription="meta description">
        <article>
          <section className="h-screen flex items-center justify-center">
            <SubPageMainVisual title="About" />
          </section>
        </article>
        <article>
          <section>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default About;
