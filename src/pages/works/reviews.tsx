import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Row } from "../../components/shared/generalBlock/Row";
import { Column } from "../../components/shared/generalBlock/Column";
import { AccountCircle } from '@material-ui/icons';

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
              <div className='bg-gray-100'>
                <div><AccountCircle />profile</div>
              </div>
            </Column>
          </Row>
        </Block>

      </Layout>
    </>
  );
};

export default Reviews;
