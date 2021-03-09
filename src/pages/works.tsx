import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../components/shared/BreadCrumb";

import { Block } from "../components/shared/generalBlock/Wrapper";
import { Row } from "../components/shared/generalBlock/Row";
import { Column } from "../components/shared/generalBlock/Column";

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

        <Block>
          <p className="text-center">実績紹介</p>
          <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
            実績などを載せる
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

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">自己紹介</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              ABOUT
            </h2>
            <div className="flex w-11/12 mx-auto">
              <p className="lg:mx-4 my-4 w-full lg:text-base text-sm">
                ご覧頂きありがとうございます。イラストレーターのRanzeです._.
                お客様とのご縁を大切にしています。 Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Cupiditate aperiam minus
                laudantium culpa accusamus soluta unde aliquid eum obcaecati
                magnam tempora repellat atque asperiores vitae distinctio ipsum
                autem, praesentium natus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cupiditate aperiam minus laudantium culpa
                accusamus soluta unde aliquid eum obcaecati magnam tempora
                repellat atque asperiores vitae distinctio ipsum autem,
                praesentium natus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cupiditate aperiam minus laudantium culpa
                accusamus soluta unde aliquid eum obcaecati magnam tempora
                repellat atque asperiores vitae distinctio ipsum autem,
                praesentium natus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cupiditate aperiam minus laudantium culpa
                accusamus soluta unde aliquid eum obcaecati magnam tempora
                repellat atque asperiores vitae distinctio ipsum autem,
                praesentium natus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cupiditate aperiam minus laudantium culpa
                accusamus soluta unde aliquid eum obcaecati magnam tempora
                repellat atque asperiores vitae distinctio ipsum autem,
                praesentium natus.
              </p>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Works;
