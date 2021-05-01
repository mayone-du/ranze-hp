import Image from "next/image";
import Link from "next/link";
import { Star } from "@material-ui/icons";
import { Layout } from "../components/shared/layout/Layout";
import { CustomButton } from "../components/shared/CustomColorButton";
import { Block } from "../components/shared/generalBlock/Block";
import { Row } from "../components/shared/generalBlock/Row";
import { Column } from "../components/shared/generalBlock/Column";
import { onEventDisable } from "../libs/onEventDisable";

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
          onContextMenu={onEventDisable}
          onMouseDown={onEventDisable}
          onDragStart={onEventDisable}
        >
          <section
            className="h-96 md:py-80 py-40 flex items-center justify-center flex-col bg-gray-50 bg-center relative"
            style={{
              backgroundImage: "url(/images/main-bg.png)",
              textShadow: "-3px 2px #e9e0da",
              color: "#b69580",
              backgroundSize: "cover",
            }}
          >
            <h1
              title="イラストレーター Ranze"
              className="p-10 absolute md:top-44 top-16 md:left-1/2 left-40 font-serif text-2xl font-bold"
            >
              Illustrator Ranze
            </h1>
          </section>
        </article>

        <Block sectionSubText="自己紹介" sectionTitle="ABOUT">
          <Row>
            <Column className="text-sm text-custom-darkgray md:text-base">
              ご覧頂きありがとうございます。イラストレーターのRanzeです._.
              18歳からフリーランスのイラストレーターとして活動しています。
              ココナラやTwitter、このHPなどをとおして、たくさんの方にご依頼していただいております。
              ご依頼に関しては、基本的に納期を設けずに進めさせていただいております。納期を設定しないほうが精神的に余裕ができ、より質の高いイラストを制作できるので、納期は基本的に設けないで進めさせていただきます。
              もちろん急ぎの方は柔軟に対応しますが、かなりタイトな場合などは断らせて頂く場合がございますので予めご了承ください。
            </Column>
          </Row>
        </Block>

        <Block sectionSubText="特徴" sectionTitle="FEATURES">
          <Row className="text-center">
            <Column className="bg-gray-50 pt-10 px-4 pb-6 shadow-sm">
              <Image
                src="/images/features-01.png"
                width={150}
                height={150}
                objectFit="cover"
                onContextMenu={onEventDisable}
                onMouseDown={onEventDisable}
                onDragStart={onEventDisable}
              />
              <h3 className="py-4 lg:text-2xl text-custom-darkgray text-xl font-bold">
                老若男女問わず人気！
              </h3>
              <p className="text-custom-darkgray">
                ゆるくて可愛いイラストを気に入っていただけ、老若男女問わずにご使用頂いています！個数も8~40個と、ご要望に合わせた制作が可能です！
              </p>
            </Column>
            <Column className="bg-gray-50 pt-10 px-4 pb-6 shadow-sm">
              <Image
                src="/images/features-01.png"
                width={150}
                height={150}
                objectFit="cover"
                onContextMenu={onEventDisable}
                onMouseDown={onEventDisable}
                onDragStart={onEventDisable}
              />
              <h3 className="py-4 lg:text-2xl text-custom-darkgray text-xl font-bold">
                基本的に修正回数は無制限！
              </h3>
              <p className="text-custom-darkgray">
                あまりに多い、または大幅すぎる場合は例外として、軽微な修正や要望は無制限で対応致します！遠慮せずにお気軽にご相談ください！
              </p>
            </Column>

            <Column className="bg-gray-50 pt-10 px-4 pb-6 shadow-sm">
              <Image
                src="/images/features-01.png"
                width={150}
                height={150}
                objectFit="cover"
                onContextMenu={onEventDisable}
                onMouseDown={onEventDisable}
                onDragStart={onEventDisable}
              />
              <h3 className="py-4 lg:text-2xl text-custom-darkgray text-xl font-bold">
                ストレスフリーなやりとり
              </h3>
              <p className="text-custom-darkgray">
                丁寧かつ円滑なコミュニケーションはもちろん、公式ライン、Slack、メールなどの中でお好きなツールをご利用いただけます！
              </p>
            </Column>
          </Row>
          <div className="flex justify-center">
            <CustomButton
              text="もっと見る"
              toLink="/"
              outline={true}
              size="medium"
              className="mx-auto mt-4"
            />
          </div>
        </Block>

        <Block sectionSubText="サービス" sectionTitle="SERVICES">
          <Row>
            <Column className="bg-gray-50 md:p-6 text-custom-darkgray p-2 flex shadow-sm">
              <div className="w-4/12 p-2 flex items-center justify-center">
                <Image
                  className="block w-1/3"
                  src="/images/bg.jpg"
                  width={150}
                  height={150}
                  onContextMenu={onEventDisable}
                  onMouseDown={onEventDisable}
                  onDragStart={onEventDisable}
                />
              </div>
              <div className="w-2/3 p-2">
                <h3 className="md:text-xl text-lg font-bold mb-2">
                  LINEスタンプ制作
                </h3>
                <p className="md:text-base text-xs">
                  ご希望のイラスト通りにLINEスタンプを作成いたします！
                  希望するイメージ等がなく、おまかせしたいなどでも大丈夫です！
                  作りながら、お客様のご要望どおりに進めさせていただきます！
                </p>
              </div>
            </Column>
            <Column className="bg-gray-50 md:p-6 text-custom-darkgray p-2 flex shadow-sm">
              <div className="w-4/12 p-2 flex items-center justify-center">
                <Image
                  className="block w-1/3"
                  src="/images/bg.jpg"
                  width={150}
                  height={150}
                  onContextMenu={onEventDisable}
                  onMouseDown={onEventDisable}
                  onDragStart={onEventDisable}
                />
              </div>
              <div className="w-2/3 p-2">
                <h3 className="md:text-xl text-lg font-bold mb-2">
                  イラスト制作
                </h3>
                <p className="md:text-base text-xs">
                  自社の商品から〇〇まで、汎用的に使えるイラストを制作いたします！
                </p>
              </div>
            </Column>
          </Row>

          <Row>
            <Column className="bg-gray-50 md:p-6 text-custom-darkgray p-2 flex shadow-sm">
              <div className="w-4/12 p-2 flex items-center justify-center">
                <Image
                  className="block w-1/3"
                  src="/images/bg.jpg"
                  width={150}
                  height={150}
                  onContextMenu={onEventDisable}
                  onMouseDown={onEventDisable}
                  onDragStart={onEventDisable}
                />
              </div>
              <div className="w-2/3 p-2">
                <h3 className="md:text-xl text-lg font-bold mb-2">
                  LINE絵文字制作
                </h3>
                <p className="md:text-sm text-xs">
                  LINEで使える可愛い絵文字を作成いたします！
                  ちょっとした一言でも、絵文字をつけて温かいイメージに✨
                  絵文字としてだけでなく、簡単なスタンプとしてもご利用いただけます！
                </p>
              </div>
            </Column>
            <Column className="bg-gray-50 md:p-6 text-custom-darkgray p-2 flex shadow-sm">
              <div className="w-4/12 p-2 flex items-center justify-center">
                <Image
                  className="block w-1/3"
                  src="/images/bg.jpg"
                  width={150}
                  height={150}
                  onContextMenu={onEventDisable}
                  onMouseDown={onEventDisable}
                  onDragStart={onEventDisable}
                />
              </div>
              <div className="w-2/3 p-2">
                <h3 className="md:text-xl text-lg font-bold mb-2">
                  SNSなどのアイコン制作
                </h3>
                <p className="md:text-sm text-xs">
                  TwitterやYouTube、Instagramなど、SNSなどのプロフィールに使える可愛いイラストを作成します！
                  個人用からビジネス用まで、幅広く対応いたします！
                </p>
              </div>
            </Column>
            <Column className="bg-gray-50 md:p-6 text-custom-darkgray p-2 flex shadow-sm">
              <div className="w-4/12 p-2 flex items-center justify-center">
                <Image
                  className="block w-1/3"
                  src="/images/bg.jpg"
                  width={150}
                  height={150}
                  onContextMenu={onEventDisable}
                  onMouseDown={onEventDisable}
                  onDragStart={onEventDisable}
                />
              </div>
              <div className="w-2/3 p-2">
                <h3 className="md:text-xl text-lg font-bold mb-2">名刺制作</h3>
                <p className="md:text-sm text-xs">
                  ビジネスシーンや婚活で使用できるようなものなどの、シンプルな名刺を作成致します！
                </p>
              </div>
            </Column>
          </Row>
          <div className="flex justify-center">
            <CustomButton
              text="もっと見る"
              toLink="/"
              outline={true}
              size="medium"
              className="mx-auto mt-4"
            />
          </div>
        </Block>

        <Block sectionSubText="実績" sectionTitle="WORKS">
          <Row>
            <Column className="bg-gray-50">画像をタイルで表示</Column>
          </Row>
          <div className="flex justify-center">
            <CustomButton
              text="もっと見る"
              toLink="/"
              outline={true}
              size="medium"
              className="mx-auto mt-4"
            />
          </div>
        </Block>

        <Block sectionSubText="評価" sectionTitle="REVIEWS">
          <Row>
            <Column className="bg-gray-50 xl:flex py-4 xl:p-8 shadow-sm text-custom-darkgray text-center xl:text-left">
              <Image
                src="/images/bg.jpg"
                width={200}
                height={200}
                className="object-cover"
                onContextMenu={onEventDisable}
                onMouseDown={onEventDisable}
                onDragStart={onEventDisable}
              />
              <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                <h3 className="md:text-lg text-base font-bold">
                  LINEスタンプ40個
                </h3>
                <p className="flex items-center md:text-lg text-sm py-2 justify-center lg:justify-start">
                  評価：
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <span className="mx-4">5/5</span>
                </p>
                <p className="lg:text-base text-xs">
                  イラストの素晴らしさは言うまでもありませんが、 作業の迅速性、
                  円滑なコミニュケーション、
                  修正を依頼しても細やかに応えてくれる適応性、
                  なによりアフターケアを含めた 気遣いが素晴らしく。
                  お取り引きをする上で とても信頼のおける出品者様でした。
                  ぜひまたご一緒に お仕事がしたいなと思いました。
                </p>
              </div>
            </Column>
          </Row>
          <Row>
            <Column className="bg-gray-50 xl:flex py-4 xl:p-8 shadow-sm text-custom-darkgray text-center xl:text-left">
              <Image
                src="/images/bg.jpg"
                width={200}
                height={200}
                className="object-cover"
                onContextMenu={onEventDisable}
                onMouseDown={onEventDisable}
                onDragStart={onEventDisable}
              />
              <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                <h3 className="md:text-lg text-base font-bold">
                  LINEスタンプ40個
                </h3>
                <p className="flex items-center md:text-lg text-sm py-2 justify-center lg:justify-start">
                  評価：
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <span className="mx-4">5/5</span>
                </p>
                <p className="lg:text-base text-xs">
                  今回初めてLINEスタンプを作成しようと 購入させて頂きました！
                  絵タッチがとても好みで
                  完成商品も想像以上の物を作って頂きました！
                  大変満足しております！ 納品後も審査の出し方など
                  嫌な顔1つせず丁寧に教えて頂き ありがとうございます！
                  審査が通るかどうか分かりませんが 今から待ち遠しいです！
                  今回の取引ありがとうございました(●´ω`●)
                </p>
              </div>
            </Column>
          </Row>
          <Row>
            <Column className="bg-gray-50 xl:flex py-4 xl:p-8 shadow-sm text-custom-darkgray text-center xl:text-left">
              <Image
                src="/images/bg.jpg"
                width={200}
                height={200}
                className="object-cover"
                onContextMenu={onEventDisable}
                onMouseDown={onEventDisable}
                onDragStart={onEventDisable}
              />
              <div className="xl:pl-8 xl:mx-4 mx-auto w-11/12">
                <h3 className="md:text-lg text-base font-bold">
                  LINEスタンプ40個
                </h3>
                <p className="flex items-center md:text-lg text-sm py-2 justify-center lg:justify-start">
                  評価：
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <span className="mx-4">5/5</span>
                </p>
                <p className="lg:text-base text-xs">
                  とても親身にたくさんのご提案をいただきました。センスあるかわいいスタンプたちが出来上がってとっても満足しています！返信や納期も早く本当に助かりました！ぜひまたお願いしたく思います。この度はありがとうございました！
                </p>
              </div>
            </Column>
          </Row>
          <div className="flex justify-center">
            <CustomButton
              text="もっと見る"
              toLink="/works/reviews"
              outline={true}
              size="medium"
              className="mx-auto mt-4"
            />
          </div>
        </Block>

        <Block sectionSubText="対応中のサービス" sectionTitle="ACCEPT">
          <Row>
            <Column className="border border-custom-lightgray text-custom-darkgray relative">
              <div className="text-center">
                <Image
                  src="/images/bg.jpg"
                  width={450}
                  height={250}
                  onContextMenu={onEventDisable}
                  onMouseDown={onEventDisable}
                  onDragStart={onEventDisable}
                />
              </div>
              <span className="absolute block bg-red-100 py-2 px-6 shadow-sm transform -translate-y-6">
                満枠対応中！
              </span>
              <h3 className="text-xl font-bold px-2 pt-6">
                LINEスタンプ制作の場合
              </h3>
              <ul className="list-disc pt-2 pb-4 px-6">
                <li>40個</li>
                <li>納期：指定なし</li>
                <li>オプション：キャラクター追加、作成物を非公開</li>
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
            </Column>
            <Column className="border border-custom-lightgray text-custom-darkgray relative">
              <div className="text-center">
                <Image
                  src="/images/bg.jpg"
                  width={450}
                  height={250}
                  onContextMenu={onEventDisable}
                  onMouseDown={onEventDisable}
                  onDragStart={onEventDisable}
                />
              </div>
              <span className="absolute block bg-red-100 py-2 px-6 shadow-sm transform -translate-y-6">
                満枠対応中！
              </span>
              <h3 className="text-xl font-bold px-2 pt-6">
                汎用イラスト制作の場合（Twitterのバナー）
              </h3>
              <ul className="list-disc pt-2 pb-4 px-6">
                <li>1枚</li>
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
            </Column>
            <Column className="border border-custom-lightgray text-custom-darkgray relative">
              <div className="text-center">
                <Image
                  src="/images/bg.jpg"
                  width={450}
                  height={250}
                  onContextMenu={onEventDisable}
                  onMouseDown={onEventDisable}
                  onDragStart={onEventDisable}
                />
              </div>
              <span className="absolute block bg-red-100 py-2 px-6 shadow-sm transform -translate-y-6">
                2 / 5 枠対応中！
              </span>
              <h3 className="text-xl font-bold px-2 pt-6">
                LINE絵文字の場合
              </h3>
              <ul className="list-disc pt-2 pb-4 px-6">
                <li>40個</li>
                <li>納期：指定なし</li>
                <li>オプション：なし</li>
                <li>料金：3,000円</li>
              </ul>
              <div className="flex justify-center py-4">
                <CustomButton
                  toLink=""
                  text="もっと見る"
                  size="medium"
                  outline={true}
                />
              </div>
            </Column>
          </Row>
          <div className="flex justify-center mt-4">
            <CustomButton
              text="一覧へ"
              toLink="/"
              size="medium"
              outline={true}
            />
          </div>
        </Block>

        <Block
          addArticleClassName="bg-gray-50 text-center"
          sectionSubText="お問い合わせ"
          sectionTitle="CONTACT"
        >
          <Row>
            <Column>
              <CustomButton
                toLink="/contact"
                text="お問い合わせ"
                size="large"
                outline={false}
                className="mx-auto my-6 lg:w-auto w-2/3"
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <div className="mb-4">
                <Link href="/contact">
                  <a className="mx-4 text-blue-500">LINEでのお問い合わせ</a>
                </Link>
                <Link href="/faq">
                  <a className="mx-4 text-blue-500">よくあるご質問はこちら</a>
                </Link>
              </div>
            </Column>
          </Row>
          <Row>
            <Column>
              <div className="lg:flex items-center justify-center bg-white lg:w-1/2 w-11/12 lg:p-8 p-4 mx-auto shadow-sm">
                <h3 className="lg:text-xl m-4 text-custom-darkgray">
                  無料で見積もりしてみる
                </h3>
                <CustomButton
                  text="無料見積もり"
                  size="medium"
                  toLink="/"
                  outline={true}
                  className="m-4"
                />
              </div>
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default Home;
