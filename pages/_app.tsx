import 'bootstrap/dist/css/bootstrap.css'

import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
    <>
      <Head>
        <title>Sketches</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
)

export default App