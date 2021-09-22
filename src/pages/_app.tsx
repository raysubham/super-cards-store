import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SnipcartProvider } from '../hooks/use-snipcart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnipcartProvider>
      <Component {...pageProps} />
    </SnipcartProvider>
  )
}
export default MyApp
