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
        <p>プライバシーポリシーを記載</p>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
