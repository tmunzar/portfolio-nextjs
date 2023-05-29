import Annotation from '../Annotation'
import WorkListing from '../WorkListing'
import ImageModal from '../ImageModal'
import ContentModal from '../ContentModal'
import Tag from '../Tag'

const RmiListing = () => {
  return (
    <WorkListing
      img={{
        src: '/images/logos/rmi.svg',
        alt: 'RMI Logo',
        style: { marginTop: -30 },
      }}
      imgHolderClassName="is-offset-one-fifth-desktop is-one-fifth-desktop is-offset-0-tablet is-two-fifths-tablet is-5-mobile"
      title="A Maintainable Website for a Medical Institute"
      description={
        <>
          <p>
            Rehman Medical Institute is Peshawar’s leading medical college and
            institute. They wanted a fresh update to their website, and I was
            not only involved in redesigning the look and feel of it, but also
            developed an institution-wide maintainable content management
            system.
          </p>

          <p>
            <strong>Tech Stack:</strong> Laravel 5, Foundation 6, VueJS,
            ElasticSearch
          </p>
          <p>
            <strong>Design Toolkit:</strong> Stakeholder Interviews, Hand drawn
            Sketching, Hi-fi HTML Prototypes
          </p>
        </>
      }
      tags={[
        { text: 'Engineer', icon: 'develop' },
        { text: 'Design', icon: 'design' },
        { text: 'Prototype', icon: 'prototype' },
      ]}
    >
      <ContentModal buttonText="View More Info">
        <div className="columns">
          <div className="column is-one-fifth-desktop is-two-fifths-tablet is-5-mobile">
            <img src="/images/logos/rmi.svg" alt="RMI Logo" />
          </div>
          <div className="column is-three-fifths">
            <h2>A Maintainable Website for a Medical Institute</h2>
            <p>
              <strong>Client:</strong> Rehman Medical Institute
            </p>
            <p>
              <strong>Duration:</strong> 4 Months
            </p>
            <p>
              <strong>Design Toolkit:</strong> Stakeholder Interviews, Hand
              drawn Sketching, Hi-fi HTML Prototypes
            </p>
            <p>
              <strong>Tech Stack:</strong> Laravel 5, Foundation 6, VueJS,
              ElasticSearch
            </p>
            <div className="tags-list">
              <Tag text="Engineer" icon="develop" />
              <Tag text="Design" icon="design" />
              <Tag text="Prototype" icon="prototype" />
            </div>
          </div>
        </div>
        <div className="columns margin-top-100-mid">
          <div className="column is-half">
            <h2>Designs</h2>
            <p>
              I worked closely with a graphic designer to craft the look of the
              website. I also took the lead of the project as its manager. I led
              the frequent meetings with the client to negotiate requirements
              and pitch design decisions.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/rmi/screen-01.jpg',
                alt: 'RMI Website design',
              }}
            />
          </div>
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/rmi/screen-02.jpg',
                alt: 'RMI Website design',
              }}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/rmi/screen-03.jpg',
                alt: 'RMI Website design',
              }}
            />
          </div>
          <div className="column is-half">
            <ImageModal
              img={{
                src: '/images/j-work/rmi/screen-04.jpg',
                alt: 'RMI Website design',
              }}
            />
          </div>
        </div>
      </ContentModal>
    </WorkListing>
  )
}

export default RmiListing
