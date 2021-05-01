import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from '../../components/shared/generalBlock/Block';
import { Row } from '../../components/shared/generalBlock/Row';
import { Column } from '../../components/shared/generalBlock/Column';

const LineStamp: React.VFC = () => {
  const siteTitle = "SNSアイコン";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="service/sns-icon sub text" />
        <BreadCrumb parentPage={"Service"} parentPath={"/service"} currentPage={siteTitle} />
        <Block sectionTitle='sns' sectionSubText='SNSアイコン'>
        <Row>
          <Column>
          SNSアイコン
          </Column>
        </Row>
      </Block>
      </Layout>
    </>
  );
};

export default LineStamp;
