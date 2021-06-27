import Head from 'next/head'

import { Fragment } from 'react'
import '../styles/globals.css'
import Layout from '../components/layout/layout'
function MyApp({ Component, pageProps }) {
  
  return(
    <Fragment>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
