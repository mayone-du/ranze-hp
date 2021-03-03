import Image from "next/image";
import { Layout } from "../components/shared/layout/Layout";
import { CustomButton } from "../components/shared/CustomColorButtons";
import { Star } from "@material-ui/icons";

const Home: React.VFC = () => {
  return (
    <>
      <Layout
        metaTitle="Ranze official site | イラストレーターRanzeの公式サイト"
        metaDescription="イラストレーターRanzeの公式ホームページです。LINEスタンプ、イラスト制作や名刺制作などをしています！まずはお気軽にご相談ください！"
      >
        {/* メインビジュアル */}
        <article
          className="mx-auto"
          style={{ backgroundImage: "url(./images/bg.jpg)" }}
        >
          <section className="h-screen flex items-center justify-center flex-col">
            <h1 className="md:text-6xl text-2xl">イラスト・LINEスタンプ制作</h1>
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
                  1イラストごとに思いを込めて丁寧に制作しております。お客様に喜んでいただけることがやりがいですので、ご感想などいただけるととても嬉しいです✨
                </p>
              </div>
            </div>
          </section>
        </article>

        <article className="container mx-auto">
          <section className="py-20">
            <p className="text-center">特徴</p>
            <h2 className="md:text-3xl text-2xl text-center">
              お客様に選んでいただける理由✨
            </h2>
            <div className="lg:flex w-11/12 mx-auto">
              <div className="bg-gray-100 lg:mx-4 my-4 md:my-0 lg:w-screen text-center p-4">
                <p className="text-6xl font-bold py-4">1</p>
                <Image src="/images/bg.jpg" width={200} height={200} />
                <h3 className="py-4 text-2xl">老若男女問わず人気！</h3>
                <p>
                  ゆるくて可愛いイラストを気に入っていただけ、老若男女問わずにご使用頂いています！個数も8~40個と、お客様に合わせた制作が可能です！
                </p>
              </div>
              <div className="bg-gray-100 lg:mx-4 my-4 md:my-0 lg:w-screen text-center p-4">
                <p className="text-6xl font-bold py-4">2</p>
                <Image src="/images/bg.jpg" width={200} height={200} />
                <h3 className="py-4 text-2xl">基本的に修正回数は無制限！</h3>
                <p>
                  あまりに多い、または大幅すぎる場合は例外として、軽微な修正は無制限で対応致します！気を使わずにお気軽にご相談ください！
                </p>
              </div>
              <div className="bg-gray-100 lg:mx-4 my-4 md:my-0 lg:w-screen text-center p-4">
                <p className="text-6xl font-bold py-4">3</p>
                <Image src="/images/bg.jpg" width={200} height={200} />
                <h3 className="py-4 text-2xl">ストレスフリーなやりとり</h3>
                <p>
                  丁寧かつ円滑なコミュニケーションはもちろん、公式ライン、Slack、メールなどの中でお好きなツールをご利用いただけます！
                </p>
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
            <h2 className="text-center md:text-3xl text-xl font-bold">
              ゆるくて可愛いイラストの制作などをしています！
            </h2>

            {/* row */}
            <div className="flex w-11/12 mx-auto">
              <div className="md:m-4 w-screen flex bg-gray-100 p-6">
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

              <div className="md:m-4 w-screen flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex items-center justify-center">
                  <Image
                    className="block w-1/3 rounded-full"
                    src="/images/bg.jpg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="w-2/3 p-2">
                  <h3 className="text-xl">イラスト制作</h3>
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
                  <h3>アイコン制作</h3>
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
                  <h3>LINEの絵文字制作</h3>
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
            <h2 className="text-center text-3xl">
              いろいろな方からご依頼いただいております！
            </h2>
            <div className="flex w-11/12 mx-auto">
              <div className="mx-4 w-screen bg-gray-100">
                画像をタイルで表示
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
            <p className="text-center">評価</p>
            <h2 className="text-center text-3xl">
              たくさんの方にご満足していただいております！
            </h2>
            <div className="w-11/12 mx-auto">
              <div className="xl:flex xl:m-4 bg-gray-100 py-4 xl:p-8 text-center xl:text-left">
                <Image
                  src="/images/bg.jpg"
                  width={200}
                  height={200}
                  className="m-auto rounded-full w-1/12"
                />
                <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                  <h3 className="text-lg">LINEスタンプ40個</h3>
                  <p className="flex items-center text-lg py-2">
                    評価：
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    5/5
                  </p>
                  <p>
                    とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                    とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                  </p>
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
            <p className="text-center">対応中のサービス</p>
            <h2 className="text-center text-3xl">
              全てのお客様に満足していただけるよう、高品質なものをお届けします！
            </h2>

            <div className="md:flex w-11/12 mx-auto">

              <div className="md:mx-4 md:w-screen my-4 md:my-0 border-2 rounded-sm overflow-hidden relative">
                <Image src="/images/bg.jpg" width={450} height={250} />
                <span className="absolute block bg-red-100 py-2 px-6 transform -translate-y-6">
                  満枠対応中！
                </span>
                <h3 className="text-xl px-2 pt-6">LINEスタンプ制作の場合</h3>
                <ul className="list-disc pt-2 pb-4 px-6">
                  <li>40個</li>
                  <li>納期：指定なし</li>
                  <li>オプション：キャラクター追加</li>
                  <li>料金：10,000円</li>
                </ul>
                <div className="flex justify-center py-4">
                  <CustomButton
                    toLink=""
                    text="もっと見る"
                    size="medium"
                    outline={true}
                  />
                </div>
              </div>
              <div className="md:mx-4 md:w-screen my-4 md:my-0 border-2 rounded-sm overflow-hidden relative">
                <Image src="/images/bg.jpg" width={450} height={250} />
                <span className="absolute block bg-red-100 py-2 px-6 transform -translate-y-6">
                  満枠対応中！
                </span>
                <h3 className="text-xl px-2 pt-6">LINEスタンプ制作の場合</h3>
                <ul className="list-disc pt-2 pb-4 px-6">
                  <li>40個</li>
                  <li>納期：指定なし</li>
                  <li>オプション：キャラクター追加</li>
                  <li>料金：10,000円</li>
                </ul>
                <div className="flex justify-center py-4">
                  <CustomButton
                    toLink=""
                    text="もっと見る"
                    size="medium"
                    outline={true}
                  />
                </div>
              </div>
              <div className="md:mx-4 md:w-screen my-4 md:my-0 border-2 rounded-sm overflow-hidden relative">
                <Image src="/images/bg.jpg" width={450} height={250} />
                <span className="absolute block bg-red-100 py-2 px-6 transform -translate-y-6">
                  満枠対応中！
                </span>
                <h3 className="text-xl px-2 pt-6">LINEスタンプ制作の場合</h3>
                <ul className="list-disc pt-2 pb-4 px-6">
                  <li>40個</li>
                  <li>納期：指定なし</li>
                  <li>オプション：キャラクター追加</li>
                  <li>料金：10,000円</li>
                </ul>
                <div className="flex justify-center py-4">
                  <CustomButton
                    toLink=""
                    text="もっと見る"
                    size="medium"
                    outline={true}
                  />
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
              <h3 className="text-xl">無料で見積もりしてみる</h3>
              <CustomButton
                text="無料見積もり"
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
