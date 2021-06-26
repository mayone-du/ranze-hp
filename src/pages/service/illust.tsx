import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Column } from "../../components/shared/generalBlock/Column";
import { Row } from "../../components/shared/generalBlock/Row";
import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";

const LineStamp: React.VFC = () => {
  const siteTitle = "イラスト";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="サービス内容" />
        <BreadCrumb
          parentPage={"Service"}
          parentPath={"/service"}
          currentPage={siteTitle}
        />
        <Block sectionTitle="ILLUST" sectionSubText="イラスト">
          <Row>
            <Column>イラスト</Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default LineStamp;
