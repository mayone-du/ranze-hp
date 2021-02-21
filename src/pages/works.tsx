import Head from "next/head";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { Footer } from "../components/Footer";

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
