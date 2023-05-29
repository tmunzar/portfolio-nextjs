import React, { CSSProperties, ReactElement, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './ImageModal.module.scss'
import { cx } from '../../utils'

interface IImageModalProps {
  img: {
    src: string
    alt: string
    style?: CSSProperties
  }
  darkModeWhiteBg?: boolean
}

export const ImageModal = (props: IImageModalProps): ReactElement => {
  const { img, darkModeWhiteBg } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOnOpen = () => setIsOpen(true)
  const handleOnClose = () => setIsOpen(false)

  return (
    <>
      <img
        className={cx(styles.img, darkModeWhiteBg && styles.whiteBg)}
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
          <div className={`modal-content ${styles.content}`}>
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
