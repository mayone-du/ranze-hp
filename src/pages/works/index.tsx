import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";
// import Link from "next/link";
import { Block } from "../../components/shared/generalBlock/Block";
import { Row } from "../../components/shared/generalBlock/Row";
import { Column } from "../../components/shared/generalBlock/Column";

const Works: React.VFC = () => {
  const siteTitle = "Works";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="works sub text" />
        <BreadCrumb currentPage={siteTitle} />

        <Block sectionSubText="実績" sectionTitle="Works">
          <Row>
            <Column className="my-0">
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
