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
            <Column className="text-sm text-custom-darkgray md:text-base">
              ご覧頂きありがとうございます。イラストレーターのRanzeです._.
              18歳からフリーランスのイラストレーターとして活動しています。
              ココナラやTwitter、このHPなどをとおして、たくさんの方にご依頼していただいております。
              ご依頼に関しては、基本的に納期を設けずに進めさせていただいております。納期を設定しないほうが精神的に余裕ができ、より質の高いイラストを制作できるので、納期は基本的に設けないで進めさせていただきます。
              もちろん急ぎの方は柔軟に対応しますが、かなりタイトな場合などは断らせて頂く場合がございますので予めご了承ください。
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
                    className="mx-auto fill-current w-12 h-12"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  <span className="font-bold mt-4">Twitter</span>
                </div>
              </div>
            </Column>
            <Column>
              <div className="w-full">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="mx-auto fill-current w-12 h-12"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-bold mt-4">Instagram</span>
                </div>
              </div>
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
