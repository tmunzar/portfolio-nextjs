import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Annotation from '../src/components/Annotation'
import Button from '../src/components/Button'
import ImageModal from '../src/components/ImageModal'
import ArticleHeader from '../src/components/ArticleHeader'

const StardogStudioPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Engineering UX in a B2B environment for a technical audience - Talal
          Munzar - Engineer, Designer, Developer of human-centered & joyful
          digital experiences.
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <ArticleHeader
          title={
            <>
              Engineering a User Experience for <br /> a technical audience
            </>
          }
          description="As a UX Engineer at Stardog, I was tasked to design &
                  implement the second iteration of Stardog Studio after its
                  first UI release failed with its audience."
          img={{
            src: '/images/stardog-studio/screen-01.jpg',
            alt: 'Screen of the workspace section of Stardog Studio, a Graph Database querying application.',
          }}
          tags={[
            { text: 'Engineer', icon: 'develop' },
            { text: 'Design', icon: 'design' },
            { text: 'Prototype', icon: 'prototype' },
          ]}
        >
          <p>
            <strong>Role:</strong> UX Engineer
          </p>
          <p>
            <strong>Product:</strong> Stardog Studio
          </p>
          <p>
            <strong>Collaborators:</strong> Customer Success, Sales Engineers,
            Front-End Engineers, Backend Engineers
          </p>
          <p>
            <strong>Duration:</strong> 3 Months
          </p>
        </ArticleHeader>

        <section>
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-two-fifths">
                <div className="text-block">
                  <h2>
                    What is Stardog &<br />
                    Stardog Studio?
                  </h2>
                  <p>
                    Stardog is a Knowledge Graph data storage and unification
                    platform which uses SPARQL for data querying purposes.
                    Typically, a user would use the Command Line Terminal to
                    query Stardog, but with “Stardog Studio” users can query
                    their Stardog instance using a feature-rich IDE-like desktop
                    application.
                  </p>
                </div>

                <div className="text-block margin-top-100-mid">
                  <h2>The Problem</h2>
                  <p>
                    Stardog Studio’s first release was met with negative user
                    feedback as there was no user-centered process to settle on
                    its design. The release featured a{' '}
                    <Link
                      href="https://jupyter.org/try-jupyter/retro/notebooks/?path=notebooks/Intro.ipynb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jupyter
                    </Link>
                    -like notebook design, which as it turned out wasn’t how
                    Stardog users preferred using Studio.
                  </p>
                  <p>
                    The challenge ahead was to ensure that the next iteration of
                    Stardog Studio wasn’t an end-user failure.
                  </p>
                </div>
              </div>

              <div className="column is-offset-1 is-two-fifths">
                <div className="relative">
                  <img
                    src="/images/stardog-studio/stardog-query-diagram-01.png"
                    alt="A diagram of how Stardog can be queried, either via the Command Line or Stardog Studio."
                    className="dm-invert"
                  />
                  <Annotation
                    text="this is where all the graph data is stored"
                    textRotate="-15deg"
                    style={{
                      width: 150,
                      top: -170,
                      left: 30,
                    }}
                    arrowProps={{ translate: '10px, 20px' }}
                    animProps={{
                      onScroll: true,
                    }}
                    className="offset-margin-top-neg-20-tablet"
                    color="primary"
                  />
                  <Annotation
                    text="this is where you can query the data from"
                    textRotate="-15deg"
                    style={{
                      width: 170,
                      top: 40,
                      left: -140,
                    }}
                    arrowProps={{ translate: '50px, 40px', rotate: '-40deg' }}
                    animProps={{
                      animDelay: 200,
                      onScroll: true,
                    }}
                    className="offset-margin-top-neg-60-tablet"
                    color="primary"
                  />
                  <Annotation
                    text="this is where you can also query your data, but more easily (or at least it should be)"
                    textRotate="-15deg"
                    style={{
                      width: 200,
                      top: -120,
                      right: -100,
                    }}
                    arrowProps={{
                      translate: '-70px, 30px',
                      rotate: '20deg',
                      flip: true,
                    }}
                    animProps={{
                      animDelay: 400,
                      onScroll: true,
                    }}
                    color="primary"
                    className="offset-margin-top-neg-40-tablet offset-margin-right-neg-20-tablet"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="is-primary">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-two-fifths">
                <img
                  src="/images/stardog-studio/user-research-doodle-01.png"
                  style={{
                    width: '85%',
                  }}
                  alt="A doodle of me having trouble doing user research"
                />
              </div>
              <div className="column is-half">
                <h2>How to gather user-data without users?</h2>
                <p>
                  The tricky part about trying to do user research at a
                  Business-to-Business (B2B) organization is that you have
                  limited access to end-users. This is because clients can be
                  hesitant to give access to their employees to a vendor looking
                  to conduct research.
                </p>
                <p>
                  Due to the sensitive nature of the data that most of Stardog’s
                  client’s deal with, the organization was hesitant to ask its
                  end-users and customers to be open to user testing and
                  interviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h2>With some guerilla research!</h2>
                <p>
                  {`Here's how I went about solving the lack of research problem,
                  with some inner-company guerilla activity:`}
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column is-offset-one-fifth is-one-fifth is-7-mobile">
                <img
                  src="/images/stardog-studio/cus-suc-doodle-01.png"
                  alt="A doodle of me interacting with customer success."
                  className="dm-invert"
                />
              </div>
              <div className="column is-two-fifths">
                <p>
                  I built a working relationship with Customer Success, and they
                  connected me with some end users (albeit after some pestering
                  on my part).
                </p>
              </div>
            </div>

            <div className="columns margin-top-50-mobile">
              <div className="column is-one-fifth is-8-mobile">
                <img
                  src="/images/stardog-studio/sales-team-doodle-01.png"
                  style={{ width: '80%' }}
                  alt="A doodle of the sales team."
                  className="dm-invert"
                />
              </div>
              <div className="column is-two-fifths">
                <p>
                  I reached out to the Sales Team to see if they had any
                  customer notes from their calls. Considering the
                  circumstances, this gave me some great initial user-data to
                  work with.
                </p>
              </div>
            </div>

            <div className="columns margin-top-50-mobile">
              <div className="column is-offset-one-fifth is-one-fifth is-8-mobile">
                <img
                  src="/images/stardog-studio/three-users-doodle-01.png"
                  alt="A doodle of 3 Stardog Studio end-users."
                  className="dm-invert"
                />
              </div>
              <div className="column is-two-fifths relative">
                <p className="relative">
                  Finally, I managed to get a hold of 3 end-users, through sheer
                  communication and perseverance. Stardog had working relations
                  with a couple of partner organizations, whose employees would
                  use Stardog and/or Stardog Studio regularly.
                </p>
                <Annotation
                  text="I found end-users by just looking in the right place!"
                  textRotate="-15deg"
                  style={{
                    width: 190,
                    top: -140,
                    right: -50,
                  }}
                  arrowProps={{
                    translate: '-110px, 0px',
                    flip: true,
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                  className="offset-margin-right-neg-40-tablet"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="is-grey">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h2>Sketch Work</h2>
                <p>
                  {`While I was researching I had already started sketching up
                  some design ideas for the IDE. Here's a sample:`}
                </p>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-half relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/sketch-01.jpg',
                    alt: 'Stardog Studio Workspace',
                    style: {
                      boxShadow: '0 0 10px #ccc',
                    },
                  }}
                />
                <Annotation
                  text="a little rough around the edges but it got the idea across!"
                  style={{
                    width: 190,
                    top: -170,
                    right: -100,
                  }}
                  textRotate="-20deg"
                  arrowProps={{
                    translate: '-90px, 20px',
                    rotate: '20deg',
                    flip: true,
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h2>Lo-fi Prototypes</h2>
                <p>
                  I used one end-user for a user interview to gather some
                  additional user data, and then used that to inform the design
                  of 3 prototypes, each of which asked a broader design
                  question:
                </p>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-half">
                <h3 className="text-center">
                  Do we want a design with ‘Global’ tabs, and the side
                  navigation only changes the sidebar?
                </h3>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/global-tabs-editor-01.png',
                    alt: 'Global Tabs - Editor View',
                  }}
                />
                <Annotation
                  text='queries, databases, users, roles, all live in the same "tabspace"'
                  textRotate="-10deg"
                  style={{
                    width: 210,
                    top: -120,
                    left: 70,
                  }}
                  className="offset-margin-left-neg-100-tablet"
                  color="primary"
                  arrowProps={{
                    translate: '-20px, -30px',
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                />
              </div>
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/global-tabs-db-view-01.png',
                    alt: 'Global Tabs - Database View',
                  }}
                />
                <Annotation
                  text="the main navigation only changes the sidebar"
                  textRotate="-10deg"
                  style={{
                    width: 210,
                    top: -30,
                    left: 40,
                  }}
                  color="primary"
                  arrowProps={{
                    translate: '-25px, 0px',
                    rotate: '-25deg',
                    flip: true,
                  }}
                  animProps={{
                    animDelay: 500,
                    onScroll: true,
                  }}
                />
              </div>
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/global-tabs-security-user-01.png',
                    alt: 'Global Tabs - Security User View',
                  }}
                />
                <Annotation
                  text="the sidebar changes but the tabs remain the same!"
                  textRotate="-10deg"
                  style={{
                    width: 210,
                    top: -120,
                    left: 110,
                  }}
                  color="primary"
                  arrowProps={{
                    translate: '-20px, -30px',
                  }}
                  animProps={{
                    animDelay: 1000,
                    onScroll: true,
                  }}
                />
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-half">
                <h3 className="text-center">
                  Do we want to divide each main navigation item into a section,
                  and have tabs for each section?
                </h3>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/section-specific-tabs-editor-01.png',
                    alt: 'Section Specific Tabs - Editor View',
                  }}
                />

                <Annotation
                  text="just query tabs!"
                  textRotate="-10deg"
                  style={{
                    width: 150,
                    top: -105,
                    left: 100,
                  }}
                  color="primary"
                  arrowProps={{
                    translate: '-20px, -30px',
                    rotate: '15deg',
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                />

                <Annotation
                  text='each section has its own "tabspace"'
                  textRotate="-10deg"
                  style={{
                    width: 210,
                    top: 100,
                    left: 110,
                  }}
                  color="primary"
                  arrowProps={{
                    translate: '85px, 20px',
                    rotate: '-50deg',
                    flip: true,
                  }}
                  animProps={{
                    animDelay: 300,
                    onScroll: true,
                  }}
                />
              </div>
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/section-specific-tabs-db-view-01.png',
                    alt: 'Section Specific Tabs - Database View',
                  }}
                />

                <Annotation
                  text="this is a permanent tab!"
                  textRotate="-10deg"
                  style={{
                    width: 180,
                    top: -40,
                    left: 220,
                  }}
                  color="primary"
                  className="offset-margin-left-neg-60-tablet"
                  arrowProps={{
                    translate: '90px, 20px',
                    rotate: '-45deg',
                    flip: true,
                  }}
                  animProps={{
                    animDelay: 400,
                    onScroll: true,
                  }}
                />
              </div>
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/section-specific-tabs-security-user-01.png',
                    alt: 'Section Specific Tabs - Security User View',
                  }}
                />

                <Annotation
                  text="no need for specific tab icons"
                  textRotate="-10deg"
                  style={{
                    width: 180,
                    top: -70,
                    left: 180,
                  }}
                  className="offset-margin-left-neg-30-tablet offset-margin-top-neg-10-tablet"
                  color="primary"
                  arrowProps={{
                    translate: '-50px, 60px',
                    rotate: '80deg',
                  }}
                  animProps={{
                    animDelay: 600,
                    onScroll: true,
                  }}
                />
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-half">
                <h3 className="text-center">
                  Or do tabs & a sidebar only work for the main IDE-like query
                  writing workspace?
                </h3>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/editor-only-tabs-editor-02.png',
                    alt: 'Editor Only Tabs - Editor View',
                  }}
                />

                <Annotation
                  text="just query tabs (again)!"
                  textRotate="-10deg"
                  style={{
                    width: 150,
                    top: -105,
                    left: 100,
                  }}
                  className="offset-margin-left-neg-20-tablet"
                  color="primary"
                  arrowProps={{
                    translate: '-30px, -10px',
                    rotate: '15deg',
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                />
              </div>
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/editor-only-tabs-db-view-01.png',
                    alt: 'Editor Only Tabs - Database View',
                  }}
                />

                <Annotation
                  text="no tabs, but instead a single section to navigate your databases"
                  textRotate="-10deg"
                  style={{
                    width: 250,
                    top: -10,
                    left: 100,
                  }}
                  className="offset-margin-left-neg-40-tablet offset-margin-top-neg-20-tablet"
                  color="primary"
                  arrowProps={{
                    translate: '-30px, -10px',
                    rotate: '15deg',
                  }}
                  animProps={{
                    animDelay: 300,
                    onScroll: true,
                  }}
                />
              </div>
              <div className="column relative">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/editor-only-tabs-security-user-01.png',
                    alt: 'Editor Only Tabs - Security User View',
                  }}
                />

                <Annotation
                  text="a two tab split between users and roles"
                  textRotate="-10deg"
                  style={{
                    width: 250,
                    top: -100,
                    left: 100,
                  }}
                  color="primary"
                  arrowProps={{
                    translate: '-30px, -10px',
                    rotate: '15deg',
                  }}
                  animProps={{
                    animDelay: 600,
                    onScroll: true,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="is-primary">
          <div className="container">
            <div className="columns">
              <div className="column is-half relative">
                <h2>Validating the Designs</h2>
                <p>
                  I gained validation for which design direction to proceed with
                  by user testing with both <u>internal stakeholders</u> and
                  external users.
                </p>
                <Annotation
                  text="internal stakeholders were users considering the circumstances"
                  textRotate="-10deg"
                  color="white"
                  style={{
                    width: 270,
                    right: -50,
                    top: -70,
                  }}
                  arrowProps={{
                    translate: '-90px, 30px',
                    rotate: '65deg',
                  }}
                  animProps={{
                    onScroll: true,
                  }}
                />
                <p>
                  There was an almost unanimous consensus that the workspace
                  section would be the only one with tabs. It was also clear
                  that users would prefer to keep the sidebars for each section.
                </p>
                <p>
                  There was some positive feedback about the quick nature of
                  being able to switch from a database to query writing in the
                  global tabs version.
                </p>
              </div>
              <div className="column">
                <div className="columns is-centered is-multiline">
                  <div className="column is-5">
                    <ImageModal
                      img={{
                        src: '/images/stardog-studio/editor-only-tabs-editor-02.png',
                        alt: 'Global Tabs - Editor View',
                      }}
                    />
                  </div>
                  <div className="column is-5">
                    <ImageModal
                      img={{
                        src: '/images/stardog-studio/editor-only-tabs-db-view-01.png',
                        alt: 'Editor Only Tabs - Database View',
                      }}
                    />
                  </div>
                  <div className="column is-5">
                    <ImageModal
                      img={{
                        src: '/images/stardog-studio/section-specific-tabs-security-user-01.png',
                        alt: 'Section Specific Tabs - Security User View',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="is-secondary">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2>The Final Implementation</h2>
                <p>
                  I engineered the UI in an ElectronJS/React/Redux environment,
                  using BlueprintJS for the core design system & SCSS to
                  implement customized styling, as well as developing additional
                  reusable UI components for the application.
                </p>
              </div>
              <div className="column">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/screen-01.jpg',
                    alt: 'Final Design - Editor View',
                  }}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/screen-03.jpg',
                    alt: 'Final Design - Databases View',
                  }}
                />
              </div>
              <div className="column">
                <ImageModal
                  img={{
                    src: '/images/stardog-studio/screen-02.jpg',
                    alt: 'Final Design - Security View',
                  }}
                />
              </div>
            </div>
            <div className="columns is-reverse">
              <div className="column is-3">
                <Link
                  href="https://www.stardog.com/studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <Button>Go to Stardog Studio</Button>
                </Link>
              </div>
            </div>
            <div className="columns"></div>
          </div>
        </section>

        <footer></footer>
      </article>
    </>
  )
}

export default StardogStudioPage
