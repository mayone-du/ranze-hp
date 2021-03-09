import Link from "next/link";
import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";
import { Estimate } from "../../components/separate/Estimate";
import { BreadCrumb } from "../../components/shared/BreadCrumb";

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

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">サービス紹介</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              カードみたいにしてリンクを貼る
            </h2>

            <div className="flex w-11/12 mx-auto my-4">
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-200 lg:w-screen">
                hoge
              </div>
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-200 lg:w-screen">
                画像を乗せる
              </div>
            </div>

            <div className="flex w-11/12 mx-auto my-4">
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-200 lg:w-screen">
                画像
              </div>
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-200 lg:w-screen">
                テキスト
              </div>
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">サービス一覧</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              さーびすいちらん
            </h2>
            <div className="flex w-11/12 mx-auto">
              <div className="md:mx-4 my-4 lg:w-screen bg-gray-200">
                <h3>LINE</h3>
                <ul className="border-l-2 border-r-2 border-collapse border-gray-400">
                  <li>
                    <Link href="/service/line-stamp">
                      <a className="text-blue-500">LINEスタンプ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
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
        </article>

        <article className="container mx-auto">
          <section>
            <div className="flex w-11/12 mx-auto">
              <div className="md:mx-4 lg:w-screen">
                <Estimate />
              </div>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Service;
