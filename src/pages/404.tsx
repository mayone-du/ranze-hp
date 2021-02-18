import Head from "next/head";
import { My404 } from "../components/My404";

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <h1>404 Not Found</h1>
      <My404 />
    </>
  );
};

export default Custom404;
