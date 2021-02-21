import Head from "next/head";
import { Header } from "../components/shared/Header";
import { Wrapper } from "../components/shared/Wrapper";
import { Footer } from "../components/shared/Footer";

const Works: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | works</title>
      </Head>
      <Wrapper>
      <Header/>
        <div>
          <section>
            <h2>Works</h2>
          </section>
        </div>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Works;
