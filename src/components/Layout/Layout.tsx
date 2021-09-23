import { FunctionComponent, ReactElement } from 'react'
import Head from 'next/head'
import { Header } from '../Header'
import { Footer } from '../Footer'
import styles from './Layout.module.scss'

interface props {
  children: ReactElement
  className?: string
}

export const Layout: FunctionComponent<props> = ({
  children,
  className,
  ...rest
}) => {
  let layoutClassName = styles.layout

  if (className) {
    layoutClassName = `${layoutClassName} ${className}`
  }

  return (
    <div className={layoutClassName} {...rest}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  )
}
