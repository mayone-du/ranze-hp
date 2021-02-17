import Head from "next/head";
import { Header } from "../components/header/Header";
import { Wrapper } from "../components/Wrapper";

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>contact</title>
        <meta name="description" content="meta description" />
      </Head>
      <Header title="contact" />
      <Wrapper>
        <div>
          <section>
            <h2>Contact</h2>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
