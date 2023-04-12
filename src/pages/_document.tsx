import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://embed.tawk.to/6435bc244247f20fefeb1373/1gtoudsk0"
          onError={() => alert("error")}
          onReady={() => alert('loaded')}
          strategy='lazyOnload'
        />

      </body>
    </Html>
  )
}
