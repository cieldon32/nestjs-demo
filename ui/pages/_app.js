import React from 'react';
import Head from 'next/head'
import Layout from '../components/layout';
import '../styles/common.scss';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* <script>
          CSS.paintWorklet.addModule('cssPaint/index.js')
        </script> */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}