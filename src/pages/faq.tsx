import { Block } from "../components/shared/generalBlock/Block";
import { Column } from "../components/shared/generalBlock/Column";
import { Row } from "../components/shared/generalBlock/Row";
import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";

const FAQ: React.VFC = () => {
  const siteTitle = "FAQ";
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
              <ul>
                <li>
                  <p>著作権を譲渡していただくことは可能ですか？</p>
                  <p>可能ですが、別途追加料金として5万円を頂いております。</p>
                </li>
              </ul>
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default FAQ;
