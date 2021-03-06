import Link from "next/link";
import { Home } from "@material-ui/icons";

const BreadCrumb: React.VFC<{ currentPage: string }> = ({ currentPage }) => {
  return (
    <>
      <ol className="absolute top-24 left-0 w-screen flex items-center">
        <li className="ml-12 mr-4 ">
          <Link href={"/"}>
            <a className="flex items-center text-blue-500">
              <Home />
              HOME
            </a>
          </Link>
        </li>
        <li>＞</li>
        <li className="mx-4">{currentPage}</li>
      </ol>
    </>
  );
};

export { BreadCrumb };
