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
            <p style={{ cursor: 'pointer' }}>Subham&#39;s Store</p>
          </Link>
          <p className={styles.headerCart}>
            <button>
              <FaShoppingBag /> <span>Rs {subtotal}</span>
            </button>
          </p>
        </>
      </Container>
    </header>
  )
}
