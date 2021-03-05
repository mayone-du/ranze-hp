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
        <SubPageMainVisual title={siteTitle} subText="service sub text" />
        <BreadCrumb currentPage={siteTitle} />
        <article className="container mx-auto">
          <section>
            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-screen">
                <Estimate />
              </div>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Service;
