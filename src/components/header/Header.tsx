import Link from "next/link";
import classes from "./Header.module.css";

const Header: React.FC<{ title: string}> = ({title}) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.h1}>
          <Link href="/">
            <a>Ranze HP {title}</a>
          </Link>
        </h1>
        <nav>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a>WORKS</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
