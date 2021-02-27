import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";

const Service: React.FC = () => {
  return (
    <>
      <Layout metaTitle="Ranze official site | Service" metaDescription="meta description">
        <article>
          <section className="h-screen flex items-center justify-center">
            <PageTitle title="Service" />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Service;
