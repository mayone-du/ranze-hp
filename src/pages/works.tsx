import Head from "next/head";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";

const Works: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Works;
