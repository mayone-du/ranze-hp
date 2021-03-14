import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";

const LineStamp: React.VFC = () => {
  const siteTitle = "LINE絵文字";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="service/line-pictograph sub text" />
        <BreadCrumb parentPage={"Service"} parentPath={"/service"} currentPage={siteTitle} />
      
      </Layout>
    </>
  );
};

export default LineStamp;
