import { FunctionComponent } from 'react'
import styles from './Button.module.scss'

interface props {
  children: string
  className?: string
  color?: string
  onClick?: () => void
}

export const Button: FunctionComponent<props> = ({
  children,
  className,
  color,
  ...rest
}) => {
  let buttonClassName = styles.button

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`
  }

  return (
    <button className={buttonClassName} data-color={color} {...rest}>
      {children}
    </button>
  )
}
