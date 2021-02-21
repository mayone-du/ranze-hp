import Link from "next/link";

// const Header: React.FC<{ title: string }> = ({ title }) => {
const Header: React.FC = () => {
  return (
    <>
      <header className="container px-24 flex justify-between py-6 fixed w-full mx-auto inset-x-0 z-50">
        <h1 className="text-xl text-center">
          <Link href="/">
            <a className="block">Ranze<br />Illustrator</a>
          </Link>
        </h1>
        <nav>
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
      </header>
    </>
  );
};

export { Header };