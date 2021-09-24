import { FunctionComponent } from 'react'
import styles from './Footer.module.scss'

export const Footer: FunctionComponent = ({ ...rest }) => {
  return (
    <footer className={styles.footer}>
      <p style={{ marginRight: '15px' }}>
        &copy; WWE Super Cards, {new Date().getFullYear()}
      </p>
      <p>
        Created by{' '}
        <a
          href='https://www.subhamray.com'
          target='_blank'
          rel='noopener noreferrer'>
          Subham Ray
        </a>
      </p>
    </footer>
  )
}
