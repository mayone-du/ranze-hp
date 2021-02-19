import "../styles/globalResets.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App;