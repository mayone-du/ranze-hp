import Link from "next/link";
import { useState } from "react";
import { CustomButton } from "../CustomColorButton";

const Header: React.VFC<{ isActivePage: string }> = ({ isActivePage }) => {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleToggleClick = () => {
    setIsMenuActive(!isMenuActive);
  }

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
          <ul className="md:flex hidden">
            <li>
              <Link href="/">
                <a
                  className={`py-3 px-4 mx-2 ${
                    isActivePage === "Home" ? "border-b-2 border-black " : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={`py-3 px-4 mx-2 ${
                    isActivePage === "About" ? "border-b-2 border-black " : ""
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a
                  className={`py-3 px-4 mx-2 ${
                    isActivePage === "Service" ? "border-b-2 border-black " : ""
                  }`}
                >
                  Service
                </a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a
                  className={`py-3 px-4 mx-2 ${
                    isActivePage === "Works" ? "border-b-2 border-black " : ""
                  }`}
                >
                  Works
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`py-3 px-4 mx-2 ${
                    isActivePage === "Contact" ? "border-b-2 border-black" : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* ↓ハンバーガーメニューのトリガー */}
        <button className="block md:hidden border border-red-600" onClick={handleToggleClick}>btn</button>
        <ul className={`${isMenuActive ? "block" : "hidden"} fixed top-5 left-0`}>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/service">
              <a>Service</a>
            </Link>
          </li>
        </ul>

        <ul className="md:flex hidden items-center">
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
