import Head from "next/head";
import { Header } from "../components/shared/Header";
import { Wrapper } from "../components/shared/Wrapper";
import { Footer } from "../components/shared/Footer";
import { Form } from "../components/Form";


const Contact: React.FC = () => {

  return (
    <>
      <Head>
        <title>Ranze official site | contact</title>
        <meta name="description" content="meta description" />
      </Head>
      <Wrapper>
      <Header />
        <div>
          <section>
            <h2>Contact</h2>
            <h3 className="py-40">まずはお気軽にご相談ください！ご連絡を頂いた後、チャットサービスを利用して詳細についてお話致します！</h3>
            <Form />
          </section>
        </div>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Contact;