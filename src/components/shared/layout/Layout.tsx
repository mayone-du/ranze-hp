import { Wrapper } from "./Wrapper";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
          {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export { Layout };