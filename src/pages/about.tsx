import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../components/shared/BreadCrumb";

const About: React.VFC = () => {
  const siteTitle = "About";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage="about"
      >
        <SubPageMainVisual title={siteTitle} />
        <BreadCrumb currentPage={siteTitle} />
        <article>
          <section></section>
        </article>
      </Layout>
    </>
  );
};

export default About;
