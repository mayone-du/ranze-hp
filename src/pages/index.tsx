import Image from "next/image";
import { Layout } from "../components/shared/layout/Layout";
import { CustomButton } from "../components/shared/CustomColorButtons";

const Home: React.FC = () => {
  return (
    <>
      <Layout
        metaTitle="Ranze official site"
        metaDescription="イラストレーターRanzeの公式ホームページです。LINEスタンプ、イラスト制作を承ります！"
      >
        {/* メインビジュアル */}
        <article
          className="mx-auto"
          style={{ backgroundImage: "url(./images/bg.jpg)" }}
        >
          <section className="h-screen flex items-center justify-center flex-col">
            <h2 className="md:text-6xl text-2xl">イラスト・LINEスタンプ制作</h2>
            <p>イラストやLINEスタンプの制作等を承ります！</p>
            <CustomButton
              outline={false}
              text="お問い合わせ"
              toLink="/contact"
              size="large"
            />
          </section>
        </article>

        <article className="container mx-auto">
          <section className="py-40">
            <p className="text-center">特徴</p>
            <h2 className="md:text-3xl text-center">
              お客様に選んでいただける理由が3つあります！
            </h2>
            <div className="flex w-11/12 mx-auto">
              <div className="bg-gray-100 mx-4 w-screen text-center">
                <Image src="/images/bg.jpg" width="full" height="full" />
                <p>サンプルテキスト</p>
              </div>
              <div className="bg-gray-100 mx-4 w-screen text-center">
                <Image src="/images/bg.jpg" width="full" height="full" />
                <p>サンプルテキスト</p>
              </div>
              <div className="bg-gray-100 mx-4 w-screen text-center">
                <Image src="/images/bg.jpg" width="full" height="full" />
                <p>サンプルテキスト</p>
              </div>
            </div>
            <div className="flex justify-center">
              <CustomButton
                text="もっと見る"
                toLink="/"
                outline={true}
                size="medium"
                className="mx-auto"
              />
            </div>
          </section>
        </article>

        <article>
          <section>
            <h2>ゆるくてかわいいイラストを作成可能です！</h2>
          </section>
        </article>

        <article>
          <section>
            <h2>たくさんの方にご依頼頂き、大変満足していただいております！</h2>
          </section>
        </article>

        <article>
          <section>
            <h2>お問い合わせ</h2>
          </section>
        </article>

      </Layout>
    </>
  );
};

export default Home;
