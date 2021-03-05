import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../components/shared/BreadCrumb";

const Works: React.VFC = () => {
  const siteTitle = "Works";
  return (
    <>
<<<<<<< HEAD
      <Head>
        <title>Ranze official site | works</title>
      </Head>
      <Header title="works" />
      <Wrapper>
        <div>
          <section>
            <h2>Works</h2>
            <h3>実績</h3>
          </section>
        </div>
      </Wrapper>
=======
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="works sub text" />
        <BreadCrumb currentPage={siteTitle} />
      </Layout>
>>>>>>> sub
    </>
  );
};

export default Works;
