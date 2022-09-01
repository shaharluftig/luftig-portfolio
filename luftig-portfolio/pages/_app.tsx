import type { AppProps } from 'next/app'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <title>Shahar Luftig</title>
    <Component {...pageProps} />'
  </>
}

export default MyApp
