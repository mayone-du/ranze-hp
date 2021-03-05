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
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="about sub text" />
        <BreadCrumb currentPage={siteTitle} />
        <article>
          <section></section>
        </article>
      </Layout>
    </>
  );
};

export default About;
