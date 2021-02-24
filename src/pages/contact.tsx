import { Layout } from "../components/shared/layout/Layout";
import { PageTitle } from "../components/shared/PageTitle";
import { Form } from "../components/separate/Form";

const Contact: React.FC = () => {
  return (
    <>
      <Layout metaTitle="Ranze official site | contact" metaDescription="meta description" >
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
