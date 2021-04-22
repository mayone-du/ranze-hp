import Link from "next/link";
import { Home, ArrowForwardIos } from "@material-ui/icons";

const BreadCrumb: React.VFC<{
  currentPage: string;
  parentPage?: string;
  parentPath?: string;
}> = ({ currentPage, parentPage, parentPath }) => {
  return (
    <>
      <ol className="absolute md:top-72 text-custom-darkgray top-60 left-0 w-full flex items-center md:text-base text-xs">
        <li className="flex items-center">
          <Link href={"/"}>
            <a className="flex items-center text-blue-500 md:ml-12 ml-4 md:mr-4 mr-1">
              <Home />
              HOME
            </a>
          </Link>

          <ArrowForwardIos className="block" fontSize="small" />
        </li>

        {/* 親ページがある場合 */}
        {parentPage === undefined ? (
          ""
        ) : (
          <>
            <li className="flex items-center">
              <Link href={parentPath}>
                <a className="flex items-center text-blue-500 md:mx-4 mx-1">
                  {parentPage}
                </a>
              </Link>

              <ArrowForwardIos className="block" fontSize="small" />
            </li>
          </>
        )}

        <li className="flex font-bold items-center md:mx-4 mx-1">{currentPage}</li>
      </ol>
    </>
  );
};

export { BreadCrumb };
