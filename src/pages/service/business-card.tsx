import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Row } from "../../components/shared/generalBlock/Row";
import { Column } from "../../components/shared/generalBlock/Column";

const LineStamp: React.VFC = () => {
  const siteTitle = "名刺";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual
          title={siteTitle}
          subText="service/business-card sub text"
        />
        <BreadCrumb
          parentPage={"Service"}
          parentPath={"/service"}
          currentPage={siteTitle}
        />
        <Block sectionTitle="meisi" sectionSubText="名刺">
          <Row>
            <Column>名刺</Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default LineStamp;
