import React, { ReactElement } from 'react'
import Annotation from './Annotation'

const Footer = (): ReactElement => {
  return (
    <div id="footer">
      <div className="container">
        <div className="columns heading is-centered">
          <div className="column is-one-third heading-column hide-for-mobile">
            <div className="line"></div>
          </div>
          <div className="column is-one-third heading-column">
            <h1 className="section-heading">Find Me Here</h1>
          </div>
          <div className="column is-one-third heading-column hide-for-mobile">
            <div className="line"></div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third footer-nav relative">
            <nav>
              <a
                href="mailto:tmunzar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    className="icon"
                    src="/images/envelope-doodle-01.png"
                    alt="email doodle"
                  />
                  tmunzar@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/tmunzar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    className="icon prof"
                    src="/images/prof-doodle-01.png"
                    alt="linkedin doodle"
                  />
                  linkedin
                </span>
              </a>
              <a
                href="https://twitter.com/tmunzar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    className="icon birdy"
                    src="/images/birdy-doodle-01.png"
                    alt="linkedin doodle"
                  />
                  twitter
                </span>
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
                animDelay={300}
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
                animDelay={600}
              />
            </nav>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column source">
            <p>
              This website is carefully crafted using pen & paper, figma, react,
              nextjs, vivus.js, among other things.
            </p>
            <p>
              Find the source code{' '}
              <a
                href="https://github.com/tmunzar/portfolio-nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
              <img
                src="/images/octo-cat-01.png"
                style={{ width: 30, paddingTop: 5 }}
                alt="A sketched doodle of the Github OctoCat icon"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
