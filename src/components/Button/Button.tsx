import { FunctionComponent } from 'react'
import styles from './Button.module.scss'

interface props {
  children: string
  className?: string
}

export const Button: FunctionComponent<props> = ({
  children,
  className,
  ...rest
}) => {
  let buttonClassName = styles.button

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`
  }

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  )
}
