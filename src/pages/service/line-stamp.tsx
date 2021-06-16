import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Column } from "../../components/shared/generalBlock/Column";
import { Row } from "../../components/shared/generalBlock/Row";
import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";

const LineStamp: React.VFC = () => {
  const siteTitle = "LINEスタンプ";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title="LINE STAMP" subText="LINEスタンプ" />
        <BreadCrumb
          parentPage={"Service"}
          parentPath={"/service"}
          currentPage={siteTitle}
        />
        <Block sectionTitle="PRICE" sectionSubText="LINEスタンプの料金表">
          <Row>
            <Column className="text-custom-darkgray bg-gray-50">
              <h3 className="py-4 text-lg text-center font-bold">40この場合</h3>
              <div className="text-center">30,000円</div>
            </Column>
            <Column className="text-custom-darkgray bg-gray-50">
              <h3 className="py-4 text-lg text-center font-bold">40この場合</h3>
              <div className="text-center">30,000円</div>
            </Column>
            <Column className="text-custom-darkgray bg-gray-50">
              <h3 className="py-4 text-lg text-center font-bold">40この場合</h3>
              <div className="text-center">30,000円</div>
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default LineStamp;
