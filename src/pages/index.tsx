import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
                      <Button>Add to cart</Button>
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
    </>
  )
}

export default Home
