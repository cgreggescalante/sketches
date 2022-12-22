import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/layout";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Sketches</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
