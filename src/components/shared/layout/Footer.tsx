import Link from "next/link";

const Footer: React.VFC = () => {
  return (
    <>
      <footer className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <nav className="sm:flex mx-4 md:mx-auto md:w-11/12">

            <ul className="md:mx-4 w-full text-white mb-14 md:mb-0">
              <li>
                <h3 className="text-xl border-l-4 border-gray-300 px-2 md:mb-8 mb-4">
                  トップページ一覧
                </h3>
              </li>
              <li className="my-4">
                <Link href="/">
                  <a className="border-b border-white">ホーム</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/about">
                  <a className="border-b border-white">自己紹介</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/service">
                  <a className="border-b border-white">サービス</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/works">
                  <a className="border-b border-white">実績</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/contact">
                  <a className="border-b border-white">お問い合わせ</a>
                </Link>
              </li>
            </ul>

            <ul className="md:mx-4 w-full text-white mb-14 md:mb-0">
              <li>
                <h3 className="text-xl border-l-4 border-gray-300 px-2 md:mb-8 mb-4">
                  サービス内容一覧
                </h3>
              </li>
              <li className="my-4">
                <Link href="/service/line-stamp">
                  <a className="border-b border-white">LINEスタンプ</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/service">
                  <a className="border-b border-white">LINE絵文字</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/service">
                  <a className="border-b border-white">汎用イラスト</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/service">
                  <a className="border-b border-white">SNSアイコン</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/service">
                  <a className="border-b border-white">名刺</a>
                </Link>
              </li>
            </ul>

            <ul className="md:mx-4 w-full text-white mb-14 md:mb-0">
              <li>
                <h3 className="text-xl border-l-4 border-gray-300 px-2 md:mb-8 mb-4">
                  便利機能
                </h3>
              </li>
              <li className="my-4">
                <Link href="/faq">
                  <a className="border-b border-white">FAQ</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/service">
                  <a className="border-b border-white">サービス（見積もり）</a>
                </Link>
              </li>
            </ul>

            <ul className="md:mx-4 w-full text-white mb-14 md:mb-0">
              <li>
                <h3 className="text-xl border-l-4 border-gray-300 px-2 md:mb-8 mb-4">
                  その他
                </h3>
              </li>
              <li className="my-4">
                <Link href="/">
                  <a className="border-b border-white">サイトマップ</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/privacy-policy">
                  <a className="border-b border-white">プライバシー・ポリシー</a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center justify-between w-11/12 mx-auto pt-8">
            <div className="lg:mx-4 bg-gray-400">
              <h4>Ranze</h4>
            </div>
            <p className="text-white text-center py-6 lg:mx-4 text-sm">
              copyright&copy;&nbsp;Ranze
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export { Footer };
