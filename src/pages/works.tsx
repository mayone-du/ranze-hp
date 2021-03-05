import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../components/shared/BreadCrumb";

const Works: React.VFC = () => {
  const siteTitle = "Works";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="works sub text" />
        <BreadCrumb currentPage={siteTitle} />
      </Layout>
    </>
  );
};

export default Works;
