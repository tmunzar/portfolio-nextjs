import Annotation from '../Annotation'
import WorkListing from '../WorkListing'
import ImageModal from '../ImageModal'
import ContentModal from '../ContentModal'
import Tag from '../Tag'

const AngryBallerinaListing = () => {
  return (
    <WorkListing
      img={{
        src: '/images/logos/angry-ballerina.svg',
        alt: 'Angry Ballerina Logo',
      }}
      imgHolderClassName="is-one-fifth-desktop is-two-fifths-tablet is-5-mobile"
      title="E-Commerce for a Boutique Clothing Brand"
      description={
        <>
          <p>
            A user-centered process was used to design a boutique user
            experience for the Angry Ballerina website. I helped craft an
            experience that suited both the user-base and the client
            requirements.
          </p>
          <p>
            <strong>Design Toolkit:</strong> Wireframing, Hi-Fi Prototypes
          </p>
          <p>
            <strong>Tech Stack:</strong> Sylius, Foundation 6
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
          text="This isn’t online anymore either, but only because they were acquired!"
          textRotate="-15deg"
          style={{
            width: 250,
            left: 0,
            top: -85,
          }}
          arrowProps={{
            translate: '-20px, 20px',
            rotate: '8deg',
          }}
          animProps={{
            onScroll: true,
          }}
        />
      }
    >
      <ContentModal buttonText="View More Info">
        <div className="columns">
          <div className="column is-one-fifth-desktop is-two-fifths-tablet image-holder">
            <img
              src="/images/logos/angry-ballerina.svg"
              alt="Angry Ballerina Logo"
            />
          </div>
          <div className="column is-three-fifths">
            <h2>E-Commerce for a Boutique Clothing Brand</h2>
            <p>
              <strong>Client:</strong> Angry Ballerina
            </p>
            <p>
              <strong>Duration:</strong> 3 Months
            </p>
            <p>
              <strong>Design Toolkit:</strong> Wireframing, Hi-Fi Prototypes
            </p>
            <p>
              <strong>Tech Stack:</strong> Sylius, Foundation 6
            </p>
            <div className="tags-list">
              <Tag text="Design" icon="design" />
              <Tag text="Prototype" icon="prototype" />
              <Tag text="Develop" icon="develop" />
            </div>
          </div>
        </div>
        <div className="columns margin-top-50-mid">
          <div className="column is-half">
            <h2>Wireframe</h2>
            <p>
              A user-centered process was used to design a boutique user
              experience for the Angry Ballerina website. I helped craft an
              experience that suited both the user-base and the client
              requirements.
            </p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/angry-ballerina/wireframe-01.jpg',
                alt: 'Angry Ballerina Website Wireframe',
              }}
            />
          </div>
        </div>
        <div className="columns margin-top-100-mid">
          <div className="column is-half">
            <h2>Final Design</h2>
            <p>
              After settling on a user experience that exhibited the boutique
              nature of the brand, we fleshed out the final design.
            </p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/angry-ballerina/screen-01.jpg',
                alt: 'Angry Ballerina Website Design',
              }}
            />
          </div>
        </div>
      </ContentModal>
    </WorkListing>
  )
}

export default AngryBallerinaListing
