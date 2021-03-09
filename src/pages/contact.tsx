import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Form } from "../components/separate/Form";
import { BreadCrumb } from "../components/shared/BreadCrumb";
import { Block } from "../components/shared/generalBlock/Wrapper";
import { Row } from "../components/shared/generalBlock/Row";
import { Column } from "../components/shared/generalBlock/Column";

const Contact: React.VFC = () => {
  const siteTitle = "Contact";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="contact sub text" />
        <BreadCrumb currentPage={siteTitle} />
        <Block>
          
          <Row>
            <Column>
              <Form />

            </Column>
          </Row>
        </Block>
        <article>
          <section>
            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-full">
                <h3 className="text-xl">
                  まずはお気軽にご相談ください！ご連絡を頂いた後、チャットサービスを利用して詳細についてお話致します！
                </h3>
                <Form />
              </div>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Contact;
