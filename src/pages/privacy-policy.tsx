import { Block } from "../components/shared/generalBlock/Block";
import { Column } from "../components/shared/generalBlock/Column";
import { Row } from "../components/shared/generalBlock/Row";
import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
const PrivacyPolicy: React.VFC = () => {
  const siteMetaTitle = "privacy policy";
  return (
    <>
      <Layout
        metaTitle={siteMetaTitle}
        metaDescription="desc"
        isActivePage={siteMetaTitle}
      >
        <SubPageMainVisual
          title="Privacy, Policy"
          subText="プライバシー・ポリシー"
        />

        <Block>
          <Row>
            <Column>
              <h2>プライバシー・ポリシー</h2>
              <p>
                本サイトに表示しているすべての画像の保存、使用、加工、配布は禁止とします。
              </p>
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
