import Head from "next/head";
import { Header } from "../components/header/Header";
import { Wrapper } from "../components/Wrapper";

const Works: React.FC = () => {
  return (
    <>
      <Head>
        <title>works</title>
      </Head>
      <Header title="works" />
      <Wrapper>
        <div>
          <section>
            <h2>Works</h2>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Works;
