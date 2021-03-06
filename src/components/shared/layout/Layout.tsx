import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout: React.VFC<{
  children: any;
  metaTitle: string;
  metaDescription: string;
  isActivePage: string;
}> = ({ children, metaTitle, metaDescription, isActivePage }) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <main className="overflow-x-hidden">
        <Header isActivePage={isActivePage} />
        {children}
        <Footer />
      </main>
    </>
  );
};

export { Layout };
