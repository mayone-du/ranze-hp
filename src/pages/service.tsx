import Head from "next/head";
import { Header } from "../components/shared/Header";
import { Wrapper } from "../components/shared/Wrapper";
import { Footer } from "../components/shared/Footer";

const Service: React.FC = () => {
  return (
    <>
    <Head>
      <title>Ranze official site | service</title>
      <meta name="description" content="meta description" />
    </Head>
    <Header />
    <Wrapper>
      <div>
        <section></section>
      </div>
      <Footer />
    </Wrapper>
    </>
  )
}

export default Service;