
import { AuthContextProvider } from '../stores/authContext'
import { Fragment } from 'react'
import '../styles/globals.css'
import Layout from '../components/layout/layout'
function MyApp({ Component, pageProps }) {
  
  return (
    <Fragment>
       
        <AuthContextProvider>
           <Layout>
          <Component {...pageProps} />
             </Layout>
        </AuthContextProvider>
     
    
    </Fragment>
  )
}

export default MyApp
