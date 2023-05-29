import Annotation from '../Annotation'
import WorkListing from '../WorkListing'
import ImageModal from '../ImageModal'
import ContentModal from '../ContentModal'
import Tag from '../Tag'
import Link from 'next/link'
import Button from '../Button'

const Kb2017Listing = () => {
  return (
    <WorkListing
      img={{ src: '/images/logos/kb17.png', alt: 'Karachi Bienalle 2017 logo' }}
      imgHolderClassName="is-one-fifth-desktop is-two-fifths-tablet is-5-mobile"
      title="A Website to Showcase an Art Collective"
      description={
        <>
          <p>
            {`This website was developed in close collaboration with
                      graphic designer `}
            <a
              href="https://www.samyaarif.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Samya Arif
            </a>
            {`. It's a website that showcases the artists, venues, and
                      projects of the 2017 Karachi Biennale Artist Festival.`}
          </p>
          <p>
            <strong>Tech Stack:</strong> CockpitCMS, Foundation 6
          </p>
        </>
      }
      tags={[
        { text: 'Engineer', icon: 'develop' },
        { text: 'Design', icon: 'design' },
        { text: 'Prototype', icon: 'prototype' },
      ]}
      annotation={
        <Annotation
          className="hide-for-tablet"
          text="One of the three collaborations I have done with Samya Arif. I highly recommend looking up her work!"
          textRotate="-15deg"
          style={{
            width: 310,
            right: -30,
            top: 110,
          }}
          arrowProps={{
            translate: '90px, 40px',
            rotate: '-65deg',
            flip: true,
          }}
          animProps={{
            onScroll: true,
          }}
        />
      }
    >
      <ContentModal buttonText="View More Info">
        <div className="columns">
          <div className="column is-one-fifth-desktop is-two-fifths-tablet is-5-mobile image-holder">
            <img
              src="/images/logos/kb17.png"
              alt="Karachi Biennale 2017 logo"
            />
          </div>
          <div className="column is-three-fifths">
            <h2>A Website to Showcase an Art Collective</h2>
            <p>
              <strong>Client:</strong> Karachi Biennale Trust
            </p>
            <p>
              <strong>Duration:</strong> 2 Months
            </p>
            <p>
              <strong>Tech Stack:</strong> CockpitCMS, Foundation 6
            </p>
            <div className="tags-list">
              <Tag text="Design" icon="design" />
              <Tag text="Prototype" icon="prototype" />
              <Tag text="Develop" icon="develop" />
            </div>
            <div className="column is-5">
              <Link
                href="http://www.kbcuratorial.com"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button>View Live Website</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="columns margin-top-100-mid">
          <div className="column is-half">
            <h2>Designs</h2>
            <p>
              The designs were made by{' '}
              <Link
                href="https://www.samyaarif.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Samya Arif
              </Link>{' '}
              to put an emphasis on the location and the artists participating
              in the event.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/kb17/screen-01.jpg',
                alt: 'Karachi Biennale Website design',
              }}
            />
          </div>
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/kb17/screen-02.jpg',
                alt: 'Karachi Biennale Website design',
              }}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/kb17/screen-03.jpg',
                alt: 'Karachi Biennale Website design',
              }}
            />
          </div>
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/kb17/screen-04.jpg',
                alt: 'Karachi Biennale Website design',
              }}
            />
          </div>
        </div>
        <div className="columns is-reverse is-gapless">
          <div className="column is-3">
            <Link
              href="http://www.kbcuratorial.com"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button>View Live Website</Button>
            </Link>
          </div>
        </div>
      </ContentModal>
    </WorkListing>
  )
}

export default Kb2017Listing
