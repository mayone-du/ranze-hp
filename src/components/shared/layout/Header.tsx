import Link from "next/link";
// import { useState } from "react";
// import { CustomButton } from "../CustomColorButton";
// import { Menu, Close } from "@material-ui/icons";
// import { Button } from "@material-ui/core";

const Header: React.VFC<{ isActivePage: string }> = ({ isActivePage }) => {
  // const [isMenuActive, setIsMenuActive] = useState(false);

  // const handleToggleClick = () => {
  //   setIsMenuActive(!isMenuActive);
  // };

  return (
    <>
      <h2 className="mt-8 mb-6">
        <img className="block mx-auto object-cover w-56" src="/images/logo.png" alt="" />
      </h2>
      <header className="mx-10 mb-8">
        <nav>
          <ul className="flex items-center justify-center">
            <li>
              <Link href="/">
                <a className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                  isActivePage === "Home" ? "border-b-2 border-black" : ""
                }`}>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                  isActivePage === "About" ? "border-b-2 border-black" : ""
                }`}>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                  isActivePage === "Service" ? "border-b-2 border-black" : ""
                }`}>SERVICE</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                  isActivePage === "Works" ? "border-b-2 border-black" : ""
                }`}>WORKS</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={`block hover:bg-gray-100 transform font-custom-fontFamily font-bold text-custom-darkgray transition border-custom-darkgray md:py-2 md:px-4 p-1 md:mx-4 my-2 mx-1 text-base md:text-xl ${
                  isActivePage === "Contact" ? "border-b-2 border-black" : ""
                }`}>CONTACT</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
