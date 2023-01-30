import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/component/Header'

export default function App({ Component, pageProps }: AppProps) {
  return <>
          <Header key={"header"}/>
          <Component {...pageProps} />
         </>
}
