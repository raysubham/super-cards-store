import { FunctionComponent } from 'react'
import Link from 'next/link'
import { Container } from '../Container'
import { FaShoppingBag } from 'react-icons/fa'

import styles from './Header.module.scss'
import { useSnipcart } from '../../hooks/use-snipcart'

export const Header: FunctionComponent = () => {
  const { cart = {} } = useSnipcart()
  const { subtotal = '0' } = cart

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <>
          <Link href='/' passHref={true}>
            <h2 className={styles.headerTitle}>WWE Super Cards</h2>
          </Link>
          <h3 className={styles.headerCart}>
            <button className='snipcart-checkout'>
              <FaShoppingBag /> <span>₹ {subtotal}</span>
            </button>
          </h3>
        </>
      </Container>
    </header>
  )
}
