import { Layout } from "../components/shared/layout/Layout";

const Custom404: React.FC = () => {
  return (
    <>
      <Layout metaTitle="404" metaDescription="not found" isActivePage="404">
        <h1 className="py-40 text-8xl text-custom-darkgray font-bold text-center">
          404 Not Found
        </h1>
        <p className="py-4 text-center text-custom-darkgray">
          Sorry :） this page is not found . . .
        </p>
      </Layout>
    </>
  );
};

export default Custom404;
