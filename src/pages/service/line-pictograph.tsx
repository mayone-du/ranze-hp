import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Row } from "../../components/shared/generalBlock/Row";
import { Column } from "../../components/shared/generalBlock/Column";

const LineStamp: React.VFC = () => {
  const siteTitle = "LINE絵文字";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual
          title={siteTitle}
          subText="service/line-pictograph sub text"
        />
        <BreadCrumb
          parentPage={"Service"}
          parentPath={"/service"}
          currentPage={siteTitle}
        />
        <Block sectionTitle="emoji" sectionSubText="LINE絵文字">
          <Row>
            <Column>LINE絵文字</Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default LineStamp;
