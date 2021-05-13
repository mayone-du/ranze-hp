import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Row } from "../../components/shared/generalBlock/Row";
import { Column } from "../../components/shared/generalBlock/Column";

const LineStamp: React.VFC = () => {
  const siteTitle = "LINEスタンプ";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual
          title={siteTitle}
          subText="service/line-stamp sub text"
        />
        <BreadCrumb
          parentPage={"Service"}
          parentPath={"/service"}
          currentPage={siteTitle}
        />
        <Block sectionTitle="stamp" sectionSubText="LINEスタンプ">
          <Row>
            <Column>LINEスタンプ</Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default LineStamp;
