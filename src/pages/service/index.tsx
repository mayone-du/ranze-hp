import Link from "next/link";
import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { Estimate } from "../../components/separate/Estimate";
import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Row } from "../../components/shared/generalBlock/Row";
import { Column } from "../../components/shared/generalBlock/Column";

const Service: React.VFC = () => {
  const siteTitle = "Service";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="service sub text" />
        <BreadCrumb currentPage={siteTitle} />

        <Block sectionSubText="サービス一覧" sectionTitle="SERVICES">
          <Row className="-my-4 lg:-my-0">
            <Column className="bg-gray-100 p-2">画像を乗せる</Column>
            <Column className="bg-gray-100 p-2">hoge</Column>
          </Row>
          <Row>
            <Column className="bg-gray-100 p-2">hoge</Column>
            <Column className="bg-gray-100 p-2">画像</Column>
          </Row>
        </Block>

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">サービス一覧</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              SERVICES LIST
            </h2>
            <div className="flex w-11/12 mx-auto">
              <div className="md:mx-4 my-4 w-full bg-gray-100">
                <h3 className="text-3xl">LINE</h3>
                <ul className="border-l-2 border-r-2 border-collapse border-gray-400">
                  <li>
                    <Link href="/service/line-stamp">
                      <a className="text-blue-500">LINEスタンプ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/line-pictograph">
                      <a className="text-blue-500">LINE絵文字</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/illust">
                      <a className="text-blue-500">イラスト制作</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/sns-icon">
                      <a className="text-blue-500">アイコン制作</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/business-card">
                      <a className="text-blue-500">名刺制作</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        <Block sectionTitle="FLOW" sectionSubText="納品の流れ">
          <Row>
            <Column>
              hoge
            </Column>
          </Row>
        </Block>

        <Block sectionTitle="ESTIMATE" sectionSubText="見積もりシュミレーター">
          <Row>
            <Column>
              <Estimate />
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default Service;
