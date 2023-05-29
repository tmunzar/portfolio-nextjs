import React, { ReactElement } from 'react'
import { cx } from '../../utils'
import styles from './Button.module.scss'

type IButtonProps = {
  large?: boolean
} & React.ComponentPropsWithoutRef<'button'>

export const Button = (props: IButtonProps): ReactElement => {
  const { children, large, className, ...restProps } = props
  return (
    <button
      className={cx(styles.button, className, large && styles.isLarge)}
      {...restProps}
    >
      {children}
    </button>
  )
}
