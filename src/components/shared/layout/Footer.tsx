import Link from "next/link";

const Footer: React.VFC = () => {
  return (
    <>
      <footer className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <nav className="sm:flex items-center mx-4 md:mx-auto md:w-11/12 underline">
            <ul className="md:mx-4 w-full text-white">
              <li>
                <h3 className="text-lg border-l-4 border-gray-300 px-2">
                  見出し
                </h3>
              </li>
              <li className="my-4">
                <Link href="/">
                  <a>ホーム</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/about">
                  <a>自己紹介</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/service">
                  <a>サービス</a>
                </Link>
              </li>
            </ul>
            <ul className="md:mx-4 w-full text-white">
              <li>
                <h3 className="text-lg border-l-4 border-gray-300 text-white px-2">
                  見出し
                </h3>
              </li>
              <li className="my-4">
                <Link href="/works">
                  <a>実績</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/contact">
                  <a>お問い合わせ</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/privacy-policy">
                  <a>プライバシー・ポリシー</a>
                </Link>
              </li>
            </ul>
            <ul className="md:mx-4 w-full text-white">
              <li>
                <h3 className="text-lg border-l-4 border-gray-300 text-white px-2">
                  見出し
                </h3>
              </li>
              <li className="my-4">
                <Link href="/sitemap">
                  <a>サイトマップ</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/404">
                  <a>404</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/faq">
                  <a>FAQ</a>
                </Link>
              </li>
            </ul>
            <ul className="md:mx-4 w-full text-white">
              <li>
                <h3 className="text-lg border-l-4 border-gray-300 text-white px-2">
                  見出し
                </h3>
              </li>
              <li className="my-4">
                <Link href="/">
                  <a>ホーム</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/">
                  <a>ホーム</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/">
                  <a>ホーム</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-between w-11/12 mx-auto pt-8">
            <div className="mx-4 bg-gray-400">
              <h4>ロゴ</h4>
              <h4>Ranze</h4>
            </div>
            <p className="text-white text-center py-6 mx-4 text-sm">
              copyright&copy;Ranze
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
