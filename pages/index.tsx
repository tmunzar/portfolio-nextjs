import type { NextPage } from 'next'
import Loader from '../src/Loader'
import Annotation from '../src/Annotation'
import Link from 'next/link'
import Tag from '../src/Tag'
import ImageModal from '../src/ImageModal'
import ContentModal from '../src/ContentModal'

const Home: NextPage = () => {
  return (
    <>
      <div id="home-page">
        <Loader />
        <section id="intro" className="relative">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-two-thirds">
                <img
                  src="/images/about/me-in-a-circle-02.png"
                  alt="Talal Munzar's face surrouned by sketch doodles relevant to the UI/UX field."
                  style={{
                    width: 200,
                    display: 'block',
                    margin: '0 auto 50px',
                  }}
                  className="show-only-for-mobile"
                />
                <h1>{`Hi, I'm Talal and I like to`}</h1>
                <h1 className="primary">Engineer, Design & Develop</h1>
                <h1>human-centered & joyful digital experiences.</h1>

                <div className="relative is-inline-block hide-for-mobile">
                  <Link href="/about">
                    <img
                      src="/images/home-doodle-01.png"
                      alt="A sketched doodle representation of my research, design and development skills. It contains icons representing those skills."
                      style={{ width: 300, marginTop: 15 }}
                    />
                  </Link>
                  <Annotation
                    style={{
                      top: 20,
                      right: -210,
                      width: 170,
                    }}
                    text="some of the things i can do!"
                    textRotate="-12deg"
                    arrowProps={{
                      flip: true,
                      translate: '25px, 20px',
                    }}
                    animOffset={-100}
                    animDelay={100}
                  />
                </div>
              </div>
              <div
                className="column is-half is-paddingless hide-for-mobile"
                style={{ marginTop: 'auto' }}
              >
                <Annotation
                  style={{
                    top: -10,
                    right: 230,
                  }}
                  text="this is me"
                  textRotate="-20deg"
                  arrowProps={{
                    translate: '7px, 12px',
                  }}
                  animOffset={-300}
                  animDelay={400}
                />
              </div>
            </div>
          </div>
          <img
            src="/images/me-02.png"
            alt="It's a me! Talal Munzar!"
            style={{
              width: 340,
              position: 'absolute',
              right: 0,
              top: 20,
            }}
            className="hide-for-mobile"
          />
        </section>

        <section id="case-studies" className="is-light-grey">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="section-heading">Case Studies</h1>
              </div>
            </div>

            <div className="case-study-list">
              <div className="case-study-listing">
                <div className="columns">
                  <div className="column is-two-fifths">
                    <img
                      src="/images/stardog-studio/screen-01.jpg"
                      alt="Screen of the workspace section of Stardog Studio, a Graph Database querying application."
                    />
                  </div>
                  <div className="column">
                    <h2>
                      <Link href="/designing-ux-in-a-b2b-environment-for-a-technical-audience-stardog-studio">
                        Doing UX in a B2B environment for a technical audience
                      </Link>
                    </h2>
                    <p>
                      As a UX Intern at Stardog, I was tasked to design the
                      second iteration of Stardog Studio after its first release
                      failed.
                    </p>
                    <div className="tags-list">
                      <Tag text="Research" icon="research" />
                      <Tag text="Design" icon="design" />
                      <Tag text="Prototype" icon="prototype" />
                      <Tag text="Develop" icon="develop" />
                    </div>
                    <Link
                      passHref
                      href="/designing-ux-in-a-b2b-environment-for-a-technical-audience-stardog-studio"
                    >
                      <button className="button column is-4-desktop is-6-tablet">
                        View Case Study
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="case-study-listing">
                <div className="columns">
                  <div className="column is-two-fifths">
                    <img
                      src="/images/studao/main-01.png"
                      alt="Mobile Screens for StuDAO, an online learning platform for Independent Filmmakers"
                    />
                  </div>
                  <div className="column">
                    <h2>
                      <Link href="/designing-an-online-learning-platform-for-independent-filmmakers">
                        Designing an online learning platform for Independent
                        Filmmakers
                      </Link>
                    </h2>
                    <p>
                      For my Masters Human-Computer Interaction Capstone
                      Project, I designed an online learning platform for an
                      industry client that sought to introduce the concept of
                      certification to the independent film industry.
                    </p>
                    <div className="tags-list">
                      <Tag text="Research" icon="research" />
                      <Tag text="Design" icon="design" />
                      <Tag text="Prototype" icon="prototype" />
                    </div>
                    <Link
                      passHref
                      href="/designing-an-online-learning-platform-for-independent-filmmakers"
                    >
                      <button className="button column is-4-desktop is-6-tablet">
                        View Case Study
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="prev-work">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="section-heading">Selected Pre-UX Work</h1>
                <p>
                  Before I set upon a dedicated UX career path, I co-ran a web
                  design agency called{' '}
                  <a
                    href="http://jellyfish.com.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jellyfish
                  </a>
                  . In addition to dealing directly with clients, collaborating
                  with graphic designers, and pitching concepts on 30+ projects,
                  I also fully stack developed them. Here are some examples:
                </p>
              </div>
            </div>

            <div className="prev-work-list">
              <div className="prev-work-listing">
                <div className="columns">
                  <div className="column is-one-fifth-desktop is-two-fifths-tablet is-4-mobile image-holder">
                    <img
                      src="/images/logos/trav2trav.png"
                      alt="trav2trav logo"
                    />
                  </div>
                  <div className="column is-three-fifths">
                    <h2>A Social Network for Travelers</h2>
                    <p>
                      My firm was tasked to build-up Trav2trav, a social network
                      from the ground up, which included all the branding, UX/UI
                      design, and implementation.
                    </p>
                    <p>
                      <strong>Design Toolkit:</strong> Leanstack Canvas, Hand
                      drawn Sketching, Photoshop Designs, InVision Prototypes,
                      Hi-Fi HTML Prototypes
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
                    <ContentModal buttonText="View More Info">
                      <div className="columns">
                        <div className="column is-one-fifth-desktop is-two-fifths-tablet is-5-mobile">
                          <img
                            src="/images/logos/trav2trav.png"
                            alt="trav2trav logo"
                          />
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
                            <strong>Design Toolkit:</strong> Leanstack Canvas,
                            Hand drawn Sketching, Photoshop Designs, InVision
                            Prototypes, Hi-Fi HTML Prototypes
                          </p>
                          <p>
                            <strong>Tech Stack:</strong> Laravel 4, SCSS,
                            jQuery, Elasticsearch, Zurb Foundation
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
                            After using the Leanstack Canvas to gather
                            requirements and determine our end-users, we
                            sketched out different design ideas and wireframes.
                            After settling on an idea we presented a Lo-Fi
                            Prototype using InVision to get client validation
                            before moving into the visual design process.
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
                  </div>
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
                  />
                </div>
              </div>

              <div className="prev-work-listing">
                <div className="columns">
                  <div className="column is-offset-one-fifth-desktop is-one-fifth-desktop is-offset-0-tablet is-two-fifths-tablet is-5-mobile image-holder">
                    <img
                      src="/images/logos/rmi.svg"
                      alt="RMI Logo"
                      style={{ marginTop: -30 }}
                    />
                  </div>
                  <div className="column is-three-fifths">
                    <h2>A Maintainable Website for a Medical Institute</h2>
                    <p>
                      Rehman Medical Institute is Peshawar’s leading medical
                      college and institute. They wanted a fresh update to their
                      website, and I was not only involved in redesigning the
                      look and feel of it, but also developed an
                      institution-wide maintainable content management system.
                    </p>
                    <p>
                      <strong>Design Toolkit:</strong> Stakeholder Interviews,
                      Hand drawn Sketching, Hi-fi HTML Prototypes
                    </p>
                    <p>
                      <strong>Tech Stack:</strong> Laravel 5, Foundation 6,
                      VueJS, ElasticSearch
                    </p>
                    <div className="tags-list">
                      <Tag text="Design" icon="design" />
                      <Tag text="Prototype" icon="prototype" />
                      <Tag text="Develop" icon="develop" />
                    </div>
                    <ContentModal buttonText="View More Info">
                      <div className="columns">
                        <div className="column is-one-fifth-desktop is-two-fifths-tablet is-5-mobile">
                          <img src="/images/logos/rmi.svg" alt="RMI Logo" />
                        </div>
                        <div className="column is-three-fifths">
                          <h2>
                            A Maintainable Website for a Medical Institute
                          </h2>
                          <p>
                            <strong>Client:</strong> Rehman Medical Institute
                          </p>
                          <p>
                            <strong>Duration:</strong> 4 Months
                          </p>
                          <p>
                            <strong>Design Toolkit:</strong> Stakeholder
                            Interviews, Hand drawn Sketching, Hi-fi HTML
                            Prototypes
                          </p>
                          <p>
                            <strong>Tech Stack:</strong> Laravel 5, Foundation
                            6, VueJS, ElasticSearch
                          </p>
                          <div className="tags-list">
                            <Tag text="Design" icon="design" />
                            <Tag text="Prototype" icon="prototype" />
                            <Tag text="Develop" icon="develop" />
                          </div>
                          <div className="column is-5">
                            <a
                              className="button"
                              href="http://rmi.edu.pk"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Live Website
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="columns margin-top-100-mid">
                        <div className="column is-half">
                          <h2>Designs</h2>
                          <p>
                            I worked closely with a graphic designer to craft
                            the look of the website. I also took the lead of the
                            project as its manager. I led the frequent meetings
                            with the client to negotiate requirements and pitch
                            design decisions.
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
                      <div className="columns is-reverse is-gapless">
                        <div className="column is-3">
                          <a
                            className="button"
                            href="http://rmi.edu.pk"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Live Website
                          </a>
                        </div>
                      </div>
                    </ContentModal>
                  </div>
                </div>
              </div>

              <div className="prev-work-listing">
                <div className="columns">
                  <div className="column is-one-fifth-desktop is-two-fifths-tablet is-5-mobile image-holder">
                    <img
                      src="/images/logos/kb17.png"
                      alt="Karachi Bienalle 2017 logo"
                    />
                  </div>
                  <div className="column is-three-fifths">
                    <h2>A Website to Showcase an Art Collective</h2>
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
                    <div className="tags-list">
                      <Tag text="Design" icon="design" />
                      <Tag text="Prototype" icon="prototype" />
                      <Tag text="Develop" icon="develop" />
                    </div>
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
                            <strong>Tech Stack:</strong> CockpitCMS, Foundation
                            6
                          </p>
                          <div className="tags-list">
                            <Tag text="Design" icon="design" />
                            <Tag text="Prototype" icon="prototype" />
                            <Tag text="Develop" icon="develop" />
                          </div>
                          <div className="column is-5">
                            <a
                              className="button"
                              href="http://www.kbcuratorial.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Live Website
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="columns margin-top-100-mid">
                        <div className="column is-half">
                          <h2>Designs</h2>
                          <p>
                            The designs were made by{' '}
                            <a
                              href="https://www.samyaarif.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Samya Arif
                            </a>{' '}
                            to put an emphasis on the location and the artists
                            participating in the event.
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
                          <a
                            className="button"
                            href="http://www.kbcuratorial.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Live Website
                          </a>
                        </div>
                      </div>
                    </ContentModal>
                  </div>
                  <Annotation
                    className="hide-for-tablet"
                    text="One of the three collaborations I have done with Samya Arif. I highly recommend looking up her work!"
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
                    textRotate="-15deg"
                  />
                </div>
              </div>

              <div className="prev-work-listing">
                <div className="columns">
                  <div className="column is-offset-two-fifths-desktop is-three-fifths-desktop is-offset-0-tablet is-full-tablet">
                    <img
                      className="is-hidden-tablet"
                      src="/images/logos/connectavo.svg"
                      style={{
                        width: 300,
                        marginBottom: 10,
                      }}
                      alt="Connectavo logo"
                    />
                    <h2>UI Design System & Style Guide for a Dashboard</h2>
                    <p>
                      I worked closely with a graphic designer to prototype and
                      implement reusable UI patterns for the management
                      interface, along with establishing a style guide.
                    </p>
                    <p>
                      <strong>Design Toolkit:</strong> Style Guide, Design
                      System
                    </p>
                    <p>
                      <strong>Tech Stack:</strong> Bootstrap, SASS
                    </p>
                    <div className="tags-list">
                      <Tag text="Design" icon="design" />
                      <Tag text="Prototype" icon="prototype" />
                      <Tag text="Develop" icon="develop" />
                    </div>
                    <a
                      href="/demo/connectavo"
                      className="button column is-4-desktop is-6-tablet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Prototype
                    </a>
                  </div>
                </div>
              </div>

              <div className="prev-work-listing margin-top-50-mobile">
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
                      A user-centered process was used to design a boutique user
                      experience for the Angry Ballerina website. I helped craft
                      an experience that suited both the user-base and the
                      client requirements.
                    </p>
                    <p>
                      <strong>Design Toolkit:</strong> Wireframing, Hi-Fi
                      Prototypes
                    </p>
                    <p>
                      <strong>Tech Stack:</strong> Sylius, Foundation 6
                    </p>
                    <div className="tags-list">
                      <Tag text="Design" icon="design" />
                      <Tag text="Prototype" icon="prototype" />
                      <Tag text="Develop" icon="develop" />
                    </div>
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
                            <strong>Design Toolkit:</strong> Wireframing, Hi-Fi
                            Prototypes
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
                            A user-centered process was used to design a
                            boutique user experience for the Angry Ballerina
                            website. I helped craft an experience that suited
                            both the user-base and the client requirements.
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
                            After settling on a user experience that exhibited
                            the boutique nature of the brand, we fleshed out the
                            final design.
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
                  </div>
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
                  />
                </div>
              </div>

              <div className="prev-work-listing">
                <div className="columns">
                  <div className="column is-offset-one-fifth-desktop is-one-fifth-desktop is-offset-0-tablet is-two-fifths-tablet is-8-mobile image-holder">
                    <img
                      src="/images/logos/good-omen-films.svg"
                      alt="Good Omen Films logo"
                    />
                  </div>
                  <div className="column is-three-fifths">
                    <h2>Filmmaking Brand & Website Re-Design</h2>
                    <p>
                      This filmmaking duo from Toronto needed to refresh their
                      brand identity and to launch a new website for a major
                      market push.
                    </p>
                    <p>
                      <strong>Design Toolkit:</strong> Wireframing, Hi-Fi
                      Prototypes
                    </p>
                    <p>
                      <strong>Tech Stack:</strong> CSS, JQuery
                    </p>
                    <div className="tags-list">
                      <Tag text="Design" icon="design" />
                      <Tag text="Prototype" icon="prototype" />
                      <Tag text="Develop" icon="develop" />
                    </div>

                    <ContentModal buttonText="View More Info">
                      <div className="columns">
                        <div className="column is-one-fifth-desktop is-two-fifths-tablet is-8-mobile">
                          <img
                            src="/images/logos/good-omen-films.svg"
                            alt="Good Omen Films logo"
                          />
                        </div>
                        <div className="column is-three-fifths">
                          <h2>Filmmaking Brand & Website Re-Design</h2>
                          <p>
                            <strong>Client:</strong> Good Omen Films
                          </p>
                          <p>
                            <strong>Duration:</strong> 2 Months
                          </p>
                          <p>
                            <strong>Design Toolkit:</strong> Wireframing, Hi-Fi
                            Prototypes
                          </p>
                          <p>
                            <strong>Tech Stack:</strong> CSS, JQuery
                          </p>
                          <div className="tags-list">
                            <Tag text="Design" icon="design" />
                            <Tag text="Prototype" icon="prototype" />
                            <Tag text="Develop" icon="develop" />
                          </div>
                          <div className="column is-5">
                            <a
                              className="button"
                              href="http://www.goodomenfilms.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Live Website
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-half">
                          <h2>Design</h2>
                          <p>
                            {`My co-founder Mustafa and I used client briefs to
                            build a brand strategy and a website for Good Omen
                            Films, working in tandem to deliver brand elements
                            that aligned with the client's vision.`}
                          </p>
                        </div>
                      </div>
                      <div className="columns is-centered">
                        <div className="column is-half">
                          <ImageModal
                            img={{
                              src: '/images/j-work/good-omen-films/screen-01.jpg',
                              alt: 'Good Omen Films Website Design',
                            }}
                          />
                        </div>
                      </div>
                      <div className="columns is-reverse is-gapless">
                        <div className="column is-3">
                          <a
                            className="button"
                            href="http://goodomenfilms.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Live Website
                          </a>
                        </div>
                      </div>
                    </ContentModal>
                  </div>
                </div>
              </div>

              <div className="prev-work-listing">
                <div className="columns">
                  <div className="column is-one-fifth-desktop is-two-fiths-tablet is-8-mobile image-holder">
                    <img
                      src="/images/logos/jellyfish.svg"
                      style={{ width: '100%' }}
                      alt="Jellyfish Logo"
                    />
                  </div>
                  <div className="column is-three-fifths">
                    <h2>A Design Firm Website</h2>
                    <p>
                      Mustafa Hussain, my co-founder with Jellyfish and probably
                      the best designer I have ever worked with, came up with
                      this brilliant branding and web-design for our firm. I
                      made sure to execute it as closely as Mustafa envisioned
                      it.
                    </p>
                    <p>
                      <strong>Design Toolkit:</strong> Wireframing, Hi-Fi
                      Prototypes
                    </p>
                    <p>
                      <strong>Tech Stack:</strong> SCSS, JQuery, Ruby
                      (Middleman)
                    </p>
                    <div className="tags-list">
                      <Tag text="Prototype" icon="prototype" />
                      <Tag text="Develop" icon="develop" />
                    </div>
                    <a
                      href="http://jellyfish.com.pk"
                      className="button column is-4-desktop is-6-tablet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Website
                    </a>
                  </div>
                  <Annotation
                    text="this was my firm! We worked to bring design thinking into a space where it was seldom heard of!"
                    style={{
                      width: 310,
                      left: 0,
                      bottom: -247,
                    }}
                    arrowProps={{
                      translate: '30px, 270px',
                      rotate: '220deg',
                    }}
                    textRotate="-15deg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
