import { Layout } from "../components/shared/layout/Layout";
import { My404 } from "../components/My404";

const Custom404: React.FC = () => {
  return (
    <>
      <Layout metaTitle="404" metaDescription="">
        <h1>404 Not Found</h1>
        <p>Sorry :）</p>
        <My404 />
      </Layout>
    </>
  );
};

export default Custom404;
