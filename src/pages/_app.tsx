import "../styles/globalResets.css";
import "../styles/globals.css";

const App: React.FC<{Component, pageProps}> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App;