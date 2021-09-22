import { FunctionComponent, ReactElement } from 'react'
import styles from './Container.module.scss'

interface props {
  children: ReactElement
  className?: string
}

export const Container: FunctionComponent<props> = ({
  children,
  className,
  ...rest
}) => {
  let containerClassName = styles.container

  if (className) {
    containerClassName = `${containerClassName} ${className}`
  }

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  )
}
