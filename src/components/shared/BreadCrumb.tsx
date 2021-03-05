import Link from "next/link";

const BreadCrumb: React.VFC<{ currentPage: string }> = ({ currentPage }) => {
  return (
    <>
      <ol className="absolute top-24 left-0 w-screen flex items-center">
        <li className="ml-12 mr-4">
          <Link href={"/"}>
            <a>HOME</a>
          </Link>
        </li>
        <li>＞</li>
        <li className="mx-4">
          <Link href={"/"}>
            <a>
              {currentPage}
            </a>
          </Link>
        </li>
      </ol>
    </>
  );
};

export { BreadCrumb };
