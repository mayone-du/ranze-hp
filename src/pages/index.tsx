import { Layout } from "../components/shared/layout/Layout";

const Home: React.FC = () => {
  return (
    <>
      <Layout
        metaTitle="Ranze official site"
        metaDescription="イラストレーターRanzeの公式ホームページです。LINEスタンプ、イラスト制作を承ります！"
      >
        <article
          className="mx-auto md:px-24"
          style={{ backgroundImage: "url(./images/bg.jpg)" }}
        >
          <section className="h-screen">
            <h2 className="md:text-6xl text-2xl transform translate-y-96 text-center">
              イラスト・LINEスタンプ制作
            </h2>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Home;
