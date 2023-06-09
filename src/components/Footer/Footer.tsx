import React, { ReactElement } from 'react'
import Annotation from '../Annotation'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { cx } from '../../utils'

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="columns heading is-centered">
          <div
            className={`column is-one-third hide-for-mobile ${styles.headingColumn}`}
          >
            <div className={styles.line}></div>
          </div>
          <div className={`column is-one-third ${styles.headingColumn}`}>
            <h1 className="section-heading">Find Me Here</h1>
          </div>
          <div
            className={`column is-one-third hide-for-mobile ${styles.headingColumn}`}
          >
            <div className={styles.line}></div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className={`column is-one-third relative ${styles.navColumn}`}>
            <nav>
              <a
                href="mailto:tmunzar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ top: '3px' }}>
                  <Image
                    src="/images/envelope-doodle-01.png"
                    alt="email doodle"
                    width={40}
                    height={25}
                    className="dm-invert"
                  />
                </span>
                tmunzar@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/tmunzar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ top: '4px' }}>
                  <Image
                    src="/images/prof-doodle-01.png"
                    alt="linkedin doodle"
                    width={35}
                    height={34}
                    className="dm-invert"
                  />
                </span>
                linkedin
              </a>
              <a
                href="https://twitter.com/tmunzar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ top: '4px' }}>
                  <Image
                    src="/images/birdy-doodle-01.png"
                    alt="linkedin doodle"
                    width={35}
                    height={27}
                    className="dm-invert"
                  />
                </span>
                twitter
              </a>
              <Annotation
                text="best place to reach me if you want to collaborate"
                textRotate="-10deg"
                style={{
                  width: 260,
                  top: 10,
                  left: -190,
                }}
                arrowProps={{
                  rotate: '100deg',
                  translate: '-20px, 280px',
                  flip: true,
                }}
                animProps={{
                  onScroll: true,
                }}
              />

              <Annotation
                text="if you want to connect"
                textRotate="-10deg"
                style={{
                  width: 240,
                  top: 120,
                  right: -160,
                }}
                arrowProps={{
                  rotate: '130deg',
                  translate: '-10px, 80px',
                }}
                animProps={{
                  animDelay: 300,
                  onScroll: true,
                }}
              />

              <Annotation
                text="here i ramble"
                textRotate="-10deg"
                style={{
                  left: -40,
                }}
                arrowProps={{
                  rotate: '-80deg',
                  translate: '85px, 140px',
                }}
                animProps={{
                  animOffset: -100,
                  animDelay: 700,
                  onScroll: true,
                }}
              />
            </nav>
          </div>
        </div>

        <div className="columns is-centered">
          <div className={cx(styles.source, 'column')}>
            <p>
              This website was designed with pen, paper & figma, and engineered
              using{' '}
              <a href="https://nextjs.org/" className="no-highlight">
                nextjs
              </a>
              ,{' '}
              <a
                href="https://bulma.io/"
                target="blank"
                className="no-highlight"
              >
                bulma.io
              </a>{' '}
              &{' '}
              <a
                href="https://maxwellito.github.io/vivus/"
                target="_blank"
                className="no-highlight"
                rel="noreferrer"
              >
                vivus.js
              </a>
              .
            </p>
            <p>
              You can find the{' '}
              <a
                href="https://github.com/tmunzar/portfolio-nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code
              </a>
              <Image
                src="/images/octo-cat-01.png"
                style={{ paddingTop: 5 }}
                alt="A sketched doodle of the Github OctoCat icon"
                className="dm-invert"
                width={30}
                height={33}
              />
              here, or check out the{' '}
              <a href="/storybook" target="_blank">
                storybook
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
