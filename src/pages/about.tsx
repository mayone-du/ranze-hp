import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";

const About: React.VFC = () => {
  return (
    <>
      <Layout
        metaTitle="Ranze official site | About"
        metaDescription="meta description"
        isActivePage="about"
      >
        <SubPageMainVisual title="About" />
        <article>
          <section></section>
        </article>
      </Layout>
    </>
  );
};

export default About;
