import { FunctionComponent } from 'react'
import { Container } from '../Container'
import { FaShoppingBag } from 'react-icons/fa'

import styles from './Header.module.scss'

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <>
          <p>Subham&#39;s Store</p>
          <p className={styles.headerCart}>
            <button className='snipcart-checkout'>
              <FaShoppingBag /> <span className='snipcart-total-price'>-</span>
            </button>
          </p>
        </>
      </Container>
    </header>
  )
}
