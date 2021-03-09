import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";

const LineStamp: React.VFC = () => {
  const siteTitle = "LINEスタンプ";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="service/line-stamp sub text" />
        <BreadCrumb parentPage={"Service"} parentPath={"/service"} currentPage={siteTitle} />
      
      </Layout>
    </>
  );
};

export default LineStamp;
