import "../styles/globalResets.css";
import "../styles/globals.css";

// TODO: NextSeoの設定
const App: React.FC<{ Component; pageProps }> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
