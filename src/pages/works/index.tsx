import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Column } from "../../components/shared/generalBlock/Column";
import { Row } from "../../components/shared/generalBlock/Row";
import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";

const Works: React.VFC = () => {
  const siteTitle = "Works";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="実績紹介" />
        <BreadCrumb currentPage={siteTitle} />

        <Block sectionSubText="制作物一覧" sectionTitle="Assets">
          <Row>
            <Column className="bg-gray-50 md:flex items-center justify-between text-center">
              <a
                href="https://coconala.com/users/2075712"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                ココナラの実績を見る
              </a>
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default Works;
