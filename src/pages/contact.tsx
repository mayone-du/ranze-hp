import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Form } from "../components/separate/Form";
import { BreadCrumb } from "../components/shared/BreadCrumb";
import { Block } from "../components/shared/generalBlock/Block";
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

        <Block sectionSubText="お問合せフォーム" sectionTitle="CONTACT">
          <Row>
            <Column className="bg-gray-50">
              <Form />
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default Contact;
