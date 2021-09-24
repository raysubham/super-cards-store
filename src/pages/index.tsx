import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'

import { Container } from '../components/Container'
import products from '../data/products.json'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Head>
          <title>Collectibles Store</title>
          <meta name='description' content='Find limited edition cards here.' />
        </Head>

        <Container>
          <>
            <h1 className='sr-only'>Collectibles Store</h1>
            <h2 className='sr-only'>All Available Cards</h2>
            <ul className={styles.products}>
              {products.map((product) => {
                return (
                  <li key={product.id}>
                    <Link href={`/products/${product.id}`}>
                      <a>
                        <div className={styles.productImage}>
                          <Image
                            width={864}
                            height={1200}
                            src={product.image}
                            alt={`Card of ${product.title}`}
                          />
                        </div>
                        <h3 className={styles.productTitle}>{product.title}</h3>
                        <p className={styles.productPrice}>
                          Rs {product.price}
                        </p>
                      </a>
                    </Link>
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
      </>
    </Layout>
  )
}

export default Home
