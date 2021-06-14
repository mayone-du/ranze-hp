import Link from "next/link";
import Image from "next/image";
import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
// import { Estimate } from "../../components/separate/Estimate";
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

        <Block sectionTitle="SERVICES LIST" sectionSubText="サービス一覧">
          <Row>
            <Column className="bg-gray-50">
              <Link href="/service/line-stamp">
                <a className="block font-bold text-center px-4 py-6">
                  <div>
                    <Image
                      src="/images/service/service-list-01.png"
                      width={100}
                      height={100}
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div>LINEスタンプ</div>
                </a>
              </Link>
            </Column>
            <Column className="bg-gray-50">
              <Link href="/service/line-pictograph">
                <a className="block font-bold text-center px-4 py-6">
                  <div>
                    <Image
                      src="/images/service/service-list-01.png"
                      width={100}
                      height={100}
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div>LINE絵文字</div>
                </a>
              </Link>
            </Column>
            <Column className="bg-gray-50">
              <Link href="/service/illust">
                <a className="block font-bold text-center px-4 py-6">
                  <div>
                    <Image
                      src="/images/service/service-list-01.png"
                      width={100}
                      height={100}
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div>イラスト</div>
                </a>
              </Link>
            </Column>
            <Column className="bg-gray-50">
              <Link href="/service/sns-icon">
                <a className="block font-bold text-center px-4 py-6">
                  <div>
                    <Image
                      src="/images/service/service-list-01.png"
                      width={100}
                      height={100}
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div>SNSアイコン</div>
                </a>
              </Link>
            </Column>
            <Column className="bg-gray-50">
              <Link href="/service/business-card">
                <a className="block font-bold text-center px-4 py-6">
                  <div>
                    <Image
                      src="/images/service/service-list-01.png"
                      width={100}
                      height={100}
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div>名刺</div>
                </a>
              </Link>
            </Column>
          </Row>
        </Block>


        {/* <Block sectionTitle="FLOW" sectionSubText="納品の流れ">
          <Row>
            <Column>hoge</Column>
          </Row>
        </Block>*/}

        {/* <Block sectionTitle="ESTIMATE" sectionSubText="見積もりシュミレーター">
          <Row>
            <Column>
              <Estimate />
            </Column>
          </Row>
        </Block> */}
      </Layout>
    </>
  );
};

export default Service;
