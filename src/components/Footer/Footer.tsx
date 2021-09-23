import { FunctionComponent } from 'react'
import styles from './Footer.module.scss'

export const Footer: FunctionComponent = ({ ...rest }) => {
  return (
    <footer className={styles.footer}>
      &copy; My Store, {new Date().getFullYear()}
    </footer>
  )
}
