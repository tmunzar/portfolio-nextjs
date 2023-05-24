import React, { ReactElement } from 'react'
import { cx } from './utils'

type IButtonProps = {
  large?: boolean
} & React.ComponentPropsWithoutRef<'button'>

const Button = (props: IButtonProps): ReactElement => {
  const { children, large, className, ...restProps } = props
  return (
    <button
      className={cx('button', className, large && 'is-large')}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
