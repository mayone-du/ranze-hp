import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";

const Works: React.FC = () => {
  return (
    <>
      <Layout metaTitle="Ranze official site | Works" metaDescription="meta">
        <article>
          <section className="h-screen flex items-center justify-center">
            <PageTitle title="Works" />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Works;
