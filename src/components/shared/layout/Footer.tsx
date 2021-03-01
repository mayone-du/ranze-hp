import Link from "next/link";

const Footer: React.VFC = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <div className="container mx-auto">
          <nav className="flex items-center mx-auto w-11/12">
            <ul className="bg-red-400 mx-4 w-screen">
              <h4>小見出し</h4>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
            </ul>
            <ul className="bg-red-400 mx-4 w-screen">
              <h4>小見出し</h4>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
            </ul>
            <ul className="bg-red-400 mx-4 w-screen">
              <h4>小見出し</h4>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-white">ホーム</a>
                </Link>
              </li>
            </ul>

          </nav>
          <div className="flex items-center flex w-11/12 mx-auto">
            <div className="mx-4 bg-gray-400">
              <h4>ロゴ</h4>
              <h4>会社概要</h4>
            </div>
            <p className="text-white text-center py-6 text-sm">copyright&copy;Ranze</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
