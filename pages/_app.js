import "../styles/globals.css";
import Layout from "../components/layout";
import BgProvider from "../store/BgProvider";

function MyApp({ Component, pageProps }) {
  return (
    <BgProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BgProvider>
  );
}

export default MyApp;
