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
          <section className="py-20">
            <p className="text-center">自己紹介</p>
            <h2 className="text-center text-3xl">
              ご覧頂きありがとうございます。イラストレーターのRanzeです._.
            </h2>
            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-screen">
                <p>
                  ご覧頂きありがとうございます。イラストレーターのRanzeです._.
                </p>
              </div>
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section className="py-20">
            <p className="text-center">特徴</p>
            <h2 className="md:text-3xl text-center">
              ゆるくて可愛いイラスト制作が得意です！
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
                className="mx-auto my-8"
              />
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section>
            <p className="text-center">サービス</p>
            <h2 className="text-center text-3xl">
              LINEスタンプやアイコンに使えるイラスト制作などをしています！
            </h2>

            {/* row */}
            <div className="flex w-11/12 mx-auto">
              <div className="m-4 w-screen flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex items-center justify-center">
                  <Image
                    className="block w-1/3 rounded-full"
                    src="/images/bg.jpg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="w-2/3 p-2">
                  <h3 className="text-xl">LINEスタンプ制作</h3>
                  <p>サンプルテキスト。サンプルテキスト。</p>
                </div>
              </div>

              <div className="m-4 w-screen flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex items-center justify-center">
                  <Image
                    className="block w-1/3 rounded-full"
                    src="/images/bg.jpg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="w-2/3 p-2">
                  <h3 className="text-xl">イラスト制作（アイコンなど）</h3>
                  <p>サンプルテキスト。サンプルテキスト。</p>
                </div>
              </div>
            </div>

            {/* row */}
            <div className="flex w-11/12 mx-auto">
              <div className="m-4 w-screen flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex items-center justify-center">
                  <Image
                    className="block w-1/3 rounded-full"
                    src="/images/bg.jpg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="w-2/3 p-2">
                  <h3>LINEスタンプ制作</h3>
                  <p>サンプルテキスト。サンプルテキスト。</p>
                </div>
              </div>
              <div className="m-4 w-screen flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex items-center justify-center">
                  <Image
                    className="block w-1/3 rounded-full"
                    src="/images/bg.jpg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="w-2/3 p-2">
                  <h3>イラスト制作（アイコン用など）</h3>
                  <p>サンプルテキスト。サンプルテキスト。</p>
                </div>
              </div>
              <div className="m-4 w-screen flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex items-center justify-center">
                  <Image
                    className="block w-1/3 rounded-full"
                    src="/images/bg.jpg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="w-2/3 p-2">
                  <h3>名刺制作</h3>
                  <p>サンプルテキスト。サンプルテキスト。</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <CustomButton
                text="もっと見る"
                toLink="/"
                outline={true}
                size="medium"
                className="mx-auto my-4"
              />
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section>
            <p className="text-center">実績</p>
            <h2 className="text-center text-3xl">いろいろな方からご依頼いただいております！</h2>
            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-screen bg-gray-100">
                画像をタイル状で表示
              </div>
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section>
            <p className="text-center">評価</p>
            <h2 className="text-center text-3xl">たくさんの方にご満足していただいております！</h2>
            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-screen bg-gray-100">
                ここならのレビューとかを掲載
              </div>
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section>
            <p className="text-center">料金</p>
            <h2 className="text-center text-3xl">全てのお客様に満足していただけるよう、高品質なものをお届けします！</h2>

            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-screen bg-gray-100">
                <Image
                  src="/images/bg.jpg"
                  width={100}
                  height={100}
                />
                <h3>LINEスタンプ40個制作の場合</h3>
                <p>料金</p>
                <p>納品までの時間</p>
              </div>
              <div className="mx-4 w-screen bg-gray-100">
                <Image
                  src="/images/bg.jpg"
                  width={100}
                  height={100}
                />
                <h3>LINEスタンプ40個制作の場合</h3>
                <p>料金</p>
                <p>納品までの時間</p>
              </div>
              <div className="mx-4 w-screen bg-gray-100">
                <Image
                  src="/images/bg.jpg"
                  width={100}
                  height={100}
                />
                <h3>LINEスタンプ40個制作の場合</h3>
                <p>料金</p>
                <p>納品までの時間</p>
              </div>
            </div>
          </section>
        </article>

        <article className="bg-gray-100 text-center py-20">
          <section>
            <p>お問い合わせ</p>
            <h2 className="text-3xl">キャッチコピー</h2>
            <CustomButton
              toLink="/contact"
              text="お問い合わせ"
              size="large"
              outline={false}
              className=" mx-auto"
            />
            <div className="flex items-center justify-center bg-white w-1/2 p-10 mx-auto">
              <h3 className="text-xl">詳しい資料をダウンロードできます</h3>
              <CustomButton
                text="ダウンロード"
                size="medium"
                toLink="/"
                outline={true}
              />
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Home;
