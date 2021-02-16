import Head from "next/head";
import { Header } from "../components/header/Header";

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>contact</title>
      </Head>
      <Header title="contact" />
      <main>
        <section>
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

export default Contact;