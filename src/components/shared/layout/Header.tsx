import Link from "next/link";
import { CustomButton } from "../../shared/CustomColorButtons";

const Header: React.VFC = () => {
  return (
    <>
      <header className="flex items-center justify-between py-2 px-12 fixed w-full inset-x-0 z-50 bg-white shadow-md">
        <nav className="flex items-center">
          <h2 className="my_logo text-xl text-center mr-4">
            <Link href="/">
              <a className="block">
                Ranze
                <br />
                Illustrator
              </a>
            </Link>
          </h2>
          <ul className="flex">
            <li>
              <Link href="/">
                <a className="py-3 px-4 mx-2">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="py-3 px-4 mx-2">About</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a className="py-3 px-4 mx-2">Service</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a className="py-3 px-4 mx-2">Works</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="py-3 px-4 mx-2">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* ↓ハンバーガーメニューのトリガー */}
        {/* <button>btn</button> */}
        <ul className="flex items-center">
          <li>
            <CustomButton
              toLink="/service"
              text="無料見積り"
              outline={true}
              size="small"
            />
          </li>
          <li>
            <CustomButton
              toLink="/contact"
              text="お問い合わせ"
              outline={false}
              size="small"
            />
          </li>
        </ul>
      </header>
    </>
  );
};

export { Header };
