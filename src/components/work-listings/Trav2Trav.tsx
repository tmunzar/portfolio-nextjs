import Annotation from '../Annotation'
import WorkListing from '../WorkListing'
import ImageModal from '../ImageModal'
import ContentModal from '../ContentModal'
import Tag from '../Tag'

const Trav2TravListing = () => {
  return (
    <WorkListing
      img={{ src: '/images/logos/trav2trav.png', alt: 'trav2trav logo' }}
      imgHolderClassName="is-one-fifth-desktop is-two-fifths-tablet is-4-mobile"
      title="A Social Network for Travelers"
      description={
        <>
          <p>
            My firm was tasked to build-up Trav2trav, a social network from the
            ground up, which included all the branding, UX/UI design, and
            implementation.
          </p>
          <p>
            <strong>Tech Stack:</strong> Laravel 4, Zurb Foundation, SCSS,
            jQuery, Elasticsearch
          </p>
          <p>
            <strong>Design Toolkit:</strong> Leanstack Canvas, Hand drawn
            Sketching, Photoshop Designs, InVision Prototypes, Hi-Fi HTML
            Prototypes
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
          className="offset-margin-top-neg-20-tablet"
          text="This one's not online anymore, but I can show you a demo if you reach out to me!"
          textRotate="-15deg"
          style={{
            width: 250,
            right: 0,
            top: -150,
          }}
          arrowProps={{
            translate: '-70px, 20px',
            rotate: '45deg',
          }}
          animProps={{
            onScroll: true,
          }}
        />
      }
    >
      <ContentModal buttonText="View More Info">
        <div className="columns">
          <div className="column is-one-fifth-desktop is-two-fifths-tablet is-5-mobile">
            <img src="/images/logos/trav2trav.png" alt="trav2trav logo" />
          </div>
          <div className="column">
            <h1>A Social Network for Travelers</h1>
            <p>
              <strong>Client:</strong> Trav2Trav LLC
            </p>
            <p>
              <strong>Duration:</strong> 6 Months
            </p>
            <p>
              <strong>Design Toolkit:</strong> Leanstack Canvas, Hand drawn
              Sketching, Photoshop Designs, InVision Prototypes, Hi-Fi HTML
              Prototypes
            </p>
            <p>
              <strong>Tech Stack:</strong> Laravel 4, SCSS, jQuery,
              Elasticsearch, Zurb Foundation
            </p>
            <div className="tags-list">
              <Tag text="Design" icon="design" />
              <Tag text="Prototype" icon="prototype" />
              <Tag text="Develop" icon="develop" />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <h2>Lo-Fi Prototype</h2>
            <p>
              After using the Leanstack Canvas to gather requirements and
              determine our end-users, we sketched out different design ideas
              and wireframes. After settling on an idea we presented a Lo-Fi
              Prototype using InVision to get client validation before moving
              into the visual design process.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/trav2trav/wireframe-01.png',
                alt: 'Trav2Trav Wireframe',
              }}
            />
          </div>
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/trav2trav/wireframe-02.png',
                alt: 'Trav2Trav Wireframe',
              }}
            />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/trav2trav/wireframe-03.png',
                alt: 'Trav2Trav Wireframe',
              }}
            />
          </div>
        </div>

        <div className="columns margin-top-100-mid">
          <div className="column is-half">
            <h2>Final Designs</h2>
            <p>
              The final design was brilliantly fleshed out by{' '}
              <a href="mail:mohammad.mustafa.hussain@gmail.com">
                Mustafa Hussain
              </a>
              .
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/trav2trav/screen-01.jpg',
                alt: 'Trav2Trav screen',
              }}
            />
          </div>
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/trav2trav/screen-02.jpg',
                alt: 'Trav2Trav screen',
              }}
            />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/trav2trav/screen-03.jpg',
                alt: 'Trav2Trav screen',
              }}
            />
          </div>
        </div>
      </ContentModal>
    </WorkListing>
  )
}

export default Trav2TravListing
