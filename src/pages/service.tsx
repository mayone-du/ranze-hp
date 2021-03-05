import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Estimate } from "../components/separate/Estimate";
import { BreadCrumb } from "../components/shared/BreadCrumb";

const Service: React.VFC = () => {
  const siteTitle = "Service";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} />
        <BreadCrumb currentPage={siteTitle} />
        <article>
          <section>
            <Estimate />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Service;
