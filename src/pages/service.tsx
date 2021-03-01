import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Estimate } from "../components/separate/Estimate";

const Service: React.VFC = () => {
  return (
    <>
      <Layout
        metaTitle="Ranze official site | Service"
        metaDescription="meta description"
      >
        <article>
          <section className="h-screen flex items-center justify-center">
            <SubPageMainVisual title="Service" />
          </section>
        </article>
        <article>
          <section>
            <Estimate />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Service;
