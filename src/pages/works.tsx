import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";

const Works: React.VFC = () => {
  return (
    <>
      <Layout metaTitle="Ranze official site | Works" metaDescription="meta">
        <article>
          <section className="h-screen flex items-center justify-center">
            <SubPageMainVisual title="Works" />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Works;
