// import Image from "next/image";
import { CheckCircle } from "@material-ui/icons";
import { Layout } from "../components/shared/layout/Layout";
import { SubPageMainVisual } from "../components/shared/SubPageMainVisual";
import { BreadCrumb } from "../components/shared/BreadCrumb";
import { Block } from "../components/shared/generalBlock/Block";
import { Row } from "../components/shared/generalBlock/Row";
import { Column } from "../components/shared/generalBlock/Column";

const About: React.VFC = () => {
  const siteTitle = "About";
  return (
    <>
      <Layout
        metaTitle={`Ranze official site | ${siteTitle}`}
        metaDescription="meta description"
        isActivePage={siteTitle}
      >
        <SubPageMainVisual title={siteTitle} subText="自己紹介" />
        <BreadCrumb currentPage={siteTitle} />

        <Block sectionSubText="自己紹介" sectionTitle="ABOUT">
          <Row>
            <Column>
              <p className="lg:mx-4 mx-0 bg-gray-50 w-full">
              ご覧頂きありがとうございます。イラストレーターのRanzeです._. 18歳からフリーランスのイラストレーターとして活動しています。 ココナラやTwitter、このHPなどをとおして、たくさんの方にご依頼していただいております。 ご依頼に関しては、基本的に納期を設けずに進めさせていただいております。納期を設定しないほうが精神的に余裕ができ、より質の高いイラストを制作できるので、納期は基本的に設けないで進めさせていただきます。 もちろん急ぎの方は柔軟に対応しますが、かなりタイトな場合などは断らせて頂く場合がございますので予めご了承ください。
              </p>
            </Column>
          </Row>
        </Block>

        <Block sectionSubText="ソーシャルメディア" sectionTitle="SNS">
          <Row>
            <Column>
              <div className="w-full">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="mx-auto fill-current text-blue-500"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  <span className="font-bold mt-4">Twitter</span>
                </div>
              </div>
            </Column>
            <Column>
              <div className="bg-gray-50 w-full">Instagram</div>
            </Column>
            <Column>
              <div className="bg-gray-50 w-full">coconala</div>
            </Column>
          </Row>
        </Block>

        <Block sectionSubText="よくある悩み" sectionTitle="サンプルテキスト">
          <Row>
            <Column className="flex">
              <ul className="list-disc px-8 py-4 bg-gray-50 text-lg w-full">
                <li>〇〇のプレゼントで使いたい</li>
                <li>彼氏/彼女と使いたい</li>
                <li>サンプルテキスト</li>
                <li>サンプルテキスト</li>
              </ul>
            </Column>
            <Column>
              <ul className="list-disc px-8 py-4 bg-gray-50 text-lg w-full">
                <li>〇〇のプレゼントで使いたい</li>
                <li>彼氏/彼女と使いたい</li>
                <li>サンプルテキスト</li>
                <li>サンプルテキスト</li>
              </ul>
            </Column>
          </Row>
        </Block>

        <Block
          sectionSubText="意識しているポイント"
          sectionTitle="サンプルテキスト"
        >
          <Row>
            <Column>
              <ul className="flex justify-center flex-col mx-4 p-2 bg-gray-50 w-full">
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
            </Column>
            <Column>
              <ul className="flex justify-center flex-col mx-4 p-2 bg-gray-50 w-full">
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
            </Column>
          </Row>
        </Block>

        <Block sectionSubText="共通の納品までの流れ" sectionTitle="タイトル">
          <Row>
            <Column>
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-50 w-full">
                hoge
              </div>
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-50 w-full">
                画像を乗せる
              </div>
            </Column>
            <Column>
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-50 w-full">
                画像を乗せる
              </div>
              <div className="flex justify-center flex-col mx-4 p-2 bg-gray-50 w-full">
                hoge
              </div>
            </Column>
          </Row>
        </Block>
      </Layout>
    </>
  );
};

export default About;
