import { BreadCrumb } from "../../components/shared/BreadCrumb";
import { Block } from "../../components/shared/generalBlock/Block";
import { Column } from "../../components/shared/generalBlock/Column";
import { Row } from "../../components/shared/generalBlock/Row";
import { Layout } from "../../components/shared/layout/Layout";
import { SubPageMainVisual } from "../../components/shared/SubPageMainVisual";

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
        <BreadCrumb
          parentPage="Works"
          parentPath="/works"
          currentPage={siteTitle}
        />

        <Block sectionSubText="レビュー" sectionTitle="REVIEWS">
          <Row>
            <Column className="my-0 text-custom-darkgray">
              <p className="text-center my-6 border-b border-custom-lightgray text-lg font-bold">
                以下頂いたレビューをすべてそのまま掲載しております。
              </p>
              <p className="p-2 mb-6 bg-gray-50">
                無事審査通りました！対応も早く細かな要望も受け入れてくれて助かりました！今後も機会があれば、依頼させていただきたいと思います。ありがとうございました！
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                今回も迅速なご対応有り難うございました。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                最高でした！！！私はココナラが初めてだったので、不安でしたが、大変丁寧で、わかりやすく、スタンプも大変素敵でした。どんどん素敵なものが出来上がっていって嬉しかったです。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                可愛がっているぬいぐるみのスタンプ化をご依頼しました。こちらの要望をご理解いただき求めていたイラストをお願いすることができました。いつもレスポンスが早くとても柔軟性が高いという印象を受けました。仕上がりとても気に入っており、今回お願いして本当によかったです。また機会があれば次回もお願いしたいです。本当にありがとうございました。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                オリジナルキャラクターから16のスタンプを作成いただきました。どれもオリジナル雰囲気を残しつつ、ほのぼのした作品に仕上げていただき満足です。細かな修正をいろいろとお願いしました、いずれも迅速にかつこころよく対応いただき感謝です。スタンプが正式登録され使用できる日を楽しみにしています。このたびは、ありがとうございました！
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                とても丁寧な対応で出来上がりも早かったです。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                今回２回目の購入になります(●´ω`●)いつもながらめちゃくちゃ可愛いキャラで大変満足です(●´ω`●)また機会がありましたらよろしくお願いします！！
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                とても親身にたくさんのご提案をいただきました。センスあるかわいいスタンプたちが出来上がってとっても満足しています！返信や納期も早く本当に助かりました！ぜひまたお願いしたく思います。この度はありがとうございました！
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                丁寧に対応していただきました。また機会があればよろしくお願いいたします。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                とても可愛らしくイラストを描いていただきました！修正にも快く対応して下さり嬉しかったです(*´`*)
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                とてもほっとするイラストを作っていただけて嬉しいです。数パターンの提案をして下さり決定しやすかったです。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                細かな修正を何度もお願いしましたが、快く引き受けてくださりましたので助かりました！またスタンプを作って頂く際はお願いしようと思います！大変素晴らしい出品者様です！
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                とても可愛いスタンプを作っていただきました！細かい要望にも、迅速に対応していただけて大変助かりました。また機会がありましたら宜しくお願いいたします。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                やりとりもスムーズで、少しの修正もすごく丁寧に対応いただき、素晴らしいクリエーター様でした！オススメです！
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                とてもかわいいスタンプを作っていただきました！こちらの無理なお願いにも快く対応していただき、ひとつひとつ丁寧に作業を進めてくださいました。優しい対応に、好感が持てます。また是非ともよろしくお願いいたします。ありがとうございました！！
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                かわいらしいスタンプを作っていただきました♪仕事も非常に速いです⭐︎★
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                途中で提案しなおした時も、すぐに返信くださり安心してお任せできました。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                初めてココナラサービスの利用、Ranzeさんに依頼して良かったです。丁寧で迅速な対応ありがとうございました。また、次回もよろしくお願いします！^-^
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                2回目の依頼でした。今回もとても迅速かつ丁寧な対応をしていただきありがたかったです。またお願いしたいです。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                細かいリクエストにも快く答えていただき、またスムーズな対応をいただきました。ありがとうございました。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                理想とするイラストをそのまま仕上げてくださいました。対応も優しく、また是非、よろしくお願いいたします。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                適切に対応いただきました。ありがとうございます。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                イラストの素晴らしさは言うまでもありませんが、作業の迅速性、円滑なコミニュケーション、修正を依頼しても細やかに応えてくれる適応性、なによりアフターケアを含めた気遣いが素晴らしく。お取り引きをする上でとても信頼のおける出品者様でした。ぜひまたご一緒にお仕事がしたいなと思いました。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                素敵なイラストありがとうございます！またの機会でよろしくお願い致します！
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                非常に丁寧かつスムーズにしていただき、気持ちよくやりとりできました。わからないことに対しても誠実に対応くださり、ありがとうございます。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                完成して嬉しいです！クオリティもとても高くて、満足です😆何から何まで迅速なご対応有難うございました！今後も機会があれば、ぜひ依頼をさせていただきたいと思います！有難うございました！　
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                今回初めてLINEスタンプを作成しようと購入させて頂きました！絵タッチがとても好みで完成商品も想像以上の物を作って頂きました！大変満足しております！納品後も審査の出し方など嫌な顔1つせず丁寧に教えて頂きありがとうございます！審査が通るかどうか分かりませんが今から待ち遠しいです！今回の取引ありがとうございました(●´ω`●)
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                たくさん要望を出したにもかかわらず、全て丁寧に答えて下さり大変満足のいくものになりました。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                とにかく対応が早く納品までテンポ良くお願いできました。
              </p>

              <p className="p-2 mb-6 bg-gray-50">
                {" "}
                とても丁寧に対応して頂き、安心して進められました‼またご縁がありましたらどうぞよろしくお願い致します‼ありがとうございました。
              </p>
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default Reviews;
