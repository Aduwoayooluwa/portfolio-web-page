import Navigation from '@/Layout/Navigation'
import ScrollProvider from '@/context/ScrollContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const [pageShown, setPageShown] = useState<string | null>('')

  useEffect(() => {
    setPageShown(sessionStorage.getItem('showPage'))
  }, [])
  return <ScrollProvider>
    <>
      <Navigation />

      <Component {...pageProps} />
      <ToastContainer />
    </>
    
  </ScrollProvider>
}
