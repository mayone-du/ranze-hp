import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Form } from "../components/separate/Form";
import { BreadCrumb } from "../components/shared/BreadCrumb";
import { ItemRow } from "../components/shared/item/ItemRow";
import { ItemCol } from "../components/shared/item/ItemCol";

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
        <ItemRow>
          <ItemCol>
            <h3 className="text-xl">
              まずはお気軽にご相談ください！ご連絡を頂いた後、チャットサービスを利用して詳細についてお話致します！
            </h3>
            <Form />
          </ItemCol>
        </ItemRow>
      </Layout>
    </>
  );
};

export default Contact;
