import { Layout } from "../../components/shared/layout/Layout";

const LineStamp: React.VFC = () => {
  const siteTitle = "LINEスタンプ";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <h1>LineStamp</h1>
      </Layout>
    </>
  );
};

export default LineStamp;
