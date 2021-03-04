import { Layout } from "../components/shared/layout/Layout";

const PrivacyPolicy: React.VFC = () => {
  const siteMetaTitle = "privacy policy";
  return (
    <>
      <Layout metaTitle={siteMetaTitle} metaDescription="desc" isActivePage={siteMetaTitle}>
        <h1>PrivacyPolicy</h1>
        <p>プライバシーポリシーを記載</p>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;