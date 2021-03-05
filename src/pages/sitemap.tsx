import { Layout } from "../components/shared/layout/Layout";

const SiteMap: React.VFC = () => {
  const siteTitle = "SiteMap";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <article>
          <section>
            <h2>サイトマップ</h2>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default SiteMap;
