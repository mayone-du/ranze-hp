import Image from "next/image";
import { Star } from "@material-ui/icons";
import { Layout } from "../components/shared/layout/Layout";
import { CustomButton } from "../components/shared/CustomColorButton";
import { Block } from "../components/shared/generalBlock/Wrapper";
import { Row } from "../components/shared/generalBlock/Row";
import { Column } from "../components/shared/generalBlock/Column";

const Home: React.VFC = () => {
  return (
    <>
      <Layout
        metaTitle="Ranze official site | イラストレーターRanzeの公式サイト"
        metaDescription="イラストレーターRanzeの公式ホームページです。LINEスタンプ、イラスト制作や名刺制作などをしています！まずはお気軽にご相談ください！"
        isActivePage="Home"
      >
        {/* メインビジュアル */}
        <article
          className="mx-auto"
          style={{ backgroundImage: "url(./images/bg.jpg)" }}
        >
          <section className="h-screen flex items-center justify-center flex-col">
            <h1 className="lg:text-6xl text-2xl font-bold">
              イラスト・LINEスタンプ制作
            </h1>
            <p className="py-8 text-lg mx-4">
              イラストやLINEスタンプ、SNSで使えるアイコンやシンプルな名刺制作などの制作等を承ります！
            </p>
            <CustomButton
              outline={false}
              text="お問い合わせ"
              toLink="/contact"
              size="large"
            />
          </section>
        </article>

        <Block sectionSubText="自己紹介" sectionTitle="ABOUT">
          <Row>
            <Column>
              ご覧頂きありがとうございます。イラストレーターのRanzeです._.
              お客様とのご縁を大切にしています。 Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate aperiam minus laudantium
              culpa accusamus soluta unde aliquid eum obcaecati magnam tempora
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
              praesentium natus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cupiditate aperiam minus laudantium culpa
              accusamus soluta unde aliquid eum obcaecati magnam tempora
              repellat atque asperiores vitae distinctio ipsum autem,
              praesentium natus.
            </Column>
          </Row>
        </Block>

        {/* <article className="container mx-auto">
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
        </article> */}
        {/* <span className="block bg-red-400 transform skew-x-12 opacity-50 rounded-full -translate-y-72 -translate-x-1/2 left-1/2 w-5/6 absolute h-60"></span> */}

        <Block sectionSubText="特徴" sectionTitle="FEATURES">
          <Row className="text-center">
            <Column className="bg-gray-100 p-4">
              <p className="lg:text-6xl text-4xl font-bold lg:py-4 pb-4">1</p>
              <Image src="/images/bg.jpg" width={150} height={150} />
              <h3 className="py-4 lg:text-2xl text-xl font-bold">
                老若男女問わず人気！
              </h3>
              <p>
                ゆるくて可愛いイラストを気に入っていただけ、老若男女問わずにご使用頂いています！個数も8~40個と、お客様に合わせた制作が可能です！
              </p>
            </Column>
            <Column className="bg-gray-100 p-4">
              <p className="lg:text-6xl text-4xl font-bold lg:py-4 pb-4">2</p>
              <Image src="/images/bg.jpg" width={150} height={150} />
              <h3 className="py-4 lg:text-2xl text-xl font-bold">
                基本的に修正回数は無制限！
              </h3>
              <p>
                あまりに多い、または大幅すぎる場合は例外として、軽微な修正は無制限で対応致します！気を使わずにお気軽にご相談ください！
              </p>
            </Column>
            <Column className="bg-gray-100 p-4">
              <p className="lg:text-6xl text-4xl font-bold lg:py-4 pb-4">3</p>
              <Image src="/images/bg.jpg" width={150} height={150} />
              <h3 className="py-4 lg:text-2xl text-xl font-bold">
                ストレスフリーなやりとり
              </h3>
              <p>
                丁寧かつ円滑なコミュニケーションはもちろん、公式ライン、Slack、メールなどの中でお好きなツールをご利用いただけます！
              </p>
            </Column>
          </Row>
        </Block>

        {/* <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">特徴</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              FEATURES
            </h2>
            <div className="lg:flex w-11/12 mx-auto">
              <div className="bg-gray-100 lg:mx-4 my-4 w-full text-center p-4">
                <p className="lg:text-6xl text-4xl font-bold lg:py-4 pb-4">1</p>
                <Image src="/images/bg.jpg" width={150} height={150} />
                <h3 className="py-4 lg:text-2xl text-xl font-bold">
                  老若男女問わず人気！
                </h3>
                <p>
                  ゆるくて可愛いイラストを気に入っていただけ、老若男女問わずにご使用頂いています！個数も8~40個と、お客様に合わせた制作が可能です！
                </p>
              </div>
              <div className="bg-gray-100 lg:mx-4 my-4 w-full text-center p-4">
                <p className="lg:text-6xl text-4xl font-bold lg:py-4 pb-4">2</p>
                <Image src="/images/bg.jpg" width={150} height={150} />
                <h3 className="py-4 lg:text-2xl text-xl font-bold">
                  基本的に修正回数は無制限！
                </h3>
                <p>
                  あまりに多い、または大幅すぎる場合は例外として、軽微な修正は無制限で対応致します！気を使わずにお気軽にご相談ください！
                </p>
              </div>
              <div className="bg-gray-100 lg:mx-4 my-4 w-full text-center p-4">
                <p className="lg:text-6xl text-4xl font-bold lg:py-4 pb-4">3</p>
                <Image src="/images/bg.jpg" width={150} height={150} />
                <h3 className="py-4 lg:text-2xl text-xl font-bold">
                  ストレスフリーなやりとり
                </h3>
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
 */}

        <Block sectionSubText="サービス" sectionTitle="SERVICE">
          <Row>
            <Column className="bg-gray-100 p-6 flex">
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
            </Column>
            <Column className="bg-gray-100 p-6 flex">
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
            </Column>
          </Row>

          <Row>
            <Column className="bg-gray-100 p-6 flex">
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
            </Column>
            <Column className="bg-gray-100 p-6 flex">
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
            </Column>
            <Column className="bg-gray-100 p-6 flex">
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
            </Column>
          </Row>
        </Block>

        {/* <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">サービス</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              SERVICE
            </h2>

            <div className="lg:flex w-11/12 mx-auto">
              <div className="lg:m-4 my-4 w-full flex bg-gray-100 p-6">
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

              <div className="lg:m-4 my-4 w-full flex bg-gray-100 p-6">
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

            <div className="lg:flex w-11/12 mx-auto">
              <div className="lg:m-4 my-4 w-full flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex text-center items-center justify-center">
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
              <div className="lg:m-4 my-4 w-full flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex text-center items-center justify-center">
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
              <div className="lg:m-4 my-4 w-full flex bg-gray-100 p-6">
                <div className="w-4/12 p-2 flex text-center items-center justify-center">
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
        </article> */}

        <Block sectionSubText="実績" sectionTitle="WORKS">
          <Row>
            <Column className="bg-gray-100">画像をタイルで表示</Column>
          </Row>
        </Block>

        <Block sectionSubText="評価" sectionTitle="REVIEW">
          <Row>
            <Column className="bg-gray-100 xl:flex py-4 xl:p-8 text-center xl:text-left">
              <Image
                src="/images/bg.jpg"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                <h3 className="text-lg">LINEスタンプ40個</h3>
                <p className="flex items-center text-lg py-2 justify-center lg:justify-start">
                  評価：
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <span className="mx-4">5/5</span>
                </p>
                <p className="lg:text-base text-sm">
                  とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                  とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                </p>
              </div>
            </Column>
          </Row>
          <Row>
            <Column className="bg-gray-100 xl:flex py-4 xl:p-8 text-center xl:text-left">
              <Image
                src="/images/bg.jpg"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                <h3 className="text-lg">LINEスタンプ40個</h3>
                <p className="flex items-center text-lg py-2 justify-center lg:justify-start">
                  評価：
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <span className="mx-4">5/5</span>
                </p>
                <p className="lg:text-base text-sm">
                  とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                  とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                </p>
              </div>
            </Column>
          </Row>
          <Row>
            <Column className="bg-gray-100 xl:flex py-4 xl:p-8 text-center xl:text-left">
              <Image
                src="/images/bg.jpg"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                <h3 className="text-lg">LINEスタンプ40個</h3>
                <p className="flex items-center text-lg py-2 justify-center lg:justify-start">
                  評価：
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <span className="mx-4">5/5</span>
                </p>
                <p className="lg:text-base text-sm">
                  とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                  とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                </p>
              </div>
            </Column>
          </Row>
        </Block>

        {/* <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">評価</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              REVIEW
            </h2>
            <div className="w-11/12 mx-auto">
              <div className="xl:flex xl:m-4 my-4 bg-gray-100 py-4 xl:p-8 text-center xl:text-left">
                <Image
                  src="/images/bg.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
                <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                  <h3 className="text-lg">LINEスタンプ40個</h3>
                  <p className="flex items-center text-lg py-2 justify-center lg:justify-start">
                    評価：
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <span className="mx-4">5/5</span>
                  </p>
                  <p className="lg:text-base text-sm">
                    とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                    とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                  </p>
                </div>
              </div>
              <div className="xl:flex xl:m-4 my-4 bg-gray-100 py-4 xl:p-8 text-center xl:text-left">
                <Image
                  src="/images/bg.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
                <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                  <h3 className="text-lg">LINEスタンプ40個</h3>
                  <p className="flex items-center text-lg py-2 justify-center lg:justify-start">
                    評価：
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <span className="mx-4">5/5</span>
                  </p>
                  <p className="lg:text-base text-sm">
                    とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                    とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。とても良かったです。
                  </p>
                </div>
              </div>
              <div className="xl:flex xl:m-4 my-4 bg-gray-100 py-4 xl:p-8 text-center xl:text-left">
                <Image
                  src="/images/bg.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
                <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                  <h3 className="text-lg">LINEスタンプ40個</h3>
                  <p className="flex items-center text-lg py-2 justify-center lg:justify-start">
                    評価：
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <span className="mx-4">5/5</span>
                  </p>
                  <p className="lg:text-base text-sm">
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
        </article> */}

        <article className="container mx-auto">
          <section className="md:py-16 py-10">
            <p className="text-center">対応中のサービス</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              ACCEPT
            </h2>

            <div className="lg:flex w-11/12 mx-auto">
              <div className="lg:mx-4 w-full my-4 lg:my-0 border-2 rounded-sm overflow-hidden relative">
                <div className="text-center">
                  <Image src="/images/bg.jpg" width={450} height={250} />
                </div>
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
              <div className="lg:mx-4 w-full my-4 lg:my-0 border-2 rounded-sm overflow-hidden relative">
                <div className="text-center">
                  <Image src="/images/bg.jpg" width={450} height={250} />
                </div>
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
              <div className="lg:mx-4 w-full my-4 lg:my-0 border-2 rounded-sm overflow-hidden relative">
                <div className="text-center">
                  <Image src="/images/bg.jpg" width={450} height={250} />
                </div>
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

        <article className="bg-gray-100 text-center">
          <section className="md:py-20 py-14">
            <p>お問い合わせ</p>
            <h2 className="lg:text-4xl text-2xl tracking-widest font-bold text-center lg:py-4 py-2">
              CONTACT
            </h2>
            <CustomButton
              toLink="/contact"
              text="お問い合わせ"
              size="large"
              outline={false}
              className="mx-auto my-6 lg:w-auto w-2/3"
            />
            <div className="lg:flex items-center justify-center bg-white lg:w-1/2 w-11/12 lg:p-8 p-4 mx-auto">
              <h3 className="lg:text-xl m-4">無料で見積もりしてみる</h3>
              <CustomButton
                text="無料見積もり"
                size="medium"
                toLink="/"
                outline={true}
                className="m-4"
              />
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Home;
