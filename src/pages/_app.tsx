import Navigation from '@/Layout/Navigation'
import ScrollProvider from '@/context/ScrollContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ScrollProvider>
    <>
      {/* <Navigation /> */}
      <Component {...pageProps} />
    </>
    
  </ScrollProvider>
}
