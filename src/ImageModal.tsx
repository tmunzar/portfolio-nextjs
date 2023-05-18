import React, { CSSProperties, ReactElement, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

interface IImageModalProps {
  img: {
    src: string
    alt: string
    style?: CSSProperties
  }
}

const ImageModal = (props: IImageModalProps): ReactElement => {
  const { img } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOnOpen = () => setIsOpen(true)
  const handleOnClose = () => setIsOpen(false)

  return (
    <>
      <img
        className="has-modal"
        src={img.src}
        alt={img.alt}
        onClick={handleOnOpen}
        style={img.style}
      />
      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        classNames="zoomInUp"
      >
        <div className="modal image-modal is-active">
          <div className="modal-background" onClick={handleOnClose}></div>
          <div className="modal-content">
            <img src={img.src} alt={img.alt} />
          </div>
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

export default ImageModal
