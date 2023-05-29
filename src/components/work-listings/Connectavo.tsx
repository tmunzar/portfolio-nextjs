import WorkListing from '../WorkListing'
import Link from 'next/link'
import Button from '../Button'

const ConnectavoListing = () => {
  return (
    <WorkListing
      imgHolderClassName=""
      title=""
      description={
        <>
          <img
            src="/images/logos/connectavo.svg"
            style={{
              width: 300,
              marginBottom: 10,
            }}
            className="dm-invert"
            alt="Connectavo logo"
          />
          <h2 style={{ marginTop: 0, marginBottom: 4 }}>
            UI Design System & Style Guide for a Dashboard
          </h2>
          <p>
            I worked closely with a graphic designer to prototype and implement
            reusable UI patterns for the management interface, along with
            establishing a style guide.
          </p>
          <p>
            <strong>Design Toolkit:</strong> Style Guide, Design System
          </p>
          <p>
            <strong>Tech Stack:</strong> Bootstrap, SASS
          </p>
        </>
      }
      tags={[
        { text: 'Engineer', icon: 'develop' },
        { text: 'Design', icon: 'design' },
        { text: 'Prototype', icon: 'prototype' },
      ]}
    >
      <Link
        href="/demo/connectavo"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <Button className="is-4-desktop is-6-tablet">View Prototype</Button>
      </Link>
    </WorkListing>
  )
}

export default ConnectavoListing
