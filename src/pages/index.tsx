import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header'
import { Container } from '../components/Container'
import products from '../data/products.json'
import { Button } from '../components/Button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Collectibles Store</title>
        <meta name='description' content='Find limited edition cards here.' />
        <link rel='preconnect' href='https://app.snipcart.com' />
        <link rel='preconnect' href='https://cdn.snipcart.com' />
        <link
          rel='stylesheet'
          href='https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css'
        />
      </Head>
      <Header />

      <main>
        <Container>
          <>
            <h1>Collectibles Store</h1>
            <h2>All Available Cards</h2>
            <ul className={styles.products}>
              {products.map((product) => {
                return (
                  <li key={product.id}>
                    <Image
                      width={864}
                      height={1200}
                      src={product.image}
                      alt={`Card of ${product.title}`}
                    />
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productPrice}>Rs {product.price}</p>
                    <p>
                      <Button
                        className='snipcart-add-item'
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-url='/'
                        data-item-description=''
                        data-item-image={product.image}
                        data-item-name={product.title}>
                        Add to cart
                      </Button>
                    </p>
                  </li>
                )
              })}
            </ul>
          </>
        </Container>
      </main>

      <footer className={styles.footer}>
        &copy; My Store, {new Date().getFullYear()}
      </footer>

      <Script
        async
        src='https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js'
      />
      <div
        hidden
        id='snipcart'
        data-api-key={`${process.env.NEXT_PUBLIC_SNIPCART_API_KEY}`}
        data-currency='inr'
      />
    </>
  )
}

export default Home
