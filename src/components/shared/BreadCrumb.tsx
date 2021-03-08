import Link from "next/link";
import { Home, ArrowForwardIos } from "@material-ui/icons";

const BreadCrumb: React.VFC<{ currentPage: string; parentPage?: string, parentPath?: string }> = ({
  currentPage,
  parentPage,
  parentPath
}) => {
  return (
    <>
      <ol className="absolute top-24 left-0 w-screen flex items-center">
        <li className="ml-12 mr-4">
          <Link href={"/"}>
            <a className="flex items-center text-blue-500">
              <Home />
              HOME
            </a>
          </Link>
        </li>

        <li className="flex items-center">
          <ArrowForwardIos fontSize="small" />
        </li>

        {parentPage === undefined ? (
          ""
        ) : (
          <>
            <li className="mx-4">
              <Link href={parentPath}>
                <a className="flex items-center text-blue-500">{parentPage}</a>
              </Link>
            </li>
            <li className="flex items-center">
              <ArrowForwardIos fontSize="small" />
            </li>
          </>
        )}

        <li className="flex items-center mx-4">{currentPage}</li>
      </ol>
    </>
  );
};

export { BreadCrumb };
