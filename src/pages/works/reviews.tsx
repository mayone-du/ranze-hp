import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";

import { Block } from "../../components/shared/generalBlock/Block";
import { Row } from "../../components/shared/generalBlock/Row";
import { Column } from "../../components/shared/generalBlock/Column";

const Reviews: React.VFC = () => {
  const siteTitle = "Reviews";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="Reviews sub text" />
        <BreadCrumb parentPage='Works' parentPath='/works' currentPage={siteTitle} />

        <Block>
          <p className="text-center">レビュー</p>
          <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
            レビューの一覧
          </h2>
          <Row>
            <Column className="my-0">
              <p className="bg-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti nam qui magnam numquam est debitis facere sit delectus
                laudantium animi ab libero at reiciendis, ducimus expedita hic
                sunt cum vel.
              </p>
            </Column>
          </Row>
        </Block>

      </Layout>
    </>
  );
};

export default Reviews;
