import Annotation from '../Annotation'
import WorkListing from '../WorkListing'
import Link from 'next/link'
import Button from '../Button'

const JellyfishListing = () => {
  return (
    <WorkListing
      img={{
        src: '/images/logos/jellyfish.svg',
        style: { width: '100%' },
        alt: 'Jellyfish Logo',
      }}
      imgHolderClassName="is-offset-one-fifth-desktop is-one-fifth-desktop is-offset-0-tablet is-two-fifths-tablet is-5-mobile"
      title="A Social Network for Travelers"
      description={
        <>
          <p>
            Mustafa Hussain, my co-founder with Jellyfish and probably the best
            designer I have ever worked with, came up with this brilliant
            branding and web-design for our firm. I made sure to execute it as
            closely as Mustafa envisioned it.
          </p>
          <p>
            <strong>Design Toolkit:</strong> Wireframing, Hi-Fi Prototypes
          </p>
          <p>
            <strong>Tech Stack:</strong> SCSS, JQuery, Ruby (Middleman)
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
          text="this was my firm! We worked to bring design thinking into a space where it was seldom heard of!"
          textRotate="-15deg"
          style={{
            width: 310,
            left: 0,
            bottom: -140,
          }}
          arrowProps={{
            translate: '180px, 320px',
            rotate: '-95deg',
          }}
          animProps={{
            onScroll: true,
          }}
        />
      }
    >
      <Link
        href="http://jellyfish.com.pk"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <Button className="column is-4-desktop is-6-tablet">
          View Website
        </Button>
      </Link>
    </WorkListing>
  )
}

export default JellyfishListing
