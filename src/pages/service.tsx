import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Estimate } from "../components/separate/Estimate";

const Service: React.VFC = () => {
  return (
    <>
      <Layout
        metaTitle="Ranze official site | Service"
        metaDescription="meta description"
        isActivePage="service"
      >
        <SubPageMainVisual title="Service" />
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
