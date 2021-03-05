import Head from "next/head";
import { Wrapper } from "./Wrapper";
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
      <Wrapper>
        <Header isActivePage={isActivePage} />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export { Layout };
