import { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { UserContext } from '../lib/context';


function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: 'jhay' }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp
