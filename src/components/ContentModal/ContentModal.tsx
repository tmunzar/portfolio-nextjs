import React, { ReactElement, useState } from 'react'
import Button from '../Button'
import { CSSTransition } from 'react-transition-group'

import styles from './ContentModal.module.scss'

interface IContentModalProps {
  buttonText: string
  children: React.ReactNode
}

export const ContentModal = (props: IContentModalProps): ReactElement => {
  const { children, buttonText } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOnOpen = () => setIsOpen(true)
  const handleOnClose = () => setIsOpen(false)

  return (
    <>
      <Button onClick={handleOnOpen}>{buttonText}</Button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        classNames="zoomInUp"
      >
        <div className="modal is-active content-modal">
          <div className="modal-background" onClick={handleOnClose}></div>
          <div className={`modal-content ${styles.content}`}>{children}</div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={handleOnClose}
          ></button>
        </div>
      </CSSTransition>
    </>
  )
}
