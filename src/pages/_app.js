import Layout from '@/Layouts/Layout1/Layout1'
// import '@/styles/globals.css'
import '../App.css';


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}