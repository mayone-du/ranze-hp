import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { Form } from "../components/Form";


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
            <Form />
          </section>
        </div>
        <Link href="/api/hello">
          <a>from api</a>
        </Link>
      </Wrapper>
    </>
  );
};

export default Contact;