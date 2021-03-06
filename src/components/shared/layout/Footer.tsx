import Link from "next/link";

const Footer: React.VFC = () => {
  return (
    <>
      <footer className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <nav className="sm:flex items-center mx-4 md:mx-auto md:w-11/12 text-center">
            <ul className="md:mx-4 md:w-screen">
              <li className="my-4">
                <Link href="/">
                  <a className="text-white p-2">ホーム</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/about">
                  <a className="text-white p-2">自己紹介</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/service">
                  <a className="text-white p-2">サービス</a>
                </Link>
              </li>
            </ul>
            <ul className="md:mx-4 md:w-screen">
              <li className="my-4">
                <Link href="/works">
                  <a className="text-white p-2">実績</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/contact">
                  <a className="text-white p-2">お問い合わせ</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/privacy-policy">
                  <a className="text-white p-2">プライバシー・ポリシー</a>
                </Link>
              </li>
            </ul>
            <ul className="md:mx-4 md:w-screen">
              <li className="my-4">
                <Link href="/sitemap">
                  <a className="text-white p-2">サイトマップ</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/404">
                  <a className="text-white p-2">404</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/faq">
                  <a className="text-white p-2">FAQ</a>
                </Link>
              </li>
            </ul>
            <ul className="md:mx-4 md:w-screen">
              <li className="my-4">
                <Link href="/">
                  <a className="text-white p-2">ホーム</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/">
                  <a className="text-white p-2">ホーム</a>
                </Link>
              </li>
              <li className="my-4">
                <Link href="/">
                  <a className="text-white p-2">ホーム</a>
                </Link>
              </li>
            </ul>

          </nav>
          <div className="flex items-center justify-between w-11/12 mx-auto pt-8">
            <div className="mx-4 bg-gray-400">
              <h4>ロゴ</h4>
              <h4>Ranze</h4>
            </div>
            <p className="text-white text-center py-6 mx-4 text-sm">copyright&copy;Ranze</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
