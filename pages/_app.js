import { AuthProvider } from '../firebase/auth';
import { Fragment } from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout/layout'
function MyApp({ Component, pageProps }) {
  
  return (
    <Fragment>
   
        <AuthProvider>
             <Layout>
          <Component {...pageProps} />
        </Layout>
        </AuthProvider>
            
    </Fragment>
  )
}

export default MyApp
