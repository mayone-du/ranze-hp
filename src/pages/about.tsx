import Head from "next/head";
import { Header } from "../components/shared/Header";
import { PageTitle } from "../components/shared/PageTitle";
import { Wrapper } from "../components/shared/Wrapper";
import { Footer } from "../components/shared/Footer";



const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | about</title>
        <meta name="description" content="meta description" />
      </Head>
      <Wrapper>
      <Header />
        <div className="h-screen">
          <section>
            <PageTitle title="About" />
          </section>
        </div>
        <Footer />
      </Wrapper>
    </>
  )
}

export default About;