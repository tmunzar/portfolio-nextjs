import React, { ReactElement, useState } from 'react'
import Button from './Button'
import { CSSTransition } from 'react-transition-group'

interface IContentModalProps {
  buttonText: string
  children: React.ReactNode
}

const ContentModal = (props: IContentModalProps): ReactElement => {
  const { children, buttonText } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOnOpen = () => setIsOpen(true)
  const handleOnClose = () => setIsOpen(false)

  return (
    <>
      <Button
        className="column is-4-desktop is-6-tablet is-12-mobile"
        onClick={handleOnOpen}
      >
        {buttonText}
      </Button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        classNames="zoomInUp"
      >
        <div className="modal content-modal is-active">
          <div className="modal-background" onClick={handleOnClose}></div>
          <div className="modal-content">{children}</div>
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

export default ContentModal
