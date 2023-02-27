import Layout from '@/Layouts/Layout1/Layout1'
// import '@/styles/globals.css'
import '../App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FloatingButton from '@/Components/FloatingButton/FloatingButton';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { PHONE } from '@/constants';


const img = '/images/shortLogo.jpg';


export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <FloatingButton />
      <FloatingWhatsApp phoneNumber={PHONE.P1_FOR_LINK} accountName="Biofics" avatar={img} />

    </Layout>
  )
}