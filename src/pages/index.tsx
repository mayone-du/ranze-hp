import Head from "next/head";
import classes from "../styles/Home.module.css";
import { Header } from "../components/header/Header";

const Home: React.FC = () => {
  const siteTitle = "Ranze";
  const metaDescription = "meta description";

  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <title>{siteTitle}</title>
      </Head>
      <Header title="home" />
      <main className={classes.main}>
        <section>
        </section>
      </main>
    </>
  );
};

export default Home;
