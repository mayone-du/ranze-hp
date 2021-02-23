import Link from "next/link";
import { Button } from "@material-ui/core";

// const Header: React.FC<{ title: string }> = ({ title }) => {
const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-between py-2 px-8 fixed w-full inset-x-0 z-50 bg-white">
        <nav className="flex items-center">
          <h1 className="text-xl text-center">
            <Link href="/">
              <a className="block">
                Ranze
                <br />
                Illustrator
              </a>
            </Link>
          </h1>
          <ul className="flex">
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
        <ul className="flex items-center">
          <li>
            <Link href="/service">
              <a className="mx-4">
                <Button variant="outlined">見積もり</Button>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="mx-4">
                <Button variant="outlined">お問い合わせ</Button>
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export { Header };
