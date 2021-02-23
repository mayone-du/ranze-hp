import Head from "next/head";
import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";
import { Form } from "../components/Form";

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ranze official site | contact</title>
        <meta name="description" content="meta description" />
      </Head>
      <Layout>
        <article>
          <section>
            <PageTitle title="Contact" />
            <h3 className="py-40">
              まずはお気軽にご相談ください！ご連絡を頂いた後、チャットサービスを利用して詳細についてお話致します！
            </h3>
            <Form />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Contact;
