import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Form } from "../components/separate/Form";
import { BreadCrumb } from "../components/shared/BreadCrumb";


const Contact: React.VFC = () => {
  const siteTitle = "Contact";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} />
        <BreadCrumb currentPage={siteTitle} />
        <article>
          <section>
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
