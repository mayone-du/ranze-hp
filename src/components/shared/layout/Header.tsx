import Link from "next/link";
import { useState } from "react";
import { CustomButton } from "../CustomColorButton";
import { Menu, Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Header: React.VFC<{ isActivePage: string }> = ({ isActivePage }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleToggleClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <header className="flex items-center justify-between lg:py-3 py-1 md:px-12 px-4 fixed w-full inset-x-0 z-50 bg-white shadow-md">
        <nav className="flex items-center">
          <h2 className="my_logo lg:text-xl text-lg text-center mr-4">
            <Link href="/">
              <a className="block">
                Ranze
                <br />
                Illustrator
              </a>
            </Link>
          </h2>
          <ul className="lg:flex hidden font-custom-fontFamily font-bold text-xl">
            <li>
              <Link href="/">
                <a
                  className={`py-1 px-3 mx-2 text-custom-darkgray hover:bg-gray-100 transition ${
                    isActivePage === "Home" ? "border-b-2 border-custom-darkgray text-custom-darkgray" : ""
                  }`}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={`py-1 px-3 mx-2 text-custom-darkgray hover:bg-gray-100 transition ${
                    isActivePage === "About" ? "border-b-2 border-custom-darkgray text-custom-darkgray" : ""
                  }`}
                >
                  ABOUT
                </a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a
                  className={`py-1 px-3 mx-2 text-custom-darkgray hover:bg-gray-100 transition ${
                    isActivePage === "Service" ? "border-b-2 border-custom-darkgray text-custom-darkgray" : ""
                  }`}
                >
                  SERVICE
                </a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a
                  className={`py-1 px-3 mx-2 text-custom-darkgray hover:bg-gray-100 transition ${
                    isActivePage === "Works" ? "border-b-2 border-custom-darkgray text-custom-darkgray" : ""
                  }`}
                >
                  WORKS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`py-1 px-3 mx-2 text-custom-darkgray hover:bg-gray-100 transition ${
                    isActivePage === "Contact" ? "border-b-2 border-custom-darkgray text-custom-darkgray" : ""
                  }`}
                >
                  CONTACT
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="block lg:hidden">
          <Button onClick={handleToggleClick} variant="outlined" size="medium">
            {isMenuActive ? (
              <Close color="action" fontSize="large" />
            ) : (
              <Menu color="action" fontSize="large" />
            )}
          </Button>
        </div>

        <ul
          className={`${
            isMenuActive
              ? "visible opacity-100 transform translate-x-0"
              : "invisible opacity-0 transform translate-x-10"
          } fixed top-16 p-4 left-0 bg-gray-50 lg:hidden w-full transition-all shadow-md font-custom-fontFamily font-bold text-xl`}
        >
          <li>
            <Link href="/">
              <a className="block p-2 my-2 border-b border-custom-gray text-yello">HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="block p-2 my-2 border-b border-custom-gray text-yello">About</a>
            </Link>
          </li>
          <li>
            <Link href="/service">
              <a className="block p-2 my-2 border-b border-custom-gray text-yello">Service</a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a className="block p-2 my-2 border-b border-custom-gray text-yello">Works</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="block p-2 my-2 border-b border-custom-gray text-yello">Contact</a>
            </Link>
          </li>
        </ul>

        <ul className="lg:flex hidden items-center">
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
