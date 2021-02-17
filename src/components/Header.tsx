import Link from "next/link";

const Header: React.FC<{ title: string }> = ({ title }) => {
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
              {title}
            </li>
            <li>
              <Link href="/profile">
                <a className="py-3 px-4 mx-2">PROFILE</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a className="py-3 px-4 mx-2">SERVICE</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a className="py-3 px-4 mx-2">WORKS</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="py-3 px-4 mx-2">CONTACT</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
