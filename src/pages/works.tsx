import Head from "next/head";
import { Header } from "../components/header/Header";

const Works: React.FC = () => {
  return (
    <>
      <Head>
        <title>works</title>
      </Head>
      <Header title="works" />
      <main>
        <section>
          <h2>Works</h2>
        </section>
      </main>
    </>
  );
};

export default Works;
