import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Block } from "../components/shared/generalBlock/Block";
import { Row } from "../components/shared/generalBlock/Row";
import { Column } from "../components/shared/generalBlock/Column";

const FAQ: React.VFC = () => {
  const siteTitle = "FAQ"
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title="FAQ" subText="よくある質問" />
        <Block>
          <Row>
            <Column>
              <h3>hoge</h3>
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default FAQ;
