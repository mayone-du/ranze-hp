import Link from "next/link";
import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { Block } from "../components/shared/generalBlock/Block";
import { Row } from "../components/shared/generalBlock/Row";
import { Column } from "../components/shared/generalBlock/Column";

const SiteMap: React.VFC = () => {
  const siteTitle = "SiteMap";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="subtext" />

        <Block sectionSubText="subtext" sectionTitle="title">
          <Row>
            <Column className="border-r-2 border-l-2">
              <h3>LINE</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">LINEスタンプ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">LINE絵文字</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">イラスト制作</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">アイコン制作</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">名刺制作</a>
                  </Link>
                </li>
              </ul>
            </Column>
            <Column className="border-r-2 border-l-2">
              <h3>LINE</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">LINEスタンプ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">LINE絵文字</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">イラスト制作</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">アイコン制作</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-blue-500">名刺制作</a>
                  </Link>
                </li>
              </ul>
            </Column>
          </Row>
        </Block>

        {/* <article className="container mx-auto">
          <section>
            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-full border-l-2 border-r-2 border-collapse border-gray-400">
                <div className="flex items-center mx-auto"></div>
              </div>
            </div>
          </section>
        </article> */}
        {/* 
        <article className="container mx-auto">
          <section>
            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-full border-l-2 border-r-2 border-collapse border-gray-400">
                <h3>LINE</h3>
                <ul>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">LINEスタンプ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">LINE絵文字</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">イラスト制作</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">アイコン制作</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">名刺制作</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-4 w-full">
                <h3>機能</h3>
                <ul className="border-l-2 border-r-2 border-collapse border-gray-400">
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">LINEスタンプ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">LINE絵文字</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">イラスト制作</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">アイコン制作</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text-blue-500">名刺制作</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article> */}
      </Layout>
    </>
  );
};

export default SiteMap;
