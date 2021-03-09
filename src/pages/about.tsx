import Image from "next/image";
import { CheckCircle } from "@material-ui/icons";
import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../components/shared/BreadCrumb";

const About: React.VFC = () => {
  const siteTitle = "About";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="about sub text" />
        <BreadCrumb currentPage={siteTitle} />

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">イラストレーターのRanzeです！</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              サンプルテキスト（コンセプトとかもあり）
            </h2>
            <div className="flex w-11/12 mx-auto">
              <p className="lg:mx-4 mx-0 my-4 bg-gray-200 lg:w-screen">
                経緯などを記載？
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, molestias harum maiores ullam, fugiat at nesciunt
                totam dolor amet, incidunt atque neque sed magni deserunt
                blanditiis minus. Fugiat, earum voluptatem.
              </p>
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">よくある悩み</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              サンプルテキスト
            </h2>
            <div className="flex w-11/12 mx-auto">
              <ul className="list-disc px-8 py-4 mx-4 bg-gray-200 text-lg lg:w-screen">
                <li>〇〇のプレゼントで使いたい</li>
                <li>彼氏/彼女と使いたい</li>
                <li>サンプルテキスト</li>
                <li>サンプルテキスト</li>
              </ul>

              <ul className="list-disc px-8 py-4 mx-4 bg-gray-200 text-lg lg:w-screen">
                <li>〇〇のプレゼントで使いたい</li>
                <li>彼氏/彼女と使いたい</li>
                <li>サンプルテキスト</li>
                <li>サンプルテキスト</li>
              </ul>
            </div>
            <div className="flex justify-center w-11/12 mx-auto">
              <div className="mx-4 mt-8 flex justify-center bg-gray-400">
                <Image
                  width={200}
                  height={200}
                  src="/images/bg.jpg"
                  className="block"
                />
              </div>
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">意識しているポイント</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              サンプルテキスト
            </h2>
            <div className="flex w-11/12 mx-auto">
              <ul className="flex justify-center flex-col mx-4 p-2 bg-gray-200 lg:w-screen">
                <li className="flex items-center my-2">
                  <CheckCircle fontSize="large" />
                  <span className="text-xl px-2">ポイント1</span>
                </li>
                <li className="flex items-center my-2">
                  <CheckCircle fontSize="large" />
                  <span className="text-xl px-2">ポイント1</span>
                </li>
                <li className="flex items-center my-2">
                  <CheckCircle fontSize="large" />
                  <span className="text-xl px-2">ポイント1</span>
                </li>
              </ul>
              <ul className="flex justify-center flex-col mx-4 p-2 bg-gray-200 lg:w-screen">
                <li className="flex items-center my-2">
                  <CheckCircle fontSize="large" />
                  <span className="text-xl px-2">ポイント1</span>
                </li>
                <li className="flex items-center my-2">
                  <CheckCircle fontSize="large" />
                  <span className="text-xl px-2">ポイント1</span>
                </li>
                <li className="flex items-center my-2">
                  <CheckCircle fontSize="large" />
                  <span className="text-xl px-2">ポイント1</span>
                </li>
              </ul>
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">共通の納品までの流れ</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              サンプルテキスト
            </h2>
            <div className="flex w-11/12 mx-auto">
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-200 lg:w-screen">
                hoge
              </div>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default About;
