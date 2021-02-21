import Head from "next/head";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { Footer } from "../components/Footer";



const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | about</title>
        <meta name="description" content="meta description" />
      </Head>
      <Wrapper>
      <Header />
        <div>
          <section>
            
          </section>
        </div>
        <Footer />
      </Wrapper>
    </>
  )
}

export default About;