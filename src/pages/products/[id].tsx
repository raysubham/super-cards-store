import products from '../../data/products.json'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { Container } from '../../components/Container'
import { Button } from '../../components/Button'
import styles from './Product.module.scss'

interface productType {
  id: string
  title: string
  price: number
  image: string
}

const Product = () => {
  const { query } = useRouter()
  const id = query.id

  const product = products.find((product) => product.id === id)

  const title = product?.title
  const price = product?.price
  const image = product?.image

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Original Cards' />
      </Head>
      <Header />

      <Container>
        <div className={styles.productWrapper}>
          <div className={styles.productImage}>
            {image && (
              <Image
                width={864}
                height={1200}
                src={image}
                alt={`Card of ${title}`}
              />
            )}
          </div>
          <div className={styles.productContent}>
            <h1>{title}</h1>
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productPrice}>Rs {price}</p>
            <p>
              <Button
                className='snipcart-add-item'
                data-item-id={id}
                data-item-price={price}
                data-item-url='/'
                data-item-description=''
                data-item-image={image}
                data-item-name={title}>
                Add to cart
              </Button>
            </p>
          </div>
        </div>
      </Container>

      <footer className={styles.footer}>
        &copy; My Store, {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Product
