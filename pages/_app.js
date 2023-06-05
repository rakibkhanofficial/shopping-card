import '../styles/globals.css'
import { RecoilRoot } from "recoil"
import { Toaster } from 'react-hot-toast'
import MessengerChat from '../components/MessengerChat';



function MyApp({ Component, pageProps }) {
  return <RecoilRoot>
    <Toaster position='bottom-center' />
    <Component {...pageProps} />
    <MessengerChat/>
  </RecoilRoot>
  

}

export default MyApp
